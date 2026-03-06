// ── AD MANAGER ──────────────────────────────────────────────────
// Isolated module — keeps ad logic out of game code.
// All three placements degrade gracefully if ads are blocked.

const PUBLISHER_ID = 'ca-pub-8113421009895826';

const Ads = (() => {
    let adsReady = false;

    function init() {
        adsReady = typeof adsbygoogle !== 'undefined';
        console.log('Ads init:', adsReady ? 'ready' : 'blocked/unavailable');
    }

    // ── Placement 1: Interstitial between games ────────────────
    function showInterstitial() {
        return new Promise(resolve => {
            if (!adsReady) { resolve(); return; }
            try {
                const container = document.createElement('div');
                container.id = 'interstitial-container';
                container.innerHTML =
                    '<div class="interstitial-overlay">' +
                    '<div class="interstitial-ad-wrap">' +
                    '<ins class="adsbygoogle" style="display:block;min-height:250px"' +
                    ' data-ad-client="' + PUBLISHER_ID + '"' +
                    ' data-ad-slot="auto"' +
                    ' data-ad-format="auto"' +
                    ' data-full-width-responsive="true"></ins>' +
                    '<button class="interstitial-skip" id="interstitial-skip" disabled>' +
                    'Skip in <span id="skip-countdown">5</span>s' +
                    '</button>' +
                    '</div>' +
                    '</div>';
                document.body.appendChild(container);
                (adsbygoogle = window.adsbygoogle || []).push({});

                let remain = 5;
                const skipBtn = document.getElementById('interstitial-skip');
                const cdEl = document.getElementById('skip-countdown');
                const cdInterval = setInterval(() => {
                    remain--;
                    if (remain <= 0) {
                        clearInterval(cdInterval);
                        skipBtn.textContent = '✕ CLOSE';
                        skipBtn.disabled = false;
                        skipBtn.onclick = () => { container.remove(); resolve(); };
                    } else {
                        cdEl.textContent = remain;
                    }
                }, 1000);
            } catch (e) {
                console.warn('Interstitial failed:', e);
                resolve();
            }
        });
    }

    // ── Placement 2: Rewarded ad (second chance) ───────────────
    function showRewarded() {
        return new Promise((resolve, reject) => {
            if (!adsReady) { resolve(); return; }
            try {
                const container = document.createElement('div');
                container.id = 'rewarded-container';
                container.innerHTML =
                    '<div class="interstitial-overlay">' +
                    '<div class="interstitial-ad-wrap">' +
                    '<div class="rewarded-header">Watch to continue</div>' +
                    '<ins class="adsbygoogle" style="display:block;min-height:250px"' +
                    ' data-ad-client="' + PUBLISHER_ID + '"' +
                    ' data-ad-slot="auto"' +
                    ' data-ad-format="auto"' +
                    ' data-full-width-responsive="true"></ins>' +
                    '<div class="rewarded-progress-track">' +
                    '<div class="rewarded-progress" id="rewarded-progress"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                document.body.appendChild(container);
                (adsbygoogle = window.adsbygoogle || []).push({});

                let elapsed = 0;
                const total = 10000;
                const bar = document.getElementById('rewarded-progress');
                const tick = setInterval(() => {
                    elapsed += 100;
                    bar.style.width = (elapsed / total * 100) + '%';
                    if (elapsed >= total) {
                        clearInterval(tick);
                        container.remove();
                        resolve();
                    }
                }, 100);
            } catch (e) {
                console.warn('Rewarded ad failed:', e);
                resolve();
            }
        });
    }

    // ── Placement 3: Banner on game-over screen ────────────────
    function showBanner() {
        const el = document.getElementById('ad-banner');
        if (!el) return;
        el.style.display = 'block';
        if (!adsReady) return;
        try {
            const slot = el.querySelector('.adsbygoogle');
            if (slot && !slot.dataset.pushed) {
                (adsbygoogle = window.adsbygoogle || []).push({});
                slot.dataset.pushed = '1';
            }
        } catch (e) { console.warn('Banner failed:', e); }
    }

    function hideBanner() {
        const el = document.getElementById('ad-banner');
        if (el) el.style.display = 'none';
    }

    return { init, showInterstitial, showRewarded, showBanner, hideBanner };
})();
