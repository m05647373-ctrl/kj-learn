#!/usr/bin/env python3
"""Lesson 9-12 计算题数字预算校验"""

# === Lesson 9: 应收票据贴现 ===
print("=== Lesson 9: 应收票据贴现 ===")

# 题1: 基础贴现计算
face = 200_000; rate = 0.06; term_m = 6; hold_m = 1; disc_rate = 0.08
maturity = face * (1 + rate * term_m / 12)
disc_interest = maturity * disc_rate * (term_m - hold_m) / 12
proceeds = maturity - disc_interest
print(f"题1: 面值{face}, 票面利率{rate*100}%, 期限{term_m}月, 持有{hold_m}月后贴现")
print(f"  到期值 = {maturity:,.0f}, 贴现利息 = {disc_interest:,.0f}, 贴现所得 = {proceeds:,.0f}")

# 题2: 不带息票据贴现
face2 = 500_000; disc_rate2 = 0.09; remain_days = 90
disc_interest2 = face2 * disc_rate2 * remain_days / 360
proceeds2 = face2 - disc_interest2
print(f"题2: 不带息票据面值{face2}, 贴现率{disc_rate2*100}%, 剩余{remain_days}天")
print(f"  贴现利息 = {disc_interest2:,.0f}, 贴现所得 = {proceeds2:,.0f}")

# 题3: 带息票据到期值
face3 = 100_000; rate3 = 0.048; term3 = 6
mat3 = face3 * (1 + rate3 * term3 / 12)
print(f"题3: 面值{face3}, 利率{rate3*100}%, {term3}个月到期值 = {mat3:,.0f}")

# === Lesson 10: 购入原材料(一般纳税人) ===
print("\n=== Lesson 10: 购入原材料 ===")

# 题1: 含运费的采购成本
price = 80_000; vat = price * 0.13; freight = 2_000; freight_vat = freight * 0.09
total_cost = price + freight  # 运费计入成本（一般纳税人运费进项可抵）
total_vat = vat + freight_vat
total_pay = total_cost + total_vat - freight  # 实际原材料成本
print(f"题1: 材料价款{price}, 增值税{vat:.0f}, 运费{freight}(税率9%)")
print(f"  原材料入账 = {price} + {freight} = {price+freight}")
print(f"  进项税 = {vat:.0f} + {freight_vat:.0f} = {total_vat:.0f}")
print(f"  应付 = {price+freight+total_vat:.0f}")

# 题2: 小规模纳税人采购
price_s = 50_000; vat_s = price_s * 0.13
cost_s = price_s + vat_s  # 小规模价税合计入成本
print(f"题2: 小规模纳税人 价款{price_s}, 税额{vat_s:.0f}, 入账成本 = {cost_s:.0f}")

# 题3: 预付账款采购
prepay = 30_000; actual_price = 45_000; actual_vat = 45_000 * 0.13
balance = actual_price + actual_vat - prepay
print(f"题3: 预付{prepay}, 实际价款{actual_price}+税{actual_vat:.0f}={actual_price+actual_vat:.0f}, 补付{balance:.0f}")

# === Lesson 11: 存货发出——加权平均法 ===
print("\n=== Lesson 11: 存货发出 ===")

# 题1: 先进先出法
# 月初 200件@8, 5日购入 300件@9, 20日购入 100件@10, 发出 400件
batches = [(200, 8), (300, 9), (100, 10)]
fifo_cost = 200*8 + 200*9  # 先发月初200@8，再发5日购入200@9
print(f"题1 FIFO: 发出400件成本 = 200×8 + 200×9 = {fifo_cost}")

# 题2: 加权平均法（不同数据）
init_q, init_p = 150, 20
buy1_q, buy1_p = 250, 22
buy2_q, buy2_p = 100, 25
total_cost_inv = init_q*init_p + buy1_q*buy1_p + buy2_q*buy2_p
total_qty = init_q + buy1_q + buy2_q
avg_price = total_cost_inv / total_qty
issue_qty = 350
issue_cost = issue_qty * avg_price
remain_cost = total_cost_inv - issue_cost
print(f"题2 加权平均: 总成本{total_cost_inv}, 总数量{total_qty}, 均价{avg_price:.2f}")
print(f"  发出{issue_qty}件成本 = {issue_cost:.0f}, 结存 = {remain_cost:.0f}")

# 题3: 移动加权平均
# 月初 100件@10; 10日购 200件@11; 10日后发出 150件; 25日购 100件@12
cost_after_buy1 = 100*10 + 200*11  # = 3200
qty_after_buy1 = 300
avg1 = cost_after_buy1 / qty_after_buy1
cost_after_issue = (qty_after_buy1 - 150) * avg1  # 150件 × avg1
qty_after_issue = 150
cost_after_buy2 = qty_after_issue * avg1 + 100*12
qty_after_buy2 = 250
avg2 = cost_after_buy2 / qty_after_buy2
print(f"题3 移动加权: 第一次均价{avg1:.4f}, 发出150后结存成本{qty_after_issue*avg1:.2f}")
print(f"  第二次购入后总成本{cost_after_buy2:.2f}, 数量{qty_after_buy2}, 均价{avg2:.4f}")

# === Lesson 12: 拖一拖——购入存货分录 ===
print("\n=== Lesson 12: 拖拽题（概念为主，无复杂计算）===")
# 题中涉及的数字
print(f"采购: 原材料50,000 + 进项税6,500 = 应付56,500 （与课内一致）")
# 存货跌价准备
cost_inv2 = 100_000; nrv = 85_000; provision = cost_inv2 - nrv
print(f"存货跌价: 成本{cost_inv2}, 可变现净值{nrv}, 跌价准备{provision}")
# 已有跌价准备转回
old_provision = 20_000; new_nrv = 95_000; new_cost = 100_000
new_provision = new_cost - new_nrv
reversal = old_provision - new_provision
print(f"跌价转回: 旧准备{old_provision}, 新应提{new_provision}, 转回{reversal}")
