/* ============================================================
 *  初级会计闯关 · 渲染与交互引擎
 * ============================================================
 *  依赖：window.LESSONS  （见 data/lessons.js）
 *  技术栈：原生 ES + localStorage，无外部依赖。
 * ============================================================ */

(function () {
  'use strict';

  const LS_KEY = 'kj_learn_state_v1';
  const lessons = window.LESSONS || [];

  /* ---------------- 状态管理 ---------------- */
  const defaultState = {
    currentId: 1,
    completed: {},        // { [lessonId]: true }
    errorBin: {},         // { [lessonId]: errorCount }
    sectionsCleared: {}   // { [sectionId]: true } 小节清算是否已完成
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return structuredClone(defaultState);
      const parsed = JSON.parse(raw);
      return Object.assign(structuredClone(defaultState), parsed);
    } catch (e) {
      return structuredClone(defaultState);
    }
  }
  function saveState() {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }
  let state = loadState();

  /* ---------------- DOM 引用 ---------------- */
  const $ = (sel) => document.querySelector(sel);
  const leftPane = $('#left-pane');
  const rightPane = $('#right-pane');
  const feedback = $('#feedback');
  const submitBtn = $('#submit-btn');
  const nextBtn = $('#next-btn');
  const progressFill = $('#progress-fill');
  const progressText = $('#progress-text');
  const sidebar = $('#sidebar');
  const sidebarBackdrop = $('#sidebar-backdrop');
  const sidebarToggle = $('#sidebar-toggle');
  const sidebarList = $('#sidebar-list');
  const resetBtn = $('#reset-btn');
  const modalBackdrop = $('#modal-backdrop');

  /* ---------------- 工具函数 ---------------- */
  function findLesson(id) {
    return lessons.find((l) => l.lesson_id === id);
  }
  function lessonsInSection(sec) {
    return lessons.filter((l) => l.section === sec);
  }
  function isUnlocked(id) {
    if (id === 1) return true;
    const prev = findLesson(id - 1);
    if (!prev) return false;
    if (!state.completed[id - 1]) return false;
    // 强制清算：若上一课是某节最后一课，必须该节 sectionsCleared 才解锁下一节
    const cur = findLesson(id);
    if (cur && prev.section !== cur.section) {
      if (!state.sectionsCleared[prev.section]) return false;
    }
    return true;
  }
  function recordError(id) {
    state.errorBin[id] = (state.errorBin[id] || 0) + 1;
    saveState();
  }
  function markDone(id) {
    state.completed[id] = true;
    saveState();
  }

  /* ---------------- 反馈显示 ---------------- */
  function showFeedback(type, text) {
    feedback.className = 'feedback show ' + type;
    feedback.textContent = text;
  }
  function clearFeedback() {
    feedback.className = 'feedback';
    feedback.textContent = '';
  }
  function shake(el) {
    el.classList.remove('shake');
    // 强制 reflow 以重启动画
    void el.offsetWidth;
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 400);
  }

  /* ============================================================
   *  渲染主课
   * ============================================================ */
  function renderLesson(id) {
    const lesson = findLesson(id);
    if (!lesson) {
      renderDoneScreen();
      return;
    }
    clearFeedback();
    nextBtn.hidden = true;
    submitBtn.hidden = false;
    submitBtn.disabled = false;
    submitBtn.textContent = '提交';

    state.currentId = id;
    saveState();

    /* ----- 左侧知识微粒 ----- */
    leftPane.innerHTML = `
      <div class="lesson-tag">第 ${lesson.lesson_id} 课 · ${escapeHtml(lesson.subject)}</div>
      <h1 class="lesson-title">${escapeHtml(lesson.title)}</h1>
      <div class="lesson-content">${escapeHtml(lesson.content)}</div>
      <div class="scenario-box">${escapeHtml(lesson.scenario)}</div>
      ${lesson.tip ? `<div class="tip-box">${escapeHtml(lesson.tip)}</div>` : ''}
    `;

    /* ----- 右侧交互区 ----- */
    rightPane.innerHTML = `
      <div class="sandbox-prompt">${escapeHtml(lesson.prompt)}</div>
      <div id="interact"></div>
    `;

    const interact = $('#interact');
    switch (lesson.interaction_type) {
      case 'select':
        renderSelect(interact, lesson);
        break;
      case 'single':
      case 'fill':
        renderSingle(interact, lesson);
        break;
      case 'multi':
        renderMulti(interact, lesson);
        break;
      case 'journal':
        renderJournal(interact, lesson);
        break;
      case 'drag':
        renderDrag(interact, lesson);
        break;
      default:
        interact.textContent = '未知题型：' + lesson.interaction_type;
    }

    updateSidebar();
    updateProgress();
  }

  /* ---- 题型 A：多选分类 ---- */
  function renderSelect(host, lesson) {
    const wrap = document.createElement('div');
    wrap.className = 'options';
    lesson.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.textContent = opt.text;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('locked')) return;
        btn.classList.toggle('selected');
      });
      wrap.appendChild(btn);
    });
    host.appendChild(wrap);

    submitBtn.onclick = () => {
      const picked = new Set(
        [...wrap.querySelectorAll('.opt.selected')].map((el) => +el.dataset.index)
      );
      let allGood = true;
      const marks = []; // {el, state}
      wrap.querySelectorAll('.opt').forEach((el) => {
        const i = +el.dataset.index;
        const should = lesson.options[i].is_correct;
        const isPicked = picked.has(i);
        let state = null;
        if (should && isPicked) state = 'correct';
        else if (!should && isPicked) { state = 'wrong'; allGood = false; }
        else if (should && !isPicked) { state = 'wrong'; allGood = false; }
        marks.push({ el, state, isPicked });
      });

      if (allGood) {
        // 答对：全部锁定 + 高亮正确
        marks.forEach(({ el, state }) => {
          el.classList.remove('selected', 'correct', 'wrong');
          el.classList.add('locked');
          if (state === 'correct') el.classList.add('correct');
        });
        handleResult(lesson, true);
      } else {
        // 答错：只给错的/漏的闪一下红色，不锁定，保留用户已选
        marks.forEach(({ el, state, isPicked }) => {
          if (state === 'wrong') {
            el.classList.add('wrong');
            if (isPicked) shake(el);
          }
        });
        // 0.8s 后移除红色高亮，保留原来的 selected 状态让用户继续修改
        setTimeout(() => {
          wrap.querySelectorAll('.opt.wrong').forEach((el) => el.classList.remove('wrong'));
        }, 800);
        handleResult(lesson, false);
      }
    };
  }

  /* ---- 题型 B：单选题 / 填空 ---- */
  function renderSingle(host, lesson) {
    const wrap = document.createElement('div');
    wrap.className = 'single-list';
    let selectedIndex = -1;
    lesson.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.textContent = opt.text;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('locked')) return;
        selectedIndex = i;
        wrap.querySelectorAll('.opt').forEach((el) => el.classList.remove('selected'));
        btn.classList.add('selected');
      });
      wrap.appendChild(btn);
    });
    host.appendChild(wrap);

    submitBtn.onclick = () => {
      if (selectedIndex < 0) {
        showFeedback('error', '请先选择一个选项。');
        shake(wrap);
        return;
      }
      const chosen = lesson.options[selectedIndex];
      if (chosen.is_correct) {
        // 答对：高亮正确，锁定，进下一课
        const correctIdx = lesson.options.findIndex((o) => o.is_correct);
        wrap.querySelectorAll('.opt').forEach((el) => {
          const i = +el.dataset.index;
          el.classList.remove('selected', 'correct', 'wrong');
          el.classList.add('locked');
          if (i === correctIdx) el.classList.add('correct');
        });
        handleResult(lesson, true);
      } else {
        // 答错：只把错选项标红抖动，保留其他可点击，允许再次选择
        const wrongBtn = wrap.querySelector(`.opt[data-index="${selectedIndex}"]`);
        wrongBtn.classList.remove('selected');
        wrongBtn.classList.add('wrong');
        shake(wrap);
        // 0.6s 后淡出红色，以便下次再选
        setTimeout(() => wrongBtn.classList.remove('wrong'), 800);
        handleResult(lesson, false);
        // 重置选中态，让用户重选
        selectedIndex = -1;
      }
    };
  }

  /* ---- 题型 B2：严格多选 / 不定项（考试风格） ----
   * 规则：必须选中集合与正确答案集合完全一致才算对；
   *       漏选、多选、错选均判错；
   *       错误时不提示具体是哪项错，只给整体 ✗，训练严谨习惯；
   *       机考模式下 handleResult 会吞掉 feedback 文本。
   */
  function renderMulti(host, lesson) {
    const wrap = document.createElement('div');
    wrap.className = 'options options-multi';
    const hint = document.createElement('div');
    hint.className = 'multi-hint muted';
    hint.textContent = '不定项选择：可选 0~N 项，全对才得分，漏选 / 错选均不得分。';
    wrap.appendChild(hint);

    lesson.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      const label = opt.label || String.fromCharCode(65 + i);
      btn.innerHTML = `<span class="opt-mark">${label}</span><span>${escapeHtml(opt.text)}</span>`;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('locked')) return;
        btn.classList.toggle('selected');
      });
      wrap.appendChild(btn);
    });
    host.appendChild(wrap);

    submitBtn.onclick = () => {
      const picked = [...wrap.querySelectorAll('.opt.selected')]
        .map((el) => +el.dataset.index)
        .sort((a, b) => a - b);
      const expect = lesson.options
        .map((o, i) => (o.is_correct ? i : -1))
        .filter((i) => i >= 0)
        .sort((a, b) => a - b);
      const allGood =
        picked.length === expect.length && picked.every((v, i) => v === expect[i]);

      if (allGood) {
        wrap.querySelectorAll('.opt').forEach((el) => {
          const i = +el.dataset.index;
          el.classList.remove('wrong');
          el.classList.add('locked');
          if (lesson.options[i].is_correct) el.classList.add('correct');
        });
        handleResult(lesson, true);
      } else {
        // 严格模式：不逐项提示对错，只给整体抖动 + 说明漏/错
        shake(wrap);
        setTimeout(() => {
          wrap.querySelectorAll('.opt.wrong').forEach((el) => el.classList.remove('wrong'));
        }, 600);
        handleResult(lesson, false);
      }
    };
  }

  /* ---- 题型 C：分录组装 ---- */
  function renderJournal(host, lesson) {
    const form = document.createElement('div');
    form.className = 'journal';
    lesson.slots.forEach((slot, idx) => {
      const row = document.createElement('div');
      row.className = 'slot';
      row.dataset.index = idx;
      const accountOpts = slot.account_options
        .map((a) => `<option value="${escapeHtml(a)}">${escapeHtml(a)}</option>`)
        .join('');
      row.innerHTML = `
        <div class="slot-side">${slot.side}</div>
        <select class="acc">
          <option value="">— 选择科目 —</option>
          ${accountOpts}
        </select>
        <input type="number" class="amt" placeholder="金额" />
      `;
      form.appendChild(row);
    });
    host.appendChild(form);

    submitBtn.onclick = () => {
      let allGood = true;
      let borrowSum = 0, creditSum = 0;
      const rows = form.querySelectorAll('.slot');
      rows.forEach((row, i) => {
        const slot = lesson.slots[i];
        const acc = row.querySelector('.acc').value;
        const amt = parseFloat(row.querySelector('.amt').value) || 0;
        row.classList.remove('correct', 'wrong');
        const ok = acc === slot.correct_account && Math.abs(amt - slot.correct_amount) < 0.001;
        if (ok) row.classList.add('correct');
        else { row.classList.add('wrong'); allGood = false; shake(row); }
        if (slot.side === '借') borrowSum += amt;
        else creditSum += amt;
      });
      // 借贷必须相等
      if (Math.abs(borrowSum - creditSum) > 0.001) allGood = false;
      if (!allGood) {
        // 错题时：0.8s 后褪掉红色背景，保留用户输入以便修改
        setTimeout(() => {
          form.querySelectorAll('.slot.wrong').forEach((r) => r.classList.remove('wrong'));
        }, 800);
      } else {
        // 全部正确：锁定下拉和输入
        rows.forEach((row) => {
          row.querySelector('.acc').disabled = true;
          row.querySelector('.amt').disabled = true;
        });
      }
      handleResult(lesson, allGood);
    };
  }

  /* ---- 题型 D：拖拽分栏 ----
   * 两种 schema：
   * ① 借/贷分录（旧）：lesson.answer = { debit:[...], credit:[...] }
   * ② 任意多栏分类（新）：lesson.zones = [{key,label}, ...]；
   *    lesson.answer = { [zoneKey]: [...items] }
   */
  function renderDrag(host, lesson) {
    const wrap = document.createElement('div');
    wrap.className = 'drag-board';
    const items = (lesson.items || []).slice();
    // 洗牌
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    // 归一化 zones：优先用 lesson.zones；否则退回旧版借/贷两栏
    const zones =
      Array.isArray(lesson.zones) && lesson.zones.length > 0
        ? lesson.zones
        : [
            { key: 'debit', label: '借方（Dr）' },
            { key: 'credit', label: '贷方（Cr）' }
          ];
    const poolLabel = lesson.pool_label || '待分配科目';

    const zonesHTML = zones
      .map(
        (z) => `
        <div class="drop-zone" data-zone="${z.key}">
          <div class="zone-label">${z.label}</div>
          <div class="zone-body" id="drag-${z.key}"></div>
        </div>`
      )
      .join('');
    // 栏数 > 2 时，网格列数 = 栏数（在窄屏下自动换行由 CSS 兜底）
    const gridStyle = zones.length > 2 ? ` style="grid-template-columns: repeat(${zones.length}, 1fr);"` : '';
    wrap.innerHTML = `
      <div class="drag-pool" data-zone="pool">
        <div class="zone-label">${poolLabel}</div>
        <div class="zone-body" id="drag-pool"></div>
      </div>
      <div class="drag-zones"${gridStyle}>${zonesHTML}</div>
    `;
    host.appendChild(wrap);

    const pool = wrap.querySelector('#drag-pool');
    // 循环切换顺序：pool → 各 zone → pool
    const cycleOrder = ['pool', ...zones.map((z) => z.key)];

    items.forEach((text) => {
      const chip = document.createElement('div');
      chip.className = 'drag-chip';
      chip.textContent = text;
      chip.draggable = true;
      chip.dataset.text = text;
      // 桌面端：HTML5 DnD
      chip.addEventListener('dragstart', (e) => {
        chip.classList.add('dragging');
        e.dataTransfer.setData('text/plain', text);
        e.dataTransfer.effectAllowed = 'move';
      });
      chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
      // 触屏 / 兼容：点击 chip 按 cycleOrder 循环切换
      chip.addEventListener('click', () => {
        const cur = chip.parentElement.id.replace('drag-', '');
        const idx = cycleOrder.indexOf(cur);
        const next = cycleOrder[(idx + 1) % cycleOrder.length];
        document.getElementById('drag-' + next).appendChild(chip);
      });
      pool.appendChild(chip);
    });

    wrap.querySelectorAll('.drop-zone, .drag-pool').forEach((zone) => {
      const body = zone.querySelector('.zone-body');
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('over');
      });
      zone.addEventListener('dragleave', () => zone.classList.remove('over'));
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('over');
        const text = e.dataTransfer.getData('text/plain');
        const chip = wrap.querySelector(`.drag-chip[data-text="${CSS.escape(text)}"]`);
        if (chip) body.appendChild(chip);
      });
    });

    submitBtn.onclick = () => {
      const inZone = (id) =>
        [...wrap.querySelectorAll('#' + id + ' .drag-chip')].map((c) => c.dataset.text);
      const pool2 = inZone('drag-pool');
      // 每个 zone 的正确答案集合
      const expectedByZone = {};
      zones.forEach((z) => {
        expectedByZone[z.key] = new Set((lesson.answer && lesson.answer[z.key]) || []);
      });
      // 反向索引：某词条应该属于哪个 zone（找不到 = null）
      const zoneFor = (text) => {
        for (const z of zones) {
          if (expectedByZone[z.key].has(text)) return z.key;
        }
        return null;
      };

      let allGood = pool2.length === 0;
      wrap.querySelectorAll('.drag-chip').forEach((chip) => {
        chip.classList.remove('correct', 'wrong');
        const t = chip.dataset.text;
        const cur = chip.parentElement.id.replace('drag-', '');
        const should = zoneFor(t);
        if (cur === should) chip.classList.add('correct');
        else {
          chip.classList.add('wrong');
          allGood = false;
          shake(chip);
        }
      });
      // 答对：锁定不可拖
      if (allGood) {
        wrap.querySelectorAll('.drag-chip').forEach((c) => {
          c.draggable = false;
          c.style.pointerEvents = 'none';
        });
      } else {
        // 答错：0.9s 后清除红色方便重排
        setTimeout(() => {
          wrap.querySelectorAll('.drag-chip.wrong').forEach((c) => c.classList.remove('wrong'));
        }, 900);
      }
      handleResult(lesson, allGood);
    };
  }

  /* ---- 提交后：处理结果 ---- */
  function handleResult(lesson, passed) {
    if (passed) {
      showFeedback('success', '✓ 正确！' + (lesson.tip ? '（' + lesson.tip + '）' : ''));
      markDone(lesson.lesson_id);
      submitBtn.hidden = true;
      nextBtn.hidden = false;
      // 小节清算触发判定
      maybeTriggerSectionSettle(lesson.section);
    } else {
      recordError(lesson.lesson_id);
      showFeedback('error', lesson.error_hint || '答案有误，再想想？');
      // 不阻止继续修改；保留提交按钮
    }
    updateProgress();
    updateSidebar();
  }

  /* ---- 下一课按钮 ---- */
  nextBtn.addEventListener('click', () => {
    const nextId = state.currentId + 1;
    renderLesson(nextId);
  });

  /* ============================================================
   *  错题清算 —— 每 5 课（小节末）触发
   * ============================================================ */
  function maybeTriggerSectionSettle(section) {
    const secLessons = lessonsInSection(section);
    const allDone = secLessons.every((l) => state.completed[l.lesson_id]);
    if (!allDone) return;
    if (state.sectionsCleared[section]) return;

    // 找出本节做错过的题
    const wrongIds = secLessons
      .map((l) => l.lesson_id)
      .filter((id) => (state.errorBin[id] || 0) > 0);

    if (wrongIds.length === 0) {
      // 强制清算通过条件：本小节错题箱必须为空
      state.sectionsCleared[section] = true;
      saveState();
      updateSidebar();
      return;
    }
    // 还有错题：不标记清算通过；下一节保持锁定
    state.sectionsCleared[section] = false;
    saveState();
    openSettleModal(section, wrongIds);
  }

  function openSettleModal(section, wrongIds) {
    const list = wrongIds
      .map((id) => {
        const l = findLesson(id);
        return `<li>第 ${id} 课：${escapeHtml(l.title)}（错 ${state.errorBin[id]} 次）</li>`;
      })
      .join('');
    modalBackdrop.innerHTML = `
      <div class="modal">
        <h2>🎯 错题清算 · 第 ${section} 节</h2>
        <p class="sub">本节 ${wrongIds.length} 道错题必须全部重做正确，才能进入下一节。未清零前，后续课程保持锁定。</p>
        <ul style="margin:12px 0 0; padding-left:20px; line-height:1.9;">${list}</ul>
        <div class="modal-footer">
          <button class="btn btn-primary" id="review-first">立即重做错题</button>
        </div>
      </div>
    `;
    modalBackdrop.classList.add('show');
    document.getElementById('review-first').onclick = () => {
      modalBackdrop.classList.remove('show');
      // 回到第一道错题；重置其完成态和错题计数，重做通过后才算清零
      const first = wrongIds[0];
      state.completed[first] = false;
      state.errorBin[first] = 0;
      saveState();
      renderLesson(first);
    };
  }

  /* ============================================================
   *  侧边课程列表 —— 按 subject + chapter 两级分组
   * ============================================================ */
  // 固定章节标题（与 data/lessons.js 对齐）
  const CHAPTER_NAMES = {
    '实务|1': '概述（会计基础）',
    '实务|2': '会计核算基础',
    '实务|3': '货币资金与往来',
    '实务|4': '存货',
    '实务|5': '固定资产与无形资产',
    '实务|6': '负债',
    '实务|7': '所有者权益',
    '实务|8': '收入、费用与利润',
    '经济法|1': '总论',
    '经济法|2': '会计法律制度',
    '经济法|3': '支付结算法律制度',
    '经济法|4': '增值税、消费税',
    '经济法|5': '企业所得税、个人所得税',
    '经济法|6': '其他税收法律制度',
    '经济法|7': '税收征收管理法律制度',
    '经济法|8': '劳动合同与社会保险法律制度'
  };

  function updateSidebar() {
    // 先按 subject 分，再按 section 分
    const subjects = { 实务: {}, 经济法: {} };
    lessons.forEach((l) => {
      const sub = subjects[l.subject];
      if (!sub[l.section]) sub[l.section] = { chapter: l.chapter, items: [] };
      sub[l.section].items.push(l);
    });

    const renderLessonsOfSection = (items) =>
      items
        .map((l) => {
          const done = !!state.completed[l.lesson_id];
          const unlocked = isUnlocked(l.lesson_id);
          const active = l.lesson_id === state.currentId;
          const cls = [
            'sidebar-item',
            done ? 'done' : '',
            active ? 'active' : '',
            !unlocked ? 'locked' : ''
          ].filter(Boolean).join(' ');
          return `
            <div class="${cls}" data-id="${l.lesson_id}">
              <div class="check"></div>
              <div>${l.lesson_id}. ${escapeHtml(l.title)}</div>
            </div>`;
        })
        .join('');

    const renderSubject = (name) => {
      const secMap = subjects[name];
      const secKeys = Object.keys(secMap).sort((a, b) => +a - +b);
      const body = secKeys
        .map((sec) => {
          const data = secMap[sec];
          const chapterName = CHAPTER_NAMES[name + '|' + data.chapter] || '';
          const cleared = !!state.sectionsCleared[sec];
          const hasErr = data.items.some((l) => (state.errorBin[l.lesson_id] || 0) > 0);
          const badge = cleared
            ? '<span class="sec-badge done">✓ 已清算</span>'
            : hasErr
            ? '<span class="sec-badge warn">待清算</span>'
            : '';
          return `
            <div class="section-head">第 ${data.chapter} 章 · ${escapeHtml(chapterName)} ${badge}</div>
            ${renderLessonsOfSection(data.items)}
          `;
        })
        .join('');
      return `<div class="subject-head">《${name}》</div>${body}`;
    };

    sidebarList.innerHTML = renderSubject('实务') + renderSubject('经济法');
    sidebarList.querySelectorAll('.sidebar-item').forEach((el) => {
      el.addEventListener('click', () => {
        const id = +el.dataset.id;
        if (!isUnlocked(id)) return;
        closeSidebar();
        renderLesson(id);
      });
    });
  }

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarBackdrop.classList.add('show');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('show');
  }
  sidebarToggle.addEventListener('click', openSidebar);
  sidebarBackdrop.addEventListener('click', closeSidebar);

  /* ---------------- 进度条 ---------------- */
  function updateProgress() {
    const total = lessons.length;
    const done = Object.values(state.completed).filter(Boolean).length;
    const pct = total === 0 ? 0 : (done / total) * 100;
    progressFill.style.width = pct + '%';
    progressText.textContent = `${done} / ${total}`;
  }

  /* ---------------- 完成屏 ---------------- */
  function renderDoneScreen() {
    leftPane.parentElement.innerHTML = `
      <div class="done-screen card" style="grid-column: 1 / -1;">
        <h1>🎉 全部通关</h1>
        <p>你已完成全部 ${lessons.length} 道微考点。继续保持，加油！</p>
        <button class="btn btn-ghost" id="restart-btn">从头再来一遍</button>
      </div>
    `;
    submitBtn.hidden = true;
    nextBtn.hidden = true;
    const btn = document.getElementById('restart-btn');
    if (btn) btn.addEventListener('click', () => {
      state = structuredClone(defaultState);
      saveState();
      location.reload();
    });
  }

  /* ---------------- 重置 ---------------- */
  resetBtn.addEventListener('click', () => {
    if (!confirm('确定要清除所有进度吗？')) return;
    state = structuredClone(defaultState);
    saveState();
    location.reload();
  });

  /* ---------------- 工具 ---------------- */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    // 如果当前课程已锁定（比如清空 localStorage 后 state 残留），回退到第 1 课
    const cur = findLesson(state.currentId);
    if (!cur || !isUnlocked(state.currentId)) {
      state.currentId = 1;
      saveState();
    }
    renderLesson(state.currentId);
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
