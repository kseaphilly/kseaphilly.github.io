# KSEA Philly Wiki Schema

## Directory Structure
-   `raw/`: Immutable sources (original transcripts, legacy HTML data).
-   `wiki/entities/`: Specific people, groups, or organizations (e.g., UPenn, Dr. Wookjin Choi).
-   `wiki/concepts/`: Abstract design or technical rules (e.g., Grid Consistency, Image Cropping).
-   `wiki/sources/`: Summaries of imported documents or webpages.
-   `wiki/log.md`: Chronological log of all operations performed on the wiki.
-   `wiki/index.md`: Central catalog of all wiki pages.

## Content Rules
1.  **Strict Identification**: Every entity must have a unique ID and link to its original source.
2.  **Visual Tokens**: Any design-related concept must define its CSS variable or coordinate (e.g., `var(--w-navy)`).
3.  **Wiki Links**: Use `[[wikilink]]` syntax for cross-references between pages.
4.  **Frontmatter**: Every markdown file should start with YAML frontmatter containing `title`, `type`, and `date`.
