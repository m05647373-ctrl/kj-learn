/**
 * 练习题库 v1（举一反三）
 * - 不影响原 lessons.js 闯关进度
 * - id 从 10001 起，按 source_lesson_id 分组挂回原课
 * - 每个 source_lesson_id 提供 9 道扩展题（与原题合计 10 题）
 *
 * 字段：
 *   practice_id        全局唯一
 *   source_lesson_id   挂回原课
 *   type               concept | calc | journal | law | comprehensive
 *   level              basic | improve | exam
 *   hot                高频考点标签数组（见 TAGS.md）
 *   interaction_type   single | multi | select | journal
 *   prompt / options / explain
 *
 * 字符串一律单引号包裹，内部用「」 ''  避免嵌套冲突。
 */
window.PRACTICE = [

  /* =========================================================
   *  source_lesson_id = 1  ·  认识「资产」（六大要素 - 资产辨认）
   * ========================================================= */
  {
    practice_id: 10001, source_lesson_id: 1,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '下列各项中，不属于资产的是（　）。',
    options: [
      { text: '银行存款',     is_correct: false },
      { text: '应收账款',     is_correct: false },
      { text: '应付账款',     is_correct: true  },
      { text: '原材料',       is_correct: false }
    ],
    explain: '应付账款是企业欠供应商的钱，属于负债，不是资产。资产 = 我有的钱 + 别人欠我的钱 + 我拥有的东西。'
  },
  {
    practice_id: 10002, source_lesson_id: 1,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '资产的最主要特征是（　）。',
    options: [
      { text: '由企业拥有或控制',                                 is_correct: false },
      { text: '是过去交易或事项形成的',                           is_correct: false },
      { text: '预期会给企业带来经济利益',                         is_correct: true  },
      { text: '能够用货币计量'                                    , is_correct: false }
    ],
    explain: '三要件缺一不可，但「预期带来经济利益」是资产区别于其他资源的核心。无法带来经济利益的不能确认为资产。'
  },
  {
    practice_id: 10003, source_lesson_id: 1,
    type: 'concept', level: 'improve', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列各项中，符合资产定义的有（　）。【不定项 · 漏选错选不得分】',
    options: [
      { label: 'A', text: '已经报废、待处理的固定资产',           is_correct: false },
      { label: 'B', text: '融资租入的设备（虽然没产权）',         is_correct: true  },
      { label: 'C', text: '经营租入的设备',                       is_correct: false },
      { label: 'D', text: '自行研发尚未形成成果的支出',           is_correct: false },
      { label: 'E', text: '存放在仓库的库存商品',                 is_correct: true  }
    ],
    explain: '融资租入设备虽无产权但企业实质控制 → 算资产；经营租入只是临时使用权 → 不入账。已报废资产不再带来经济利益、研发未成功的支出未达资本化条件，均不属于资产。'
  },
  {
    practice_id: 10004, source_lesson_id: 1,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '某公司购入一台设备 50 万元，预计能使用 10 年并每年产出 8 万元收入。该设备应确认为（　）。',
    options: [
      { text: '费用',         is_correct: false },
      { text: '资产',         is_correct: true  },
      { text: '负债',         is_correct: false },
      { text: '所有者权益',   is_correct: false }
    ],
    explain: '设备由企业控制、未来 10 年带来经济利益流入、成本可可靠计量，符合资产三要件。'
  },
  {
    practice_id: 10005, source_lesson_id: 1,
    type: 'concept', level: 'improve', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '下列项目中，属于流动资产的是（　）。',
    options: [
      { text: '固定资产',         is_correct: false },
      { text: '无形资产',         is_correct: false },
      { text: '应收账款',         is_correct: true  },
      { text: '长期股权投资',     is_correct: false }
    ],
    explain: '一年内能变现的资产为流动资产。应收账款通常 1 年内收回，属流动资产；其余三项均超过 1 年，属非流动资产。'
  },
  {
    practice_id: 10006, source_lesson_id: 1,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于资产的有（　）。【不定项】',
    options: [
      { label: 'A', text: '库存现金',                 is_correct: true  },
      { label: 'B', text: '原材料',                   is_correct: true  },
      { label: 'C', text: '预收账款',                 is_correct: false },
      { label: 'D', text: '商誉',                     is_correct: true  },
      { label: 'E', text: '应付债券',                 is_correct: false }
    ],
    explain: '商誉是无形资产的一种特殊形式，属资产。预收账款是欠客户的货物义务，属负债；应付债券属负债。'
  },
  {
    practice_id: 10007, source_lesson_id: 1,
    type: 'concept', level: 'improve', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '企业接受捐赠的设备应确认为（　）。',
    options: [
      { text: '收入',           is_correct: false },
      { text: '资产',           is_correct: true  },
      { text: '资本公积增加',   is_correct: false },
      { text: '利润'            , is_correct: false }
    ],
    explain: '问的是「确认为什么要素」——设备本身是资产；同时还会贷记营业外收入（损益）。题目只问设备这一项的归类。'
  },
  {
    practice_id: 10008, source_lesson_id: 1,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '下列说法错误的是（　）。',
    options: [
      { text: '企业拥有的固定资产是资产',                       is_correct: false },
      { text: '企业租入的办公楼是资产',                         is_correct: true  },
      { text: '企业的银行存款是资产',                           is_correct: false },
      { text: '企业的应收账款是资产'                            , is_correct: false }
    ],
    explain: '经营租入的办公楼，企业不拥有也不实质控制，不能确认为资产；融资租入才能。'
  },
  {
    practice_id: 10009, source_lesson_id: 1,
    type: 'concept', level: 'exam', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列项目中，不应当确认为企业资产的有（　）。【不定项 · 真题级】',
    options: [
      { label: 'A', text: '正在研发、技术上尚未确定能否成功的开发支出', is_correct: true  },
      { label: 'B', text: '经营租入的运输车辆',                         is_correct: true  },
      { label: 'C', text: '已签订购销合同但尚未收到的存货',             is_correct: true  },
      { label: 'D', text: '盘亏待处理的库存商品',                       is_correct: false },
      { label: 'E', text: '抵押给银行尚未解除抵押的厂房',               is_correct: false }
    ],
    explain: '①开发支出未达资本化条件不入账；②经营租入不入账；③合同已签但货未到尚未控制；④盘亏在处理前仍是企业资产（挂待处理财产损溢）；⑤抵押不改变所有权，仍是企业资产。'
  },
];

/* =========================================================
 *  source_lesson_id = 2  ·  六大会计要素速辨（不定项）
 * ========================================================= */
window.PRACTICE.push(
  {
    practice_id: 10011, source_lesson_id: 2,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '下列科目中，属于负债的是（　）。',
    options: [
      { text: '预付账款',   is_correct: false },
      { text: '预收账款',   is_correct: true  },
      { text: '应收账款',   is_correct: false },
      { text: '其他应收款', is_correct: false }
    ],
    explain: '「预付」是我给别人钱还没拿货 → 资产；「预收」是别人给我钱还没交货 → 负债。记忆口诀：预付是资产，预收是负债。'
  },
  {
    practice_id: 10012, source_lesson_id: 2,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列项目中，属于负债的有（　）。【不定项】',
    options: [
      { label: 'A', text: '短期借款',       is_correct: true  },
      { label: 'B', text: '应付职工薪酬',   is_correct: true  },
      { label: 'C', text: '应交税费',       is_correct: true  },
      { label: 'D', text: '应付股利',       is_correct: true  },
      { label: 'E', text: '实收资本',       is_correct: false }
    ],
    explain: '「应付、应交」多是负债；实收资本是股东投入，属所有者权益。'
  },
  {
    practice_id: 10013, source_lesson_id: 2,
    type: 'concept', level: 'improve', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '下列项目中，不属于所有者权益的是（　）。',
    options: [
      { text: '实收资本',   is_correct: false },
      { text: '资本公积',   is_correct: false },
      { text: '库存股',     is_correct: false },
      { text: '应付股利',   is_correct: true  }
    ],
    explain: '应付股利是公司欠股东的现金，属负债。库存股是所有者权益的抵减项，但本质仍属所有者权益类别。'
  },
  {
    practice_id: 10014, source_lesson_id: 2,
    type: 'concept', level: 'improve', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列科目中，期末余额会在资产负债表中反映的有（　）。【不定项】',
    options: [
      { label: 'A', text: '主营业务收入',   is_correct: false },
      { label: 'B', text: '应收账款',       is_correct: true  },
      { label: 'C', text: '管理费用',       is_correct: false },
      { label: 'D', text: '应付账款',       is_correct: true  },
      { label: 'E', text: '本年利润',       is_correct: false }
    ],
    explain: '收入/费用/本年利润属损益类，期末结转本年利润后余额为零，反映在利润表。只有资产/负债/所有者权益类科目余额反映在资产负债表。'
  },
  {
    practice_id: 10015, source_lesson_id: 2,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '「盈余公积」属于（　）要素。',
    options: [
      { text: '收入',           is_correct: false },
      { text: '费用',           is_correct: false },
      { text: '负债',           is_correct: false },
      { text: '所有者权益',     is_correct: true  }
    ],
    explain: '盈余公积是企业从净利润中提取的积累，属于所有者权益四大件之一（实收资本、资本公积、盈余公积、未分配利润）。'
  },
  {
    practice_id: 10016, source_lesson_id: 2,
    type: 'concept', level: 'improve', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于费用的有（　）。【不定项】',
    options: [
      { label: 'A', text: '销售费用',       is_correct: true  },
      { label: 'B', text: '管理费用',       is_correct: true  },
      { label: 'C', text: '财务费用',       is_correct: true  },
      { label: 'D', text: '营业外支出',     is_correct: false },
      { label: 'E', text: '所得税费用',     is_correct: true  }
    ],
    explain: '费用是「日常活动中发生的经济利益流出」。营业外支出属于损失，不是费用；所得税费用被视作一项单独的费用要素，也计入利润表。'
  },
  {
    practice_id: 10017, source_lesson_id: 2,
    type: 'concept', level: 'basic', hot: ['six-elements'],
    interaction_type: 'single',
    prompt: '下列不属于收入的是（　）。',
    options: [
      { text: '主营业务收入',   is_correct: false },
      { text: '其他业务收入',   is_correct: false },
      { text: '投资收益',       is_correct: true  },
      { text: '销售商品收入',   is_correct: false }
    ],
    explain: '投资收益属于「利得」，不计入「收入」要素。新会计准则下收入仅指日常经营活动形成的经济利益流入。'
  },
  {
    practice_id: 10018, source_lesson_id: 2,
    type: 'concept', level: 'improve', hot: ['six-elements','borrow-credit'],
    interaction_type: 'single',
    prompt: '利润由（　）构成。',
    options: [
      { text: '收入 - 费用',                               is_correct: false },
      { text: '收入 - 费用 + 直接计入当期利润的利得 - 损失', is_correct: true  },
      { text: '收入 - 成本 - 税金',                        is_correct: false },
      { text: '营业收入 - 营业成本'                        , is_correct: false }
    ],
    explain: '利润 = 收入 - 费用 + 直接计入当期利润的利得 - 损失。利得/损失（如营业外收支）不归入收入或费用，但直接影响利润。'
  },
  {
    practice_id: 10019, source_lesson_id: 2,
    type: 'concept', level: 'exam', hot: ['six-elements'],
    interaction_type: 'multi',
    prompt: '下列项目中，应计入资产负债表「非流动负债」项目的有（　）。【真题级】',
    options: [
      { label: 'A', text: '长期借款',       is_correct: true  },
      { label: 'B', text: '应付债券',       is_correct: true  },
      { label: 'C', text: '长期应付款',     is_correct: true  },
      { label: 'D', text: '应付职工薪酬',   is_correct: false },
      { label: 'E', text: '应付票据',       is_correct: false }
    ],
    explain: '非流动负债 = 偿还期超过 1 年的负债。应付职工薪酬和应付票据通常 1 年内结清，属流动负债。'
  }
);

/* =========================================================
 *  source_lesson_id = 3  ·  会计等式——科目归位
 * ========================================================= */
window.PRACTICE.push(
  {
    practice_id: 10021, source_lesson_id: 3,
    type: 'concept', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '基本会计等式是（　）。',
    options: [
      { text: '资产 = 负债 + 所有者权益',                 is_correct: true  },
      { text: '资产 + 费用 = 负债 + 所有者权益 + 收入',    is_correct: false },
      { text: '资产 = 负债 - 所有者权益',                 is_correct: false },
      { text: '资产 - 负债 = 收入 - 费用'                , is_correct: false }
    ],
    explain: '基本等式（静态）：资产 = 负债 + 所有者权益；扩展等式（动态）：资产 + 费用 = 负债 + 所有者权益 + 收入。'
  },
  {
    practice_id: 10022, source_lesson_id: 3,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业用银行存款偿还短期借款 10 万元，该业务使等式（　）。',
    options: [
      { text: '资产增加，负债增加',     is_correct: false },
      { text: '资产减少，负债减少',     is_correct: true  },
      { text: '资产不变，负债不变',     is_correct: false },
      { text: '所有者权益减少，负债减少', is_correct: false }
    ],
    explain: '银行存款减少（资产↓）、短期借款减少（负债↓），等式两边同减，等式仍成立。'
  },
  {
    practice_id: 10023, source_lesson_id: 3,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '股东追加投资 50 万元存入银行。该业务对等式的影响是（　）。',
    options: [
      { text: '资产增加，负债增加',         is_correct: false },
      { text: '资产增加，所有者权益增加',   is_correct: true  },
      { text: '资产内部变动',               is_correct: false },
      { text: '负债增加，所有者权益减少',   is_correct: false }
    ],
    explain: '银行存款增加 50 万（资产↑），实收资本增加 50 万（所有者权益↑），等式左右两边同增。'
  },
  {
    practice_id: 10024, source_lesson_id: 3,
    type: 'concept', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业发生经济业务后，会计等式两边的总金额（　）。',
    options: [
      { text: '必然保持相等',                   is_correct: true  },
      { text: '必然不等',                       is_correct: false },
      { text: '可能相等也可能不等',             is_correct: false },
      { text: '资产总额不变',                   is_correct: false }
    ],
    explain: '任何经济业务都不会破坏会计等式——这是复式记账的根基。'
  },
  {
    practice_id: 10025, source_lesson_id: 3,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '下列业务中，仅引起资产内部变动的有（　）。【不定项】',
    options: [
      { label: 'A', text: '从银行提取现金',                           is_correct: true  },
      { label: 'B', text: '用银行存款购买设备',                       is_correct: true  },
      { label: 'C', text: '收到客户偿还的应收账款存入银行',           is_correct: true  },
      { label: 'D', text: '用银行存款偿还短期借款',                   is_correct: false },
      { label: 'E', text: '接受投资者投入的机器设备'                  , is_correct: false }
    ],
    explain: 'A/B/C 都是「资产项目之间此消彼长」。D 影响负债，E 影响所有者权益。'
  },
  {
    practice_id: 10026, source_lesson_id: 3,
    type: 'concept', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '会计等式左边是（　），右边是（　）。',
    options: [
      { text: '收入，费用',                               is_correct: false },
      { text: '资产，负债与所有者权益',                   is_correct: true  },
      { text: '负债，资产与所有者权益',                   is_correct: false },
      { text: '所有者权益，资产与负债'                    , is_correct: false }
    ],
    explain: '资产 = 负债 + 所有者权益，左为资产，右为权益（含负债和所有者权益）。'
  },
  {
    practice_id: 10027, source_lesson_id: 3,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业宣告分配现金股利 20 万元但尚未发放，对等式的影响是（　）。',
    options: [
      { text: '资产减少，所有者权益减少',                 is_correct: false },
      { text: '负债增加，所有者权益减少',                 is_correct: true  },
      { text: '资产减少，负债减少',                       is_correct: false },
      { text: '资产增加，所有者权益增加'                  , is_correct: false }
    ],
    explain: '宣告分配：借：利润分配（权益↓） / 贷：应付股利（负债↑）。实际发放时才资产减少。'
  },
  {
    practice_id: 10028, source_lesson_id: 3,
    type: 'concept', level: 'exam', hot: ['borrow-credit','six-elements'],
    interaction_type: 'multi',
    prompt: '下列业务中，会导致资产与所有者权益同时变动的有（　）。【不定项 · 真题级】',
    options: [
      { label: 'A', text: '股东追加现金投资',                         is_correct: true  },
      { label: 'B', text: '提取盈余公积',                             is_correct: false },
      { label: 'C', text: '用盈余公积转增资本',                       is_correct: false },
      { label: 'D', text: '本期实现净利润（已结转）',                 is_correct: true  },
      { label: 'E', text: '接受捐赠取得一项设备'                      , is_correct: true  }
    ],
    explain: 'A 股东投资：银行存款↑ + 实收资本↑；D 净利润：资产↑（或负债↓）+ 未分配利润↑；E 接受捐赠：设备↑ + 营业外收入→最终转入未分配利润↑。B 和 C 都只是所有者权益内部结构调整，不影响资产。'
  },
  {
    practice_id: 10029, source_lesson_id: 3,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '资产 + 费用 = 负债 + 所有者权益 + 收入，这一扩展等式（　）。',
    options: [
      { text: '只在期末成立',                   is_correct: false },
      { text: '在期中任何时点都成立',           is_correct: true  },
      { text: '只在期初成立',                   is_correct: false },
      { text: '业务结算后才成立'                , is_correct: false }
    ],
    explain: '扩展等式考虑了期中产生的未结转损益，随时成立。期末把收入费用结转到本年利润后，就回到基本等式。'
  }
,
  {
    practice_id: 10031, source_lesson_id: 4,
    type: 'journal', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '下列各项中，应记入借方的是（ ）。',
    options: [
      { text: '资产增加', is_correct: true },
      { text: '负债增加', is_correct: false },
      { text: '所有者权益增加', is_correct: false },
      { text: '收入增加', is_correct: false }
    ],
    explain: '借贷记账法规则：资产/费用类借增贷减；负债/权益/收入类贷增借减。资产增加记借方。'
  },
  {
    practice_id: 10032, source_lesson_id: 4,
    type: 'journal', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业用银行存款支付职工工资 80,000 元，正确分录是（ ）。',
    options: [
      { text: '借：应付职工薪酬 80,000 / 贷：银行存款 80,000', is_correct: true },
      { text: '借：银行存款 80,000 / 贷：应付职工薪酬 80,000', is_correct: false },
      { text: '借：管理费用 80,000 / 贷：银行存款 80,000', is_correct: false },
      { text: '借：应付职工薪酬 80,000 / 贷：库存现金 80,000', is_correct: false }
    ],
    explain: '支付工资是偿还已计提的负债：应付职工薪酬（负债减少）记借方，银行存款（资产减少）记贷方。'
  },
  {
    practice_id: 10033, source_lesson_id: 4,
    type: 'journal', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '赊购原材料 50,000 元，增值税 6,500 元，正确分录中「应付账款」的金额是（ ）。',
    options: [
      { text: '56,500 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '6,500 元', is_correct: false },
      { text: '43,500 元', is_correct: false }
    ],
    explain: '赊购总价 = 50,000 + 6,500 = 56,500 元，全额挂应付账款。'
  },
  {
    practice_id: 10034, source_lesson_id: 4,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '下列经济业务中，属于「资产内部一增一减」的是（ ）。',
    options: [
      { text: '从银行提取现金', is_correct: true },
      { text: '赊购原材料', is_correct: false },
      { text: '收到投资者投入设备', is_correct: false },
      { text: '用银行存款偿还借款', is_correct: false }
    ],
    explain: '提现：库存现金增加、银行存款减少，都是资产，内部此消彼长。赊购是资产↑负债↑；收到投资是资产↑权益↑；还款是资产↓负债↓。'
  },
  {
    practice_id: 10035, source_lesson_id: 4,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '下列各项中，应记入贷方的有（ ）。',
    options: [
      { label: 'A', text: '负债增加', is_correct: true },
      { label: 'B', text: '所有者权益增加', is_correct: true },
      { label: 'C', text: '收入增加', is_correct: true },
      { label: 'D', text: '资产增加', is_correct: false },
      { label: 'E', text: '费用增加', is_correct: false }
    ],
    explain: '负债/权益/收入增加记贷方；资产/费用增加记借方。'
  },
  {
    practice_id: 10036, source_lesson_id: 4,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业收到投资者投入设备一台，价值 200,000 元，应编制的分录是（ ）。',
    options: [
      { text: '借：固定资产 200,000 / 贷：实收资本 200,000', is_correct: true },
      { text: '借：实收资本 200,000 / 贷：固定资产 200,000', is_correct: false },
      { text: '借：固定资产 200,000 / 贷：资本公积 200,000', is_correct: false },
      { text: '借：固定资产 200,000 / 贷：银行存款 200,000', is_correct: false }
    ],
    explain: '收到投资：资产（固定资产）增加记借方，所有者权益（实收资本）增加记贷方。'
  },
  {
    practice_id: 10037, source_lesson_id: 4,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业从银行借入短期借款 100,000 元存入银行，该笔业务引起（ ）。',
    options: [
      { text: '资产和负债同时增加', is_correct: true },
      { text: '资产和负债同时减少', is_correct: false },
      { text: '资产增加、所有者权益增加', is_correct: false },
      { text: '资产内部一增一减', is_correct: false }
    ],
    explain: '银行存款（资产）增加，短期借款（负债）增加，等式两边同增。'
  },
  {
    practice_id: 10038, source_lesson_id: 4,
    type: 'journal', level: 'exam', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，借贷记账法的理论基础是（ ）。',
    options: [
      { text: '会计等式', is_correct: true },
      { text: '试算平衡', is_correct: false },
      { text: '复式记账', is_correct: false },
      { text: '会计科目', is_correct: false }
    ],
    explain: '借贷记账法以「资产 = 负债 + 所有者权益」会计等式为理论基础。'
  },
  {
    practice_id: 10039, source_lesson_id: 4,
    type: 'journal', level: 'exam', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '【真题级】下列各项中，关于借贷记账法说法正确的有（ ）。',
    options: [
      { label: 'A', text: '以「借」「贷」为记账符号', is_correct: true },
      { label: 'B', text: '以「有借必有贷，借贷必相等」为记账规则', is_correct: true },
      { label: 'C', text: '以会计等式为理论基础', is_correct: true },
      { label: 'D', text: '「借」一律表示增加', is_correct: false }
    ],
    explain: 'D 错误：借方表示增加还是减少取决于账户性质，资产/费用借增，负债/权益/收入借减。'
  },
  {
    practice_id: 10041, source_lesson_id: 5,
    type: 'concept', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '试算平衡的基本公式是（ ）。',
    options: [
      { text: '全部账户借方发生额合计 = 全部账户贷方发生额合计', is_correct: true },
      { text: '全部账户借方余额 > 全部账户贷方余额', is_correct: false },
      { text: '资产合计 = 负债合计', is_correct: false },
      { text: '收入合计 = 费用合计', is_correct: false }
    ],
    explain: '试算平衡包括发生额平衡和余额平衡两种，核心公式是借方合计 = 贷方合计。'
  },
  {
    practice_id: 10042, source_lesson_id: 5,
    type: 'concept', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '下列各项中，不能通过试算平衡发现的错误是（ ）。',
    options: [
      { text: '某笔业务重记（借贷同时多记）', is_correct: true },
      { text: '借方多记 500 元', is_correct: false },
      { text: '贷方少记 200 元', is_correct: false },
      { text: '某笔借方金额误记到贷方', is_correct: false }
    ],
    explain: '重记时借贷同时多，仍然平衡，无法发现。借贷金额不等或方向串户都会导致不平衡。'
  },
  {
    practice_id: 10043, source_lesson_id: 5,
    type: 'concept', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '编制试算平衡表时，下列等式正确的是（ ）。',
    options: [
      { text: '全部账户期末借方余额合计 = 全部账户期末贷方余额合计', is_correct: true },
      { text: '资产类账户借方余额 = 负债类账户贷方余额', is_correct: false },
      { text: '借方发生额 = 期末借方余额', is_correct: false },
      { text: '贷方发生额 = 期初贷方余额', is_correct: false }
    ],
    explain: '余额试算平衡：期末借方余额合计 = 期末贷方余额合计。'
  },
  {
    practice_id: 10044, source_lesson_id: 5,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '下列错误中，能通过试算平衡表发现的有（ ）。',
    options: [
      { label: 'A', text: '借方多记金额', is_correct: true },
      { label: 'B', text: '贷方少记金额', is_correct: true },
      { label: 'C', text: '漏记整笔业务', is_correct: false },
      { label: 'D', text: '借贷方向全部记反', is_correct: false }
    ],
    explain: '借方多记或贷方少记都会导致借贷不等，可以发现；漏记和方向全反不影响平衡。'
  },
  {
    practice_id: 10045, source_lesson_id: 5,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '试算平衡表中，期末余额的计算公式是（ ）。',
    options: [
      { text: '期初余额 + 本期增加额 − 本期减少额', is_correct: true },
      { text: '期初余额 + 本期借方发生额', is_correct: false },
      { text: '本期贷方发生额 − 期初余额', is_correct: false },
      { text: '期初余额 × 2', is_correct: false }
    ],
    explain: '期末余额 = 期初余额 + 本期增加额 − 本期减少额，这是账户余额的基本计算公式。'
  },
  {
    practice_id: 10046, source_lesson_id: 5,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '下列关于试算平衡的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '试算不平衡，肯定有错', is_correct: true },
      { label: 'B', text: '试算平衡，不一定没错', is_correct: true },
      { label: 'C', text: '试算平衡是检查记账是否正确的唯一方法', is_correct: false },
      { label: 'D', text: '发生额平衡和余额平衡是两种基本方法', is_correct: true }
    ],
    explain: 'C 错误：试算平衡只是方法之一，还有账证核对、账账核对等。'
  },
  {
    practice_id: 10047, source_lesson_id: 5,
    type: 'concept', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '某企业月末编制试算平衡表，借方余额合计 850,000 元，贷方余额合计 830,000 元，差额可能是（ ）。',
    options: [
      { text: '某贷方账户少记 20,000 元', is_correct: true },
      { text: '某借方账户少记 20,000 元', is_correct: false },
      { text: '重复记录了一笔 20,000 元的业务', is_correct: false },
      { text: '漏记了一笔 20,000 元的业务', is_correct: false }
    ],
    explain: '借方多出 20,000，说明贷方少记或借方多记。重记和漏记不影响平衡。'
  },
  {
    practice_id: 10048, source_lesson_id: 5,
    type: 'concept', level: 'exam', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，试算平衡表无法发现的错误是（ ）。',
    options: [
      { text: '将一笔业务的借贷科目同时写错但金额正确', is_correct: true },
      { text: '将借方 3,000 元误记为 300 元', is_correct: false },
      { text: '只记了借方未记贷方', is_correct: false },
      { text: '将贷方 5,000 元多记为 50,000 元', is_correct: false }
    ],
    explain: '借贷科目同时写错但金额正确，试算仍平衡，无法发现。'
  },
  {
    practice_id: 10049, source_lesson_id: 5,
    type: 'concept', level: 'exam', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '【真题级】下列各项中，属于试算平衡法局限性的有（ ）。',
    options: [
      { label: 'A', text: '不能发现重记错误', is_correct: true },
      { label: 'B', text: '不能发现漏记错误', is_correct: true },
      { label: 'C', text: '不能发现借贷方向颠倒的错误', is_correct: true },
      { label: 'D', text: '不能发现借贷金额不等的错误', is_correct: false }
    ],
    explain: 'D 恰恰是试算平衡能发现的。ABC 都不影响借贷平衡关系。'
  },
  {
    practice_id: 10051, source_lesson_id: 6,
    type: 'journal', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '销售商品收到货款存入银行，「银行存款」应记入（ ）。',
    options: [
      { text: '借方', is_correct: true },
      { text: '贷方', is_correct: false },
      { text: '借方或贷方均可', is_correct: false },
      { text: '不需要记录', is_correct: false }
    ],
    explain: '银行存款是资产，收到货款增加，资产增加记借方。'
  },
  {
    practice_id: 10052, source_lesson_id: 6,
    type: 'journal', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '销售商品确认收入时，「主营业务收入」应记入（ ）。',
    options: [
      { text: '贷方', is_correct: true },
      { text: '借方', is_correct: false },
      { text: '借方或贷方均可', is_correct: false },
      { text: '不需要记录', is_correct: false }
    ],
    explain: '收入增加记贷方。'
  },
  {
    practice_id: 10053, source_lesson_id: 6,
    type: 'journal', level: 'basic', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '销售商品开出增值税专票，销项税额应记入（ ）科目的贷方。',
    options: [
      { text: '应交税费——应交增值税（销项税额）', is_correct: true },
      { text: '应交税费——应交增值税（进项税额）', is_correct: false },
      { text: '应收账款', is_correct: false },
      { text: '主营业务收入', is_correct: false }
    ],
    explain: '销项税额是企业应向税务局缴纳的税款（负债），增加记贷方。进项税额是可抵扣的（资产性质），记借方。'
  },
  {
    practice_id: 10054, source_lesson_id: 6,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业赊销商品价款 30,000 元、税额 3,900 元，应借记（ ）。',
    options: [
      { text: '应收账款 33,900 元', is_correct: true },
      { text: '银行存款 33,900 元', is_correct: false },
      { text: '应收账款 30,000 元', is_correct: false },
      { text: '主营业务收入 33,900 元', is_correct: false }
    ],
    explain: '赊销未收款，应收账款（资产）增加 = 价款 + 税额 = 33,900 元，记借方。'
  },
  {
    practice_id: 10055, source_lesson_id: 6,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '企业销售商品价款 20,000 元、税额 2,600 元，款已收到存入银行。该笔分录涉及的贷方科目有（ ）。',
    options: [
      { label: 'A', text: '主营业务收入', is_correct: true },
      { label: 'B', text: '应交税费——应交增值税（销项税额）', is_correct: true },
      { label: 'C', text: '银行存款', is_correct: false },
      { label: 'D', text: '应收账款', is_correct: false }
    ],
    explain: '贷方：主营业务收入 20,000（收入增加）+ 销项税额 2,600（负债增加）。银行存款记借方。'
  },
  {
    practice_id: 10056, source_lesson_id: 6,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '企业销售商品同时结转成本，「主营业务成本」应记入（ ）。',
    options: [
      { text: '借方', is_correct: true },
      { text: '贷方', is_correct: false },
      { text: '不需要记录', is_correct: false },
      { text: '借方或贷方均可', is_correct: false }
    ],
    explain: '主营业务成本属于费用类，增加记借方。结转成本分录：借：主营业务成本 / 贷：库存商品。'
  },
  {
    practice_id: 10057, source_lesson_id: 6,
    type: 'journal', level: 'improve', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '销售商品结转成本时，「库存商品」应记入（ ）。',
    options: [
      { text: '贷方', is_correct: true },
      { text: '借方', is_correct: false },
      { text: '借方或贷方均可', is_correct: false },
      { text: '不需要记录', is_correct: false }
    ],
    explain: '库存商品是资产，卖出后减少，资产减少记贷方。'
  },
  {
    practice_id: 10058, source_lesson_id: 6,
    type: 'journal', level: 'exam', hot: ['borrow-credit'],
    interaction_type: 'multi',
    prompt: '【真题级】企业销售产品价款 100,000 元、税额 13,000 元，收到商业汇票一张。该笔分录涉及的科目有（ ）。',
    options: [
      { label: 'A', text: '应收票据', is_correct: true },
      { label: 'B', text: '主营业务收入', is_correct: true },
      { label: 'C', text: '应交税费——应交增值税（销项税额）', is_correct: true },
      { label: 'D', text: '银行存款', is_correct: false },
      { label: 'E', text: '应收账款', is_correct: false }
    ],
    explain: '收到商业汇票记应收票据（借方 113,000）；贷方：主营业务收入 100,000 + 销项税额 13,000。'
  },
  {
    practice_id: 10059, source_lesson_id: 6,
    type: 'journal', level: 'exam', hot: ['borrow-credit'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，关于增值税销项税额的说法正确的是（ ）。',
    options: [
      { text: '销项税额使企业的负债增加', is_correct: true },
      { text: '销项税额使企业的资产增加', is_correct: false },
      { text: '销项税额应记入借方', is_correct: false },
      { text: '销项税额属于费用', is_correct: false }
    ],
    explain: '销项税额是企业代收后需上缴国家的税款，本质是负债（应交税费），增加记贷方。'
  },
  {
    practice_id: 10061, source_lesson_id: 7,
    type: 'law', level: 'basic', hot: ['petty-cash'],
    interaction_type: 'single',
    prompt: '下列各项中，可以使用现金结算的是（ ）。',
    options: [
      { text: '支付员工出差借款 2,000 元', is_correct: true },
      { text: '支付供应商货款 80,000 元', is_correct: false },
      { text: '支付工程款 150,000 元', is_correct: false },
      { text: '购买固定资产 200,000 元', is_correct: false }
    ],
    explain: '现金结算适用于小额零星支出和差旅费等，大额经营性支出应通过银行转账。'
  },
  {
    practice_id: 10062, source_lesson_id: 7,
    type: 'law', level: 'basic', hot: ['petty-cash'],
    interaction_type: 'single',
    prompt: '企业核定库存现金限额为 5,000 元，期末实际库存 12,000 元，应将（ ）元存入银行。',
    options: [
      { text: '7,000', is_correct: true },
      { text: '12,000', is_correct: false },
      { text: '5,000', is_correct: false },
      { text: '17,000', is_correct: false }
    ],
    explain: '超出限额部分 = 12,000 − 5,000 = 7,000 元，须当日存入银行。'
  },
  {
    practice_id: 10063, source_lesson_id: 7,
    type: 'law', level: 'basic', hot: ['petty-cash'],
    interaction_type: 'single',
    prompt: '定额备用金制度下，报销时应（ ）。',
    options: [
      { text: '按实际支出金额补足备用金', is_correct: true },
      { text: '将剩余备用金全部交回', is_correct: false },
      { text: '重新核定备用金额度', is_correct: false },
      { text: '不需要任何处理', is_correct: false }
    ],
    explain: '定额备用金制度：核定额度→日常支出→月末凭票报销→按支出额补足至定额。'
  },
  {
    practice_id: 10064, source_lesson_id: 7,
    type: 'law', level: 'improve', hot: ['petty-cash'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于现金使用范围的有（ ）。',
    options: [
      { label: 'A', text: '职工工资、津贴', is_correct: true },
      { label: 'B', text: '个人劳务报酬', is_correct: true },
      { label: 'C', text: '出差人员差旅费', is_correct: true },
      { label: 'D', text: '向其他企业支付货款 50,000 元', is_correct: false }
    ],
    explain: '现金使用范围：工资津贴、劳务报酬、差旅费、1,000 元以下零星支出等。大额货款必须转账。'
  },
  {
    practice_id: 10065, source_lesson_id: 7,
    type: 'law', level: 'improve', hot: ['petty-cash'],
    interaction_type: 'single',
    prompt: '备用金报销时，出纳实际支出 1,800 元（定额 2,000 元），正确的分录是（ ）。',
    options: [
      { text: '借：管理费用 1,800 / 贷：库存现金 1,800', is_correct: true },
      { text: '借：其他应收款 1,800 / 贷：库存现金 1,800', is_correct: false },
      { text: '借：管理费用 2,000 / 贷：库存现金 2,000', is_correct: false },
      { text: '借：库存现金 1,800 / 贷：管理费用 1,800', is_correct: false }
    ],
    explain: '报销时按实际支出确认费用并补足现金。补足金额 = 实际支出 = 1,800 元。'
  },
  {
    practice_id: 10066, source_lesson_id: 7,
    type: 'concept', level: 'improve', hot: ['petty-cash'],
    interaction_type: 'single',
    prompt: '下列各项中，关于库存现金的说法错误的是（ ）。',
    options: [
      { text: '企业可以无限制地保留库存现金', is_correct: true },
      { text: '库存现金由出纳人员负责管理', is_correct: false },
      { text: '库存现金应定期盘点', is_correct: false },
      { text: '超过限额的现金应及时存入银行', is_correct: false }
    ],
    explain: '企业不能无限制保留现金，必须遵守库存现金限额管理制度。'
  },
  {
    practice_id: 10067, source_lesson_id: 7,
    type: 'law', level: 'improve', hot: ['petty-cash'],
    interaction_type: 'multi',
    prompt: '下列关于库存现金管理的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '应设置现金日记账逐笔登记', is_correct: true },
      { label: 'B', text: '出纳不得兼管稽核、会计档案保管', is_correct: true },
      { label: 'C', text: '现金收支应及时入账', is_correct: true },
      { label: 'D', text: '库存现金可以白条抵库', is_correct: false }
    ],
    explain: '白条抵库是严禁的行为。现金管理要求日清月结、逐笔登记、不得坐支。'
  },
  {
    practice_id: 10068, source_lesson_id: 7,
    type: 'law', level: 'exam', hot: ['petty-cash'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，不属于现金使用范围的是（ ）。',
    options: [
      { text: '支付给其他单位的货款 30,000 元', is_correct: true },
      { text: '支付职工工资 5,000 元', is_correct: false },
      { text: '支付差旅费 3,000 元', is_correct: false },
      { text: '支付个人劳务报酬 800 元', is_correct: false }
    ],
    explain: '向其他单位支付大额货款应通过银行转账，不在现金使用范围内。'
  },
  {
    practice_id: 10069, source_lesson_id: 7,
    type: 'law', level: 'exam', hot: ['petty-cash'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于定额备用金制度的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '备用金拨付时借记其他应收款', is_correct: true },
      { label: 'B', text: '报销时按实际支出补足', is_correct: true },
      { label: 'C', text: '期末备用金余额应等于核定额度', is_correct: true },
      { label: 'D', text: '备用金可以用于任意金额的采购', is_correct: false }
    ],
    explain: '备用金有使用范围限制，不能用于大额采购。拨付→使用→报销补足→余额恢复定额。'
  },
  {
    practice_id: 10071, source_lesson_id: 8,
    type: 'calc', level: 'basic', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '企业期末应收账款余额 200,000 元，预期信用损失率 5%，坏账准备账户原有贷方余额 3,000 元，本期应补提坏账准备（ ）元。',
    options: [
      { text: '7,000', is_correct: true },
      { text: '10,000', is_correct: false },
      { text: '3,000', is_correct: false },
      { text: '13,000', is_correct: false }
    ],
    explain: '应有余额 = 200,000 × 5% = 10,000；已有贷方 3,000，补提 10,000 − 3,000 = 7,000 元。'
  },
  {
    practice_id: 10072, source_lesson_id: 8,
    type: 'calc', level: 'basic', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '首次计提坏账准备，应收账款余额 800,000 元，预期信用损失率 2%，应计提（ ）元。',
    options: [
      { text: '16,000', is_correct: true },
      { text: '8,000', is_correct: false },
      { text: '80,000', is_correct: false },
      { text: '160,000', is_correct: false }
    ],
    explain: '首次计提无已有余额：800,000 × 2% = 16,000 元。'
  },
  {
    practice_id: 10073, source_lesson_id: 8,
    type: 'concept', level: 'basic', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '「坏账准备」科目的性质是（ ）。',
    options: [
      { text: '资产类备抵科目', is_correct: true },
      { text: '负债类科目', is_correct: false },
      { text: '费用类科目', is_correct: false },
      { text: '所有者权益类科目', is_correct: false }
    ],
    explain: '坏账准备是应收账款的备抵科目，虽然余额在贷方，但仍属于资产类。'
  },
  {
    practice_id: 10074, source_lesson_id: 8,
    type: 'calc', level: 'improve', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '期末应收账款 300,000 元，损失率 3%，坏账准备已有贷方余额 12,000 元，本期应（ ）。',
    options: [
      { text: '冲回坏账准备 3,000 元', is_correct: true },
      { text: '补提 3,000 元', is_correct: false },
      { text: '补提 9,000 元', is_correct: false },
      { text: '不做处理', is_correct: false }
    ],
    explain: '应有余额 = 300,000 × 3% = 9,000；已有 12,000 > 9,000，应冲回 12,000 − 9,000 = 3,000 元。'
  },
  {
    practice_id: 10075, source_lesson_id: 8,
    type: 'calc', level: 'improve', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '坏账准备账户因核销坏账出现借方余额 5,000 元，期末应收账款 400,000 元，损失率 5%，本期应补提（ ）元。',
    options: [
      { text: '25,000', is_correct: true },
      { text: '20,000', is_correct: false },
      { text: '15,000', is_correct: false },
      { text: '5,000', is_correct: false }
    ],
    explain: '应有贷方余额 = 400,000 × 5% = 20,000；当前为借方余额 5,000，补提 = 20,000 + 5,000 = 25,000 元。'
  },
  {
    practice_id: 10076, source_lesson_id: 8,
    type: 'journal', level: 'improve', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '计提坏账准备的分录，借方科目是（ ）。',
    options: [
      { text: '信用减值损失', is_correct: true },
      { text: '资产减值损失', is_correct: false },
      { text: '坏账准备', is_correct: false },
      { text: '管理费用', is_correct: false }
    ],
    explain: '新准则下计提坏账准备：借：信用减值损失 / 贷：坏账准备。注意不是资产减值损失。'
  },
  {
    practice_id: 10077, source_lesson_id: 8,
    type: 'concept', level: 'improve', hot: ['bad-debt'],
    interaction_type: 'multi',
    prompt: '下列关于坏账准备的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '坏账准备是应收账款的备抵科目', is_correct: true },
      { label: 'B', text: '计提坏账准备会减少当期利润', is_correct: true },
      { label: 'C', text: '已核销的坏账又收回时应恢复应收账款', is_correct: true },
      { label: 'D', text: '坏账准备余额只能在贷方', is_correct: false }
    ],
    explain: 'D 错误：核销坏账后如果未及时补提，坏账准备可能出现借方余额。'
  },
  {
    practice_id: 10078, source_lesson_id: 8,
    type: 'journal', level: 'exam', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '【真题级】已核销的坏账 10,000 元又收回，正确的处理是（ ）。',
    options: [
      { text: '先恢复应收账款，再冲减银行存款', is_correct: true },
      { text: '直接借记银行存款，贷记坏账准备', is_correct: false },
      { text: '借记银行存款，贷记营业外收入', is_correct: false },
      { text: '不做账务处理', is_correct: false }
    ],
    explain: '分两步：① 借：应收账款 10,000 / 贷：坏账准备 10,000（恢复）；② 借：银行存款 10,000 / 贷：应收账款 10,000（收款）。'
  },
  {
    practice_id: 10079, source_lesson_id: 8,
    type: 'calc', level: 'exam', hot: ['bad-debt'],
    interaction_type: 'single',
    prompt: '【真题级】2024 年末应收账款余额 1,000,000 元，损失率 3%，年初坏账准备贷方余额 20,000 元，当年核销坏账 8,000 元。年末应补提坏账准备（ ）元。',
    options: [
      { text: '18,000', is_correct: true },
      { text: '30,000', is_correct: false },
      { text: '10,000', is_correct: false },
      { text: '22,000', is_correct: false }
    ],
    explain: '应有余额 = 1,000,000 × 3% = 30,000；核销后已有余额 = 20,000 − 8,000 = 12,000；补提 = 30,000 − 12,000 = 18,000 元。'
  }
,
  {
    practice_id: 10081, source_lesson_id: 9,
    type: 'concept', level: 'basic', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '下列各项中，属于应收票据的是（ ）。',
    options: [
      { text: '银行汇票', is_correct: false },
      { text: '商业承兑汇票', is_correct: true },
      { text: '银行本票', is_correct: false },
      { text: '支票', is_correct: false }
    ],
    explain: '应收票据核算的是商业汇票（商业承兑汇票和银行承兑汇票），不包括银行汇票、银行本票和支票。'
  },
  {
    practice_id: 10082, source_lesson_id: 9,
    type: 'concept', level: 'basic', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '带息商业汇票的到期值等于（ ）。',
    options: [
      { text: '票面金额', is_correct: false },
      { text: '票面金额 ×（1 + 票面利率 × 期限）', is_correct: true },
      { text: '票面金额 × 票面利率 × 期限', is_correct: false },
      { text: '票面金额 ÷（1 + 票面利率）', is_correct: false }
    ],
    explain: '到期值 = 面值 + 面值 × 票面利率 × 期限 = 面值 ×（1 + 票面利率 × 期限）。'
  },
  {
    practice_id: 10083, source_lesson_id: 9,
    type: 'concept', level: 'basic', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '票据贴现时，贴现利息的计算基础是（ ）。',
    options: [
      { text: '票面金额', is_correct: false },
      { text: '到期值', is_correct: true },
      { text: '贴现所得', is_correct: false },
      { text: '票面利息', is_correct: false }
    ],
    explain: '贴现利息 = 到期值 × 贴现率 × 贴现期（剩余天数/360），以到期值为计算基础。'
  },
  {
    practice_id: 10084, source_lesson_id: 9,
    type: 'calc', level: 'improve', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '企业持有面值 200,000 元、期限 6 个月、票面利率 6% 的银行承兑汇票，持有 1 个月后贴现，贴现率 8%。贴现所得最接近（ ）。',
    options: [
      { text: '199,133 元', is_correct: true },
      { text: '200,000 元', is_correct: false },
      { text: '197,200 元', is_correct: false },
      { text: '206,000 元', is_correct: false }
    ],
    explain: '到期值 = 200,000 ×（1 + 6% × 6/12）= 206,000；贴现利息 = 206,000 × 8% × 5/12 ≈ 6,867；贴现所得 ≈ 199,133。'
  },
  {
    practice_id: 10085, source_lesson_id: 9,
    type: 'calc', level: 'improve', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '企业持有面值 500,000 元的不带息商业汇票，到期日前 90 天向银行贴现，贴现率 9%。贴现所得为（ ）。',
    options: [
      { text: '488,750 元', is_correct: true },
      { text: '487,500 元', is_correct: false },
      { text: '496,250 元', is_correct: false },
      { text: '500,000 元', is_correct: false }
    ],
    explain: '不带息票据到期值 = 面值 500,000；贴现利息 = 500,000 × 9% × 90/360 = 11,250；贴现所得 = 488,750。'
  },
  {
    practice_id: 10086, source_lesson_id: 9,
    type: 'calc', level: 'improve', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '面值 100,000 元、票面利率 4.8%、期限 6 个月的带息票据，到期值为（ ）。',
    options: [
      { text: '102,400 元', is_correct: true },
      { text: '104,800 元', is_correct: false },
      { text: '100,480 元', is_correct: false },
      { text: '100,000 元', is_correct: false }
    ],
    explain: '到期值 = 100,000 ×（1 + 4.8% × 6/12）= 100,000 × 1.024 = 102,400。'
  },
  {
    practice_id: 10087, source_lesson_id: 9,
    type: 'concept', level: 'improve', hot: ['note-discount'],
    interaction_type: 'multi',
    prompt: '下列关于应收票据贴现说法正确的有（ ）。',
    options: [
      { label: 'A', text: '带追索权的贴现应作为短期借款处理', is_correct: true },
      { label: 'B', text: '贴现所得 = 到期值 − 贴现利息', is_correct: true },
      { label: 'C', text: '不带息票据贴现所得一定等于票面金额', is_correct: false },
      { label: 'D', text: '银行承兑汇票贴现后不存在追索风险', is_correct: true }
    ],
    explain: 'C 错误：不带息票据贴现所得 = 面值 − 贴现利息，一般小于面值。银行承兑汇票由银行承兑，到期银行付款，持票人无追索风险。'
  },
  {
    practice_id: 10088, source_lesson_id: 9,
    type: 'calc', level: 'exam', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '【真题级】一张面值 300,000 元、期限 90 天、不带息的商业承兑汇票，持票人在持有 30 天后向银行贴现，年贴现率 12%。贴现所得为（ ）。',
    options: [
      { text: '294,000 元', is_correct: true },
      { text: '297,000 元', is_correct: false },
      { text: '300,000 元', is_correct: false },
      { text: '291,000 元', is_correct: false }
    ],
    explain: '不带息到期值 = 300,000；贴现期 = 90 − 30 = 60 天；贴现利息 = 300,000 × 12% × 60/360 = 6,000；贴现所得 = 294,000。'
  },
  {
    practice_id: 10089, source_lesson_id: 9,
    type: 'concept', level: 'exam', hot: ['note-discount'],
    interaction_type: 'single',
    prompt: '【真题级】企业将银行承兑汇票贴现（不附追索权），应贷记的科目是（ ）。',
    options: [
      { text: '应收票据', is_correct: true },
      { text: '短期借款', is_correct: false },
      { text: '财务费用', is_correct: false },
      { text: '银行存款', is_correct: false }
    ],
    explain: '不附追索权视为终止确认：借：银行存款（贴现所得）/ 借或贷：财务费用（差额）/ 贷：应收票据（账面价值）。'
  },
  {
    practice_id: 10091, source_lesson_id: 10,
    type: 'concept', level: 'basic', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '一般纳税人购入原材料，增值税专用发票上的税额应记入（ ）。',
    options: [
      { text: '原材料', is_correct: false },
      { text: '应交税费——应交增值税（进项税额）', is_correct: true },
      { text: '管理费用', is_correct: false },
      { text: '应付账款', is_correct: false }
    ],
    explain: '一般纳税人的进项税额可以抵扣，单独计入「应交税费——应交增值税（进项税额）」借方。'
  },
  {
    practice_id: 10092, source_lesson_id: 10,
    type: 'concept', level: 'basic', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '小规模纳税人购入原材料，增值税税额应（ ）。',
    options: [
      { text: '计入原材料成本', is_correct: true },
      { text: '计入应交税费借方', is_correct: false },
      { text: '计入管理费用', is_correct: false },
      { text: '不做账务处理', is_correct: false }
    ],
    explain: '小规模纳税人不得抵扣进项税，价税合计全部计入存货成本。'
  },
  {
    practice_id: 10093, source_lesson_id: 10,
    type: 'concept', level: 'basic', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '一般纳税人购入材料发生的运杂费（取得 9% 增值税专票），运费本身应计入（ ）。',
    options: [
      { text: '原材料成本', is_correct: true },
      { text: '管理费用', is_correct: false },
      { text: '销售费用', is_correct: false },
      { text: '财务费用', is_correct: false }
    ],
    explain: '外购存货的运杂费属于采购成本的一部分，计入原材料成本；运费对应的进项税额单独抵扣。'
  },
  {
    practice_id: 10094, source_lesson_id: 10,
    type: 'calc', level: 'improve', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '一般纳税人购入材料价款 80,000 元（税率 13%），另付运费 2,000 元（取得 9% 专票）。原材料入账成本为（ ）。',
    options: [
      { text: '82,000 元', is_correct: true },
      { text: '80,000 元', is_correct: false },
      { text: '92,580 元', is_correct: false },
      { text: '82,180 元', is_correct: false }
    ],
    explain: '原材料入账 = 不含税价 80,000 + 不含税运费 2,000 = 82,000。进项税 = 80,000×13% + 2,000×9% = 10,580 单独计入。'
  },
  {
    practice_id: 10095, source_lesson_id: 10,
    type: 'calc', level: 'improve', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '小规模纳税人购入材料，专票注明价款 50,000 元、税额 6,500 元。该批材料入账成本为（ ）。',
    options: [
      { text: '56,500 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '43,500 元', is_correct: false },
      { text: '63,000 元', is_correct: false }
    ],
    explain: '小规模纳税人不抵扣进项，入账成本 = 价款 + 税额 = 50,000 + 6,500 = 56,500。'
  },
  {
    practice_id: 10096, source_lesson_id: 10,
    type: 'calc', level: 'improve', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '企业预付材料款 30,000 元，到货后收到专票价款 45,000 元、税额 5,850 元。需补付（ ）。',
    options: [
      { text: '20,850 元', is_correct: true },
      { text: '15,000 元', is_correct: false },
      { text: '25,850 元', is_correct: false },
      { text: '50,850 元', is_correct: false }
    ],
    explain: '应付总额 = 45,000 + 5,850 = 50,850；已预付 30,000；补付 = 50,850 − 30,000 = 20,850。'
  },
  {
    practice_id: 10097, source_lesson_id: 10,
    type: 'concept', level: 'improve', hot: ['vat-input'],
    interaction_type: 'multi',
    prompt: '下列各项中，应计入外购存货采购成本的有（ ）。',
    options: [
      { label: 'A', text: '买价', is_correct: true },
      { label: 'B', text: '运杂费', is_correct: true },
      { label: 'C', text: '装卸费', is_correct: true },
      { label: 'D', text: '入库前合理损耗', is_correct: true },
      { label: 'E', text: '增值税进项税额（一般纳税人）', is_correct: false }
    ],
    explain: 'E 的进项税额可抵扣，不计入成本；其他四项均为采购成本的组成部分。'
  },
  {
    practice_id: 10098, source_lesson_id: 10,
    type: 'journal', level: 'exam', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '【真题级】一般纳税人赊购原材料 100,000 元（税率 13%），下列分录正确的是（ ）。',
    options: [
      { text: '借：原材料 100,000、应交税费——进项税额 13,000 / 贷：应付账款 113,000', is_correct: true },
      { text: '借：原材料 113,000 / 贷：应付账款 113,000', is_correct: false },
      { text: '借：原材料 100,000 / 贷：应付账款 100,000', is_correct: false },
      { text: '借：原材料 100,000、应交税费——进项税额 13,000 / 贷：银行存款 113,000', is_correct: false }
    ],
    explain: '赊购→贷方为应付账款（非银行存款）；一般纳税人进项税单独列示。'
  },
  {
    practice_id: 10099, source_lesson_id: 10,
    type: 'concept', level: 'exam', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，不应计入存货成本的是（ ）。',
    options: [
      { text: '非正常消耗的直接材料', is_correct: true },
      { text: '入库前的挑选整理费', is_correct: false },
      { text: '运输途中的合理损耗', is_correct: false },
      { text: '进口关税', is_correct: false }
    ],
    explain: '非正常消耗应计入当期损益，不计入存货成本。其他三项均属于存货采购成本。'
  },
  {
    practice_id: 10101, source_lesson_id: 11,
    type: 'concept', level: 'basic', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '月末一次加权平均法下，加权平均单位成本的计算公式正确的是（ ）。',
    options: [
      { text: '（月初存货成本 + 本月购入存货成本）÷（月初数量 + 本月购入数量）', is_correct: true },
      { text: '本月购入存货成本 ÷ 本月购入数量', is_correct: false },
      { text: '月初存货成本 ÷ 月初数量', is_correct: false },
      { text: '本月发出存货成本 ÷ 本月发出数量', is_correct: false }
    ],
    explain: '月末一次加权平均把月初和本月全部购入合并计算，分子为总成本，分母为总数量。'
  },
  {
    practice_id: 10102, source_lesson_id: 11,
    type: 'concept', level: 'basic', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '下列存货计价方法中，日常发出时无法确定单位成本的是（ ）。',
    options: [
      { text: '月末一次加权平均法', is_correct: true },
      { text: '先进先出法', is_correct: false },
      { text: '移动加权平均法', is_correct: false },
      { text: '个别计价法', is_correct: false }
    ],
    explain: '月末一次加权平均法要到月末才能算出单价，日常发出暂不登记单价。'
  },
  {
    practice_id: 10103, source_lesson_id: 11,
    type: 'concept', level: 'basic', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '先进先出法的特点是（ ）。',
    options: [
      { text: '期末存货接近最近购入成本', is_correct: true },
      { text: '期末存货接近最早购入成本', is_correct: false },
      { text: '发出成本接近最近购入成本', is_correct: false },
      { text: '各批次发出成本完全相同', is_correct: false }
    ],
    explain: '先进先出：先买的先发，期末留下的是最后购入的，接近市价。'
  },
  {
    practice_id: 10104, source_lesson_id: 11,
    type: 'calc', level: 'improve', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '月初 200 件 @8 元，5 日购入 300 件 @9 元，20 日购入 100 件 @10 元。采用先进先出法发出 400 件，发出成本为（ ）。',
    options: [
      { text: '3,400 元', is_correct: true },
      { text: '3,600 元', is_correct: false },
      { text: '3,500 元', is_correct: false },
      { text: '3,200 元', is_correct: false }
    ],
    explain: 'FIFO：先发月初 200×8 = 1,600，再发 5 日 200×9 = 1,800，合计 3,400。'
  },
  {
    practice_id: 10105, source_lesson_id: 11,
    type: 'calc', level: 'improve', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '月初 150 件 @20 元，本月购入 250 件 @22 元和 100 件 @25 元。加权平均法发出 350 件，发出成本为（ ）。',
    options: [
      { text: '7,700 元', is_correct: true },
      { text: '7,350 元', is_correct: false },
      { text: '8,050 元', is_correct: false },
      { text: '7,000 元', is_correct: false }
    ],
    explain: '总成本 = 150×20 + 250×22 + 100×25 = 11,000；总量 500；均价 22；发出 350×22 = 7,700。'
  },
  {
    practice_id: 10106, source_lesson_id: 11,
    type: 'calc', level: 'improve', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '采用移动加权平均法，月初 100 件 @10 元，10 日购入 200 件 @11 元。10 日购入后的加权平均单价最接近（ ）。',
    options: [
      { text: '10.67 元', is_correct: true },
      { text: '11.00 元', is_correct: false },
      { text: '10.50 元', is_correct: false },
      { text: '10.33 元', is_correct: false }
    ],
    explain: '购入后总成本 = 100×10 + 200×11 = 3,200；总量 300；均价 = 3,200÷300 ≈ 10.67。'
  },
  {
    practice_id: 10107, source_lesson_id: 11,
    type: 'concept', level: 'improve', hot: ['inventory-avg'],
    interaction_type: 'multi',
    prompt: '下列关于存货计价方法说法正确的有（ ）。',
    options: [
      { label: 'A', text: '先进先出法在物价上涨时会高估利润', is_correct: true },
      { label: 'B', text: '加权平均法可以平滑物价波动对利润的影响', is_correct: true },
      { label: 'C', text: '个别计价法适用于不可替代的贵重物品', is_correct: true },
      { label: 'D', text: '企业可以随意变更存货计价方法', is_correct: false }
    ],
    explain: 'D 错误：存货计价方法一经确定不得随意变更，如需变更应遵循会计政策变更的规定。'
  },
  {
    practice_id: 10108, source_lesson_id: 11,
    type: 'calc', level: 'exam', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '【真题级】月初库存 A 材料 500 千克、金额 4,000 元；本月购入 A 材料两批共 1,500 千克、金额 13,000 元。月末一次加权平均单位成本为（ ）。',
    options: [
      { text: '8.5 元/千克', is_correct: true },
      { text: '8.0 元/千克', is_correct: false },
      { text: '8.67 元/千克', is_correct: false },
      { text: '9.0 元/千克', is_correct: false }
    ],
    explain: '总成本 = 4,000 + 13,000 = 17,000；总量 = 500 + 1,500 = 2,000；均价 = 17,000 ÷ 2,000 = 8.5。'
  },
  {
    practice_id: 10109, source_lesson_id: 11,
    type: 'calc', level: 'exam', hot: ['inventory-avg'],
    interaction_type: 'single',
    prompt: '【真题级】在物价持续上涨的情况下，与加权平均法相比，采用先进先出法会使（ ）。',
    options: [
      { text: '当期利润偏高', is_correct: true },
      { text: '当期利润偏低', is_correct: false },
      { text: '期末存货成本偏低', is_correct: false },
      { text: '当期利润不受影响', is_correct: false }
    ],
    explain: '物价上涨时 FIFO 发出的是较早低价存货，发出成本低→毛利高→利润偏高；期末存货按最近高价计量，成本偏高。'
  },
  {
    practice_id: 10111, source_lesson_id: 12,
    type: 'concept', level: 'basic', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '下列各项中，不计入存货成本的是（ ）。',
    options: [
      { text: '入库后的仓储费用', is_correct: true },
      { text: '采购过程中的保险费', is_correct: false },
      { text: '运输途中的合理损耗', is_correct: false },
      { text: '进口关税', is_correct: false }
    ],
    explain: '入库后的仓储费用计入当期损益（管理费用），不计入存货成本。入库前的相关支出才计入成本。'
  },
  {
    practice_id: 10112, source_lesson_id: 12,
    type: 'concept', level: 'basic', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '存货的可变现净值是指（ ）。',
    options: [
      { text: '估计售价减去至完工时估计成本和销售费用后的净值', is_correct: true },
      { text: '存货的市场售价', is_correct: false },
      { text: '存货的重置成本', is_correct: false },
      { text: '存货的账面价值', is_correct: false }
    ],
    explain: '可变现净值 = 估计售价 − 至完工时估计将要发生的成本 − 估计销售费用 − 相关税费。'
  },
  {
    practice_id: 10113, source_lesson_id: 12,
    type: 'concept', level: 'basic', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '存货期末计量应当按照（ ）。',
    options: [
      { text: '成本与可变现净值孰低', is_correct: true },
      { text: '成本', is_correct: false },
      { text: '可变现净值', is_correct: false },
      { text: '公允价值', is_correct: false }
    ],
    explain: '存货期末按「成本与可变现净值孰低」计量，成本高于可变现净值时计提跌价准备。'
  },
  {
    practice_id: 10114, source_lesson_id: 12,
    type: 'calc', level: 'improve', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '某商品成本 100,000 元，期末可变现净值 85,000 元，此前未计提跌价准备。应计提存货跌价准备（ ）。',
    options: [
      { text: '15,000 元', is_correct: true },
      { text: '85,000 元', is_correct: false },
      { text: '100,000 元', is_correct: false },
      { text: '0 元', is_correct: false }
    ],
    explain: '成本 100,000 > 可变现净值 85,000，差额 15,000 应计提跌价准备。'
  },
  {
    practice_id: 10115, source_lesson_id: 12,
    type: 'calc', level: 'improve', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '某存货成本 100,000 元，已提跌价准备 20,000 元。期末可变现净值恢复至 95,000 元，应转回跌价准备（ ）。',
    options: [
      { text: '15,000 元', is_correct: true },
      { text: '20,000 元', is_correct: false },
      { text: '5,000 元', is_correct: false },
      { text: '0 元', is_correct: false }
    ],
    explain: '应有准备 = 100,000 − 95,000 = 5,000；已提 20,000；应转回 = 20,000 − 5,000 = 15,000。转回不得超过原已计提金额。'
  },
  {
    practice_id: 10116, source_lesson_id: 12,
    type: 'concept', level: 'improve', hot: ['vat-input'],
    interaction_type: 'multi',
    prompt: '下列关于存货跌价准备说法正确的有（ ）。',
    options: [
      { label: 'A', text: '存货跌价准备是存货的备抵科目', is_correct: true },
      { label: 'B', text: '转回金额不得超过原已计提金额', is_correct: true },
      { label: 'C', text: '计提时借记资产减值损失', is_correct: true },
      { label: 'D', text: '存货报废时不需要转销跌价准备', is_correct: false }
    ],
    explain: 'D 错误：存货报废处置时，应同时结转已计提的跌价准备。'
  },
  {
    practice_id: 10117, source_lesson_id: 12,
    type: 'concept', level: 'improve', hot: ['vat-input'],
    interaction_type: 'multi',
    prompt: '下列各项中，表明存货需要计提跌价准备的情形有（ ）。',
    options: [
      { label: 'A', text: '市场价格持续下跌且短期内无回升希望', is_correct: true },
      { label: 'B', text: '产品更新换代导致原有存货过时', is_correct: true },
      { label: 'C', text: '因季节性促销主动降价', is_correct: false },
      { label: 'D', text: '存货已霉烂变质', is_correct: true }
    ],
    explain: 'C 属于正常经营行为，不表明发生减值。ABD 均表明存货可变现净值可能低于成本。'
  },
  {
    practice_id: 10118, source_lesson_id: 12,
    type: 'journal', level: 'exam', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '【真题级】计提存货跌价准备时，正确的会计分录是（ ）。',
    options: [
      { text: '借：资产减值损失 / 贷：存货跌价准备', is_correct: true },
      { text: '借：管理费用 / 贷：存货跌价准备', is_correct: false },
      { text: '借：存货跌价准备 / 贷：资产减值损失', is_correct: false },
      { text: '借：营业外支出 / 贷：存货跌价准备', is_correct: false }
    ],
    explain: '计提跌价准备：借记「资产减值损失」（损益类），贷记「存货跌价准备」（资产备抵）。'
  },
  {
    practice_id: 10119, source_lesson_id: 12,
    type: 'concept', level: 'exam', hot: ['vat-input'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于存货盘亏处理说法正确的是（ ）。',
    options: [
      { text: '因管理不善造成的盘亏，扣除残料和保险赔款后计入管理费用', is_correct: true },
      { text: '自然灾害造成的盘亏计入管理费用', is_correct: false },
      { text: '盘亏的存货一律计入营业外支出', is_correct: false },
      { text: '盘亏的存货不需要转出进项税额', is_correct: false }
    ],
    explain: '管理不善造成的存货盘亏净损失计入管理费用，且需转出进项税额；自然灾害造成的计入营业外支出。'
  }
,
  {
    practice_id: 10121, source_lesson_id: 13,
    type: 'concept', level: 'basic', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '下列关于固定资产折旧的说法中，正确的是（ ）。',
    options: [
      { text: '当月增加的固定资产当月开始计提折旧', is_correct: false },
      { text: '当月增加的固定资产下月开始计提折旧', is_correct: true },
      { text: '当月减少的固定资产下月照提折旧', is_correct: false },
      { text: '已提足折旧的固定资产继续计提折旧', is_correct: false }
    ],
    explain: '规则：当月增加下月起提，当月减少当月照提。已提足折旧的不再计提。'
  },
  {
    practice_id: 10122, source_lesson_id: 13,
    type: 'concept', level: 'basic', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '下列固定资产中，不应计提折旧的是（ ）。',
    options: [
      { text: '经营租出的机器设备', is_correct: false },
      { text: '季节性停用的机器设备', is_correct: false },
      { text: '已提足折旧仍在使用的设备', is_correct: true },
      { text: '大修停用的生产设备', is_correct: false }
    ],
    explain: '经营租出、季节停用、大修停用均照提折旧；已提足折旧的不再计提。'
  },
  {
    practice_id: 10123, source_lesson_id: 13,
    type: 'calc', level: 'basic', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '某设备原值 240,000 元、预计净残值 12,000 元、预计使用 10 年，采用年限平均法，月折旧额为（ ）。',
    options: [
      { text: '1,900 元', is_correct: true },
      { text: '2,000 元', is_correct: false },
      { text: '2,280 元', is_correct: false },
      { text: '1,800 元', is_correct: false }
    ],
    explain: '年折旧 = (240,000 − 12,000) ÷ 10 = 22,800；月折旧 = 22,800 ÷ 12 = 1,900 元。'
  },
  {
    practice_id: 10124, source_lesson_id: 13,
    type: 'calc', level: 'improve', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '某设备原值 360,000 元、净残值 36,000 元、使用年限 8 年，5 月购入。采用年限平均法，当年应计提折旧（ ）。',
    options: [
      { text: '23,625 元', is_correct: true },
      { text: '28,350 元', is_correct: false },
      { text: '40,500 元', is_correct: false },
      { text: '33,750 元', is_correct: false }
    ],
    explain: '年折旧 = (360,000 − 36,000) ÷ 8 = 40,500；月折旧 = 3,375。5 月购入当月不提，6-12 月共 7 个月：3,375 × 7 = 23,625。'
  },
  {
    practice_id: 10125, source_lesson_id: 13,
    type: 'calc', level: 'improve', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '某设备原值 150,000 元、净残值 6,000 元、使用年限 6 年。该设备于 10 月出售，当年应计提折旧（ ）。',
    options: [
      { text: '20,000 元', is_correct: true },
      { text: '18,000 元', is_correct: false },
      { text: '24,000 元', is_correct: false },
      { text: '22,000 元', is_correct: false }
    ],
    explain: '月折旧 = (150,000 − 6,000) ÷ 6 ÷ 12 = 2,000。10 月处置当月照提，1-10 月共 10 个月：2,000 × 10 = 20,000。'
  },
  {
    practice_id: 10126, source_lesson_id: 13,
    type: 'calc', level: 'improve', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '固定资产原值 500,000 元、净残值 20,000 元、使用年限 10 年，已使用 3 年。该资产的账面净值为（ ）。',
    options: [
      { text: '356,000 元', is_correct: true },
      { text: '350,000 元', is_correct: false },
      { text: '368,000 元', is_correct: false },
      { text: '380,000 元', is_correct: false }
    ],
    explain: '年折旧 = (500,000 − 20,000) ÷ 10 = 48,000；累计折旧 = 48,000 × 3 = 144,000；净值 = 500,000 − 144,000 = 356,000。'
  },
  {
    practice_id: 10127, source_lesson_id: 13,
    type: 'concept', level: 'improve', hot: ['depreciation-sl'],
    interaction_type: 'multi',
    prompt: '下列各项中，影响固定资产折旧额计算的因素有（ ）。',
    options: [
      { label: 'A', text: '固定资产原值', is_correct: true },
      { label: 'B', text: '预计使用年限', is_correct: true },
      { label: 'C', text: '预计净残值', is_correct: true },
      { label: 'D', text: '已提折旧额', is_correct: false },
      { label: 'E', text: '折旧方法', is_correct: true }
    ],
    explain: '折旧额取决于原值、净残值、使用年限和折旧方法。已提折旧额是计算结果，不是影响因素。'
  },
  {
    practice_id: 10128, source_lesson_id: 13,
    type: 'concept', level: 'exam', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，不影响固定资产年折旧额的是（ ）。',
    options: [
      { text: '固定资产减值准备', is_correct: true },
      { text: '固定资产原价', is_correct: false },
      { text: '预计使用寿命', is_correct: false },
      { text: '预计净残值', is_correct: false }
    ],
    explain: '年限平均法下年折旧额 = (原值 − 净残值) ÷ 使用年限。减值准备不影响折旧计算（但影响账面价值）。注意：考试中若已计提减值准备，后续折旧应以减值后账面价值为基础，但这属于特殊情况。'
  },
  {
    practice_id: 10129, source_lesson_id: 13,
    type: 'concept', level: 'exam', hot: ['depreciation-sl'],
    interaction_type: 'single',
    prompt: '【真题级】某企业 2024 年 3 月购入设备一台，原值 120,000 元、净残值 6,000 元、使用年限 5 年。2024 年该设备应计提折旧（ ）。',
    options: [
      { text: '17,100 元', is_correct: true },
      { text: '22,800 元', is_correct: false },
      { text: '19,000 元', is_correct: false },
      { text: '20,900 元', is_correct: false }
    ],
    explain: '月折旧 = (120,000 − 6,000) ÷ 5 ÷ 12 = 1,900。3 月购入当月不提，4-12 月共 9 个月 = 1,900 × 9 = 17,100。与课内原题一致，强化记忆。'
  },
  {
    practice_id: 10131, source_lesson_id: 14,
    type: 'concept', level: 'basic', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '双倍余额递减法的年折旧率等于（ ）。',
    options: [
      { text: '2 ÷ 预计使用年限', is_correct: true },
      { text: '(1 − 预计净残值率) ÷ 预计使用年限', is_correct: false },
      { text: '尚可使用年限 ÷ 年数总和', is_correct: false },
      { text: '2 ÷ 预计使用年限 × (1 − 净残值率)', is_correct: false }
    ],
    explain: '双倍余额递减法年折旧率 = 2 ÷ 预计使用年限，前期不考虑净残值。'
  },
  {
    practice_id: 10132, source_lesson_id: 14,
    type: 'concept', level: 'basic', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '双倍余额递减法下，计算各年折旧额时（ ）。',
    options: [
      { text: '前期不扣除预计净残值，最后两年改直线法并扣除净残值', is_correct: true },
      { text: '每年都需要扣除预计净残值', is_correct: false },
      { text: '只有第一年不扣除预计净残值', is_correct: false },
      { text: '始终不考虑预计净残值', is_correct: false }
    ],
    explain: '关键规则：前期按期初净值 × 折旧率，不扣残值；最后两年 = (净值 − 残值) ÷ 2。'
  },
  {
    practice_id: 10133, source_lesson_id: 14,
    type: 'calc', level: 'basic', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '原值 100,000 元、净残值 4,000 元、使用 5 年，双倍余额递减法下第 1 年折旧额为（ ）。',
    options: [
      { text: '40,000 元', is_correct: true },
      { text: '38,400 元', is_correct: false },
      { text: '20,000 元', is_correct: false },
      { text: '19,200 元', is_correct: false }
    ],
    explain: '折旧率 = 2/5 = 40%；第 1 年 = 100,000 × 40% = 40,000。不扣净残值。'
  },
  {
    practice_id: 10134, source_lesson_id: 14,
    type: 'calc', level: 'improve', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '承上题条件，第 3 年折旧额为（ ）。',
    options: [
      { text: '14,400 元', is_correct: true },
      { text: '12,960 元', is_correct: false },
      { text: '8,800 元', is_correct: false },
      { text: '21,600 元', is_correct: false }
    ],
    explain: '第 1 年 40,000；第 2 年 (100,000−40,000)×40% = 24,000；第 3 年 (100,000−40,000−24,000)×40% = 36,000×40% = 14,400。'
  },
  {
    practice_id: 10135, source_lesson_id: 14,
    type: 'calc', level: 'improve', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '承上题条件，第 4 年和第 5 年每年折旧额为（ ）。',
    options: [
      { text: '8,800 元', is_correct: true },
      { text: '7,200 元', is_correct: false },
      { text: '10,800 元', is_correct: false },
      { text: '14,400 元', is_correct: false }
    ],
    explain: '前 3 年累计折旧 = 40,000+24,000+14,400 = 78,400；剩余净值 = 100,000−78,400 = 21,600；最后两年 = (21,600−4,000)÷2 = 8,800。'
  },
  {
    practice_id: 10136, source_lesson_id: 14,
    type: 'calc', level: 'improve', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '某设备原值 120,000 元、净残值 12,000 元、使用 5 年，采用年数总和法。第 1 年折旧额为（ ）。',
    options: [
      { text: '36,000 元', is_correct: true },
      { text: '43,200 元', is_correct: false },
      { text: '24,000 元', is_correct: false },
      { text: '21,600 元', is_correct: false }
    ],
    explain: '可折旧额 = 120,000−12,000 = 108,000；年数总和 = 5+4+3+2+1 = 15；第 1 年 = 108,000 × 5/15 = 36,000。'
  },
  {
    practice_id: 10137, source_lesson_id: 14,
    type: 'concept', level: 'improve', hot: ['depreciation-ddb'],
    interaction_type: 'multi',
    prompt: '下列关于加速折旧法的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '双倍余额递减法前期折旧多后期折旧少', is_correct: true },
      { label: 'B', text: '年数总和法各年折旧额逐年递减', is_correct: true },
      { label: 'C', text: '加速折旧法下固定资产使用年限内折旧总额大于年限平均法', is_correct: false },
      { label: 'D', text: '加速折旧法适用于技术更新较快的资产', is_correct: true }
    ],
    explain: 'C 错误：无论哪种折旧方法，折旧总额 = 原值 − 净残值，总额相同，只是各年分布不同。'
  },
  {
    practice_id: 10138, source_lesson_id: 14,
    type: 'calc', level: 'exam', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '【真题级】某设备原值 120,000 元、净残值 12,000 元、使用 5 年，年数总和法下第 2 年折旧额为（ ）。',
    options: [
      { text: '28,800 元', is_correct: true },
      { text: '36,000 元', is_correct: false },
      { text: '21,600 元', is_correct: false },
      { text: '14,400 元', is_correct: false }
    ],
    explain: '可折旧额 108,000；年数总和 15；第 2 年 = 108,000 × 4/15 = 28,800。'
  },
  {
    practice_id: 10139, source_lesson_id: 14,
    type: 'calc', level: 'exam', hot: ['depreciation-ddb'],
    interaction_type: 'single',
    prompt: '【真题级】原值 200,000 元、残值 10,000 元、使用 8 年，双倍余额递减法下第 2 年折旧额最接近（ ）。',
    options: [
      { text: '37,500 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '28,125 元', is_correct: false },
      { text: '25,000 元', is_correct: false }
    ],
    explain: '折旧率 = 2/8 = 25%；第 1 年 = 200,000×25% = 50,000；第 2 年 = (200,000−50,000)×25% = 37,500。'
  },
  {
    practice_id: 10141, source_lesson_id: 15,
    type: 'concept', level: 'basic', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '下列关于无形资产摊销的说法中，正确的是（ ）。',
    options: [
      { text: '使用寿命有限的无形资产应按期摊销', is_correct: true },
      { text: '使用寿命不确定的无形资产也应按期摊销', is_correct: false },
      { text: '无形资产摊销一律计入管理费用', is_correct: false },
      { text: '无形资产当月增加当月不摊销', is_correct: false }
    ],
    explain: '使用寿命不确定的不摊销但需每年减值测试；出租的无形资产摊销计入其他业务成本；无形资产当月增加当月开始摊销。'
  },
  {
    practice_id: 10142, source_lesson_id: 15,
    type: 'concept', level: 'basic', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '无形资产与固定资产在折旧/摊销起始时点上的区别是（ ）。',
    options: [
      { text: '无形资产当月增加当月摊销，固定资产当月增加下月计提', is_correct: true },
      { text: '两者都是当月增加下月开始', is_correct: false },
      { text: '两者都是当月增加当月开始', is_correct: false },
      { text: '无形资产当月增加下月摊销，固定资产当月增加当月计提', is_correct: false }
    ],
    explain: '无形资产：当月增加当月摊、当月减少当月停；固定资产：当月增加下月提、当月减少当月提。方向相反。'
  },
  {
    practice_id: 10143, source_lesson_id: 15,
    type: 'calc', level: 'basic', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '购入专利权 480,000 元，预计使用 10 年，月摊销额为（ ）。',
    options: [
      { text: '4,000 元', is_correct: true },
      { text: '4,800 元', is_correct: false },
      { text: '40,000 元', is_correct: false },
      { text: '48,000 元', is_correct: false }
    ],
    explain: '年摊销 = 480,000 ÷ 10 = 48,000；月摊销 = 48,000 ÷ 12 = 4,000 元。'
  },
  {
    practice_id: 10144, source_lesson_id: 15,
    type: 'calc', level: 'improve', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '7 月 1 日购入一项专利 240,000 元，使用年限 10 年。当年应摊销（ ）。',
    options: [
      { text: '12,000 元', is_correct: true },
      { text: '24,000 元', is_correct: false },
      { text: '14,000 元', is_correct: false },
      { text: '10,000 元', is_correct: false }
    ],
    explain: '月摊销 = 240,000 ÷ 10 ÷ 12 = 2,000。当月增加当月摊，7-12 月共 6 个月 = 2,000 × 6 = 12,000。'
  },
  {
    practice_id: 10145, source_lesson_id: 15,
    type: 'journal', level: 'improve', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '企业将一项专利权出租给其他单位使用，每月摊销 5,000 元。摊销时应借记的科目是（ ）。',
    options: [
      { text: '其他业务成本', is_correct: true },
      { text: '管理费用', is_correct: false },
      { text: '销售费用', is_correct: false },
      { text: '营业外支出', is_correct: false }
    ],
    explain: '出租无形资产取得的收入计入其他业务收入，对应的摊销计入其他业务成本。自用才计入管理费用。'
  },
  {
    practice_id: 10146, source_lesson_id: 15,
    type: 'calc', level: 'improve', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '某无形资产原值 500,000 元，原使用年限 10 年，已摊销 3 年后计提减值准备 50,000 元，剩余使用年限调整为 5 年。减值后每年摊销额为（ ）。',
    options: [
      { text: '60,000 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '70,000 元', is_correct: false },
      { text: '65,000 元', is_correct: false }
    ],
    explain: '已摊销 = 500,000÷10×3 = 150,000；减值前账面 = 350,000；减值后 = 350,000−50,000 = 300,000；新年摊销 = 300,000÷5 = 60,000。'
  },
  {
    practice_id: 10147, source_lesson_id: 15,
    type: 'concept', level: 'improve', hot: ['intangible-amort'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于无形资产的有（ ）。',
    options: [
      { label: 'A', text: '专利权', is_correct: true },
      { label: 'B', text: '非专利技术', is_correct: true },
      { label: 'C', text: '商标权', is_correct: true },
      { label: 'D', text: '商誉', is_correct: false },
      { label: 'E', text: '土地使用权', is_correct: true }
    ],
    explain: '商誉不属于无形资产，商誉不具有可辨认性。专利权、非专利技术、商标权、土地使用权均属于无形资产。'
  },
  {
    practice_id: 10148, source_lesson_id: 15,
    type: 'concept', level: 'exam', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，关于使用寿命不确定的无形资产说法正确的是（ ）。',
    options: [
      { text: '不摊销，但应在每个会计期间进行减值测试', is_correct: true },
      { text: '按 10 年摊销', is_correct: false },
      { text: '不摊销，也不做减值测试', is_correct: false },
      { text: '按合同约定年限摊销', is_correct: false }
    ],
    explain: '使用寿命不确定的无形资产不摊销，但至少在每年年末进行减值测试。'
  },
  {
    practice_id: 10149, source_lesson_id: 15,
    type: 'journal', level: 'exam', hot: ['intangible-amort'],
    interaction_type: 'single',
    prompt: '【真题级】企业出售一项无形资产，取得价款 80,000 元，该资产原值 120,000 元，已摊销 60,000 元，已提减值准备 5,000 元。处置损益为（ ）。',
    options: [
      { text: '利得 25,000 元', is_correct: true },
      { text: '利得 20,000 元', is_correct: false },
      { text: '损失 40,000 元', is_correct: false },
      { text: '利得 80,000 元', is_correct: false }
    ],
    explain: '账面价值 = 120,000 − 60,000 − 5,000 = 55,000；处置损益 = 80,000 − 55,000 = 25,000（利得），计入资产处置损益。'
  },
  {
    practice_id: 10151, source_lesson_id: 16,
    type: 'concept', level: 'basic', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '下列关于短期借款的说法中，正确的是（ ）。',
    options: [
      { text: '短期借款是指企业向银行或其他金融机构借入的期限在一年以内的各种借款', is_correct: true },
      { text: '短期借款利息一律在取得借款时扣除', is_correct: false },
      { text: '短期借款利息应计入营业外支出', is_correct: false },
      { text: '短期借款到期不能偿还时转为应付账款', is_correct: false }
    ],
    explain: '短期借款期限≤1年；利息计入财务费用；不能偿还时应协商展期或转长期借款，不是应付账款。'
  },
  {
    practice_id: 10152, source_lesson_id: 16,
    type: 'concept', level: 'basic', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '企业按期计提短期借款利息时，应借记的科目是（ ）。',
    options: [
      { text: '财务费用', is_correct: true },
      { text: '管理费用', is_correct: false },
      { text: '应付利息', is_correct: false },
      { text: '短期借款', is_correct: false }
    ],
    explain: '计提利息：借「财务费用」贷「应付利息」。财务费用在借方表示费用增加。'
  },
  {
    practice_id: 10153, source_lesson_id: 16,
    type: 'journal', level: 'basic', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '企业取得短期借款时，正确的会计分录是（ ）。',
    options: [
      { text: '借：银行存款 / 贷：短期借款', is_correct: true },
      { text: '借：短期借款 / 贷：银行存款', is_correct: false },
      { text: '借：银行存款 / 贷：应付账款', is_correct: false },
      { text: '借：库存现金 / 贷：短期借款', is_correct: false }
    ],
    explain: '取得借款：银行存款（资产）增加记借方，短期借款（负债）增加记贷方。'
  },
  {
    practice_id: 10154, source_lesson_id: 16,
    type: 'calc', level: 'improve', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '企业借入 600,000 元短期借款，年利率 6%，按季计提利息。每季度应计提的利息为（ ）。',
    options: [
      { text: '9,000 元', is_correct: true },
      { text: '6,000 元', is_correct: false },
      { text: '36,000 元', is_correct: false },
      { text: '3,000 元', is_correct: false }
    ],
    explain: '季度利息 = 600,000 × 6% × 3/12 = 9,000 元。'
  },
  {
    practice_id: 10155, source_lesson_id: 16,
    type: 'calc', level: 'improve', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '企业 1 月 1 日借入 1,000,000 元短期借款，年利率 4.8%，按月计提利息。每月应计提利息（ ）。',
    options: [
      { text: '4,000 元', is_correct: true },
      { text: '4,800 元', is_correct: false },
      { text: '48,000 元', is_correct: false },
      { text: '40,000 元', is_correct: false }
    ],
    explain: '月利息 = 1,000,000 × 4.8% ÷ 12 = 4,000 元。'
  },
  {
    practice_id: 10156, source_lesson_id: 16,
    type: 'calc', level: 'improve', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '企业 4 月 1 日借入 800,000 元，年利率 6%，期限 9 个月，到期一次还本付息。到期应偿还的本息合计为（ ）。',
    options: [
      { text: '836,000 元', is_correct: true },
      { text: '848,000 元', is_correct: false },
      { text: '800,000 元', is_correct: false },
      { text: '830,000 元', is_correct: false }
    ],
    explain: '利息 = 800,000 × 6% × 9/12 = 36,000；到期还本付息 = 800,000 + 36,000 = 836,000 元。'
  },
  {
    practice_id: 10157, source_lesson_id: 16,
    type: 'journal', level: 'improve', hot: ['short-loan'],
    interaction_type: 'multi',
    prompt: '下列关于短期借款利息处理的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '按期计提利息时借记财务费用', is_correct: true },
      { label: 'B', text: '按期计提利息时贷记应付利息', is_correct: true },
      { label: 'C', text: '实际支付利息时借记应付利息', is_correct: true },
      { label: 'D', text: '利息金额较小时可在实际支付时直接计入财务费用', is_correct: true },
      { label: 'E', text: '短期借款利息应资本化计入固定资产', is_correct: false }
    ],
    explain: '短期借款利息费用化，不资本化。金额较小时可不预提直接在支付时记入财务费用。'
  },
  {
    practice_id: 10158, source_lesson_id: 16,
    type: 'calc', level: 'exam', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '【真题级】企业 7 月 1 日借入 2,000,000 元，年利率 5.4%，按半年计提利息。12 月 31 日应计提利息（ ）。',
    options: [
      { text: '54,000 元', is_correct: true },
      { text: '108,000 元', is_correct: false },
      { text: '27,000 元', is_correct: false },
      { text: '45,000 元', is_correct: false }
    ],
    explain: '半年利息 = 2,000,000 × 5.4% × 6/12 = 54,000 元。'
  },
  {
    practice_id: 10159, source_lesson_id: 16,
    type: 'journal', level: 'exam', hot: ['short-loan'],
    interaction_type: 'single',
    prompt: '【真题级】企业偿还到期短期借款 500,000 元，同时支付已计提的利息 15,000 元。正确的分录是（ ）。',
    options: [
      { text: '借：短期借款 500,000、应付利息 15,000 / 贷：银行存款 515,000', is_correct: true },
      { text: '借：短期借款 515,000 / 贷：银行存款 515,000', is_correct: false },
      { text: '借：财务费用 515,000 / 贷：银行存款 515,000', is_correct: false },
      { text: '借：短期借款 500,000、财务费用 15,000 / 贷：银行存款 515,000', is_correct: false }
    ],
    explain: '利息已计提过，偿还时冲减应付利息（而非再记财务费用）。本金冲短期借款。'
  }
);
