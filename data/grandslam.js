/* ============================================================
 * 大满贯账套推演 · 单月完整账务流程
 * 场景：甲公司 2026 年 3 月经济业务（精简版）
 * 期初数据 + 5 笔业务凭证 + 月末三步结转 + 资产负债表 + 利润表
 * ============================================================ */

window.GRANDSLAM = {
  company: '甲公司',
  period: '2026年3月',

  // 期初余额（月初 3/1）
  opening: {
    '库存现金':        { dir: 'debit',  amount:   5000  },
    '银行存款':        { dir: 'debit',  amount: 150000  },
    '应收账款':        { dir: 'debit',  amount:  30000  },
    '原材料':          { dir: 'debit',  amount:  20000  },
    '固定资产':        { dir: 'debit',  amount: 100000  },
    '累计折旧':        { dir: 'credit', amount:  10000  },
    '应付账款':        { dir: 'credit', amount:  15000  },
    '应交税费':        { dir: 'credit', amount:   5000  },
    '实收资本':        { dir: 'credit', amount: 200000  },
    '利润分配—未分配利润': { dir: 'credit', amount:  75000  }
  },

  // 常用科目（下拉选项）
  accounts: [
    '库存现金','银行存款','应收账款','预付账款','原材料','库存商品','固定资产','累计折旧',
    '应付账款','预收账款','应交税费','短期借款','实收资本','利润分配—未分配利润',
    '主营业务收入','主营业务成本','销售费用','管理费用','财务费用','营业税金及附加',
    '本年利润'
  ],

  // 5 笔原始凭证 → 要求学生做记账凭证
  vouchers: [
    {
      id: 'V1',
      date: '2026-03-05',
      title: '销售商品收款',
      source: '销售发票 + 银行进账单：向 A 公司销售商品一批，不含税价 40,000 元，增值税率 13%，款项已收存银行。',
      hint: '应收/应付 vs 银行；注意销项税。',
      entries: [
        { side:'借', account:'银行存款',    amount: 45200 },
        { side:'贷', account:'主营业务收入', amount: 40000 },
        { side:'贷', account:'应交税费',    amount:  5200 }
      ]
    },
    {
      id: 'V2',
      date: '2026-03-08',
      title: '结转销售成本',
      source: '出库单：上述销售商品的成本为 25,000 元，商品已发出。',
      hint: '收入与成本要配比。',
      entries: [
        { side:'借', account:'主营业务成本', amount: 25000 },
        { side:'贷', account:'库存商品',    amount: 25000 }
      ]
    },
    {
      id: 'V3',
      date: '2026-03-15',
      title: '支付办公费用',
      source: '银行付款回单：用银行存款支付本月办公费用 3,000 元（不考虑进项税）。',
      hint: '管理性日常开支归哪个费用类？',
      entries: [
        { side:'借', account:'管理费用',   amount: 3000 },
        { side:'贷', account:'银行存款',   amount: 3000 }
      ]
    },
    {
      id: 'V4',
      date: '2026-03-20',
      title: '支付销售人员工资',
      source: '工资表 + 银行代发回单：发放销售部工资 8,000 元（简化：全额银行转账，不考虑个税社保）。',
      hint: '销售部 vs 管理部，费用归属不同。',
      entries: [
        { side:'借', account:'销售费用',   amount: 8000 },
        { side:'贷', account:'银行存款',   amount: 8000 }
      ]
    },
    {
      id: 'V5',
      date: '2026-03-31',
      title: '计提固定资产折旧',
      source: '折旧计算表：本月固定资产应计提折旧 1,000 元，全部由管理部门使用。',
      hint: '资产类减值/折旧科目是备抵账户。',
      entries: [
        { side:'借', account:'管理费用',   amount: 1000 },
        { side:'贷', account:'累计折旧',   amount: 1000 }
      ]
    }
  ],

  // 月末结转（学生点击生成自动完成，但须答对 2 选 1 的结转方向）
  closing: {
    // Step 1: 收入类结转到本年利润
    revenue: {
      title: '结转损益类 — 收入',
      question: '月末将收入类账户结转至本年利润，正确分录是？',
      options: [
        { label:'A', text:'借：本年利润 40000  贷：主营业务收入 40000', is_correct: false },
        { label:'B', text:'借：主营业务收入 40000  贷：本年利润 40000', is_correct: true }
      ],
      entries: [
        { side:'借', account:'主营业务收入', amount: 40000 },
        { side:'贷', account:'本年利润',    amount: 40000 }
      ]
    },
    // Step 2: 费用/成本结转到本年利润
    expense: {
      title: '结转损益类 — 成本费用',
      question: '主营业务成本 25000、销售费用 8000、管理费用 4000 全部结转本年利润，应如何记账？',
      options: [
        { label:'A', text:'借：本年利润 37000  贷：主营业务成本 25000  销售费用 8000  管理费用 4000', is_correct: true },
        { label:'B', text:'借：主营业务成本 25000  销售费用 8000  管理费用 4000  贷：本年利润 37000', is_correct: false }
      ],
      entries: [
        { side:'借', account:'本年利润',     amount: 37000 },
        { side:'贷', account:'主营业务成本', amount: 25000 },
        { side:'贷', account:'销售费用',     amount:  8000 },
        { side:'贷', account:'管理费用',     amount:  4000 }
      ]
    },
    // Step 3: 本年利润净额结转到利润分配（本月净利 = 40000 - 37000 = 3000）
    profit: {
      title: '结转本年利润至利润分配',
      question: '本月净利润 3,000 元，月末应如何结转到利润分配—未分配利润？',
      options: [
        { label:'A', text:'借：利润分配—未分配利润 3000  贷：本年利润 3000', is_correct: false },
        { label:'B', text:'借：本年利润 3000  贷：利润分配—未分配利润 3000', is_correct: true }
      ],
      entries: [
        { side:'借', account:'本年利润',             amount: 3000 },
        { side:'贷', account:'利润分配—未分配利润', amount: 3000 }
      ]
    }
  },

  // 期末应呈现的资产负债表 / 利润表
  reports: {
    balanceSheet: {
      title: '简易资产负债表 · 2026-03-31',
      assets: [
        { name:'库存现金',  amount:   5000 },
        { name:'银行存款',  amount: 184200 }, // 150000 +45200 -3000 -8000
        { name:'应收账款',  amount:  30000 },
        { name:'原材料',    amount:  20000 },
        { name:'库存商品',  amount: -25000 }, // 期初未给正数，减号示意出库
        { name:'固定资产',  amount: 100000 },
        { name:'累计折旧',  amount: -11000 }  // -10000 - 1000
      ],
      liabEquity: [
        { name:'应付账款',   amount:  15000 },
        { name:'应交税费',   amount:  10200 }, // 5000 + 5200
        { name:'实收资本',   amount: 200000 },
        { name:'未分配利润', amount:  78000 }  // 75000 + 3000
      ]
    },
    incomeStatement: {
      title: '简易利润表 · 2026年3月',
      rows: [
        { name:'营业收入',      amount:  40000 },
        { name:'减：营业成本',  amount:  25000 },
        { name:'    销售费用',  amount:   8000 },
        { name:'    管理费用',  amount:   4000 },
        { name:'营业利润',      amount:   3000, bold: true },
        { name:'净利润',        amount:   3000, bold: true }
      ]
    }
  }
};
