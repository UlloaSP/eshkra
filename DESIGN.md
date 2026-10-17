---
name: eshkra
description: One umbrella, four products; a multi-product open-source landing at the category's craft bar.
colors:
  bg: '#ffffff'
  bg-subtle: '#f7f7f9'
  surface: '#ffffff'
  border: '#e7e7ee'
  border-strong: '#d2d2dc'
  text: '#0b0b10'
  text-2: '#474756'
  text-3: '#666675'
  ember: '#e8590c'
  ember-ink: '#c2410c'
  button-bg: '#0b0b10'
  button-text: '#ffffff'
  bg-dark: '#0a0a0d'
  bg-subtle-dark: '#111116'
  surface-dark: '#131318'
  border-dark: '#24242c'
  border-strong-dark: '#34343e'
  text-dark: '#f4f4f6'
  text-2-dark: '#b6b6c2'
  text-3-dark: '#8e8e9b'
  ember-dark: '#ff8a3d'
  ember-ink-dark: '#ff9a55'
  button-bg-dark: '#f4f4f6'
  button-text-dark: '#0b0b10'
  hue-mlbundle: '#e2481c'
  hue-mlschema: '#f2a516'
  hue-mlform: '#5b4cf5'
  hue-mlsuite: '#f07a1e'
  code-window: '#0b0b0d'
  plate-charcoal: '#19191c'
  plate-core: '#ff7a1a'
typography:
  display:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: 'clamp(2.75rem, 6.2vw, 4.75rem)'
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: '-0.04em'
    fontVariation: "'wdth' 106"
  headline:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: 'clamp(2rem, 4.2vw, 3.25rem)'
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: '-0.04em'
    fontVariation: "'wdth' 104"
  title:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: 'clamp(1.875rem, 3.4vw, 2.75rem)'
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: '-0.035em'
    fontVariation: "'wdth' 104"
  statement:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)'
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: '-0.035em'
  lede:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)'
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.6
  brand-wordmark:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontSize: '1.25rem'
    fontWeight: 760
    letterSpacing: '-0.03em'
    fontVariation: "'wdth' 108"
  wordmark-ml:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: '-0.01em'
    fontVariation: "'wdth' 125"
  wordmark-rest:
    fontFamily: "'Mona Sans Variable', 'Mona Sans', system-ui, sans-serif"
    fontWeight: 300
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: '0.8125rem'
    fontWeight: 400
    letterSpacing: '0.02em'
    fontFeature: "'calt' 0"
  code:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: '0.78125rem'
    fontWeight: 400
    lineHeight: 1.7
rounded:
  control: '8px'
  item: '10px'
  card: '12px'
  plate: '18px'
  tile-sm: '16px'
  tile: '24px'
  pill: '999px'
spacing:
  gutter: 'clamp(1.25rem, 4vw, 2.5rem)'
  max: '76rem'
  section: 'clamp(5rem, 10vw, 8rem)'
  panel: 'clamp(3rem, 6vw, 4.5rem)'
  plate-pad: 'clamp(1.25rem, 3vw, 2.25rem)'
  stack: '1.5rem'
components:
  button-primary:
    backgroundColor: '{colors.button-bg}'
    textColor: '{colors.button-text}'
    rounded: '{rounded.pill}'
    padding: '0.75rem 1.25rem'
  button-primary-dark:
    backgroundColor: '{colors.button-bg-dark}'
    textColor: '{colors.button-text-dark}'
    rounded: '{rounded.pill}'
    padding: '0.75rem 1.25rem'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.text}'
    rounded: '{rounded.pill}'
    padding: '0.75rem 1.25rem'
  button-small:
    backgroundColor: '{colors.button-bg}'
    textColor: '{colors.button-text}'
    rounded: '{rounded.pill}'
    padding: '0.5rem 0.875rem'
  badge:
    textColor: '{colors.text-2}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '0.1875rem 0.5rem'
  install-line:
    backgroundColor: '{colors.bg-subtle}'
    typography: '{typography.label}'
    rounded: '{rounded.item}'
    padding: '0.625rem 1rem'
  hero-tile:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.tile}'
    size: '6.5rem'
  group-head:
    textColor: '#ffffff'
    rounded: '{rounded.card}'
    padding: '1.25rem 1.375rem'
  code-window:
    backgroundColor: '{colors.code-window}'
    typography: '{typography.code}'
    rounded: '{rounded.card}'
  rail-item:
    textColor: '{colors.text}'
    rounded: '{rounded.control}'
    padding: '0.5rem 0.625rem'
  rail-item-active:
    textColor: '{colors.ember-ink}'
    rounded: '{rounded.control}'
    padding: '0.5rem 0.625rem'
  product-plate:
    backgroundColor: '{colors.plate-charcoal}'
    rounded: '{rounded.plate}'
    padding: 'clamp(1.25rem, 3vw, 2.25rem)'
  nav:
    backgroundColor: '{colors.bg}'
    height: '4rem'
---

# Design System: eshkra

## Overview

**Creative North Star: "The Family Index"**

eshkra.dev is a multi-product open-source company page built to the category standard, at the craft bar of voidzero.dev, hashicorp.com, astral.sh and tanstack.com (the user's explicit canon choice). One umbrella brand frames four products that each feel like a product: the umbrella speaks in neutral ground, near-black ink and eshkra's ember, and the products speak through their own marks, graphite ribbons around an ember orb that share the eshkra mark's material, and the wordmark lockup. Products are shown first as a family index, then each opens into one large panel with real code.

The ground is quiet: white or near-black following the visitor's system, hairline borders, soft 12px corners, generous whitespace and one typeface family doing almost everything. Colour is rationed into two materials. Ember is eshkra's material: the key headline phrase, focus, selection, the active rail item, and the glowing core of every code plate, which borrows the eshkra mark's dark petals around an ember core. The product hues are the products' colour and stay small: hero tile shadows, connectors and family group heads. Light and dark are the same design, not two moods.

The bespoke "pre-printed form" direction was explicitly rejected by the user, as were generic AI-startup glow, an academic register, heavy animation and SaaS-template sameness.

**Key Characteristics:**

- Neutral ground with hairline borders; the same layout and hierarchy in light and dark.
- Ember is the brand material; product hues stay on product markers (tile shadows, connectors, group heads).
- Mona Sans for all text, its width axis widened on display; JetBrains Mono for code and small technical labels.
- Every visible product name is the wordmark lockup: wide heavy "ML", light lowercase rest.
- Product marks as app-icon tiles and inline icons. They are the maintainer's final transparent PNGs (about 960px), so larger uses are open.
- Code always on a dark window, set on a grained charcoal plate with an ember core, the eshkra mark's material.
- Restrained motion: one CSS draw-in on load and a rail that marks the panel in view with one small script; nothing else moves on its own.

## Colors

A cool neutral ladder in two themes, one warm brand material, and four saturated product hues kept to small product markers.

### Primary

- **eshkra Ember** (light `ember`, dark `ember-dark`): taken from the core of the eshkra mark. Used for the hero headline's key phrase, the focus ring, text selection (a 28% ember mix under `text`), the hover underline beneath family-index wordmarks, the active rail item's 12% wash, and the core of every code plate. Flat ember is for large text and non-text marks only.
- **Ember Ink** (light `ember-ink`, dark `ember-ink-dark`): the small-text form of ember, for small text that must carry the accent (the active rail item, the 404 status code).

### Secondary

- **Product hues** (`hue-mlbundle` rust, `hue-mlschema` gold, `hue-mlform` orange, `hue-mlsuite` amber): one warm step per product, sampled from the marks. All four marks are graphite ribbons around an ember orb, the eshkra material, so the family reads as one: the hues only tell the products apart. Each hue drives its own product's hero tile shadow and incoming connector line; the family-index group headers blend the hues of their members (Libraries: graphite to rust; Application: graphite to rust to amber), graphite because the final marks are.

### Neutral

- **Ground** (`bg` / `bg-dark`): page background; also the theme-color meta.
- **Subtle Ground** (`bg-subtle` / `bg-subtle-dark`): metrics strip, footer band, install line, hover wash on rail and index items.
- **Surface** (`surface` / `surface-dark`): hero tiles; raised against the ground by border and shadow, not by tint.
- **Hairline** (`border` / `border-dark`): section dividers, panel separators, nav bottom edge, tile and install borders.
- **Strong Hairline** (`border-strong` / `border-strong-dark`): ghost-button ring, badge ring, the rule above index items, connector start colour, scrollbar thumb.
- **Ink ladder** (`text`, `text-2`, `text-3` and their dark pairs): headings and active states; body and descriptions; meta, stage labels and footer headings.
- **Button Ink** (`button-bg`/`button-text` and dark pair): the primary button inverts with the theme, near-black on light, near-white on dark.
- **Code Window** (`code-window`): the code window ground in both themes, with a 10% white hairline.
- **Plate Charcoal and Plate Core** (`plate-charcoal`, `plate-core`): the code plate's material, taken from the eshkra mark. Charcoal is the middle stop of a radial ground (#2b2b2f to #19191c to #0e0e10); the core is the hot stop of the ember radial (#fff1d2, #ffb547, #ff7a1a, then ember and a deep rust fading out).

### Named Rules

**The Two Voices Rule.** Ember is eshkra's material; product hues are product markers. Plates, focus, selection and the active rail state are ember for every product alike. A product hue appears only on its own tile shadow, its connector and its group-head stop, and never colours chrome (nav, buttons, footer, body text) or a plate.

**The Ember Material Rule.** Ember is not a rare accent; it is the brand material of every code plate, glowing from a core whose position shifts per panel. As flat colour it stays on one headline phrase per view and on interaction states, and it never fills a button. `--ember-glow` exists in the token set but is currently unused; do not treat it as a sanctioned effect until a surface needs it.

**The Ink Button Rule.** The primary action is ink, not accent: near-black on light, near-white on dark.

## Typography

**Display Font:** Mona Sans Variable (self-hosted via @fontsource, fallback system-ui)
**Body Font:** Mona Sans Variable
**Label/Mono Font:** JetBrains Mono Variable (self-hosted via @fontsource, fallback ui-monospace), contextual alternates off

**Character:** GitHub's open-source grotesque carries everything, tightened and slightly widened at display sizes for a confident, engineered voice; JetBrains Mono marks anything a developer would copy or count.

### Hierarchy

- **Display** (700, clamp(2.75rem, 6.2vw, 4.75rem), 0.98, width 106%, max 15ch): the hero headline only.
- **Headline** (700, clamp(2rem, 4.2vw, 3.25rem), 1.02, width 104%): section heads, max 44rem with a 1.125rem `text-2` paragraph beneath.
- **Title** (700, clamp(1.875rem, 3.4vw, 2.75rem), 1.05, width 104%): each product panel's headline.
- **Statement** (600, clamp(1.75rem, 3.6vw, 2.75rem), 1.15): the mission line, set in `text-3` with its resolving sentence lifted to `text`.
- **Lede** (400, clamp(1.0625rem, 1.6vw, 1.25rem), 1.6, max 44rem): hero sub-line in `text-2`.
- **Body** (400, 1rem, 1.6): running text; panel descriptions at 1.0625rem, max 34rem.
- **Wordmark** (Mona Sans; "ML" 800 at width 125%, -0.01em; the rest 300 at width 100%; size set by context: 1.0625rem on hero tiles and index items, 1.625rem in the panel identity row, inherited in nav, rail, button and footer): every visible product name.
- **Label** (mono, 0.75 to 0.8125rem, letter-spacing 0.02em): metrics captions, stage labels, badges, facts row, window titles. Footer column headings are the one uppercase use (0.75rem, 500, 0.04em).
- **Code** (mono, 0.78125rem, 1.7): snippets inside the code window, highlighted by Shiki `github-dark-default` through Astro's `<Code>`.
- **Numerals** in the metrics strip switch back to Mona Sans (700, 1.375rem, tabular figures) against mono captions.

### Named Rules

**The One Family Rule.** Mona Sans sets every word that is not code or a technical label. Display weight comes from 700 plus the width axis (104 to 110%), never from a second display face.

**The Wordmark Lockup Rule.** Every visible product name is the lockup, never plain text: "ML" in Mona Sans at width 125% and weight 800, followed by the lowercase rest of the name (bundle, schema, form, suite) at normal width and weight 300, unbroken (no wrap). It is one shared component and applies to nav links, the nav button ("Try MLsuite"), hero tiles, family-index items, the rail, panel identity rows and footer links. Only code, install commands and URLs keep the package spelling. This is a binding brand rule from the user.

**The Mono Means Technical Rule.** Mono is for install lines, code, versions, counts' captions and stage labels. Headings, buttons and prose are never mono.

## Layout

Content sits in a centred column (max 76rem) with a fluid gutter (clamp(1.25rem, 4vw, 2.5rem)). Sections are separated by large fluid gaps (clamp(5rem, 10vw, 8rem)) and full-bleed hairlines rather than boxes. Above the content sits a sticky 4rem nav.

The hero is centred: the eshkra mark as the hero's object (clamp(4.5rem, 7vw, 7rem), entering once with a short rise and turn), then headline and lede. The four product tiles (mark plus wordmark, no subtitle) are scattered over the hero's free space at random positions that never overlap the mark, headline, lede or each other. **The Teleport Rule:** a tile never travels; every 2.5 seconds the next tile in turn dissolves into horizontal scanlines with an ember flash (750ms) and re-forms at another random free spot (900ms), so each tile moves every ten seconds and only one is ever in transition. Below 60rem, without JavaScript, or when no free spot fits, the tiles sit in a centred row under the lede instead; reduced motion keeps the random placement but never teleports; the loop pauses while the hero is off screen or the tab is hidden. All of it sits over a faint 24px dot grid whose radial fade is centred on the headline block. There is no button in the hero; the nav's small primary button ("Try MLsuite") is the first viewport's only call to action. A full-bleed metrics strip on `bg-subtle` closes the first viewport. **The First Screen Rule:** hero and metrics strip together fill exactly the visible height under the sticky nav (`min-height: calc(100svh - 4rem - 1px)`), the hero content centred vertically and the strip resting on the bottom edge; screens shorter than 50rem tighten the headline, spacing and tiles so the first screen still fits, and taller content grows the section instead of clipping.

The family index is a two-column grid (3fr : 1.35fr) using subgrid rows so the Libraries and Application groups' headers, bodies and item rules align. Product panels sit beside a 10rem sticky rail; each panel is a two-column grid (0.8fr text : 1.25fr visual), separated by hairlines with clamp(3rem, 6vw, 4.5rem) vertical padding. The footer opens with a large centred brand band, then a three-column link grid with legal text pinned bottom-right.

Responsive behaviour: below 60rem the nav drops per-product links, the index and panels stack to one column and the rail is hidden; below 48rem the footer grid goes to two columns; below 40rem the hero tiles shrink to 4rem and the metrics strip left-aligns; below 30rem the nav keeps only brand, GitHub and the small primary button.

## Elevation & Depth

Mostly flat: depth comes from hairlines and the subtle ground tint. Shadows are soft, diffuse and negative-spread, reserved for objects that sit above the page (hero tiles, the code window) and for primary-button hover. Hero tile shadows are tinted with their product's hue. Code plates carry their own light: an ember core and a warm diagonal beam glowing out of charcoal. The sticky nav uses an 82% ground mix with a 14px backdrop blur.

### Shadow Vocabulary

- **Button lift** (`box-shadow: 0 10px 24px -10px rgb(0 0 0 / 0.35)`, with translateY(-1px)): primary-button hover only.
- **Tile rest** (`0 12px 28px -14px color-mix(in oklab, var(--hue) 55%, transparent), 0 2px 6px rgb(0 0 0 / 0.06)`): hero mark tiles.
- **Tile hover** (`0 18px 34px -14px color-mix(in oklab, var(--hue) 70%, transparent), 0 2px 6px rgb(0 0 0 / 0.08)`, with translateY(-4px)).
- **Window** (`0 24px 48px -20px rgb(0 0 0 / 0.55), 0 2px 6px rgb(0 0 0 / 0.25)`): the code window on its plate.

### Named Rules

**The Soft Shadow Rule.** Every shadow is blurred with a negative spread. No hard offset shadows, no glow halos around text.

**The Lit Plate Rule.** Every code plate is the eshkra mark's material, layered top to bottom: an ember core radial (#fff1d2, #ffb547, #ff7a1a, rgb(232 89 12 / 0.6), rgb(140 46 8 / 0.3), transparent at 60%) centred at `--gx`/`--gy`; fine 118deg diagonal lines in the mark's warm light (rgb(255 170 110 / 0.09), 2px every 16px); a soft 118deg beam (rgb(255 138 60 / 0.16) peaking at 48%, clear by 30% and 66%); then a charcoal radial ground (#2b2b2f to #19191c to #0e0e10). SVG fractal noise sits over it at 0.55 opacity in soft-light. The core moves per panel so adjacent plates never repeat: mlbundle 88%/12%, mlschema 10%/90%, mlform 92%/88%, mlsuite 8%/10%. The plate is the only textured surface in the system, looks the same in light and dark, and never takes a product hue.

## Shapes

Soft, consistent corners: 12px for cards, group headers and the code window; 18px for product plates; 8 to 10px for small interactive rows (rail items, index items, install line); 24px (16px on small screens) for the app-icon tiles; full pills for buttons and badges; circles for dots. Borders are 1px hairlines; the ghost button draws its ring as an inset shadow so it does not shift layout. Connector lines are 2px with rounded ends.

## Components

### Buttons

Confident, ink-filled pills.

- **Shape:** full pill (999px).
- **Primary:** button ink fill and text, 600 weight at 0.9375rem, padding 0.75rem 1.25rem, optional 14 to 16px icon (arrow-up-right for external destinations, book for docs, GitHub mark for source).
- **Hover / Focus:** lifts 1px with the button-lift shadow over 280ms on the ease-out curve; reduced motion keeps the shadow but drops the lift. Focus is the global 2px ember outline, 3px offset.
- **Ghost:** the secondary action beside a primary (the GitHub link in each panel); transparent with a 1px inset `border-strong` ring and `text` colour; hover deepens the ring to `text-3`.
- **Small:** 0.5rem 0.875rem padding at 0.875rem; the nav's "Try MLsuite", which carries the wordmark lockup inside the button.

### Chips

- **Version badge:** mono 0.75rem in `text-2`, 1px `border-strong` pill ring, beside the panel's wordmark lockup (version and maturity, e.g. "v0.2.1 · pre-alpha").

### Cards / Containers

- **Hero tile:** 6.5rem `surface` square, 24px radius, hairline border, hue-tinted tile shadow, 4rem mark centred; links to its panel.
- **Group header:** 12px radius, white text on a blended gradient of the group's product hues.
- **Code plate:** 18px radius, fluid padding (clamp(1.25rem, 3vw, 2.25rem)), the Lit Plate material; holds the code window.
- **Code window:** `code-window` ground, 12px radius, 10% white hairline, a bar with three muted dots and a mono file title at 60% white, then Shiki code. Always dark in both themes.
- **Install line:** mono 0.875rem on `bg-subtle`, hairline border, 10px radius, muted `$` prompt that is not selected; the command selects as a whole.

### Navigation

- **Nav:** sticky, translucent ground with blur and a hairline bottom. eshkra mark (32px) plus brand wordmark (760, width 108%); Projects plus the four product wordmarks at 0.9375rem in `text-2` that turn `text` on hover, no underline (product links drop below 60rem); GitHub icon link and a small primary button at the right.
- **Footer:** `bg-subtle` brand band with the eshkra mark (up to 13.75rem) and a large wordmark (760, width 110%), then mono uppercase column heads with `text-2` links, product names set as wordmarks.

### Product Rail (signature)

A 10rem sticky list beside the panels: 22px mark plus product wordmark, 8px-radius rows, entries in `text-2` with marks at 0.7 opacity and a `bg-subtle` hover wash. A small inline IntersectionObserver script (the page's only JavaScript, rootMargin `-45% 0px -50% 0px`) sets `aria-current="location"` on the rail link whose panel is crossing the middle of the viewport. The current entry turns `ember-ink` on a 12% ember wash (color-mix in oklab with transparent) with its mark at full opacity. Colour, background and mark opacity transition over 240ms on the ease-out curve, and the transitions are off under reduced motion. Without JavaScript every entry stays a plain link.

### Hero Path

The four tiles in path order (Package, Describe, Render, Run & review) with the product wordmark and a mono stage label. Each connector runs from `border-strong` into the next product's hue and draws in once on load (scaleX, 700ms ease-out, staggered 140ms). This is the system's one motion moment; reduced motion disables it, tile transitions and smooth scrolling.

## Do's and Don'ts

### Do:

- **Do** follow `prefers-color-scheme` and ship the same layout and hierarchy in light and dark, swapping only the paired tokens.
- **Do** set every visible product name with the shared wordmark lockup ("ML" 800 at width 125%, rest 300 at width 100%); keep package spelling only in code, install commands and URLs.
- **Do** use ember as eshkra's material: the code plate core, one headline phrase, focus outline (2px, 3px offset), selection, the active rail item and hover underlines; use `ember-ink` for small accented text.
- **Do** keep each product hue on its own product markers: its tile shadow, its connector, its group-header stop.
- **Do** give each new panel's plate its own ember core position so adjacent plates never repeat.
- **Do** set code with Astro's `<Code>` and Shiki `github-dark-default` on the dark code window, with snippets taken from the project READMEs.
- **Do** use the marks from `src/assets/marks` and `src/assets/brand` through Astro's image pipeline; all five are the maintainer's final transparent PNGs. A vector version would let them go beyond hero scale.
- **Do** use the inline Lucide-grid stroke icons (24px grid, 2px stroke, round caps) and the filled GitHub mark at 14 to 20px.
- **Do** keep the page static by default: motion in CSS, gated by `prefers-reduced-motion`; the rail's observer is the only script, and every enhancement leaves a complete no-JavaScript state.

### Don't:

- **Don't** return to the rejected pre-printed form direction, generic AI-startup glow, an academic register, heavy animation or a SaaS template.
- **Don't** fill buttons or flat areas with ember (as area it appears only as the plate's glowing core), and don't put product hues on plates, nav, footer, buttons or body text.
- **Don't** write a product name as plain text outside code, install commands and URLs, and don't rebuild the lockup by hand; use the shared component.
- **Don't** add a second display face or set headings in mono.
- **Don't** use hard offset shadows or text glows; shadows stay soft and negative-spread.
- **Don't** recolour, crop or flatten the marks; their graphite and ember glow are the brand.
- **Don't** add small labels or kickers above headings; headings stand on their own.
