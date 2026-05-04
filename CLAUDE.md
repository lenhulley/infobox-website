# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static B2B marketing site for Infobox, a UK-based Microsoft/Umbraco technology consultancy. No build system, no templating engine, no package manager. Files are served as-is via GitHub Pages (custom domain: infobox.site).

### Information architecture

- Top-level pages live at the root: `index.html`, `about.html`, `neuroinclusion.html`, `technology.html`, `contact.html`.
- Solutions live in `/solutions/`: `index.html` is the section landing page; individual solutions are `event.html`, `detail.html`, `portal.html`, etc.
- Insights live in `/insights/`: `index.html` is the section landing page; individual posts are short-slug files like `ai-cost.html`, `sensory-metadata.html`, `cognitive-load.html`. Slugs must be unique across the section — check `/insights/` before adding a new one.

The design brief lives in `infobox-design-brief.md` — consult it for brand colours, typography rules, tone of voice, and component patterns. Note: the brief specifies Syne as the heading font, but this was replaced with **Inter** (user preference). The actual fonts are Inter (headings) and DM Sans (body), self-hosted as WOFF2 in `assets/fonts/`.

## Development

No build step. Always serve locally — `file://` will not work because all asset, partial, and inter-page paths are root-absolute (`/css/...`, `/partials/...`, `/insights/...`):

```
npx serve .
```

Deployment is automatic via GitHub Pages from master. The `CNAME` file maps to infobox.site.

## Architecture

### CSS (no preprocessor)

Eight CSS files loaded in cascade order on every page:

1. `css/variables.css` — design tokens (colours, type scale, spacing, shadows, transitions)
2. `css/reset.css` — modern CSS reset
3. `css/typography.css` — `@font-face` declarations, heading scales
4. `css/layout.css` — 12-column grid, container, responsive breakpoints (768px, 1024px)
5. `css/components.css` — nav, buttons, cards, forms, skip link, focus styles
6. `css/sections.css` — hero, dark panels, geometric background
7. `css/utilities.css` — spacing, visibility, width helpers
8. `css/accessibility.css` — a11y panel styles, dark mode overrides, font size scaling, reading guide

All theming and a11y features work by toggling classes on `<html>` (e.g. `a11y-dark`, `a11y-font-size-3`, `a11y-dyslexia-font`). This scales all `rem` units globally and cascades colour overrides across the page.

### JS partials

Shared chrome (header, footer, mobile nav) is injected via `document.write()` from files in `partials/`:

- `partials/header.js` — skip link, logo, desktop nav with dropdown, hamburger button
- `partials/footer.js` — footer grid with links and branding
- `partials/mobile-nav.js` — mobile navigation overlay

These work because they are static markup with no event wiring. **Any new interactive component must use `createElement`/`appendChild` instead** — `document.write` fails for components that need JS event listeners when opened via `file://` protocol. The accessibility panel (`partials/accessibility.js` + `js/accessibility.js`) demonstrates this pattern.

### JS modules

- `js/nav.js` — hamburger toggle, header scroll shadow, active link detection
- `js/animations.js` — hero stagger fade-up, scroll reveal via IntersectionObserver (respects `prefers-reduced-motion`)
- `js/contact.js` — form validation, honeypot spam filter, Formspree submission via fetch
- `js/accessibility.js` — a11y panel logic, localStorage persistence (key: `infobox-a11y`), reading guide with mouse/touch tracking

### Page template

Every HTML page follows the same structure: CSS links in order, then `partials/header.js`, `partials/mobile-nav.js`, `<main id="main">`, page content, `partials/accessibility.js`, `partials/footer.js`, then JS files. When adding a new page, copy an existing one to preserve this structure.

## Conventions

- All links and asset references are root-absolute paths (`href="/contact.html"`, `src="/assets/img/..."`, `href="/insights/"`). This is required because partials inject markup via `document.write` and the resulting paths are resolved against the calling page's URL — only absolute paths work consistently across pages at any depth.
- Section index pages are linked with a trailing slash (`/solutions/`, `/insights/`) which GitHub Pages resolves to the directory's `index.html`. The home page is `/`.
- Responsive approach is mobile-first with utility classes: `.md:grid-cols-2`, `.lg:col-span-7`
- Colour usage: blue is primary action, red is sparingly for highlights (never errors), green for success/positive
- Forms submit to Formspree (no backend)
- Content copy should not reference specific industries in hero/intro sections, should not describe team as "small", and should not include team member bios
