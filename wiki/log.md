# KSEA Philly Wiki Log

## 2026-04-18
- **Migration**: Completed visual stabilization of `v2/` pages.
- **Automation**: Organized migration scripts into `scripts/migration/`.
- **Wiki**: Initialized LLM-Wiki structure following Karpathy's pattern.
- **Node**: Added `Bio × AI Design System` concept page.
- **Node**: Added `KSEA-Philadelphia-v2-Migration` via MCP ingest.
- **Correction**: Finalized membership tiers: Undergrad ($0), Paid Undergrad ($15), Grad ($15), Regular ($35), Lifetime ($525 or less).

## 2026-04-19
- **Design**: Refined `city-hall.svg` silhouette, specifically the William Penn statue's hat and right arm for a more natural and iconic look.
- **Design**: Further refined `city-hall.svg` — angular mansard corner pavilions (replacing rounded domes), removed lantern + pointed spire between statue and clock tier, replaced with single gentle cubic-bezier taper (clock-tier width 70 → statue pedestal width 10).
- **Asset**: Deleted `v2/assets/liberty-bell.svg`; all HTML references migrated to `city-hall.svg` or `art-museum.svg`.
- **Accessibility (buttons)**: Added `.btn-outline-light` variant in `v2/style.css` (cream text/border, inverts on hover) for use on navy backgrounds. Root cause: `.btn-outline` uses `--w-ink` (#121212), which is nearly invisible on `--w-navy` (#2E3A94). Applied at `membership.html:61` (Step-by-Step Guide) and `index.html:219` (View Partners → on sponsors-section); replaced prior inline cream-color overrides.
- **Landmarks (strip mode)**: Fixed skyline rendering in strip contexts (`careers.html:46`, `events.html:124`). Changed `.philly-landmark-strip` from `object-fit: cover` to `contain` — cover was cropping ~78% of the 2590×781 skyline viewBox vertically, producing a flat gray band. Added strip-specific opacity pair (`.philly-landmark-strip.philly-landmark-dark 0.06`, `-light 0.05`) distinct from corner-landmark opacities.
- **Hero watermark**: `.philly-bg-text` opacity raised 0.03 → 0.07 for legibility of big page-label watermarks (ABOUT / LEADERSHIP / CAREERS etc.).
- **Rename**: `concepts/Bio-AI-Design-System.md` → `concepts/Design-System.md`. The file documents the full v2 visual system (palette, typography, components, landmarks, watermark), not a Bio×AI-specific concept — consistent with the already-established stance that KSEA Philly covers all STEM disciplines. Updated 8 wiki references accordingly.
