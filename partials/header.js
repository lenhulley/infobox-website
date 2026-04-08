document.write(`<a href="#main" class="skip-link">Skip to main content</a>

<header class="site-header">
  <div class="container">
    <a href="index.html" class="site-logo" aria-label="Infobox home">
      <img src="assets/img/infobox-logo.png" alt="Infobox" width="160" height="40">
    </a>
    <nav class="site-nav" aria-label="Main navigation">
      <ul class="nav-links">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About us</a></li>
        <li><a href="neuroinclusion.html" class="nav-link">Neuroinclusion</a></li>
        <li><a href="technology.html" class="nav-link">Technology</a></li>
        <li class="nav-dropdown">
          <button class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            Solutions
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <ul class="nav-dropdown-menu">
            <li><a href="solution-detail.html">Claims Management</a></li>
            <li><a href="solution-portal.html">Umbraco &amp; Dataverse Portals</a></li>
            <li><a href="solutions.html">View all solutions</a></li>
          </ul>
        </li>
        <li><a href="insights.html" class="nav-link">Insights</a></li>
      </ul>
      <a href="contact.html" class="btn btn-primary">Talk to us</a>
    </nav>
    <button class="nav-toggle" aria-label="Open navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`);
