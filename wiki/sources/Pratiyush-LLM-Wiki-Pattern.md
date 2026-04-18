# Pratiyush LLM-Wiki: The Framework & Agentic Integration

*Ref: https://github.com/Pratiyush/llm-wiki*

## High-Level Concept
A production-ready framework for implementing Karpathy's LLM-Wiki pattern. It shifts from a simple "collection of files" to a structured "Agentic Workflow" where tools, schemas, and approvals govern the knowledge evolution.

## Key Innovations

### 1. Agentic Memory & Steering
Unlike purely content-focused wikis, this version introduces meta-files to manage the AI itself:
- **`AGENTS.md`**: Defines the persona, instructions, and rules for AI agents interacting with the repository. 
- **`MEMORY.md`**: Captures long-term project context, major decisions, and session summaries to bridge the context window gap.
- **`_context.md`**: A machine-readable entry point (often using `@` identifiers) to map out the entire project structure for LLMs.

### 2. The MCP (Model Context Protocol) Layer
This framework includes a dedicated MCP server that provides native tools for the LLM:
- `wiki_query`: Hybrid search across the wiki.
- `wiki_lint`: Automated health checks for broken links and orphans.
- `wiki_confidence`: An LLM-driven self-assessment of how grounded a summary is in the raw sources.

### 3. Approval Workflow (`wiki/candidates/`)
To ensure high quality, it implements a staging area:
- New content is first written to `/wiki/candidates/`.
- Humans or secondary "Validator Agents" review the candidates.
- Approved content is moved to current production in `/wiki/entities/`.

### 4. Technical Integration
- **Shadow Linking**: Compatibility with Obsidian's internal linking while maintaining standard Markdown readability.
- **Clean File Exports**: Automated generation of `llms.txt` and `index.json` to make the knowledge base consumable by other LLM plugins or scripts.
- **Redaction**: Built-in regex filters to strip PII and sensitive tokens during sessions.

## Project Structure
```
.claude/         # Agent-specific instructions
.claude-plugin/  # Tool definitions
wiki/
├── entities/    # Core knowledge nodes (People, Places, Tech)
├── candidates/  # Staging for new content
├── logs/        # Machine-readable operation logs
└── index.md     # The navigation hub
```

## Philosophy
**Scalable Governance.** By adding an approval layer and specialized agent instructions, the wiki can grow into a massive corporate or research database without losing coherence or introducing hallucinations.
