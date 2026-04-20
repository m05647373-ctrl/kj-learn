# 初级会计 · 交互式闯关学习站（v3 · 冲刺备考版）

对标 **SQLBolt** 的微粒化学习体验：不看长视频，通过 **点选分类 · 单选 · 不定项 · 填空 · 分录组装 · 拖拽分栏** 六种交互题型，在试错中掌握《初级会计实务》与《经济法基础》考点；v3 新增 **冲刺机考模式 + 大满贯账套推演 + 真题批量清洗管道**，真正按照 2026 考试场景收尾。

## v3 新特性（冲刺备考包）

| 能力 | 说明 | 入口 |
|------|------|------|
| **批量真题数据管道** | `scripts/ingest_exams.py` 正则清洗 docx / pdf / txt 历年真题 → 自动判别 single/multi → 去重合并写回 `data/exams.js` | `python3 scripts/ingest_exams.py --demo` 一键注入 20 道仿真样例 |
| **严格多选判分** | 新 `multi` 题型：必须选中集合与正确答案完全一致才得分，漏选 / 错选 / 多选一律判错 | 主线第 2 课「六大会计要素速辨（不定项）」 |
| **冲刺机考模式** | 右上角 Toggle 一键开启 105 分钟倒计时、全屏、悬浮计算器、隐藏所有即时反馈 / 解析；交卷后统一批改出分 | `exams.html` 顶部 ☑ 冲刺机考 |
| **大满贯账套推演** | 单月完整账务流程：原始凭证（发票/回单/工资表/折旧表） → 5 张记账凭证 → 月末三步结转 → 简易资产负债表 + 利润表 | `grandslam.html` |
| **逐题确认交互** | 真题页每题独立「确认此题」按钮，非机考模式下确认后立即显示对错 + 解析，更接近考场节奏 | `exams.html` |

## v2 基础能力（保留）

- 40 课：《实务》8 章 × 3 课 + 《经济法基础》8 章 × 2 课
- 拖拽题（科目 → 借/贷/资产/负债/权益等多栏）
- 强制错题清算：小节结束若错题箱非空，下一节首课锁定，必须重做全对才解锁
- 侧边目录按科目 + 章节两级分组

## 目录结构

```
kj-learn/
├── index.html           闯关主页
├── exams.html           真题库（机考模式 + 逐题确认，v3 升级）
├── grandslam.html       大满贯账套推演（v3 新增）
├── cheatsheet.html      速查表
├── assets/
│   ├── style.css        苹果风样式（含 v3 机考状态栏 / 计算器 / 账套）
│   └── app.js           渲染引擎（新增 renderMulti 分支）
├── data/
│   ├── lessons.js       40 课课程
│   ├── exams.js         真题库（30 题，由清洗管道合并）
│   └── grandslam.js     大满贯账套数据（v3 新增）
├── scripts/
│   └── ingest_exams.py  真题批量清洗管道（v3 新增）
└── README.md
```

## 题型清单（v3）

| 类型 | interaction_type | 数量 | 判分规则 |
|---|---|---|---|
| 科目分类 | `select` | 3 | 多选正确项集合 |
| 单选 | `single` | 30 | 任一错选即抖动，可再选 |
| 不定项（严格） | `multi` | 1 + 30 真题 | 选中集合与答案完全一致才得分 |
| 分录组装 | `journal` | 5 | 借贷必平 + 科目/金额逐行正确 |
| 拖拽分栏 | `drag` | 6 | 每栏内容完全匹配 |

## 机考模式工作流

1. `exams.html` 勾选 ☑ 冲刺机考 → 弹出二次确认
2. 进入全屏 + 顶部黑色状态栏 `机考模式 · 105:00 · 🖩 计算器 · 交卷 · 退出`
3. 正文区域 CSS `body.mock-mode` 切换：隐藏 `.feedback-bar / .tip-box / .solution-box / .exam-result / .exam-explain`
4. 每题独立「确认此题」仍可点，但确认后只显示 `已记录 · 机考模式，交卷后统一出分`
5. 到点或手动「交卷」→ 所有题锁定 → 统一批改 → `summary-box` 显示 `N/总数` 得分
6. 计算器：`C / ← / ( / ) / 数字 / + - × ÷ / =`，使用 `Function(str)` 但正则白名单 `[0-9+-*/().]` 防注入

## 大满贯账套推演流程

```
① 记账凭证 ──→ ② 月末结转 ──→ ③ 期末报表
  5 张原始凭证        三步损益结转        资产负债表 + 利润表
  借贷必相等           方向判断题          资产 = 负债+权益 校验
```

- **阶段 1**：5 笔业务（销售收款 / 结转成本 / 办公费 / 销售工资 / 折旧）。每张凭证下拉选科目 + 填金额，核对器检查：行数、方向、科目、金额、借贷平衡**五项**完全一致
- **阶段 2**：依次答对「结转收入」「结转成本费用」「结转本年利润」三道选择题，系统自动落账
- **阶段 3**：资产合计 303,200 = 负债与权益合计 303,200（已浏览器端验证平衡 ✓），同时展示简易利润表（营业利润 = 净利润 = 3,000）

## 真题批量清洗管道

```bash
# 跑演示：内置 20 道仿真真题样例，合并去重后写回 exams.js
cd kj-learn
python3 scripts/ingest_exams.py --demo

# 真实用法：把历年真题 docx / pdf / txt 扔进同目录
python3 scripts/ingest_exams.py \
  --input 2024初级实务真题.docx \
  --input 2023经济法基础.pdf \
  --output data/exams.js
```

支持格式：`.docx`（python-docx）/ `.pdf`（pdfplumber 回退 PyPDF2）/ `.txt`。自动识别题干编号、A–D 选项、`答案：ABCD`、`解析：…`，按答案数量判别 `single` vs `multi`。

## 本地运行

```bash
cd kj-learn
python3 -m http.server 8766
# 打开 http://127.0.0.1:8766/index.html
```

## 状态持久化

| localStorage key | 用途 |
|---|---|
| `kj_learn_state_v1` | 主线闯关：`{completed, errorBin, sectionsCleared, currentId}` |
| `kj_exam_answer_v1` | 真题答题卡：`{[qid]: {picked, confirmed}}` |
| `kj_exam_mock_v1` | 机考模式开关 on/off |
| `kj_exam_mock_deadline_v1` | 机考倒计时截止时间戳（刷新不丢） |
| `kj_grandslam_state_v1` | 大满贯账套：`{vouchers, closing, phase}` |

## v3 回归检查清单

- [x] `python3 scripts/ingest_exams.py --demo` 跑通：解析 20 题、合并后 30 题、Node 语法 0 异常
- [x] 主线第 2 课 `multi` 分支渲染 7 选项 + 严格判分（漏选不通过、补全后锁定 ✓）
- [x] `exams.html` 30 题逐题确认 + 机考 Toggle + 倒计时 + 计算器
- [x] `grandslam.html` 三阶段顺序解锁：5 凭证全对 → 三步结转全对 → 资产 303,200 = 负债权益 303,200 ✓
- [x] 全部 JS 文件 `node -c` 语法通过
- [x] 顶栏四页导航互链（闯关 / 真题 / 大满贯 / 速查表）

---

作者：吴京军（小走）· ATH 事业群 · 悟空事业部 · 2026 年初级会计备考冲刺工具
