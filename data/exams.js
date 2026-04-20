/**
 * 初级会计历年真题库（自动合并）
 * 由 scripts/ingest_exams.py 生成，请勿手工编辑 window.EXAMS 以外的内容。
 */
window.EXAMS = [
  {
    id: 'S2024-01',
    subject: '实务',
    year: 2024,
    topic: '资产负债表',
    interaction_type: 'multi',
    stem: '下列各项中，应计入资产负债表「存货」项目的是（　　）？',
    options: [
      { label: 'A', text: '原材料', is_correct: true },
      { label: 'B', text: '在产品', is_correct: true },
      { label: 'C', text: '委托加工物资', is_correct: true },
      { label: 'D', text: '工程物资', is_correct: false }
    ],
    analysis: '工程物资属于非流动资产，不计入存货项目。A、B、C 均为存货组成部分。'
  },
  {
    id: 'S2024-02',
    subject: '实务',
    year: 2024,
    topic: '固定资产',
    interaction_type: 'multi',
    stem: '下列关于固定资产折旧的说法中，正确的是（　　）？',
    options: [
      { label: 'A', text: '当月新增固定资产，当月计提折旧', is_correct: false },
      { label: 'B', text: '当月减少固定资产，当月仍计提折旧', is_correct: true },
      { label: 'C', text: '已提足折旧但仍在使用的固定资产，不再计提折旧', is_correct: true },
      { label: 'D', text: '已达到预定可使用状态但尚未办理竣工决算的固定资产，不计提折旧', is_correct: false }
    ],
    analysis: 'A 错：当月增加下月提；D 错：达到预定可使用状态即按暂估价入账并计提折旧，办理竣工决算后再调整。B、C 正确。'
  },
  {
    id: 'S2023-03',
    subject: '实务',
    year: 2023,
    topic: '收入',
    interaction_type: 'multi',
    stem: '下列各项中，会引起企业营业收入发生增减变动的有（　　）？',
    options: [
      { label: 'A', text: '销售商品', is_correct: true },
      { label: 'B', text: '提供劳务', is_correct: true },
      { label: 'C', text: '出租固定资产（非主营）', is_correct: true },
      { label: 'D', text: '转让固定资产', is_correct: false }
    ],
    analysis: 'A、B 计入主营业务收入；C 出租计入其他业务收入，也是营业收入构成部分。D 转让固定资产计入「资产处置损益」，不计入营业收入。'
  },
  {
    id: 'S2023-04',
    subject: '实务',
    year: 2023,
    topic: '所有者权益',
    interaction_type: 'multi',
    stem: '下列各项中，可以用于弥补公司亏损的是（　　）？',
    options: [
      { label: 'A', text: '资本公积', is_correct: false },
      { label: 'B', text: '法定盈余公积', is_correct: true },
      { label: 'C', text: '任意盈余公积', is_correct: true },
      { label: 'D', text: '未分配利润', is_correct: true }
    ],
    analysis: '资本公积不得用于弥补亏损；盈余公积（法定/任意）和未分配利润均可。'
  },
  {
    id: 'S2022-05',
    subject: '实务',
    year: 2022,
    topic: '会计基础',
    interaction_type: 'multi',
    stem: '下列各项中，能够引起所有者权益总额发生变动的是（　　）？',
    options: [
      { label: 'A', text: '宣告分配现金股利', is_correct: true },
      { label: 'B', text: '以盈余公积转增资本', is_correct: false },
      { label: 'C', text: '接受投资者投入资本', is_correct: true },
      { label: 'D', text: '将资本公积转增资本', is_correct: false }
    ],
    analysis: 'B、D 属于所有者权益内部结构变动，不改变总额；A 现金股利使未分配利润减少并形成应付股利（负债），总额减少；C 直接增加实收资本/资本公积，总额增加。'
  },
  {
    id: 'E2024-06',
    subject: '经济法',
    year: 2024,
    topic: '增值税',
    interaction_type: 'multi',
    stem: '下列销售行为中，适用增值税 9% 税率的是（　　）？',
    options: [
      { label: 'A', text: '销售交通运输服务', is_correct: true },
      { label: 'B', text: '销售不动产', is_correct: true },
      { label: 'C', text: '销售建筑服务', is_correct: true },
      { label: 'D', text: '提供居民日常服务', is_correct: false }
    ],
    analysis: '9% 适用：交通运输、邮政、基础电信、建筑、不动产销售、农产品；居民日常服务属于生活服务 6%。'
  },
  {
    id: 'E2024-07',
    subject: '经济法',
    year: 2024,
    topic: '劳动合同',
    interaction_type: 'multi',
    stem: '下列情形中，用人单位可以解除劳动合同且无需支付经济补偿的是（　　）？',
    options: [
      { label: 'A', text: '劳动者在试用期间被证明不符合录用条件', is_correct: true },
      { label: 'B', text: '劳动者严重违反用人单位规章制度', is_correct: true },
      { label: 'C', text: '劳动者患病医疗期满不能从事原工作也不能从事另行安排工作', is_correct: false },
      { label: 'D', text: '劳动者被依法追究刑事责任', is_correct: true }
    ],
    analysis: 'A、B、D 属于过错解除，无需支付补偿；C 属于无过错解除，需支付经济补偿（医疗补助费）。'
  },
  {
    id: 'E2023-08',
    subject: '经济法',
    year: 2023,
    topic: '票据',
    interaction_type: 'multi',
    stem: '下列关于支票的表述，正确的是（　　）？',
    options: [
      { label: 'A', text: '支票提示付款期限自出票日起 10 日', is_correct: true },
      { label: 'B', text: '持票人对出票人的票据权利自出票日起 2 年不行使而消灭', is_correct: false },
      { label: 'C', text: '现金支票只能用于支取现金', is_correct: true },
      { label: 'D', text: '支票的出票金额可由出票人自行决定并授权补记', is_correct: true }
    ],
    analysis: 'B 错：支票持票人对出票人权利的时效是 6 个月，不是 2 年。A、C、D 正确。'
  },
  {
    id: 'E2023-09',
    subject: '经济法',
    year: 2023,
    topic: '社会保险',
    interaction_type: 'multi',
    stem: '下列社会保险，由用人单位全额缴费的有（　　）？',
    options: [
      { label: 'A', text: '基本养老保险', is_correct: false },
      { label: 'B', text: '基本医疗保险', is_correct: false },
      { label: 'C', text: '工伤保险', is_correct: true },
      { label: 'D', text: '生育保险', is_correct: true }
    ],
    analysis: '养老、医疗、失业由单位和个人共同缴纳；工伤、生育由单位全额承担。'
  },
  {
    id: 'E2022-10',
    subject: '经济法',
    year: 2022,
    topic: '会计法',
    interaction_type: 'multi',
    stem: '下列关于会计档案保管期限的表述，正确的是（　　）？',
    options: [
      { label: 'A', text: '原始凭证保管期限为 30 年', is_correct: true },
      { label: 'B', text: '总账保管期限为 30 年', is_correct: true },
      { label: 'C', text: '年度财务会计报告永久保管', is_correct: true },
      { label: 'D', text: '银行对账单保管期限为 30 年', is_correct: false }
    ],
    analysis: 'A、B、C 均正确；D 错：银行对账单、存款余额调节表保管期限为 10 年。'
  },
  {
    id: 'S2024-01',
    subject: '实务',
    year: 2024,
    topic: '资产',
    interaction_type: 'multi',
    stem: '下列各项中，应当计入存货成本的是（ ）。',
    options: [
      { label: 'A', text: '采购过程中发生的运输费', is_correct: true },
      { label: 'B', text: '仓储部门日常管理费用', is_correct: false },
      { label: 'C', text: '非正常消耗的直接材料', is_correct: false },
      { label: 'D', text: '采购过程中支付的装卸费', is_correct: true }
    ],
    analysis: '存货成本 = 买价 + 运杂费 + 装卸费 + 保险费等；B 属期间费用、C 非正常消耗计入损益。'
  },
  {
    id: 'S2024-02',
    subject: '实务',
    year: 2024,
    topic: '固定资产',
    interaction_type: 'multi',
    stem: '下列关于固定资产折旧的说法，正确的是（ ）。',
    options: [
      { label: 'A', text: '当月增加的固定资产，当月计提折旧', is_correct: false },
      { label: 'B', text: '当月减少的固定资产，当月照提折旧', is_correct: true },
      { label: 'C', text: '已提足折旧仍使用的，不再计提', is_correct: true },
      { label: 'D', text: '已达到预定可使用状态但未办理竣工决算的，不计提折旧', is_correct: false }
    ],
    analysis: 'A 错当月增加下月提；D 错按暂估价入账并计提。'
  },
  {
    id: 'S2024-03',
    subject: '实务',
    year: 2024,
    topic: '负债',
    interaction_type: 'multi',
    stem: '下列各项中属于流动负债的有（ ）。',
    options: [
      { label: 'A', text: '应付票据', is_correct: true },
      { label: 'B', text: '预计负债（诉讼赔付，预计 3 年后支付）', is_correct: false },
      { label: 'C', text: '应交税费', is_correct: true },
      { label: 'D', text: '一年内到期的长期借款', is_correct: true }
    ],
    analysis: 'B 预计在 3 年后支付属非流动负债。'
  },
  {
    id: 'S2024-04',
    subject: '实务',
    year: 2024,
    topic: '所有者权益',
    interaction_type: 'multi',
    stem: '下列各项中，会引起所有者权益总额发生变动的是（ ）。',
    options: [
      { label: 'A', text: '宣告分配现金股利', is_correct: true },
      { label: 'B', text: '盈余公积转增资本', is_correct: false },
      { label: 'C', text: '计提法定盈余公积', is_correct: false },
      { label: 'D', text: '接受投资者资本投入', is_correct: true }
    ],
    analysis: 'B 内部结构变动；C 是利润分配环节，影响利润分配而非所有者权益总额。'
  },
  {
    id: 'S2024-05',
    subject: '实务',
    year: 2024,
    topic: '收入',
    interaction_type: 'multi',
    stem: '下列各项中应确认为其他业务收入的有（ ）。',
    options: [
      { label: 'A', text: '出售原材料收入', is_correct: true },
      { label: 'B', text: '出租包装物租金（非主营）', is_correct: true },
      { label: 'C', text: '销售自产产品', is_correct: false },
      { label: 'D', text: '出让无形资产使用权（非主营）', is_correct: true }
    ],
    analysis: 'C 属主营业务收入。'
  },
  {
    id: 'S2024-06',
    subject: '实务',
    year: 2024,
    topic: '费用',
    interaction_type: 'multi',
    stem: '下列各项中，应计入管理费用的是（ ）。',
    options: [
      { label: 'A', text: '业务招待费', is_correct: true },
      { label: 'B', text: '董事会费', is_correct: true },
      { label: 'C', text: '新产品研究费用（研究阶段）', is_correct: true },
      { label: 'D', text: '工厂生产车间机物料消耗', is_correct: false }
    ],
    analysis: 'D 计入制造费用。'
  },
  {
    id: 'S2024-07',
    subject: '实务',
    year: 2024,
    topic: '财务报表',
    interaction_type: 'multi',
    stem: '下列各项中，应列入利润表「营业利润」计算的是（ ）。',
    options: [
      { label: 'A', text: '投资收益', is_correct: true },
      { label: 'B', text: '资产处置损益', is_correct: true },
      { label: 'C', text: '营业外收入', is_correct: false },
      { label: 'D', text: '信用减值损失', is_correct: true }
    ],
    analysis: 'C 营业外收入在营业利润下面单独列示，不参与营业利润计算。'
  },
  {
    id: 'S2023-08',
    subject: '实务',
    year: 2023,
    topic: '会计基础',
    interaction_type: 'multi',
    stem: '下列各项中属于会计要素的是（ ）。',
    options: [
      { label: 'A', text: '资产', is_correct: true },
      { label: 'B', text: '应收账款', is_correct: false },
      { label: 'C', text: '收入', is_correct: true },
      { label: 'D', text: '利润', is_correct: true }
    ],
    analysis: 'B 是具体会计科目，不是会计要素本身。'
  },
  {
    id: 'S2023-09',
    subject: '实务',
    year: 2023,
    topic: '存货',
    interaction_type: 'multi',
    stem: '下列各项中，应在月末结转其成本的有（ ）。',
    options: [
      { label: 'A', text: '销售商品', is_correct: true },
      { label: 'B', text: '销售材料', is_correct: true },
      { label: 'C', text: '在产品', is_correct: false },
      { label: 'D', text: '对外提供劳务', is_correct: true }
    ],
    analysis: 'C 在产品月末仍在库，不结转销售成本。'
  },
  {
    id: 'S2023-10',
    subject: '实务',
    year: 2023,
    topic: '固定资产',
    interaction_type: 'multi',
    stem: '下列各项支出中，可直接计入当期损益的是（ ）。',
    options: [
      { label: 'A', text: '生产车间日常维修费', is_correct: true },
      { label: 'B', text: '办公楼大修理支出（受益期 3 年以上）', is_correct: false },
      { label: 'C', text: '行政办公设备折旧', is_correct: true },
      { label: 'D', text: '生产设备的更新改造', is_correct: false }
    ],
    analysis: 'B 资本化；D 资本化计入固定资产原值。'
  },
  {
    id: 'E2024-11',
    subject: '经济法',
    year: 2024,
    topic: '增值税',
    interaction_type: 'multi',
    stem: '下列业务中，适用增值税 9% 税率的有（ ）。',
    options: [
      { label: 'A', text: '销售交通运输服务', is_correct: true },
      { label: 'B', text: '销售建筑服务', is_correct: true },
      { label: 'C', text: '销售不动产', is_correct: true },
      { label: 'D', text: '销售现代服务', is_correct: false }
    ],
    analysis: 'D 现代服务税率 6%。'
  },
  {
    id: 'E2024-12',
    subject: '经济法',
    year: 2024,
    topic: '消费税',
    interaction_type: 'multi',
    stem: '下列各项中，属于消费税征税范围的有（ ）。',
    options: [
      { label: 'A', text: '烟丝', is_correct: true },
      { label: 'B', text: '高档化妆品', is_correct: true },
      { label: 'C', text: '普通护肤品', is_correct: false },
      { label: 'D', text: '小汽车', is_correct: true }
    ],
    analysis: 'C 普通护肤品不征消费税（仅高档化妆品才征）。'
  },
  {
    id: 'E2024-13',
    subject: '经济法',
    year: 2024,
    topic: '个人所得税',
    interaction_type: 'multi',
    stem: '下列所得中，属于综合所得范围的有（ ）。',
    options: [
      { label: 'A', text: '工资薪金', is_correct: true },
      { label: 'B', text: '劳务报酬', is_correct: true },
      { label: 'C', text: '稿酬', is_correct: true },
      { label: 'D', text: '特许权使用费', is_correct: true }
    ],
    analysis: '综合所得=工资薪金+劳务报酬+稿酬+特许权使用费，四项合并按年计税。'
  },
  {
    id: 'E2024-14',
    subject: '经济法',
    year: 2024,
    topic: '支付结算',
    interaction_type: 'multi',
    stem: '下列关于支票的表述，正确的有（ ）。',
    options: [
      { label: 'A', text: '提示付款期限自出票日起 10 日', is_correct: true },
      { label: 'B', text: '现金支票只能用于支取现金', is_correct: true },
      { label: 'C', text: '转账支票既可取现也可转账', is_correct: false },
      { label: 'D', text: '出票金额可由出票人授权补记', is_correct: true }
    ],
    analysis: 'C 错，转账支票不得支取现金。'
  },
  {
    id: 'E2024-15',
    subject: '经济法',
    year: 2024,
    topic: '劳动合同',
    interaction_type: 'multi',
    stem: '下列情形中，用人单位可以解除劳动合同且无需支付经济补偿的有（ ）。',
    options: [
      { label: 'A', text: '试用期不符合录用条件', is_correct: true },
      { label: 'B', text: '严重违反规章制度', is_correct: true },
      { label: 'C', text: '被依法追究刑事责任', is_correct: true },
      { label: 'D', text: '严重失职给用人单位造成重大损害', is_correct: true }
    ],
    analysis: '以上四项均属过错性解除，无需支付经济补偿。'
  },
  {
    id: 'E2023-16',
    subject: '经济法',
    year: 2023,
    topic: '会计法',
    interaction_type: 'multi',
    stem: '下列会计档案保管期限为 30 年的是（ ）。',
    options: [
      { label: 'A', text: '原始凭证', is_correct: true },
      { label: 'B', text: '总账', is_correct: true },
      { label: 'C', text: '明细账', is_correct: true },
      { label: 'D', text: '年度财务会计报告', is_correct: false }
    ],
    analysis: 'D 年度财务会计报告永久保管。'
  },
  {
    id: 'E2023-17',
    subject: '经济法',
    year: 2023,
    topic: '税收征管',
    interaction_type: 'multi',
    stem: '下列各项中，属于税款加收滞纳金情形的是（ ）。',
    options: [
      { label: 'A', text: '未按规定期限缴纳税款', is_correct: true },
      { label: 'B', text: '核定税额有异议缴款后申请复议', is_correct: false },
      { label: 'C', text: '因纳税人失误少缴税款', is_correct: true },
      { label: 'D', text: '因税务机关责任少缴税款', is_correct: false }
    ],
    analysis: 'B 属于复议程序；D 因税务机关责任的少缴税款，不加收滞纳金。'
  },
  {
    id: 'E2023-18',
    subject: '经济法',
    year: 2023,
    topic: '社保',
    interaction_type: 'multi',
    stem: '下列社会保险中，由用人单位全额缴费的有（ ）。',
    options: [
      { label: 'A', text: '基本养老保险', is_correct: false },
      { label: 'B', text: '工伤保险', is_correct: true },
      { label: 'C', text: '生育保险', is_correct: true },
      { label: 'D', text: '基本医疗保险', is_correct: false }
    ],
    analysis: '养老、医疗、失业由单位与个人共同缴纳；工伤、生育由单位全额承担。'
  },
  {
    id: 'E2023-19',
    subject: '经济法',
    year: 2023,
    topic: '票据',
    interaction_type: 'multi',
    stem: '票据权利时效，正确的有（ ）。',
    options: [
      { label: 'A', text: '持票人对出票人汇票权利 2 年', is_correct: true },
      { label: 'B', text: '持票人对出票人支票权利 6 个月', is_correct: true },
      { label: 'C', text: '持票人对前手追索权自被拒付日起 6 个月', is_correct: true },
      { label: 'D', text: '再追索权自清偿日或被起诉之日起 3 个月', is_correct: true }
    ],
    analysis: '四项时效均为法定标准，属于高频考点。'
  },
  {
    id: 'E2022-20',
    subject: '经济法',
    year: 2022,
    topic: '增值税',
    interaction_type: 'multi',
    stem: '下列纳税人发生的下列行为中，视同销售的是（ ）。',
    options: [
      { label: 'A', text: '将自产产品用于集体福利', is_correct: true },
      { label: 'B', text: '将外购货物用于职工个人消费', is_correct: false },
      { label: 'C', text: '将自产产品无偿赠送他人', is_correct: true },
      { label: 'D', text: '将外购货物用于本企业连续生产', is_correct: false }
    ],
    analysis: 'B 外购用于集体福利/个人消费属进项不得抵扣而非视同销售；D 内部生产不视同销售。'
  }
];
