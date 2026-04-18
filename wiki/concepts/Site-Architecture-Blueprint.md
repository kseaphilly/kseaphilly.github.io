---
title: Site Architecture Blueprint
type: concept
date: 2026-04-18
---

# Site Architecture Blueprint

This blueprint describes the structural requirements for the KSEA Philadelphia website, independent of specific CSS styling. Any design system (Legacy or v2) must fulfill these functional areas.

## 1. Global Navigation & Brand
- **Brand**: "KSEA Philadelphia" + Local Chapter Branding.
- **Top Bar (Ticker)**: High-priority scrolling or static notification (Upcoming events).
- **Primary Nav Links**: `Home`, `About`, `Leadership`, `Events`, `Membership`, `Sponsors`, `YG`, `Careers`, `Contact`.
- **CTA**: Prominent "Join" or "Membership" invitation.

## 2. Hero Section
- **Headline**: Welcome message for Korean-American Scientists & Engineers.
- **Context**: Affiliation with National KSEA HQ.
- **Flagship Callout**: Dedicated visual space for the single most important current event (e.g., NMSC).

## 3. Knowledge Pillars / Sections
Functional blocks that must remain stable:
- **Upcoming Events**: Date-centric list of competition, symposiums, and seminars.
- **Past Reports / News**: Summary of concluded elections and award ceremonies.
- **Corporate Partners**: Logos of KSEA HQ, KUSCO, and local sponsors.

## 4. Footer Ecosystem
- **Contact & About**: Quick recap of the chapter's founding (Est. 1971).
- **Sitemap**: Direct links to all secondary pages.
- **Social/Connect**: Chapter email and external links.

## Re-creation Logic
To re-generate the site in a new style:
1. Fetch all events from `[[V2-Home-Content]]`.
2. Apply the layout rules from `[[Bio-AI-Design-System]]` or a new design node.
3. Use the mapping defined in this blueprint to place content in sections.
