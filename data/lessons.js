/**
 * 初级会计学习课程数据（v2 · 16 章 40 课）
 * 知识点来源：初级会计《实务》8 章 +《经济法基础》8 章 教材及历年真题考点
 *
 * 结构：
 *   subject   '实务' | '经济法'
 *   chapter   1..8   科目下的章号
 *   section   1..16  跨科目小节编号（= 目录中的大分组，亦用于错题清算）
 *   lesson_id 全局唯一递增
 *
 * interaction_type:
 *   'select'   多选分类
 *   'single'   单选题（含 fill 场景）
 *   'fill'     填空/下拉单选
 *   'journal'  借贷分录组装（下拉 + 金额）
 *   'drag'     拖拽题——把科目词条拖入借/贷两栏（新）
 *
 * 为避免 JS 字符串字面量嵌套问题，文案内一律用单引号包裹，内部只用中文引号 「」 ''。
 */
window.LESSONS = [
  /* ========== 实务 · 第 1 章：概述（会计基础） ========== */
  {
    lesson_id: 1,
    subject: '实务',
    chapter: 1,
    section: 1,
    title: '认识「资产」',
    content:
      '资产是企业过去的交易形成、由企业拥有或控制、预期会带来经济利益的资源。一句人话：公司拥有的、能换成钱或带来钱的东西都是资产。',
    scenario:
      '场景：你开了一家奶茶店。柜台里的现金、仓库里的珍珠和茶叶、已付款使用的制冰机、顾客赊账未付的单子——哪些才算资产？',
    interaction_type: 'select',
    tags: { type: 'concept', level: 'basic', hot: ['six-elements'] },
    prompt: '从下列词条中，点选所有属于「资产」的项目（可多选）：',
    options: [
      { text: '库存现金', is_correct: true },
      { text: '银行存款', is_correct: true },
      { text: '应收账款', is_correct: true },
      { text: '原材料', is_correct: true },
      { text: '固定资产（制冰机）', is_correct: true },
      { text: '应付账款', is_correct: false },
      { text: '短期借款', is_correct: false },
      { text: '实收资本', is_correct: false }
    ],
    error_hint:
      '应付账款、短期借款是欠别人的钱属于负债；实收资本是股东投入属于所有者权益，都不是资产。',
    tip: '口诀：资产 = 我有的钱 + 别人欠我的钱 + 我拥有的东西。'
  },
  {
    lesson_id: 2,
    subject: '实务',
    chapter: 1,
    section: 1,
    title: '六大会计要素速辨（不定项）',
    content:
      '会计有六大要素：资产、负债、所有者权益（构成资产负债表）；收入、费用、利润（构成利润表）。把科目归对类，是一切分录的起点。',
    scenario:
      '场景：期末盘点，财务小李把「应付职工薪酬」记到了所有者权益里，导致资产负债表不平。先把要素类别背牢，才能避免此类错误。',
    interaction_type: 'multi',
    tags: { type: 'comprehensive', level: 'improve', hot: ['six-elements'] },
    prompt: '下列科目中，属于「所有者权益」的有（　）？【不定项 · 漏选 / 错选均不得分】',
    options: [
      { label: 'A', text: '实收资本',     is_correct: true  },
      { label: 'B', text: '资本公积',     is_correct: true  },
      { label: 'C', text: '盈余公积',     is_correct: true  },
      { label: 'D', text: '未分配利润',   is_correct: true  },
      { label: 'E', text: '短期借款',     is_correct: false },
      { label: 'F', text: '应付票据',     is_correct: false },
      { label: 'G', text: '应收账款',     is_correct: false }
    ],
    error_hint: '所有者权益四大件：实收资本、资本公积、盈余公积、未分配利润；短期借款/应付票据是负债；应收账款是资产。不定项必须四项全选对才得分。',
    tip: '口诀：权益四大件——实资本、盈利润；凡带「付/借」多是负债，「收」字在前多是资产。'
  },
  {
    lesson_id: 3,
    subject: '实务',
    chapter: 1,
    section: 1,
    title: '会计等式——科目归位',
    content:
      '基本会计等式：资产 = 负债 + 所有者权益。要把一张资产负债表做平，第一步就是把每个科目归到正确的要素类别。资产类：企业拥有或控制的资源；负债类：欠别人的钱或义务；所有者权益类：股东投入及企业累积的留存。',
    scenario:
      '场景：期末整理科目余额表时，财务小李把若干科目混在一起。请你把它们拖进正确的要素栏，看看资产负债表两边能否摆平。',
    interaction_type: 'drag',
    tags: { type: 'concept', level: 'basic', hot: ['six-elements', 'borrow-credit'] },
    prompt: '把下列科目拖到对应要素栏：',
    pool_label: '待归类科目',
    items: [
      '银行存款',
      '固定资产',
      '应收账款',
      '短期借款',
      '应付账款',
      '应交税费',
      '实收资本',
      '资本公积',
      '未分配利润'
    ],
    zones: [
      { key: 'asset', label: '资产' },
      { key: 'liability', label: '负债' },
      { key: 'equity', label: '所有者权益' }
    ],
    answer: {
      asset: ['银行存款', '固定资产', '应收账款'],
      liability: ['短期借款', '应付账款', '应交税费'],
      equity: ['实收资本', '资本公积', '未分配利润']
    },
    error_hint:
      '欠别人的钱（借款、应付、应交税费）是负债；股东投入与留存（实收资本、资本公积、未分配利润）是所有者权益；其余企业能控制并带来经济利益的资源归资产。',
    tip: '所有者权益四大件：实收资本、资本公积、盈余公积、未分配利润。'
  },

  /* ========== 实务 · 第 2 章：会计核算基础（复式记账与凭证） ========== */
  {
    lesson_id: 4,
    subject: '实务',
    chapter: 2,
    section: 2,
    title: '借贷记账法——有借必有贷',
    content:
      '借贷记账法规则：资产/费用类，借增贷减；负债/所有者权益/收入类，贷增借减。每笔分录「有借必有贷，借贷必相等」。',
    scenario: '场景：公司从银行取现金 5,000 元备用。库存现金增加，银行存款减少，两边都是资产。',
    interaction_type: 'journal',
    tags: { type: 'journal', level: 'basic', hot: ['borrow-credit'] },
    prompt: '请为「从银行提取现金 5,000 元」做会计分录：',
    slots: [
      {
        side: '借',
        correct_account: '库存现金',
        correct_amount: 5000,
        account_options: ['库存现金', '银行存款', '应收账款', '应付账款']
      },
      {
        side: '贷',
        correct_account: '银行存款',
        correct_amount: 5000,
        account_options: ['库存现金', '银行存款', '应收账款', '应付账款']
      }
    ],
    error_hint: '资产增加记借方，资产减少记贷方。借：库存现金 5000 / 贷：银行存款 5000。',
    tip: '口诀：资产费用借增贷减，负债权益收入贷增借减。'
  },
  {
    lesson_id: 5,
    subject: '实务',
    chapter: 2,
    section: 2,
    title: '试算平衡——查账第一关',
    content:
      '试算平衡：① 发生额合计借 = 贷；② 余额合计借 = 贷。不平一定错，平不保证全对。重记、漏记、借贷方向颠倒等错误都无法通过试算发现。',
    scenario: '场景：月末借方合计 180 万、贷方合计 179.5 万，差 0.5 万，一定记错了。',
    interaction_type: 'single',
    tags: { type: 'concept', level: 'improve', hot: ['borrow-credit'] },
    prompt: '下列错误，能通过试算平衡表发现的是（　　）？',
    options: [
      { text: '重记了某笔经济业务', is_correct: false },
      { text: '漏记了某笔经济业务', is_correct: false },
      { text: '借贷方向记反', is_correct: false },
      { text: '借方登记 1,000 元，贷方登记 100 元', is_correct: true }
    ],
    error_hint: '借贷金额不一致才会导致试算不平衡。重记、漏记、方向记反，两边同时错，仍然平衡。',
    tip: '试算平衡是必要条件，不是充分条件。'
  },
  {
    lesson_id: 6,
    subject: '实务',
    chapter: 2,
    section: 2,
    title: '拖一拖——把科目放进借贷两栏',
    content:
      '业务场景：公司销售商品开出增值税专票，价款 20,000 元、税额 2,600 元，款收到存入银行。成本暂不考虑。请把科目词条拖到对应栏位：借方科目表示资产或费用增加，贷方科目表示收入或负债增加。',
    scenario: '场景：一笔销售业务对应 3 个科目。把它们拖进正确的借/贷栏即可。',
    interaction_type: 'drag',
    tags: { type: 'journal', level: 'basic', hot: ['borrow-credit'] },
    prompt: '拖动下列科目到正确栏位：',
    items: ['银行存款', '主营业务收入', '应交税费——应交增值税（销项税额）'],
    answer: {
      debit: ['银行存款'],
      credit: ['主营业务收入', '应交税费——应交增值税（销项税额）']
    },
    error_hint: '银行存款（资产）增加记借；收入和销项税额（权益/负债）增加记贷。',
    tip: '销售分录模板：借：银行存款 22600 / 贷：主营业务收入 20000、销项税额 2600。'
  },

  /* ========== 实务 · 第 3 章：货币资金与往来 ========== */
  {
    lesson_id: 7,
    subject: '实务',
    chapter: 3,
    section: 3,
    title: '备用金与库存现金限额',
    content:
      '库存现金使用范围受限，超过限额须存入银行。备用金由出纳管理，实行「定额备用金」制度：核定额度、月末盘点、差额补齐。',
    scenario: '场景：公司核定库存现金限额 3,000 元，实际期末库存 8,500 元，多余需当日存入银行。',
    interaction_type: 'single',
    tags: { type: 'law', level: 'basic', hot: ['petty-cash'] },
    prompt: '下列业务，可以使用现金结算的是（　　）？',
    options: [
      { text: '向供应商采购原材料 100,000 元', is_correct: false },
      { text: '支付员工差旅费 1,500 元', is_correct: true },
      { text: '支付 12 万元工程款', is_correct: false },
      { text: '发放全公司奖金 50,000 元', is_correct: false }
    ],
    error_hint: '现金结算适用于零星支出、差旅费、小额工资等；大额或经营性结算应通过银行。',
    tip: '现金使用范围：① 工资津贴 ② 差旅费 ③ 零星支出 ④ 1,000 元以下小额支出。'
  },
  {
    lesson_id: 8,
    subject: '实务',
    chapter: 3,
    section: 3,
    title: '应收账款与坏账准备',
    content:
      '期末按预期信用损失模型计提坏账准备：借「信用减值损失」，贷「坏账准备」。「坏账准备」是应收账款的备抵科目，资产类但余额在贷方。',
    scenario: '场景：期末应收账款余额 500,000 元，信用损失率 2%。坏账准备账户原有贷方余额 4,000 元。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['bad-debt'] },
    prompt: '本期应补提坏账准备的金额是（　　）？',
    options: [
      { text: '4,000 元', is_correct: false },
      { text: '6,000 元', is_correct: true },
      { text: '10,000 元', is_correct: false },
      { text: '14,000 元', is_correct: false }
    ],
    error_hint: '应有余额 = 500,000 × 2% = 10,000；已有 4,000，补提 10,000 − 4,000 = 6,000。',
    tip: '分录：借：信用减值损失 6,000 / 贷：坏账准备 6,000。'
  },
  {
    lesson_id: 9,
    subject: '实务',
    chapter: 3,
    section: 3,
    title: '应收票据贴现的本质',
    content:
      '带息票据到期值 = 票面金额 + 票面利息；贴现利息 = 到期值 × 贴现率 × 贴现天数 / 360；贴现所得 = 到期值 − 贴现利息。',
    scenario: '场景：企业持有面值 100,000 元、期限 6 个月、票面利率 4% 的银行承兑汇票，持有 2 个月后贴现，贴现率 6%。',
    interaction_type: 'single',
    tags: { type: 'concept', level: 'improve', hot: ['note-discount'] },
    prompt: '该票据的贴现所得（实际收到金额）最接近（　　）？',
    options: [
      { text: '98,960 元', is_correct: false },
      { text: '99,960 元', is_correct: true },
      { text: '100,960 元', is_correct: false },
      { text: '102,000 元', is_correct: false }
    ],
    error_hint:
      '到期值 = 100,000 × (1 + 4% × 6/12) = 102,000；贴现利息 = 102,000 × 6% × 4/12 = 2,040；贴现所得 = 102,000 − 2,040 = 99,960。',
    tip: '带息票据：先算到期值，再按到期值和「剩余」天数算贴现利息。'
  },

  /* ========== 实务 · 第 4 章：存货 ========== */
  {
    lesson_id: 10,
    subject: '实务',
    chapter: 4,
    section: 4,
    title: '购入原材料的分录（一般纳税人）',
    content:
      '一般纳税人购入原材料：按不含税价计入「原材料」；增值税进项税额单独记入「应交税费——应交增值税（进项税额）」；价税合计挂「应付账款」或冲减「银行存款」。',
    scenario: '场景：采购原材料一批，专票价款 10,000、税率 13%、税额 1,300，款未付。',
    interaction_type: 'journal',
    tags: { type: 'journal', level: 'improve', hot: ['vat-input'] },
    prompt: '请完成上述采购业务的会计分录（款未付）：',
    slots: [
      {
        side: '借',
        correct_account: '原材料',
        correct_amount: 10000,
        account_options: ['原材料', '库存商品', '应交税费——应交增值税（进项税额）', '应付账款']
      },
      {
        side: '借',
        correct_account: '应交税费——应交增值税（进项税额）',
        correct_amount: 1300,
        account_options: ['原材料', '库存商品', '应交税费——应交增值税(进项税额)', '应交税费——应交增值税（进项税额）']
      },
      {
        side: '贷',
        correct_account: '应付账款',
        correct_amount: 11300,
        account_options: ['银行存款', '应付账款', '库存现金', '预付账款']
      }
    ],
    error_hint: '原材料 10000（不含税）+ 进项税 1300 = 应付账款 11300。进项税单独列示。',
    tip: '小规模纳税人相反：不得抵扣进项，价税合计全部计入原材料。'
  },
  {
    lesson_id: 11,
    subject: '实务',
    chapter: 4,
    section: 4,
    title: '存货发出——加权平均法',
    content:
      '月末一次加权平均：单位成本 =（月初存货成本 + 本月购入合计）÷（月初数量 + 本月购入数量）。本月发出存货成本 = 发出数量 × 加权平均单价。',
    scenario:
      '场景：月初库存 100 件 @ 10 元；5 日购入 200 件 @ 12 元；15 日购入 100 件 @ 14 元；本月共发出 300 件。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['inventory-avg'] },
    prompt: '本月发出 300 件存货的成本最接近（　　）？',
    options: [
      { text: '3,300 元', is_correct: false },
      { text: '3,600 元', is_correct: true },
      { text: '3,900 元', is_correct: false },
      { text: '4,200 元', is_correct: false }
    ],
    error_hint:
      '总成本 = 100×10 + 200×12 + 100×14 = 4,800；总数量 = 400；单价 = 12；发出成本 = 300×12 = 3,600。',
    tip: '月末一次加权平均：期末才能算单价，日常发出暂不登记单价。'
  },
  {
    lesson_id: 12,
    subject: '实务',
    chapter: 4,
    section: 4,
    title: '拖一拖——购入存货分录',
    content:
      '业务场景：公司从供应商处采购原材料一批，取得增值税专用发票。价款 50,000 元、进项税额 6,500 元，货款尚未支付，材料已验收入库。把科目词条拖到正确栏位：借方记资产或费用的增加，贷方记负债或权益的增加。',
    scenario: '场景：一笔采购业务对应 3 个科目，分别落在借/贷两边。',
    interaction_type: 'drag',
    tags: { type: 'journal', level: 'basic', hot: ['vat-input'] },
    prompt: '拖动下列科目到正确栏位：',
    items: ['原材料', '应交税费——应交增值税（进项税额）', '应付账款'],
    answer: {
      debit: ['原材料', '应交税费——应交增值税（进项税额）'],
      credit: ['应付账款']
    },
    error_hint:
      '原材料（资产）增加记借；进项税额（资产的减项，税务上视作待抵扣资产）增加记借；赊购未付款形成应付账款（负债）增加，记贷。',
    tip: '采购分录模板：借：原材料 50000 / 借：进项税额 6500 / 贷：应付账款 56500。'
  },

  /* ========== 实务 · 第 5 章：固定资产与无形资产 ========== */
  {
    lesson_id: 13,
    subject: '实务',
    chapter: 5,
    section: 5,
    title: '固定资产折旧——年限平均法',
    content:
      '年限平均法：年折旧额 =（原值 − 预计净残值）÷ 预计使用年限。规则：当月增加的当月不提、下月起提；当月减少的当月照提、下月停提。',
    scenario: '场景：2024 年 3 月 10 日购入设备，原值 120,000、使用 5 年、净残值 6,000。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['depreciation-sl'] },
    prompt: '该设备 2024 年全年应计提折旧为（　　）？',
    options: [
      { text: '22,800 元', is_correct: false },
      { text: '17,100 元', is_correct: true },
      { text: '20,900 元', is_correct: false },
      { text: '19,000 元', is_correct: false }
    ],
    error_hint:
      '年折旧 = (120,000 − 6,000) ÷ 5 = 22,800；月折旧 = 1,900。3 月购入当月不提，4—12 月共 9 月：1,900 × 9 = 17,100。',
    tip: '口诀：当月增加下月提，当月减少当月提。'
  },
  {
    lesson_id: 14,
    subject: '实务',
    chapter: 5,
    section: 5,
    title: '双倍余额递减法',
    content:
      '双倍余额递减法：年折旧率 = 2 ÷ 预计使用年限；年折旧额 = 期初账面净值 × 年折旧率；最后两年改用直线法（剩余净值扣残值后平均）。',
    scenario: '场景：原值 100,000、使用 5 年、净残值 4,000，采用双倍余额递减法。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'exam', hot: ['depreciation-ddb'] },
    prompt: '该资产第 2 年应计提的折旧额为（　　）？',
    options: [
      { text: '40,000 元', is_correct: false },
      { text: '24,000 元', is_correct: true },
      { text: '20,000 元', is_correct: false },
      { text: '16,000 元', is_correct: false }
    ],
    error_hint:
      '折旧率 = 2/5 = 40%；第 1 年：100,000 × 40% = 40,000；第 2 年：(100,000 − 40,000) × 40% = 24,000。',
    tip: '前期多提、后期少提。最后两年改直线法。计算中不扣净残值（除了最后两年）。'
  },
  {
    lesson_id: 15,
    subject: '实务',
    chapter: 5,
    section: 5,
    title: '无形资产摊销',
    content:
      '使用寿命有限的无形资产应在使用寿命内摊销；使用寿命不确定的不摊销但每年减值测试。自用：借「管理费用」贷「累计摊销」；出租：借「其他业务成本」贷「累计摊销」。',
    scenario: '场景：公司购入一项专利 120,000 元，预计使用 10 年，自用于生产管理。',
    interaction_type: 'journal',
    tags: { type: 'journal', level: 'improve', hot: ['intangible-amort'] },
    prompt: '请做「一年摊销」的会计分录：',
    slots: [
      {
        side: '借',
        correct_account: '管理费用',
        correct_amount: 12000,
        account_options: ['管理费用', '销售费用', '其他业务成本', '制造费用']
      },
      {
        side: '贷',
        correct_account: '累计摊销',
        correct_amount: 12000,
        account_options: ['累计摊销', '累计折旧', '无形资产', '坏账准备']
      }
    ],
    error_hint: '年摊销 = 120,000 ÷ 10 = 12,000。自用摊销走「管理费用」。',
    tip: '固定资产用「累计折旧」；无形资产用「累计摊销」。别记混。'
  },

  /* ========== 实务 · 第 6 章：负债 ========== */
  {
    lesson_id: 16,
    subject: '实务',
    chapter: 6,
    section: 6,
    title: '短期借款与利息处理',
    content:
      '短期借款利息处理：按期计提—借「财务费用」贷「应付利息」；实际支付时借「应付利息」贷「银行存款」。若一次还本付息且金额较小，也可直接借「财务费用」贷「银行存款」。',
    scenario:
      '场景：2024-07-01 取得一年期短期借款 500,000 元，年利率 6%，按季计提利息，到期还本付息。',
    interaction_type: 'journal',
    tags: { type: 'journal', level: 'improve', hot: ['short-loan'] },
    prompt: '请做「9 月末计提利息」的会计分录：',
    slots: [
      {
        side: '借',
        correct_account: '财务费用',
        correct_amount: 7500,
        account_options: ['财务费用', '管理费用', '应付利息', '短期借款']
      },
      {
        side: '贷',
        correct_account: '应付利息',
        correct_amount: 7500,
        account_options: ['应付利息', '银行存款', '短期借款', '应付账款']
      }
    ],
    error_hint: '季度利息 = 500,000 × 6% × 3/12 = 7,500。计提不付款，对方科目是「应付利息」。',
    tip: '口诀：计提借费用贷应付，支付借应付贷存款。'
  },
  {
    lesson_id: 17,
    subject: '实务',
    chapter: 6,
    section: 6,
    title: '应付职工薪酬——五险一金',
    content:
      '职工薪酬包括工资、奖金、五险一金、福利费、工会经费、职工教育经费等。计提时借相关成本费用科目、贷「应付职工薪酬」；支付时借「应付职工薪酬」、贷「银行存款/其他应收款」。',
    scenario:
      '场景：当月车间工人工资 80,000、管理人员工资 40,000。计提养老保险：单位 16%，个人 8%。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['payroll'] },
    prompt: '关于工资与社保的分录，下列说法正确的是（　　）？',
    options: [
      { text: '个人承担部分直接借「管理费用」', is_correct: false },
      { text: '单位承担部分计入成本费用，个人承担部分从应付职工薪酬中代扣', is_correct: true },
      { text: '五险一金单位部分记「其他应付款」', is_correct: false },
      { text: '发放工资时借「银行存款」贷「应付职工薪酬」', is_correct: false }
    ],
    error_hint:
      '单位部分进成本费用（制造/管理/销售费用等）；个人部分先在应付薪酬中代扣，随工资一同上缴社保。',
    tip: '发放：借：应付职工薪酬（含个人代扣部分）/ 贷：银行存款、其他应付款（代扣社保）。'
  },
  {
    lesson_id: 18,
    subject: '实务',
    chapter: 6,
    section: 6,
    title: '应交增值税（月末结转）',
    content:
      '月末：当月销项 − 进项 − 已交 = 应纳税额。应纳税额结转至「应交税费——未交增值税」。留抵税额在借方，不结转。',
    scenario:
      '场景：某一般纳税人当月销项税额 26,000、进项税额 18,000、已交税金 3,000，月末结转。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['vat-settle'] },
    prompt: '月末该企业应向「未交增值税」结转的金额是（　　）？',
    options: [
      { text: '26,000 元', is_correct: false },
      { text: '8,000 元', is_correct: false },
      { text: '5,000 元', is_correct: true },
      { text: '3,000 元', is_correct: false }
    ],
    error_hint: '应纳税额 = 26,000 − 18,000 = 8,000；已交 3,000；月末未交 = 8,000 − 3,000 = 5,000。',
    tip: '借：应交税费——应交增值税（转出未交增值税）5,000 / 贷：应交税费——未交增值税 5,000。'
  },

  /* ========== 实务 · 第 7 章：所有者权益 ========== */
  {
    lesson_id: 19,
    subject: '实务',
    chapter: 7,
    section: 7,
    title: '实收资本与资本公积',
    content:
      '所有者投入资本按约定比例计入「实收资本/股本」；超出部分计入「资本公积——资本溢价/股本溢价」。资本公积不能用来弥补亏损（限于盈余公积）。',
    scenario:
      '场景：股东以银行存款 1,200,000 元投入甲有限责任公司，合同约定在注册资本中的份额为 1,000,000 元。',
    interaction_type: 'journal',
    tags: { type: 'journal', level: 'improve', hot: ['equity-paid-in'] },
    prompt: '请完成股东出资的会计分录：',
    slots: [
      {
        side: '借',
        correct_account: '银行存款',
        correct_amount: 1200000,
        account_options: ['银行存款', '实收资本', '资本公积', '盈余公积']
      },
      {
        side: '贷',
        correct_account: '实收资本',
        correct_amount: 1000000,
        account_options: ['实收资本', '资本公积', '盈余公积', '未分配利润']
      },
      {
        side: '贷',
        correct_account: '资本公积',
        correct_amount: 200000,
        account_options: ['资本公积', '实收资本', '盈余公积', '营业外收入']
      }
    ],
    error_hint: '投入 1,200,000，约定份额 1,000,000，差额 200,000 作为「资本公积——资本溢价」。',
    tip: '超额出资 = 资本公积；弥补亏损 ≠ 资本公积（只能用盈余公积）。'
  },
  {
    lesson_id: 20,
    subject: '实务',
    chapter: 7,
    section: 7,
    title: '盈余公积的计提与用途',
    content:
      '公司制企业按当年净利润 10% 计提「法定盈余公积」，累计达注册资本 50% 以上可不再计提。盈余公积可弥补亏损、转增资本、发放股利。',
    scenario: '场景：企业本年度实现净利润 800,000 元，法定盈余公积尚未达到上限。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'basic', hot: ['surplus-reserve'] },
    prompt: '本年度应计提法定盈余公积的金额是（　　）？',
    options: [
      { text: '40,000 元', is_correct: false },
      { text: '80,000 元', is_correct: true },
      { text: '120,000 元', is_correct: false },
      { text: '160,000 元', is_correct: false }
    ],
    error_hint: '法定盈余公积 = 净利润 × 10% = 800,000 × 10% = 80,000。',
    tip: '分录：借：利润分配——提取法定盈余公积 80,000 / 贷：盈余公积 80,000。'
  },
  {
    lesson_id: 21,
    subject: '实务',
    chapter: 7,
    section: 7,
    title: '报表项目归位',
    content:
      '财务报表两大主表各有归属：资产负债表（时点表）反映资产、负债、所有者权益三大要素的余额；利润表（期间表）反映收入、费用、利润的发生额。把项目放对表，才能保证两张表都不串线。',
    scenario: '场景：月末做报表，实习生把收入、费用和资产科目混着放，导致利润表科目跑进了资产负债表。请你把项目拖回正确的表里。',
    interaction_type: 'drag',
    tags: { type: 'concept', level: 'basic', hot: ['report-mapping'] },
    prompt: '把下列项目拖进对应报表：',
    pool_label: '待归位项目',
    items: [
      '货币资金',
      '应收账款',
      '存货',
      '应付账款',
      '实收资本',
      '主营业务收入',
      '营业成本',
      '销售费用',
      '管理费用',
      '营业利润'
    ],
    zones: [
      { key: 'balance', label: '资产负债表' },
      { key: 'income', label: '利润表' }
    ],
    answer: {
      balance: ['货币资金', '应收账款', '存货', '应付账款', '实收资本'],
      income: ['主营业务收入', '营业成本', '销售费用', '管理费用', '营业利润']
    },
    error_hint:
      '收入、成本、费用、利润都是期间发生额，归利润表；资产、负债、所有者权益三要素都是时点余额，归资产负债表。',
    tip: '口诀：资产负债看时点，利润看一段时间；资负权在左表，收费利在右表。'
  },

  /* ========== 实务 · 第 8 章：收入、费用与利润 ========== */
  {
    lesson_id: 22,
    subject: '实务',
    chapter: 8,
    section: 8,
    title: '五步法确认收入',
    content:
      '新收入准则「五步法」：① 识别合同 ② 识别履约义务 ③ 确定交易价格 ④ 将交易价格分摊至各履约义务 ⑤ 履约义务完成时确认收入（时点或时段）。',
    scenario:
      '场景：公司销售设备同时提供 1 年免费售后维修服务。合同总价 50,000。单独售价：设备 48,000、维修 4,000。',
    interaction_type: 'single',
    tags: { type: 'concept', level: 'improve', hot: ['revenue-5step'] },
    prompt: '该合同应确认的设备销售收入（交易价格分摊后）最接近（　　）？',
    options: [
      { text: '50,000 元', is_correct: false },
      { text: '48,000 元', is_correct: false },
      { text: '46,154 元', is_correct: true },
      { text: '44,000 元', is_correct: false }
    ],
    error_hint:
      '按单独售价比例分摊：设备 = 50,000 × 48,000 / (48,000 + 4,000) ≈ 46,154；维修 ≈ 3,846。',
    tip: '两个履约义务 → 按单独售价比例分摊合同总价，分别确认收入。'
  },
  {
    lesson_id: 23,
    subject: '实务',
    chapter: 8,
    section: 8,
    title: '期末结转本年利润',
    content:
      '期末将收入类贷方余额、费用类借方余额全部转入「本年利润」。贷方余额表示盈利，借方余额表示亏损。年末再转入「利润分配——未分配利润」。',
    scenario:
      '场景：12 月末，主营业务收入 500,000、主营业务成本 300,000、管理费用 80,000、所得税费用 30,000。',
    interaction_type: 'single',
    tags: { type: 'journal', level: 'basic', hot: ['profit-carry'] },
    prompt: '结转后本年利润的余额是（　　）？',
    options: [
      { text: '借方 90,000', is_correct: false },
      { text: '贷方 90,000', is_correct: true },
      { text: '贷方 120,000', is_correct: false },
      { text: '借方 200,000', is_correct: false }
    ],
    error_hint: '本年利润 = 500,000 − 300,000 − 80,000 − 30,000 = 90,000（盈利，贷方）。',
    tip: '年末再把 90,000 从本年利润借方转入「利润分配——未分配利润」贷方。'
  },
  {
    lesson_id: 24,
    subject: '实务',
    chapter: 8,
    section: 8,
    title: '利润表核心勾稽',
    content:
      '利润表勾稽：营业收入 − 营业成本 − 税金及附加 − 销售费用 − 管理费用 − 研发费用 − 财务费用 + 其他收益 + 投资收益 ± 公允价值变动 − 信用减值损失 − 资产减值损失 + 资产处置收益 = 营业利润。营业利润 + 营业外收入 − 营业外支出 = 利润总额。',
    scenario: '场景：营业收入 1,000、营业成本 600、税金及附加 20、三费合计 150、营业外收入 30。',
    interaction_type: 'single',
    tags: { type: 'concept', level: 'improve', hot: ['income-statement'] },
    prompt: '根据上述数据，利润总额为（　　）？',
    options: [
      { text: '230', is_correct: false },
      { text: '260', is_correct: true },
      { text: '280', is_correct: false },
      { text: '380', is_correct: false }
    ],
    error_hint:
      '营业利润 = 1,000 − 600 − 20 − 150 = 230；利润总额 = 230 + 30 = 260。',
    tip: '营业外收支只影响利润总额，不影响营业利润。'
  },

  /* ========== 经济法 · 第 1 章：总论 ========== */
  {
    lesson_id: 25,
    subject: '经济法',
    chapter: 1,
    section: 9,
    title: '法律行为与代理',
    content:
      '民事法律行为成立要件：行为人具有相应的民事行为能力；意思表示真实；不违反法律、行政法规的强制性规定；不违背公序良俗。代理分为委托代理与法定代理；无权代理经被代理人追认后对其发生效力。',
    scenario:
      '场景：10 岁小明未经父母同意，将父母的手机以 2,000 元卖给了邻居。该行为效力如何？',
    interaction_type: 'single',
    tags: { type: 'law', level: 'basic', hot: ['legal-act'] },
    prompt: '下列民事法律行为，属于「效力待定」的是（　　）？',
    options: [
      { text: '8 周岁儿童购买文具', is_correct: false },
      { text: '限制民事行为能力人实施的、与其年龄不相适应的买卖行为', is_correct: true },
      { text: '受胁迫签订的合同', is_correct: false },
      { text: '恶意串通损害他人利益的合同', is_correct: false }
    ],
    error_hint:
      '8 岁属无民事行为能力人（纯获利有效）；胁迫属可撤销；恶意串通无效。限制行为能力人超出能力范围的行为 → 效力待定，经法定代理人追认有效。',
    tip: '无效 / 可撤销 / 效力待定，三者务必分清。'
  },
  {
    lesson_id: 26,
    subject: '经济法',
    chapter: 1,
    section: 9,
    title: '诉讼时效',
    content:
      '一般诉讼时效 3 年，最长 20 年；仲裁劳动争议 1 年。诉讼时效中断：从当事人请求、对方同意履行、起诉或申请仲裁之日起，时效重新计算。',
    scenario:
      '场景：2022-03-01 甲欠乙 10 万元到期未还；2024-01-15 乙发催款函，甲承诺 3 月底前还。问乙请求法院保护的诉讼时效期间何时届满？',
    interaction_type: 'single',
    tags: { type: 'law', level: 'improve', hot: ['limitation'] },
    prompt: '本案诉讼时效最终届满日是（　　）？',
    options: [
      { text: '2025-03-01', is_correct: false },
      { text: '2025-01-15', is_correct: false },
      { text: '2027-01-15', is_correct: true },
      { text: '2042-03-01', is_correct: false }
    ],
    error_hint:
      '甲承诺履行导致时效中断，从 2024-01-15 起重新起算 3 年 → 2027-01-15。且未超过 20 年最长时效。',
    tip: '中断 = 重新起算；中止 = 暂停，障碍消除后继续计算剩余期间。'
  },

  /* ========== 经济法 · 第 2 章：会计法律制度 ========== */
  {
    lesson_id: 27,
    subject: '经济法',
    chapter: 2,
    section: 10,
    title: '会计档案的保管期限',
    content:
      '会计档案的保管期限分 10 年和 30 年两档（2016 年新规）。年度财务会计报告、会计档案鉴定意见书、会计档案保管清册保管期限为「永久」。',
    scenario: '场景：公司 2023 年度原始凭证已归档，问该批凭证应保管到哪一年？',
    interaction_type: 'single',
    tags: { type: 'law', level: 'basic', hot: ['archive'] },
    prompt: '下列会计档案保管期限描述错误的是（　　）？',
    options: [
      { text: '原始凭证、记账凭证保管 30 年', is_correct: false },
      { text: '总账、明细账保管 30 年', is_correct: false },
      { text: '月度、季度财务会计报告保管 10 年', is_correct: false },
      { text: '银行存款余额调节表保管 30 年', is_correct: true }
    ],
    error_hint: '银行存款余额调节表、银行对账单保管期限为 10 年。凭证和账簿才是 30 年。',
    tip: '永久：年度财务会计报告、档案鉴定意见书、档案保管清册；30 年：凭证账簿；10 年：其他。'
  },
  {
    lesson_id: 28,
    subject: '经济法',
    chapter: 2,
    section: 10,
    title: '会计人员任职——谁能上，谁要回避',
    content:
      '会计机构负责人（会计主管）须具备会计师以上专业技术资格，或从事会计工作 3 年以上。国家机关、国有企事业单位的单位负责人的直系亲属不得担任本单位会计机构负责人，且不得与单位负责人互任出纳。把人员情形拖到对应栏位，判断能否担任会计主管（或关键岗位）。',
    scenario: '场景：某国有企业正在选聘财务部经理（会计机构负责人）。下列几位候选人或情形，哪些合法、哪些必须回避？',
    interaction_type: 'drag',
    tags: { type: 'law', level: 'basic', hot: ['accountant-job'] },
    prompt: '把下列情形拖到对应栏位：',
    pool_label: '候选情形',
    items: [
      '取得会计师资格的外聘会计',
      '从事会计工作 5 年、无亲属关系的内部候选人',
      '单位负责人的配偶',
      '单位负责人的父母',
      '单位负责人的亲兄弟',
      '单位负责人的子女'
    ],
    zones: [
      { key: 'ok', label: '可担任会计机构负责人' },
      { key: 'avoid', label: '须回避（直系亲属）' }
    ],
    answer: {
      ok: ['取得会计师资格的外聘会计', '从事会计工作 5 年、无亲属关系的内部候选人'],
      avoid: [
        '单位负责人的配偶',
        '单位负责人的父母',
        '单位负责人的亲兄弟',
        '单位负责人的子女'
      ]
    },
    error_hint:
      '回避对象 = 直系亲属（配偶、父母、子女、兄弟姐妹、祖孙）。任职条件 = 会计师以上专业资格或从事会计工作 3 年以上。',
    tip: '口诀：亲属要回避，资历看年限；会计师或 3 年经验，二者选其一。'
  },

  /* ========== 经济法 · 第 3 章：支付结算法律制度 ========== */
  {
    lesson_id: 29,
    subject: '经济法',
    chapter: 3,
    section: 11,
    title: '票据的种类与特征',
    content:
      '票据包括汇票、本票、支票。汇票分银行汇票、商业汇票（又分银行承兑、商业承兑）。本票在我国特指银行本票（见票即付）。支票分现金支票（只能提现）、转账支票、普通支票。',
    scenario: '场景：甲公司为跨省大额付款选择票据工具，不允许退票，希望见票即付。',
    interaction_type: 'single',
    tags: { type: 'concept', level: 'basic', hot: ['note-type'] },
    prompt: '最符合上述要求的票据是（　　）？',
    options: [
      { text: '商业承兑汇票', is_correct: false },
      { text: '银行承兑汇票', is_correct: false },
      { text: '银行本票', is_correct: true },
      { text: '转账支票', is_correct: false }
    ],
    error_hint:
      '银行本票：银行签发、见票即付、不得退票，适合同城或异地大额结算。银行汇票也见票即付但出票人是银行并限指定银行付款。',
    tip: '本票 = 银行本人承诺付款；汇票 = 出票人委托付款人付款。'
  },
  {
    lesson_id: 30,
    subject: '经济法',
    chapter: 3,
    section: 11,
    title: '票据权利的时效',
    content:
      '汇票、本票持票人对出票人、承兑人的权利：自票据到期日起 2 年；见票即付的本票自出票日起 2 年。支票持票人对出票人的权利：自出票日起 6 个月。追索权：自被拒绝日起 6 个月；再追索权：自清偿日或被起诉日起 3 个月。',
    scenario: '场景：2024-03-01 签发商业汇票，票面到期日 2024-09-01。问持票人对承兑人的权利何时消灭？',
    interaction_type: 'single',
    tags: { type: 'law', level: 'improve', hot: ['note-time'] },
    prompt: '持票人对承兑人行使票据权利的时效届满日是（　　）？',
    options: [
      { text: '2024-09-01', is_correct: false },
      { text: '2025-03-01', is_correct: false },
      { text: '2025-09-01', is_correct: false },
      { text: '2026-09-01', is_correct: true }
    ],
    error_hint: '商业汇票持票人对承兑人的权利 2 年，自到期日 2024-09-01 起算，届满日 2026-09-01。',
    tip: '口诀：出承 2 年、支票 6 月、追索 6 月、再追 3 月。'
  },

  /* ========== 经济法 · 第 4 章：增值税、消费税 ========== */
  {
    lesson_id: 31,
    subject: '经济法',
    chapter: 4,
    section: 12,
    title: '增值税税率与征收率',
    content:
      '现行一般纳税人增值税税率：13%（大多数货物及进口）、9%（交通运输/邮政/基础电信/建筑/不动产/农产品）、6%（现代服务、金融、生活服务等）、出口 0。小规模纳税人征收率 3%（阶段性优惠 1%）。',
    scenario: '场景：一般纳税人某月销售不动产、运输服务、咨询服务，四选一确定税率。',
    interaction_type: 'single',
    tags: { type: 'law', level: 'basic', hot: ['vat-rate'] },
    prompt: '下列业务适用 9% 增值税税率的是（　　）？',
    options: [
      { text: '销售机器设备', is_correct: false },
      { text: '提供咨询服务', is_correct: false },
      { text: '销售不动产', is_correct: true },
      { text: '销售图书（出版物按 9% 但例题给出一般情形需甄别）', is_correct: false }
    ],
    error_hint: '销售机器设备适用 13%；咨询服务 6%；销售不动产 9%。',
    tip: '记忆：13% 货物、9% 三项不动产运输、6% 现代服务和金融、0 出口、小规模 3%（减按 1%）。'
  },
  {
    lesson_id: 32,
    subject: '经济法',
    chapter: 4,
    section: 12,
    title: '消费税的征收范围',
    content:
      '消费税 15 个税目：烟、酒、高档化妆品、贵重首饰及珠宝玉石、鞭炮烟火、成品油、摩托车、小汽车、高尔夫球及球具、高档手表、游艇、木制一次性筷子、实木地板、电池、涂料。',
    scenario: '场景：某企业同时销售香烟、白酒、普通化妆品、啤酒花。哪些交消费税？',
    interaction_type: 'select',
    tags: { type: 'concept', level: 'basic', hot: ['excise'] },
    prompt: '下列商品中，属于消费税征税范围的是（可多选）：',
    options: [
      { text: '香烟', is_correct: true },
      { text: '白酒', is_correct: true },
      { text: '啤酒', is_correct: true },
      { text: '普通化妆品', is_correct: false },
      { text: '小汽车', is_correct: true },
      { text: '普通手表', is_correct: false },
      { text: '木制一次性筷子', is_correct: true }
    ],
    error_hint: '消费税改革后「普通化妆品」已剔除，仅高档化妆品征税；普通手表不征，只有高档手表征。',
    tip: '口诀：烟酒化妆（高档）贵首饰、鞭烟油摩小汽车、高尔高手游木地、木筷电池涂料加。'
  },

  /* ========== 经济法 · 第 5 章：企业所得税、个人所得税 ========== */
  {
    lesson_id: 33,
    subject: '经济法',
    chapter: 5,
    section: 13,
    title: '企业所得税——应纳税所得额',
    content:
      '应纳税所得额 = 收入总额 − 不征税收入 − 免税收入 − 各项扣除 − 允许弥补的以前年度亏损。基本税率 25%；小微企业阶段性优惠；高新技术企业 15%。',
    scenario:
      '场景：某小型微利企业 2024 年收入 500 万、成本费用 420 万、营业外支出（公益捐赠）10 万。假设利润总额在公益捐赠 12% 扣除限额内允许全额扣除。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['cit-taxable'] },
    prompt: '该企业应纳税所得额为（　　）？',
    options: [
      { text: '80 万元', is_correct: false },
      { text: '70 万元', is_correct: true },
      { text: '90 万元', is_correct: false },
      { text: '100 万元', is_correct: false }
    ],
    error_hint: '利润总额 = 500 − 420 − 10 = 70 万。题设捐赠在 12% 限额内，全额扣除；不再调整。',
    tip: '公益性捐赠扣除限额 = 年度利润总额 × 12%，超出部分可结转 3 年。'
  },
  {
    lesson_id: 34,
    subject: '经济法',
    chapter: 5,
    section: 13,
    title: '个人所得税——综合所得',
    content:
      '居民个人综合所得（工资薪金 + 劳务报酬 + 稿酬 + 特许权使用费）适用 3%–45% 七级超额累进，按年计税。基本减除费用 60,000 元/年（5,000 元/月），另有专项扣除、专项附加扣除。',
    scenario:
      '场景：张先生 2024 年综合所得应纳税所得额（扣完起征点、五险一金、专项附加后）为 96,000 元。适用税率 10%、速算扣除数 2,520。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'improve', hot: ['iit-comprehensive'] },
    prompt: '张先生 2024 年综合所得应纳个人所得税为（　　）？',
    options: [
      { text: '9,600 元', is_correct: false },
      { text: '7,080 元', is_correct: true },
      { text: '2,520 元', is_correct: false },
      { text: '12,120 元', is_correct: false }
    ],
    error_hint: '应纳税额 = 应纳税所得额 × 税率 − 速算扣除数 = 96,000 × 10% − 2,520 = 7,080。',
    tip: '七级税率边界（税前）：3.6 万、14.4 万、30 万、42 万、66 万、96 万。'
  },

  /* ========== 经济法 · 第 6 章：其他税收法律制度 ========== */
  {
    lesson_id: 35,
    subject: '经济法',
    chapter: 6,
    section: 14,
    title: '房产税的两种计税方法',
    content:
      '房产税两种：① 从价计征：应纳税额 = 房产原值 × (1 − 10%~30%) × 1.2%；② 从租计征：应纳税额 = 租金收入 × 12%（个人出租住房 4%）。',
    scenario:
      '场景：某企业自有办公楼原值 2,000 万元，当地扣除比例 30%；同时对外出租仓库一间年租金 60 万元。',
    interaction_type: 'single',
    tags: { type: 'calc', level: 'exam', hot: ['property-tax'] },
    prompt: '该企业当年应纳房产税合计（　　）？',
    options: [
      { text: '16.8 万元', is_correct: false },
      { text: '24.0 万元', is_correct: true },
      { text: '28.8 万元', is_correct: false },
      { text: '31.2 万元', is_correct: false }
    ],
    error_hint:
      '自用从价：2,000 × (1 − 30%) × 1.2% = 16.8 万；出租从租：60 × 12% = 7.2 万；合计 16.8 + 7.2 = 24.0 万。',
    tip: '从价按原值、从租按租金、个人住房出租 4% 优惠。'
  },
  {
    lesson_id: 36,
    subject: '经济法',
    chapter: 6,
    section: 14,
    title: '印花税——哪些凭证要贴花',
    content:
      '印花税只对税法列举的「应税凭证」征收，未列入名录的一律不征。常见应税：购销合同、借款合同、产权转移书据、营业账簿、财产租赁合同、加工承揽合同等。常见不征税：人身保险合同、委托代理合同（非产权转移）、个人租赁住房合同、企业内部承包经营合同等。',
    scenario: '场景：企业法务整理近期签订的合同，请按印花税税法判断哪些需要申报。',
    interaction_type: 'drag',
    tags: { type: 'concept', level: 'basic', hot: ['stamp-tax'] },
    prompt: '把下列凭证拖到对应栏位：',
    pool_label: '待判定凭证',
    items: [
      '购销合同',
      '借款合同（银行）',
      '产权转移书据（厂房过户）',
      '营业账簿',
      '人身保险合同',
      '委托代理合同',
      '个人租赁住房合同'
    ],
    zones: [
      { key: 'taxable', label: '应税凭证' },
      { key: 'exempt', label: '不征印花税' }
    ],
    answer: {
      taxable: ['购销合同', '借款合同（银行）', '产权转移书据（厂房过户）', '营业账簿'],
      exempt: ['人身保险合同', '委托代理合同', '个人租赁住房合同']
    },
    error_hint:
      '印花税严格遵循「正列举」：税法没列的一律不征。人身保险、委托代理、个人住房租赁均不在列举范围。',
    tip: '常见税率：购销 0.3‰、借款 0.05‰、产权转移 0.5‰、营业账簿 0.25‰。'
  },

  /* ========== 经济法 · 第 7 章：税收征收管理法律制度 ========== */
  {
    lesson_id: 37,
    subject: '经济法',
    chapter: 7,
    section: 15,
    title: '税务登记与发票管理',
    content:
      '从事生产、经营的纳税人，自领取营业执照之日起 30 日内向税务机关申报办理税务登记；变更、注销登记也有相应期限。使用发票应当按规定开具、取得、保管，不得虚开。',
    scenario: '场景：A 公司 2024-03-10 领取营业执照，法定办理税务登记的最晚日期是？',
    interaction_type: 'single',
    tags: { type: 'law', level: 'basic', hot: ['tax-register'] },
    prompt: 'A 公司办理税务登记的最晚日期是（　　）？',
    options: [
      { text: '2024-03-20', is_correct: false },
      { text: '2024-03-25', is_correct: false },
      { text: '2024-04-09', is_correct: true },
      { text: '2024-04-30', is_correct: false }
    ],
    error_hint: '领取营业执照之日起 30 日内 → 2024-03-10 + 30 日 = 2024-04-09。',
    tip: '30 日：税务登记 / 变更 / 注销（一般）；60 日：税款复议前置期限。'
  },
  {
    lesson_id: 38,
    subject: '经济法',
    chapter: 7,
    section: 15,
    title: '税收保全与强制执行',
    content:
      '税收保全措施：针对尚未到期的欠税风险，经县以上税务局局长批准可冻结存款、查封扣押商品。强制执行：对逾期不缴者，可从存款中扣缴、拍卖查封扣押财产抵税。两者均不得及于个人/被扶养人维持生活必需品。',
    scenario: '场景：纳税人逾期未缴税款，经催告仍不缴纳，税务机关拟采取强制执行。',
    interaction_type: 'single',
    tags: { type: 'law', level: 'improve', hot: ['tax-enforcement'] },
    prompt: '下列财产，税务机关「不得」作为强制执行标的的是（　　）？',
    options: [
      { text: '企业生产设备', is_correct: false },
      { text: '企业银行存款', is_correct: false },
      { text: '纳税人本人及被扶养家属生活必需品', is_correct: true },
      { text: '企业库存商品', is_correct: false }
    ],
    error_hint: '税收强制执行和保全均不得及于个人及被扶养人维持生活必需的住房和用品。',
    tip: '强制执行前提：书面催告 + 县级以上局长批准。'
  },

  /* ========== 经济法 · 第 8 章：劳动合同与社会保险法律制度 ========== */
  {
    lesson_id: 39,
    subject: '经济法',
    chapter: 8,
    section: 16,
    title: '劳动合同的试用期',
    content:
      '试用期规则：合同 3 月以下或以完成一定工作任务为期限的，不得约定试用期；3 月–1 年，试用期不超过 1 月；1–3 年，不超过 2 月；3 年以上及无固定期限，不超过 6 月。同一用人单位与同一劳动者只能约定一次试用期。',
    scenario: '场景：公司与新员工签订 2 年期劳动合同，约定试用期 3 个月。合法吗？',
    interaction_type: 'single',
    tags: { type: 'law', level: 'basic', hot: ['labor-probation'] },
    prompt: '下列试用期约定合法的是（　　）？',
    options: [
      { text: '6 个月劳动合同约定试用期 2 个月', is_correct: false },
      { text: '2 年劳动合同约定试用期 3 个月', is_correct: false },
      { text: '3 年劳动合同约定试用期 6 个月', is_correct: true },
      { text: '以完成装修任务为期限的合同约定试用期 15 天', is_correct: false }
    ],
    error_hint: '6 月合同试用期上限 1 月；2 年合同上限 2 月；3 年期及以上上限 6 月；完成一定任务合同不得约定试用期。',
    tip: '口诀：3 月以下不约、3—12 月 1 月、1—3 年 2 月、3 年以上 6 月。'
  },
  {
    lesson_id: 40,
    subject: '经济法',
    chapter: 8,
    section: 16,
    title: '社会保险五险与缴费',
    content:
      '社会保险五险：养老、医疗、失业、工伤、生育。由单位和个人共同缴纳的有养老、医疗、失业；由单位全额承担的有工伤、生育（2019 年起已与医疗合并征收，但单位仍承担）。',
    scenario: '场景：李女士参加五险，哪些是她个人也需要缴费的？',
    interaction_type: 'select',
    tags: { type: 'law', level: 'basic', hot: ['social-insurance'] },
    prompt: '下列险种，需要个人「与」单位共同缴费的是（可多选）：',
    options: [
      { text: '养老保险', is_correct: true },
      { text: '医疗保险', is_correct: true },
      { text: '失业保险', is_correct: true },
      { text: '工伤保险', is_correct: false },
      { text: '生育保险', is_correct: false }
    ],
    error_hint: '工伤、生育由单位全额承担；养老、医疗、失业由单位和个人共同缴纳。',
    tip: '口诀：工伤生育单位扛，养医失业共担当。'
  }
];
