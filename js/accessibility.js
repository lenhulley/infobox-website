/* ==========================================================================
   Infobox — Accessibility Controls
   ========================================================================== */

(function () {
  var root = document.documentElement;

  // --- Build panel elements and append to body ---
  var trigger = document.createElement('button');
  trigger.className = 'a11y-trigger';
  trigger.setAttribute('aria-label', 'Accessibility settings');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'a11y-panel');
  trigger.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="2.5"/><path d="M12 7v5"/><path d="M8 22l4-10 4 10"/><path d="M5 10h14"/></svg>';

  var panel = document.createElement('div');
  panel.id = 'a11y-panel';
  panel.className = 'a11y-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Accessibility settings');
  panel.innerHTML = [
    '<div class="a11y-panel-header">',
      '<h2>Accessibility</h2>',
      '<button class="a11y-panel-close" aria-label="Close accessibility panel">',
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">',
          '<line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/>',
        '</svg>',
      '</button>',
    '</div>',
    '<div class="a11y-panel-body">',
      '<div class="a11y-control-group">',
        '<span class="a11y-control-label" id="a11y-fontsize-label">Font size</span>',
        '<div class="a11y-fontsize-controls" role="group" aria-labelledby="a11y-fontsize-label">',
          '<button aria-label="Smallest font size" data-a11y-fontsize="1">A</button>',
          '<button aria-label="Smaller font size" data-a11y-fontsize="2">A</button>',
          '<button aria-label="Default font size" data-a11y-fontsize="3" class="active">A</button>',
          '<button aria-label="Larger font size" data-a11y-fontsize="4">A</button>',
          '<button aria-label="Largest font size" data-a11y-fontsize="5">A</button>',
        '</div>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-toggle" role="switch" aria-checked="false" data-a11y="dark">',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>',
          '<span>Dark mode</span><span class="a11y-toggle-indicator"></span>',
        '</button>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-toggle" role="switch" aria-checked="false" data-a11y="low-contrast">',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
          '<span>Reduced contrast</span><span class="a11y-toggle-indicator"></span>',
        '</button>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-toggle" role="switch" aria-checked="false" data-a11y="dyslexia-font">',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
          '<span>Dyslexia-friendly font</span><span class="a11y-toggle-indicator"></span>',
        '</button>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-toggle" role="switch" aria-checked="false" data-a11y="wide-spacing">',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10H3"/><path d="M21 6H3"/><path d="M21 14H3"/><path d="M21 18H3"/></svg>',
          '<span>Increased spacing</span><span class="a11y-toggle-indicator"></span>',
        '</button>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-toggle" role="switch" aria-checked="false" data-a11y="reduced-motion">',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
          '<span>Reduced motion</span><span class="a11y-toggle-indicator"></span>',
        '</button>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-toggle" role="switch" aria-checked="false" data-a11y="reading-guide">',
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
          '<span>Reading guide</span><span class="a11y-toggle-indicator"></span>',
        '</button>',
      '</div>',
      '<div class="a11y-control-group">',
        '<button class="a11y-reset" data-a11y="reset-all">Reset all settings</button>',
      '</div>',
    '</div>'
  ].join('');

  var topShade = document.createElement('div');
  topShade.className = 'a11y-reading-shade';
  topShade.id = 'a11y-shade-top';

  var bottomShade = document.createElement('div');
  bottomShade.className = 'a11y-reading-shade';
  bottomShade.id = 'a11y-shade-bottom';

  document.body.appendChild(trigger);
  document.body.appendChild(panel);
  document.body.appendChild(topShade);
  document.body.appendChild(bottomShade);

  // --- Query child elements ---
  var closeBtn = panel.querySelector('.a11y-panel-close');
  var fontBtns = Array.prototype.slice.call(panel.querySelectorAll('[data-a11y-fontsize]'));
  var toggles = Array.prototype.slice.call(panel.querySelectorAll('.a11y-toggle'));
  var resetBtn = panel.querySelector('[data-a11y="reset-all"]');

  // State
  var prefs = { fontSize: 3, dark: false, lowContrast: false, dyslexiaFont: false, wideSpacing: false, reducedMotion: false, readingGuide: false };
  try {
    var stored = JSON.parse(localStorage.getItem('infobox-a11y'));
    if (stored) prefs = stored;
  } catch (e) {}

  syncUI();

  // --- Panel open/close ---
  trigger.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) closeBtn.focus();
  });

  closeBtn.addEventListener('click', closePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });

  function closePanel() {
    panel.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }

  // --- Font size ---
  fontBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var level = parseInt(btn.getAttribute('data-a11y-fontsize'));
      setFontSize(level);
    });
  });

  function setFontSize(level) {
    prefs.fontSize = level;
    for (var i = 1; i <= 5; i++) root.classList.remove('a11y-font-size-' + i);
    if (level !== 3) root.classList.add('a11y-font-size-' + level);
    fontBtns.forEach(function (btn) {
      var l = parseInt(btn.getAttribute('data-a11y-fontsize'));
      btn.classList.toggle('active', l === level);
    });
    savePrefs();
    updateReadingGuideBand();
  }

  // --- Toggle controls ---
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.getAttribute('data-a11y');
      var classMap = {
        'dark': 'a11y-dark',
        'low-contrast': 'a11y-low-contrast',
        'dyslexia-font': 'a11y-dyslexia-font',
        'wide-spacing': 'a11y-wide-spacing',
        'reduced-motion': 'a11y-reduced-motion',
        'reading-guide': 'a11y-reading-guide'
      };
      var prefMap = {
        'dark': 'dark',
        'low-contrast': 'lowContrast',
        'dyslexia-font': 'dyslexiaFont',
        'wide-spacing': 'wideSpacing',
        'reduced-motion': 'reducedMotion',
        'reading-guide': 'readingGuide'
      };

      var cssClass = classMap[key];
      var prefKey = prefMap[key];
      var isActive = !prefs[prefKey];
      prefs[prefKey] = isActive;

      root.classList.toggle(cssClass, isActive);
      btn.setAttribute('aria-checked', String(isActive));
      savePrefs();
    });
  });

  // --- Reset ---
  resetBtn.addEventListener('click', function () {
    localStorage.removeItem('infobox-a11y');
    root.className = root.className.replace(/a11y-\S+/g, '').trim();
    prefs = { fontSize: 3, dark: false, lowContrast: false, dyslexiaFont: false, wideSpacing: false, reducedMotion: false, readingGuide: false };
    syncUI();
  });

  // --- Reading guide ---
  var bandHeight = 96;
  var rafId = null;
  var lastY = -1;

  function updateReadingGuideBand() {
    bandHeight = parseFloat(getComputedStyle(root).fontSize) * 6;
  }

  function updateGuide(y) {
    if (y === lastY) return;
    lastY = y;
    var top = Math.max(0, y - bandHeight / 2);
    var bottom = y + bandHeight / 2;
    topShade.style.height = top + 'px';
    topShade.style.top = '0';
    bottomShade.style.top = bottom + 'px';
    bottomShade.style.height = Math.max(0, window.innerHeight - bottom) + 'px';
  }

  document.addEventListener('mousemove', function (e) {
    if (!root.classList.contains('a11y-reading-guide')) return;
    if (rafId) return;
    rafId = requestAnimationFrame(function () {
      updateGuide(e.clientY);
      rafId = null;
    });
  });

  document.addEventListener('touchmove', function (e) {
    if (!root.classList.contains('a11y-reading-guide')) return;
    if (rafId) return;
    var touch = e.touches[0];
    rafId = requestAnimationFrame(function () {
      updateGuide(touch.clientY);
      rafId = null;
    });
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    topShade.style.opacity = '0';
    bottomShade.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    if (!root.classList.contains('a11y-reading-guide')) return;
    topShade.style.opacity = '1';
    bottomShade.style.opacity = '1';
  });

  updateReadingGuideBand();

  // --- Helpers ---
  function savePrefs() {
    try { localStorage.setItem('infobox-a11y', JSON.stringify(prefs)); } catch (e) {}
  }

  function syncUI() {
    fontBtns.forEach(function (btn) {
      var l = parseInt(btn.getAttribute('data-a11y-fontsize'));
      btn.classList.toggle('active', l === prefs.fontSize);
    });
    toggles.forEach(function (btn) {
      var prefMap = {
        'dark': 'dark',
        'low-contrast': 'lowContrast',
        'dyslexia-font': 'dyslexiaFont',
        'wide-spacing': 'wideSpacing',
        'reduced-motion': 'reducedMotion',
        'reading-guide': 'readingGuide'
      };
      var key = btn.getAttribute('data-a11y');
      var prefKey = prefMap[key];
      btn.setAttribute('aria-checked', String(!!prefs[prefKey]));
    });
  }
})();
