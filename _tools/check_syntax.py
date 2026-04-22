#!/usr/bin/env python3
import ast, sys
path = sys.argv[1] if len(sys.argv) > 1 else '_tools/build_practice.py'
with open(path) as f:
    src = f.read()
try:
    ast.parse(src)
    # 统计题目数
    ns = {}
    exec(src.split('# === RENDER')[0] if '# === RENDER' in src else src.replace("import os, sys", "").split('OUTPUT')[0] + 'QUESTIONS = []' if False else src, {'__name__': '__main__'})
    print(f'OK syntax pass')
except SyntaxError as e:
    print(f'SYNTAX ERROR line {e.lineno}: {e.msg}')
    lines = src.split(chr(10))
    if e.lineno:
        lo = max(0, e.lineno - 3)
        hi = min(len(lines), e.lineno + 2)
        for i in range(lo, hi):
            mark = '>>>' if (i + 1) == e.lineno else '   '
            print(f'  {mark} {i+1}: {lines[i]}')
except Exception as e:
    print(f'RUNTIME ERROR: {type(e).__name__}: {e}')
