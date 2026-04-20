---
title: MEMORY
type: status
date: 2026-04-18
---

# Project Memory: KSEA Philadelphia Digital Migration

This document serves as the long-term context buffer for AI agents. It tracks high-level state and critical decisions.

## Current State (v2.1)
- **Deployment**: Staged in `/v2/`. Root currently holds legacy (v1) code.
- **Infrastructure**: LLM-Wiki (Karpathy/Pratiyush Hybrid) fully initialized in `/wiki/`.
- **Sources**: All page content has been extracted from `v2/*.html` into `wiki/entities/`.
- **Identity**: AGENTS.md located at root for immediate visibility.

## Critical Decisions
| Date | Decision | Rationale |
| :--- | :--- | :--- |
| 2026.04.18 | **Wiki-First Policy** | To prevent knowledge drift between the site and the LLM's understanding. |
| 2026.04.18 | **Bio × AI Palette** | Established `#2E3A94` (Navy) and `#FAF6EC` (Paper) as the core identity. |
| 2026.04.18 | **120px Circular Crop** | Enforced for all leadership photos to maintain grid rhythm. |
| 2026.04.18 | **Strict Facts Policy** | All wiki content must be directly verifiable in source code or by user. No hallucinations. |
| 2026.04.18 | **Category Contexts** | Added `index.md` and `_context.md` to all entity subfolders for AI steering. |
| 2026.04.19 | **Button contrast rule** | `.btn-outline` (ink text) is readable only on cream/paper; added `.btn-outline-light` for navy panels to fix near-invisible buttons. |
| 2026.04.19 | **Strip-mode landmarks use `contain`** | `object-fit: cover` cropped ~78% of skyline content into a gray band; `contain` + strip-specific opacity (0.05–0.06) is the canonical pattern. |
| 2026.04.19 | **Liberty Bell retired** | Landmark palette reduced to `city-hall`, `art-museum`, `skyline`, `placeholder`. Keeps visual language consistent with the tower-and-statue motif. |

## Pending Work (Backlog)
- [ ] **Promotion to Root**: Move contents of `/v2/` to root once final review is complete.
- [ ] **Automated Linting**: Implement script to check for sync between `wiki/entities/*.md` and `v2/*.html`.
- [ ] **Asset Audit**: Verify all images in `v2/assets/` are correctly optimized and linked.

## Blockers / Risks
- **Protocol Security**: Local `file://` testing may block fonts/images in some browsers; use `python -m http.server` for verification.
- **Knowledge Drift**: Humans manually editing `v2/*.html` without updating the Wiki will break the "Single Source of Truth."
