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
);
