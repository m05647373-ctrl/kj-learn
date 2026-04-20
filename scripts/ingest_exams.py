#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
历年初级会计真题批量清洗 · Word/PDF → exams.js 数据结构

用法:
    python3 ingest_exams.py --input samples/raw_2024.txt
    python3 ingest_exams.py --input samples/raw_2024.docx
    python3 ingest_exams.py --input samples/raw_2024.pdf
    python3 ingest_exams.py --dry-run   # 只走内置样例，不写盘
    python3 ingest_exams.py --demo      # 用内置 20 道仿真真题生成 data/exams_extra.js

设计要点:
    1. 统一先抽文本，再按正则切题；docx 用 python-docx，pdf 用 pdfminer.six。
       若未安装依赖，脚本会直接给出明确报错，不会自动装包。
    2. 题干识别锚点：
           ^\\s*(\\d+)[．\\.、)]\\s*         或   ^\\s*【\\d+】
       选项锚点: ^\\s*([A-D])[．\\.、)]\\s*
       答案锚点: ^答案[：:]\\s*([A-D]+) 或 正确答案[：:]…
       解析锚点: ^解析[：:]\\s*
    3. 自动判定题型:
           single  -> 答案长度 == 1
           multi   -> 答案长度 >= 2（不定项/多选）
    4. 去重: 基于题干前 40 字的哈希。
    5. 输出两份产物:
           data/exams_extra.js         追加合并后最终题库（覆盖写入）
           tmp/ingest_report.json      本次清洗报告（新增/去重/失败数）
"""

from __future__ import annotations
import argparse
import hashlib
import json
import os
import re
import sys
import textwrap
from dataclasses import dataclass, asdict, field
from pathlib import Path
from typing import List, Optional

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = PROJECT_ROOT / "data"
TMP_DIR = PROJECT_ROOT / "tmp"
TMP_DIR.mkdir(parents=True, exist_ok=True)

# --------- 数据结构 ---------
@dataclass
class Exam:
    id: str
    subject: str           # '实务' / '经济法'
    year: int
    topic: str
    stem: str
    options: List[dict]    # [{label,text,is_correct}]
    analysis: str = ""
    interaction_type: str = "multi"   # 'single' / 'multi'

    def digest(self) -> str:
        return hashlib.md5(self.stem[:40].encode("utf-8")).hexdigest()


# --------- 文本抽取 ---------
def extract_text(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix in {".txt", ".md"}:
        return path.read_text(encoding="utf-8", errors="ignore")
    if suffix == ".docx":
        try:
            from docx import Document  # python-docx
        except ImportError:
            sys.exit("需要 python-docx: pip install python-docx")
        doc = Document(str(path))
        return "\n".join(p.text for p in doc.paragraphs)
    if suffix == ".pdf":
        try:
            from pdfminer.high_level import extract_text as pdf_text
        except ImportError:
            sys.exit("需要 pdfminer.six: pip install pdfminer.six")
        return pdf_text(str(path))
    sys.exit(f"不支持的文件类型: {suffix}")


# --------- 正则切题 ---------
RE_QNUM    = re.compile(r"^\s*(?:【\s*)?(\d+)\s*(?:】)?[．\.\、\)]\s*(.+)$")
RE_OPTION  = re.compile(r"^\s*([A-D])\s*[．\.\、\)]\s*(.+)$")
RE_ANSWER  = re.compile(r"^\s*(?:正确答案|参考答案|答案)\s*[:：]\s*([A-D]{1,4})\s*$")
RE_ANALYSIS= re.compile(r"^\s*(?:解析|分析|说明)\s*[:：]\s*(.*)$")
RE_META    = re.compile(r"^\s*\[(?P<subject>实务|经济法)\s*[·\|]\s*(?P<year>\d{4})(?:\s*[·\|]\s*(?P<topic>[^\]]+))?\]\s*$")


def parse_exams(text: str, default_subject: str = "实务", default_year: int = 2024) -> List[Exam]:
    """把扁平化的真题文本切成 Exam 列表。每题之间用空行分隔最稳。"""
    # 先按题号切块
    lines = text.splitlines()
    exams: List[Exam] = []
    cur_subject = default_subject
    cur_year = default_year
    cur_topic = ""

    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        # 段落级元信息 [实务·2024·资产]
        m_meta = RE_META.match(line)
        if m_meta:
            cur_subject = m_meta.group("subject")
            cur_year = int(m_meta.group("year"))
            cur_topic = (m_meta.group("topic") or "").strip()
            i += 1
            continue

        m_num = RE_QNUM.match(line)
        if not m_num:
            i += 1
            continue

        # 找到一道题 → 收集到下一道题号或 EOF
        qnum = int(m_num.group(1))
        stem_parts = [m_num.group(2).strip()]
        options: List[dict] = []
        answer_labels: List[str] = []
        analysis = ""
        phase = "stem"
        i += 1
        while i < len(lines):
            nxt = lines[i].rstrip()
            if not nxt.strip():
                i += 1
                continue
            if RE_QNUM.match(nxt) or RE_META.match(nxt):
                break
            m_opt = RE_OPTION.match(nxt)
            m_ans = RE_ANSWER.match(nxt)
            m_an  = RE_ANALYSIS.match(nxt)
            if m_opt:
                phase = "opt"
                options.append({
                    "label": m_opt.group(1),
                    "text": m_opt.group(2).strip(),
                    "is_correct": False,
                })
            elif m_ans:
                phase = "ans"
                answer_labels = list(m_ans.group(1))
            elif m_an:
                phase = "analysis"
                analysis = m_an.group(1).strip()
            else:
                if phase == "stem":
                    stem_parts.append(nxt.strip())
                elif phase == "opt" and options:
                    options[-1]["text"] += nxt.strip()
                elif phase == "analysis":
                    analysis += nxt.strip()
            i += 1

        # 校验
        if len(options) < 2 or not answer_labels:
            continue
        for opt in options:
            if opt["label"] in answer_labels:
                opt["is_correct"] = True

        itype = "single" if len(answer_labels) == 1 else "multi"
        exam = Exam(
            id=f"{'S' if cur_subject=='实务' else 'E'}{cur_year}-{qnum:02d}",
            subject=cur_subject,
            year=cur_year,
            topic=cur_topic,
            stem=" ".join(stem_parts).strip(),
            options=options,
            analysis=analysis,
            interaction_type=itype,
        )
        exams.append(exam)

    return exams


# --------- 去重合并 ---------
def load_existing() -> List[dict]:
    """解析现有 exams.js 的 window.EXAMS = [...] ，返回 list[dict]。

    采用「剥壳取 JSON」策略：把 JS 数据段转成合法 JSON 再 json.loads。
    仅支持我们自己产出的受控格式（单引号、无尾逗号的 JS 对象字面量）。
    """
    path = DATA_DIR / "exams.js"
    if not path.exists():
        return []
    src = path.read_text(encoding="utf-8")
    m = re.search(r"window\.EXAMS\s*=\s*(\[.*\]);", src, flags=re.S)
    if not m:
        return []
    body = m.group(1)
    # 去注释
    body = re.sub(r"/\*.*?\*/", "", body, flags=re.S)
    body = re.sub(r"//.*?$", "", body, flags=re.M)
    # 单引号 → 双引号（仅用于数据字面量；字符串内本身都是中文引号，安全）
    body = body.replace("'", '"')
    # 对象键加引号： 把 `  foo:` 变成 `  "foo":`
    body = re.sub(r"([\{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:", r'\1"\2":', body)
    # 去尾逗号
    body = re.sub(r",(\s*[\]\}])", r"\1", body)
    try:
        return json.loads(body)
    except Exception as e:
        print(f"[warn] 现有 exams.js 解析失败，降级为空：{e}")
        return []


def dedupe_merge(old: List[dict], new: List[Exam]) -> tuple[list, int, int]:
    seen = {hashlib.md5((q.get("stem") or "")[:40].encode("utf-8")).hexdigest()
            for q in old}
    merged = list(old)
    added = 0
    dup = 0
    for ex in new:
        key = ex.digest()
        if key in seen:
            dup += 1
            continue
        seen.add(key)
        merged.append(asdict(ex))
        added += 1
    return merged, added, dup


# --------- 序列化为 JS ---------
def dump_js(exams: List[dict], out_path: Path):
    """把 exams 写回 window.EXAMS 格式的 JS 文件，中文引号避免嵌套冲突。"""
    lines = [
        "/**",
        " * 初级会计历年真题库（自动合并）",
        " * 由 scripts/ingest_exams.py 生成，请勿手工编辑 window.EXAMS 以外的内容。",
        " */",
        "window.EXAMS = [",
    ]
    for q in exams:
        opts = ",\n".join(
            f"      {{ label: '{o['label']}', text: '{_js_escape(o['text'])}', is_correct: {str(o['is_correct']).lower()} }}"
            for o in q["options"]
        )
        lines.append("  {")
        lines.append(f"    id: '{q['id']}',")
        lines.append(f"    subject: '{q['subject']}',")
        lines.append(f"    year: {int(q['year'])},")
        lines.append(f"    topic: '{_js_escape(q.get('topic',''))}',")
        lines.append(f"    interaction_type: '{q.get('interaction_type','multi')}',")
        lines.append(f"    stem: '{_js_escape(q['stem'])}',")
        lines.append("    options: [")
        lines.append(opts)
        lines.append("    ],")
        lines.append(f"    analysis: '{_js_escape(q.get('analysis',''))}'")
        lines.append("  },")
    if lines[-1].endswith(","):
        lines[-1] = lines[-1][:-1]
    lines.append("];")
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _js_escape(s: str) -> str:
    # 文本里禁止出现裸 ASCII 单引号；若有就替换成中文单引号
    return (s or "").replace("\\", "\\\\").replace("'", "’").replace("\n", " ").strip()


# --------- 内置样例（不依赖外部文件，保证管道 demo 能跑） ---------
DEMO_RAW = textwrap.dedent("""
[实务·2024·资产]
1. 下列各项中，应当计入存货成本的是（ ）。
A. 采购过程中发生的运输费
B. 仓储部门日常管理费用
C. 非正常消耗的直接材料
D. 采购过程中支付的装卸费
答案：AD
解析：存货成本 = 买价 + 运杂费 + 装卸费 + 保险费等；B 属期间费用、C 非正常消耗计入损益。

[实务·2024·固定资产]
2. 下列关于固定资产折旧的说法，正确的是（ ）。
A. 当月增加的固定资产，当月计提折旧
B. 当月减少的固定资产，当月照提折旧
C. 已提足折旧仍使用的，不再计提
D. 已达到预定可使用状态但未办理竣工决算的，不计提折旧
答案：BC
解析：A 错当月增加下月提；D 错按暂估价入账并计提。

[实务·2024·负债]
3. 下列各项中属于流动负债的有（ ）。
A. 应付票据
B. 预计负债（诉讼赔付，预计 3 年后支付）
C. 应交税费
D. 一年内到期的长期借款
答案：ACD
解析：B 预计在 3 年后支付属非流动负债。

[实务·2024·所有者权益]
4. 下列各项中，会引起所有者权益总额发生变动的是（ ）。
A. 宣告分配现金股利
B. 盈余公积转增资本
C. 计提法定盈余公积
D. 接受投资者资本投入
答案：AD
解析：B 内部结构变动；C 是利润分配环节，影响利润分配而非所有者权益总额。

[实务·2024·收入]
5. 下列各项中应确认为其他业务收入的有（ ）。
A. 出售原材料收入
B. 出租包装物租金（非主营）
C. 销售自产产品
D. 出让无形资产使用权（非主营）
答案：ABD
解析：C 属主营业务收入。

[实务·2024·费用]
6. 下列各项中，应计入管理费用的是（ ）。
A. 业务招待费
B. 董事会费
C. 新产品研究费用（研究阶段）
D. 工厂生产车间机物料消耗
答案：ABC
解析：D 计入制造费用。

[实务·2024·财务报表]
7. 下列各项中，应列入利润表「营业利润」计算的是（ ）。
A. 投资收益
B. 资产处置损益
C. 营业外收入
D. 信用减值损失
答案：ABD
解析：C 营业外收入在营业利润下面单独列示，不参与营业利润计算。

[实务·2023·会计基础]
8. 下列各项中属于会计要素的是（ ）。
A. 资产
B. 应收账款
C. 收入
D. 利润
答案：ACD
解析：B 是具体会计科目，不是会计要素本身。

[实务·2023·存货]
9. 下列各项中，应在月末结转其成本的有（ ）。
A. 销售商品
B. 销售材料
C. 在产品
D. 对外提供劳务
答案：ABD
解析：C 在产品月末仍在库，不结转销售成本。

[实务·2023·固定资产]
10. 下列各项支出中，可直接计入当期损益的是（ ）。
A. 生产车间日常维修费
B. 办公楼大修理支出（受益期 3 年以上）
C. 行政办公设备折旧
D. 生产设备的更新改造
答案：AC
解析：B 资本化；D 资本化计入固定资产原值。

[经济法·2024·增值税]
11. 下列业务中，适用增值税 9% 税率的有（ ）。
A. 销售交通运输服务
B. 销售建筑服务
C. 销售不动产
D. 销售现代服务
答案：ABC
解析：D 现代服务税率 6%。

[经济法·2024·消费税]
12. 下列各项中，属于消费税征税范围的有（ ）。
A. 烟丝
B. 高档化妆品
C. 普通护肤品
D. 小汽车
答案：ABD
解析：C 普通护肤品不征消费税（仅高档化妆品才征）。

[经济法·2024·个人所得税]
13. 下列所得中，属于综合所得范围的有（ ）。
A. 工资薪金
B. 劳务报酬
C. 稿酬
D. 特许权使用费
答案：ABCD
解析：综合所得=工资薪金+劳务报酬+稿酬+特许权使用费，四项合并按年计税。

[经济法·2024·支付结算]
14. 下列关于支票的表述，正确的有（ ）。
A. 提示付款期限自出票日起 10 日
B. 现金支票只能用于支取现金
C. 转账支票既可取现也可转账
D. 出票金额可由出票人授权补记
答案：ABD
解析：C 错，转账支票不得支取现金。

[经济法·2024·劳动合同]
15. 下列情形中，用人单位可以解除劳动合同且无需支付经济补偿的有（ ）。
A. 试用期不符合录用条件
B. 严重违反规章制度
C. 被依法追究刑事责任
D. 严重失职给用人单位造成重大损害
答案：ABCD
解析：以上四项均属过错性解除，无需支付经济补偿。

[经济法·2023·会计法]
16. 下列会计档案保管期限为 30 年的是（ ）。
A. 原始凭证
B. 总账
C. 明细账
D. 年度财务会计报告
答案：ABC
解析：D 年度财务会计报告永久保管。

[经济法·2023·税收征管]
17. 下列各项中，属于税款加收滞纳金情形的是（ ）。
A. 未按规定期限缴纳税款
B. 核定税额有异议缴款后申请复议
C. 因纳税人失误少缴税款
D. 因税务机关责任少缴税款
答案：AC
解析：B 属于复议程序；D 因税务机关责任的少缴税款，不加收滞纳金。

[经济法·2023·社保]
18. 下列社会保险中，由用人单位全额缴费的有（ ）。
A. 基本养老保险
B. 工伤保险
C. 生育保险
D. 基本医疗保险
答案：BC
解析：养老、医疗、失业由单位与个人共同缴纳；工伤、生育由单位全额承担。

[经济法·2023·票据]
19. 票据权利时效，正确的有（ ）。
A. 持票人对出票人汇票权利 2 年
B. 持票人对出票人支票权利 6 个月
C. 持票人对前手追索权自被拒付日起 6 个月
D. 再追索权自清偿日或被起诉之日起 3 个月
答案：ABCD
解析：四项时效均为法定标准，属于高频考点。

[经济法·2022·增值税]
20. 下列纳税人发生的下列行为中，视同销售的是（ ）。
A. 将自产产品用于集体福利
B. 将外购货物用于职工个人消费
C. 将自产产品无偿赠送他人
D. 将外购货物用于本企业连续生产
答案：AC
解析：B 外购用于集体福利/个人消费属进项不得抵扣而非视同销售；D 内部生产不视同销售。
""").strip()


# --------- 主流程 ---------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", type=str, help="输入 txt/docx/pdf 路径")
    ap.add_argument("--demo", action="store_true", help="使用内置 20 道仿真真题跑全量")
    ap.add_argument("--dry-run", action="store_true", help="仅解析统计，不写回 data/")
    ap.add_argument("--out", type=str, default="data/exams.js",
                    help="合并后输出路径（默认覆盖 data/exams.js）")
    args = ap.parse_args()

    if args.input:
        text = extract_text(Path(args.input))
    elif args.demo:
        text = DEMO_RAW
    else:
        ap.error("需要 --input 或 --demo")
        return

    parsed = parse_exams(text)
    existing = load_existing()
    merged, added, dup = dedupe_merge(existing, parsed)

    report = {
        "parsed": len(parsed),
        "existing": len(existing),
        "added": added,
        "duplicated": dup,
        "total_after_merge": len(merged),
        "single_count": sum(1 for q in merged if q.get("interaction_type") == "single"),
        "multi_count": sum(1 for q in merged if q.get("interaction_type") != "single"),
    }

    (TMP_DIR / "ingest_report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(json.dumps(report, ensure_ascii=False, indent=2))

    if args.dry_run:
        print("[dry-run] 未写回 data/exams.js")
        return

    out_path = PROJECT_ROOT / args.out
    dump_js(merged, out_path)
    print(f"已写入: {out_path.relative_to(PROJECT_ROOT)} （共 {len(merged)} 题）")


if __name__ == "__main__":
    main()
