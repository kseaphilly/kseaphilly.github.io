---
title: Template Mapping Rules
type: concept
date: 2026-04-18
---

# Template Mapping Rules

These rules define how **Concept (Design)** and **Entity (Content)** are combined to generate UI.

## 1. People / Leadership Mapping
- **Source**: `wiki/entities/[Name].md`
- **Fields**:
  - `role` -> Maps to `.member-role` (rendered in JetBrains Mono).
  - `affiliation` -> Maps to `.member-org` (rendered in Space Grotesk).
  - `visual` -> Maps to `<img> src`.
- **Layout**: Use the `Leadership Card` spec from `[[Bio-AI-Design-System]]`.

## 2. Events Mapping
- **Source**: `wiki/entities/Events-Log.md` or individual event nodes.
- **Fields**:
  - `date` -> Maps to the bold numerical header in the card.
  - `category` -> Maps to the color-coded badge (`--w-navy` for Competition, `--w-brick` for Symposium).
- **Logic**: 
  - If `status == "Upcoming"`, place in Section 03 (Hero Card or Grid).
  - If `status == "Completed"`, place in Section 04 (Archive List).

## 3. Global Constants
- **Chapter Start**: "Est. 1971" (Found in `[[About-Page-Content]]`).
- **Chapter Mission**: Extracted from `[[About-Page-Content]]` and placed in the Hero Subtext or About Page Lead.

## Implementation Guide
When updating a page (e.g., `leadership.html`):
1. Load all files in `wiki/entities/` with `role` field.
2. Group by `type` (Officer, Councilor).
3. Inject into the HTML structure using the `Bio × AI` grid tokens.
