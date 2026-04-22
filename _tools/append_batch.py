#!/usr/bin/env python3
"""
把 batch 文件内容追加到 practice.js 的 window.PRACTICE.push(...) 参数列表末尾。
用法：python3 _tools/append_batch.py <batch_file>
batch 文件里写若干 JS 对象字面量（以逗号分隔、末尾可有逗号），不含外层 push 包裹。
"""
import sys, pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
target = root / 'data' / 'practice.js'
batch_file = root / sys.argv[1]

src = target.read_text(encoding='utf-8')
batch = batch_file.read_text(encoding='utf-8').strip()
if batch.endswith(','):
    batch = batch[:-1]

# 把末尾的 `\n);\n` 替换为 `,\n<batch>\n);\n`
pattern = re.compile(r'\n\);\s*$', re.S)
if not pattern.search(src):
    print('ERROR: 找不到末尾 );', file=sys.stderr); sys.exit(1)

new = pattern.sub(f',\n{batch}\n);\n', src)
target.write_text(new, encoding='utf-8')
print(f'✅ 已追加 {batch_file.name} 到 practice.js')
