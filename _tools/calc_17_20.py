#!/usr/bin/env python3
"""Lesson 17-20 计算题数字预算校验"""

print("=== Lesson 17: 应付职工薪酬——五险一金 ===")
# 题1: 计提工资分录金额
workshop_wage = 120_000
admin_wage = 60_000
sales_wage = 20_000
total_wage = workshop_wage + admin_wage + sales_wage
print(f"题1: 车间工资{workshop_wage:,}, 管理{admin_wage:,}, 销售{sales_wage:,}, 合计{total_wage:,}")

# 题2: 单位承担社保
pension_rate = 0.16
medical_rate = 0.08
unemploy_rate = 0.005
unit_rate = pension_rate + medical_rate + unemploy_rate
unit_social = total_wage * unit_rate
print(f"题2: 单位社保比例={unit_rate:.1%}, 单位社保={unit_social:,.0f}")

# 题3: 个人代扣
personal_pension = 0.08
personal_medical = 0.02
personal_unemploy = 0.005
personal_rate = personal_pension + personal_medical + personal_unemploy
personal_deduct = total_wage * personal_rate
actual_pay = total_wage - personal_deduct
print(f"题3: 个人代扣比例={personal_rate:.1%}, 代扣={personal_deduct:,.0f}, 实发={actual_pay:,.0f}")

# 题4: 非货币性福利
product_cost = 50_000
product_vat = product_cost * 0.13
product_total = product_cost + product_vat
print(f"题4: 自产产品发福利, 成本{product_cost:,}, 售价=成本, 增值税{product_vat:,.0f}, 应付职工薪酬={product_total:,.0f}")

print()
print("=== Lesson 18: 应交增值税——月末结转 ===")
# 题1: 应纳税额计算
sales_tax = 130_000
input_tax = 85_000
paid_tax = 20_000
due_tax = sales_tax - input_tax - paid_tax
print(f"题1: 销项{sales_tax:,}, 进项{input_tax:,}, 已交{paid_tax:,}, 应纳={sales_tax}-{input_tax}={sales_tax-input_tax:,}, 未交={sales_tax-input_tax}-{paid_tax}={due_tax:,}")

# 题2: 留抵税额
sales_tax2 = 50_000
input_tax2 = 65_000
carry_forward = input_tax2 - sales_tax2
print(f"题2: 销项{sales_tax2:,}, 进项{input_tax2:,}, 留抵={carry_forward:,}（不结转）")

# 题3: 进项税额转出
material_cost = 100_000
vat_transfer_out = material_cost * 0.13
print(f"题3: 非正常损失原材料成本{material_cost:,}, 进项税转出={vat_transfer_out:,.0f}")

# 题4: 视同销售
product_price = 200_000
product_vat4 = product_price * 0.13
print(f"题4: 自产产品对外捐赠, 售价{product_price:,}, 销项税={product_vat4:,.0f}")

# 题5: 综合月末结转
s5 = 260_000
i5 = 180_000
to5 = 13_000  # 转出
paid5 = 30_000
net5 = s5 + to5 - i5 - paid5
print(f"题5: 销项{s5:,}+转出{to5:,}-进项{i5:,}-已交{paid5:,}=未交{net5:,}")

print()
print("=== Lesson 19: 实收资本与资本公积 ===")
# 题1: 资本溢价
invest1 = 2_000_000
share1 = 1_500_000
premium1 = invest1 - share1
print(f"题1: 投入{invest1:,}, 份额{share1:,}, 资本公积={premium1:,}")

# 题2: 以固定资产出资
asset_value = 800_000
agreed_value = 750_000
share2 = 600_000
premium2 = agreed_value - share2
print(f"题2: 设备评估值{agreed_value:,}, 约定份额{share2:,}, 资本公积={premium2:,}")

# 题3: 资本公积转增资本
capital_reserve = 500_000
convert = 300_000
print(f"题3: 资本公积{capital_reserve:,}中转增资本{convert:,}, 实收资本增加{convert:,}、资本公积减少{convert:,}")

# 题4: 多股东出资
investor_a = 600_000
investor_b_equip = 450_000
share_a = 500_000
share_b = 500_000
premium_a = investor_a - share_a
premium_b = investor_b_equip - share_b
print(f"题4: A现金{investor_a:,}(份额{share_a:,},溢价{premium_a:,}), B设备{investor_b_equip:,}(份额{share_b:,},溢价{premium_b:,})")

print()
print("=== Lesson 20: 盈余公积的计提与用途 ===")
# 题1: 法定盈余公积
net_profit1 = 1_200_000
legal_reserve = net_profit1 * 0.10
print(f"题1: 净利润{net_profit1:,}, 法定盈余公积={legal_reserve:,.0f}")

# 题2: 法定+任意
net_profit2 = 500_000
legal2 = net_profit2 * 0.10
discretionary2 = net_profit2 * 0.05
total_reserve = legal2 + discretionary2
print(f"题2: 净利润{net_profit2:,}, 法定{legal2:,.0f}+任意{discretionary2:,.0f}={total_reserve:,.0f}")

# 题3: 盈余公积弥补亏损
loss = 300_000
surplus_before = 400_000
surplus_after = surplus_before - loss
print(f"题3: 弥补亏损{loss:,}, 盈余公积{surplus_before:,}→{surplus_after:,}")

# 题4: 盈余公积转增资本
surplus_convert = 200_000
print(f"题4: 盈余公积转增资本{surplus_convert:,}, 实收资本增加{surplus_convert:,}")

# 题5: 上限测试
registered = 5_000_000
accumulated = 2_400_000  # < 50%
net3 = 600_000
can_provide = net3 * 0.10
new_accumulated = accumulated + can_provide
limit = registered * 0.50
still_need = limit > new_accumulated
print(f"题5: 注册资本{registered:,}, 已提{accumulated:,}, 上限{limit:,.0f}, 本年净利{net3:,}")
print(f"  本年应提{can_provide:,.0f}, 提后累计{new_accumulated:,.0f}, {'未达上限继续提' if still_need else '已达上限可不提'}")

# 题6: 利润分配顺序
print(f"题6: 利润分配顺序概念题——弥补亏损→提法定→提任意→分配股利")
