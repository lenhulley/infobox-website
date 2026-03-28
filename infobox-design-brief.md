# Infobox — Design Brief for Claude Code

## Project Overview

**Brand:** Infobox  
**Site purpose:** B2B marketing and lead generation website for a UK-based Microsoft / Umbraco technology consultancy. Target audience: CTOs, IT managers, and operations directors at visitor attractions, chartered membership organisations, and field service businesses.  
**Tone:** Technically authoritative, confident, and direct. Professional without being corporate-stiff. Forward-looking — AI is a core part of the proposition, not a buzzword. Approachable enough that a non-technical operations director feels informed rather than intimidated.  
**Built in:** Umbraco 17 / .NET 10 — the design brief is for the visual language and component system, implemented as CSS custom properties and Razor/HTML components.

---

## Brand Assets

### Logo
The Infobox logo consists of two elements:
1. **Geometric cube icon** — four quadrants forming a 3D cube shape: red (top), blue (left), green (right), grey/silver (bottom). Clean, flat geometric construction. Suggests integration, structure, and multi-dimensional capability.
2. **Wordmark** — "INFO" in light weight, "BOX" in bold weight, all caps, dark charcoal. Set in a geometric sans-serif.

### Colour Palette

```
--color-red:        #CC2229   /* cube top — alert, energy, highlight */
--color-blue:       #1B6BB0   /* cube left — primary action, trust, links */
--color-green:      #4F9A32   /* cube right — success, positive, growth */
--color-silver:     #8C8C8C   /* cube bottom — neutral, secondary text */
--color-charcoal:   #2B2B2B   /* wordmark — primary text, headings */
--color-off-white:  #F5F5F3   /* page background — warm, not stark */
--color-white:      #FFFFFF   /* card backgrounds, contrast panels */
--color-dark-panel: #1A1F2E   /* dark section backgrounds — navy-charcoal */
```

### Colour Usage Rules
- **Blue** is the primary action colour — CTAs, links, active states, key UI elements
- **Charcoal** is the dominant text and heading colour
- **Red** is used sparingly — urgency, key callouts, hover accents. Never used for error states (that's semantic — use standard red for errors)
- **Green** is used for positive indicators, success states, and the social good / charity angle
- **Silver** is for secondary text, borders, disabled states, and metadata
- **Off-white** is the default page background — never pure white for large surfaces
- **Dark panel** is used for hero sections, footer, and high-contrast feature blocks
- Never use all four cube colours simultaneously on a single component — pick one accent per context

---

## Typography

### Font Pairing

**Display / Headings:** `Syne` (Google Fonts)
- Geometric, bold, has genuine character without being decorative
- The heavy weight has the same confident geometry as the BOX wordmark
- Use for H1, H2, section headings, and hero text

**Body / UI:** `DM Sans` (Google Fonts)
- Clean, highly legible, slightly humanist
- Pairs with Syne without competing
- Use for body copy, navigation, labels, buttons, metadata

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet">
```

### Type Scale

```css
--text-xs:    0.75rem;    /* 12px — labels, tags, metadata */
--text-sm:    0.875rem;   /* 14px — captions, secondary UI */
--text-base:  1rem;       /* 16px — body copy */
--text-lg:    1.125rem;   /* 18px — lead paragraphs */
--text-xl:    1.25rem;    /* 20px — card headings */
--text-2xl:   1.5rem;     /* 24px — section subheadings */
--text-3xl:   1.875rem;   /* 30px — section headings */
--text-4xl:   2.25rem;    /* 36px — page headings */
--text-5xl:   3rem;       /* 48px — hero headings */
--text-6xl:   3.75rem;    /* 60px — large hero / feature headings */
```

### Type Rules
- Headings always use `Syne`, weight 700 or 800
- Body always uses `DM Sans`, weight 300 or 400 for copy, 500 or 600 for UI labels
- Line height: 1.2 for headings, 1.65 for body copy
- Letter spacing: `-0.02em` on large headings (≥ 3xl), `0.04em` on uppercase labels and tags
- Never centre-align body copy. Centred text is limited to short hero headlines and CTAs only
- Maximum line length: `68ch` for body copy

---

## Spacing System

```css
--space-1:   0.25rem;   /*  4px */
--space-2:   0.5rem;    /*  8px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-5:   1.25rem;   /* 20px */
--space-6:   1.5rem;    /* 24px */
--space-8:   2rem;      /* 32px */
--space-10:  2.5rem;    /* 40px */
--space-12:  3rem;      /* 48px */
--space-16:  4rem;      /* 64px */
--space-20:  5rem;      /* 80px */
--space-24:  6rem;      /* 96px */
--space-32:  8rem;      /* 128px */
```

Section vertical padding: `--space-20` to `--space-32` depending on density. Never less than `--space-16` between major sections.

---

## Layout

### Grid
12-column grid with `--space-6` gutters. Max content width: `1200px`. Outer padding: `--space-6` on mobile, `--space-8` on tablet, `--space-12` on desktop.

### Layout Principles
- Use **asymmetric layouts** where possible — a 7/5 or 8/4 column split is more interesting than 6/6
- **Generous whitespace** — the site should breathe. Don't pack sections. Empty space is intentional
- Alternate section backgrounds (off-white → white → dark panel) to create visual rhythm without needing decorative dividers
- Hero sections should be **full-viewport height on desktop**, with the cube icon geometry subtly echoed in background shapes or grid lines

### Responsive Breakpoints
```css
--bp-sm:   640px;
--bp-md:   768px;
--bp-lg:   1024px;
--bp-xl:   1280px;
```

---

## Component Library

### Borders & Radius
```css
--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   12px;
--radius-xl:   16px;
--radius-full:  9999px;  /* pills, tags */

--border-subtle:  1px solid rgba(43, 43, 43, 0.1);
--border-strong:  1px solid rgba(43, 43, 43, 0.25);
--border-accent:  2px solid var(--color-blue);
```

### Shadows
```css
--shadow-sm:  0 1px 3px rgba(0,0,0,0.08);
--shadow-md:  0 4px 16px rgba(0,0,0,0.10);
--shadow-lg:  0 8px 32px rgba(0,0,0,0.12);
--shadow-xl:  0 16px 48px rgba(0,0,0,0.14);
```

Cards rest at `--shadow-md`, lift to `--shadow-lg` on hover.

### Buttons

**Primary CTA:**
- Background: `--color-blue`
- Text: white, `DM Sans` 500, `--text-sm`, `letter-spacing: 0.02em`
- Padding: `--space-3` vertical, `--space-6` horizontal
- Radius: `--radius-md`
- Hover: darken 10%, translate Y -1px, shadow lifts
- Never use rounded-full for primary CTAs — that's consumer product language

**Secondary:**
- Border: `--border-accent`
- Text: `--color-blue`
- Background: transparent
- Hover: background `--color-blue` at 8% opacity

**Ghost / text link:**
- Text: `--color-charcoal` with blue underline on hover
- Used within body copy and card footers

**Destructive / alert:**
- Background: `--color-red`
- Use only for genuine destructive actions, not decorative

### Cards
```
Background: --color-white
Border: --border-subtle
Border-radius: --radius-lg
Padding: --space-6 to --space-8
Shadow: --shadow-md → --shadow-lg on hover
Transition: 200ms ease
```

Left border accent variant: `border-left: 3px solid var(--color-blue)` — used for feature callouts and testimonials.

Cards should never have more than one primary CTA. Secondary links use ghost style.

### Navigation
- Sticky header, `--color-white` background with `--shadow-sm` on scroll
- Logo left, navigation centre-right, primary CTA button far right
- Nav links: `DM Sans` 500, `--text-sm`, `--color-charcoal`, blue underline on hover/active
- Mobile: hamburger → full-screen overlay, nav links large (`--text-2xl`, `Syne`)
- No mega-menus at launch. Simple dropdowns for Solutions sub-pages only

### Tags / Badges
```
Font: DM Sans 600, --text-xs, letter-spacing 0.05em, uppercase
Padding: --space-1 vertical, --space-3 horizontal
Radius: --radius-full
```
Variants:
- **Blue tag:** blue background at 12% opacity, blue text — technology labels
- **Green tag:** green background at 12% opacity, green text — industry/vertical labels
- **Silver tag:** silver background at 15% opacity, charcoal text — content categories

### Section Headings
Always preceded by a coloured tag/label identifying the section context. Pattern:
```
[GREEN TAG: "Visitor Attractions"]
[H2: Section heading in Syne 700]
[Lead paragraph in DM Sans 300, --text-lg, max-width 60ch]
```

### Dividers
Avoid decorative HR elements. Use background colour changes and whitespace as section separators. Where a visual break is needed, use a `2px` line in `--color-blue` at `40px` width, left-aligned — not full width.

---

## Motion & Interaction

- **Page load:** Staggered fade-up on hero elements (heading → subheading → CTA → image), 60ms delay between each, 400ms duration, `ease-out`
- **Scroll reveals:** Elements fade up 20px as they enter viewport. Use `IntersectionObserver`. 300ms duration, `ease-out`. Apply to cards, section headings, and feature blocks
- **Hover states:** 200ms transitions on all interactive elements. Cards lift. Buttons shift. Links underline draws from left
- **No parallax.** No auto-playing video backgrounds. No looping animations that distract from content
- Respect `prefers-reduced-motion` — all animations disable cleanly

---

## Aesthetic Direction

**Concept: "Structured Intelligence"**

The cube icon is the anchor — four facets, each representing a different capability or vertical, assembled into something greater than the sum of its parts. The visual language should echo this: geometry, structure, precision, but with warmth and human judgment implied.

Think: high-end technical consultancy meets design-aware software company. Reference points: Stripe's documentation clarity, Thoughtworks' editorial confidence, Linear's spatial precision. Not a startup. Not an agency. A specialist practice that knows exactly what it's doing.

**Visual signature:** Subtle use of the cube's quadrant geometry as background texture — very low opacity geometric grid or faceted shapes behind hero sections and dark panels. Not decorative noise, but structural pattern.

**Photography / imagery direction (for Unsplash integration):**
- Architecture, infrastructure, nature with geometric structure (forests, bridges, canopies — relevant to TreeGuard and Attractions verticals)
- No stock photo clichés: no handshakes, no people pointing at whiteboards, no glowing brains
- Prefer images with strong geometric composition and limited colour palette that doesn't clash with brand

---

## Information Architecture — Page Templates Required

### 1. Homepage
- Full-height hero: headline proposition + subheading + two CTAs (primary: "Talk to us", secondary: "See our solutions") + subtle cube geometry background
- Logo strip: "Built on" technology logos (Umbraco, Microsoft, Azure, .NET)
- Solutions overview: 3-column card grid, one card per vertical (icons use cube accent colours)
- "Why Infobox" section: asymmetric layout, 3 value propositions (quality, cost transparency, AI-accelerated)
- AI transparency section: dark panel, honest statement about how AI is used in delivery
- Case study / social proof teaser: single featured example with metric callouts
- Team teaser: 3-4 person strip with name, role, one-line bio
- Final CTA section: dark panel, headline + button

### 2. Solutions Index
- Hero: medium height, headline + intro paragraph
- Filterable card grid: each solution card shows icon, vertical tag, headline, 2-line description, "Learn more" link
- "Not sure which solution fits?" CTA block at bottom → Contact

### 3. Solution Detail Page (template — used for all 8 products)
- Hero: solution name, one-sentence proposition, primary CTA
- Problem statement: "The challenge" — what the customer is experiencing
- Solution section: how Infobox addresses it, with feature list
- Technology stack: badge row showing relevant technologies
- Who it's for: persona tags
- Case study / evidence block (if available)
- Related solutions: 2-card strip
- CTA: "Start a conversation"

### 4. Technology Page
- Hero: "We build on the right foundations"
- Technology deep-dives: Umbraco, Dataverse/Dynamics 365, Azure, .NET MAUI — one section each with icon, description, why we chose it
- AI section: transparent explanation of Claude Code, API usage, content generation
- "Built on what we sell" callout: the Infobox site itself runs on this stack

### 5. About Page
- Team section: cards with photo placeholder, name, role, background paragraph
- Values section: 3 values with icons
- Social good policy: named section, green accent
- History: brief timeline or narrative paragraph

### 6. Insights (Blog)
- Hero: "Insights" heading + intro
- Featured post: large card, full-width image, title, excerpt, tag, date
- Post grid: 3-column, card format
- Sidebar (desktop): category filter, recent posts, newsletter signup

### 7. Blog Post
- Title, tag, date, estimated read time
- Hero image (Unsplash-sourced)
- Body content: well-typeset, `--text-base` body, generous line height, pull quotes in blue, subheadings in Syne
- Author byline
- Related posts strip at bottom

### 8. Contact / Work With Us
- Split layout: left = form, right = context (what to expect, response time, team photo)
- Form fields: Name, Organisation, Role, Solution interest (dropdown), Message, How did you hear about us
- No CAPTCHA at launch (use honeypot)
- Confirmation: inline success state, no redirect

---

## CSS Custom Properties — Master Reference

```css
:root {
  /* Brand colours */
  --color-red:        #CC2229;
  --color-blue:       #1B6BB0;
  --color-green:      #4F9A32;
  --color-silver:     #8C8C8C;
  --color-charcoal:   #2B2B2B;
  --color-off-white:  #F5F5F3;
  --color-white:      #FFFFFF;
  --color-dark-panel: #1A1F2E;

  /* Semantic colours */
  --color-text-primary:    var(--color-charcoal);
  --color-text-secondary:  var(--color-silver);
  --color-text-inverse:    var(--color-white);
  --color-bg-page:         var(--color-off-white);
  --color-bg-card:         var(--color-white);
  --color-bg-dark:         var(--color-dark-panel);
  --color-action:          var(--color-blue);
  --color-action-hover:    #155a96;
  --color-success:         var(--color-green);
  --color-alert:           var(--color-red);

  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  /* Type scale */
  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.25rem;
  --text-2xl:   1.5rem;
  --text-3xl:   1.875rem;
  --text-4xl:   2.25rem;
  --text-5xl:   3rem;
  --text-6xl:   3.75rem;

  /* Spacing */
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-5:   1.25rem;
  --space-6:   1.5rem;
  --space-8:   2rem;
  --space-10:  2.5rem;
  --space-12:  3rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;
  --space-32:  8rem;

  /* Borders */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;
  --border-subtle:  1px solid rgba(43, 43, 43, 0.1);
  --border-strong:  1px solid rgba(43, 43, 43, 0.25);
  --border-accent:  2px solid var(--color-blue);

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08);
  --shadow-md:  0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg:  0 8px 32px rgba(0,0,0,0.12);
  --shadow-xl:  0 16px 48px rgba(0,0,0,0.14);

  /* Transitions */
  --transition-fast:   150ms ease;
  --transition-base:   200ms ease;
  --transition-slow:   300ms ease;

  /* Layout */
  --max-width:     1200px;
  --gutter:        1.5rem;
}
```

---

## Claude Code Prompting Guide

### Session 1 — Foundation
```
Using the Infobox design brief, set up the CSS custom properties, 
Google Font imports (Syne + DM Sans), base reset, and typography 
scale in a single stylesheet. Then build the navigation component: 
sticky header with logo left, nav links centre-right, primary CTA 
button far right. Mobile hamburger menu with full-screen overlay. 
Use only the custom properties defined in the brief — no hardcoded 
colour or spacing values anywhere.
```

### Session 2 — Homepage Hero
```
Build the homepage hero section for Infobox using the design brief. 
Full viewport height. Dark panel background (--color-dark-panel). 
Headline in Syne 800 at --text-6xl, white. Subheading in DM Sans 300 
at --text-xl, silver. Two buttons: primary "Talk to us" (blue), 
secondary "See our solutions" (ghost/outline). Subtle geometric 
background pattern echoing the cube icon quadrants — very low opacity 
grid or faceted shapes, not decorative noise. Staggered fade-up 
animation on load: heading → subheading → buttons, 60ms delay, 
400ms ease-out. Respect prefers-reduced-motion.
```

### Session 3 — Solution Cards
```
Build a solution card component for the Infobox solutions grid. 
Card specs per design brief: white background, --radius-lg, 
--shadow-md lifting to --shadow-lg on hover, --border-subtle. 
Each card: vertical tag (green, pill), icon area (40x40, accent 
colour), H3 heading in Syne 700, 2-line description in DM Sans 
300, "Learn more" ghost link. 3-column grid on desktop, 2-column 
tablet, 1-column mobile. Scroll-reveal fade-up with IntersectionObserver, 
staggered 80ms between cards.
```

### Session 4 — Dark Panel Sections
```
Build a reusable dark panel section component (--color-dark-panel 
background, white text) for use in the AI transparency section and 
final CTA. AI transparency variant: left-aligned tag in blue, H2 
in Syne, body paragraph in DM Sans, and a 3-column stat/claim row 
with large numbers in Syne 800 and labels in DM Sans. CTA variant: 
centred headline, subheading, single primary button. Both use the 
subtle geometric background pattern from the hero.
```

### Session 5 — Blog / Insights
```
Build the Insights listing page and blog post template for Infobox 
per the design brief IA. Listing: featured post card (full-width, 
large image, blue left-border accent), then 3-column card grid. 
Post template: clean editorial layout, Syne headings, DM Sans body 
at --text-base with 1.65 line height, pull quotes in blue with 
left border, Unsplash hero image at top. Author byline with avatar 
placeholder. Related posts strip at bottom.
```

### Session 6 — Contact Page
```
Build the Contact / Work With Us page for Infobox. Split layout: 
form left (60%), context panel right (40%). Form fields: Name, 
Organisation, Role, Solution interest (select dropdown with all 
8 Infobox solutions), Message, How did you hear about us. 
Honeypot field for spam (hidden, aria-hidden). Inline success 
state on submit — no redirect. Right panel: what to expect copy, 
response time indicator, team photo placeholder. No CAPTCHA.
```

---

## Tone of Voice — Copywriting Reference

**Principles:**
- Lead with the problem, not the product
- Be specific — name the technologies, name the verticals, name the standards (TRAQ, Galaxy)
- Acknowledge what AI can and cannot do — don't overclaim
- "We" not "Infobox" in most contexts
- Avoid: "cutting-edge", "game-changing", "seamless", "robust", "leverage", "synergy"
- Use: "built on", "designed for", "we've found that", "the honest answer is"

**Headline formula:** [Problem] → [What we do] → [Result]
Example: *"Your membership systems weren't built for how you work today. We change that."*

**AI transparency statement (for the dark panel section):**
*"We use AI tools — including Claude — to accelerate development, generate content, and reduce the cost of delivery. We're transparent about this because it's how we keep implementation costs honest without sacrificing quality. Every line of production code is reviewed by a senior developer. Every piece of published content is reviewed by a human. AI is the tool; judgement is ours."*

---

## Accessibility Baseline

- WCAG 2.1 AA minimum
- All interactive elements keyboard navigable
- Focus styles: `2px solid var(--color-blue)` with `2px offset` — never `outline: none` without a replacement
- Colour contrast: all text/background combinations checked against AA ratio
- Images: meaningful alt text; decorative images `alt=""`
- Form labels: always explicit `<label for="">`, never placeholder-only
- Motion: `@media (prefers-reduced-motion: reduce)` wraps all animations
