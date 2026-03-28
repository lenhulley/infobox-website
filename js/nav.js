/* ==========================================================================
   Infobox — Navigation
   Hamburger toggle, scroll shadow, active link
   ========================================================================== */

(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  // Hamburger toggle
  if (toggle && mobileNav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-nav');
    toggle.setAttribute('aria-label', 'Open navigation menu');

    toggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  // Scroll shadow on header
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // Active link state
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-link, .mobile-nav a');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
