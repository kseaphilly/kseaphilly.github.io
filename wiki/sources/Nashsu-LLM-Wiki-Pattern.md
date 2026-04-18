# nashsu/llm_wiki Pattern Documentation

*Ref: https://github.com/nashsu/llm_wiki*

## Key Enhancements to the Karpathy Pattern
- **2-Step CoT Ingest**: Step 1 (Analysis: entities, concepts, arguments) -> Step 2 (Generation: wiki files).
- **Knowledge Graph**: 4-signal relevance model (Direct link, Source overlap, Adamic-Adar, Type affinity).
- **Louvain Community Detection**: Automatic discovery of knowledge clusters.
- **Graph Insights**: AI-detected "Surprising Connections" and "Knowledge Gaps."
- **Vector Search**: Semantic search using LanceDB for better recall.

## Interface
Tauri-based desktop GUI with a 3-column layout (Knowledge Tree | Chat | Preview).
