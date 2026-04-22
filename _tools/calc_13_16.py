#!/usr/bin/env python3
"""Lesson 13-16 计算题数字预算"""

print("=== Lesson 13: 固定资产折旧——年限平均法 ===")

# 题1: 基础年限平均法
cost1, res1, life1 = 240_000, 12_000, 10
annual1 = (cost1 - res1) / life1
monthly1 = annual1 / 12
print(f"题1: 原值{cost1}, 残值{res1}, {life1}年")
print(f"  年折旧={annual1:,.0f}, 月折旧={monthly1:,.0f}")

# 题2: 5月购入，当年折旧几个月？6-12=7个月
cost2, res2, life2 = 360_000, 36_000, 8
annual2 = (cost2 - res2) / life2
monthly2 = annual2 / 12
months2 = 7  # 5月购入，6-12月
year_dep2 = monthly2 * months2
print(f"题2: 原值{cost2}, 残值{res2}, {life2}年, 5月购入")
print(f"  年折旧={annual2:,.0f}, 月折旧={monthly2:,.2f}, 当年{months2}个月={year_dep2:,.2f}")

# 题3: 10月处置(卖出)，当年折旧几个月？1-10=10个月（当月照提）
cost3, res3, life3 = 150_000, 6_000, 6
annual3 = (cost3 - res3) / life3
monthly3 = annual3 / 12
months3 = 10  # 10月处置，当月照提，1-10共10月
year_dep3 = monthly3 * months3
print(f"题3: 原值{cost3}, 残值{res3}, {life3}年, 10月处置")
print(f"  年折旧={annual3:,.0f}, 月折旧={monthly3:,.0f}, 当年{months3}个月={year_dep3:,.0f}")

# 题4: 已用3年净值计算
cost4, res4, life4 = 500_000, 20_000, 10
annual4 = (cost4 - res4) / life4
accum4 = annual4 * 3
net4 = cost4 - accum4
print(f"题4: 原值{cost4}, 残值{res4}, {life4}年, 已用3年")
print(f"  年折旧={annual4:,.0f}, 累计折旧={accum4:,.0f}, 净值={net4:,.0f}")

print()
print("=== Lesson 14: 双倍余额递减法 ===")

# 题1: 课内同参数，验证第3年
cost_d, res_d, life_d = 100_000, 4_000, 5
rate_d = 2 / life_d
y1 = cost_d * rate_d
y2 = (cost_d - y1) * rate_d
y3 = (cost_d - y1 - y2) * rate_d
remaining = cost_d - y1 - y2 - y3 - res_d
y4 = y5 = remaining / 2
print(f"双倍余额递减: 原值{cost_d}, 残值{res_d}, {life_d}年, 折旧率{rate_d:.0%}")
print(f"  Y1={y1:,.0f}, Y2={y2:,.0f}, Y3={y3:,.0f}")
print(f"  最后两年各={y4:,.0f}")

# 题2: 不同参数
cost_d2, res_d2, life_d2 = 200_000, 10_000, 8
rate_d2 = 2 / life_d2
vals = []
nb = cost_d2
for i in range(1, life_d2 - 1):  # 前6年
    dep = nb * rate_d2
    vals.append(dep)
    nb -= dep
# 最后两年
last2 = (nb - res_d2) / 2
vals.append(last2)
vals.append(last2)
print(f"\n题2: 原值{cost_d2}, 残值{res_d2}, {life_d2}年, 折旧率{rate_d2:.0%}")
for i, v in enumerate(vals, 1):
    print(f"  Y{i}={v:,.2f}")

# 题3: 年数总和法（对比题）
cost_s, res_s, life_s = 120_000, 12_000, 5
depreciable = cost_s - res_s
total = sum(range(1, life_s + 1))  # 15
for yr in range(1, life_s + 1):
    frac = (life_s + 1 - yr) / total
    dep = depreciable * frac
    print(f"  年数总和法 Y{yr}: {life_s+1-yr}/{total} × {depreciable:,} = {dep:,.0f}")

print()
print("=== Lesson 15: 无形资产摊销 ===")

# 题1: 基础月摊
cost_i = 480_000
life_i = 10
monthly_i = cost_i / life_i / 12
print(f"题1: 无形资产{cost_i:,}, {life_i}年, 月摊销={monthly_i:,.0f}")

# 题2: 7月购入当年摊销
cost_i2 = 240_000
life_i2 = 10
monthly_i2 = cost_i2 / life_i2 / 12
months_i2 = 6  # 7月购入，当月开始摊，7-12=6个月
year_amort = monthly_i2 * months_i2
print(f"题2: 无形资产{cost_i2:,}, {life_i2}年, 7月购入")
print(f"  月摊销={monthly_i2:,.0f}, 当年{months_i2}个月={year_amort:,.0f}")

# 题3: 出租的无形资产摊销
cost_i3 = 600_000
life_i3 = 10
annual_i3 = cost_i3 / life_i3
print(f"题3: 出租无形资产{cost_i3:,}, {life_i3}年, 年摊销={annual_i3:,.0f}")
print(f"  科目：借「其他业务成本」贷「累计摊销」")

# 题4: 减值后摊销
cost_i4 = 500_000
life_i4_orig = 10
used_years = 3
accum_amort = cost_i4 / life_i4_orig * used_years
book_before = cost_i4 - accum_amort
impairment = 50_000
book_after = book_before - impairment
remain_years = 5  # 剩余使用年限调整为5年
new_annual = book_after / remain_years
print(f"题4: 原值{cost_i4:,}, 原{life_i4_orig}年, 已用{used_years}年")
print(f"  累计摊销={accum_amort:,.0f}, 减值前账面={book_before:,.0f}")
print(f"  减值{impairment:,.0f}, 减值后={book_after:,.0f}")
print(f"  剩余{remain_years}年, 新年摊销={new_annual:,.0f}")

print()
print("=== Lesson 16: 短期借款与利息处理 ===")

# 题1: 季度计提利息
principal1, rate1 = 600_000, 0.06
quarterly1 = principal1 * rate1 * 3 / 12
print(f"题1: 借款{principal1:,}, 利率{rate1:.0%}, 季度利息={quarterly1:,.0f}")

# 题2: 月计提利息
principal2, rate2 = 1_000_000, 0.048
monthly2 = principal2 * rate2 / 12
print(f"题2: 借款{principal2:,}, 利率{rate2:.1%}, 月利息={monthly2:,.0f}")

# 题3: 到期还本付息总额
principal3, rate3, months3 = 800_000, 0.06, 9
total_interest3 = principal3 * rate3 * months3 / 12
total_pay3 = principal3 + total_interest3
print(f"题3: 借款{principal3:,}, 利率{rate3:.0%}, {months3}个月")
print(f"  总利息={total_interest3:,.0f}, 到期还本付息={total_pay3:,.0f}")

# 题4: 半年计提
principal4, rate4 = 2_000_000, 0.054
half_year4 = principal4 * rate4 * 6 / 12
print(f"题4: 借款{principal4:,}, 利率{rate4:.1%}, 半年利息={half_year4:,.0f}")
