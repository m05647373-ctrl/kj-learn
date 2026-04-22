#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Lesson 21-24 计算题数字预算校验"""

print("=== Lesson 21: 报表项目归位 ===")
print("概念题为主，无计算")
items_balance = ['货币资金','应收账款','存货','应付账款','实收资本']
items_income  = ['主营业务收入','营业成本','销售费用','管理费用','营业利润']
print(f"资产负债表项目: {items_balance}")
print(f"利润表项目: {items_income}")

print()
print("=== Lesson 22: 五步法确认收入 ===")
total = 50000
price_device = 48000
price_service = 4000
total_standalone = price_device + price_service
rev_device = round(total * price_device / total_standalone, 0)
rev_service = round(total * price_service / total_standalone, 0)
print(f"题1: 合同总价{total}, 设备单独售价{price_device}, 维修{price_service}")
print(f"  设备收入 = {total} × {price_device}/{total_standalone} = {rev_device:.0f}")
print(f"  维修收入 = {total} × {price_service}/{total_standalone} = {rev_service:.0f}")

# 题2: 3个履约义务
total2 = 120000
p1, p2, p3 = 60000, 30000, 10000
t2 = p1+p2+p3
r1 = round(total2*p1/t2)
r2 = round(total2*p2/t2)
r3 = round(total2*p3/t2)
print(f"题2: 合同总价{total2}, 三项单独售价{p1}/{p2}/{p3}, 合计{t2}")
print(f"  分摊: {r1} / {r2} / {r3}, 合计={r1+r2+r3}")

# 题3: 时点vs时段
print("题3: 时点确认(商品控制权转移) vs 时段确认(建造合同/服务) — 概念题")

# 题4: 可变对价
base = 1000000
bonus = 200000
prob = 0.7
expected = base + bonus * prob
print(f"题4: 固定价款{base}+奖励{bonus}(70%概率), 期望交易价格={expected:.0f}")

print()
print("=== Lesson 23: 期末结转本年利润 ===")
rev = 500000
cost = 300000
mgmt = 80000
tax_exp = 30000
profit = rev - cost - mgmt - tax_exp
print(f"题1: 收入{rev}-成本{cost}-管理{mgmt}-所得税{tax_exp} = 本年利润{profit}")

rev2 = 800000; cost2 = 480000; sell2 = 60000; fin2 = 20000; other_exp2 = 40000
profit2 = rev2 - cost2 - sell2 - fin2 - other_exp2
print(f"题2: 收入{rev2}-成本{cost2}-销售{sell2}-财务{fin2}-营外支出{other_exp2} = {profit2}")

rev3 = 300000; cost3 = 180000; mgmt3 = 50000; tax3_exp = 14000
profit3 = rev3 - cost3 - mgmt3 - tax3_exp
print(f"题3: 收入{rev3}-成本{cost3}-管理{mgmt3}-所得税{tax3_exp} = {profit3}")

print()
print("=== Lesson 24: 利润表核心勾稽 ===")
# 营业利润 = 营业收入 - 营业成本 - 税金及附加 - 三费 + 其他收益 + 投资收益
rev_op = 2000000; cost_op = 1200000; tax_add = 40000; three_fees = 300000
other_income = 50000; invest_income = 30000
op_profit = rev_op - cost_op - tax_add - three_fees + other_income + invest_income
out_income = 60000; out_expense = 20000
total_profit = op_profit + out_income - out_expense
income_tax = round(total_profit * 0.25)
net_profit = total_profit - income_tax
print(f"题1: 营业收入{rev_op}-成本{cost_op}-税附{tax_add}-三费{three_fees}+其他{other_income}+投资{invest_income}")
print(f"  营业利润={op_profit}, 营外收入{out_income}-营外支出{out_expense}")
print(f"  利润总额={total_profit}, 所得税(25%)={income_tax}, 净利润={net_profit}")

# 题2: 营业利润倒推
rev_op2=1500000; cost_op2=900000; tax_add2=30000; three_fees2=200000; invest2=-20000
op_profit2 = rev_op2 - cost_op2 - tax_add2 - three_fees2 + invest2
print(f"题2: 营业利润={op_profit2}（含投资损失-{abs(invest2)}）")

# 题3: 净利润 vs 利润总额差额=所得税
total_profit3 = 400000; tax_rate3 = 0.25
income_tax3 = total_profit3 * tax_rate3
net3 = total_profit3 - income_tax3
print(f"题3: 利润总额{total_profit3} × 25% = 所得税{income_tax3}, 净利润={net3}")

# 题4: EPS概念题
print("题4: 每股收益=净利润/加权平均股数 — 概念题")
