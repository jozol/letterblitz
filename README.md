# LetterBlitz 💥

> Count the letters. Beat the clock.

A fast-paced mobile-first PWA word game. Each round, a word appears — pick the button that matches its letter count before time runs out. Asteroids visualise the letters; lasers destroy them on a correct answer.

## Play
**[jozol.github.io/letterblitz](https://jozol.github.io/letterblitz)**

Install as a PWA: tap Share → Add to Home Screen on iOS/Android.

---

## Repo structure

```
letterblitz/
├── index.html          # Shell — no inline CSS or JS
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (cache-first, offline support)
├── css/
│   └── game.css        # All styles (~19 KB)
├── js/
│   └── game.js         # All game logic (~44 KB)
└── assets/
    └── bgm.mp3         # Background music (~382 KB)
```

## Performance notes

- **BGM extracted** — background music is a real `.mp3` file loaded via `fetch()`, not a 510 KB base64 string baked into the HTML. First load: 44 KB HTML+JS+CSS, music loads in background.
- **Unified game loop** — timer and asteroid canvas previously ran as two separate `requestAnimationFrame` loops. Now merged into one loop, halving the number of rAF callbacks per frame.
- **Batched shadow draws** — `shadowBlur` is an expensive GPU state change. Asteroids are now grouped by state (normal/flashing) and drawn in batches with a single `shadowBlur` set per group.
- **DOM cache** — all `getElementById` calls replaced with a `DOM[]` cache populated once at startup. Zero DOM queries inside the game loop.
- **`will-change` hints** — added on animated elements (`#timer-fill`, `.ans-btn`, `.pts-burst`) so the browser can promote them to their own compositor layers.
- **`font-display: swap`** — fonts load asynchronously; text renders immediately in system fallback, no invisible-text flash.
- **Real `sw.js`** — previously the service worker was a Blob URL constructed at runtime. Now it's a real file, which means the browser can update it properly between deploys.
- **`roundRect` polyfill** — `ctx.roundRect()` is only available on iOS 16+. Replaced with manual quadratic-curve path so the game boots on all iOS versions.

## Game features

- ♾️ Endless mode with difficulty phases
- 🗓 Daily Challenge — seeded word list, same for all players each day
- 🔥 Streak system with multipliers
- 💥 Asteroid field with laser destruction animation
- 🔊 Synthesised sound effects + background music
- 📤 Share score as emoji grid (Wordle-style)
- 🔈 Pronunciation button on every word
- 📱 Installable PWA, works offline
