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
);
