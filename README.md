# KSEA Philadelphia Chapter Website

This repository hosts the official website for the KSEA Philadelphia Chapter. It features a modern "Bio × AI" design system and a comprehensive wiki for knowledge management.

## 🚀 Quick Start

### Option 1: Live Demo
View the live site at: **[https://kseaphilly.github.io](https://kseaphilly.github.io)**

### Option 2: Local Development
1.  **Clone the repository**
    ```bash
    git clone https://github.com/kseaphilly/kseaphilly.github.io.git
    cd kseaphilly.github.io
    ```

2.  **Open in your browser**
    Open `v2/index.html` in your web browser.
    *Note: Some browsers may block local file access to CSS/JS. If you encounter issues, use a simple Python server:*
    ```bash
    cd v2
    python3 -m http.server 8000
    # Then open http://localhost:8000 in your browser
    ```

## 📂 Repository Structure

```
kseaphilly.github.io/
├── v2/                  # Production website (current design)
│   ├── index.html       # Homepage
│   ├── about.html       # About page
│   ├── leadership.html  # Leadership page
│   ├── events.html      # Events page
│   ├── membership.html  # Membership page
│   ├── sponsors.html    # Sponsors page
│   ├── yg.html          # Young Generation page
│   ├── careers.html     # Careers page
│   ├── assets/          # Images and fonts
│   └── css/             # CSS stylesheets
├── wiki/                # Knowledge base (LLM-Wiki Pattern)
│   ├── index.md         # Wiki entry point
│   ├── log.md           # Operation history
│   ├── _context.md      # Project context
│   ├── concepts/        # Design & technical concepts
│   └── entities/        # People, events, organizations
├── scripts/             # Automation scripts
│   └── migration/       # HTML migration tools
└── assets/              # Global assets (logos, photos)
```

## 🛠️ Technical Documentation

### Design System
- **Style**: "Bio × AI" - Minimalist, high-contrast, typography-focused
- **Colors**:
  - Primary Navy: `#2E3A94`
  - Background: `#FAF6EC` (Warm Paper)
  - Accent: `#B0413E` (Brick)
- **Layout**:
  - 1px borders with `border-radius: 8px`
  - Circular profile images (`120px`, `object-fit: cover`)
  - Responsive grid layouts

### LLM-Wiki Pattern
This site uses the **LLM-Wiki Pattern** for knowledge management:
- **Wiki-First Approach**: All content originates in `wiki/` as Markdown
- **Three-Layer Architecture**:
  1.  **Raw Sources** (not in this repo)
  2.  **Wiki** (`wiki/`) - Interlinked Markdown pages
  3.  **Static Site** (`v2/`) - Generated HTML from wiki
- **Key Files**:
  - `wiki/index.md`: Wiki navigation and entry point
  - `wiki/log.md`: Chronological operation history
  - `wiki/AGENTS.md`: AI agent instructions and memory
  - `wiki/concepts/`: Design rules and technical standards
  - `wiki/entities/`: People, events, and organizations

### Migration Process
Legacy HTML content has been migrated to the wiki structure:
1.  **Legacy Content**: Found in `wiki/Legacy-Home-Content.md`
2.  **Current Content**: Defined in `wiki/V2-Home-Content.md`
3.  **Migration Scripts**: Located in `scripts/migration/` for refactoring

## 🤝 Contributing

### Adding Content
1.  **Create a Wiki Page**: Add a new file in `wiki/entities/` (e.g., `wiki/entities/new-event.md`)
2.  **Update Index**: Add a link to `wiki/index.md`
3.  **Generate HTML**: Run the migration scripts or manually update `v2/`
4.  **Verify**: Check `v2/` to ensure the new content renders correctly

### Design Guidelines
- Adhere to the **Bio × AI Design System** defined in `wiki/concepts/Bio-AI-Design-System.md`
- Use relative paths for all assets
- Maintain 1:1 ratio for profile images
- Use `mix-blend-mode: multiply` for logos on warm backgrounds

## 📝 License

MIT License - See [LICENSE](LICENSE) for details
