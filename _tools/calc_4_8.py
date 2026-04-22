#!/usr/bin/env python3
"""Lesson 4-8 计算题数字预算"""

# === Lesson 8: 应收账款与坏账准备 ===
# 原题：应收 500,000 × 2% = 10,000，已有 4,000，补提 6,000

# 练习题 1：基础补提
ar1 = 200_000; rate1 = 0.05; existing1 = 3_000
target1 = ar1 * rate1
supplement1 = target1 - existing1
print(f"练习1: 应收{ar1:,} × {rate1:.0%} = {target1:,.0f}, 已有{existing1:,}, 补提{supplement1:,.0f}")

# 练习题 2：已有余额 > 应有余额（冲回）
ar2 = 300_000; rate2 = 0.03; existing2 = 12_000
target2 = ar2 * rate2
diff2 = target2 - existing2  # 负数=冲回
print(f"练习2: 应收{ar2:,} × {rate2:.0%} = {target2:,.0f}, 已有{existing2:,}, 差额{diff2:,.0f}（冲回{-diff2:,.0f}）")

# 练习题 3：首次计提（无已有余额）
ar3 = 800_000; rate3 = 0.02
target3 = ar3 * rate3
print(f"练习3: 应收{ar3:,} × {rate3:.0%} = {target3:,.0f}（首次计提）")

# 练习题 4：坏账准备已有借方余额（已核销坏账导致借方余额）
ar4 = 400_000; rate4 = 0.05; existing4_debit = 5_000
target4 = ar4 * rate4
supplement4 = target4 + existing4_debit  # 借方余额要加上
print(f"练习4: 应收{ar4:,} × {rate4:.0%} = {target4:,.0f}, 借方余额{existing4_debit:,}, 补提{supplement4:,.0f}")

# === Lesson 4: 借贷记账法 - 分录金额验证 ===
# 场景：赊购原材料 50,000，增值税 6,500
mat = 50_000; vat = mat * 0.13
total = mat + vat
print(f"\nLesson4-赊购: 原材料{mat:,} + 增值税{vat:,.0f} = 应付{total:,.0f}")

# 场景：用银行存款支付工资 80,000
print(f"Lesson4-工资: 应付职工薪酬 80,000 / 银行存款 80,000")

# === Lesson 7: 备用金计算 ===
# 场景：定额备用金 2,000，实际支出 1,800，报销补足
petty = 2_000; spent = 1_800; replenish = spent
print(f"\nLesson7-备用金: 定额{petty:,}, 支出{spent:,}, 补足{replenish:,}")

# 场景：库存现金限额 5,000，实际 12,000
limit = 5_000; actual = 12_000; deposit = actual - limit
print(f"Lesson7-限额: 限额{limit:,}, 实际{actual:,}, 需存入银行{deposit:,}")
