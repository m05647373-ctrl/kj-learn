# 标签体系（v1）

> 用于练习题库 practice.js 与原 lessons.js 的 tags 字段。
> 任何题都至少有 1 个题型标签 + 1 个难度 + 1 个考点。

## 题型标签 type
- `concept` 概念辨析（资产/负债/权益归类、要素辨认）
- `calc` 计算题（折旧、税额、利息）
- `journal` 分录题（借/贷方向、科目）
- `law` 法条记忆（时效、税率、范围）
- `comprehensive` 综合运用（多步骤、不定项）

## 难度 level
- `basic`    ⭐ 基础（教材原文级，闭眼能答）
- `improve`  ⭐⭐ 进阶（需要稍微推导）
- `exam`     ⭐⭐⭐ 真题级（接近历年真题难度，含陷阱）

## 高频考点 hot（红标 🔥 = 历年真题命中率高）

### 实务篇
- `borrow-credit`     借贷方向 🔥
- `six-elements`      六大要素分类 🔥
- `petty-cash`        库存现金/备用金
- `bad-debt`          坏账准备
- `note-discount`     应收票据贴现
- `inventory-avg`     存货加权平均 🔥
- `inventory-fifo`    存货先进先出
- `vat-input`         增值税进项税额 🔥
- `vat-output`        增值税销项税额
- `vat-transfer-out`  进项税转出 🔥
- `depreciation-sl`   直线折旧 🔥
- `depreciation-ddb`  双倍余额递减 🔥
- `intangible-amort`  无形资产摊销
- `short-loan`        短期借款利息
- `payroll`           应付职工薪酬/五险一金 🔥
- `vat-settle`        月末结转增值税
- `equity-paid-in`    实收资本与资本公积
- `surplus-reserve`   盈余公积计提
- `report-mapping`    报表项目归位
- `revenue-5step`     收入五步法 🔥
- `profit-carry`      本年利润结转 🔥
- `income-statement`  利润表勾稽

### 经济法篇
- `legal-act`         法律行为与代理
- `limitation`        诉讼时效 🔥
- `archive`           会计档案保管期限 🔥
- `accountant-job`    会计人员任职/回避
- `note-type`         票据种类
- `note-time`         票据权利时效 🔥
- `vat-rate`          增值税税率与征收率 🔥
- `excise`            消费税征收范围 🔥
- `cit-taxable`       企业所得税应纳税所得额
- `iit-comprehensive` 个税综合所得 🔥
- `iit-special`       个税专项附加扣除 🔥
- `property-tax`      房产税计算 🔥
- `stamp-tax`         印花税
- `tax-register`      税务登记与发票
- `tax-enforcement`   税收保全与强制执行
- `labor-probation`   劳动合同试用期 🔥
- `social-insurance`  五险一金缴费

## 数据 schema 示例
```js
{
  practice_id: 10001,            // 全局唯一，从 10001 起
  source_lesson_id: 7,           // 挂回原 lesson_id
  type: 'concept',               // 题型标签
  level: 'basic',                // 难度
  hot: ['petty-cash'],           // 高频考点（数组，可多个）
  interaction_type: 'single',    // 复用原渲染：single/multi/select/journal
  prompt: '...',
  options: [{ text:'...', is_correct:true }, ...],
  explain: '...',                // 解析（必填，不像原 error_hint 只在错时给）
  hot_label: '🔥 高频'            // UI 红标显示文案（可选）
}
```
