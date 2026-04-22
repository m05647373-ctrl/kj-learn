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
,
  {
    practice_id: 10161, source_lesson_id: 17,
    type: 'concept', level: 'basic', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '下列各项中，不属于职工薪酬核算范围的是（ ）。',
    options: [
      { text: '工资奖金', is_correct: false },
      { text: '五险一金', is_correct: false },
      { text: '职工教育经费', is_correct: false },
      { text: '股东分红', is_correct: true }
    ],
    explain: '股东分红属于利润分配，不属于职工薪酬。职工薪酬包括工资、奖金、津贴、五险一金、福利费、工会经费、职工教育经费等。'
  },
  {
    practice_id: 10162, source_lesson_id: 17,
    type: 'concept', level: 'basic', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '计提车间工人工资时，应借记的科目是（ ）。',
    options: [
      { text: '生产成本', is_correct: true },
      { text: '管理费用', is_correct: false },
      { text: '销售费用', is_correct: false },
      { text: '制造费用', is_correct: false }
    ],
    explain: '车间直接生产工人的工资计入生产成本；车间管理人员工资计入制造费用；行政管理人员工资计入管理费用。'
  },
  {
    practice_id: 10163, source_lesson_id: 17,
    type: 'concept', level: 'basic', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '下列关于应付职工薪酬的说法中，错误的是（ ）。',
    options: [
      { text: '职工薪酬包括辞退福利', is_correct: false },
      { text: '非货币性福利也属于职工薪酬', is_correct: false },
      { text: '个人承担的社保由企业直接计入管理费用', is_correct: true },
      { text: '短期薪酬应在职工提供服务期间确认', is_correct: false }
    ],
    explain: '个人承担的社保从应付职工薪酬中代扣，不直接计入费用。'
  },
  {
    practice_id: 10164, source_lesson_id: 17,
    type: 'calc', level: 'advanced', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '某企业当月车间工人工资 120,000 元、管理人员工资 60,000 元、销售人员工资 20,000 元。计提工资时「应付职工薪酬」贷方发生额合计为（ ）。',
    options: [
      { text: '200,000 元', is_correct: true },
      { text: '180,000 元', is_correct: false },
      { text: '120,000 元', is_correct: false },
      { text: '140,000 元', is_correct: false }
    ],
    explain: '全部工资均通过应付职工薪酬归集：120,000 + 60,000 + 20,000 = 200,000 元。'
  },
  {
    practice_id: 10165, source_lesson_id: 17,
    type: 'calc', level: 'advanced', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '承上题，单位承担养老保险 16%、医疗保险 8%、失业保险 0.5%。单位应承担的社保费用合计为（ ）。',
    options: [
      { text: '49,000 元', is_correct: true },
      { text: '32,000 元', is_correct: false },
      { text: '45,000 元', is_correct: false },
      { text: '56,000 元', is_correct: false }
    ],
    explain: '单位社保比例 = 16% + 8% + 0.5% = 24.5%；200,000 × 24.5% = 49,000 元。'
  },
  {
    practice_id: 10166, source_lesson_id: 17,
    type: 'calc', level: 'advanced', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '某企业工资总额 200,000 元，个人承担养老 8%、医疗 2%、失业 0.5%。实际发放工资时银行存款支付金额为（ ）。',
    options: [
      { text: '179,000 元', is_correct: true },
      { text: '200,000 元', is_correct: false },
      { text: '190,000 元', is_correct: false },
      { text: '175,000 元', is_correct: false }
    ],
    explain: '个人代扣 = 200,000 × (8%+2%+0.5%) = 21,000；实发 = 200,000 − 21,000 = 179,000 元。'
  },
  {
    practice_id: 10167, source_lesson_id: 17,
    type: 'journal', level: 'advanced', hot: ['payroll'],
    interaction_type: 'multi',
    prompt: '下列关于非货币性福利的处理，正确的有（ ）。',
    options: [
      { label: 'A', text: '以自产产品发放福利应视同销售', is_correct: true },
      { label: 'B', text: '外购商品发放福利取得的进项税额可以抵扣', is_correct: false },
      { label: 'C', text: '自产产品发放福利按售价和增值税确认应付职工薪酬', is_correct: true },
      { label: 'D', text: '非货币性福利不需要通过应付职工薪酬核算', is_correct: false }
    ],
    explain: 'B 错误：外购商品用于集体福利，进项税额不得抵扣，需做进项税额转出。D 错误：非货币性福利也要通过应付职工薪酬核算。'
  },
  {
    practice_id: 10168, source_lesson_id: 17,
    type: 'calc', level: 'exam', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '【真题级】企业将自产产品作为福利发放给职工，产品成本 50,000 元（等于售价），增值税税率 13%。应确认的应付职工薪酬为（ ）。',
    options: [
      { text: '56,500 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '63,500 元', is_correct: false },
      { text: '43,500 元', is_correct: false }
    ],
    explain: '视同销售：应付职工薪酬 = 售价 + 销项税 = 50,000 + 50,000 × 13% = 56,500 元。'
  },
  {
    practice_id: 10169, source_lesson_id: 17,
    type: 'journal', level: 'exam', hot: ['payroll'],
    interaction_type: 'single',
    prompt: '【真题级】发放工资时代扣个人所得税 5,000 元，正确的处理是（ ）。',
    options: [
      { text: '借：应付职工薪酬 5,000 / 贷：应交税费——应交个人所得税 5,000', is_correct: true },
      { text: '借：管理费用 5,000 / 贷：应交税费——应交个人所得税 5,000', is_correct: false },
      { text: '借：应付职工薪酬 5,000 / 贷：银行存款 5,000', is_correct: false },
      { text: '借：其他应收款 5,000 / 贷：银行存款 5,000', is_correct: false }
    ],
    explain: '代扣个税从应付职工薪酬中扣除，贷记应交个人所得税；实际缴纳时再借记应交税费、贷记银行存款。'
  },
  {
    practice_id: 10171, source_lesson_id: 18,
    type: 'concept', level: 'basic', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '一般纳税人月末增值税的结转方向取决于（ ）。',
    options: [
      { text: '销项税额与进项税额的差额正负', is_correct: true },
      { text: '本月销售收入金额', is_correct: false },
      { text: '本月采购金额', is_correct: false },
      { text: '上月留抵税额', is_correct: false }
    ],
    explain: '销项 > 进项，差额为应纳税额，结转至未交增值税（贷方）；销项 < 进项，形成留抵，不结转。'
  },
  {
    practice_id: 10172, source_lesson_id: 18,
    type: 'concept', level: 'basic', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '下列各项中，需要做进项税额转出的是（ ）。',
    options: [
      { text: '因管理不善导致原材料被盗', is_correct: true },
      { text: '正常生产领用原材料', is_correct: false },
      { text: '销售产品', is_correct: false },
      { text: '购入用于生产的设备', is_correct: false }
    ],
    explain: '非正常损失（管理不善导致的被盗、霉烂变质等）对应的进项税额不得抵扣，需要转出。'
  },
  {
    practice_id: 10173, source_lesson_id: 18,
    type: 'concept', level: 'basic', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '月末增值税留抵税额应（ ）。',
    options: [
      { text: '保留在「应交增值税」借方，不做结转分录', is_correct: true },
      { text: '结转至「未交增值税」借方', is_correct: false },
      { text: '结转至「未交增值税」贷方', is_correct: false },
      { text: '冲减本月销项税额', is_correct: false }
    ],
    explain: '留抵税额表示本月进项大于销项，自动留在应交增值税借方余额中，不需要做结转分录。'
  },
  {
    practice_id: 10174, source_lesson_id: 18,
    type: 'calc', level: 'advanced', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '某企业当月销项税额 130,000 元、进项税额 85,000 元、已预交增值税 20,000 元。月末应结转至「未交增值税」的金额为（ ）。',
    options: [
      { text: '25,000 元', is_correct: true },
      { text: '45,000 元', is_correct: false },
      { text: '65,000 元', is_correct: false },
      { text: '30,000 元', is_correct: false }
    ],
    explain: '应纳 = 130,000 − 85,000 = 45,000；已交 20,000；未交 = 45,000 − 20,000 = 25,000 元。'
  },
  {
    practice_id: 10175, source_lesson_id: 18,
    type: 'calc', level: 'advanced', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '某企业当月销项税额 50,000 元、进项税额 65,000 元。月末应（ ）。',
    options: [
      { text: '不做结转分录，留抵 15,000 元', is_correct: true },
      { text: '结转未交增值税 15,000 元', is_correct: false },
      { text: '申请退税 15,000 元', is_correct: false },
      { text: '冲减销项税额 15,000 元', is_correct: false }
    ],
    explain: '进项 > 销项，留抵 = 65,000 − 50,000 = 15,000 元，保留在应交增值税借方，不结转。'
  },
  {
    practice_id: 10176, source_lesson_id: 18,
    type: 'calc', level: 'advanced', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '因管理不善导致原材料毁损，材料成本 100,000 元，增值税税率 13%。应转出的进项税额为（ ）。',
    options: [
      { text: '13,000 元', is_correct: true },
      { text: '100,000 元', is_correct: false },
      { text: '113,000 元', is_correct: false },
      { text: '87,000 元', is_correct: false }
    ],
    explain: '进项税额转出 = 100,000 × 13% = 13,000 元。会计分录：借记待处理财产损溢，贷记原材料、应交税费——进项税额转出。'
  },
  {
    practice_id: 10177, source_lesson_id: 18,
    type: 'journal', level: 'advanced', hot: ['vat-settle'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于视同销售需要计算销项税额的有（ ）。',
    options: [
      { label: 'A', text: '将自产产品用于对外捐赠', is_correct: true },
      { label: 'B', text: '将自产产品用于集体福利', is_correct: true },
      { label: 'C', text: '将外购商品用于个人消费', is_correct: false },
      { label: 'D', text: '将自产产品用于在建工程', is_correct: false }
    ],
    explain: 'C 和 D：外购商品用于个人消费做进项税额转出；自产产品用于在建工程（营改增后不再视同销售）。A、B 均视同销售。'
  },
  {
    practice_id: 10178, source_lesson_id: 18,
    type: 'calc', level: 'exam', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '【真题级】某企业当月销项税额 260,000 元、进项税额 180,000 元、进项税额转出 13,000 元、已交税金 30,000 元。月末应结转未交增值税（ ）。',
    options: [
      { text: '63,000 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '80,000 元', is_correct: false },
      { text: '93,000 元', is_correct: false }
    ],
    explain: '应纳 = 260,000 − 180,000 + 13,000 = 93,000；未交 = 93,000 − 30,000 = 63,000 元。'
  },
  {
    practice_id: 10179, source_lesson_id: 18,
    type: 'concept', level: 'exam', hot: ['vat-settle'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于增值税会计处理的说法中，错误的是（ ）。',
    options: [
      { text: '小规模纳税人的增值税也通过「应交税费——应交增值税」多栏式明细核算', is_correct: true },
      { text: '一般纳税人应设置进项税额、销项税额等专栏', is_correct: false },
      { text: '月末有应交未交增值税时，应结转至未交增值税科目', is_correct: false },
      { text: '预交的增值税在「已交税金」专栏核算', is_correct: false }
    ],
    explain: '小规模纳税人不需要设置多栏式明细账，直接在「应交税费——应交增值税」科目下核算即可。'
  },
  {
    practice_id: 10181, source_lesson_id: 19,
    type: 'concept', level: 'basic', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '投资者投入资本超过其在注册资本中所占份额的部分，应计入（ ）。',
    options: [
      { text: '资本公积', is_correct: true },
      { text: '实收资本', is_correct: false },
      { text: '盈余公积', is_correct: false },
      { text: '营业外收入', is_correct: false }
    ],
    explain: '超出注册资本份额的部分为资本溢价，计入资本公积——资本溢价。'
  },
  {
    practice_id: 10182, source_lesson_id: 19,
    type: 'concept', level: 'basic', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '下列各项中，不能用资本公积进行的是（ ）。',
    options: [
      { text: '弥补亏损', is_correct: true },
      { text: '转增资本', is_correct: false },
      { text: '形成溢价', is_correct: false },
      { text: '资本公积转增股本', is_correct: false }
    ],
    explain: '资本公积不能用来弥补亏损，弥补亏损应使用盈余公积或以后年度利润。'
  },
  {
    practice_id: 10183, source_lesson_id: 19,
    type: 'concept', level: 'basic', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '有限责任公司接受投资者以非货币性资产出资，应按（ ）作为入账价值。',
    options: [
      { text: '合同约定价值（公允）', is_correct: true },
      { text: '投资者账面价值', is_correct: false },
      { text: '评估价值与账面价值的较低者', is_correct: false },
      { text: '评估价值与合同价值的较高者', is_correct: false }
    ],
    explain: '非货币性资产出资按合同各方确认的公允价值（即约定价值）入账。'
  },
  {
    practice_id: 10184, source_lesson_id: 19,
    type: 'calc', level: 'advanced', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '甲公司接受某投资者投入货币资金 2,000,000 元，约定在注册资本中的份额为 1,500,000 元。应确认的资本公积为（ ）。',
    options: [
      { text: '500,000 元', is_correct: true },
      { text: '2,000,000 元', is_correct: false },
      { text: '1,500,000 元', is_correct: false },
      { text: '3,500,000 元', is_correct: false }
    ],
    explain: '资本溢价 = 实际投入 2,000,000 − 约定份额 1,500,000 = 500,000 元。'
  },
  {
    practice_id: 10185, source_lesson_id: 19,
    type: 'calc', level: 'advanced', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '乙公司接受投资者投入设备一台，合同约定价值 750,000 元，在注册资本中的份额为 600,000 元。应确认的资本公积为（ ）。',
    options: [
      { text: '150,000 元', is_correct: true },
      { text: '750,000 元', is_correct: false },
      { text: '600,000 元', is_correct: false },
      { text: '1,350,000 元', is_correct: false }
    ],
    explain: '设备按合同约定价值 750,000 入账；溢价 = 750,000 − 600,000 = 150,000 元。'
  },
  {
    practice_id: 10186, source_lesson_id: 19,
    type: 'journal', level: 'advanced', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '企业将资本公积 300,000 元转增资本，正确的分录是（ ）。',
    options: [
      { text: '借：资本公积 300,000 / 贷：实收资本 300,000', is_correct: true },
      { text: '借：实收资本 300,000 / 贷：资本公积 300,000', is_correct: false },
      { text: '借：资本公积 300,000 / 贷：盈余公积 300,000', is_correct: false },
      { text: '借：银行存款 300,000 / 贷：实收资本 300,000', is_correct: false }
    ],
    explain: '资本公积转增资本：减少资本公积（借方）、增加实收资本（贷方），不涉及货币资金。'
  },
  {
    practice_id: 10187, source_lesson_id: 19,
    type: 'journal', level: 'advanced', hot: ['equity-paid-in'],
    interaction_type: 'multi',
    prompt: '下列关于实收资本的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '投资者可以用货币资金出资', is_correct: true },
      { label: 'B', text: '投资者可以用固定资产出资', is_correct: true },
      { label: 'C', text: '投资者可以用知识产权出资', is_correct: true },
      { label: 'D', text: '投资者可以用劳务出资', is_correct: false },
      { label: 'E', text: '投资者以非货币出资应按约定价值入账', is_correct: true }
    ],
    explain: 'D 错误：有限责任公司和股份有限公司的股东不能以劳务出资（合伙企业可以）。'
  },
  {
    practice_id: 10188, source_lesson_id: 19,
    type: 'calc', level: 'exam', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '【真题级】A 投资者以现金 600,000 元、B 投资者以设备 550,000 元（约定价值）分别投入丙公司，各占注册资本 500,000 元的份额。应确认资本公积合计为（ ）。',
    options: [
      { text: '150,000 元', is_correct: true },
      { text: '100,000 元', is_correct: false },
      { text: '50,000 元', is_correct: false },
      { text: '1,150,000 元', is_correct: false }
    ],
    explain: 'A 溢价 = 600,000 − 500,000 = 100,000；B 溢价 = 550,000 − 500,000 = 50,000；合计 150,000 元。'
  },
  {
    practice_id: 10189, source_lesson_id: 19,
    type: 'concept', level: 'exam', hot: ['equity-paid-in'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，会导致企业实收资本增加的是（ ）。',
    options: [
      { text: '资本公积转增资本', is_correct: true },
      { text: '接受现金捐赠', is_correct: false },
      { text: '盈余公积弥补亏损', is_correct: false },
      { text: '宣告分配现金股利', is_correct: false }
    ],
    explain: '资本公积转增资本使实收资本增加；捐赠计入营业外收入；盈余公积弥补亏损不影响实收资本；分股利减少未分配利润。'
  },
  {
    practice_id: 10191, source_lesson_id: 20,
    type: 'concept', level: 'basic', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '公司制企业法定盈余公积的计提比例是（ ）。',
    options: [
      { text: '净利润的 10%', is_correct: true },
      { text: '净利润的 5%', is_correct: false },
      { text: '营业利润的 10%', is_correct: false },
      { text: '利润总额的 10%', is_correct: false }
    ],
    explain: '法定盈余公积按税后净利润（扣除弥补以前年度亏损后）的 10% 计提。'
  },
  {
    practice_id: 10192, source_lesson_id: 20,
    type: 'concept', level: 'basic', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '法定盈余公积累计达到注册资本的（ ）以上时，可以不再计提。',
    options: [
      { text: '50%', is_correct: true },
      { text: '25%', is_correct: false },
      { text: '30%', is_correct: false },
      { text: '100%', is_correct: false }
    ],
    explain: '公司法规定：法定盈余公积累计额达到注册资本的 50% 时可不再计提。'
  },
  {
    practice_id: 10193, source_lesson_id: 20,
    type: 'concept', level: 'basic', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '下列各项中，不属于盈余公积用途的是（ ）。',
    options: [
      { text: '对外投资', is_correct: true },
      { text: '弥补亏损', is_correct: false },
      { text: '转增资本', is_correct: false },
      { text: '分配股利', is_correct: false }
    ],
    explain: '盈余公积三大用途：弥补亏损、转增资本、分配现金股利或利润。对外投资不属于盈余公积的用途。'
  },
  {
    practice_id: 10194, source_lesson_id: 20,
    type: 'calc', level: 'advanced', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '某企业本年净利润 1,200,000 元，按 10% 计提法定盈余公积。应计提金额为（ ）。',
    options: [
      { text: '120,000 元', is_correct: true },
      { text: '60,000 元', is_correct: false },
      { text: '240,000 元', is_correct: false },
      { text: '100,000 元', is_correct: false }
    ],
    explain: '法定盈余公积 = 1,200,000 × 10% = 120,000 元。'
  },
  {
    practice_id: 10195, source_lesson_id: 20,
    type: 'calc', level: 'advanced', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '某企业本年净利润 500,000 元，按 10% 计提法定盈余公积、5% 计提任意盈余公积。盈余公积计提合计为（ ）。',
    options: [
      { text: '75,000 元', is_correct: true },
      { text: '50,000 元', is_correct: false },
      { text: '25,000 元', is_correct: false },
      { text: '100,000 元', is_correct: false }
    ],
    explain: '法定 = 500,000 × 10% = 50,000；任意 = 500,000 × 5% = 25,000；合计 75,000 元。'
  },
  {
    practice_id: 10196, source_lesson_id: 20,
    type: 'journal', level: 'advanced', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '企业用盈余公积 300,000 元弥补亏损，正确的分录是（ ）。',
    options: [
      { text: '借：盈余公积 300,000 / 贷：利润分配——盈余公积补亏 300,000', is_correct: true },
      { text: '借：利润分配 300,000 / 贷：盈余公积 300,000', is_correct: false },
      { text: '借：盈余公积 300,000 / 贷：营业外收入 300,000', is_correct: false },
      { text: '借：盈余公积 300,000 / 贷：本年利润 300,000', is_correct: false }
    ],
    explain: '盈余公积弥补亏损：减少盈余公积（借方），增加利润分配——盈余公积补亏（贷方），最终冲减未分配利润的借方余额。'
  },
  {
    practice_id: 10197, source_lesson_id: 20,
    type: 'journal', level: 'advanced', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '企业将盈余公积 200,000 元转增资本，正确的分录是（ ）。',
    options: [
      { text: '借：盈余公积 200,000 / 贷：实收资本 200,000', is_correct: true },
      { text: '借：实收资本 200,000 / 贷：盈余公积 200,000', is_correct: false },
      { text: '借：盈余公积 200,000 / 贷：资本公积 200,000', is_correct: false },
      { text: '借：盈余公积 200,000 / 贷：银行存款 200,000', is_correct: false }
    ],
    explain: '盈余公积转增资本：减少盈余公积（借方）、增加实收资本（贷方），不涉及银行存款。'
  },
  {
    practice_id: 10198, source_lesson_id: 20,
    type: 'calc', level: 'exam', hot: ['surplus-reserve'],
    interaction_type: 'single',
    prompt: '【真题级】某公司注册资本 5,000,000 元，法定盈余公积已累计计提 2,400,000 元。本年净利润 600,000 元。本年应计提法定盈余公积（ ）。',
    options: [
      { text: '60,000 元', is_correct: true },
      { text: '100,000 元', is_correct: false },
      { text: '0 元', is_correct: false },
      { text: '50,000 元', is_correct: false }
    ],
    explain: '上限 = 5,000,000 × 50% = 2,500,000；已提 2,400,000，差 100,000。本年应提 = 600,000 × 10% = 60,000 元；提后累计 2,460,000 < 2,500,000，未达上限，按 60,000 全额计提。'
  },
  {
    practice_id: 10199, source_lesson_id: 20,
    type: 'concept', level: 'exam', hot: ['surplus-reserve'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于利润分配顺序的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '弥补以前年度亏损应在计提盈余公积之前', is_correct: true },
      { label: 'B', text: '提取法定盈余公积应在提取任意盈余公积之前', is_correct: true },
      { label: 'C', text: '可以先分配股利再计提盈余公积', is_correct: false },
      { label: 'D', text: '任意盈余公积由企业自主决定是否计提', is_correct: true }
    ],
    explain: 'C 错误：利润分配顺序为弥补亏损→提法定盈余公积→提任意盈余公积→分配股利，不能跳过盈余公积先分股利。'
  }
,
  {
    practice_id: 10201, source_lesson_id: 21,
    type: 'concept', level: 'basic', hot: ['report-mapping'],
    interaction_type: 'single',
    prompt: '下列各项中，属于资产负债表项目的是（ ）。',
    options: [
      { text: '主营业务收入', is_correct: false },
      { text: '应收账款', is_correct: true },
      { text: '营业成本', is_correct: false },
      { text: '管理费用', is_correct: false }
    ],
    explain: '应收账款是企业的资产，列示于资产负债表；其余三项是利润表科目（收入/成本/费用）。'
  },
  {
    practice_id: 10202, source_lesson_id: 21,
    type: 'concept', level: 'basic', hot: ['report-mapping'],
    interaction_type: 'single',
    prompt: '下列各项中，属于利润表项目的是（ ）。',
    options: [
      { text: '实收资本', is_correct: false },
      { text: '应付账款', is_correct: false },
      { text: '销售费用', is_correct: true },
      { text: '库存商品', is_correct: false }
    ],
    explain: '销售费用是期间费用，反映在利润表；实收资本/应付账款/库存商品均属于资产负债表项目。'
  },
  {
    practice_id: 10203, source_lesson_id: 21,
    type: 'concept', level: 'basic', hot: ['report-mapping'],
    interaction_type: 'single',
    prompt: '资产负债表反映的是企业（ ）的财务状况。',
    options: [
      { text: '某一时点', is_correct: true },
      { text: '某一期间', is_correct: false },
      { text: '过去一年', is_correct: false },
      { text: '未来一年', is_correct: false }
    ],
    explain: '资产负债表是时点报表，反映某一特定日期的资产、负债和所有者权益余额；利润表才是期间报表。'
  },
  {
    practice_id: 10204, source_lesson_id: 21,
    type: 'concept', level: 'improve', hot: ['report-mapping'],
    interaction_type: 'multi',
    prompt: '下列项目中，应列示在利润表中的有（ ）。',
    options: [
      { label: 'A', text: '主营业务收入', is_correct: true },
      { label: 'B', text: '营业成本', is_correct: true },
      { label: 'C', text: '财务费用', is_correct: true },
      { label: 'D', text: '预付账款', is_correct: false },
      { label: 'E', text: '营业外收入', is_correct: true }
    ],
    explain: '预付账款是资产负债表项目；其余均为利润表项目（收入/成本/费用/利得）。'
  },
  {
    practice_id: 10205, source_lesson_id: 21,
    type: 'concept', level: 'improve', hot: ['report-mapping'],
    interaction_type: 'multi',
    prompt: '下列项目中，应列示在资产负债表中的有（ ）。',
    options: [
      { label: 'A', text: '货币资金', is_correct: true },
      { label: 'B', text: '盈余公积', is_correct: true },
      { label: 'C', text: '所得税费用', is_correct: false },
      { label: 'D', text: '应付职工薪酬', is_correct: true },
      { label: 'E', text: '投资收益', is_correct: false }
    ],
    explain: '所得税费用和投资收益是利润表科目；其余三项分别属于资产、所有者权益、负债，列资产负债表。'
  },
  {
    practice_id: 10206, source_lesson_id: 21,
    type: 'concept', level: 'improve', hot: ['report-mapping'],
    interaction_type: 'single',
    prompt: '下列说法中，正确的是（ ）。',
    options: [
      { text: '利润表反映时点数据', is_correct: false },
      { text: '资产负债表反映期间数据', is_correct: false },
      { text: '净利润同时出现在两张报表中', is_correct: true },
      { text: '收入只在资产负债表中列示', is_correct: false }
    ],
    explain: '净利润：利润表末行计算得出，同时作为所有者权益变动的来源，在资产负债表「未分配利润」中体现，两张表均有。'
  },
  {
    practice_id: 10207, source_lesson_id: 21,
    type: 'concept', level: 'improve', hot: ['report-mapping'],
    interaction_type: 'single',
    prompt: '编制资产负债表时，「未分配利润」的数据来源于（ ）。',
    options: [
      { text: '利润分配表或利润表', is_correct: true },
      { text: '现金流量表', is_correct: false },
      { text: '所有者权益变动表', is_correct: false },
      { text: '备查簿', is_correct: false }
    ],
    explain: '未分配利润 = 期初余额 + 本期净利润 − 本期分配，其中净利润来自利润表；也可从利润分配表取数。'
  },
  {
    practice_id: 10208, source_lesson_id: 21,
    type: 'concept', level: 'exam', hot: ['report-mapping'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，不影响利润表「营业利润」的是（ ）。',
    options: [
      { text: '营业外收入', is_correct: true },
      { text: '投资收益', is_correct: false },
      { text: '信用减值损失', is_correct: false },
      { text: '资产减值损失', is_correct: false }
    ],
    explain: '营业外收入/支出在营业利润之后、利润总额之前，不计入营业利润；后三项均参与营业利润计算。'
  },
  {
    practice_id: 10209, source_lesson_id: 21,
    type: 'concept', level: 'exam', hot: ['report-mapping'],
    interaction_type: 'multi',
    prompt: '【真题级】下列项目中，在计算「营业利润」时需要扣除的有（ ）。',
    options: [
      { label: 'A', text: '营业成本', is_correct: true },
      { label: 'B', text: '税金及附加', is_correct: true },
      { label: 'C', text: '三项期间费用', is_correct: true },
      { label: 'D', text: '营业外支出', is_correct: false },
      { label: 'E', text: '资产减值损失', is_correct: true }
    ],
    explain: '营业外支出在营业利润之后扣除，不参与营业利润计算；其余四项均需扣除。'
  },
  {
    practice_id: 10211, source_lesson_id: 22,
    type: 'concept', level: 'basic', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '新收入准则「五步法」的第一步是（ ）。',
    options: [
      { text: '识别合同', is_correct: true },
      { text: '确定交易价格', is_correct: false },
      { text: '识别履约义务', is_correct: false },
      { text: '确认收入', is_correct: false }
    ],
    explain: '五步法顺序：①识别合同→②识别履约义务→③确定交易价格→④分摊交易价格→⑤履约时确认收入。'
  },
  {
    practice_id: 10212, source_lesson_id: 22,
    type: 'concept', level: 'basic', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '下列情形中，应在「某一时点」确认收入的是（ ）。',
    options: [
      { text: '建造合同', is_correct: false },
      { text: '软件定制开发合同', is_correct: false },
      { text: '商品销售（买方已取得控制权）', is_correct: true },
      { text: '为期一年的物业服务合同', is_correct: false }
    ],
    explain: '商品销售在控制权转移时点一次确认；建造、定制开发、持续服务均属于时段确认。'
  },
  {
    practice_id: 10213, source_lesson_id: 22,
    type: 'calc', level: 'improve', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '合同总价 50,000 元，含设备（单独售价 48,000）和一年免费维修（单独售价 4,000）。应分摊给设备的收入最接近（ ）。',
    options: [
      { text: '48,000 元', is_correct: false },
      { text: '46,154 元', is_correct: true },
      { text: '46,000 元', is_correct: false },
      { text: '50,000 元', is_correct: false }
    ],
    explain: '按单独售价比例分摊：设备收入 = 50,000 × 48,000 ÷ (48,000 + 4,000) ≈ 46,154 元。'
  },
  {
    practice_id: 10214, source_lesson_id: 22,
    type: 'calc', level: 'improve', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '合同总价 120,000 元，含三项履约义务，单独售价分别为 60,000、30,000、10,000。分摊给第二项义务的收入为（ ）。',
    options: [
      { text: '30,000 元', is_correct: false },
      { text: '36,000 元', is_correct: true },
      { text: '40,000 元', is_correct: false },
      { text: '24,000 元', is_correct: false }
    ],
    explain: '第二项分摊 = 120,000 × 30,000 ÷ (60,000+30,000+10,000) = 120,000 × 30% = 36,000 元。'
  },
  {
    practice_id: 10215, source_lesson_id: 22,
    type: 'concept', level: 'improve', hot: ['revenue-5step'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于「时段」确认收入的有（ ）。',
    options: [
      { label: 'A', text: '为客户提供为期 2 年的清洁服务', is_correct: true },
      { label: 'B', text: '建造一栋办公楼（建造期 18 个月）', is_correct: true },
      { label: 'C', text: '销售标准化商品（已发货未到客户）', is_correct: false },
      { label: 'D', text: '按月提供咨询服务', is_correct: true }
    ],
    explain: 'C 属于时点确认（货物已发出但尚未转移控制权时不能确认）；A/B/D 均属持续提供服务，按时段确认。'
  },
  {
    practice_id: 10216, source_lesson_id: 22,
    type: 'concept', level: 'improve', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '下列关于「可变对价」的说法，正确的是（ ）。',
    options: [
      { text: '可变对价一律不计入交易价格', is_correct: false },
      { text: '估计的可变对价金额不超过「极可能不会发生重大转回」的限额时才计入', is_correct: true },
      { text: '可变对价应全额计入合同资产', is_correct: false },
      { text: '可变对价不影响履约义务的分摊', is_correct: false }
    ],
    explain: '可变对价需满足「极可能不会发生重大转回」的约束，在该限额内才可纳入交易价格。'
  },
  {
    practice_id: 10217, source_lesson_id: 22,
    type: 'calc', level: 'improve', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '固定款项 1,000,000 元，另有奖励款 200,000 元（实现概率 70%）。期望交易价格为（ ）。',
    options: [
      { text: '1,200,000 元', is_correct: false },
      { text: '1,140,000 元', is_correct: true },
      { text: '1,000,000 元', is_correct: false },
      { text: '1,100,000 元', is_correct: false }
    ],
    explain: '期望法：1,000,000 + 200,000 × 70% = 1,140,000 元。'
  },
  {
    practice_id: 10218, source_lesson_id: 22,
    type: 'concept', level: 'exam', hot: ['revenue-5step'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于收入确认「控制权转移」的说法，错误的是（ ）。',
    options: [
      { text: '发出商品即控制权转移', is_correct: true },
      { text: '客户有能力主导商品的使用并获得几乎全部经济利益为控制权转移', is_correct: false },
      { text: '控制权转移可以是时点也可以是时段', is_correct: false },
      { text: '风险报酬转移是判断控制权的参考指标之一', is_correct: false }
    ],
    explain: '发出商品不等于控制权转移，还需综合判断。控制权的核心是「主导使用并获得几乎全部经济利益」。'
  },
  {
    practice_id: 10219, source_lesson_id: 22,
    type: 'concept', level: 'exam', hot: ['revenue-5step'],
    interaction_type: 'multi',
    prompt: '【真题级】下列各项中，属于「合同负债」的有（ ）。',
    options: [
      { label: 'A', text: '收到客户预付款但尚未履约', is_correct: true },
      { label: 'B', text: '已履约但尚未开票', is_correct: false },
      { label: 'C', text: '客户已付款且企业已履约', is_correct: false },
      { label: 'D', text: '收到定金后部分履约，剩余未履约', is_correct: true }
    ],
    explain: 'B 已履约未开票属于合同资产；C 已履约已付款应确认收入；A 和 D 均是收款在先、履约在后，属合同负债。'
  },
  {
    practice_id: 10221, source_lesson_id: 23,
    type: 'concept', level: 'basic', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '期末结转收入时，应（ ）。',
    options: [
      { text: '借：主营业务收入 / 贷：本年利润', is_correct: true },
      { text: '借：本年利润 / 贷：主营业务收入', is_correct: false },
      { text: '借：主营业务收入 / 贷：利润分配', is_correct: false },
      { text: '借：本年利润 / 贷：利润分配', is_correct: false }
    ],
    explain: '结转收入：将收入类科目贷方余额转入本年利润贷方，分录为借：主营业务收入 / 贷：本年利润。'
  },
  {
    practice_id: 10222, source_lesson_id: 23,
    type: 'concept', level: 'basic', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '期末结转费用时，应（ ）。',
    options: [
      { text: '借：管理费用 / 贷：本年利润', is_correct: false },
      { text: '借：本年利润 / 贷：管理费用', is_correct: true },
      { text: '借：利润分配 / 贷：管理费用', is_correct: false },
      { text: '借：管理费用 / 贷：利润分配', is_correct: false }
    ],
    explain: '结转费用：将费用类科目借方余额转入本年利润借方，分录为借：本年利润 / 贷：管理费用。'
  },
  {
    practice_id: 10223, source_lesson_id: 23,
    type: 'calc', level: 'basic', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '主营业务收入 500,000、主营业务成本 300,000、管理费用 80,000、所得税费用 30,000，结转后本年利润余额为（ ）。',
    options: [
      { text: '贷方 90,000', is_correct: true },
      { text: '借方 90,000', is_correct: false },
      { text: '贷方 120,000', is_correct: false },
      { text: '贷方 200,000', is_correct: false }
    ],
    explain: '本年利润 = 500,000 − 300,000 − 80,000 − 30,000 = 90,000，贷方余额表示盈利。'
  },
  {
    practice_id: 10224, source_lesson_id: 23,
    type: 'calc', level: 'improve', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '营业收入 800,000、营业成本 480,000、销售费用 60,000、财务费用 20,000、营业外支出 40,000，本年利润为（ ）。',
    options: [
      { text: '200,000', is_correct: true },
      { text: '240,000', is_correct: false },
      { text: '260,000', is_correct: false },
      { text: '160,000', is_correct: false }
    ],
    explain: '本年利润 = 800,000 − 480,000 − 60,000 − 20,000 − 40,000 = 200,000。'
  },
  {
    practice_id: 10225, source_lesson_id: 23,
    type: 'calc', level: 'improve', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '营业收入 300,000、营业成本 180,000、管理费用 50,000、所得税费用 14,000，本年净利润为（ ）。',
    options: [
      { text: '56,000', is_correct: true },
      { text: '70,000', is_correct: false },
      { text: '66,000', is_correct: false },
      { text: '86,000', is_correct: false }
    ],
    explain: '净利润 = 300,000 − 180,000 − 50,000 − 14,000 = 56,000。'
  },
  {
    practice_id: 10226, source_lesson_id: 23,
    type: 'concept', level: 'improve', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '年末将「本年利润」转入「利润分配——未分配利润」时，若本年盈利，分录为（ ）。',
    options: [
      { text: '借：本年利润 / 贷：利润分配——未分配利润', is_correct: true },
      { text: '借：利润分配——未分配利润 / 贷：本年利润', is_correct: false },
      { text: '借：本年利润 / 贷：盈余公积', is_correct: false },
      { text: '借：利润分配——未分配利润 / 贷：盈余公积', is_correct: false }
    ],
    explain: '盈利时本年利润贷方余额，年末转出：借：本年利润 / 贷：利润分配——未分配利润。'
  },
  {
    practice_id: 10227, source_lesson_id: 23,
    type: 'concept', level: 'improve', hot: ['profit-carry'],
    interaction_type: 'multi',
    prompt: '下列说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '「本年利润」科目年末无余额', is_correct: true },
      { label: 'B', text: '结转后「本年利润」余额即为净利润', is_correct: false },
      { label: 'C', text: '亏损时借：利润分配——未分配利润 / 贷：本年利润', is_correct: false },
      { label: 'D', text: '所得税费用也需结转进本年利润', is_correct: true }
    ],
    explain: 'A 正确：结转完成后本年利润清零；B 错误：结转前贷方余额才是净利润；C 错误：亏损时本年利润借方，结转分录方向相反；D 正确。'
  },
  {
    practice_id: 10228, source_lesson_id: 23,
    type: 'journal', level: 'exam', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '【真题级】企业本年亏损 50,000 元，年末结转本年利润的分录为（ ）。',
    options: [
      { text: '借：利润分配——未分配利润 50,000 / 贷：本年利润 50,000', is_correct: true },
      { text: '借：本年利润 50,000 / 贷：利润分配——未分配利润 50,000', is_correct: false },
      { text: '借：本年利润 50,000 / 贷：盈余公积 50,000', is_correct: false },
      { text: '借：盈余公积 50,000 / 贷：本年利润 50,000', is_correct: false }
    ],
    explain: '亏损时本年利润借方余额 50,000，结转：借：利润分配——未分配利润 / 贷：本年利润（将亏损转入未分配利润借方，体现累计亏损）。'
  },
  {
    practice_id: 10229, source_lesson_id: 23,
    type: 'concept', level: 'exam', hot: ['profit-carry'],
    interaction_type: 'single',
    prompt: '【真题级】关于「本年利润」科目，下列说法正确的是（ ）。',
    options: [
      { text: '该科目年末有余额，结转后清零', is_correct: true },
      { text: '该科目贷方余额表示亏损', is_correct: false },
      { text: '结转时将费用转入该科目贷方', is_correct: false },
      { text: '该科目属于负债类科目', is_correct: false }
    ],
    explain: '本年利润属于所有者权益类科目，贷方余额表示盈利，年末结转后清零；费用结转进借方（不是贷方）。'
  },
  {
    practice_id: 10231, source_lesson_id: 24,
    type: 'concept', level: 'basic', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '「营业利润」的计算中，不包括（ ）。',
    options: [
      { text: '营业外收入', is_correct: true },
      { text: '投资收益', is_correct: false },
      { text: '资产减值损失', is_correct: false },
      { text: '税金及附加', is_correct: false }
    ],
    explain: '营业外收入在营业利润之后、利润总额之前，不参与营业利润计算。'
  },
  {
    practice_id: 10232, source_lesson_id: 24,
    type: 'calc', level: 'basic', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '营业收入 1,000、营业成本 600、税金及附加 20、三费合计 150、营业外收入 30，利润总额为（ ）。',
    options: [
      { text: '260', is_correct: true },
      { text: '230', is_correct: false },
      { text: '280', is_correct: false },
      { text: '200', is_correct: false }
    ],
    explain: '营业利润 = 1,000 − 600 − 20 − 150 = 230；利润总额 = 230 + 30 = 260。'
  },
  {
    practice_id: 10233, source_lesson_id: 24,
    type: 'calc', level: 'improve', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '营业收入 2,000,000、营业成本 1,200,000、税金及附加 40,000、三费 300,000、其他收益 50,000、投资收益 30,000，营业利润为（ ）。',
    options: [
      { text: '540,000', is_correct: true },
      { text: '500,000', is_correct: false },
      { text: '480,000', is_correct: false },
      { text: '580,000', is_correct: false }
    ],
    explain: '营业利润 = 2,000,000 − 1,200,000 − 40,000 − 300,000 + 50,000 + 30,000 = 540,000。'
  },
  {
    practice_id: 10234, source_lesson_id: 24,
    type: 'calc', level: 'improve', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '利润总额 400,000 元，所得税税率 25%，净利润为（ ）。',
    options: [
      { text: '300,000', is_correct: true },
      { text: '400,000', is_correct: false },
      { text: '320,000', is_correct: false },
      { text: '350,000', is_correct: false }
    ],
    explain: '所得税费用 = 400,000 × 25% = 100,000；净利润 = 400,000 − 100,000 = 300,000。'
  },
  {
    practice_id: 10235, source_lesson_id: 24,
    type: 'calc', level: 'improve', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '营业收入 1,500,000、营业成本 900,000、税金及附加 30,000、三费 200,000、投资损失 20,000，营业利润为（ ）。',
    options: [
      { text: '350,000', is_correct: true },
      { text: '370,000', is_correct: false },
      { text: '330,000', is_correct: false },
      { text: '380,000', is_correct: false }
    ],
    explain: '营业利润 = 1,500,000 − 900,000 − 30,000 − 200,000 − 20,000 = 350,000（投资损失从营业利润中扣）。'
  },
  {
    practice_id: 10236, source_lesson_id: 24,
    type: 'concept', level: 'improve', hot: ['income-statement'],
    interaction_type: 'multi',
    prompt: '下列各项中，计入「利润总额」但不计入「营业利润」的有（ ）。',
    options: [
      { label: 'A', text: '营业外收入', is_correct: true },
      { label: 'B', text: '营业外支出', is_correct: true },
      { label: 'C', text: '信用减值损失', is_correct: false },
      { label: 'D', text: '公允价值变动收益', is_correct: false },
      { label: 'E', text: '资产处置收益', is_correct: false }
    ],
    explain: '营业外收入/支出在营业利润之后、利润总额之前，只影响利润总额；C/D/E 均参与营业利润计算。'
  },
  {
    practice_id: 10237, source_lesson_id: 24,
    type: 'concept', level: 'improve', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '下列各项中，在利润表中「营业利润」与「利润总额」之间列示的是（ ）。',
    options: [
      { text: '营业外收入和营业外支出', is_correct: true },
      { text: '投资收益', is_correct: false },
      { text: '资产减值损失', is_correct: false },
      { text: '财务费用', is_correct: false }
    ],
    explain: '营业外收入和营业外支出调整营业利润得到利润总额，列在两者之间；其他均参与营业利润计算。'
  },
  {
    practice_id: 10238, source_lesson_id: 24,
    type: 'calc', level: 'exam', hot: ['income-statement'],
    interaction_type: 'single',
    prompt: '【真题级】营业利润 580,000、营业外收入 60,000、营业外支出 20,000、所得税费用 154,000，净利润为（ ）。',
    options: [
      { text: '466,000', is_correct: true },
      { text: '620,000', is_correct: false },
      { text: '426,000', is_correct: false },
      { text: '580,000', is_correct: false }
    ],
    explain: '利润总额 = 580,000 + 60,000 − 20,000 = 620,000；净利润 = 620,000 − 154,000 = 466,000。'
  },
  {
    practice_id: 10239, source_lesson_id: 24,
    type: 'concept', level: 'exam', hot: ['income-statement'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于利润表的说法中，正确的有（ ）。',
    options: [
      { label: 'A', text: '利润表反映一定期间的经营成果', is_correct: true },
      { label: 'B', text: '净利润 = 利润总额 × (1 − 所得税税率)', is_correct: false },
      { label: 'C', text: '营业外收支不影响营业利润', is_correct: true },
      { label: 'D', text: '利润总额 = 营业利润 + 营业外收入 − 营业外支出', is_correct: true }
    ],
    explain: 'B 错误：净利润 = 利润总额 − 所得税费用（非利润总额乘以税率，因为可能有递延税）；A/C/D 均正确。'
  }
,
  {
    practice_id: 10241, source_lesson_id: 25,
    type: 'law', level: 'basic', hot: ['legal-act'],
    interaction_type: 'single',
    prompt: '下列民事法律行为中，属于无效民事法律行为的是（ ）。',
    options: [
      { text: '恶意串通损害第三人利益的合同', is_correct: true },
      { text: '限制行为能力人订立的合同', is_correct: false },
      { text: '受欺诈签订的合同', is_correct: false },
      { text: '无权代理人签订的合同', is_correct: false }
    ],
    explain: '恶意串通损害他人利益——直接无效。限制行为能力人超范围行为——效力待定；受欺诈——可撤销；无权代理——效力待定（追认后有效）。'
  },
  {
    practice_id: 10242, source_lesson_id: 25,
    type: 'law', level: 'basic', hot: ['legal-act'],
    interaction_type: 'single',
    prompt: '下列各项中，属于可撤销民事法律行为的是（ ）。',
    options: [
      { text: '违反法律强制性规定的合同', is_correct: false },
      { text: '因重大误解订立的合同', is_correct: true },
      { text: '无民事行为能力人独立订立的合同', is_correct: false },
      { text: '恶意串通损害国家利益的合同', is_correct: false }
    ],
    explain: '重大误解、欺诈、胁迫（相对人欺诈）、显失公平——可撤销；违法强制性规定、恶意串通——无效；无行为能力人独立订立——无效。'
  },
  {
    practice_id: 10243, source_lesson_id: 25,
    type: 'law', level: 'basic', hot: ['legal-act'],
    interaction_type: 'single',
    prompt: '关于委托代理，下列说法正确的是（ ）。',
    options: [
      { text: '委托代理必须以书面形式', is_correct: false },
      { text: '代理人在授权范围内实施的代理行为，法律后果由被代理人承担', is_correct: true },
      { text: '无权代理一律无效', is_correct: false },
      { text: '转委托须经被代理人同意且不能再次转委托', is_correct: false }
    ],
    explain: '代理人在授权范围内的行为，法律后果归被代理人。口头委托也可成立；无权代理经追认可有效；转委托须经同意，但可再次转委托（法律无禁止）。'
  },
  {
    practice_id: 10244, source_lesson_id: 25,
    type: 'law', level: 'improve', hot: ['legal-act'],
    interaction_type: 'single',
    prompt: '甲（16 岁，有稳定劳动收入）以自己的收入购买手机一部，该行为效力为（ ）。',
    options: [
      { text: '有效', is_correct: true },
      { text: '效力待定', is_correct: false },
      { text: '无效', is_correct: false },
      { text: '可撤销', is_correct: false }
    ],
    explain: '已满 16 周岁，以自己劳动收入为主要生活来源的，视为完全民事行为能力人，其订立的合同有效。'
  },
  {
    practice_id: 10245, source_lesson_id: 25,
    type: 'law', level: 'improve', hot: ['legal-act'],
    interaction_type: 'multi',
    prompt: '下列情形中，导致代理权终止的有（ ）。',
    options: [
      { label: 'A', text: '代理期限届满', is_correct: true },
      { label: 'B', text: '被代理人取消委托', is_correct: true },
      { label: 'C', text: '代理人丧失民事行为能力', is_correct: true },
      { label: 'D', text: '代理人将代理事项转委托给他人', is_correct: false }
    ],
    explain: 'A/B/C 均导致委托代理终止。转委托本身不终止原代理权，只是追加一层代理关系。'
  },
  {
    practice_id: 10246, source_lesson_id: 25,
    type: 'law', level: 'improve', hot: ['legal-act'],
    interaction_type: 'single',
    prompt: '下列关于无权代理的说法中，正确的是（ ）。',
    options: [
      { text: '无权代理一律对被代理人不发生效力', is_correct: false },
      { text: '被代理人追认后，无权代理对被代理人发生效力', is_correct: true },
      { text: '善意第三人可以撤销无权代理行为', is_correct: true },
      { text: '表见代理属于无权代理的一种，但对被代理人有效', is_correct: false }
    ],
    explain: '被代理人追认后有效；善意第三人在追认前也可撤销（给对方选择权）。表见代理实质是有权代理（相对人有理由相信），直接对被代理人有效，不需追认。'
  },
  {
    practice_id: 10247, source_lesson_id: 25,
    type: 'law', level: 'improve', hot: ['legal-act'],
    interaction_type: 'multi',
    prompt: '下列民事法律行为中，属于效力待定的有（ ）。',
    options: [
      { label: 'A', text: '限制民事行为能力人订立的与其年龄不相适应的合同', is_correct: true },
      { label: 'B', text: '无权代理人以被代理人名义订立的合同', is_correct: true },
      { label: 'C', text: '无权处分人处分他人财产的合同', is_correct: true },
      { label: 'D', text: '受欺诈订立的合同', is_correct: false },
      { label: 'E', text: '违反公序良俗的合同', is_correct: false }
    ],
    explain: 'D 受欺诈——可撤销；E 违反公序良俗——无效。A/B/C 均须经法定代理人或权利人追认方能生效，属效力待定。'
  },
  {
    practice_id: 10248, source_lesson_id: 25,
    type: 'law', level: 'exam', hot: ['legal-act'],
    interaction_type: 'single',
    prompt: '【真题级】甲公司业务员王某超越授权，以甲公司名义与乙公司签订合同，乙公司有理由相信王某有代理权。该合同效力为（ ）。',
    options: [
      { text: '无效', is_correct: false },
      { text: '效力待定，须甲公司追认', is_correct: false },
      { text: '有效（表见代理）', is_correct: true },
      { text: '可撤销', is_correct: false }
    ],
    explain: '乙公司有合理理由相信王某有代理权，构成表见代理，合同直接对甲公司有效，无需追认。'
  },
  {
    practice_id: 10249, source_lesson_id: 25,
    type: 'law', level: 'exam', hot: ['legal-act'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于民事法律行为效力的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '无效的民事法律行为自始没有法律约束力', is_correct: true },
      { label: 'B', text: '可撤销的民事法律行为在被撤销前仍有效', is_correct: true },
      { label: 'C', text: '效力待定的民事法律行为经追认后自追认之日起有效', is_correct: false },
      { label: 'D', text: '限制行为能力人纯获利益的行为无需追认即有效', is_correct: true }
    ],
    explain: 'C 错误：效力待定经追认后，效力溯及行为成立时，不是从追认之日起。A/B/D 均正确。'
  },
  {
    practice_id: 10251, source_lesson_id: 26,
    type: 'law', level: 'basic', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '下列关于诉讼时效期间的说法，正确的是（ ）。',
    options: [
      { text: '一般诉讼时效期间为 2 年', is_correct: false },
      { text: '一般诉讼时效期间为 3 年', is_correct: true },
      { text: '最长诉讼时效期间为 15 年', is_correct: false },
      { text: '劳动争议仲裁时效为 2 年', is_correct: false }
    ],
    explain: '2017 年《民法总则》将一般时效改为 3 年；最长时效 20 年；劳动争议仲裁时效 1 年。'
  },
  {
    practice_id: 10252, source_lesson_id: 26,
    type: 'law', level: 'basic', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '下列情形中，导致诉讼时效中断的是（ ）。',
    options: [
      { text: '债权人因不可抗力无法行使请求权', is_correct: false },
      { text: '债务人书面承诺还款', is_correct: true },
      { text: '债权人出行在外无法联系', is_correct: false },
      { text: '双方协商但未达成协议', is_correct: false }
    ],
    explain: '时效中断事由：权利人请求、义务人同意履行（含承诺）、提起诉讼或仲裁。不可抗力是中止事由。'
  },
  {
    practice_id: 10253, source_lesson_id: 26,
    type: 'law', level: 'basic', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '诉讼时效中止与中断的根本区别在于（ ）。',
    options: [
      { text: '中止后时效重新起算，中断后继续计算剩余期间', is_correct: false },
      { text: '中断后时效重新起算，中止后继续计算剩余期间', is_correct: true },
      { text: '两者均导致时效重新起算', is_correct: false },
      { text: '两者均导致时效继续计算', is_correct: false }
    ],
    explain: '中断 = 重新起算；中止 = 暂停，障碍消除后接续已过期间继续计算。'
  },
  {
    practice_id: 10254, source_lesson_id: 26,
    type: 'law', level: 'improve', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '2021-06-01 某债权到期，债务人一直未还，债权人于 2023-05-01 向法院起诉，法院受理。诉讼时效最终届满日为（ ）。',
    options: [
      { text: '2024-06-01', is_correct: false },
      { text: '2024-05-01', is_correct: false },
      { text: '2026-05-01', is_correct: true },
      { text: '2041-06-01', is_correct: false }
    ],
    explain: '起诉导致时效中断，从 2023-05-01 重新起算 3 年 → 2026-05-01。'
  },
  {
    practice_id: 10255, source_lesson_id: 26,
    type: 'law', level: 'improve', hot: ['limitation'],
    interaction_type: 'multi',
    prompt: '下列情形中，属于诉讼时效中止事由的有（ ）。',
    options: [
      { label: 'A', text: '不可抗力', is_correct: true },
      { label: 'B', text: '无民事行为能力人未有法定代理人', is_correct: true },
      { label: 'C', text: '继承开始后未确定继承人', is_correct: true },
      { label: 'D', text: '权利人向义务人提出履行请求', is_correct: false },
      { label: 'E', text: '义务人同意履行债务', is_correct: false }
    ],
    explain: 'D/E 是中断事由；A/B/C 是法定中止事由（《民法典》第 194 条）。'
  },
  {
    practice_id: 10256, source_lesson_id: 26,
    type: 'law', level: 'improve', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '下列关于最长诉讼时效的说法，正确的是（ ）。',
    options: [
      { text: '最长时效为 20 年，自权利人知道损害之日起算', is_correct: false },
      { text: '最长时效为 20 年，自权利被侵害之日起算', is_correct: true },
      { text: '最长时效为 20 年，不适用中止、中断规定', is_correct: true },
      { text: '超过 20 年的，人民法院可根据情况延长', is_correct: true }
    ],
    explain: '最长时效从权利被侵害时起算（客观标准），不适用中止中断，但法院可酌情延长。'
  },
  {
    practice_id: 10257, source_lesson_id: 26,
    type: 'law', level: 'improve', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '甲欠乙货款 50,000 元，2020-03-01 到期。乙于 2022-12-01 向甲发催款函并有签收回执，甲未回应。乙的诉讼时效届满日为（ ）。',
    options: [
      { text: '2023-03-01', is_correct: false },
      { text: '2025-12-01', is_correct: true },
      { text: '2022-12-01', is_correct: false },
      { text: '2040-03-01', is_correct: false }
    ],
    explain: '乙发催款函并有签收——属于权利人请求，时效中断，从 2022-12-01 重新起算 3 年 → 2025-12-01。'
  },
  {
    practice_id: 10258, source_lesson_id: 26,
    type: 'law', level: 'exam', hot: ['limitation'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于诉讼时效的说法，正确的是（ ）。',
    options: [
      { text: '当事人可以约定延长诉讼时效期间', is_correct: false },
      { text: '诉讼时效届满后，义务人仍可自愿履行', is_correct: true },
      { text: '诉讼时效届满后，债权本身消灭', is_correct: false },
      { text: '超过诉讼时效的债权不受任何法律保护', is_correct: false }
    ],
    explain: '时效届满只消灭胜诉权，债权本身仍存在；义务人自愿履行有效，不得以时效为由要求返还。时效属强制性规定，当事人不可约定变更。'
  },
  {
    practice_id: 10259, source_lesson_id: 26,
    type: 'law', level: 'exam', hot: ['limitation'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于诉讼时效的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '诉讼时效届满后义务人取得时效利益，权利人的胜诉权消灭', is_correct: true },
      { label: 'B', text: '义务人在诉讼时效届满后自愿履行的，不得请求返还', is_correct: true },
      { label: 'C', text: '当事人可以协议延长诉讼时效', is_correct: false },
      { label: 'D', text: '不超过 20 年最长时效的，权利人依法享有胜诉权', is_correct: true }
    ],
    explain: 'C 错误：诉讼时效属强制性规定，当事人不能协议变更。A/B/D 均正确。'
  },
  {
    practice_id: 10261, source_lesson_id: 27,
    type: 'law', level: 'basic', hot: ['archive'],
    interaction_type: 'single',
    prompt: '下列会计档案中，保管期限为永久的是（ ）。',
    options: [
      { text: '原始凭证', is_correct: false },
      { text: '年度财务会计报告', is_correct: true },
      { text: '总账', is_correct: false },
      { text: '银行存款余额调节表', is_correct: false }
    ],
    explain: '永久保管：年度财务会计报告、会计档案鉴定销毁意见书、会计档案保管清册。'
  },
  {
    practice_id: 10262, source_lesson_id: 27,
    type: 'law', level: 'basic', hot: ['archive'],
    interaction_type: 'single',
    prompt: '下列会计档案中，保管期限为 10 年的是（ ）。',
    options: [
      { text: '记账凭证', is_correct: false },
      { text: '明细账', is_correct: false },
      { text: '月度财务会计报告', is_correct: true },
      { text: '日记账', is_correct: false }
    ],
    explain: '月度/季度财务会计报告保管 10 年；原始凭证、记账凭证、各类账簿保管 30 年。'
  },
  {
    practice_id: 10263, source_lesson_id: 27,
    type: 'law', level: 'basic', hot: ['archive'],
    interaction_type: 'single',
    prompt: '下列关于会计档案保管的说法，正确的是（ ）。',
    options: [
      { text: '会计档案可以携带出境', is_correct: false },
      { text: '当年形成的会计档案，在会计年度终了后可暂由会计机构保管 1 年', is_correct: true },
      { text: '会计档案保管期满后可直接销毁', is_correct: false },
      { text: '电子会计档案不属于会计档案范围', is_correct: false }
    ],
    explain: '当年档案暂由会计机构保管 1 年后移交档案机构；期满销毁须经鉴定并报批；电子档案同等法律效力。'
  },
  {
    practice_id: 10264, source_lesson_id: 27,
    type: 'law', level: 'improve', hot: ['archive'],
    interaction_type: 'single',
    prompt: '某公司 2010 年的原始凭证，最早可在哪一年销毁（ ）？',
    options: [
      { text: '2040 年', is_correct: false },
      { text: '2041 年', is_correct: true },
      { text: '2039 年', is_correct: false },
      { text: '2020 年', is_correct: false }
    ],
    explain: '原始凭证保管 30 年；2010 年形成的档案，2010+30=2040 年到期，2041 年才可依法销毁。'
  },
  {
    practice_id: 10265, source_lesson_id: 27,
    type: 'law', level: 'improve', hot: ['archive'],
    interaction_type: 'multi',
    prompt: '下列关于会计档案销毁程序的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '必须编制会计档案销毁清册', is_correct: true },
      { label: 'B', text: '单位负责人须在销毁清册上签署意见', is_correct: true },
      { label: 'C', text: '销毁时须有监销人在场并在清册上签名', is_correct: true },
      { label: 'D', text: '保管期满的会计档案可立即销毁，无需审批', is_correct: false }
    ],
    explain: 'D 错误：保管期满后须经鉴定，不具保存价值的才可销毁，且须履行编清册、领导签批、监销等手续。'
  },
  {
    practice_id: 10266, source_lesson_id: 27,
    type: 'law', level: 'improve', hot: ['archive'],
    interaction_type: 'single',
    prompt: '下列关于会计档案的表述，正确的是（ ）。',
    options: [
      { text: '会计档案的保管期限从档案形成的年度第一天起计算', is_correct: false },
      { text: '会计档案的保管期限从档案形成的年度最后一天起计算', is_correct: true },
      { text: '会计档案的保管期限从次年 1 月 1 日起计算', is_correct: false },
      { text: '保管期限以自然年度为单位，从 1 月 1 日起计算', is_correct: false }
    ],
    explain: '保管期限从会计档案形成年度的年末（12 月 31 日）起计算。'
  },
  {
    practice_id: 10267, source_lesson_id: 27,
    type: 'law', level: 'improve', hot: ['archive'],
    interaction_type: 'single',
    prompt: '下列关于电子会计档案的说法，正确的是（ ）。',
    options: [
      { text: '电子会计档案不需要与纸质档案一同归档', is_correct: false },
      { text: '符合条件的电子会计档案可以单独归档，不需要打印纸质档案', is_correct: true },
      { text: '电子会计档案的保管期限比纸质档案短', is_correct: false },
      { text: '电子会计档案不具有法律效力', is_correct: false }
    ],
    explain: '满足真实性、完整性、可用性、安全性条件的电子会计档案，可单独归档，与纸质档案具有同等法律效力，保管期限相同。'
  },
  {
    practice_id: 10268, source_lesson_id: 27,
    type: 'law', level: 'exam', hot: ['archive'],
    interaction_type: 'single',
    prompt: '【真题级】下列会计档案中，保管期限为 30 年的是（ ）。',
    options: [
      { text: '年度财务会计报告', is_correct: false },
      { text: '会计档案保管清册', is_correct: false },
      { text: '记账凭证', is_correct: true },
      { text: '月度财务会计报告', is_correct: false }
    ],
    explain: '年度报告和档案清册永久；月度/季度报告 10 年；原始凭证、记账凭证、各类账簿 30 年。'
  },
  {
    practice_id: 10269, source_lesson_id: 27,
    type: 'law', level: 'exam', hot: ['archive'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于会计档案保管期限的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '原始凭证保管期限为 30 年', is_correct: true },
      { label: 'B', text: '年度财务会计报告保管期限为永久', is_correct: true },
      { label: 'C', text: '银行存款余额调节表保管期限为 10 年', is_correct: true },
      { label: 'D', text: '总账保管期限为 10 年', is_correct: false }
    ],
    explain: 'D 错误：总账（及各类账簿）保管期限为 30 年，不是 10 年。A/B/C 均正确。'
  },
  {
    practice_id: 10271, source_lesson_id: 28,
    type: 'law', level: 'basic', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '担任会计机构负责人（会计主管人员）须具备的条件是（ ）。',
    options: [
      { text: '取得注册会计师资格', is_correct: false },
      { text: '取得会计师以上专业技术资格，或从事会计工作 3 年以上', is_correct: true },
      { text: '取得助理会计师资格', is_correct: false },
      { text: '从事会计工作 1 年以上', is_correct: false }
    ],
    explain: '法定条件：会计师（中级）以上专业技术资格，或从事会计工作 3 年以上。两个条件满足其一即可。'
  },
  {
    practice_id: 10272, source_lesson_id: 28,
    type: 'law', level: 'basic', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '下列各项中，不得担任本单位会计机构负责人的是（ ）。',
    options: [
      { text: '取得中级会计职称的外聘人员', is_correct: false },
      { text: '从事会计工作 4 年的本单位员工', is_correct: false },
      { text: '国有单位负责人的配偶', is_correct: true },
      { text: '与单位无亲属关系的注册会计师', is_correct: false }
    ],
    explain: '直系亲属（配偶、父母、子女、兄弟姐妹）须回避；其余满足条件者均可担任。'
  },
  {
    practice_id: 10273, source_lesson_id: 28,
    type: 'law', level: 'basic', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '下列关于出纳岗位的说法，正确的是（ ）。',
    options: [
      { text: '出纳可以兼任稽核工作', is_correct: false },
      { text: '单位负责人的直系亲属不得担任本单位出纳', is_correct: false },
      { text: '会计机构负责人不得兼任出纳', is_correct: true },
      { text: '出纳可以兼任会计档案保管工作', is_correct: false }
    ],
    explain: '出纳不得兼任稽核、会计档案保管及收入、支出、债权债务账目的登记工作；会计机构负责人不得兼任出纳。'
  },
  {
    practice_id: 10274, source_lesson_id: 28,
    type: 'law', level: 'improve', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '下列人员中，依法不得从事会计工作的是（ ）。',
    options: [
      { text: '曾因交通违章被行政处罚的人员', is_correct: false },
      { text: '因提供虚假财务会计报告被吊销会计从业资格证书不满 5 年的人员', is_correct: true },
      { text: '从未取得会计从业资格证书的大学毕业生', is_correct: false },
      { text: '年满 60 周岁的退休会计人员', is_correct: false }
    ],
    explain: '被吊销会计从业资格证书的人员，5 年内不得再次取得资格，期间不得从事会计工作（《会计法》第 40 条）。'
  },
  {
    practice_id: 10275, source_lesson_id: 28,
    type: 'law', level: 'improve', hot: ['accountant-job'],
    interaction_type: 'multi',
    prompt: '下列人员中，应当回避不得担任本单位会计机构负责人的有（ ）。',
    options: [
      { label: 'A', text: '单位负责人的配偶', is_correct: true },
      { label: 'B', text: '单位负责人的父母', is_correct: true },
      { label: 'C', text: '单位负责人的子女', is_correct: true },
      { label: 'D', text: '单位负责人的同事', is_correct: false },
      { label: 'E', text: '单位负责人的朋友', is_correct: false }
    ],
    explain: '回避范围限于直系亲属：配偶、父母、子女、兄弟姐妹。同事和朋友不在回避范围内。'
  },
  {
    practice_id: 10276, source_lesson_id: 28,
    type: 'law', level: 'improve', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '下列说法中，符合《会计法》对会计工作交接要求的是（ ）。',
    options: [
      { text: '会计人员离职时，可将账簿、凭证等移交给普通员工保管', is_correct: false },
      { text: '移交人须在监交人监督下进行交接，移交清册一式三份', is_correct: true },
      { text: '会计机构负责人移交时，无需监交人', is_correct: false },
      { text: '交接完成后，移交人对移交前的会计资料不再承担责任', is_correct: false }
    ],
    explain: '交接须有监交人（单位负责人或指定人员）在场，编制移交清册一式三份；交接后移交人仍对原工作期间的问题承担责任。'
  },
  {
    practice_id: 10277, source_lesson_id: 28,
    type: 'law', level: 'improve', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '下列关于会计人员继续教育的说法，正确的是（ ）。',
    options: [
      { text: '会计人员只需在取得资格时接受一次培训', is_correct: false },
      { text: '会计人员应当参加继续教育，提高业务素质和会计职业道德水平', is_correct: true },
      { text: '继续教育由会计人员自愿参加', is_correct: false },
      { text: '继续教育学时要求由每位会计人员自行决定', is_correct: false }
    ],
    explain: '会计人员须参加继续教育，这是法定义务，并非自愿，旨在持续提升职业素质和道德水准。'
  },
  {
    practice_id: 10278, source_lesson_id: 28,
    type: 'law', level: 'exam', hot: ['accountant-job'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于会计工作岗位设置的说法，正确的是（ ）。',
    options: [
      { text: '出纳可以兼任会计档案保管工作', is_correct: false },
      { text: '会计机构负责人可以兼任出纳', is_correct: false },
      { text: '小企业可以由一人兼任多个会计岗位，但出纳不得兼任稽核', is_correct: true },
      { text: '会计人员可以兼任与本职无关的其他业务工作', is_correct: false }
    ],
    explain: '规模较小的单位可一人兼多岗，但出纳严禁兼任稽核、登记债权债务账目及档案保管；会计机构负责人不得兼任出纳。'
  },
  {
    practice_id: 10279, source_lesson_id: 28,
    type: 'law', level: 'exam', hot: ['accountant-job'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于会计人员任职资格的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '担任会计机构负责人须取得会计师以上职称或从事会计工作 3 年以上', is_correct: true },
      { label: 'B', text: '被吊销会计从业资格证书的人员，5 年内不得重新取得资格', is_correct: true },
      { label: 'C', text: '单位负责人的直系亲属不得在本单位担任会计机构负责人', is_correct: true },
      { label: 'D', text: '只要取得助理会计师职称，即可担任会计机构负责人', is_correct: false }
    ],
    explain: 'D 错误：助理会计师是初级职称，不满足「会计师（中级）以上」的要求。A/B/C 均正确。'
  }
,
  {
    practice_id: 10281, source_lesson_id: 29,
    type: 'concept', level: 'basic', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '下列票据中，出票人与付款人为同一人的是（ ）。',
    options: [
      { text: '汇票', is_correct: false },
      { text: '本票', is_correct: true },
      { text: '支票', is_correct: false },
      { text: '商业承兑汇票', is_correct: false }
    ],
    explain: '本票由出票人自己承诺付款，出票人即付款人；汇票和支票均委托他人（银行或企业）付款。'
  },
  {
    practice_id: 10282, source_lesson_id: 29,
    type: 'concept', level: 'basic', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '下列关于银行汇票的说法，正确的是（ ）。',
    options: [
      { text: '银行汇票见票即付，无需承兑', is_correct: true },
      { text: '银行汇票只能用于同城结算', is_correct: false },
      { text: '银行汇票由收款人签发', is_correct: false },
      { text: '银行汇票不能背书转让', is_correct: false }
    ],
    explain: '银行汇票由银行签发、见票即付，可用于异地结算，可背书转让。汇票由出票人（此处为银行）签发，非收款人。'
  },
  {
    practice_id: 10283, source_lesson_id: 29,
    type: 'concept', level: 'basic', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '支票的付款期限为（ ）。',
    options: [
      { text: '自出票日起 10 日', is_correct: true },
      { text: '自出票日起 6 个月', is_correct: false },
      { text: '自到期日起 6 个月', is_correct: false },
      { text: '自出票日起 30 日', is_correct: false }
    ],
    explain: '支票付款期限为自出票日起 10 日（同城）。超期支票银行可拒付。'
  },
  {
    practice_id: 10284, source_lesson_id: 29,
    type: 'law', level: 'improve', hot: ['note-type'],
    interaction_type: 'multi',
    prompt: '下列关于票据说法正确的有（ ）。',
    options: [
      { label: 'A', text: '银行本票见票即付，不得退票', is_correct: true },
      { label: 'B', text: '商业承兑汇票由承兑企业承兑，信用风险高于银行承兑汇票', is_correct: true },
      { label: 'C', text: '转账支票可以提取现金', is_correct: false },
      { label: 'D', text: '汇票分为银行汇票和商业汇票', is_correct: true },
      { label: 'E', text: '银行承兑汇票到期银行无条件付款', is_correct: true }
    ],
    explain: 'C 错误：转账支票只能转账，不能提取现金；现金支票才能提现。'
  },
  {
    practice_id: 10285, source_lesson_id: 29,
    type: 'law', level: 'improve', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '下列票据中，属于「见票即付」的有（ ）。',
    options: [
      { text: '银行汇票和银行本票', is_correct: true },
      { text: '商业汇票', is_correct: false },
      { text: '支票', is_correct: false },
      { text: '商业承兑汇票', is_correct: false }
    ],
    explain: '银行汇票和银行本票均见票即付；商业汇票有承兑期，到期付款；支票有 10 日提示付款期。'
  },
  {
    practice_id: 10286, source_lesson_id: 29,
    type: 'law', level: 'improve', hot: ['note-type'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于汇票必要记载事项的有（ ）。',
    options: [
      { label: 'A', text: '表明「汇票」字样', is_correct: true },
      { label: 'B', text: '无条件支付的委托', is_correct: true },
      { label: 'C', text: '确定的金额', is_correct: true },
      { label: 'D', text: '付款人名称', is_correct: true },
      { label: 'E', text: '利率（带息汇票）', is_correct: false }
    ],
    explain: '利率不是必要记载事项，未记载利率的视为不带息。A-D 均为汇票必须记载事项。'
  },
  {
    practice_id: 10287, source_lesson_id: 29,
    type: 'law', level: 'improve', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '甲公司以背书方式将一张银行承兑汇票转让给乙公司，则（ ）。',
    options: [
      { text: '甲公司对乙公司承担票据追索权责任', is_correct: true },
      { text: '甲公司脱离票据关系，不再承担任何责任', is_correct: false },
      { text: '乙公司取得的权利不得超过甲公司', is_correct: false },
      { text: '须经出票银行同意方可背书', is_correct: false }
    ],
    explain: '背书人（甲）对被背书人（乙）及其后手承担担保付款责任；背书不需经银行同意；被背书人取得的权利与背书人相同，不受甲权利的限制。'
  },
  {
    practice_id: 10288, source_lesson_id: 29,
    type: 'law', level: 'exam', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，不属于票据无效情形的是（ ）。',
    options: [
      { text: '欠缺法定必要记载事项', is_correct: false },
      { text: '记载事项与实际情况不符', is_correct: false },
      { text: '背书不连续', is_correct: true },
      { text: '票据金额大写小写不一致', is_correct: false }
    ],
    explain: '背书不连续不导致票据本身无效，但持票人不能依票据法主张权利（须另行证明取得合法性）；其他三项均导致票据无效。'
  },
  {
    practice_id: 10289, source_lesson_id: 29,
    type: 'law', level: 'exam', hot: ['note-type'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于商业汇票的说法，正确的是（ ）。',
    options: [
      { text: '商业汇票的付款期限最长 6 个月', is_correct: true },
      { text: '商业汇票只能背书一次', is_correct: false },
      { text: '银行承兑汇票到期承兑人可以拒绝付款', is_correct: false },
      { text: '商业汇票一律不得贴现', is_correct: false }
    ],
    explain: '商业汇票最长付款期限 6 个月；可多次背书；银行承兑到期无条件付款；银行承兑汇票可向银行贴现。'
  },
  {
    practice_id: 10291, source_lesson_id: 30,
    type: 'law', level: 'basic', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '持票人对汇票承兑人的票据权利时效为（ ）。',
    options: [
      { text: '自出票日起 6 个月', is_correct: false },
      { text: '自到期日起 1 年', is_correct: false },
      { text: '自到期日起 2 年', is_correct: true },
      { text: '自出票日起 2 年', is_correct: false }
    ],
    explain: '汇票/本票持票人对出票人、承兑人的权利：自到期日起 2 年；见票即付者自出票日起 2 年。'
  },
  {
    practice_id: 10292, source_lesson_id: 30,
    type: 'law', level: 'basic', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '支票持票人对出票人的票据权利时效为（ ）。',
    options: [
      { text: '自出票日起 10 日', is_correct: false },
      { text: '自出票日起 6 个月', is_correct: true },
      { text: '自出票日起 2 年', is_correct: false },
      { text: '自出票日起 1 年', is_correct: false }
    ],
    explain: '支票持票人对出票人的权利：自出票日起 6 个月。'
  },
  {
    practice_id: 10293, source_lesson_id: 30,
    type: 'law', level: 'basic', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '持票人因被拒绝付款行使追索权，追索权时效为（ ）。',
    options: [
      { text: '自被拒绝日起 3 个月', is_correct: false },
      { text: '自被拒绝日起 6 个月', is_correct: true },
      { text: '自被拒绝日起 1 年', is_correct: false },
      { text: '自被拒绝日起 2 年', is_correct: false }
    ],
    explain: '追索权：自被拒绝承兑或被拒绝付款日起 6 个月。'
  },
  {
    practice_id: 10294, source_lesson_id: 30,
    type: 'law', level: 'improve', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '甲持有一张 2024-01-01 到期的商业汇票，2024-06-01 被拒绝付款，甲向乙追索，乙于 2025-01-01 清偿后，乙向出票人丙行使再追索权的时效届满日是（ ）。',
    options: [
      { text: '2025-04-01', is_correct: true },
      { text: '2025-07-01', is_correct: false },
      { text: '2026-01-01', is_correct: false },
      { text: '2025-01-01', is_correct: false }
    ],
    explain: '再追索权：自清偿日起 3 个月，即 2025-01-01 起 3 个月 → 2025-04-01 届满。'
  },
  {
    practice_id: 10295, source_lesson_id: 30,
    type: 'law', level: 'improve', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '下列关于票据权利时效中断的说法，正确的是（ ）。',
    options: [
      { text: '票据权利时效适用诉讼时效中断的一般规则', is_correct: false },
      { text: '票据权利时效不因主张权利等行为中断', is_correct: true },
      { text: '票据权利时效中断后重新起算', is_correct: false },
      { text: '票据权利时效可因当事人协议延长', is_correct: false }
    ],
    explain: '票据权利的时效是除斥期间，不适用中断、中止规则，期满权利绝对消灭，不可延长。'
  },
  {
    practice_id: 10296, source_lesson_id: 30,
    type: 'law', level: 'improve', hot: ['note-time'],
    interaction_type: 'multi',
    prompt: '下列关于票据时效说法正确的有（ ）。',
    options: [
      { label: 'A', text: '汇票承兑人权利时效 2 年，自到期日起算', is_correct: true },
      { label: 'B', text: '见票即付本票的持票人权利时效 2 年，自出票日起算', is_correct: true },
      { label: 'C', text: '支票出票人权利时效 6 个月', is_correct: true },
      { label: 'D', text: '追索权时效 6 个月，再追索权时效 3 个月', is_correct: true },
      { label: 'E', text: '票据时效届满后，票据债务人仍须履行付款义务', is_correct: false }
    ],
    explain: 'E 错误：票据时效届满，票据权利消灭，债务人可拒绝付款（但可能还有民法上的不当得利之债）。'
  },
  {
    practice_id: 10297, source_lesson_id: 30,
    type: 'law', level: 'improve', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '2023-03-01 签发、2023-09-01 到期的银行承兑汇票，持票人最迟应在何时向承兑行主张票据权利？',
    options: [
      { text: '2024-03-01', is_correct: false },
      { text: '2024-09-01', is_correct: false },
      { text: '2025-09-01', is_correct: true },
      { text: '2025-03-01', is_correct: false }
    ],
    explain: '持票人对承兑行的权利 2 年，自到期日 2023-09-01 起算，届满日 2025-09-01。'
  },
  {
    practice_id: 10298, source_lesson_id: 30,
    type: 'law', level: 'exam', hot: ['note-time'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于票据时效的说法，正确的是（ ）。',
    options: [
      { text: '票据权利时效届满，持票人丧失实体权利但保留诉讼权利', is_correct: false },
      { text: '票据权利时效届满，票据债务人取得时效抗辩权', is_correct: true },
      { text: '票据时效届满后，持票人可依不当得利向出票人主张', is_correct: true },
      { text: '票据权利时效属于诉讼时效，可以中断', is_correct: false }
    ],
    explain: '票据时效届满后持票人丧失票据权利（实体权利），但仍可依不当得利向相关当事人主张民事权利；票据债务人取得时效抗辩权，可以拒绝付款。'
  },
  {
    practice_id: 10299, source_lesson_id: 30,
    type: 'law', level: 'exam', hot: ['note-time'],
    interaction_type: 'multi',
    prompt: '【真题级】下列各项中，属于票据权利消灭原因的有（ ）。',
    options: [
      { label: 'A', text: '超过票据权利时效', is_correct: true },
      { label: 'B', text: '票据记载事项欠缺', is_correct: true },
      { label: 'C', text: '持票人放弃票据权利', is_correct: true },
      { label: 'D', text: '票据被盗但已挂失止付', is_correct: false }
    ],
    explain: '挂失止付只是临时措施，权利并未消灭（须申请公示催告）；A/B/C 均可导致票据权利消灭。'
  },
  {
    practice_id: 10301, source_lesson_id: 31,
    type: 'law', level: 'basic', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '下列业务中，适用 13% 增值税税率的是（ ）。',
    options: [
      { text: '提供运输服务', is_correct: false },
      { text: '销售机器设备', is_correct: true },
      { text: '提供咨询服务', is_correct: false },
      { text: '销售不动产', is_correct: false }
    ],
    explain: '机器设备属于一般货物，适用 13%；运输 9%；咨询等现代服务 6%；不动产 9%。'
  },
  {
    practice_id: 10302, source_lesson_id: 31,
    type: 'law', level: 'basic', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '下列业务中，适用 6% 增值税税率的是（ ）。',
    options: [
      { text: '销售粮食', is_correct: false },
      { text: '提供建筑服务', is_correct: false },
      { text: '提供金融服务', is_correct: true },
      { text: '销售农产品', is_correct: false }
    ],
    explain: '金融服务属于现代服务，适用 6%；粮食/农产品 9%；建筑服务 9%。'
  },
  {
    practice_id: 10303, source_lesson_id: 31,
    type: 'law', level: 'basic', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '小规模纳税人适用的增值税征收率为（ ）。',
    options: [
      { text: '1%', is_correct: false },
      { text: '3%', is_correct: true },
      { text: '6%', is_correct: false },
      { text: '13%', is_correct: false }
    ],
    explain: '小规模纳税人适用 3% 征收率（阶段性优惠减按 1%）。注意题目若考阶段性优惠会明确说明。'
  },
  {
    practice_id: 10304, source_lesson_id: 31,
    type: 'law', level: 'improve', hot: ['vat-rate'],
    interaction_type: 'multi',
    prompt: '下列业务中，适用 9% 增值税税率的有（ ）。',
    options: [
      { label: 'A', text: '提供道路运输服务', is_correct: true },
      { label: 'B', text: '销售住宅不动产', is_correct: true },
      { label: 'C', text: '提供邮政服务', is_correct: true },
      { label: 'D', text: '提供广告设计服务', is_correct: false },
      { label: 'E', text: '提供基础电信服务', is_correct: true }
    ],
    explain: '广告设计属于现代服务，税率 6%；其余运输/不动产/邮政/基础电信均适用 9%。'
  },
  {
    practice_id: 10305, source_lesson_id: 31,
    type: 'calc', level: 'improve', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '一般纳税人含税销售额 113 万元（税率 13%），其不含税销售额和增值税销项税额分别为（ ）。',
    options: [
      { text: '100 万元、13 万元', is_correct: true },
      { text: '113 万元、14.69 万元', is_correct: false },
      { text: '100 万元、14.69 万元', is_correct: false },
      { text: '87 万元、13 万元', is_correct: false }
    ],
    explain: '不含税 = 113 ÷ 1.13 = 100 万；销项 = 100 × 13% = 13 万。注意含税价还原须除以（1+税率）。'
  },
  {
    practice_id: 10306, source_lesson_id: 31,
    type: 'calc', level: 'improve', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '小规模纳税人含税销售额 10.3 万元，征收率 3%，应纳增值税为（ ）。',
    options: [
      { text: '3,000 元', is_correct: true },
      { text: '3,090 元', is_correct: false },
      { text: '1,000 元', is_correct: false },
      { text: '4,000 元', is_correct: false }
    ],
    explain: '不含税 = 103,000 ÷ 1.03 = 100,000；应纳税 = 100,000 × 3% = 3,000 元。'
  },
  {
    practice_id: 10307, source_lesson_id: 31,
    type: 'law', level: 'improve', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '下列关于增值税进项税额抵扣的说法，正确的是（ ）。',
    options: [
      { text: '一般纳税人购进农产品，可按 9% 扣除率计算进项税额', is_correct: true },
      { text: '小规模纳税人可以抵扣进项税额', is_correct: false },
      { text: '用于免税项目的进项税额可以抵扣', is_correct: false },
      { text: '非正常损失的货物进项税额可以抵扣', is_correct: false }
    ],
    explain: '小规模纳税人不得抵扣进项；免税项目和非正常损失进项不得抵扣；购进农产品可按 9% 扣除率（或适用 10% 的情形）抵扣。'
  },
  {
    practice_id: 10308, source_lesson_id: 31,
    type: 'law', level: 'exam', hot: ['vat-rate'],
    interaction_type: 'single',
    prompt: '【真题级】下列项目中，免征增值税的是（ ）。',
    options: [
      { text: '销售农业机械', is_correct: false },
      { text: '提供技术转让服务并开专票', is_correct: false },
      { text: '农业生产者销售自产农产品', is_correct: true },
      { text: '销售二手汽车', is_correct: false }
    ],
    explain: '农业生产者销售自产农产品免征增值税；技术转让可申请免税但须审批；销售农机和二手汽车适用简易征收，不属于免税。'
  },
  {
    practice_id: 10309, source_lesson_id: 31,
    type: 'law', level: 'exam', hot: ['vat-rate'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于增值税税率的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '出口货物适用 0 税率', is_correct: true },
      { label: 'B', text: '提供国际旅客运输服务适用 0 税率', is_correct: true },
      { label: 'C', text: '销售不动产适用 9% 税率', is_correct: true },
      { label: 'D', text: '一般纳税人提供餐饮服务适用 13% 税率', is_correct: false },
      { label: 'E', text: '提供现代服务业适用 6% 税率', is_correct: true }
    ],
    explain: 'D 错误：餐饮服务属于生活服务，税率 6%，不是 13%。'
  },
  {
    practice_id: 10311, source_lesson_id: 32,
    type: 'law', level: 'basic', hot: ['excise'],
    interaction_type: 'single',
    prompt: '下列商品中，不属于消费税征收范围的是（ ）。',
    options: [
      { text: '高档化妆品', is_correct: false },
      { text: '鞭炮', is_correct: false },
      { text: '普通化妆品', is_correct: true },
      { text: '游艇', is_correct: false }
    ],
    explain: '消费税仅对高档化妆品征税，普通化妆品已从征税范围中删除。'
  },
  {
    practice_id: 10312, source_lesson_id: 32,
    type: 'law', level: 'basic', hot: ['excise'],
    interaction_type: 'single',
    prompt: '下列商品中，属于消费税征收范围的是（ ）。',
    options: [
      { text: '高档手表', is_correct: true },
      { text: '普通手表', is_correct: false },
      { text: '自行车', is_correct: false },
      { text: '普通家具', is_correct: false }
    ],
    explain: '消费税税目中有「高档手表」，普通手表不在其中；自行车和普通家具均不征消费税。'
  },
  {
    practice_id: 10313, source_lesson_id: 32,
    type: 'law', level: 'basic', hot: ['excise'],
    interaction_type: 'single',
    prompt: '消费税的纳税环节，一般是在（ ）。',
    options: [
      { text: '生产销售环节一次性缴纳', is_correct: true },
      { text: '零售环节缴纳', is_correct: false },
      { text: '进口环节不征', is_correct: false },
      { text: '每个流通环节均征', is_correct: false }
    ],
    explain: '消费税在生产、委托加工或进口环节征收，实行一次性课税；金银首饰、高档手表在零售环节征收是特例。'
  },
  {
    practice_id: 10314, source_lesson_id: 32,
    type: 'law', level: 'improve', hot: ['excise'],
    interaction_type: 'multi',
    prompt: '下列商品中，属于消费税征税范围的有（ ）。',
    options: [
      { label: 'A', text: '成品油', is_correct: true },
      { label: 'B', text: '摩托车', is_correct: true },
      { label: 'C', text: '电动自行车', is_correct: false },
      { label: 'D', text: '实木地板', is_correct: true },
      { label: 'E', text: '木制一次性筷子', is_correct: true }
    ],
    explain: '电动自行车不在 15 个消费税税目内；其他均属消费税应税消费品。'
  },
  {
    practice_id: 10315, source_lesson_id: 32,
    type: 'law', level: 'improve', hot: ['excise'],
    interaction_type: 'single',
    prompt: '下列关于消费税计税方式的说法，正确的是（ ）。',
    options: [
      { text: '消费税只能从价定率征收', is_correct: false },
      { text: '白酒同时适用从价定率和从量定额复合计征', is_correct: true },
      { text: '成品油只从量定额征收', is_correct: false },
      { text: '高档手表从量定额征收', is_correct: false }
    ],
    explain: '白酒采用复合计征（从价 20% + 从量 0.5 元/500 克）；成品油从量定额；高档手表从价定率。'
  },
  {
    practice_id: 10316, source_lesson_id: 32,
    type: 'calc', level: 'improve', hot: ['excise'],
    interaction_type: 'single',
    prompt: '某企业生产白酒，当月销售 2,000 斤，不含税售价 80 元/斤。白酒消费税：从价税率 20%，从量 0.5 元/斤。应纳消费税为（ ）。',
    options: [
      { text: '33,000 元', is_correct: true },
      { text: '32,000 元', is_correct: false },
      { text: '1,000 元', is_correct: false },
      { text: '34,000 元', is_correct: false }
    ],
    explain: '从价 = 2000 × 80 × 20% = 32,000；从量 = 2000 × 0.5 = 1,000；合计 = 33,000 元。'
  },
  {
    practice_id: 10317, source_lesson_id: 32,
    type: 'law', level: 'improve', hot: ['excise'],
    interaction_type: 'single',
    prompt: '委托加工应税消费品，消费税由（ ）代收代缴。',
    options: [
      { text: '委托方', is_correct: false },
      { text: '受托方', is_correct: true },
      { text: '税务机关', is_correct: false },
      { text: '委托方和受托方共同缴纳', is_correct: false }
    ],
    explain: '委托加工应税消费品，由受托方（加工方）在交货时代收代缴消费税；受托方为个人的，由委托方缴纳。'
  },
  {
    practice_id: 10318, source_lesson_id: 32,
    type: 'law', level: 'exam', hot: ['excise'],
    interaction_type: 'single',
    prompt: '【真题级】下列各项中，需要缴纳消费税的是（ ）。',
    options: [
      { text: '生产企业将自产普通化妆品对外销售', is_correct: false },
      { text: '生产企业将自产高档手表作为福利发放给员工', is_correct: true },
      { text: '商业企业销售外购的白酒', is_correct: false },
      { text: '进口普通服装', is_correct: false }
    ],
    explain: '高档手表属于消费税应税消费品，视同销售需缴消费税；白酒在生产环节已征，商业销售不再征；普通服装和普通化妆品不在征税范围。'
  },
  {
    practice_id: 10319, source_lesson_id: 32,
    type: 'law', level: 'exam', hot: ['excise'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于消费税的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '消费税属于价内税，含在货物销售价格之中', is_correct: true },
      { label: 'B', text: '增值税属于价外税，消费税属于价内税', is_correct: true },
      { label: 'C', text: '金银首饰消费税在零售环节缴纳', is_correct: true },
      { label: 'D', text: '进口应税消费品免征消费税', is_correct: false },
      { label: 'E', text: '消费税和增值税都在生产环节征收', is_correct: false }
    ],
    explain: 'D 错误：进口应税消费品照征消费税；E 错误：增值税在各流通环节征收，消费税一般在生产/进口环节，部分在零售环节。'
  }
,
  {
    practice_id: 10321, source_lesson_id: 33,
    type: 'calc', level: 'basic', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '某企业 2024 年利润总额 70 万元，无纳税调整事项，适用税率 25%。应纳企业所得税为（ ）。',
    options: [
      { text: '17.5 万元', is_correct: true },
      { text: '21 万元', is_correct: false },
      { text: '14 万元', is_correct: false },
      { text: '25 万元', is_correct: false }
    ],
    explain: '应纳税所得额 = 利润总额（无调整）= 70 万；应纳税 = 70 × 25% = 17.5 万。'
  },
  {
    practice_id: 10322, source_lesson_id: 33,
    type: 'calc', level: 'basic', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '高新技术企业认定后，其企业所得税税率为（ ）。',
    options: [
      { text: '25%', is_correct: false },
      { text: '20%', is_correct: false },
      { text: '15%', is_correct: true },
      { text: '10%', is_correct: false }
    ],
    explain: '高新技术企业适用 15% 优惠税率；普通企业 25%；小微企业有更低档次优惠。'
  },
  {
    practice_id: 10323, source_lesson_id: 33,
    type: 'calc', level: 'basic', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '某企业 2023 年亏损 80 万，2024 年利润总额 200 万（无其他调整）。2024 年应纳税所得额为（ ）万元。',
    options: [
      { text: '200', is_correct: false },
      { text: '120', is_correct: true },
      { text: '80', is_correct: false },
      { text: '160', is_correct: false }
    ],
    explain: '以前年度亏损允许在税前弥补，期限最长 5 年。应纳税所得额 = 200 − 80 = 120 万。'
  },
  {
    practice_id: 10324, source_lesson_id: 33,
    type: 'calc', level: 'improve', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '某企业 2024 年利润总额 170 万，通过公益性社会组织向灾区捐款 25 万。公益性捐赠税前扣除限额为（ ）万元。',
    options: [
      { text: '20.4', is_correct: true },
      { text: '17', is_correct: false },
      { text: '25', is_correct: false },
      { text: '12', is_correct: false }
    ],
    explain: '扣除限额 = 年度利润总额 × 12% = 170 × 12% = 20.4 万。实际捐赠 25 万超限，超出 4.6 万需调增应纳税所得额。'
  },
  {
    practice_id: 10325, source_lesson_id: 33,
    type: 'calc', level: 'improve', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '接上题，该企业 2024 年应纳税所得额为（ ）万元。',
    options: [
      { text: '174.6', is_correct: true },
      { text: '170', is_correct: false },
      { text: '145', is_correct: false },
      { text: '165.4', is_correct: false }
    ],
    explain: '捐赠超出限额 4.6 万不得扣除，调增：170 + 4.6 = 174.6 万。'
  },
  {
    practice_id: 10326, source_lesson_id: 33,
    type: 'calc', level: 'improve', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '某高新技术企业应纳税所得额 400 万元，若适用 15% 优惠税率，比普通企业（25%）节税（ ）万元。',
    options: [
      { text: '40', is_correct: true },
      { text: '60', is_correct: false },
      { text: '20', is_correct: false },
      { text: '100', is_correct: false }
    ],
    explain: '普通税 = 400 × 25% = 100 万；优惠税 = 400 × 15% = 60 万；节税 = 40 万。'
  },
  {
    practice_id: 10327, source_lesson_id: 33,
    type: 'concept', level: 'improve', hot: ['cit-taxable'],
    interaction_type: 'multi',
    prompt: '下列各项中，计算企业所得税应纳税所得额时不得扣除的有（ ）。',
    options: [
      { label: 'A', text: '向投资者支付的股息', is_correct: true },
      { label: 'B', text: '税收滞纳金', is_correct: true },
      { label: 'C', text: '超过限额的公益性捐赠', is_correct: true },
      { label: 'D', text: '合理的职工福利费', is_correct: false }
    ],
    explain: 'A 股息属利润分配，不得扣除；B 税收滞纳金不得扣除；C 超限捐赠不得扣除；D 职工福利费在工资总额 14% 以内可扣除。'
  },
  {
    practice_id: 10328, source_lesson_id: 33,
    type: 'concept', level: 'exam', hot: ['cit-taxable'],
    interaction_type: 'single',
    prompt: '【真题级】企业所得税中，关于亏损弥补的说法正确的是（ ）。',
    options: [
      { text: '亏损可无限期向后结转弥补', is_correct: false },
      { text: '亏损可向前结转退税', is_correct: false },
      { text: '一般企业亏损向后结转最长 5 年', is_correct: true },
      { text: '高新技术企业亏损向后结转最长 5 年', is_correct: false }
    ],
    explain: '一般企业 5 年；高新技术企业和科技型中小企业自 2018 年起可延长至 10 年。'
  },
  {
    practice_id: 10329, source_lesson_id: 33,
    type: 'concept', level: 'exam', hot: ['cit-taxable'],
    interaction_type: 'multi',
    prompt: '【真题级】下列收入中，属于企业所得税免税收入的有（ ）。',
    options: [
      { label: 'A', text: '国债利息收入', is_correct: true },
      { label: 'B', text: '符合条件的居民企业间股息红利', is_correct: true },
      { label: 'C', text: '财政拨款', is_correct: false },
      { label: 'D', text: '接受捐赠收入', is_correct: false }
    ],
    explain: 'A/B 是免税收入；C 财政拨款属不征税收入（非免税）；D 接受捐赠资产计入应税收入。免税 vs 不征税是高频考点。'
  },
  {
    practice_id: 10331, source_lesson_id: 34,
    type: 'calc', level: 'basic', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '居民个人综合所得应纳税所得额 36,000 元，适用税率 3%，速算扣除数 0。应纳个人所得税为（ ）元。',
    options: [
      { text: '1,080', is_correct: true },
      { text: '720', is_correct: false },
      { text: '1,800', is_correct: false },
      { text: '2,160', is_correct: false }
    ],
    explain: '应纳税 = 36,000 × 3% − 0 = 1,080 元。'
  },
  {
    practice_id: 10332, source_lesson_id: 34,
    type: 'calc', level: 'basic', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '居民个人综合所得应纳税所得额 144,000 元，适用税率 10%，速算扣除数 2,520 元。应纳税为（ ）元。',
    options: [
      { text: '14,400', is_correct: false },
      { text: '11,880', is_correct: true },
      { text: '12,000', is_correct: false },
      { text: '9,600', is_correct: false }
    ],
    explain: '应纳税 = 144,000 × 10% − 2,520 = 11,880 元。'
  },
  {
    practice_id: 10333, source_lesson_id: 34,
    type: 'calc', level: 'improve', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '张女士 2024 年工资薪金 360,000 元，专项扣除 12,000 元，专项附加扣除 24,000 元，基本减除费用 60,000 元。应纳税所得额为（ ）元。',
    options: [
      { text: '264,000', is_correct: true },
      { text: '288,000', is_correct: false },
      { text: '300,000', is_correct: false },
      { text: '276,000', is_correct: false }
    ],
    explain: '360,000 − 60,000 − 12,000 − 24,000 = 264,000 元。'
  },
  {
    practice_id: 10334, source_lesson_id: 34,
    type: 'calc', level: 'improve', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '接上题，264,000 元适用税率 20%，速算扣除数 16,920 元。张女士应纳个人所得税为（ ）元。',
    options: [
      { text: '35,880', is_correct: true },
      { text: '52,800', is_correct: false },
      { text: '42,120', is_correct: false },
      { text: '26,400', is_correct: false }
    ],
    explain: '264,000 × 20% − 16,920 = 52,800 − 16,920 = 35,880 元。'
  },
  {
    practice_id: 10335, source_lesson_id: 34,
    type: 'calc', level: 'improve', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '李先生取得一次性劳务报酬 50,000 元，预扣预缴时应纳税所得额为（ ）元。',
    options: [
      { text: '50,000', is_correct: false },
      { text: '40,000', is_correct: true },
      { text: '45,000', is_correct: false },
      { text: '35,000', is_correct: false }
    ],
    explain: '劳务报酬预扣预缴：应纳税所得额 = 50,000 × (1 − 20%) = 40,000 元。'
  },
  {
    practice_id: 10336, source_lesson_id: 34,
    type: 'calc', level: 'improve', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '接上题，40,000 元适用预扣率 30%，速算扣除数 2,000 元。预扣预缴税额为（ ）元。',
    options: [
      { text: '10,000', is_correct: true },
      { text: '12,000', is_correct: false },
      { text: '8,000', is_correct: false },
      { text: '14,000', is_correct: false }
    ],
    explain: '预扣税 = 40,000 × 30% − 2,000 = 10,000 元。'
  },
  {
    practice_id: 10337, source_lesson_id: 34,
    type: 'concept', level: 'improve', hot: ['iit-comprehensive'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于居民个人综合所得的有（ ）。',
    options: [
      { label: 'A', text: '工资薪金所得', is_correct: true },
      { label: 'B', text: '劳务报酬所得', is_correct: true },
      { label: 'C', text: '稿酬所得', is_correct: true },
      { label: 'D', text: '特许权使用费所得', is_correct: true },
      { label: 'E', text: '经营所得', is_correct: false }
    ],
    explain: '综合所得四项：工资薪金 + 劳务报酬 + 稿酬 + 特许权使用费。经营所得单独计税，不并入综合所得。'
  },
  {
    practice_id: 10338, source_lesson_id: 34,
    type: 'concept', level: 'exam', hot: ['iit-comprehensive'],
    interaction_type: 'single',
    prompt: '【真题级】居民个人与非居民个人的区分标准是（ ）。',
    options: [
      { text: '是否具有中国国籍', is_correct: false },
      { text: '在中国境内有无住所，或无住所但居住满 183 天', is_correct: true },
      { text: '是否在中国境内工作', is_correct: false },
      { text: '是否取得中国收入', is_correct: false }
    ],
    explain: '居民个人：在中国境内有住所，或无住所但一个纳税年度内在境内居住满 183 天。与国籍无关。'
  },
  {
    practice_id: 10339, source_lesson_id: 34,
    type: 'concept', level: 'exam', hot: ['iit-comprehensive'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于专项附加扣除的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '子女教育每月可扣除 2,000 元（每个子女）', is_correct: true },
      { label: 'B', text: '继续教育学历阶段每月扣 400 元', is_correct: true },
      { label: 'C', text: '首套住房贷款利息每月扣 1,000 元', is_correct: true },
      { label: 'D', text: '独生子女赡养老人每月扣 3,000 元', is_correct: true },
      { label: 'E', text: '专项附加扣除由用人单位强制扣除', is_correct: false }
    ],
    explain: 'E 错误：专项附加扣除由纳税人自主申报，可通过扣缴义务人预扣或年度汇算自行申报，非强制。A/B/C/D 均为现行标准。'
  },
  {
    practice_id: 10341, source_lesson_id: 35,
    type: 'calc', level: 'basic', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '某企业自用办公楼原值 500 万元，当地规定扣除比例 20%。当年应纳房产税（从价计征）为（ ）万元。',
    options: [
      { text: '4.8', is_correct: true },
      { text: '6.0', is_correct: false },
      { text: '5.0', is_correct: false },
      { text: '3.6', is_correct: false }
    ],
    explain: '从价：500 × (1 − 20%) × 1.2% = 4.8 万元。'
  },
  {
    practice_id: 10342, source_lesson_id: 35,
    type: 'calc', level: 'basic', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '某企业将厂房出租，年租金收入 80 万元。当年应纳房产税（从租计征）为（ ）万元。',
    options: [
      { text: '9.6', is_correct: true },
      { text: '8.0', is_correct: false },
      { text: '4.8', is_correct: false },
      { text: '6.4', is_correct: false }
    ],
    explain: '从租：80 × 12% = 9.6 万元。'
  },
  {
    practice_id: 10343, source_lesson_id: 35,
    type: 'calc', level: 'basic', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '个人出租住房，年租金收入 36,000 元。应纳房产税为（ ）元。',
    options: [
      { text: '1,440', is_correct: true },
      { text: '4,320', is_correct: false },
      { text: '2,160', is_correct: false },
      { text: '720', is_correct: false }
    ],
    explain: '个人出租住房适用优惠税率 4%：36,000 × 4% = 1,440 元（非 12%）。'
  },
  {
    practice_id: 10344, source_lesson_id: 35,
    type: 'calc', level: 'improve', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '某企业自有房产原值 2,000 万，当地扣除比例 30%，全年自用。应纳房产税为（ ）万元。',
    options: [
      { text: '16.8', is_correct: true },
      { text: '24.0', is_correct: false },
      { text: '14.0', is_correct: false },
      { text: '19.2', is_correct: false }
    ],
    explain: '从价：2,000 × (1 − 30%) × 1.2% = 16.8 万元。'
  },
  {
    practice_id: 10345, source_lesson_id: 35,
    type: 'calc', level: 'improve', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '某企业房产原值 1,000 万，扣除比例 30%，1-3 月自用，4-12 月（9 个月）对外出租，年租金 60 万元。全年应纳房产税合计（ ）万元。',
    options: [
      { text: '7.5', is_correct: true },
      { text: '8.4', is_correct: false },
      { text: '5.25', is_correct: false },
      { text: '9.6', is_correct: false }
    ],
    explain: '1-3 月从价（3/12）：1,000 × 70% × 1.2% × 3/12 = 2.1 万；4-12 月从租（租金 45 万）：45 × 12% = 5.4 万；合计 = 7.5 万。'
  },
  {
    practice_id: 10346, source_lesson_id: 35,
    type: 'concept', level: 'improve', hot: ['property-tax'],
    interaction_type: 'multi',
    prompt: '下列各项中，免征房产税的有（ ）。',
    options: [
      { label: 'A', text: '个人所有的非营业用房产', is_correct: true },
      { label: 'B', text: '国家机关自用房产', is_correct: true },
      { label: 'C', text: '宗教寺庙自用房产', is_correct: true },
      { label: 'D', text: '企业出租给员工的宿舍', is_correct: false }
    ],
    explain: 'A/B/C 均享有免税优惠；D 企业出租宿舍属从租计征范围，应征房产税。'
  },
  {
    practice_id: 10347, source_lesson_id: 35,
    type: 'concept', level: 'improve', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '下列关于房产税计税依据的说法，正确的是（ ）。',
    options: [
      { text: '融资租入的房产，由承租方按原值缴纳房产税', is_correct: true },
      { text: '出租房产仍按原值从价计征', is_correct: false },
      { text: '地价不计入房产原值', is_correct: false },
      { text: '房产税按月征收', is_correct: false }
    ],
    explain: '融资租入视为承租方自用，承租方按原值缴纳；出租房产改从租计征；2009 年起地价计入房产原值；房产税按年征收、分次缴纳。'
  },
  {
    practice_id: 10348, source_lesson_id: 35,
    type: 'calc', level: 'exam', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '【真题级】某企业自用房产原值 3,000 万，扣除比例 30%；出租房产年租金 120 万。全年房产税合计（ ）万元。',
    options: [
      { text: '39.6', is_correct: true },
      { text: '36.0', is_correct: false },
      { text: '25.2', is_correct: false },
      { text: '43.2', is_correct: false }
    ],
    explain: '从价：3,000 × 70% × 1.2% = 25.2 万；从租：120 × 12% = 14.4 万；合计 = 39.6 万。'
  },
  {
    practice_id: 10349, source_lesson_id: 35,
    type: 'concept', level: 'exam', hot: ['property-tax'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于房产税征税范围的说法，正确的是（ ）。',
    options: [
      { text: '在城市、县城、建制镇和工矿区征收', is_correct: true },
      { text: '农村自用房屋也需缴纳房产税', is_correct: false },
      { text: '全国所有地区统一征收', is_correct: false },
      { text: '只在省会城市征收', is_correct: false }
    ],
    explain: '房产税只在城市、县城、建制镇、工矿区征收，不包括农村地区。'
  },
  {
    practice_id: 10351, source_lesson_id: 36,
    type: 'calc', level: 'basic', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '某企业签订购销合同，金额 2,000,000 元，适用税率 0.3‰。应缴印花税为（ ）元。',
    options: [
      { text: '600', is_correct: true },
      { text: '2,000', is_correct: false },
      { text: '300', is_correct: false },
      { text: '6,000', is_correct: false }
    ],
    explain: '购销合同印花税 = 2,000,000 × 0.3‰ = 600 元。'
  },
  {
    practice_id: 10352, source_lesson_id: 36,
    type: 'calc', level: 'basic', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '某企业向银行借款 5,000,000 元签订借款合同，税率 0.05‰。应缴印花税为（ ）元。',
    options: [
      { text: '250', is_correct: true },
      { text: '500', is_correct: false },
      { text: '2,500', is_correct: false },
      { text: '50', is_correct: false }
    ],
    explain: '借款合同印花税 = 5,000,000 × 0.05‰ = 250 元。'
  },
  {
    practice_id: 10353, source_lesson_id: 36,
    type: 'calc', level: 'basic', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '某公司实收资本与资本公积合计 10,000,000 元，营业账簿印花税税率 0.25‰。应纳印花税为（ ）元。',
    options: [
      { text: '2,500', is_correct: true },
      { text: '10,000', is_correct: false },
      { text: '1,000', is_correct: false },
      { text: '5,000', is_correct: false }
    ],
    explain: '记载资金的营业账簿 = 10,000,000 × 0.25‰ = 2,500 元。'
  },
  {
    practice_id: 10354, source_lesson_id: 36,
    type: 'calc', level: 'improve', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '某企业签订厂房产权转移书据，成交金额 3,000,000 元，税率 0.5‰。应纳印花税为（ ）元。',
    options: [
      { text: '1,500', is_correct: true },
      { text: '3,000', is_correct: false },
      { text: '900', is_correct: false },
      { text: '600', is_correct: false }
    ],
    explain: '产权转移书据印花税 = 3,000,000 × 0.5‰ = 1,500 元。'
  },
  {
    practice_id: 10355, source_lesson_id: 36,
    type: 'concept', level: 'improve', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '下列凭证中，不属于印花税征税范围的是（ ）。',
    options: [
      { text: '人身保险合同', is_correct: true },
      { text: '购销合同', is_correct: false },
      { text: '产权转移书据', is_correct: false },
      { text: '借款合同', is_correct: false }
    ],
    explain: '印花税采用「正列举」原则，人身保险合同未列入征税范围，不征印花税。'
  },
  {
    practice_id: 10356, source_lesson_id: 36,
    type: 'concept', level: 'improve', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '下列合同中，需要缴纳印花税的是（ ）。',
    options: [
      { text: '加工承揽合同', is_correct: true },
      { text: '委托代理合同', is_correct: false },
      { text: '个人租赁住房合同', is_correct: false },
      { text: '企业内部承包经营合同', is_correct: false }
    ],
    explain: '加工承揽合同属于印花税应税合同；委托代理合同、个人租赁住房合同、企业内部承包经营合同均不在征税范围。'
  },
  {
    practice_id: 10357, source_lesson_id: 36,
    type: 'concept', level: 'improve', hot: ['stamp-tax'],
    interaction_type: 'multi',
    prompt: '下列各项中，属于印花税应税凭证的有（ ）。',
    options: [
      { label: 'A', text: '购销合同', is_correct: true },
      { label: 'B', text: '借款合同', is_correct: true },
      { label: 'C', text: '产权转移书据', is_correct: true },
      { label: 'D', text: '营业账簿', is_correct: true },
      { label: 'E', text: '人身保险合同', is_correct: false }
    ],
    explain: 'A/B/C/D 均为印花税应税凭证；E 人身保险合同未列入征税范围，不征印花税。'
  },
  {
    practice_id: 10358, source_lesson_id: 36,
    type: 'concept', level: 'exam', hot: ['stamp-tax'],
    interaction_type: 'single',
    prompt: '【真题级】关于印花税的说法，正确的是（ ）。',
    options: [
      { text: '印花税对所有经济合同均征收', is_correct: false },
      { text: '同一凭证载有两个以上应税项目，按税率较高者全额计税', is_correct: false },
      { text: '书立应税凭证的各方都是纳税义务人', is_correct: true },
      { text: '应税凭证应在签订时贴花，不得事后补贴', is_correct: false }
    ],
    explain: '印花税各方当事人均为纳税义务人，均须贴花；只对税法列举的凭证征收；同一凭证多个应税项目分别计算；遗漏可以补贴并缴纳罚款。'
  },
  {
    practice_id: 10359, source_lesson_id: 36,
    type: 'concept', level: 'exam', hot: ['stamp-tax'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于印花税计税依据的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '购销合同按购销金额计税', is_correct: true },
      { label: 'B', text: '借款合同按借款金额计税', is_correct: true },
      { label: 'C', text: '记载资金的营业账簿按实收资本与资本公积合计计税', is_correct: true },
      { label: 'D', text: '产权转移书据按所载金额计税', is_correct: true },
      { label: 'E', text: '无金额合同免税', is_correct: false }
    ],
    explain: 'E 错误：凭证未标明金额的，应按签订时的市场价格或核定价格计税，不能免税。A/B/C/D 均为正确的计税依据规则。'
  }
,
  {
    practice_id: 10361, source_lesson_id: 37,
    type: 'law', level: 'basic', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '纳税人自领取营业执照之日起，办理税务登记的法定期限为（ ）。',
    options: [
      { text: '15 日内', is_correct: false },
      { text: '30 日内', is_correct: true },
      { text: '60 日内', is_correct: false },
      { text: '90 日内', is_correct: false }
    ],
    explain: '领取营业执照之日起 30 日内申报办理税务登记，逾期按规定处罚。'
  },
  {
    practice_id: 10362, source_lesson_id: 37,
    type: 'law', level: 'basic', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '某公司 2024-05-20 领取营业执照，办理税务登记的最晚日期是（ ）。',
    options: [
      { text: '2024-05-30', is_correct: false },
      { text: '2024-06-09', is_correct: false },
      { text: '2024-06-19', is_correct: true },
      { text: '2024-06-30', is_correct: false }
    ],
    explain: '2024-05-20 + 30 天 = 2024-06-19。'
  },
  {
    practice_id: 10363, source_lesson_id: 37,
    type: 'law', level: 'basic', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '下列关于发票管理说法正确的是（ ）。',
    options: [
      { text: '企业可以为他人虚开发票，但需告知税务机关', is_correct: false },
      { text: '取得虚开的增值税专用发票，不得抵扣进项税额', is_correct: true },
      { text: '普通发票可以不按规定保管', is_correct: false },
      { text: '发票遗失无需向税务机关报告', is_correct: false }
    ],
    explain: '取得虚开增值税专用发票的进项税额不得抵扣，且可能承担相应法律责任。虚开发票属违法行为，无论是否告知税务机关均不合法。'
  },
  {
    practice_id: 10364, source_lesson_id: 37,
    type: 'law', level: 'improve', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '纳税人依法终止纳税义务时，办理注销登记的正确顺序是（ ）。',
    options: [
      { text: '先注销工商，再注销税务', is_correct: false },
      { text: '先注销税务，再注销工商', is_correct: true },
      { text: '同时注销，顺序无要求', is_correct: false },
      { text: '只需注销工商，税务自动注销', is_correct: false }
    ],
    explain: '依法应先向税务机关办理注销税务登记，再向工商机关办理注销登记。'
  },
  {
    practice_id: 10365, source_lesson_id: 37,
    type: 'law', level: 'improve', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '下列行为中，属于虚开发票的是（ ）。',
    options: [
      { text: '为他人开具与实际经营业务不符的发票', is_correct: true },
      { text: '在规定期限内开具当月发票', is_correct: false },
      { text: '将发票交由购货方保管', is_correct: false },
      { text: '使用税控系统开具发票', is_correct: false }
    ],
    explain: '虚开发票包括：为他人/自己开具与实际业务不符的发票、让他人为自己虚开、介绍他人虚开，均属违法。'
  },
  {
    practice_id: 10366, source_lesson_id: 37,
    type: 'law', level: 'improve', hot: ['tax-register'],
    interaction_type: 'multi',
    prompt: '下列发生变化时须办理税务变更登记的有（ ）。',
    options: [
      { label: 'A', text: '企业名称变更', is_correct: true },
      { label: 'B', text: '法定代表人变更', is_correct: true },
      { label: 'C', text: '经营地址变更', is_correct: true },
      { label: 'D', text: '注册资本增加', is_correct: true },
      { label: 'E', text: '会计人员更换', is_correct: false }
    ],
    explain: '凡税务登记证载明事项发生变化（名称、法人、地址、注册资本等），均须在规定期限内办理变更登记。会计人员更换不涉及税务登记事项，无需变更。'
  },
  {
    practice_id: 10367, source_lesson_id: 37,
    type: 'law', level: 'improve', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '下列关于增值税专用发票使用的说法，正确的是（ ）。',
    options: [
      { text: '小规模纳税人可自行领购增值税专用发票', is_correct: false },
      { text: '增值税专用发票只能由一般纳税人领购使用', is_correct: true },
      { text: '取得专用发票即可无条件抵扣进项税', is_correct: false },
      { text: '专用发票遗失不影响进项税额抵扣', is_correct: false }
    ],
    explain: '增值税专用发票只能由增值税一般纳税人领购使用；小规模纳税人不能自行领购（可申请税务机关代开）；取得专用发票须合规才可抵扣；遗失须按规定补救方可抵扣。'
  },
  {
    practice_id: 10368, source_lesson_id: 37,
    type: 'law', level: 'exam', hot: ['tax-register'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于税务登记的说法，正确的是（ ）。',
    options: [
      { text: '个体工商户不需要办理税务登记', is_correct: false },
      { text: '扣缴义务人应当办理扣缴税款登记', is_correct: true },
      { text: '外出经营活动无需向经营地税务机关报告', is_correct: false },
      { text: '税务机关可拒绝接受纳税人办理税务登记', is_correct: false }
    ],
    explain: '扣缴义务人须向主管税务机关办理扣缴税款登记；个体工商户同样需要税务登记；外出经营须向经营地税务机关报告；税务机关无权拒绝合法登记申请。'
  },
  {
    practice_id: 10369, source_lesson_id: 37,
    type: 'law', level: 'exam', hot: ['tax-register'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于发票管理的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '发票由税务机关统一印制', is_correct: true },
      { label: 'B', text: '单位和个人不得转借、转让发票', is_correct: true },
      { label: 'C', text: '增值税专用发票只能由一般纳税人领购使用', is_correct: true },
      { label: 'D', text: '普通发票可以抵扣增值税进项税额', is_correct: false }
    ],
    explain: 'D 错误：普通发票不能抵扣增值税进项，只有增值税专用发票（及海关进口增值税专用缴款书等）才可抵扣。A/B/C 均正确。'
  },
  {
    practice_id: 10371, source_lesson_id: 38,
    type: 'law', level: 'basic', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '税务机关对纳税人欠缴税款征收滞纳金，日加收比例为（ ）。',
    options: [
      { text: '万分之三', is_correct: false },
      { text: '万分之五', is_correct: true },
      { text: '千分之一', is_correct: false },
      { text: '千分之五', is_correct: false }
    ],
    explain: '欠缴税款滞纳金按日加收万分之五（0.05‰/天）。'
  },
  {
    practice_id: 10372, source_lesson_id: 38,
    type: 'calc', level: 'basic', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '某纳税人欠缴税款 50,000 元，逾期 20 天未缴。应加收滞纳金（ ）元。',
    options: [
      { text: '25 元', is_correct: false },
      { text: '50 元', is_correct: true },
      { text: '100 元', is_correct: false },
      { text: '500 元', is_correct: false }
    ],
    explain: '滞纳金 = 50,000 × 0.00005 × 20 = 50 元。'
  },
  {
    practice_id: 10373, source_lesson_id: 38,
    type: 'calc', level: 'basic', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '某企业欠缴税款 100,000 元，逾期 30 天。应加收滞纳金（ ）元。',
    options: [
      { text: '150 元', is_correct: true },
      { text: '300 元', is_correct: false },
      { text: '1,500 元', is_correct: false },
      { text: '3,000 元', is_correct: false }
    ],
    explain: '滞纳金 = 100,000 × 0.00005 × 30 = 150 元。'
  },
  {
    practice_id: 10374, source_lesson_id: 38,
    type: 'law', level: 'improve', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '税务机关采取税收保全措施，须经（ ）批准。',
    options: [
      { text: '主管税务所所长', is_correct: false },
      { text: '县以上税务局局长', is_correct: true },
      { text: '省级税务机关负责人', is_correct: false },
      { text: '国家税务总局', is_correct: false }
    ],
    explain: '税收保全措施须经县以上税务局（分局）局长批准，主管税务所无此权限。'
  },
  {
    practice_id: 10375, source_lesson_id: 38,
    type: 'law', level: 'improve', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '下列财产中，税务机关不得采取税收保全措施的是（ ）。',
    options: [
      { text: '企业的生产设备', is_correct: false },
      { text: '企业的银行存款', is_correct: false },
      { text: '个人及其扶养家属维持生活必需的住房和用品', is_correct: true },
      { text: '企业库存商品', is_correct: false }
    ],
    explain: '税收保全和强制执行均不得及于纳税人本人及其所扶养家属维持生活必需的住房和用品。'
  },
  {
    practice_id: 10376, source_lesson_id: 38,
    type: 'law', level: 'improve', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '经催告逾期仍未缴纳税款的，税务机关书面通知银行扣缴税款，须经（ ）批准。',
    options: [
      { text: '主管税务所所长', is_correct: false },
      { text: '县以上税务局局长', is_correct: true },
      { text: '省级税务机关', is_correct: false },
      { text: '法院', is_correct: false }
    ],
    explain: '强制扣缴存款须经县以上税务局局长批准，与保全措施的审批层级相同。'
  },
  {
    practice_id: 10377, source_lesson_id: 38,
    type: 'law', level: 'improve', hot: ['tax-enforcement'],
    interaction_type: 'multi',
    prompt: '下列属于税收强制执行措施的有（ ）。',
    options: [
      { label: 'A', text: '书面通知银行从欠税人存款中扣缴', is_correct: true },
      { label: 'B', text: '拍卖查封扣押的商品抵缴税款', is_correct: true },
      { label: 'C', text: '吊销营业执照', is_correct: false },
      { label: 'D', text: '没收违法所得', is_correct: false }
    ],
    explain: 'A/B 是税收强制执行措施；C 吊销营业执照是工商机关的行政处罚；D 没收违法所得属税务行政处罚，非强制执行。'
  },
  {
    practice_id: 10378, source_lesson_id: 38,
    type: 'law', level: 'exam', hot: ['tax-enforcement'],
    interaction_type: 'single',
    prompt: '【真题级】下列关于税收保全与强制执行的说法，正确的是（ ）。',
    options: [
      { text: '税收保全只能针对已到期的税款', is_correct: false },
      { text: '税务机关可对任何欠税直接采取强制执行，无需催告', is_correct: false },
      { text: '税收保全可针对有转移财产迹象的纳税人，即便税款未到期', is_correct: true },
      { text: '强制执行可扣押个人唯一住房', is_correct: false }
    ],
    explain: '税收保全针对「有迹象」可能转移财产的纳税人，税款未到期亦可；强制执行须先书面催告；个人维持生活必需住房不得强制执行。'
  },
  {
    practice_id: 10379, source_lesson_id: 38,
    type: 'law', level: 'exam', hot: ['tax-enforcement'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于税务行政处罚的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '不缴或少缴税款，处 50%~5 倍罚款', is_correct: true },
      { label: 'B', text: '偷税数额占应纳税额 10% 以上且超 1 万元，处 3 年以下有期徒刑', is_correct: true },
      { label: 'C', text: '纳税人虚开增值税专用发票，由税务机关没收违法所得并处罚款', is_correct: true },
      { label: 'D', text: '税务行政处罚可由税务所直接执行，无需局长批准', is_correct: false }
    ],
    explain: 'D 错误：重大处罚须经县以上税务局（分局）局长批准或集体审议，不能由税务所直接执行。A/B/C 均为法定条款。'
  },
  {
    practice_id: 10381, source_lesson_id: 39,
    type: 'law', level: 'basic', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '劳动合同期限 3 个月以上不满 1 年的，试用期不得超过（ ）。',
    options: [
      { text: '15 天', is_correct: false },
      { text: '1 个月', is_correct: true },
      { text: '2 个月', is_correct: false },
      { text: '3 个月', is_correct: false }
    ],
    explain: '3 月以上不满 1 年→上限 1 月；1 年以上不满 3 年→上限 2 月；3 年以上及无固定期限→上限 6 月。'
  },
  {
    practice_id: 10382, source_lesson_id: 39,
    type: 'law', level: 'basic', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '下列劳动合同中，不得约定试用期的是（ ）。',
    options: [
      { text: '2 年固定期限劳动合同', is_correct: false },
      { text: '3 年固定期限劳动合同', is_correct: false },
      { text: '无固定期限劳动合同', is_correct: false },
      { text: '以完成某项工程为期限的劳动合同', is_correct: true }
    ],
    explain: '以完成一定工作任务为期限的合同，以及期限不满 3 个月的合同，不得约定试用期。'
  },
  {
    practice_id: 10383, source_lesson_id: 39,
    type: 'law', level: 'basic', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '同一用人单位与同一劳动者（ ）约定试用期。',
    options: [
      { text: '可多次', is_correct: false },
      { text: '只能约定一次', is_correct: true },
      { text: '续签时可重新约定', is_correct: false },
      { text: '每次签新合同均可约定', is_correct: false }
    ],
    explain: '无论续签多少次，同一单位与同一劳动者只能约定一次试用期。'
  },
  {
    practice_id: 10384, source_lesson_id: 39,
    type: 'law', level: 'improve', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '某公司与员工签订 2 年劳动合同，约定试用期 3 个月。该约定（ ）。',
    options: [
      { text: '完全合法', is_correct: false },
      { text: '试用期超期，超出部分无效，实际按 2 个月执行', is_correct: true },
      { text: '整个合同无效', is_correct: false },
      { text: '试用期约定整体无效，视为无试用期', is_correct: false }
    ],
    explain: '1 年以上不满 3 年合同试用期上限 2 月，约定 3 月超出 1 月，超出部分无效，实际执行 2 月；合同其他条款有效。'
  },
  {
    practice_id: 10385, source_lesson_id: 39,
    type: 'law', level: 'improve', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '试用期内，用人单位解除劳动合同须（ ）。',
    options: [
      { text: '无需理由，随时解除', is_correct: false },
      { text: '提前 3 天通知即可', is_correct: false },
      { text: '证明劳动者不符合录用条件', is_correct: true },
      { text: '经劳动仲裁委员会批准', is_correct: false }
    ],
    explain: '试用期内用人单位解除合同，必须有证据证明劳动者不符合录用条件，不能随意解除；否则属违法解除，须支付赔偿金。'
  },
  {
    practice_id: 10386, source_lesson_id: 39,
    type: 'law', level: 'improve', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '劳动者在试用期内解除劳动合同，需提前（ ）通知用人单位。',
    options: [
      { text: '3 天', is_correct: true },
      { text: '15 天', is_correct: false },
      { text: '30 天', is_correct: false },
      { text: '无需通知', is_correct: false }
    ],
    explain: '试用期内劳动者解除合同提前 3 天通知；转正后须提前 30 天（书面）通知。'
  },
  {
    practice_id: 10387, source_lesson_id: 39,
    type: 'law', level: 'improve', hot: ['labor-probation'],
    interaction_type: 'multi',
    prompt: '下列关于试用期工资的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '不得低于本单位相同岗位最低档工资', is_correct: true },
      { label: 'B', text: '不得低于劳动合同约定工资的 80%', is_correct: true },
      { label: 'C', text: '不得低于用人单位所在地最低工资标准', is_correct: true },
      { label: 'D', text: '用人单位可自行决定试用期工资，无下限', is_correct: false }
    ],
    explain: '试用期工资同时受三个下限约束：① 同岗位最低档；② 合同约定工资的 80%；③ 当地最低工资标准，三者取其高。'
  },
  {
    practice_id: 10388, source_lesson_id: 39,
    type: 'law', level: 'exam', hot: ['labor-probation'],
    interaction_type: 'single',
    prompt: '【真题级】甲公司与员工签订无固定期限劳动合同，约定试用期 8 个月。该约定（ ）。',
    options: [
      { text: '合法，无固定期限合同试用期无上限', is_correct: false },
      { text: '超期 2 个月无效，实际按 6 个月执行', is_correct: true },
      { text: '整个试用期约定无效，视为无试用期', is_correct: false },
      { text: '合同因试用期违法而整体无效', is_correct: false }
    ],
    explain: '无固定期限合同试用期上限 6 个月，约定 8 个月超出 2 个月，超出部分无效，实际执行 6 个月；合同其他条款有效。'
  },
  {
    practice_id: 10389, source_lesson_id: 39,
    type: 'law', level: 'exam', hot: ['labor-probation'],
    interaction_type: 'multi',
    prompt: '【真题级】下列情形中，用人单位可以解除劳动合同的有（ ）。',
    options: [
      { label: 'A', text: '劳动者在试用期被证明不符合录用条件', is_correct: true },
      { label: 'B', text: '劳动者严重违反用人单位规章制度', is_correct: true },
      { label: 'C', text: '劳动者患病，在规定医疗期内', is_correct: false },
      { label: 'D', text: '劳动者因工负伤，在停工留薪期内', is_correct: false }
    ],
    explain: 'C/D 属于不得解除的情形（医疗期内、工伤停工留薪期内受法律保护）。A/B 是法定可解除情形。'
  },
  {
    practice_id: 10391, source_lesson_id: 40,
    type: 'law', level: 'basic', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '下列险种中，由用人单位全额承担、个人不缴费的是（ ）。',
    options: [
      { text: '养老保险', is_correct: false },
      { text: '医疗保险', is_correct: false },
      { text: '工伤保险', is_correct: true },
      { text: '失业保险', is_correct: false }
    ],
    explain: '工伤保险和生育保险由用人单位全额缴纳，个人不缴费；养老、医疗、失业由单位和个人共同缴纳。'
  },
  {
    practice_id: 10392, source_lesson_id: 40,
    type: 'law', level: 'basic', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '社会保险中，需要个人与单位共同缴费的险种共有（ ）种。',
    options: [
      { text: '2', is_correct: false },
      { text: '3', is_correct: true },
      { text: '4', is_correct: false },
      { text: '5', is_correct: false }
    ],
    explain: '养老、医疗、失业三险由个人和单位共同缴费；工伤和生育由单位全额承担。共 3 种。'
  },
  {
    practice_id: 10393, source_lesson_id: 40,
    type: 'law', level: 'basic', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '下列关于社会保险的说法，正确的是（ ）。',
    options: [
      { text: '个人可自愿选择是否参加社会保险', is_correct: false },
      { text: '社会保险具有强制性，用人单位和劳动者必须依法参加', is_correct: true },
      { text: '只有签订合同的员工才需参加社会保险', is_correct: false },
      { text: '试用期内可暂不缴纳社会保险', is_correct: false }
    ],
    explain: '社会保险具有强制性，自用工之日起（包括试用期）就应依法参加并缴费，与是否签订合同无关。'
  },
  {
    practice_id: 10394, source_lesson_id: 40,
    type: 'calc', level: 'improve', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '某员工月工资 10,000 元，养老保险个人缴费比例 8%。每月个人应缴养老保险费为（ ）元。',
    options: [
      { text: '600 元', is_correct: false },
      { text: '800 元', is_correct: true },
      { text: '1,600 元', is_correct: false },
      { text: '2,400 元', is_correct: false }
    ],
    explain: '个人养老保险 = 10,000 × 8% = 800 元。单位缴费比例 16%，与个人部分不同。'
  },
  {
    practice_id: 10395, source_lesson_id: 40,
    type: 'calc', level: 'improve', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '某员工月工资 10,000 元，单位养老 16%、医疗 8.5%、失业 0.5%。单位三险月缴费合计约（ ）元。',
    options: [
      { text: '1,600 元', is_correct: false },
      { text: '2,000 元', is_correct: false },
      { text: '2,500 元', is_correct: true },
      { text: '3,200 元', is_correct: false }
    ],
    explain: '单位：养老 1,600 + 医疗 850 + 失业 50 = 2,500 元（各地比例略有差异，此为典型值）。'
  },
  {
    practice_id: 10396, source_lesson_id: 40,
    type: 'law', level: 'improve', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '职工因工作遭受事故伤害，用人单位应在事故发生之日起（ ）内提出工伤认定申请。',
    options: [
      { text: '15 天', is_correct: false },
      { text: '30 天', is_correct: true },
      { text: '60 天', is_correct: false },
      { text: '90 天', is_correct: false }
    ],
    explain: '用人单位应在事故发生之日起 30 日内提出工伤认定申请；用人单位未提出的，工伤职工或近亲属可在 1 年内提出。'
  },
  {
    practice_id: 10397, source_lesson_id: 40,
    type: 'law', level: 'improve', hot: ['social-insurance'],
    interaction_type: 'multi',
    prompt: '下列关于社会保险基金的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '社会保险基金专款专用，不得挪作他用', is_correct: true },
      { label: 'B', text: '任何组织和个人不得侵占或挪用社会保险基金', is_correct: true },
      { label: 'C', text: '社会保险基金可用于投资担保', is_correct: false },
      { label: 'D', text: '社会保险基金监督由人大、审计机关等实施', is_correct: true }
    ],
    explain: 'C 错误：社会保险基金不得用于投资担保或偿还债务。A/B/D 均正确。'
  },
  {
    practice_id: 10398, source_lesson_id: 40,
    type: 'law', level: 'exam', hot: ['social-insurance'],
    interaction_type: 'single',
    prompt: '【真题级】劳动者达到法定退休年龄时，累计缴纳养老保险费不足 15 年的，正确处理方式是（ ）。',
    options: [
      { text: '直接领取基本养老金', is_correct: false },
      { text: '可继续缴费至满 15 年后领取，或转入新农保/城居保', is_correct: true },
      { text: '由用人单位补缴差额', is_correct: false },
      { text: '由国家财政全额补贴', is_correct: false }
    ],
    explain: '累计缴费不足 15 年的，可申请延续缴费至满 15 年后按月领取；也可转入新型农村社会养老保险或城镇居民社会养老保险享受相应待遇。'
  },
  {
    practice_id: 10399, source_lesson_id: 40,
    type: 'law', level: 'exam', hot: ['social-insurance'],
    interaction_type: 'multi',
    prompt: '【真题级】下列关于失业保险的说法，正确的有（ ）。',
    options: [
      { label: 'A', text: '非本人意愿中断就业的失业人员可申领失业保险金', is_correct: true },
      { label: 'B', text: '领取失业保险金期间，医疗保险费由失业保险基金缴纳', is_correct: true },
      { label: 'C', text: '失业保险金的领取期限最长为 24 个月', is_correct: true },
      { label: 'D', text: '自愿辞职的劳动者可申领失业保险金', is_correct: false }
    ],
    explain: 'D 错误：自愿辞职（本人意愿离职）不符合申领条件；A/B/C 均正确（累计缴费满 10 年最长领取 24 个月，医疗费由失业保险基金支付）。'
  }
);
