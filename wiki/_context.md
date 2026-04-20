# /wiki/ Directory Context

## Core Responsibility
This directory tracks the technical and operational soul of the KSEA Philadelphia Chapter. It is the definitive source of truth for design tokens, migration logic, and community history.

## Project Overview
- **Repository**: KSEA Philadelphia Chapter Website (`kseaphilly.github.io`)
- **Current State**: Active migration from legacy HTML/Bootstrap to a minimal "Bio × AI" (v2) design system.
- **Key Files**: `/v2/` contains the production code. `/scripts/migration/` contains the refactoring logic.

## Structure
- `index.md`: Central map and entry point.
- `log.md`: Chronological history of all wiki and codebase shifts.
- `purpose.md`: Vision and directional intent of the chapter's digital presence.
- `schema.md`: Structural rules for appending to this knowledge base.
- `concepts/`: Where "how-to" and design rules live (e.g., `Design-System.md`).
- `entities/`: Where "who" and "what" live (e.g., events, people, partners).

## Design Tokens (Quick Reference)
- Primary Navy: `#2E3A94`
- Background: `#FAF6EC`
- Border: `1px solid #121212`
- Profiles: `120px` circular, `object-fit: cover`

## LLM Hint
Begin every task by reading `index.md`. Every major design or structural change must be recorded in `log.md` to maintain the chain of memory.

