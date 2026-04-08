/* ==========================================================================
   Infobox — Animations
   Hero staggered fade-up + scroll reveal via IntersectionObserver
   ========================================================================== */

(function () {
  // Check for reduced motion preference
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || document.documentElement.classList.contains('a11y-reduced-motion');

  /* ========================================================================
     Hero staggered fade-up
     Elements with [data-hero-animate] fade up in sequence on page load
     ======================================================================== */

  var heroElements = document.querySelectorAll('[data-hero-animate]');

  if (heroElements.length && !prefersReducedMotion) {
    heroElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 400ms ease-out, transform 400ms ease-out';
    });

    // Stagger with 60ms delay between each
    heroElements.forEach(function (el, i) {
      setTimeout(function () {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 60);
    });
  } else if (heroElements.length) {
    // No animation — ensure visible
    heroElements.forEach(function (el) {
      el.style.opacity = '1';
    });
  }

  /* ========================================================================
     Scroll reveal
     Elements with [data-reveal] fade up 20px as they enter the viewport
     Use data-reveal-delay="N" for stagger (in ms)
     ======================================================================== */

  var revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length && !prefersReducedMotion) {
    // Set initial hidden state
    revealElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';
      var delay = el.getAttribute('data-reveal-delay');
      if (delay) {
        el.style.transitionDelay = delay + 'ms';
      }
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else if (revealElements.length) {
    // No animation — ensure visible
    revealElements.forEach(function (el) {
      el.style.opacity = '1';
    });
  }
})();
