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
# lesson 4 · 借贷记账法——有借必有贷
# ============================================================
QUESTIONS += [
(10031,4,'journal','basic',['borrow-credit'],'single','下列各项中，应记入借方的是（ ）。',
 [('资产增加',True),('负债增加',False),('所有者权益增加',False),('收入增加',False)],
 '借贷记账法规则：资产/费用类借增贷减；负债/权益/收入类贷增借减。资产增加记借方。'),
(10032,4,'journal','basic',['borrow-credit'],'single','企业用银行存款支付职工工资 80,000 元，正确分录是（ ）。',
 [('借：应付职工薪酬 80,000 / 贷：银行存款 80,000',True),
  ('借：银行存款 80,000 / 贷：应付职工薪酬 80,000',False),
  ('借：管理费用 80,000 / 贷：银行存款 80,000',False),
  ('借：应付职工薪酬 80,000 / 贷：库存现金 80,000',False)],
 '支付工资是偿还已计提的负债：应付职工薪酬（负债减少）记借方，银行存款（资产减少）记贷方。'),
(10033,4,'journal','basic',['borrow-credit'],'single','赊购原材料 50,000 元，增值税 6,500 元，正确分录中「应付账款」的金额是（ ）。',
 [('56,500 元',True),('50,000 元',False),('6,500 元',False),('43,500 元',False)],
 '赊购总价 = 50,000 + 6,500 = 56,500 元，全额挂应付账款。'),
(10034,4,'journal','improve',['borrow-credit'],'single','下列经济业务中，属于「资产内部一增一减」的是（ ）。',
 [('从银行提取现金',True),('赊购原材料',False),('收到投资者投入设备',False),('用银行存款偿还借款',False)],
 '提现：库存现金增加、银行存款减少，都是资产，内部此消彼长。赊购是资产↑负债↑；收到投资是资产↑权益↑；还款是资产↓负债↓。'),
(10035,4,'journal','improve',['borrow-credit'],'multi','下列各项中，应记入贷方的有（ ）。',
 [('负债增加',True,'A'),('所有者权益增加',True,'B'),('收入增加',True,'C'),
  ('资产增加',False,'D'),('费用增加',False,'E')],
 '负债/权益/收入增加记贷方；资产/费用增加记借方。'),
(10036,4,'journal','improve',['borrow-credit'],'single','企业收到投资者投入设备一台，价值 200,000 元，应编制的分录是（ ）。',
 [('借：固定资产 200,000 / 贷：实收资本 200,000',True),
  ('借：实收资本 200,000 / 贷：固定资产 200,000',False),
  ('借：固定资产 200,000 / 贷：资本公积 200,000',False),
  ('借：固定资产 200,000 / 贷：银行存款 200,000',False)],
 '收到投资：资产（固定资产）增加记借方，所有者权益（实收资本）增加记贷方。'),
(10037,4,'journal','improve',['borrow-credit'],'single','企业从银行借入短期借款 100,000 元存入银行，该笔业务引起（ ）。',
 [('资产和负债同时增加',True),('资产和负债同时减少',False),
  ('资产增加、所有者权益增加',False),('资产内部一增一减',False)],
 '银行存款（资产）增加，短期借款（负债）增加，等式两边同增。'),
(10038,4,'journal','exam',['borrow-credit'],'single','【真题级】下列各项中，借贷记账法的理论基础是（ ）。',
 [('会计等式',True),('试算平衡',False),('复式记账',False),('会计科目',False)],
 '借贷记账法以「资产 = 负债 + 所有者权益」会计等式为理论基础。'),
(10039,4,'journal','exam',['borrow-credit'],'multi','【真题级】下列各项中，关于借贷记账法说法正确的有（ ）。',
 [('以「借」「贷」为记账符号',True,'A'),
  ('以「有借必有贷，借贷必相等」为记账规则',True,'B'),
  ('以会计等式为理论基础',True,'C'),
  ('「借」一律表示增加',False,'D')],
 'D 错误：借方表示增加还是减少取决于账户性质，资产/费用借增，负债/权益/收入借减。'),
]

# ============================================================
# lesson 5 · 试算平衡——查账第一关
# ============================================================
QUESTIONS += [
(10041,5,'concept','basic',['borrow-credit'],'single','试算平衡的基本公式是（ ）。',
 [('全部账户借方发生额合计 = 全部账户贷方发生额合计',True),
  ('全部账户借方余额 > 全部账户贷方余额',False),
  ('资产合计 = 负债合计',False),
  ('收入合计 = 费用合计',False)],
 '试算平衡包括发生额平衡和余额平衡两种，核心公式是借方合计 = 贷方合计。'),
(10042,5,'concept','basic',['borrow-credit'],'single','下列各项中，不能通过试算平衡发现的错误是（ ）。',
 [('某笔业务重记（借贷同时多记）',True),
  ('借方多记 500 元',False),
  ('贷方少记 200 元',False),
  ('某笔借方金额误记到贷方',False)],
 '重记时借贷同时多，仍然平衡，无法发现。借贷金额不等或方向串户都会导致不平衡。'),
(10043,5,'concept','basic',['borrow-credit'],'single','编制试算平衡表时，下列等式正确的是（ ）。',
 [('全部账户期末借方余额合计 = 全部账户期末贷方余额合计',True),
  ('资产类账户借方余额 = 负债类账户贷方余额',False),
  ('借方发生额 = 期末借方余额',False),
  ('贷方发生额 = 期初贷方余额',False)],
 '余额试算平衡：期末借方余额合计 = 期末贷方余额合计。'),
(10044,5,'concept','improve',['borrow-credit'],'multi','下列错误中，能通过试算平衡表发现的有（ ）。',
 [('借方多记金额',True,'A'),('贷方少记金额',True,'B'),
  ('漏记整笔业务',False,'C'),('借贷方向全部记反',False,'D')],
 '借方多记或贷方少记都会导致借贷不等，可以发现；漏记和方向全反不影响平衡。'),
(10045,5,'concept','improve',['borrow-credit'],'single','试算平衡表中，期末余额的计算公式是（ ）。',
 [('期初余额 + 本期增加额 − 本期减少额',True),
  ('期初余额 + 本期借方发生额',False),
  ('本期贷方发生额 − 期初余额',False),
  ('期初余额 × 2',False)],
 '期末余额 = 期初余额 + 本期增加额 − 本期减少额，这是账户余额的基本计算公式。'),
(10046,5,'concept','improve',['borrow-credit'],'multi','下列关于试算平衡的说法中，正确的有（ ）。',
 [('试算不平衡，肯定有错',True,'A'),
  ('试算平衡，不一定没错',True,'B'),
  ('试算平衡是检查记账是否正确的唯一方法',False,'C'),
  ('发生额平衡和余额平衡是两种基本方法',True,'D')],
 'C 错误：试算平衡只是方法之一，还有账证核对、账账核对等。'),
(10047,5,'concept','improve',['borrow-credit'],'single','某企业月末编制试算平衡表，借方余额合计 850,000 元，贷方余额合计 830,000 元，差额可能是（ ）。',
 [('某贷方账户少记 20,000 元',True),
  ('某借方账户少记 20,000 元',False),
  ('重复记录了一笔 20,000 元的业务',False),
  ('漏记了一笔 20,000 元的业务',False)],
 '借方多出 20,000，说明贷方少记或借方多记。重记和漏记不影响平衡。'),
(10048,5,'concept','exam',['borrow-credit'],'single','【真题级】下列各项中，试算平衡表无法发现的错误是（ ）。',
 [('将一笔业务的借贷科目同时写错但金额正确',True),
  ('将借方 3,000 元误记为 300 元',False),
  ('只记了借方未记贷方',False),
  ('将贷方 5,000 元多记为 50,000 元',False)],
 '借贷科目同时写错但金额正确，试算仍平衡，无法发现。'),
(10049,5,'concept','exam',['borrow-credit'],'multi','【真题级】下列各项中，属于试算平衡法局限性的有（ ）。',
 [('不能发现重记错误',True,'A'),('不能发现漏记错误',True,'B'),
  ('不能发现借贷方向颠倒的错误',True,'C'),
  ('不能发现借贷金额不等的错误',False,'D')],
 'D 恰恰是试算平衡能发现的。ABC 都不影响借贷平衡关系。'),
]

# ============================================================
# lesson 6 · 拖一拖——科目借贷分栏（销售分录 + 科目归位）
# ============================================================
QUESTIONS += [
(10051,6,'journal','basic',['borrow-credit'],'single','销售商品收到货款存入银行，「银行存款」应记入（ ）。',
 [('借方',True),('贷方',False),('借方或贷方均可',False),('不需要记录',False)],
 '银行存款是资产，收到货款增加，资产增加记借方。'),
(10052,6,'journal','basic',['borrow-credit'],'single','销售商品确认收入时，「主营业务收入」应记入（ ）。',
 [('贷方',True),('借方',False),('借方或贷方均可',False),('不需要记录',False)],
 '收入增加记贷方。'),
(10053,6,'journal','basic',['borrow-credit'],'single','销售商品开出增值税专票，销项税额应记入（ ）科目的贷方。',
 [('应交税费——应交增值税（销项税额）',True),
  ('应交税费——应交增值税（进项税额）',False),
  ('应收账款',False),('主营业务收入',False)],
 '销项税额是企业应向税务局缴纳的税款（负债），增加记贷方。进项税额是可抵扣的（资产性质），记借方。'),
(10054,6,'journal','improve',['borrow-credit'],'single','企业赊销商品价款 30,000 元、税额 3,900 元，应借记（ ）。',
 [('应收账款 33,900 元',True),('银行存款 33,900 元',False),
  ('应收账款 30,000 元',False),('主营业务收入 33,900 元',False)],
 '赊销未收款，应收账款（资产）增加 = 价款 + 税额 = 33,900 元，记借方。'),
(10055,6,'journal','improve',['borrow-credit'],'multi','企业销售商品价款 20,000 元、税额 2,600 元，款已收到存入银行。该笔分录涉及的贷方科目有（ ）。',
 [('主营业务收入',True,'A'),('应交税费——应交增值税（销项税额）',True,'B'),
  ('银行存款',False,'C'),('应收账款',False,'D')],
 '贷方：主营业务收入 20,000（收入增加）+ 销项税额 2,600（负债增加）。银行存款记借方。'),
(10056,6,'journal','improve',['borrow-credit'],'single','企业销售商品同时结转成本，「主营业务成本」应记入（ ）。',
 [('借方',True),('贷方',False),('不需要记录',False),('借方或贷方均可',False)],
 '主营业务成本属于费用类，增加记借方。结转成本分录：借：主营业务成本 / 贷：库存商品。'),
(10057,6,'journal','improve',['borrow-credit'],'single','销售商品结转成本时，「库存商品」应记入（ ）。',
 [('贷方',True),('借方',False),('借方或贷方均可',False),('不需要记录',False)],
 '库存商品是资产，卖出后减少，资产减少记贷方。'),
(10058,6,'journal','exam',['borrow-credit'],'multi','【真题级】企业销售产品价款 100,000 元、税额 13,000 元，收到商业汇票一张。该笔分录涉及的科目有（ ）。',
 [('应收票据',True,'A'),('主营业务收入',True,'B'),
  ('应交税费——应交增值税（销项税额）',True,'C'),
  ('银行存款',False,'D'),('应收账款',False,'E')],
 '收到商业汇票记应收票据（借方 113,000）；贷方：主营业务收入 100,000 + 销项税额 13,000。'),
(10059,6,'journal','exam',['borrow-credit'],'single','【真题级】下列各项中，关于增值税销项税额的说法正确的是（ ）。',
 [('销项税额使企业的负债增加',True),
  ('销项税额使企业的资产增加',False),
  ('销项税额应记入借方',False),
  ('销项税额属于费用',False)],
 '销项税额是企业代收后需上缴国家的税款，本质是负债（应交税费），增加记贷方。'),
]

# ============================================================
# lesson 7 · 备用金与库存现金限额
# ============================================================
QUESTIONS += [
(10061,7,'law','basic',['petty-cash'],'single','下列各项中，可以使用现金结算的是（ ）。',
 [('支付员工出差借款 2,000 元',True),('支付供应商货款 80,000 元',False),
  ('支付工程款 150,000 元',False),('购买固定资产 200,000 元',False)],
 '现金结算适用于小额零星支出和差旅费等，大额经营性支出应通过银行转账。'),
(10062,7,'law','basic',['petty-cash'],'single','企业核定库存现金限额为 5,000 元，期末实际库存 12,000 元，应将（ ）元存入银行。',
 [('7,000',True),('12,000',False),('5,000',False),('17,000',False)],
 '超出限额部分 = 12,000 − 5,000 = 7,000 元，须当日存入银行。'),
(10063,7,'law','basic',['petty-cash'],'single','定额备用金制度下，报销时应（ ）。',
 [('按实际支出金额补足备用金',True),('将剩余备用金全部交回',False),
  ('重新核定备用金额度',False),('不需要任何处理',False)],
 '定额备用金制度：核定额度→日常支出→月末凭票报销→按支出额补足至定额。'),
(10064,7,'law','improve',['petty-cash'],'multi','下列各项中，属于现金使用范围的有（ ）。',
 [('职工工资、津贴',True,'A'),('个人劳务报酬',True,'B'),
  ('出差人员差旅费',True,'C'),('向其他企业支付货款 50,000 元',False,'D')],
 '现金使用范围：工资津贴、劳务报酬、差旅费、1,000 元以下零星支出等。大额货款必须转账。'),
(10065,7,'law','improve',['petty-cash'],'single','备用金报销时，出纳实际支出 1,800 元（定额 2,000 元），正确的分录是（ ）。',
 [('借：管理费用 1,800 / 贷：库存现金 1,800',True),
  ('借：其他应收款 1,800 / 贷：库存现金 1,800',False),
  ('借：管理费用 2,000 / 贷：库存现金 2,000',False),
  ('借：库存现金 1,800 / 贷：管理费用 1,800',False)],
 '报销时按实际支出确认费用并补足现金。补足金额 = 实际支出 = 1,800 元。'),
(10066,7,'concept','improve',['petty-cash'],'single','下列各项中，关于库存现金的说法错误的是（ ）。',
 [('企业可以无限制地保留库存现金',True),
  ('库存现金由出纳人员负责管理',False),
  ('库存现金应定期盘点',False),
  ('超过限额的现金应及时存入银行',False)],
 '企业不能无限制保留现金，必须遵守库存现金限额管理制度。'),
(10067,7,'law','improve',['petty-cash'],'multi','下列关于库存现金管理的说法中，正确的有（ ）。',
 [('应设置现金日记账逐笔登记',True,'A'),
  ('出纳不得兼管稽核、会计档案保管',True,'B'),
  ('现金收支应及时入账',True,'C'),
  ('库存现金可以白条抵库',False,'D')],
 '白条抵库是严禁的行为。现金管理要求日清月结、逐笔登记、不得坐支。'),
(10068,7,'law','exam',['petty-cash'],'single','【真题级】下列各项中，不属于现金使用范围的是（ ）。',
 [('支付给其他单位的货款 30,000 元',True),
  ('支付职工工资 5,000 元',False),
  ('支付差旅费 3,000 元',False),
  ('支付个人劳务报酬 800 元',False)],
 '向其他单位支付大额货款应通过银行转账，不在现金使用范围内。'),
(10069,7,'law','exam',['petty-cash'],'multi','【真题级】下列关于定额备用金制度的说法中，正确的有（ ）。',
 [('备用金拨付时借记其他应收款',True,'A'),
  ('报销时按实际支出补足',True,'B'),
  ('期末备用金余额应等于核定额度',True,'C'),
  ('备用金可以用于任意金额的采购',False,'D')],
 '备用金有使用范围限制，不能用于大额采购。拨付→使用→报销补足→余额恢复定额。'),
]

# ============================================================
# lesson 8 · 应收账款与坏账准备
# ============================================================
QUESTIONS += [
(10071,8,'calc','basic',['bad-debt'],'single','企业期末应收账款余额 200,000 元，预期信用损失率 5%，坏账准备账户原有贷方余额 3,000 元，本期应补提坏账准备（ ）元。',
 [('7,000',True),('10,000',False),('3,000',False),('13,000',False)],
 '应有余额 = 200,000 × 5% = 10,000；已有贷方 3,000，补提 10,000 − 3,000 = 7,000 元。'),
(10072,8,'calc','basic',['bad-debt'],'single','首次计提坏账准备，应收账款余额 800,000 元，预期信用损失率 2%，应计提（ ）元。',
 [('16,000',True),('8,000',False),('80,000',False),('160,000',False)],
 '首次计提无已有余额：800,000 × 2% = 16,000 元。'),
(10073,8,'concept','basic',['bad-debt'],'single','「坏账准备」科目的性质是（ ）。',
 [('资产类备抵科目',True),('负债类科目',False),('费用类科目',False),('所有者权益类科目',False)],
 '坏账准备是应收账款的备抵科目，虽然余额在贷方，但仍属于资产类。'),
(10074,8,'calc','improve',['bad-debt'],'single','期末应收账款 300,000 元，损失率 3%，坏账准备已有贷方余额 12,000 元，本期应（ ）。',
 [('冲回坏账准备 3,000 元',True),('补提 3,000 元',False),
  ('补提 9,000 元',False),('不做处理',False)],
 '应有余额 = 300,000 × 3% = 9,000；已有 12,000 > 9,000，应冲回 12,000 − 9,000 = 3,000 元。'),
(10075,8,'calc','improve',['bad-debt'],'single','坏账准备账户因核销坏账出现借方余额 5,000 元，期末应收账款 400,000 元，损失率 5%，本期应补提（ ）元。',
 [('25,000',True),('20,000',False),('15,000',False),('5,000',False)],
 '应有贷方余额 = 400,000 × 5% = 20,000；当前为借方余额 5,000，补提 = 20,000 + 5,000 = 25,000 元。'),
(10076,8,'journal','improve',['bad-debt'],'single','计提坏账准备的分录，借方科目是（ ）。',
 [('信用减值损失',True),('资产减值损失',False),('坏账准备',False),('管理费用',False)],
 '新准则下计提坏账准备：借：信用减值损失 / 贷：坏账准备。注意不是资产减值损失。'),
(10077,8,'concept','improve',['bad-debt'],'multi','下列关于坏账准备的说法中，正确的有（ ）。',
 [('坏账准备是应收账款的备抵科目',True,'A'),
  ('计提坏账准备会减少当期利润',True,'B'),
  ('已核销的坏账又收回时应恢复应收账款',True,'C'),
  ('坏账准备余额只能在贷方',False,'D')],
 'D 错误：核销坏账后如果未及时补提，坏账准备可能出现借方余额。'),
(10078,8,'journal','exam',['bad-debt'],'single','【真题级】已核销的坏账 10,000 元又收回，正确的处理是（ ）。',
 [('先恢复应收账款，再冲减银行存款',True),
  ('直接借记银行存款，贷记坏账准备',False),
  ('借记银行存款，贷记营业外收入',False),
  ('不做账务处理',False)],
 '分两步：① 借：应收账款 10,000 / 贷：坏账准备 10,000（恢复）；② 借：银行存款 10,000 / 贷：应收账款 10,000（收款）。'),
(10079,8,'calc','exam',['bad-debt'],'single','【真题级】2024 年末应收账款余额 1,000,000 元，损失率 3%，年初坏账准备贷方余额 20,000 元，当年核销坏账 8,000 元。年末应补提坏账准备（ ）元。',
 [('18,000',True),('30,000',False),('10,000',False),('22,000',False)],
 '应有余额 = 1,000,000 × 3% = 30,000；核销后已有余额 = 20,000 − 8,000 = 12,000；补提 = 30,000 − 12,000 = 18,000 元。'),
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
