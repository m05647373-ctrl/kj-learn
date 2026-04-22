#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
kj-learn v4 练习题库增量生成器（安全模式）
============================================

【一句话说明】
本脚本把下方 QUESTIONS 列表里的题目，**安全增量追加**到 data/practice.js。
已存在的 practice_id 会自动跳过，绝不重复或污染原有数据。

【运行方法】
    cd /path/to/kj-learn
    python3 _tools/build_practice.py

【输出示例】
    ✅ 增量追加 9 题到 data/practice.js
       ⏭  跳过已存在：18 题
       脚本中题数：27（脚本本轮覆盖 lesson [1, 2, 3]）
       practice.js 总题数：36
       ⚠️ 脚本未覆盖的课：[4, 5, 6, ...]

【数据格式（紧凑元组）】
    (pid, lid, ttype, level, hot_list, itype, prompt, options, explain)

    pid       int      practice_id 全局唯一。建议 lesson N 用 1000(N-1)1~1000(N-1)9
                       例：lesson 1 → 10001-10009；lesson 2 → 10011-10019；
                           lesson 3 → 10021-10029；... lesson 40 → 10391-10399
    lid       int      source_lesson_id（1-40）
    ttype     str      'concept' | 'calc' | 'journal' | 'law' | 'comprehensive'
    level     str      'basic' | 'improve' | 'exam'
    hot_list  list     高频考点标签数组（见 data/TAGS.md）
    itype     str      'single' | 'multi'
    prompt    str      题干
    options   list     选项列表
                       - single: [(text, is_correct), ...]   通常 4 项
                       - multi:  [(text, is_correct, label), ...] 通常 5 项 ABCDE
                                 label 可省略，会按位置自动填 ABCDE
    explain   str      答案解析

【pid 编号规则速查表】
    lesson 1  → 10001-10009    lesson 21 → 10201-10209
    lesson 2  → 10011-10019    lesson 22 → 10211-10219
    lesson 3  → 10021-10029    ...
    lesson N  → 1000(N-1)1 - 1000(N-1)9

【字符串注意事项】
    Python 单引号字符串内可以直接写中文标点：（）、，。「」 ''
    不能写 ASCII 单引号 '，需要用 \\' 转义或换成中文 ''。
    渲染到 JS 时会自动 escape。

【下一轮如何让 AI 继续填题】
    告诉助手「按 build_practice.py 的格式给 lesson X-Y 填题」，
    把生成的 (pid, lid, ...) 元组粘到下方 QUESTIONS += [...] 里即可。
"""
import os, sys

OUTPUT = 'data/practice.js'

# 题目数据将分批 append 到这个 list
QUESTIONS = []

# ============================================================
# lesson 1 · 认识「资产」
# ============================================================
QUESTIONS += [
(10001,1,'concept','basic',['six-elements'],'single','下列各项中，不属于资产的是（ ）。',
 [('银行存款',False),('应收账款',False),('应付账款',True),('原材料',False)],
 '应付账款是企业欠供应商的钱，属于负债，不是资产。'),
(10002,1,'concept','basic',['six-elements'],'single','下列各项中，企业拥有或控制并预期带来经济利益的资源是（ ）。',
 [('已签合同但货款未到的商品',False),('融资租入设备',True),('经营租入设备',False),('已报废的固定资产',False)],
 '融资租入设备虽无产权但企业实质控制，确认为资产；经营租入只是临时使用权，不入账。'),
(10003,1,'concept','improve',['six-elements'],'multi','下列各项中，符合资产定义的有（ ）。【漏选错选不得分】',
 [('已经报废待处理的固定资产',False,'A'),('融资租入的设备',True,'B'),('经营租入的设备',False,'C'),
  ('自行研发尚未形成成果的支出',False,'D'),('库存商品',True,'E')],
 '资产必须满足：①企业拥有或控制 ②过去交易形成 ③预期带来经济利益。已报废资产不再带来经济利益；研发未成功不达资本化条件。'),
(10004,1,'concept','basic',['six-elements'],'single','下列项目中，应列入流动资产的是（ ）。',
 [('固定资产',False),('无形资产',False),('应收账款',True),('长期股权投资',False)],
 '应收账款预计 1 年内收回，属于流动资产；其他三项是非流动资产。'),
(10005,1,'concept','basic',['six-elements'],'single','下列各项中，按流动性属于「最具流动性」的资产是（ ）。',
 [('库存商品',False),('应收票据',False),('库存现金',True),('短期投资',False)],
 '货币资金（库存现金、银行存款）流动性最强，可立即用于支付。'),
(10006,1,'concept','improve',['six-elements'],'single','某企业用银行存款购入一台设备，该笔业务（ ）。',
 [('使资产总额增加',False),('使资产总额减少',False),('使资产总额不变，仅资产内部一增一减',True),
  ('影响所有者权益',False)],
 '银行存款减少、固定资产增加，资产总额不变，是「资产内部一增一减」型业务。'),
(10007,1,'concept','improve',['six-elements'],'multi','下列各项中，属于企业流动资产的有（ ）。【漏选错选不得分】',
 [('货币资金',True,'A'),('应收账款',True,'B'),('存货',True,'C'),
  ('一年内到期的非流动资产',True,'D'),('长期股权投资',False,'E')],
 'A-D 都属于流动资产；E 长期股权投资属于非流动资产。'),
(10008,1,'concept','exam',['six-elements'],'single','【真题级】下列各项中，不属于资产基本特征的是（ ）。',
 [('由企业过去的交易或事项形成',False),('由企业拥有或控制',False),
  ('预期会给企业带来经济利益',False),('必须具有实物形态',True)],
 '资产不一定有实物形态，如商誉、专利权、应收账款都是资产但无实物。'),
(10009,1,'concept','exam',['six-elements'],'single','【真题级】企业从银行借入款项，会引起（ ）。',
 [('资产和负债同时增加',True),('资产增加，所有者权益增加',False),
  ('负债增加，所有者权益减少',False),('资产减少，负债减少',False)],
 '借款时银行存款（资产）增加、短期借款（负债）增加，符合「资产 = 负债 + 所有者权益」恒等式。'),
]

# ============================================================
# lesson 2 · 六大会计要素速辨
# ============================================================
QUESTIONS += [
(10011,2,'concept','basic',['six-elements'],'single','下列各项中，属于负债类科目的是（ ）。',
 [('应收账款',False),('实收资本',False),('应付职工薪酬',True),('库存商品',False)],
 '凡是「应付/预收/借款」类多为负债。'),
(10012,2,'concept','basic',['six-elements'],'single','下列各项中，属于所有者权益类科目的是（ ）。',
 [('资本公积',True),('应付债券',False),('预收账款',False),('应付利息',False)],
 '所有者权益四大件：实收资本、资本公积、盈余公积、未分配利润。'),
(10013,2,'comprehensive','improve',['six-elements'],'multi','下列科目中，属于所有者权益的有（ ）。【漏选错选不得分】',
 [('实收资本',True,'A'),('资本公积',True,'B'),('盈余公积',True,'C'),
  ('未分配利润',True,'D'),('短期借款',False,'E'),('应付票据',False,'F')],
 '所有者权益四大件：实收资本/资本公积/盈余公积/未分配利润。'),
(10014,2,'concept','improve',['six-elements'],'single','下列各项中，属于损益类科目的是（ ）。',
 [('应付账款',False),('销售费用',True),('固定资产',False),('应交税费',False)],
 '损益类 = 收入 + 费用 + 利润。销售费用属于费用类（损益类）。'),
(10015,2,'concept','basic',['six-elements'],'single','下列各项中，属于收入类科目的是（ ）。',
 [('营业外收入',False),('主营业务收入',True),('其他综合收益',False),('投资收益',False)],
 '收入仅指日常经营活动产生的经济利益流入，包括主营/其他业务收入。营业外收入和投资收益是利得，不属于收入。'),
(10016,2,'concept','improve',['six-elements'],'multi','下列各项中，属于费用类科目的有（ ）。【漏选错选不得分】',
 [('管理费用',True,'A'),('销售费用',True,'B'),('财务费用',True,'C'),
  ('营业外支出',False,'D'),('所得税费用',True,'E')],
 '费用类包括期间费用三费 + 所得税费用 + 主营业务成本等。营业外支出是损失，不属于费用。'),
(10017,2,'concept','basic',['six-elements'],'single','下列各项中，不属于会计六大要素的是（ ）。',
 [('资产',False),('负债',False),('现金',True),('利润',False)],
 '六大要素：资产/负债/所有者权益/收入/费用/利润。现金是资产的具体形式，不是要素。'),
(10018,2,'concept','exam',['six-elements'],'single','【真题级】下列各项中，引起所有者权益增加的是（ ）。',
 [('用银行存款偿还短期借款',False),('接受所有者投入的设备',True),
  ('计提固定资产折旧',False),('宣告分配现金股利',False)],
 '接受投资增加实收资本，权益增加；偿债是资产负债同减；折旧不影响权益；分股利减少未分配利润。'),
(10019,2,'comprehensive','exam',['six-elements'],'multi','【真题级】下列经济业务中，会引起会计等式两边同时增加的有（ ）。【漏选错选不得分】',
 [('从银行取得借款存入银行',True,'A'),('收到投资者投入的设备',True,'B'),
  ('用银行存款支付职工工资',False,'C'),('赊购原材料',True,'D'),
  ('计提应付银行借款利息',True,'E')],
 'A 资产↑负债↑；B 资产↑权益↑；C 资产↓负债↓（同减）；D 资产↑负债↑；E 资产↑（费用结转后影响权益）/负债↑——E 也算两边同增。C 是同减。'),
]

# ============================================================
# === RENDER：把 QUESTIONS 转成 practice.js
# ============================================================

JS_HEADER = '''/**
 * 练习题库（举一反三）—— 由 _tools/build_practice.py 生成
 * - 不影响原 lessons.js 闯关进度
 * - id 从 10001 起，按 source_lesson_id 分组挂回原课
 * - 每个 source_lesson_id 提供 9 道扩展题（与原题合计 10 题）
 *
 * 字段说明：
 *   practice_id        全局唯一
 *   source_lesson_id   挂回原课
 *   type               concept | calc | journal | law | comprehensive
 *   level              basic | improve | exam
 *   hot                高频考点标签数组（见 TAGS.md）
 *   interaction_type   single | multi
 *   prompt / options / explain
 */
window.PRACTICE = [];
window.PRACTICE.push(
'''

JS_FOOTER = ');\n'

ABC = 'ABCDEFGH'

def js_str(s):
    """把 Python 字符串转成 JS 单引号字符串，处理转义"""
    s = s.replace('\\', '\\\\').replace("'", "\\'")
    return "'" + s + "'"

def render_option(opt, idx, has_label):
    if len(opt) == 3:
        text, is_correct, label = opt
    elif len(opt) == 2:
        text, is_correct = opt
        label = ABC[idx] if has_label else None
    else:
        raise ValueError(f'bad option: {opt}')
    parts = []
    if label:
        parts.append(f"label: '{label}'")
    parts.append(f"text: {js_str(text)}")
    parts.append(f"is_correct: {'true' if is_correct else 'false'}")
    return "      { " + ', '.join(parts) + " }"

def render_question(q):
    pid, lid, ttype, level, hot, itype, prompt, opts, explain = q
    has_label = (itype == 'multi')
    hot_js = '[' + ', '.join(js_str(h) for h in hot) + ']'
    opts_js = ',\n'.join(render_option(o, i, has_label) for i, o in enumerate(opts))
    return f"""  {{
    practice_id: {pid}, source_lesson_id: {lid},
    type: '{ttype}', level: '{level}', hot: {hot_js},
    interaction_type: '{itype}',
    prompt: {js_str(prompt)},
    options: [
{opts_js}
    ],
    explain: {js_str(explain)}
  }}"""

def main():
    if not os.path.exists('data'):
        print(f"❌ 请在 kj-learn 项目根目录运行（找不到 data/ 目录）")
        sys.exit(1)

    # 智能合并：检测现有 practice.js 中已有的 practice_id，避免重复追加
    existing_pids = set()
    if os.path.exists(OUTPUT):
        with open(OUTPUT, 'r', encoding='utf-8') as f:
            existing_content = f.read()
        import re
        for m in re.finditer(r'practice_id:\s*(\d+)', existing_content):
            existing_pids.add(int(m.group(1)))

    new_questions = [q for q in QUESTIONS if q[0] not in existing_pids]
    skipped = len(QUESTIONS) - len(new_questions)

    if not new_questions:
        print(f"ℹ️  脚本中所有 {len(QUESTIONS)} 题在 practice.js 中已存在，无需追加")
        print(f"   现有题数：{len(existing_pids)}")
        return

    if not existing_pids:
        # 全新生成
        body = ',\n'.join(render_question(q) for q in new_questions)
        out = JS_HEADER + body + '\n' + JS_FOOTER
        with open(OUTPUT, 'w', encoding='utf-8') as f:
            f.write(out)
        print(f"✅ 全新生成 {OUTPUT}（{len(new_questions)} 题）")
    else:
        # 增量追加：把新题插到末尾的 ');' 前
        new_body = ',\n' + ',\n'.join(render_question(q) for q in new_questions)
        # 替换最后的 ');' 为 ',\n<new>\n);'
        idx = existing_content.rfind(');')
        if idx < 0:
            print(f"❌ 现有 {OUTPUT} 找不到 push 闭合 ');'，无法增量追加")
            sys.exit(2)
        merged = existing_content[:idx] + new_body + '\n' + existing_content[idx:]
        with open(OUTPUT, 'w', encoding='utf-8') as f:
            f.write(merged)
        print(f"✅ 增量追加 {len(new_questions)} 题到 {OUTPUT}")
        if skipped:
            print(f"   ⏭  跳过已存在：{skipped} 题")

    # 统计
    all_pids = existing_pids | {q[0] for q in new_questions}
    by_lesson = {}
    for q in QUESTIONS:
        by_lesson.setdefault(q[1], 0)
        by_lesson[q[1]] += 1
    print(f"   脚本中题数：{len(QUESTIONS)}（脚本本轮覆盖 lesson {sorted(by_lesson.keys())}）")
    print(f"   practice.js 总题数：{len(all_pids)}")
    missing = [l for l in range(1, 41) if l not in by_lesson]
    if missing:
        print(f"   ⚠️ 脚本未覆盖的课：{missing}")
    short = [l for l, n in by_lesson.items() if n < 9]
    if short:
        print(f"   ⚠️ 脚本中题数 < 9 的课：{short}")

if __name__ == '__main__':
    main()
