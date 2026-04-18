---
title: KSEA Philly v2 Design System
type: concept
date: 2026-04-18
---

# KSEA Philly v2 Design System — Complete Spec

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
/* Primary */
.btn-primary { background: var(--w-navy); color: var(--w-cream); padding: 14px 22px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; }
/* Outline */
.btn-outline { background: transparent; border: 1.5px solid currentColor; padding: 14px 22px; font-size: 14px; font-weight: 600; cursor: pointer; }
/* Join (nav) */
.btn-join { background: var(--w-navy); color: var(--w-cream); padding: 10px 18px; font-size: 13px; font-weight: 600; border: none; cursor: pointer; }
```

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
