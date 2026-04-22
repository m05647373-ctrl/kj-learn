"""lesson 21-25 数字预算"""

print("=" * 60)
print("lesson 21: 报表项目归位（无计算，纯分类）")
print("=" * 60)
print("资产负债表：资产/负债/所有者权益（时点表）")
print("利润表：收入/费用/利润（期间表）")

print()
print("=" * 60)
print("lesson 22: 五步法收入分摊（按单独售价比例）")
print("=" * 60)
# 合同 50000，单独售价：设备 48000、维修 4000，分摊
total_contract = 50000
sp_eq, sp_svc = 48000, 4000
sum_sp = sp_eq + sp_svc
alloc_eq = total_contract * sp_eq / sum_sp
alloc_svc = total_contract * sp_svc / sum_sp
print(f"设备分摊 = 50000 × 48000/(48000+4000) = {alloc_eq:.2f}")
print(f"维修分摊 = 50000 × 4000/(48000+4000) = {alloc_svc:.2f}")

# 扩展题：组合A B C
print("\n--- 扩展场景 1：货物 + 安装服务 ---")
total = 100000
sp_g, sp_i = 90000, 30000  # 单售合计 120000
print(f"  货物分摊 = 100000 × 90000/120000 = {100000*90000/120000:.2f}")
print(f"  安装分摊 = 100000 × 30000/120000 = {100000*30000/120000:.2f}")

print("\n--- 扩展场景 2：商品 80% / 安装 20%（按比例） ---")
total = 200000
print(f"  商品 = {total*0.8}, 安装 = {total*0.2}")

print("\n--- 扩展场景 3：附 3 年质保的设备 ---")
total = 60000
sp_eq, sp_warranty = 55000, 5000
print(f"  设备 = 60000 × 55000/60000 = {60000*55000/60000:.2f}")
print(f"  质保 = 60000 × 5000/60000 = {60000*5000/60000:.2f}")

print("\n--- 扩展场景 4：分期收款销售商品（现值法） ---")
# 售价 100 万分 4 年收，每年末收 25 万，折现率 5%
# 现值 = 25*(1-1.05^-4)/0.05
pv = 25 * (1 - 1.05**-4) / 0.05
print(f"  4年分期年付25万，5%折现 → 现值 = {pv:.2f} 万")

print()
print("=" * 60)
print("lesson 23: 期末结转本年利润")
print("=" * 60)
# 主营收入500000、主营成本300000、管理费用80000、所得税30000
rev, cost, admin, tax = 500000, 300000, 80000, 30000
profit = rev - cost - admin - tax
print(f"本年利润 = 500000 - 300000 - 80000 - 30000 = {profit}")

# 扩展：含多种损益
print("\n--- 扩展 1：净利润计算 ---")
# 营业收入80万 营业成本50万 税金附加2万 销售费用5万 管理费用8万 财务费用3万
# 投资收益 5万 营业外收入 3万 所得税 2万
op_rev, op_cost = 800000, 500000
tax_sur = 20000
sell, mgmt, fin = 50000, 80000, 30000
inv_inc = 50000
non_op = 30000
inc_tax = 20000
op_profit = op_rev - op_cost - tax_sur - sell - mgmt - fin + inv_inc
total_profit = op_profit + non_op
net = total_profit - inc_tax
print(f"  营业利润 = 80-50-2-5-8-3+5 = {op_profit/10000} 万")
print(f"  利润总额 = 营业利润+营业外收入 = {total_profit/10000} 万")
print(f"  净利润 = 利润总额-所得税 = {net/10000} 万")

# 借方余额场景
print("\n--- 扩展 2：亏损情景 ---")
rev2, cost2, expense2 = 200000, 250000, 30000
loss = rev2 - cost2 - expense2
print(f"  收入20-成本25-费用3 = {loss}（借方余额，亏损）")

# 期末结转分录（简化）
print("\n--- 扩展 3：结转分录方向 ---")
print("  收入类（贷方余额）→ 借收入 贷本年利润")
print("  费用类（借方余额）→ 借本年利润 贷费用")

print()
print("=" * 60)
print("lesson 24: 利润表核心勾稽")
print("=" * 60)
# 营业收入1000、营业成本600、税金及附加20、三费合计150、营业外收入30
op_rev, op_cost, tax_sur, three_exp, non_op = 1000, 600, 20, 150, 30
op_profit = op_rev - op_cost - tax_sur - three_exp
total_profit = op_profit + non_op
print(f"  营业利润 = 1000-600-20-150 = {op_profit}")
print(f"  利润总额 = 营业利润+营业外收入 = {total_profit}")

# 扩展场景
print("\n--- 扩展 1：含投资收益和资产减值 ---")
# 营业收入500、营业成本300、税金10、销售20、管理30、研发15、财务8
# 投资收益 25、信用减值损失 12、资产处置收益 5
# 营业外收入 8、营业外支出 3
data = dict(rev=500, cost=300, tax=10, sell=20, mgmt=30, rd=15, fin=8,
            inv=25, credit_loss=12, dispose=5, non_in=8, non_out=3)
op = data['rev'] - data['cost'] - data['tax'] - data['sell'] - data['mgmt'] - data['rd'] - data['fin'] + data['inv'] - data['credit_loss'] + data['dispose']
tp = op + data['non_in'] - data['non_out']
print(f"  营业利润 = 500-300-10-20-30-15-8+25-12+5 = {op}")
print(f"  利润总额 = {op}+8-3 = {tp}")

print("\n--- 扩展 2：营业利润判定（不含营业外） ---")
print("  营业利润不含营业外收支，营业外收支只影响利润总额")

print("\n--- 扩展 3：所得税与净利润 ---")
# 利润总额 100，所得税率 25%，净利润 = 75
print(f"  利润总额 100，所得税率 25%，净利润 = 100×(1-0.25) = 75")

print()
print("=" * 60)
print("lesson 25: 法律行为与代理（无计算，纯法条记忆）")
print("=" * 60)
print("无效情形：①无民事行为能力人独立实施 ②虚假意思表示")
print("        ③违反强制性规定 ④违背公序良俗 ⑤恶意串通损害他人")
print("可撤销：①重大误解 ②欺诈 ③胁迫 ④显失公平")
print("效力待定：①限制民事行为能力人超出能力的行为")
print("        ②无权代理 ③无权处分")
print("诉讼时效：一般 3 年；最长 20 年；身体伤害/拒付租金 等特殊 1 年（旧）→现统一3年，最长20年")
