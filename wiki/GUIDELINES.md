# KSEA Philly LLM-Wiki Operating Guidelines

## principles
1. **Strict Facts Only**: **Most Important Operating Principle**. Never assume or use external knowledge. All wiki content must be directly verifiable in the code or verified by the human user.
2. **Source of Truth**: The wiki is the definitive record. If a change happens in the code, it MUST be reflected in the wiki first.
3. **Incremental Growth**: Never rewrite everything. Add, link, and refine incrementally.
4. **Traceability**: Every fact must point back to a source (e.g., a conversation log, a commit, or a legacy document).

## 1. Ingestion Workflow
When adding new information:
- **Step 1: Analysis**: Read the source document. Identify new entities, existing contradictions, and required updates.
- **Step 2: Synthesis**: Update `log.md` first. Then create/update specific pages in `entities/` or `concepts/`. Finally, update `index.md`.

## 2. Naming Conventions
- **Entities**: Use PascalCase or standard names (e.g., `Wookjin-Choi.md`, `NMSC-2026.md`).
- **Concepts**: Use kebab-case and descriptive titles (e.g., `bio-ai-design-system.md`).
- **Filenames**: Always lowercase except for proper nouns, using hyphens instead of spaces.

## 3. Page Structure (Yaml Frontmatter)
Every page must have:
```yaml
---
title: Page Title
type: entity | concept | source | synthesis
date: YYYY-MM-DD
tags: [tag1, tag2]
sources: [source-id-1, source-id-2]
status: draft | reviewed | verified
---
```

## 4. Linking & Network
- **Mandatory Linking**: No orphan pages. Every new page must be linked from `index.md` and at least one other page.
- **Wikilinks**: Use `[[Page-Name]]` for internal references.

## 5. Maintenance (Linting)
Weekly or after major migrations:
- Check for broken `[[wikilinks]]`.
- Prune "stale" information by marking it as `archived`.
- Ensure `log.md` matches the physical changes in the repository.

## 6. Redaction
- DO NOT commit real API keys, personal phone numbers, or private emails to the wiki.
- Use placeholders like `[REDACTED]` or generic titles for sensitive data.
