/* ==========================================================================
   Infobox — Navigation
   Hamburger toggle, scroll shadow, active link
   ========================================================================== */

function initNav() {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileLinks = document.querySelectorAll('.mobile-nav a');

  // Hamburger toggle
  if (toggle && mobileNav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-nav');
    toggle.setAttribute('aria-label', 'Open navigation menu');

    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
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
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Active link state — match exact path, or section index (e.g. /insights/) for any sub-page
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.nav-link, .mobile-nav a');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var isActive = href === currentPath
      || (href !== '/' && href.endsWith('/') && currentPath.startsWith(href));
    if (isActive) link.classList.add('active');
  });

  // Dropdown toggle
  var dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });
}

// Run immediately if DOM already has the header (no includes)
if (document.querySelector('.site-header')) {
  initNav();
}
