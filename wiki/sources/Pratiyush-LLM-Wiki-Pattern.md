# Pratiyush/llm-wiki Pattern Documentation

*Ref: https://github.com/Pratiyush/llm-wiki*

## Key Enhancements to the Karpathy Pattern
- **AI-Consumable Exports**: Generates `llms.txt`, `graph.jsonld`, and per-page `.txt` and `.json` siblings for other agents to consume.
- **MCP Server**: Built-in MCP server with tools like `wiki_query`, `wiki_lint`, and `wiki_confidence`.
- **Operating Guidelines**: Use of `AGENTS.md`, `MEMORY.md`, and `_context.md` for better agent steering.
- **Redaction by Default**: Automated cleaning of API keys and usernames from raw sessions.
- **Obsidian Integration**: Deep compatibility with Obsidian via symlinking and Dataview dashboards.

## Build Pipeline
`raw/sessions/` -> `wiki/entities/` -> `site/ (static HTML)`.
