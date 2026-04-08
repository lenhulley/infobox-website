// Synchronous preference application (prevents FOUC)
(function () {
  var stored = null;
  try { stored = JSON.parse(localStorage.getItem('infobox-a11y')); } catch (e) {}
  if (stored) {
    var root = document.documentElement;
    if (stored.dark) root.classList.add('a11y-dark');
    if (stored.lowContrast) root.classList.add('a11y-low-contrast');
    if (stored.dyslexiaFont) root.classList.add('a11y-dyslexia-font');
    if (stored.wideSpacing) root.classList.add('a11y-wide-spacing');
    if (stored.reducedMotion) root.classList.add('a11y-reduced-motion');
    if (stored.readingGuide) root.classList.add('a11y-reading-guide');
    if (stored.fontSize && stored.fontSize !== 3) {
      root.classList.add('a11y-font-size-' + stored.fontSize);
    }
  }
})();
