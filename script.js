/* ============================================================
   DATA — Questions bank, organised by category & difficulty
   ============================================================ */
const CATEGORIES = {
  webdev: {
    name: "Web Dev",
    fullName: "Web Development",
    icon: "fa-code",
    questions: {
      easy: [
        { q: "Which HTML tag is used for semantic navigation?",
          a: ["<nav>","<div>","<span>","<section>"], c: 0,
          exp: "<nav> is the semantic HTML5 element for navigation links." },
        { q: "CSS Flexbox is primarily used for?",
          a: ["One-dimensional layout","Database queries","Server logic","API calls"], c: 0,
          exp: "Flexbox handles layout in a single axis (row or column)." },
        { q: "The meta viewport tag is mainly used for?",
          a: ["SEO ranking","Responsive design","Script loading","Page title"], c: 1,
          exp: "It controls viewport scaling on mobile devices." },
        { q: "Which CSS unit is relative to the root font size?",
          a: ["rem","em","px","vh"], c: 0,
          exp: "rem is relative to the root <html> element font size." }
      ],
      medium: [
        { q: "CSS Grid is a __ layout system.",
          a: ["1D","2D","3D","No layout"], c: 1,
          exp: "CSS Grid handles both rows and columns simultaneously." },
        { q: "What does 'cascading' mean in CSS?",
          a: ["Styles inherit and override in order","Code runs top-to-bottom","Variables cascade downward","None of the above"], c: 0,
          exp: "Later rules override earlier ones; specificity determines priority." },
        { q: "Which HTTP method is idempotent AND safe?",
          a: ["GET","POST","PUT","PATCH"], c: 0,
          exp: "GET is safe (no side effects) and idempotent (same result each call)." },
        { q: "What does ARIA stand for in web accessibility?",
          a: ["Accessible Rich Internet Applications","Advanced React Interface API","Async Rendering Interface Architecture","None"], c: 0,
          exp: "ARIA provides semantic info to assistive technologies." }
      ],
      hard: [
        { q: "What is the stacking context in CSS?",
          a: ["A 3D rendering context that controls z-index","A font stack fallback list","A CSS grid area","A flexbox container"], c: 0,
          exp: "Stacking context is a self-contained z-order context for elements." },
        { q: "The Critical Rendering Path refers to?",
          a: ["Steps browser takes to render first pixel","The main CSS file path","The JavaScript execution order","None"], c: 0,
          exp: "It includes DOM + CSSOM construction, render tree, layout, and paint." },
        { q: "Content Security Policy (CSP) is used for?",
          a: ["Preventing XSS by controlling resource origins","Compressing static assets","SEO optimization","HTTP caching"], c: 0,
          exp: "CSP headers tell the browser which resources are trusted." },
        { q: "A Service Worker runs in?",
          a: ["Background thread, off main thread","The main JavaScript thread","The DOM thread","A web worker specific to DOM"], c: 0,
          exp: "Service Workers run in a separate worker context with no DOM access." }
      ]
    }
  },

  javascript: {
    name: "JavaScript",
    fullName: "JavaScript",
    icon: "fa-js",
    questions: {
      easy: [
        { q: "Which method parses a JSON string into an object?",
          a: ["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.toObj()"], c: 0,
          exp: "JSON.parse() deserializes a JSON string to a JS value." },
        { q: "What does the DOM stand for?",
          a: ["Document Object Model","Data Object Map","Document Operations Mode","None"], c: 0,
          exp: "DOM is the browser's object-based representation of HTML." },
        { q: "Which keyword declares a block-scoped variable?",
          a: ["let","var","global","define"], c: 0,
          exp: "let is block-scoped; var is function-scoped." },
        { q: "What does === check in JavaScript?",
          a: ["Value and type equality","Only value equality","Only type equality","Reference equality"], c: 0,
          exp: "=== is strict equality: both value and type must match." }
      ],
      medium: [
        { q: "A JavaScript Promise represents?",
          a: ["An eventual async value","A synchronous return","A loop construct","A var declaration"], c: 0,
          exp: "Promises wrap async operations, settling as resolved or rejected." },
        { q: "Closure means a function retains access to?",
          a: ["Its outer scope's variables","Only local variables","Global variables","None"], c: 0,
          exp: "A closure captures variables from its enclosing lexical scope." },
        { q: "What is event delegation?",
          a: ["Attaching one listener to a parent to handle child events","Delegating events to another file","Forwarding events via network","None"], c: 0,
          exp: "Delegation leverages event bubbling to reduce listener count." },
        { q: "Array.prototype.map() returns?",
          a: ["A new array","The same array mutated","A boolean","undefined"], c: 0,
          exp: "map() creates and returns a new array without mutating the original." }
      ],
      hard: [
        { q: "What is the JavaScript event loop responsible for?",
          a: ["Managing the call stack and callback queue","Handling HTTP requests","Running web workers","DOM manipulation"], c: 0,
          exp: "The event loop moves callbacks from the queue to the call stack when it's empty." },
        { q: "What does Object.freeze() do?",
          a: ["Makes an object immutable (shallow)","Deep clones an object","Deletes all object keys","Serializes to JSON"], c: 0,
          exp: "freeze() prevents adding/removing/changing properties (one level deep)." },
        { q: "Prototypal inheritance means?",
          a: ["Objects inherit directly from other objects","Classes extend other classes","Functions share scope","None"], c: 0,
          exp: "JS uses prototype chains; every object has a [[Prototype]] link." },
        { q: "WeakMap differs from Map because?",
          a: ["Keys are weakly held and can be garbage collected","It is faster","It supports string keys only","It has no .get() method"], c: 0,
          exp: "WeakMap keys must be objects; they don't prevent GC." }
      ]
    }
  },

  python: {
    name: "Python",
    fullName: "Python",
    icon: "fa-python",
    questions: {
      easy: [
        { q: "Which keyword defines a function in Python?",
          a: ["def","fun","function","lambda"], c: 0,
          exp: "def is the keyword for standard function definitions in Python." },
        { q: "Python is classified as?",
          a: ["Interpreted","Only compiled","Markup","Assembly"], c: 0,
          exp: "Python is interpreted at runtime by the CPython interpreter." },
        { q: "A Python tuple is?",
          a: ["Immutable","Mutable","A dictionary","A set"], c: 0,
          exp: "Tuples cannot be modified after creation; use lists for mutability." },
        { q: "Which symbol starts a comment in Python?",
          a: ["#","//","/* */","--"], c: 0,
          exp: "# starts a single-line comment in Python." }
      ],
      medium: [
        { q: "List comprehension [x*2 for x in range(3)] produces?",
          a: ["[0, 2, 4]","[2, 4, 6]","[0, 1, 2]","[1, 2, 3]"], c: 0,
          exp: "range(3) is 0,1,2; multiplied by 2 gives 0, 2, 4." },
        { q: "What does the 'self' parameter represent?",
          a: ["The current instance of the class","A global variable","A static method","None"], c: 0,
          exp: "self refers to the object on which the method is called." },
        { q: "Which built-in function returns an iterator of key-value pairs?",
          a: ["dict.items()","dict.pairs()","dict.entries()","dict.kv()"], c: 0,
          exp: ".items() returns a view of (key, value) tuples." },
        { q: "What is a Python decorator?",
          a: ["A function that wraps another function","A class attribute","An import alias","A lambda shorthand"], c: 0,
          exp: "Decorators modify or extend functions using the @syntax sugar." }
      ],
      hard: [
        { q: "The GIL (Global Interpreter Lock) in CPython?",
          a: ["Prevents true parallel thread execution","Speeds up multi-threading","Is present in PyPy","Handles memory allocation"], c: 0,
          exp: "The GIL ensures only one thread runs Python bytecode at a time." },
        { q: "__slots__ in a Python class is used to?",
          a: ["Restrict instance attributes and reduce memory","Enable multiple inheritance","Override __init__","Create class methods"], c: 0,
          exp: "__slots__ replaces per-instance __dict__ with a fixed set of attributes." },
        { q: "A generator function uses which keyword?",
          a: ["yield","return","async","await"], c: 0,
          exp: "yield turns a function into a generator that produces values lazily." },
        { q: "What is the time complexity of Python dict lookup?",
          a: ["O(1) average","O(n)","O(log n)","O(n²)"], c: 0,
          exp: "Dicts use hash tables; average lookup is O(1), worst-case O(n)." }
      ]
    }
  }
};

/* ============================================================
   STATE
   ============================================================ */
const State = {
  playerName: '',
  difficulty: 'easy',
  currentCategoryKey: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  answers: [],      // Track per-question results
  timings: [],      // Time taken per question (ms)
  questionStart: 0,
  timerInterval: null,
  timeLeft: 15,
  MAX_TIME: 15,
  CIRCUMFERENCE_TIMER: 2 * Math.PI * 22, // r=22 → ~138.2
};

/* ============================================================
   UTILITY HELPERS
   ============================================================ */
function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  el.classList.add('active');
  // Re-trigger animation
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = '';
}

function showToast(msg, type) {
  const t = document.getElementById('toastEl');
  t.textContent = msg;
  t.className = 'feedback-toast ' + type + ' show';
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => { t.classList.remove('show'); }, 1600);
}

/* ============================================================
   DIFFICULTY SELECTOR
   ============================================================ */
function selectDiff(btn) {
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  State.difficulty = btn.dataset.diff;
}

/* ============================================================
   START QUIZ — validate, show category screen
   ============================================================ */
function startQuiz() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    document.getElementById('nameInput').focus();
    document.getElementById('nameInput').style.borderColor = 'var(--red)';
    setTimeout(() => document.getElementById('nameInput').style.borderColor = '', 1200);
    return;
  }

  State.playerName = name;

  // Update quiz screen avatar
  document.getElementById('avatarEl').textContent = getInitials(name);
  document.getElementById('quizNameEl').textContent = name.length > 14 ? name.slice(0,13)+'…' : name;

  buildCategoryGrid();
  showScreen('categoryScreen');
}

/* ============================================================
   CATEGORY GRID
   ============================================================ */
function buildCategoryGrid() {
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';

  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const qs = cat.questions[State.difficulty] || cat.questions.easy;
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Start ${cat.fullName} quiz`);
    card.innerHTML = `
      <div class="cat-icon-wrap"><i class="fab ${cat.icon}"></i></div>
      <h3>${cat.name}</h3>
      <span class="q-count">${qs.length} questions</span>`;
    card.onclick = () => selectCategory(key);
    card.onkeydown = (e) => { if (e.key === 'Enter') selectCategory(key); };
    grid.appendChild(card);
  });
}

/* ============================================================
   SELECT CATEGORY — initialise quiz state and show quiz screen
   ============================================================ */
function selectCategory(key) {
  const cat = CATEGORIES[key];
  const qs  = cat.questions[State.difficulty] || cat.questions.easy;

  State.currentCategoryKey = key;
  State.questions  = qs.slice(); // shallow copy
  State.currentIndex = 0;
  State.score      = 0;
  State.answered   = false;
  State.answers    = new Array(qs.length).fill(null); // null = unanswered
  State.timings    = [];

  // Update UI labels
  document.getElementById('catNameLabel').textContent = cat.name;
  document.getElementById('badgeTxt').textContent = cat.name;
  document.getElementById('scoreLiveEl').textContent = 'Score: 0';

  buildDotNav();
  showScreen('quizScreen');
  loadQuestion();
}

/* ============================================================
   DOT NAVIGATION — small dots below quiz
   ============================================================ */
function buildDotNav() {
  const nav = document.getElementById('dotNav');
  nav.innerHTML = '';
  State.questions.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot' + (i === 0 ? ' current' : '');
    dot.id = `dot-${i}`;
    nav.appendChild(dot);
  });
}

function updateDots() {
  State.questions.forEach((_, i) => {
    const dot = document.getElementById(`dot-${i}`);
    dot.className = 'q-dot';
    if (i === State.currentIndex) {
      dot.classList.add('current');
    } else if (State.answers[i] !== null) {
      dot.classList.add(State.answers[i] ? 'done-correct' : 'done-wrong');
    }
  });
}

/* ============================================================
   TIMER — ring countdown
   ============================================================ */
function startTimer() {
  clearInterval(State.timerInterval);
  State.timeLeft = State.MAX_TIME;
  State.questionStart = Date.now();

  const numEl  = document.getElementById('timerNum');
  const ringEl = document.getElementById('timerRing');
  const circ   = State.CIRCUMFERENCE_TIMER;

  function updateRing() {
    const frac = State.timeLeft / State.MAX_TIME;
    ringEl.style.strokeDashoffset = circ * (1 - frac);

    // Colour warning
    if (State.timeLeft <= 5) {
      ringEl.style.stroke = 'var(--red)';
      numEl.style.color   = 'var(--red)';
    } else if (State.timeLeft <= 8) {
      ringEl.style.stroke = 'var(--amber)';
      numEl.style.color   = 'var(--amber)';
    } else {
      ringEl.style.stroke = 'var(--accent-1)';
      numEl.style.color   = 'var(--text-1)';
    }
    numEl.textContent = State.timeLeft;
  }

  updateRing();

  State.timerInterval = setInterval(() => {
    State.timeLeft--;
    updateRing();
    if (State.timeLeft <= 0) {
      clearInterval(State.timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(State.timerInterval);
  // Record timing
  const elapsed = (Date.now() - State.questionStart) / 1000;
  State.timings.push(Math.min(elapsed, State.MAX_TIME));
}

/* ============================================================
   LOAD QUESTION — render question + answers
   ============================================================ */
function loadQuestion() {
  State.answered = false;

  const q     = State.questions[State.currentIndex];
  const total = State.questions.length;

  // Progress bar
  const pct = ((State.currentIndex) / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progLabel').textContent =
    `Question ${State.currentIndex + 1} of ${total}`;

  // Question text
  document.getElementById('questionText').textContent = q.q;

  // Answers
  const wrap = document.getElementById('answersWrap');
  wrap.innerHTML = '';
  const letters = ['A','B','C','D'];

  q.a.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.setAttribute('aria-label', `Option ${letters[i]}: ${ans}`);
    btn.innerHTML = `
      <span class="answer-key">${letters[i]}</span>
      <span class="answer-text">${ans}</span>
      <i class="result-icon fas fa-check-circle"></i>`;

    // If already answered this question, restore state
    const prev = State.answers[State.currentIndex];
    if (prev !== null) {
      btn.disabled = true;
      if (i === q.c) btn.classList.add('correct');
      else if (i === prev && prev !== q.c) {
        btn.classList.add('wrong');
        btn.querySelector('.result-icon').className = 'result-icon fas fa-times-circle';
      }
    } else {
      btn.onclick = () => selectAnswer(i, btn);
    }

    wrap.appendChild(btn);
  });

  // Update prev/next buttons
  document.getElementById('prevBtn').disabled = State.currentIndex === 0;
  const isLast = State.currentIndex === total - 1;
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.innerHTML = isLast
    ? '<i class="fas fa-flag-checkered"></i>'
    : '<i class="fas fa-chevron-right"></i>';

  updateDots();

  // Only start timer if not already answered
  if (State.answers[State.currentIndex] === null) {
    startTimer();
  } else {
    clearInterval(State.timerInterval);
    // Reset ring to full
    document.getElementById('timerRing').style.strokeDashoffset = '0';
    document.getElementById('timerNum').textContent = '–';
    document.getElementById('timerRing').style.stroke = 'var(--text-3)';
    document.getElementById('timerNum').style.color = 'var(--text-3)';
  }
}

/* ============================================================
   SELECT ANSWER
   ============================================================ */
function selectAnswer(chosenIdx, clickedBtn) {
  if (State.answered) return;
  State.answered = true;
  stopTimer();

  const q       = State.questions[State.currentIndex];
  const correct = q.c;
  const isRight = chosenIdx === correct;

  // Record answer
  State.answers[State.currentIndex] = chosenIdx;
  if (isRight) State.score++;
  document.getElementById('scoreLiveEl').textContent = `Score: ${State.score}`;

  // Style all buttons
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    b.onclick  = null;
    if (i === correct) {
      b.classList.add('correct');
    } else if (i === chosenIdx) {
      b.classList.add('wrong');
      b.querySelector('.result-icon').className = 'result-icon fas fa-times-circle';
    }
  });

  // Toast feedback
  if (isRight) {
    showToast('✓ Correct!', 'correct-toast');
  } else {
    showToast('✗ Incorrect — ' + q.a[correct], 'wrong-toast');
  }

  updateDots();

  // Auto-advance on last question after delay
  const isLast = State.currentIndex === State.questions.length - 1;
  if (!isLast) {
    setTimeout(() => {
      if (State.currentIndex < State.questions.length - 1) nextQuestion();
    }, 1200);
  }
}

/* ============================================================
   TIMEOUT HANDLER
   ============================================================ */
function handleTimeout() {
  if (State.answered) return;
  State.answered = true;

  const q       = State.questions[State.currentIndex];
  const correct = q.c;

  State.answers[State.currentIndex] = -1; // -1 = timeout
  State.timings.push(State.MAX_TIME);

  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    b.onclick  = null;
    if (i === correct) b.classList.add('correct');
  });

  showToast('⏱ Time\'s up!', 'timeout-toast');
  updateDots();

  const isLast = State.currentIndex === State.questions.length - 1;
  if (!isLast) {
    setTimeout(nextQuestion, 1200);
  }
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function nextQuestion() {
  // If current not answered, warn
  if (State.answers[State.currentIndex] === null) {
    showToast('⚠ Please answer first', 'timeout-toast');
    return;
  }

  if (State.currentIndex < State.questions.length - 1) {
    State.currentIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (State.currentIndex > 0) {
    clearInterval(State.timerInterval);
    State.currentIndex--;
    loadQuestion();
  }
}

/* ============================================================
   RESULT SCREEN
   ============================================================ */
function showResult() {
  clearInterval(State.timerInterval);
  showScreen('resultScreen');

  const total   = State.questions.length;
  const score   = State.score;
  const percent = (score / total) * 100;
  const wrong   = State.answers.filter(a => a !== null && a !== -1 && State.questions[State.answers.indexOf(a)]?.c !== a).length;
  const incorrectCount = total - score;

  // Average timing
  const avgTime = State.timings.length
    ? Math.round(State.timings.reduce((s,v) => s+v, 0) / State.timings.length)
    : '—';

  // Update ring (animate)
  const CIRC = 2 * Math.PI * 55;
  const ring  = document.getElementById('scoreRing');
  ring.style.strokeDasharray  = CIRC;
  ring.style.strokeDashoffset = CIRC;

  // Color ring by score
  let ringColor = percent >= 75 ? '#34d399' : percent >= 50 ? '#38bdf8' : percent >= 25 ? '#fbbf24' : '#f87171';
  ring.style.stroke = ringColor;

  // Trigger animation (deferred so transition runs)
  requestAnimationFrame(() => {
    ring.style.strokeDashoffset = CIRC * (1 - percent / 100);
  });

  // Counts + timing
  document.getElementById('scoreNum').textContent = score;
  document.getElementById('scoreDen').textContent = `/ ${total}`;
  document.getElementById('resCorrect').textContent = score;
  document.getElementById('resWrong').textContent   = incorrectCount;
  document.getElementById('resTime').textContent    = avgTime + 's';

  // Performance text + medal
  let perfClass, perfText, medal, title, subtitle;
  if (percent >= 85) {
    perfClass = 'perf-excellent'; perfText = '🏆 Excellent Performance';
    medal = '🥇'; title = 'Outstanding!'; subtitle = `You nailed ${score}/${total} — a brilliant result!`;
  } else if (percent >= 70) {
    perfClass = 'perf-good'; perfText = '⭐ Very Good';
    medal = '🥈'; title = 'Great Job!'; subtitle = `${score}/${total} — you're getting there!`;
  } else if (percent >= 50) {
    perfClass = 'perf-average'; perfText = '📈 Average';
    medal = '🥉'; title = 'Not Bad!'; subtitle = `${score}/${total} — room to grow. Keep practising!`;
  } else {
    perfClass = 'perf-bad'; perfText = '📚 Needs Improvement';
    medal = '💡'; title = 'Keep Going!'; subtitle = `${score}/${total} — review the answers and try again!`;
  }

  document.getElementById('medalEl').textContent     = medal;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultSub').textContent   = subtitle;

  const badge = document.getElementById('perfBadge');
  badge.className = 'perf-badge ' + perfClass;
  badge.innerHTML = `<i class="fas fa-trophy"></i> ${perfText}`;

  // Review list
  buildReview();
}

/* ============================================================
   REVIEW — per-question answer review
   ============================================================ */
function buildReview() {
  const list = document.getElementById('reviewList');
  list.innerHTML = '';

  State.questions.forEach((q, i) => {
    const userAns = State.answers[i];
    const correct = userAns === q.c;
    const timedOut = userAns === -1;

    const item = document.createElement('div');
    item.className = 'review-item';

    const icon = timedOut ? '⏱' : correct ? '✅' : '❌';
    const userText = timedOut ? 'Timed out'
      : userAns !== null ? q.a[userAns] : 'Not answered';
    const correctText = q.a[q.c];

    item.innerHTML = `
      <span class="review-icon">${icon}</span>
      <div>
        <div class="review-q">${i+1}. ${q.q}</div>
        <div class="review-a">
          Your answer: <span style="color:${timedOut?'var(--amber)':correct?'var(--green)':'var(--red)'}">${userText}</span>
          ${!correct ? ` · Correct: <span style="color:var(--green)">${correctText}</span>` : ''}
        </div>
        <div class="review-a" style="color:var(--text-3); margin-top:2px; font-size:11px">${q.exp || ''}</div>
      </div>`;
    list.appendChild(item);
  });
}

function toggleReview(btn) {
  const list    = document.getElementById('reviewList');
  const chevron = document.getElementById('reviewChevron');
  const open    = list.classList.toggle('open');
  chevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0)';
}

/* ============================================================
   HOME / RESTART
   ============================================================ */
function goHome() {
  clearInterval(State.timerInterval);
  document.getElementById('nameInput').value = State.playerName;
  showScreen('loginScreen');
}

function restartSame() {
  clearInterval(State.timerInterval);
  selectCategory(State.currentCategoryKey);
}

/* ============================================================
   KEYBOARD — Enter key on login to start
   ============================================================ */
document.getElementById('nameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startQuiz();
});
