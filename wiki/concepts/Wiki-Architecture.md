---
title: Wiki Architecture (Progressive Disclosure)
type: concept
date: 2026-04-19
---

# Wiki Architecture: 3-Layer Progressive Disclosure

To maintain clarity and scalability, the KSEA Philadelphia LLM-Wiki follows a hierarchical "layering" strategy. This ensures that information is revealed progressively—from global maps to specific atomic data.

## Layer 1: The Global Map (Entry Points)
**Purpose**: Orientation and routing.
- **Goal**: Answer "What is in here?" and "How is it organized?"
- **Files**:
    - `index.md`: The central hub for all users.
    - `_context.md`: Technical and organizational summary.
    - `purpose.md`: Vision and intent.
    - `log.md`: Chronological history of changes.

## Layer 2: The Domain Hubs (Category Indices)
**Purpose**: Categorized directories.
- **Goal**: Answer "Tell me about the people" or "Show me the project timeline."
- **Files**:
    - `entities/people/People.md`: Master directory of leaders and members.
    - `entities/events/Events-Log.md`: History and upcoming schedule.
    - `entities/partners/Partners.md`: Hub for APS and regional collaborations.
    - `concepts/Design-System.md`: Rules for visual identity.

## Layer 3: The Atomic Records (Data Nodes)
**Purpose**: Detail-dense facts.
- **Goal**: Answer "Who is Dr. Wookjin Choi?" or "When was NMSC 2026?"
- **Files**:
    - Individual people stubs (`Su-Chin-Heo.md`).
    - Specific event records (`NRC-2026.md`).
    - Technical deep-dives.

## Implementation Rules
1. **Vertical Linking**: Layer 1 must link to Layer 2. Layer 2 must link to Layer 3.
2. **Horizontal Linking**: Nodes in Layer 3 are linked via [[wikilinks]] only if they share direct clinical or organizational relevance.
3. **Disclosure Flow**: Avoid listing Layer 3 "Atoms" directly in Layer 1. Use the Hubs as the gateway.
