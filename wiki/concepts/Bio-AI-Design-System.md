---
title: Bio × AI Design System
type: concept
date: 2026-04-18
---

# Bio × AI Design System (v2) - Technical Spec

This node contains the **Design Tokens** and **Layout Rules**. Do not store content here.

## 1. Design Tokens (CSS Variables)
| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--w-navy` | `#2E3A94` | Primary brand color, Headers, Buttons |
| `--w-paper` | `#FAF6EC` | Primary background (Warm off-white) |
| `--w-ink` | `#121212` | Borders (1px), Primary text |
| `--w-brick` | `#B0413E` | Accents, Warning/Callout text |
| `--w-bio` | `#2A6F5B` | "Bio" themed labels (Seminars) |

## 2. Typography Stack
- **Headers**: `font-family: 'Space Grotesk', sans-serif; font-weight: 600; letter-spacing: -1px;`
- **Data/Badges**: `font-family: 'JetBrains Mono', monospace; text-transform: uppercase; font-size: 11px;`
- **Body**: `font-family: 'Space Grotesk', sans-serif; line-height: 1.55; opacity: 0.85;`

## 3. Component Specs
### Leadership Cards
- **Container**: CSS Grid `repeat(auto-fit, minmax(280px, 1fr))`.
- **Image**: `width: 120px; height: 120px; border-radius: 50%; object-fit: cover;`
- **Border**: `1px solid var(--w-ink)` on bottom and right for a "Grid Cell" feel.

### Section Headers
- **Pattern**: `§ [Index] — [Title]`
- **Styling**: JetBrains Mono, 12px, border-bottom 1px.

### Event Cards (Small)
- **Background**: `var(--w-paper)` or `var(--w-cream)` for highlight.
- **Date Display**: Top-right corner, bold, `line-height: 1`.
