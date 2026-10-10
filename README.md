# Sathish Kumar V — Portfolio

Modern portfolio website showcasing AI Solutions Architecture work, built with Next.js 15 and the Signal Design System.

**Live:** [vpsathish05.github.io/sathish-portfolio](https://vpsathish05.github.io/sathish-portfolio)

---

## About

AI Solutions Architect & Team Lead with 7+ years of experience building production AI systems. This portfolio demonstrates expertise in:

- **Agentic AI Systems** — Autonomous agents with memory, reasoning loops, and tool orchestration
- **MCP Protocol** — Custom servers for enterprise system integration
- **RAG & Knowledge Systems** — Retrieval with citation tracking and confidence routing
- **Document Intelligence** — OCR pipelines for complex layouts
- **Data Engineering** — Medallion architecture, semantic layers, dbt

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Static Export) |
| Language | TypeScript |
| Design System | Signal Design System v2 (custom) |
| Styling | CSS Custom Properties + tokens.css |
| Deployment | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Project Structure

```
sathish-portfolio/
├── .github/workflows/
│   └── deploy.yml              # Auto-deploy to GitHub Pages
│
├── .kiro/                      # Kiro AI configuration
│   ├── hooks/                  # Automated validation hooks
│   ├── steering/               # Project rules
│   └── README.md               # Kiro setup docs
│
├── design-system/              # Signal Design System v2
│   ├── components/
│   │   ├── signal.js           # 22 React components
│   │   └── signal.css          # Component styles
│   ├── tokens.css              # Design tokens
│   ├── tokens.json             # Token definitions
│   └── brand-book.md           # Design guidelines
│
├── public/
│   ├── resume/                 # Downloadable resume PDF
│   ├── sathish-teams-img.png   # Profile photo
│   ├── favicon-*.png           # Favicon set
│   ├── apple-touch-icon.png    # iOS icon
│   ├── icon-*.png              # PWA icons
│   └── manifest.json           # PWA manifest
│
├── resume/
│   └── source/                 # Resume markdown sources
│       └── RESUME_ATS_OPTIMIZED.md
│
├── scripts/
│   └── generate-favicon.mjs    # Favicon generation
│
├── src/
│   ├── app/
│   │   ├── page.tsx            # Main portfolio (Signal DS)
│   │   ├── layout.tsx          # SEO, metadata, structured data
│   │   ├── globals.css         # Global styles
│   │   └── api/contact/        # Contact form API
│   ├── components/             # Legacy components (unused)
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data (legacy)
│   └── lib/
│       ├── basePath.ts         # GitHub Pages path helper
│       ├── structured-data.ts  # JSON-LD schemas
│       └── utils.ts            # Utilities
│
└── docs/job-hunt/              # Job search documentation
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/vpsathish05/sathish-portfolio.git
cd sathish-portfolio

# Install
npm install

# Develop
npm run dev

# Build
npm run build

# Validate (lint + typecheck + test)
npm run validate
```

---

## Signal Design System

The portfolio uses a custom design system with 22 components:

| Component | Purpose |
|-----------|---------|
| `NavBar` | Navigation with status badge |
| `Hero` | Landing with animated agent graph |
| `SectionHeader` | Section titles with index |
| `Metric` | Key statistics |
| `CapabilityGrid` | Expertise cards |
| `ProjectCard` | Work showcase |
| `AgentTrace` | Decision trace visualization |
| `Terminal` | Code/log display |
| `ArchitectureStack` | System architecture diagram |
| `ProcessSteps` | Workflow stages |
| `StackMatrix` | Technology proficiency |
| `Timeline` | Career history |
| `CredentialList` | Certifications/degrees |
| `WritingList` | Articles/publications |
| `Testimonial` | Quotes/endorsements |
| `ContactBand` | Contact CTA |
| `Button` | Actions |
| `Tag` | Labels |

### Themes

- **Obsidian** (default) — Dark theme with signal green accents
- **Paper** — Light theme for print/accessibility

Toggle in bottom-right corner.

---

## Deployment

Push to `main` triggers automatic deployment:

1. GitHub Actions builds static export
2. Deploys to GitHub Pages
3. Live at `vpsathish05.github.io/sathish-portfolio`

---

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build (type-check → next build)
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run type-check   # TypeScript check
npm run test         # Jest tests
npm run validate     # Full validation suite
```

---

## Configuration

### Environment

No environment variables required for local development. The site is fully static.

### Base Path

GitHub Pages requires base path configuration in `next.config.ts`:

```typescript
basePath: '/sathish-portfolio',
assetPrefix: '/sathish-portfolio/',
```

---

## Links

- **Portfolio:** [vpsathish05.github.io/sathish-portfolio](https://vpsathish05.github.io/sathish-portfolio)
- **GitHub:** [github.com/vpsathish05](https://github.com/vpsathish05)
- **LinkedIn:** [linkedin.com/in/sathish-kumar-310976153](https://www.linkedin.com/in/sathish-kumar-310976153/)
- **Medium:** [medium.com/@vpsathish05](https://medium.com/@vpsathish05)

---

## Author

**Sathish Kumar V**  
AI Solutions Architect & Team Lead

📧 sathishkumar05@gmail.com  
📍 Chennai, India → UK/US Remote

---

## License

MIT
