// ── WORD BANK ──────────────────────────────────────────────────
const WORDS = [
  { w: "cat", p: "/kæt/", d: "A small domesticated carnivorous mammal." },
  { w: "dog", p: "/dɒɡ/", d: "A domesticated carnivore kept as a pet or working animal." },
  { w: "sun", p: "/sʌn/", d: "The star at the centre of the solar system." },
  { w: "moon", p: "/muːn/", d: "The natural satellite of the Earth." },
  { w: "fire", p: "/faɪər/", d: "Combustion producing heat and light." },
  { w: "tree", p: "/triː/", d: "A tall perennial plant with a trunk and branches." },
  { w: "book", p: "/bʊk/", d: "A written or printed work on pages bound together." },
  { w: "rain", p: "/reɪn/", d: "Water falling from clouds in drops." },
  { w: "wind", p: "/wɪnd/", d: "The natural movement of air." },
  { w: "star", p: "/stɑːr/", d: "A luminous point visible in the night sky." },
  { w: "apple", p: "/ˈæp.əl/", d: "A round fruit, typically red or green." },
  { w: "chair", p: "/tʃeər/", d: "A separate seat for one person." },
  { w: "house", p: "/haʊs/", d: "A building for human habitation." },
  { w: "light", p: "/laɪt/", d: "Electromagnetic radiation visible to the human eye." },
  { w: "heart", p: "/hɑːrt/", d: "A hollow muscular organ that pumps blood." },
  { w: "blood", p: "/blʌd/", d: "Red liquid circulating in the bodies of animals." },
  { w: "storm", p: "/stɔːrm/", d: "A violent disturbance of the atmosphere." },
  { w: "clock", p: "/klɒk/", d: "An instrument for measuring time." },
  { w: "bread", p: "/bred/", d: "Food made from flour, water, and yeast." },
  { w: "dream", p: "/driːm/", d: "Thoughts and images occurring during sleep." },
  { w: "orange", p: "/ˈɒr.ɪndʒ/", d: "A round citrus fruit with a reddish-yellow rind." },
  { w: "mirror", p: "/ˈmɪr.ər/", d: "A surface that reflects a clear image." },
  { w: "bridge", p: "/brɪdʒ/", d: "A structure carrying a road across a gap." },
  { w: "frozen", p: "/ˈfrəʊ.zən/", d: "Having been turned into ice." },
  { w: "silver", p: "/ˈsɪl.vər/", d: "A precious white-grey metallic element." },
  { w: "window", p: "/ˈwɪn.dəʊ/", d: "An opening in a wall to admit light and air." },
  { w: "candle", p: "/ˈkæn.dəl/", d: "A cylinder of wax with a wick that provides light." },
  { w: "bottle", p: "/ˈbɒt.əl/", d: "A container with a narrow neck for liquid." },
  { w: "castle", p: "/ˈkɑː.səl/", d: "A large medieval fortified building." },
  { w: "feather", p: "/ˈfeð.ər/", d: "A flat appendage growing from a bird's skin." },
  { w: "blanket", p: "/ˈblæŋ.kɪt/", d: "A large piece of woollen cloth used as a covering." },
  { w: "cabinet", p: "/ˈkæb.ɪ.nɪt/", d: "A piece of furniture with drawers or shelves." },
  { w: "whisper", p: "/ˈwɪs.pər/", d: "Speaking very softly using one's breath." },
  { w: "thunder", p: "/ˈθʌn.dər/", d: "A loud rumbling sound heard after lightning." },
  { w: "lantern", p: "/ˈlæn.tərn/", d: "A lamp with a transparent case protecting the flame." },
  { w: "compass", p: "/ˈkʌm.pəs/", d: "An instrument for determining direction." },
  { w: "dolphin", p: "/ˈdɒl.fɪn/", d: "An aquatic mammal with a distinctive curved fin." },
  { w: "pilgrim", p: "/ˈpɪl.ɡrɪm/", d: "A person who journeys to a sacred place." },
  { w: "harvest", p: "/ˈhɑː.vɪst/", d: "The process of gathering crops." },
  { w: "phantom", p: "/ˈfæn.təm/", d: "A ghost or apparition." },
  { w: "absolute", p: "/ˈæb.sə.luːt/", d: "Complete, total, without exception." },
  { w: "spectrum", p: "/ˈspek.trəm/", d: "A band of colours as seen in a rainbow." },
  { w: "sequence", p: "/ˈsiː.kwəns/", d: "A series of events in a particular order." },
  { w: "fragment", p: "/ˈfræɡ.mənt/", d: "A small part broken off from something." },
  { w: "boundary", p: "/ˈbaʊn.dri/", d: "A line marking the limits of an area." },
  { w: "skeleton", p: "/ˈskel.ɪ.tən/", d: "The internal framework of bones in a body." },
  { w: "labyrinth", p: "/ˈlæb.ə.rɪnθ/", d: "A complicated, irregular network of passages." },
  { w: "mechanism", p: "/ˈmek.ə.nɪ.zəm/", d: "A system of parts working together in a machine." },
  { w: "symphony", p: "/ˈsɪm.fə.ni/", d: "An elaborate musical composition for full orchestra." },
  { w: "eloquence", p: "/ˈel.ə.kwəns/", d: "Fluent and persuasive speech or writing." },
  { w: "crystallize", p: "/ˈkrɪs.tə.laɪz/", d: "To form or cause to form crystals." },
  { w: "wilderness", p: "/ˈwɪl.də.nəs/", d: "An uncultivated, uninhabited region." },
  { w: "government", p: "/ˈɡʌv.ən.mənt/", d: "The governing body of a state." },
];

// ── PHASES ──────────────────────────────────────────────────────
const PHASES = [
  { from: 0, label: null, emoji: null, wrongGapMin: 3, wrongGapMax: 5, timerMs: 4000 },
  { from: 6, label: 'ROUND 2', emoji: '⚡', wrongGapMin: 2, wrongGapMax: 4, timerMs: 3000 },
  { from: 16, label: 'ROUND 3', emoji: '🔥', wrongGapMin: 1, wrongGapMax: 3, timerMs: 2200 },
  { from: 30, label: 'ROUND 4', emoji: '💀', wrongGapMin: 1, wrongGapMax: 2, timerMs: 1600 },
];

// ── AUDIO ENGINE ───────────────────────────────────────────────
let audioCtx = null;
let muted = false;
let bgmSource = null, bgmGain = null, bgmBuffer = null, bgmLoaded = false;


function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function toggleMute() {
  muted = !muted;
  DOM['mute-btn'].textContent = muted ? '🔇' : '🔊';
  if (bgmGain) bgmGain.gain.value = muted ? 0 : 0.4;
}

function playTone(freq, type, startT, dur, gainVal, endFreq) {
  if (muted) return;
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.connect(g); g.connect(ctx.destination);
  osc.type = type; osc.frequency.setValueAtTime(freq, startT);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, startT + dur);
  g.gain.setValueAtTime(gainVal, startT);
  g.gain.exponentialRampToValueAtTime(0.001, startT + dur);
  osc.start(startT); osc.stop(startT + dur);
}

function playNoise(startT, dur, gainVal, filterFreq) {
  if (muted) return;
  const ctx = getAudioCtx();
  const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass'; filter.frequency.value = filterFreq;
  const g = ctx.createGain();
  src.connect(filter); filter.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(gainVal, startT);
  g.gain.exponentialRampToValueAtTime(0.001, startT + dur);
  src.start(startT); src.stop(startT + dur);
}

function sfxCorrect() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  playTone(660, 'sine', t, 0.08, 0.3, 880);
}
function sfxWrong() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  playTone(180, 'sawtooth', t, 0.18, 0.35, 80);
  playNoise(t, 0.15, 0.1, 120);
}
function sfxZap() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  playTone(900, 'sawtooth', t, 0.22, 0.28, 140);
  playNoise(t, 0.18, 0.12, 600);
}
function sfxExplosion() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  playTone(80, 'sine', t, 0.3, 0.4, 30);
  playNoise(t, 0.3, 0.25, 200);
}
function sfxMilestone() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  [[523, 0], [659, 0.12], [784, 0.24]].forEach(([f, dt]) => playTone(f, 'sine', t + dt, 0.18, 0.35));
}
function sfxTick() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  playTone(220, 'square', t, 0.04, 0.2);
}
function sfxPhaseUp() {
  const ctx = getAudioCtx(); const t = ctx.currentTime;
  [[400, 0], [600, 0.1], [900, 0.22]].forEach(([f, dt]) => playTone(f, 'sawtooth', t + dt, 0.12, 0.3));
}

async function loadBgMusic() {
  if (bgmLoaded) return;
  try {
    const ctx = getAudioCtx();
    const res = await fetch('./assets/bgm.mp3');
    const arr = await res.arrayBuffer();
    bgmBuffer = await ctx.decodeAudioData(arr);
    bgmLoaded = true;
  } catch (e) { console.warn('BGM load failed', e); }
}

function startBgMusic() {
  loadBgMusic().then(() => {
    if (!bgmBuffer) return;
    if (bgmSource) { try { bgmSource.stop(); } catch (e) { } }
    const ctx = getAudioCtx();
    bgmGain = ctx.createGain();
    bgmGain.gain.value = muted ? 0 : 0.4;
    bgmGain.connect(ctx.destination);
    bgmSource = ctx.createBufferSource();
    bgmSource.buffer = bgmBuffer;
    bgmSource.loop = true;
    bgmSource.connect(bgmGain);
    bgmSource.start(0);
  });
}

function stopBgMusic(fadeDuration) {
  if (!bgmSource || !bgmGain) return;
  const ctx = getAudioCtx();
  const t = ctx.currentTime;
  bgmGain.gain.setValueAtTime(bgmGain.gain.value, t);
  bgmGain.gain.linearRampToValueAtTime(0, t + fadeDuration / 1000);
  setTimeout(() => { try { bgmSource.stop(); bgmSource = null; } catch (e) { } }, fadeDuration);
}

// ── DOM CACHE ─────────────────────────────────────────────────
// Cache all elements once — never query inside game loops
const $ = id => document.getElementById(id);
const DOM = {};
function cacheDOM() {
  [
    'start-screen', 'game-screen', 'gameover-screen',
    'score-display', 'streak-display', 'multiplier-badge',
    'timer-fill', 'word-card', 'word-display', 'word-pos',
    'btn-a', 'btn-b', 'focus-card', 'go-score', 'go-best-streak',
    'go-new-best', 'go-word', 'go-picked', 'go-correct', 'go-defn',
    'go-pron', 'go-speak-btn', 'go-collection', 'go-share-btn',
    'go-message', 'reason-block', 'reason-picked', 'reason-correct',
    'play-btn', 'daily-btn', 'daily-status', 'mute-btn',
    'loading-overlay', 'demo-word', 'demo-letters', 'demo-hint',
    'demo-btn-a', 'demo-btn-b', 'demo-caption'
  ].forEach(id => DOM[id] = document.getElementById(id));
}

// ── STATE ──────────────────────────────────────────────────────
let score = 0, streak = 0, bestStreak = 0;
let currentWord = null, correctIndex = 0, options = [0, 0];
let timerRAF = null, timerStart = 0, timerDuration = 4000;
let gameRunning = false, lastPressureState = null;
let correctWords = [], wrongWord = null, pickedWrongNum = null;
let usedIndices = [], roundNum = 0;
let activeWords = [...WORDS];
let milestoneActive = false, pendingMilestone = null;
let speakTarget = '';
let isDailyMode = false, dailyWordList = [], dailyRng = null;
let replayCount = 0;
let continueUsed = false;

// ── DAILY CHALLENGE ────────────────────────────────────────────
function getDayNumber() {
  const launch = new Date('2024-01-01T00:00:00Z');
  const now = new Date();
  const utcNow = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((utcNow - launch.getTime()) / 86400000);
}
function getDailyKey() { return 'lb_daily_' + getDayNumber(); }
function getDailyResult() {
  try { return JSON.parse(localStorage.getItem(getDailyKey()) || 'null'); }
  catch { return null; }
}
function saveDailyResult(s, st, words) {
  try { localStorage.setItem(getDailyKey(), JSON.stringify({ score: s, streak: st, words: words.map(w => w.w), day: getDayNumber() })); }
  catch { }
}
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function seededShuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildDailyWordList() {
  const rng = mulberry32(getDayNumber() * 1000003 + 7);
  dailyWordList = seededShuffle([...WORDS], rng);
}
function updateDailyUI() {
  const btn = DOM['daily-btn'];
  const status = DOM['daily-status'];
  if (!btn) return;
  const result = getDailyResult();
  const dayNum = getDayNumber();
  btn.classList.add('visible');
  status.classList.add('visible');
  if (result) {
    btn.classList.add('done');
    btn.textContent = '\u2705 DAILY DONE';
    btn.onclick = null;
    status.textContent = 'Day #' + dayNum + ' \u00B7 Score: ' + result.score + ' \u00B7 Come back tomorrow!';
  } else {
    btn.classList.remove('done');
    btn.textContent = '\uD83D\uDDD3 DAILY CHALLENGE';
    btn.onclick = startDaily;
    status.textContent = 'Day #' + dayNum + ' \u00B7 New challenge every day';
  }
}
function startDaily() {
  if (getDailyResult()) return;
  isDailyMode = true;
  buildDailyWordList();
  startGame();
}

// ── WORD FETCHING ──────────────────────────────────────────────
async function fetchFreshWords() {
  try {
    const wordRes = await fetch('https://random-word-api.herokuapp.com/word?number=50');
    if (!wordRes.ok) throw new Error('word fetch failed');
    const rawWords = await wordRes.json();
    const filtered = rawWords.filter(w =>
      typeof w === 'string' && w.length >= 3 && w.length <= 12 && /^[a-z]+$/.test(w)
    );
    if (filtered.length < 15) throw new Error('too few valid words');
    const enriched = await Promise.all(filtered.slice(0, 35).map(enrichWord));
    const valid = enriched.filter(Boolean);
    if (valid.length < 15) throw new Error('too few enriched');
    activeWords = valid;
    return true;
  } catch {
    activeWords = [...WORDS];
    return false;
  }
}

async function enrichWord(word) {
  try {
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || !data[0]) return null;
    const entry = data[0];
    const phonetic = entry.phonetic || entry.phonetics?.find(p => p.text)?.text || '';
    const meaning = entry.meanings?.[0];
    const def = meaning?.definitions?.[0]?.definition || '';
    if (!def) return null;
    const clean = def.charAt(0).toUpperCase() + def.slice(1);
    const short = clean.length > 90 ? clean.slice(0, 87) + '…' : clean;
    return { w: word, p: phonetic || '/' + word + '/', d: short };
  } catch { return null; }
}

// ── HELPERS ────────────────────────────────────────────────────
function getRandom(arr, exclude = []) {
  const avail = arr.map((_, i) => i).filter(i => !exclude.includes(i));
  if (!avail.length) return null;
  return avail[Math.floor(Math.random() * avail.length)];
}

function getPhase(rnd) {
  let phase = PHASES[0];
  for (const p of PHASES) { if (rnd >= p.from) phase = p; }
  return phase;
}

function getWrongCount(correct, rnd) {
  const phase = getPhase(rnd);
  const gap = phase.wrongGapMin + Math.floor(Math.random() * (phase.wrongGapMax - phase.wrongGapMin + 1));
  return Math.random() < 0.5 ? correct + gap : Math.max(1, correct - gap);
}

function getMultiplier(wordLen) {
  if (wordLen >= 10) return 4;
  if (wordLen >= 8) return 3;
  if (wordLen >= 6) return 2;
  return 1;
}

// ── HIGH SCORE ─────────────────────────────────────────────────
function getHighScore() { try { return parseInt(localStorage.getItem('lb_highscore') || '0', 10); } catch { return 0; } }
function setHighScore(s) { try { localStorage.setItem('lb_highscore', s); } catch { } }

// ── GAME FLOW ──────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  replayCount++;
  // Show interstitial every 3rd replay (never before first game)
  if (replayCount > 1 && replayCount % 3 === 0) {
    Ads.showInterstitial().then(() => _startGame());
    return;
  }
  _startGame();
}

function _startGame() {
  Ads.hideBanner();
  continueUsed = false;
  if (!isDailyMode) isDailyMode = false;
  startBgMusic();
  score = 0; streak = 0; bestStreak = 0;
  correctWords = []; wrongWord = null; pickedWrongNum = null;
  usedIndices = []; roundNum = 0;
  milestoneActive = false; pendingMilestone = null;
  timerDuration = PHASES[0].timerMs;
  gameRunning = false;
  demoPlayed = false;
  clearInterval(demoLitInterval);
  DOM['play-btn'].classList.remove('visible');
  DOM['daily-btn'].classList.remove('visible');
  DOM['daily-status'].classList.remove('visible');
  DOM['demo-hint'].style.color = 'var(--accent)';
  DOM['score-display'].textContent = '0';
  DOM['streak-display'].textContent = '0';
  DOM['multiplier-badge'].textContent = '×1';
  const card = DOM['word-card'];
  if (card) card.classList.remove('pressure-low', 'pressure-critical');
  showScreen('game-screen');

  const overlay = DOM['loading-overlay'];
  if (isDailyMode) {
    overlay.classList.remove('visible');
    gameRunning = true;
    requestAnimationFrame(() => { initAsteroidCanvas(); nextWord(); });
  } else {
    overlay.classList.add('visible');
    fetchFreshWords().then(() => {
      overlay.classList.remove('visible');
      gameRunning = true;
      requestAnimationFrame(() => { initAsteroidCanvas(); nextWord(); });
    });
  }
}

// ── NEXT WORD ──────────────────────────────────────────────────
function nextWord() {
  if (milestoneActive) return;
  lastPressureState = null;
  const card = DOM['word-card'];
  if (card) card.classList.remove('pressure-low', 'pressure-critical');

  const wordEl = document.getElementById('current-word');
  wordEl.classList.add('flash');
  setTimeout(() => wordEl.classList.remove('flash'), 220);

  // Word selection
  if (isDailyMode) {
    currentWord = dailyWordList[roundNum % dailyWordList.length];
  } else {
    let idx = getRandom(activeWords, usedIndices);
    if (idx === null) { usedIndices = []; idx = getRandom(activeWords, []); }
    usedIndices.push(idx);
    currentWord = activeWords[idx];
  }

  const correct = currentWord.w.length;
  const wrong = getWrongCount(correct, roundNum);
  correctIndex = Math.round(Math.random());
  options = correctIndex === 0 ? [correct, wrong] : [wrong, correct];

  wordEl.innerHTML = currentWord.w.toUpperCase().split('').map(
    ch => '<span class="letter-span">' + ch + '</span>'
  ).join('');

  DOM['score-display'].textContent = score;
  DOM['btn-a'].textContent = options[0];
  DOM['btn-b'].textContent = options[1];
  ['btn-a', 'btn-b'].forEach(id => {
    const b = document.getElementById(id);
    b.className = 'ans-btn'; b.disabled = false; b.style.pointerEvents = '';
  });

  const mult = getMultiplier(correct);
  DOM['multiplier-badge'].textContent = mult > 1 ? '×' + mult : '';

  // Check phase transition
  const prevPhase = getPhase(Math.max(0, roundNum - 1));
  const newPhase = getPhase(roundNum);
  if (roundNum > 0 && newPhase.from !== prevPhase.from && newPhase.label) {
    sfxPhaseUp();
    pendingMilestone = { label: newPhase.label, emoji: newPhase.emoji, sub: 'Harder words. Less time. Stay sharp.' };
  }
  timerDuration = newPhase.timerMs;

  // Spawn asteroids
  requestAnimationFrame(() => requestAnimationFrame(() => {
    resizeAsteroidCanvas();
    spawnAsteroids(currentWord.w.length);
  }));

  startGameLoop();
}

// ── TIMER ──────────────────────────────────────────────────────
function startTimer() {
  // Timer is now driven by the unified game loop — just reset the clock
  timerStart = performance.now();
}

// ── CHOOSE ─────────────────────────────────────────────────────
// ── STREAK UI ──────────────────────────────────────────────────
function updateStreakUI() {
  const el = DOM['streak-display'];
  el.textContent = streak;
  el.classList.remove('active', 'hot', 'pop');
  void el.offsetWidth;
  if (streak >= 10) el.classList.add('hot', 'pop');
  else if (streak >= 3) el.classList.add('active', 'pop');
  else el.classList.remove('active', 'hot');
}

// ── POINTS BURST ────────────────────────────────────────────────
function spawnPointsBurst(pts, anchorEl) {
  const rect = anchorEl.getBoundingClientRect();
  const burst = document.createElement('div');
  burst.className = 'pts-burst';
  burst.textContent = pts > 1 ? '+' + pts + ' ×' + getMultiplier(currentWord.w.length) : '+' + pts;
  burst.style.left = (rect.left + rect.width / 2 - 30) + 'px';
  burst.style.top = (rect.top - 10) + 'px';
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 800);
}

// ── FLASH ASTEROIDS WRONG ───────────────────────────────────────
function flashAsteroidsWrong() {
  asteroids.forEach(a => { if (a.state === 'floating') { a.state = 'flash'; a.flashTimer = 300; } });
  startAsteroidLoop();
}

function choose(btnIdx) {
  if (!gameRunning) return;
  cancelAnimationFrame(timerRAF);
  timerStart = 0; // pause the timer — startGameLoop() will restart it fresh
  const btnA = DOM['btn-a'];
  const btnB = DOM['btn-b'];
  const btns = [btnA, btnB];
  btns.forEach(b => { b.disabled = true; b.style.pointerEvents = 'none'; });

  if (btnIdx === correctIndex) {
    sfxCorrect();
    btns[btnIdx].classList.add('correct-flash');

    // Fire lasers immediately — no delay, instant feedback
    asteroids.forEach(a => { a.vx = 0; a.vy = 0; });
    sfxZap(); fireLasers();

    setTimeout(() => {
      btns.forEach(b => { b.disabled = false; b.style.pointerEvents = ''; });
      const mult = getMultiplier(currentWord.w.length);
      score += mult;
      streak++; bestStreak = Math.max(bestStreak, streak);
      roundNum++;
      correctWords.push(currentWord);

      // Animate score display
      const scoreEl = DOM['score-display'];
      scoreEl.textContent = score;
      scoreEl.classList.remove('pop');
      void scoreEl.offsetWidth;
      scoreEl.classList.add('pop');

      // Points burst + streak UI
      spawnPointsBurst(mult, btns[btnIdx]);
      updateStreakUI();

      showMilestone(() => nextWord());
    }, 380); // laser travel (90ms) + impact flash + asteroid fade
  } else {
    sfxWrong();
    btns[btnIdx].classList.add('wrong-flash');
    pickedWrongNum = options[btnIdx];
    flashAsteroidsWrong();
    setTimeout(() => triggerGameOver(false), 400);
  }
}

// ── ASTEROID CANVAS ────────────────────────────────────────────
let asteroidCanvas = null, actx = null;
let asteroids = [], lasers = [], explosions = [];
let asteroidState = 'idle';
let asteroidRAF = null;

function initAsteroidCanvas() {
  asteroidCanvas = document.getElementById('asteroid-canvas');
  actx = asteroidCanvas.getContext('2d');
  resizeAsteroidCanvas();
  window.addEventListener('resize', resizeAsteroidCanvas);
}

function resizeAsteroidCanvas() {
  if (!asteroidCanvas) return;
  const card = asteroidCanvas.closest('.word-card') || asteroidCanvas.parentElement;
  const W = card ? (card.getBoundingClientRect().width || card.offsetWidth || 300) : 300;
  const H = card ? (card.getBoundingClientRect().height || card.offsetHeight || 160) : 160;
  if (W === 0 || H === 0) return;
  const dpr = window.devicePixelRatio || 1;
  asteroidCanvas.width = W * dpr;
  asteroidCanvas.height = H * dpr;
  if (actx) { actx.setTransform(dpr, 0, 0, dpr, 0, 0); }
}

function getCanvasSize() {
  const dpr = window.devicePixelRatio || 1;
  return { W: asteroidCanvas.width / dpr, H: asteroidCanvas.height / dpr, dpr };
}

function makeAsteroidShape(r, seed) {
  const pts = 9;
  const shape = [];
  for (let i = 0; i < pts; i++) {
    const angle = (i / pts) * Math.PI * 2;
    const jitter = r * (0.75 + 0.25 * Math.sin(seed * (i + 1) * 2.3));
    shape.push({ x: Math.cos(angle) * jitter, y: Math.sin(angle) * jitter });
  }
  return shape;
}

function spawnAsteroids(count) {
  asteroids = []; lasers = []; explosions = [];
  if (!asteroidCanvas) return;
  if (asteroidCanvas.width === 0) resizeAsteroidCanvas();
  const { W, H } = getCanvasSize();
  if (W === 0) return;
  const r = Math.min(W / (count * 2.4), H * 0.18, 18);
  for (let i = 0; i < count; i++) {
    const seed = Math.random() * 100;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 0.8;
    asteroids.push({
      id: i, x: r + Math.random() * (W - r * 2), y: r + Math.random() * (H - r * 2), r,
      vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.014,
      shape: makeAsteroidShape(r, seed), alpha: 1, seed, state: 'floating', flashTimer: 0,
    });
  }
  asteroidState = 'floating';
  // loop started by startGameLoop() in nextWord
}

function clearAsteroids() {
  asteroids = []; lasers = []; explosions = [];
  asteroidState = 'idle';
  cancelAnimationFrame(asteroidRAF);
  if (actx && asteroidCanvas) {
    actx.clearRect(0, 0, asteroidCanvas.width, asteroidCanvas.height);
  }
}

function startAsteroidLoop() {
  // Asteroid drawing is driven by the unified game loop
  // This function is kept for compatibility but loop is managed by startGameLoop()
}

function startGameLoop() {
  cancelAnimationFrame(asteroidRAF);
  cancelAnimationFrame(timerRAF);
  timerStart = performance.now();
  const fill = DOM['timer-fill'];
  const card = DOM['word-card'];

  function loop(now) {
    // ── Timer tick ──────────────────────────────────────────
    if (gameRunning && timerStart > 0) {
      const elapsed = now - timerStart;
      const ratio = Math.max(0, 1 - elapsed / timerDuration);
      fill.style.transform = 'scaleX(' + ratio + ')';

      if (ratio < 0.2) {
        fill.style.background = 'var(--wrong)';
        if (lastPressureState !== 'critical') {
          lastPressureState = 'critical';
          card.classList.remove('pressure-low');
          card.classList.add('pressure-critical');
          sfxTick();
        }
      } else if (ratio < 0.5) {
        fill.style.background = '#ff9500';
        if (lastPressureState !== 'low') {
          lastPressureState = 'low';
          card.classList.add('pressure-low');
          card.classList.remove('pressure-critical');
        }
      } else {
        fill.style.background = 'var(--accent)';
      }

      if (elapsed >= timerDuration) {
        triggerGameOver(true);
        return; // stop loop — triggerGameOver will clean up
      }
    }

    // ── Asteroid canvas tick ────────────────────────────────
    const hasLive = asteroids.some(a => a.state !== 'dead');
    if (hasLive || lasers.length > 0 || explosions.length > 0) {
      drawAsteroids();
    }

    // Continue loop while game running or animations still playing
    if (gameRunning || hasLive || lasers.length > 0 || explosions.length > 0) {
      asteroidRAF = requestAnimationFrame(loop);
    }
  }
  asteroidRAF = requestAnimationFrame(loop);
}

function drawAsteroids() {
  if (!asteroidCanvas || !actx) return;
  const { W, H } = getCanvasSize();
  actx.clearRect(0, 0, W, H);

  // ── Draw asteroids (batched by state to reduce GPU state changes) ──
  const normal = asteroids.filter(a => a.state !== 'dead' && a.flashTimer <= 0);
  const flashing = asteroids.filter(a => a.state !== 'dead' && a.flashTimer > 0);

  function drawRock(a, isFlashing) {
    a.x += a.vx; a.y += a.vy; a.rot += a.rotSpeed;
    if (a.x < a.r) { a.x = a.r; a.vx *= -1; }
    if (a.x > W - a.r) { a.x = W - a.r; a.vx *= -1; }
    if (a.y < a.r) { a.y = a.r; a.vy *= -1; }
    if (a.y > H - a.r) { a.y = H - a.r; a.vy *= -1; }
    if (a.flashTimer > 0) a.flashTimer--;

    actx.save();
    actx.translate(a.x, a.y);
    actx.rotate(a.rot);
    actx.globalAlpha = a.alpha;
    actx.beginPath();
    a.shape.forEach((p, i) => i === 0 ? actx.moveTo(p.x, p.y) : actx.lineTo(p.x, p.y));
    actx.closePath();
    actx.fillStyle = isFlashing ? 'rgba(200,60,80,0.95)' : 'rgba(60,55,80,0.95)';
    actx.fill();
    actx.strokeStyle = isFlashing ? '#ff8090' : '#b0a0e0';
    actx.lineWidth = 1.8;
    actx.stroke();
    actx.restore();
  }

  // Batch 1: normal asteroids — one shadowBlur set for the whole batch
  if (normal.length > 0) {
    actx.shadowColor = '#f0e040';
    actx.shadowBlur = 8;
    normal.forEach(a => drawRock(a, false));
    actx.shadowBlur = 0; // reset once after batch
  }

  // Batch 2: flashing asteroids
  if (flashing.length > 0) {
    actx.shadowColor = '#ff4d6d';
    actx.shadowBlur = 12;
    flashing.forEach(a => drawRock(a, true));
    actx.shadowBlur = 0;
  }

  // ── Draw lasers ─────────────────────────────────────────────
  const now_ms = performance.now();
  const TRAVEL_MS = 90;

  actx.save();
  actx.globalCompositeOperation = 'lighter';

  lasers.forEach(l => {
    const elapsed = now_ms - l.born;

    if (elapsed < TRAVEL_MS) {
      const t = 1 - Math.pow(1 - elapsed / TRAVEL_MS, 2);
      l.x2 = l.x1 + (l.tx - l.x1) * t;
      l.y2 = l.y1 + (l.ty - l.y1) * t;
    } else {
      if (!l.hit) {
        l.hit = true;
        const a = asteroids.find(a => a.id === l.aid);
        if (a && a.state === 'floating') {
          spawnExplosion(a.x, a.y, a.r);
          a.state = 'hit';
          const t0 = performance.now();
          (function fadeRock() {
            const e = performance.now() - t0;
            a.alpha = Math.max(0, 1 - e / 280);
            if (a.alpha > 0) requestAnimationFrame(fadeRock); else a.state = 'dead';
          })();
        }
        l.impactAlpha = 1.0;
      }
      l.x2 = l.tx; l.y2 = l.ty;
      l.alpha -= 0.09;
      if (l.impactAlpha) l.impactAlpha -= 0.12;
      if (l.alpha <= 0) { l.done = true; return; }
    }

    const a = l.alpha;
    // Layer 1: outer bloom
    actx.beginPath(); actx.moveTo(l.x1, l.y1); actx.lineTo(l.x2, l.y2);
    actx.strokeStyle = 'rgba(240,224,64,' + (a * 0.25) + ')';
    actx.lineWidth = 14; actx.shadowBlur = 0;
    actx.stroke();
    // Layer 2: mid glow
    actx.beginPath(); actx.moveTo(l.x1, l.y1); actx.lineTo(l.x2, l.y2);
    actx.strokeStyle = 'rgba(240,200,20,' + (a * 0.6) + ')';
    actx.lineWidth = 5; actx.shadowColor = '#f0e040'; actx.shadowBlur = 16;
    actx.stroke();
    // Layer 3: white core
    actx.beginPath(); actx.moveTo(l.x1, l.y1); actx.lineTo(l.x2, l.y2);
    actx.strokeStyle = 'rgba(255,255,220,' + (a * 0.95) + ')';
    actx.lineWidth = 1.5; actx.shadowColor = '#ffffff'; actx.shadowBlur = 8;
    actx.stroke();
    // Muzzle flash
    if (elapsed < TRAVEL_MS * 0.5) {
      const mf = 1 - elapsed / (TRAVEL_MS * 0.5);
      actx.beginPath(); actx.arc(l.x1, l.y1, 5 * mf, 0, Math.PI * 2);
      actx.fillStyle = 'rgba(255,255,200,' + (mf * 0.9) + ')';
      actx.shadowColor = '#f0e040'; actx.shadowBlur = 20 * mf;
      actx.fill();
    }
    // Impact flash
    if (l.impactAlpha > 0) {
      const ia = l.impactAlpha;
      actx.beginPath(); actx.arc(l.tx, l.ty, 10 * ia, 0, Math.PI * 2);
      actx.fillStyle = 'rgba(255,240,100,' + (ia * 0.85) + ')';
      actx.shadowColor = '#fff'; actx.shadowBlur = 24 * ia;
      actx.fill();
    }
  });

  actx.restore();
  lasers = lasers.filter(l => !l.done);

  // ── Draw explosions ──────────────────────────────────────────
  explosions.forEach(ex => {
    ex.particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0) return;
      actx.save();
      actx.globalAlpha = p.life;
      actx.fillStyle = p.color;
      actx.shadowColor = p.color; actx.shadowBlur = 4;
      actx.beginPath(); actx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2); actx.fill();
      actx.restore();
    });
    ex.particles = ex.particles.filter(p => p.life > 0);
  });
  explosions = explosions.filter(ex => ex.particles.length > 0);
}

function spawnExplosion(x, y, r) {
  sfxExplosion();
  const colors = ['#f0e040', '#ff9500', '#ff4d6d', '#40e0b4', '#ffffff'];
  const particles = Array.from({ length: 12 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 2;
    return {
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      r: 1.5 + Math.random() * 2, life: 1, decay: 0.04 + Math.random() * 0.03,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  });
  explosions.push({ particles });
}

function fireLasers() {
  if (!asteroidCanvas) return;
  const { W, H } = getCanvasSize();
  const ox = W / 2, oy = H;
  const born = performance.now();
  asteroids.forEach(a => {
    if (a.state !== 'floating') return;
    // Store target coords — explosion triggers when laser arrives (after TRAVEL ms)
    lasers.push({ x1: ox, y1: oy, x2: ox, y2: oy, tx: a.x, ty: a.y, alpha: 1, done: false, hit: false, aid: a.id, born });
  });
}

// ── MILESTONE ──────────────────────────────────────────────────
function showMilestone(cb) {
  if (!pendingMilestone) { cb(); return; }
  milestoneActive = true;
  cancelAnimationFrame(timerRAF);
  timerStart = 0; // pause timer during milestone
  const m = pendingMilestone; pendingMilestone = null;
  const overlay = document.createElement('div');
  sfxMilestone();
  overlay.className = 'milestone-overlay';
  overlay.innerHTML = '<div class="milestone-emoji">' + m.emoji + '</div>' +
    '<div class="milestone-label">' + m.label + '</div>' +
    '<div class="milestone-sub">' + m.sub + '</div>';
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.style.transition = 'opacity 0.3s';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => { overlay.remove(); milestoneActive = false; cb(); }, 300);
  }, 1800);
}

// ── GAME OVER ──────────────────────────────────────────────────
function flashGameOver(isTimeout, cb) {
  stopBgMusic(500);
  const card = DOM['word-card'];
  if (card) card.classList.remove('pressure-low', 'pressure-critical');
  clearAsteroids();
  const flash = document.createElement('div');
  flash.className = 'gameover-flash' + (isTimeout ? ' timeout' : '');
  document.body.appendChild(flash);
  setTimeout(() => { flash.remove(); cb(); }, 550);
}

function triggerGameOver(timeout) {
  gameRunning = false;
  cancelAnimationFrame(timerRAF);
  wrongWord = currentWord;
  if (timeout) pickedWrongNum = null;
  flashGameOver(timeout, () => {
    try {
      const prev = getHighScore();
      const isNewBest = score > prev;
      if (isNewBest) setHighScore(score);
      const displayBest = isNewBest ? score : prev;
      document.getElementById('final-score').textContent = score;
      document.getElementById('final-streak').textContent = bestStreak;

      const banner = document.getElementById('highscore-banner');
      const bannerVal = document.getElementById('highscore-val');
      if (isNewBest && score > 0) {
        banner.querySelector('.highscore-banner-text').textContent = 'New best score!';
        bannerVal.textContent = score; banner.classList.add('visible');
      } else {
        banner.classList.remove('visible');
        if (displayBest > 0) {
          banner.querySelector('.highscore-banner-text').textContent = 'Personal best: ' + displayBest;
          bannerVal.textContent = ''; banner.classList.add('visible');
        }
      }

      DOM['go-message'].innerHTML = getGoMessage(score, isNewBest);

      // Daily mode: save result + show badge
      if (isDailyMode) {
        saveDailyResult(score, bestStreak, correctWords);
        isDailyMode = false;
        const badge = document.createElement('div');
        badge.className = 'daily-badge';
        badge.innerHTML = '\uD83D\uDDD3 Day #' + getDayNumber() + ' &nbsp;&middot;&nbsp; ' + correctWords.length + ' words';
        DOM['go-message'].before(badge);
      }

      const engPhrase = (ENGAGEMENT_PHRASES.find(p => score <= p.max) || ENGAGEMENT_PHRASES.at(-1)).phrase;
      document.getElementById('go-engagement').textContent = engPhrase;

      showFocusCard(wrongWord, false, pickedWrongNum);
      buildCollection();

      // ── Ads ──
      Ads.showBanner();
      const continueBtn = document.getElementById('btn-continue');
      if (continueBtn) {
        continueBtn.style.display = (!continueUsed && score > 0) ? 'block' : 'none';
      }

      showScreen('gameover-screen');
    } catch (err) {
      console.error('Game over screen error:', err.message, err.stack);
      showScreen('gameover-screen');
    }
  });
}

function getGoMessage(s, isNewBest) {
  if (isNewBest && s > 0) {
    if (s >= 25) return '🏆 <em>New record — absolute beast run.</em> Can you do it again?';
    return '🏆 <em>New personal best!</em> Your brain is getting sharper.';
  }
  if (s === 0) return "Didn't even see it coming, huh? 👀 First one's always free.";
  if (s === 1) return 'One word down. The journey of a thousand begins… 🐢';
  if (s <= 3) return 'So close! The letters are trickier than they look. One more go. 💪';
  if (s <= 7) return 'Getting warmer! Can you beat <em>' + s + '</em> next round?';
  if (s <= 15) return '🔥 Solid run. You\'re starting to feel the rhythm — don\'t stop now.';
  if (s <= 24) return 'That was impressive. Phase 4 is waiting for you. 👀';
  return '💥 <em>Legendary.</em> Seriously — can you even do that again?';
}

function showFocusCard(wordObj, isCorrect, pickedNum) {
  speakTarget = wordObj.w;
  document.getElementById('focus-word').textContent = wordObj.w.toUpperCase();
  document.getElementById('focus-pron').textContent = wordObj.p;
  document.getElementById('focus-def').textContent = wordObj.d;
  const tag = document.getElementById('focus-tag');
  const reasonRow = document.getElementById('focus-reason');
  const lettersRow = document.getElementById('reason-letters');
  if (isCorrect) {
    tag.textContent = '✅ CORRECT WORD'; tag.className = 'focus-tag correct-tag';
    reasonRow.style.display = 'none'; lettersRow.innerHTML = '';
  } else {
    tag.textContent = '❌ WRONG ANSWER'; tag.className = 'focus-tag';
    lettersRow.innerHTML = '';
    wordObj.w.split('').forEach(ch => {
      const box = document.createElement('div');
      box.className = 'reason-letter'; box.textContent = ch.toUpperCase();
      lettersRow.appendChild(box);
    });
    const actualCount = wordObj.w.length;
    if (pickedNum !== null && pickedNum !== undefined) {
      DOM['reason-picked'].textContent = 'you picked ' + pickedNum;
      DOM['reason-correct'].textContent = actualCount + ' letters ✓';
      reasonRow.style.display = 'flex';
    } else {
      DOM['reason-picked'].textContent = 'time ran out';
      DOM['reason-correct'].textContent = actualCount + ' letters ✓';
      reasonRow.style.display = 'flex';
    }
  }
}

function buildCollection() {
  const container = document.getElementById('collection');
  const label = document.getElementById('coll-label');
  container.innerHTML = '';
  if (correctWords.length === 0) {
    container.innerHTML = '<div class="no-words-msg">No correct words yet.</div>';
    return;
  }
  label.textContent = '✅ CORRECT WORDS · ' + correctWords.length;
  correctWords.forEach((wObj, i) => {
    const chip = document.createElement('div');
    chip.className = 'coll-chip'; chip.textContent = wObj.w.toUpperCase();
    chip.dataset.idx = i;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.coll-chip').forEach(c => c.style.borderColor = '');
      chip.style.borderColor = 'var(--correct)';
      showFocusCard(wObj, true, null);
    });
    container.appendChild(chip);
  });
}

function speakWord() {
  if (!speakTarget) return;
  const utter = new SpeechSynthesisUtterance(speakTarget);
  utter.lang = 'en-US'; utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
}

// ── SHARE ──────────────────────────────────────────────────────
const ENGAGEMENT_PHRASES = [
  { max: 5, phrase: "Just getting warmed up... \uD83E\uDDAB Can you do better?" },
  { max: 15, phrase: "Not bad! Think you can outlast me? \uD83D\uDC40" },
  { max: 30, phrase: "Decent run! Let's see if you've got the words for it \uD83D\uDCDA" },
  { max: 50, phrase: "Solid score! Dare you to beat it \uD83D\uDD25" },
  { max: 999, phrase: "This is my magnum opus. Good luck \uD83D\uDE24" },
];

function buildShareText() {
  const result = getDailyResult();
  const isDaily = !!result && result.day === getDayNumber();
  const gridWords = correctWords.slice(-5);
  const grid = gridWords.map(w => {
    const len = Math.min(w.w.length, 7);
    return Array.from({ length: len }, (_, i) => i % 2 === 0 ? '\uD83D\uDFE8' : '\u2B1B').join('');
  }).join('\n');
  const phrase = (ENGAGEMENT_PHRASES.find(p => score <= p.max) || ENGAGEMENT_PHRASES.at(-1)).phrase;
  const header = isDaily ? 'LetterBlitz \uD83D\uDDD3 Day #' + getDayNumber() : 'LetterBlitz \uD83D\uDCA5';
  return [header, '', '\uD83C\uDFAF Score: ' + score, '\uD83D\uDD25 Best streak: ' + bestStreak, '\uD83D\uDCD6 Words: ' + correctWords.length, '', grid, '', phrase].join('\n');
}

function shareScore() {
  const text = buildShareText();
  const btn = document.getElementById('btn-share');
  function onSuccess(label) {
    btn.textContent = label; btn.classList.add('shared');
    setTimeout(() => { btn.textContent = '\uD83D\uDCE4 SHARE'; btn.classList.remove('shared'); }, 2500);
  }
  function tryClipboard() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => onSuccess('\u2705 COPIED!')).catch(() => onSuccess('\u2705 COPIED!'));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      try { document.execCommand('copy'); onSuccess('\u2705 COPIED!'); } catch (e) { onSuccess('\u2705 COPIED!'); }
      ta.remove();
    }
  }
  if (navigator.share && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    navigator.share({ text }).then(() => onSuccess('\u2705 SHARED!')).catch(() => tryClipboard());
  } else {
    tryClipboard();
  }
}

// ── DEMO ───────────────────────────────────────────────────────
const DEMO_WORD = 'STORM';
const DEMO_CORRECT = 1; // index of correct button (5 letters, btn-b)
let demoPlayed = false, demoLitInterval = null;

function initDemo() {
  const letters = DOM['demo-letters'];
  letters.innerHTML = '';
  for (let i = 0; i < DEMO_WORD.length; i++) {
    const box = document.createElement('div');
    box.className = 'demo-letter-box'; box.id = 'dl-' + i;
    box.textContent = (i + 1).toString();
    letters.appendChild(box);
  }
  let lit = -1;
  demoLitInterval = setInterval(() => {
    if (lit >= 0) document.getElementById('dl-' + lit)?.classList.remove('lit');
    lit = (lit + 1) % DEMO_WORD.length;
    document.getElementById('dl-' + lit)?.classList.add('lit');
  }, 350);
}

function demoChoose(btnIdx) {
  if (demoPlayed) return;
  const btnA = DOM['demo-btn-a'];
  const btnB = DOM['demo-btn-b'];
  const hint = DOM['demo-hint'];
  if (btnIdx === DEMO_CORRECT) {
    demoPlayed = true;
    btnB.classList.add('demo-correct-flash');
    clearInterval(demoLitInterval);
    document.querySelectorAll('.demo-letter-box').forEach(b => b.classList.add('lit'));
    hint.style.color = 'var(--correct)';
    hint.textContent = 'STORM has 5 letters. Correct! ✓';
    setTimeout(() => {
      DOM['play-btn'].classList.add('visible');
      updateDailyUI();
    }, 500);
  } else {
    btnA.classList.add('demo-wrong-flash');
    hint.style.color = 'var(--wrong)';
    hint.textContent = 'Not quite — count the letters again!';
    setTimeout(() => {
      btnA.classList.remove('demo-wrong-flash');
      hint.style.color = 'var(--accent)';
      hint.textContent = '\xa0';
    }, 800);
  }
}

// ── PWA ────────────────────────────────────────────────────────
function generateIcon(s) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#0a0a0f';
  const r = s * 0.22;
  ctx.beginPath();
  ctx.moveTo(r, 0); ctx.lineTo(s - r, 0); ctx.quadraticCurveTo(s, 0, s, r);
  ctx.lineTo(s, s - r); ctx.quadraticCurveTo(s, s, s - r, s);
  ctx.lineTo(r, s); ctx.quadraticCurveTo(0, s, 0, s - r);
  ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath(); ctx.fill();

  const cx = s / 2, cy = s / 2;
  ctx.font = `bold ${s * 0.28}px 'Bebas Neue', sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = '#f0e040';
  ctx.shadowColor = '#f0e040'; ctx.shadowBlur = s * 0.06;
  ctx.fillText('LB', cx, cy);

  const bx = s * 0.08, by = s * 0.72, bw = s * 0.84, bh = s * 0.16;
  ctx.fillStyle = '#f0e040';
  ctx.shadowBlur = 0;
  // Manual rounded rect — roundRect not available on iOS < 16
  const rx = bh / 2;
  ctx.beginPath();
  ctx.moveTo(bx + rx, by);
  ctx.lineTo(bx + bw - rx, by);
  ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + rx);
  ctx.lineTo(bx + bw, by + bh - rx);
  ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - rx, by + bh);
  ctx.lineTo(bx + rx, by + bh);
  ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - rx);
  ctx.lineTo(bx, by + rx);
  ctx.quadraticCurveTo(bx, by, bx + rx, by);
  ctx.closePath(); ctx.fill();
  return cv.toDataURL('image/png');
}

function setupPWA() {
  // Service worker — reference real sw.js file
  if ('serviceWorker' in navigator) {
    // SW registration — graceful fail on Live Server / non-HTTPS
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(reg => console.log('SW registered, scope:', reg.scope))
      .catch(e => console.warn('SW not registered (normal on http):', e));
  }

  // Apple touch icon — generated dynamically
  const icon = generateIcon(192);
  const link = document.createElement('link');
  link.rel = 'apple-touch-icon'; link.href = icon;
  document.head.appendChild(link);

  // Install prompt
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    window._installPrompt = e;
    setTimeout(function showInstallHint() { /* install hint — no-op for now */ }, 8000);
  });
}


// ── CONTINUE (REWARDED AD) ────────────────────────────────────
function continueGame() {
  document.getElementById('btn-continue').style.display = 'none';
  Ads.showRewarded().then(() => {
    continueUsed = true;
    Ads.hideBanner();
    gameRunning = true;
    timerDuration = getPhase(roundNum).timerMs;
    showScreen('game-screen');
    requestAnimationFrame(() => { initAsteroidCanvas(); nextWord(); });
  }).catch(() => {
    // Ad failed/blocked — give free continue (good UX)
    continueUsed = true;
    Ads.hideBanner();
    gameRunning = true;
    timerDuration = getPhase(roundNum).timerMs;
    showScreen('game-screen');
    requestAnimationFrame(() => { initAsteroidCanvas(); nextWord(); });
  });
}

// ── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  cacheDOM();
  try { Ads.init(); } catch (e) { console.warn('Ads init failed:', e); }
  try { setupPWA(); } catch (e) { console.warn('PWA setup failed:', e); }
  initDemo();
});