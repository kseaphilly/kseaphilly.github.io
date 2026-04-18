# Karpathy's LLM Wiki Pattern (Abstract)

*Original Abstract by Andrej Karpathy*

## High-Level Concept
A methodology for building personal knowledge bases using LLMs. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources.

## Three-Layer Architecture
1. **Raw Sources (`raw/`)**: Immutable. Transcripts, documents, logs.
2. **Wiki (`wiki/`)**: LLM-generated. Interlinked markdown pages.
3. **Schema (`schema.md`)**: Rules and configurations for the LLM.

## Three Core Operations
1. **Ingest**: Process raw sources into wiki pages.
2. **Query**: Read the wiki (and sources) to answer questions.
3. **Lint**: Check for broken links, orphans, and contradictions.

## Key Files
- `index.md`: Content catalog and navigation entry point.
- `log.md`: Chronological operation record.
- `[[wikilinks]]`: syntax for cross-references.

## Philosophy
**Human curates, LLM maintains.** The fundamental role division that ensures quality and scalability.
