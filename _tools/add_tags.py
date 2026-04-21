"""为 lessons.js 的 40 课原始数据追加 tags 字段。
策略：在每个 `interaction_type: 'xxx',` 行下方插入一行
       `    tags: { type:'...', level:'...', hot:[...] },`
仅在没有 tags 字段的 lesson 中插入，幂等。
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LESSONS = ROOT / "data" / "lessons.js"

# lesson_id -> (type, level, hot[])
TAGS = {
    1:  ('concept',       'basic',   ['six-elements']),
    2:  ('comprehensive', 'improve', ['six-elements']),
    3:  ('concept',       'basic',   ['six-elements','borrow-credit']),
    4:  ('journal',       'basic',   ['borrow-credit']),
    5:  ('concept',       'improve', ['borrow-credit']),
    6:  ('journal',       'basic',   ['borrow-credit']),
    7:  ('law',           'basic',   ['petty-cash']),
    8:  ('calc',          'improve', ['bad-debt']),
    9:  ('concept',       'improve', ['note-discount']),
    10: ('journal',       'improve', ['vat-input']),
    11: ('calc',          'improve', ['inventory-avg']),
    12: ('journal',       'basic',   ['vat-input']),
    13: ('calc',          'improve', ['depreciation-sl']),
    14: ('calc',          'exam',    ['depreciation-ddb']),
    15: ('journal',       'improve', ['intangible-amort']),
    16: ('journal',       'improve', ['short-loan']),
    17: ('calc',          'improve', ['payroll']),
    18: ('calc',          'improve', ['vat-settle']),
    19: ('journal',       'improve', ['equity-paid-in']),
    20: ('calc',          'basic',   ['surplus-reserve']),
    21: ('concept',       'basic',   ['report-mapping']),
    22: ('concept',       'improve', ['revenue-5step']),
    23: ('journal',       'basic',   ['profit-carry']),
    24: ('concept',       'improve', ['income-statement']),
    25: ('law',           'basic',   ['legal-act']),
    26: ('law',           'improve', ['limitation']),
    27: ('law',           'basic',   ['archive']),
    28: ('law',           'basic',   ['accountant-job']),
    29: ('concept',       'basic',   ['note-type']),
    30: ('law',           'improve', ['note-time']),
    31: ('law',           'basic',   ['vat-rate']),
    32: ('concept',       'basic',   ['excise']),
    33: ('calc',          'improve', ['cit-taxable']),
    34: ('calc',          'improve', ['iit-comprehensive']),
    35: ('calc',          'exam',    ['property-tax']),
    36: ('concept',       'basic',   ['stamp-tax']),
    37: ('law',           'basic',   ['tax-register']),
    38: ('law',           'improve', ['tax-enforcement']),
    39: ('law',           'basic',   ['labor-probation']),
    40: ('law',           'basic',   ['social-insurance']),
}

src = LESSONS.read_text(encoding='utf-8')

# 把每个 lesson 块切出来：以 `lesson_id: N,` 起，到下一个 `lesson_id:` 或结尾止
pattern = re.compile(r"(lesson_id:\s*(\d+)\s*,)")
matches = list(pattern.finditer(src))
inserts = []  # (offset, text_to_insert)

for i, m in enumerate(matches):
    lid = int(m.group(2))
    start = m.start()
    end = matches[i+1].start() if i+1 < len(matches) else len(src)
    block = src[start:end]
    if 'tags:' in block:
        continue  # 已有，跳过
    if lid not in TAGS:
        continue
    type_, level, hot = TAGS[lid]
    hot_js = '[' + ', '.join(f"'{h}'" for h in hot) + ']'
    tag_line = f"    tags: {{ type: '{type_}', level: '{level}', hot: {hot_js} }},\n"
    # 在该 lesson 块内找 `interaction_type:` 那一整行的换行符位置，插在它后面
    it_match = re.search(r"interaction_type:\s*'[^']+',\s*\n", block)
    if not it_match:
        print(f"[skip] lesson {lid}: 找不到 interaction_type 行")
        continue
    insert_pos = start + it_match.end()
    inserts.append((insert_pos, tag_line))

# 从后往前插入，避免位移
inserts.sort(reverse=True)
new_src = src
for pos, txt in inserts:
    new_src = new_src[:pos] + txt + new_src[pos:]

LESSONS.write_text(new_src, encoding='utf-8')
print(f"已为 {len(inserts)} 个 lesson 追加 tags 字段")
