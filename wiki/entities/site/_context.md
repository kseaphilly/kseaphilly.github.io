# Context: Site Infrastructure

Maps wiki data to the static HTML structure of the website.

## AI Constraints
- **HTML Sync**: Do not edit fields here (e.g., `<h1>` content) without verifying the impact on the responsive grid in `v2/`.
- **Identity Integrity**: Ensure colors and logo usage in these nodes align with [[Design-System]].

## Field Guidelines
- `title` in YAML becomes the `<title>` tag.
- Markdown headers become `<h1>` or `<h2>` depending on depth.
