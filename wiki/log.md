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

## 2026-09-12
- **Leadership Appointment**: Appointed S. Sonya Gwak as Executive Director across production pages (`leadership.html`, `v2/leadership.html`) with affiliation set to The Water Center at Penn and profile photo `assets/sonya-gwak.jpg`.
- **Recruitment Notice**: Removed Executive Director from open position banners in `leadership.html` and `v2/leadership.html`.
- **Wiki Sync**: Registered entity `S-Sonya-Gwak.md` and updated `Leadership-Page-Content.md`, `People.md`, and `people/index.md`.
- **Joint Seminar #1 Concluded**: Updated Sept 10 kickoff seminar status to Concluded across production pages (`index.html`, `events.html`, `v2/index.html`, `v2/events.html`). Arranged event photos as compact 140×105px thumbnails (with lightbox zoom) so individual faces are not displayed prominently on the page layout.
- **Wiki Sync**: Updated `Joint-Seminar-2026-09-10.md` with photo assets and moved to completed table in `Events-Log.md`.
- **Unpaid Membership Prevention**: Added prominent warning banner and direct payment login link to `membership_instruction.html` and `v2/membership_instruction.html`. Emphasized Step 5 (Pay Membership Fee) as a mandatory completion step to prevent drop-off after account creation.
- **Social Sharing & SEO Optimization**: Added OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`), Twitter Card, and meta description tags across root and `v2/` pages (`index.html`, `events.html`, `leadership.html`, `membership.html`, `membership_instruction.html`, `about.html`) using `assets/ksea_phily_logo.png`.
- **Annual Milestones Roadmap (2026–2027)**: Added roadmap cards to `events.html` and `v2/events.html` for December 2026 End-of-Year Party, Late Jan/Early Feb 2027 Chapter Symposium, and Mid/Late April 2027 NRC, along with Chapter Council recruitment CTA. Synchronized `Events-Log.md`.
- **Canonical Address & Footer Alignment**: Reinforced official domain `philly.ksea.org` across all page footers in both root and `v2/`.
- **Search Engine Discovery**: Deployed `robots.txt` and updated `sitemap.xml` with 2026-09-12 modification timestamps, adding `membership_instruction.html` and `nmsc.html`.
- **Bilingual In-Place Membership Pages**: Refactored `membership.html`, `membership_instruction.html`, `v2/membership.html`, and `v2/membership_instruction.html` to place Korean as the primary language with English sub-captions inside the exact same container/card, removing separate fragmentation and maximizing readability for Korean members.
- **Coffee Chat Micro-Grants Program (2026–2027)**: Launched $500 chapter-subsidized micro-grant initiative ($10/person, capped at 5–10 members, max $100/meetup) to promote intimate networking across Bio/Pharma, AI/Tech, and Career tracks. Published featured announcement cards across `index.html`, `events.html`, `membership.html` (both root and `v2/`), registered `Coffee-Chat-Grants-2026.md` in wiki.
- **Coffee Chat Mentor Fast-Track & Pairing**: Integrated expedited pre-approval (Fast-Track) for meetups including chapter member mentors (professors/PIs/industry seniors) and mentor pairing support for junior groups across site cards and wiki spec.
- **Mentor Coffee Chat Formal Regulations**: Formalized comprehensive 7-article operating regulations in `Coffee-Chat-Grants-2026.md` establishing Fall 2026 as a $500 pilot phase (with Spring 2027 $500 expansion option), incorporating external/international mentor eligibility, enforcing anti-monopoly caps (1 grant/lab/semester), and standardizing pre-approval and disbursement workflows.
- **Zelle Direct Bank Disbursement**: Updated production event cards and wiki Article 7 designating direct Zelle transfer from the official chapter bank account as the primary, instant, fee-free reimbursement mechanism.
- **Unlisted Internal Review Deployment (coffee_chat.html)**: Removed Coffee Chat cards and benefits from public pages (`index.html`, `events.html`, `membership.html`) pending chapter executive officer consensus. Created unlisted standalone review page at `coffee_chat.html` (and `v2/coffee_chat.html`) with `robots: noindex, nofollow` for private officer review.
- **Bilingual English-First Standard (coffee_chat.html)**: Refactored `coffee_chat.html` and `v2/coffee_chat.html` into English-primary default with Korean paired in-place across all headers, summary cards, 5-article operating regulations, and email templates, adhering to KSEA's institutional bilingual standard.
- **Multi-Tier Cascading Mentorship Standard**: Integrated "Anyone Can Be a Mentor" principle across `coffee_chat.html`, `v2/coffee_chat.html`, and `Coffee-Chat-Grants-2026.md`, formally establishing 3 operational tiers: Graduate Student ➔ Undergrad, Postdoc ➔ Graduate Student, and Faculty/Industry ➔ Postdoc/Junior.
- **Relative Seniority Principle Refinement**: Clarified the Golden Rule across `coffee_chat.html`, `v2/coffee_chat.html`, and `Coffee-Chat-Grants-2026.md` establishing that any individual with relative seniority or advanced domain experience compared to the mentee cohort qualifies as a mentor.
- **Individual Member Cap & Guest Conversion Incentive**: Replaced per-lab constraint with individual member cap (1 grant per member per semester) to avoid penalizing large labs. Formalized guest conversion incentive where non-members attending once as guests immediately unlock full member grant eligibility upon registering as active KSEA members.
- **Chapter Senior Mentor Threshold Waiver**: Established executive waiver policy across `coffee_chat.html`, `v2/coffee_chat.html`, and `Coffee-Chat-Grants-2026.md` exempting sessions mentored by active KSEA Philadelphia Chapter senior members (professors, industry leaders, officers) from the strict 50% member ratio to empower targeted new member outreach and onboarding.
- **Enshrinement of The Chapter Bridge Model**: Formalized the primary strategic mission across `coffee_chat.html`, `v2/coffee_chat.html`, and `Coffee-Chat-Grants-2026.md` where an active KSEA member acts as the bridge connecting a KSEA senior mentor with non-member junior peers/labmates. Structured Track 1 (Bridge Model: 1 Member Organizer + 1 Senior Mentor + 3–8 Non-Members with 100% threshold waiver) as the flagship recruitment engine alongside Track 2 (General/External).

## 2026-09-25
- **Resource Extraction & Synthesis**: Extracted facts, statistics, and program details from `Brochure_2026_0921.pdf` (September 2026) and `KSEA Intro_55th-v2.pptx`.
- **About Page Refinement**: Enhanced `v2/about.html` and root `about.html` with national KSEA facts (Est. Dec 11, 1971; 501(c)(3); 55th Administration), 6-point statistical footprint grid (8,000+ paid members, 70+ chapters, 31 YG groups, 16 technical groups, 37 APS), 5-point core mission breakdown, member demographics (technical expertise, career status, degrees, regions), 16 Technical Groups breakdown (A–D), flagship national programs (UKC 2026/2027, SEED, IMPACTs, KATALYST, NMSC, STEM Art, YIG, Scholarships), and regional/APS partnerships.
- **Design System Integration**: Added custom component styles in `v2/style.css` for demographics progress bars (`.demo-grid-4`), 16 Technical Groups grid (`.tech-groups-grid`), and Flagship Programs cards (`.prog-grid-3`).
- **Wiki Memory Sync**: Updated `wiki/entities/site/About-Page-Content.md` with verified 2026 data.












