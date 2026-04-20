---
title: Design System
type: concept
date: 2026-04-18
---

# KSEA Philly Design System — Complete Spec

Source of truth for all v2 HTML pages. Extracted from `KSEA Philadelphia Design/website.jsx`.

---

## 1. Design Tokens (CSS Variables)

| Variable       | Value     | Role                                          |
| :------------- | :-------- | :-------------------------------------------- |
| `--w-navy`     | `#2E3A94` | Primary brand, nav title, buttons, headings   |
| `--w-light`    | `#6B7AC9` | Secondary accent (event tags, light states)   |
| `--w-cream`    | `#F4EBD9` | Highlight backgrounds, button text on dark    |
| `--w-brick`    | `#B0413E` | Philly accent, section labels, Symposium tags |
| `--w-ink`      | `#121212` | All borders (1px), primary text, footer bg    |
| `--w-paper`    | `#FAF6EC` | Page background, default section background   |
| `--w-bio`      | `#2A6F5B` | Biology / Bio-engineering pillar, Seminar tags|

---

## 2. Typography Stack

Google Fonts: `Space Grotesk` · `JetBrains Mono` · `Noto Serif KR`

| Role              | Font            | Size / Weight / Style                                      |
| :---------------- | :-------------- | :--------------------------------------------------------- |
| Page H1           | Space Grotesk   | `64–80px`, `600`, `letter-spacing: -2px`, `line-height: 0.95` |
| Section H2        | Space Grotesk   | `44px`, `600`, `letter-spacing: -1px`                     |
| Card H3           | Space Grotesk   | `26px`, `600`, `letter-spacing: -0.5px`                   |
| Body text         | Space Grotesk   | `16–17px`, `400`, `line-height: 1.55`, `opacity: 0.85`    |
| Mono label/badge  | JetBrains Mono  | `10–12px`, `UPPERCASE`, `letter-spacing: 1px`             |
| Korean display    | Noto Serif KR   | `20–26px`, `500`, for decorative Korean text              |
| Stat number       | Space Grotesk   | `28px`, `600`, `letter-spacing: -0.5px`, color navy       |

---

## 3. Layout Principles

- **Full-bleed sections** — no `max-width` centering. All sections are full-width.
- **Horizontal borders** — `border-bottom: 1px solid var(--w-ink)` separates every section.
- **Grid cells** — components use CSS grid with `border-right` and `border-bottom` on cells, creating a newspaper/editorial grid feel.
- **Padding rhythm** — sections use `padding: 60px 40px`; inner cards use `padding: 32px`.
- **No border-radius** — all corners are sharp (0px radius).

---

## 4. Shared Components

### 4.1 Ticker Bar
```css
background: var(--w-ink); color: var(--w-cream);
padding: 8px 40px;
font-family: 'JetBrains Mono', monospace; font-size: 12px;
letter-spacing: 0.6px; text-transform: uppercase;
display: flex; justify-content: space-between;
```
Content: `▸ [Next event short description]` / `필라델피아 지부`

### 4.2 Navigation
```css
display: flex; align-items: center; justify-content: space-between;
padding: 20px 40px; border-bottom: 1px solid var(--w-ink);
background: var(--w-paper);
```
- **Logo**: `height: 46px`
- **Title**: `font-size: 19px; font-weight: 700; color: var(--w-navy);`
- **Subtitle** (below title): Available as `.nav-wordmark-sub` class but **NOT used** — KSEA Philadelphia covers all STEM disciplines, not just Bio/AI. Leave empty.
- **Links**: `font-size: 14px; font-weight: 500; gap: 30px`
- **Join button**: `background: var(--w-navy); color: var(--w-cream); padding: 10px 18px;`

### 4.3 Page Hero (inner pages)
Full-bleed section with `border-bottom: 1px solid var(--w-ink)`, padding `60px 40px`.
```html
<section class="page-hero">
  <div class="page-hero-eyebrow">§ 01 — [Page Label]</div>
  <h1>[Page Title]</h1>
  <p class="page-hero-sub">[1–2 sentence description]</p>
</section>
```
```css
.page-hero { padding: 60px 40px; border-bottom: 1px solid var(--w-ink); }
.page-hero-eyebrow { font-family: JetBrains Mono; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 20px; }
.page-hero h1 { font-size: 64px; font-weight: 600; line-height: 0.95; letter-spacing: -2px; margin: 0 0 24px; color: var(--w-ink); }
.page-hero-sub { font-size: 20px; line-height: 1.55; max-width: 680px; opacity: 0.85; margin: 0; }
```

### 4.4 Section Header
```css
.section-header {
  padding: 18px 40px;
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  letter-spacing: 1px; text-transform: uppercase;
  border-bottom: 1px solid var(--w-ink);
}
```
Pattern: `§ [N] — [Label]` / `[Right-side descriptor]`

### 4.5 Event Card
```css
.event-card {
  padding: 32px 32px 28px;
  border-right: 1px solid var(--w-ink); border-bottom: 1px solid var(--w-ink);
  background: var(--w-paper); min-height: 340px;
  display: flex; flex-direction: column;
}
```
Structure: tag badge (top-left) + date (top-right) → H3 → body → dashed-border footer with location + spots/link.

### 4.6 Board / People Card
```css
.board-card {
  padding: 32px;
  border-right: 1px solid var(--w-ink);
  min-height: 300px; display: flex; flex-direction: column; justify-content: space-between;
}
```
Name: `font-size: 17px; font-weight: 600`  
Role: `font-size: 13px; color: [pillar-color]; font-weight: 500`  
Affiliation: `font-size: 12px; opacity: 0.6; font-family: JetBrains Mono`

Portrait placeholder: diagonal-stripe background with color square bottom-right.

### 4.7 Partner / Lab Cell
Grid with `border-top + border-left` on container; each cell has `border-right + border-bottom`.
```css
.grid-cell { padding: 22px 20px; border-right: 1px solid var(--w-ink); border-bottom: 1px solid var(--w-ink); }
```

### 4.8 Sponsors Strip (navy)
```css
background: var(--w-navy); color: var(--w-cream);
padding: 60px 40px; border-bottom: 1px solid var(--w-ink);
```
Sponsor logos in grid: `border-top + border-left` in `rgba(244,235,217,0.2)`.

### 4.9 Footer
```css
background: var(--w-ink); color: var(--w-cream);
padding: 40px 40px 28px;
display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
```
Logo: `height: 42px; filter: brightness(0) invert(1);`  
Column headers: `font-family: JetBrains Mono; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; opacity: 0.5;`

### 4.10 Buttons
```css
/* Primary (navy on cream) */
.btn-primary { background: var(--w-navy); color: var(--w-cream) !important; }
/* Outline — for LIGHT backgrounds (cream/paper) */
.btn-outline { background: transparent; color: var(--w-ink) !important; border: 1.5px solid var(--w-ink); }
/* Outline LIGHT — for DARK backgrounds (navy panels) */
.btn-outline-light { background: transparent; color: var(--w-cream) !important; border: 1.5px solid var(--w-cream); }
/* Gold — highlight / KSEA HQ CTA */
.btn-gold { background: #f2a900; color: var(--w-navy) !important; }
/* Join (nav) — same as primary, smaller padding */
.btn-join { background: var(--w-navy); color: var(--w-cream) !important; padding: 10px 18px; font-size: 13px; }
```

**Background-contrast rule (critical)**
- `.btn-outline` uses `--w-ink` (#121212) and is only readable on cream/paper backgrounds.
- On any navy / dark section (e.g. `background: var(--w-navy)`), use `.btn-outline-light` instead, or the cream-on-navy contrast collapses.
- `.btn-gold` works on both navy (primary use) and cream; its text is always `--w-navy`.

---

## 5. Pillar Color Coding

| Pillar         | Color          | Tag usage               |
| :------------- | :------------- | :---------------------- |
| Biology        | `var(--w-bio)` | Bio seminar tags        |
| Bio-Engineering| `var(--w-navy)`| Default chapter color   |
| AI × Bio       | `var(--w-brick)`| Symposium, AI tags     |
| Competition    | `var(--w-navy)`| NMSC                    |
| General        | `var(--w-ink)` | Announcements, elections|

---

## 6. Responsive Breakpoint

At `max-width: 1024px`:
- All multi-column grids collapse to `1fr`
- Nav links hidden (mobile menu not yet implemented)
- Footer: `grid-template-columns: 1fr 1fr`
- Hero stats: `grid-template-columns: repeat(2, 1fr); position: relative`

---

## 7. Shared Stylesheet

All v2 pages link: `<link rel="stylesheet" href="style.css">`  
File location: `v2/style.css`  
Do **not** duplicate styles in `<style>` blocks on individual pages.

---

## 8. Philadelphia Landmark SVG System

Atmospheric background SVG silhouettes that reinforce the Philly identity without competing with content. Active assets: `city-hall.svg`, `art-museum.svg`, `skyline.svg`, `placeholder.svg`.

### 8.1 Base class
```css
.philly-landmark { position: absolute; pointer-events: none; user-select: none; }
```

### 8.2 Position variants
| Class | Anchor | Typical use |
| :--- | :--- | :--- |
| `.philly-landmark-br` | `bottom: -20px; right: -10px` | Hero / navy-panel corner accent |
| `.philly-landmark-bl` | `bottom: -20px; left: -10px` | Sponsors-section mirror case |
| `.philly-landmark-strip` | `left:0; right:0; bottom:0; width:100%; height:100%; object-fit: contain; object-position: center bottom` | Divider band between sections (`events.html`), or bottom-of-hero accent (`careers.html`) |

### 8.3 Tone & opacity variants
| Class | Effect | Opacity |
| :--- | :--- | :--- |
| `.philly-landmark-light` | `filter: brightness(0) invert(1)` — forces cream/white | `0.05` (default) |
| `.philly-landmark-dark` | no filter — uses asset's native ink tone on cream/paper | `0.06` |
| `.philly-landmark-strong` | Hero-anchor modifier (index/about hero) | `0.08` |
| `.philly-landmark-strip.philly-landmark-dark` | Strip override | `0.06` |
| `.philly-landmark-strip.philly-landmark-light` | Strip override | `0.05` |

### 8.4 Deployment map (current)
| Page | Asset | Variant | Size |
| :--- | :--- | :--- | :--- |
| `index.html` hero-right | `city-hall.svg` | `-br -light -strong` | 380px |
| `index.html` sponsors-section | `art-museum.svg` | `-bl -light` | 200px |
| `about.html` hero | `city-hall.svg` | `-br -dark -strong` | — |
| `membership.html` navy CTA | `city-hall.svg` | `-br -light` | 220px |
| `contact.html` chapter-contact panel | `art-museum.svg` | `-br -light` | 240px |
| `sponsors.html` bronze section | `city-hall.svg` | `-br -dark` | 260px |
| `leadership.html` hero | `city-hall.svg` | `-br -dark` | 260px |
| `yg.html` hero | `art-museum.svg` | `-br -dark` | 220px |
| `events.html` divider band | `skyline.svg` | `-strip -dark` | 140px |
| `careers.html` hero bottom | `skyline.svg` | `-strip -dark` | 90px |

### 8.5 Rules when adding a landmark
1. **Parent must be `position: relative; overflow: hidden`** — hero sections already satisfy this via `.hero, .page-hero { position: relative; overflow: hidden; }`. Non-hero sections need inline `position:relative;overflow:hidden`.
2. **Match tone to background**: navy/ink background → `-light`; cream/paper background → `-dark`.
3. **Strip mode only for skyline** — other landmark SVGs have 1:1-ish aspect and will float oddly when `object-fit: contain` leaves large empty areas.
4. **Never exceed opacity 0.10** in strip mode — detailed SVGs become heavy "gray bands" if too opaque.

---

## 9. Hero Watermark (`.philly-bg-text`)

Very large uppercase word in the page-hero background (e.g. `CAREERS`, `ABOUT`, `MEMBERSHIP`).

```css
.philly-bg-text {
  position: absolute; bottom: -0.15em; right: -0.05em;
  font-family: 'Space Grotesk', sans-serif; font-weight: 800;
  font-size: 22vw; line-height: 0.8; letter-spacing: -0.05em;
  color: var(--w-ink); opacity: 0.07;
  pointer-events: none; user-select: none; white-space: nowrap;
  z-index: 0;
}
```

Opacity set to `0.07` (raised from 0.03) so the page-label reads as an intentional watermark without dominating. Each page may override `font-size` inline (typical 10–22vw) to fit the word's length.
