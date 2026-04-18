---
title: Agentic Workflows
type: concept
---

# Agentic Workflows

Guidelines for AI agents (and humans) to maintain the site using this wiki.

## 1. Content update (The "Wiki-First" Rule)
1. **Identify** the target subfolder in `wiki/entities/`.
2. **Modify** the specific `.md` file.
3. **Log** the change in `wiki/log.md`.
4. **Deploy**: Update the corresponding HTML in `v2/`.

## 2. Health Monitoring
Run the following periodically:
```bash
python3 scripts/wiki_lint.py
```
It checks for:
- Orphaned pages.
- Broken [[wikilinks]].
- Sync between Wiki nodes and HTML files.

## 3. Organizational Updates
When hierarchy changes (e.g., new President):
1. Create/Update a file in `wiki/entities/people/`.
2. Update the `role` in the YAML frontmatter.
3. Run the mapping automation (or manual update) to refresh `leadership.html`.
