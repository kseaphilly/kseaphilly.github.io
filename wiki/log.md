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

## 2026-09-08
- **Event Status**: Updated `STEP-UP-2026.md`, `Events-Log.md`, `Specific-Events.md`, and `index.md` to record that KSEA STEP-UP 2026 was cancelled and did not take place.
- **Event Planning & Schedule**: Registered `Fall-Membership-Drive-2026` (held September 4, 2026 at UPenn Bodek Lounge, co-hosted with KoGSA, concluded). Updated `Joint-Seminar-Series` with semester-based format (Fall & Spring semesters at UPenn Smilow Center & Levine Hall) kicking off September 10, 2026.
- **Seminar Series #1**: Published details and RSVP for Fall 2026 Kickoff Seminar featuring Sue Hyon Kim (UPenn Nursing) on "LLMs in Liver Transplantation Selection" on September 10, 2026 at Smilow Center 10F. Downloaded flyer asset to `images/events/seminar-series/20260910-seminar.jpg`.
- **Live Site Deployment**: Updated production root pages (`index.html`, `events.html`) with Seminar #1 (Sue Hyon Kim, Sept 10 with flyer & RSVP), Fall Membership Drive 2026 (Sept 4 recap), and retired cancelled STEP-UP 2026.
- **KSEA NJ Tech Webinar**: Added cross-promoted Tech Webinar featuring Benji Shin (CEO, Zenerate) on "AI in Architecture & Real Estate" (Sept 29, 2026) with Zoom link to root `index.html`, root `events.html`, and registered `NJ-Tech-Webinar-2026.md`.
- **Card Ordering**: Reordered root `index.html` event cards so upcoming events (Joint Seminar #1, KSEA NJ Tech Webinar) take priority at the top, moving concluded 2026 Election Results card down after NMSC 2026 in reverse chronological order.
- **Fiscal Year Card Separation & Seminar Decoupling**: Converted previous fiscal year (FY 2025–2026) events on `index.html` into compact small cards (`.card-sm`), while keeping `events.html` fully detailed. Disentangled the semester-based Joint Seminar Series into distinct event entities: active `Joint-Seminar-Series-2026-2027`, individual kickoff `Joint-Seminar-2026-09-10`, and concluded `Joint-Seminar-Series-2025-2026` with 2025 schedule/collage assets.
