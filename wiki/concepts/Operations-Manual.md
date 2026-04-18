---
title: Site Operations Manual
type: concept
date: 2026-04-18
---

# Site Operations Manual

Guidelines for maintaining and evolving the KSEA Philadelphia digital presence.

## 1. Deployment Workflow
- **Hosting**: GitHub Pages (`kseaphilly.github.io`).
- **Branching**: `master` branch is production.
- **Migration Strategy**: New designs are staged in `/v2/` before being promoted to root. ALWAYS keep a backup of legacy files in root until migration is 100% verified.

## 2. Content Update Lifecycle (Wiki-First)
To maintain the "Long-term Memory," follow this sequence:
1. **Update Wiki**: Create or edit the relevant entity in `wiki/entities/` (e.g., a new event).
2. **Update Log**: Add a entry to `wiki/log.md`.
3. **Generate/Edit HTML**: Reflect the wiki data in the corresponding `.html` file.
4. **Verify**: Use the `wiki/GUIDELINES.md` to ensure no broken links or orphan pages.

## 3. Asset Management Rules
- **Naming**: Use kebab-case for all files (e.g., `nmsc-2026-poster.png`).
- **Paths**: ALWAYS use relative paths (e.g., `../assets/`) to ensure the site works across subdirectories.
- **Leadership Photos**: Must be cropped to 1:1 ratio, 120px circular, `object-fit: cover`.
- **Logos**: Use `mix-blend-mode: multiply` for white-background logos on the `--w-paper` background.

## 4. Maintenance Scripts
Located in `scripts/migration/`.
- **Purpose**: Idempotent refactoring.
- **Rule**: Never run a script without a manual review of the target file first. Scripts are tools to help, not absolute automations.

## 5. Aesthetics Enforcement (Bio × AI)
- **Primary Color**: `#2E3A94` (Navy).
- **Secondary Accent**: `#B0413E` (Brick).
- **Background**: `#FAF6EC` (Warm Paper).
- **Font-weight**: Headers at `600`, Body at `400` with `0.85` opacity for better readability.
