# _tools/ 目录说明

这里是 kj-learn 项目的开发辅助脚本，**不参与生产构建**，纯本地工具。

## build_practice.py — 练习题库增量生成器

### 它解决什么问题

v4 计划给原 40 课每课加 9 道扩展题，共 360 题。直接手写或用 AI 一次塞 360 题
都会撞上「单次输出长度限制」+「计算题数字易出错」两道墙。
此脚本把题目数据用紧凑的 Python 元组承载，一次生成一段 JS 对象，**安全增量追加**
到 `data/practice.js`，自动跳过已存在的 `practice_id`。

### 工作流

```bash
# 1. 编辑 _tools/build_practice.py，把新题元组追加到 QUESTIONS 列表
# 2. 运行
cd /path/to/kj-learn
python3 _tools/build_practice.py
# 3. 看输出，根据「未覆盖的课」「题数 < 9 的课」继续补
# 4. 浏览器打开 index.html 验证练习模式弹层显示正常
```

### 数据格式

详见 `build_practice.py` 头部 docstring。一个题目 = 一个 9 字段元组：

```python
(pid, lid, ttype, level, hot, itype, prompt, options, explain)
```

### 与 AI 助手协作的标准话术

下一轮想让 AI 继续填题时，照这个模板说：

> 按 `_tools/build_practice.py` 的格式给 lesson 4-8 填题，
> 每课 9 道（基础 3 + 进阶 4 + 真题级 2），
> 计算题先用 Python 算一遍数字再出选项，
> 标签从 data/TAGS.md 选合适的，
> 最后把 `QUESTIONS += [...]` 段落给我。

AI 给完一段后，你只要把那段 `QUESTIONS += [...]` 复制到脚本里，
跑一次 `python3 _tools/build_practice.py` 就能看到题数增长 + JS 自动更新。

### 当前进度（截至 2026-04-22）

- ✅ lesson 1-3 共 27 题（已在 git 中，pid 10001-10009 / 10011-10019 / 10021-10029）
- 🟡 lesson 4-40 共 333 题待填
- 📋 高频考点标签体系：`data/TAGS.md`

### 安全保证

脚本启动时会扫描现有 `data/practice.js` 的所有 `practice_id`，
任何重复 id 都会被跳过，**绝不会覆盖或破坏现有题目**。
即使误把同一段 `QUESTIONS += [...]` 跑了 100 次，结果也是一样的（幂等）。

## add_tags.py — 原 40 课 tag 字段补齐脚本

一次性脚本，已经在 v4 阶段执行过，给 `data/lessons.js` 的原 40 课每课加上了
`tags: { type, level, hot }` 字段。再次执行会幂等更新，不破坏数据。

## check_syntax.py — Python 语法快速校验

```bash
python3 _tools/check_syntax.py _tools/build_practice.py
```

发现 Python 语法错误时会精准报出错行和上下文。
