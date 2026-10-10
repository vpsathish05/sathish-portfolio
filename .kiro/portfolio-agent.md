# Portfolio Project Knowledge Base

## Project Overview

Next.js 15 portfolio website for Sathish Kumar V — AI Solutions Architect & Team Lead.

**Live URL:** https://vpsathish05.github.io/sathish-portfolio

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Static Export) |
| Language | TypeScript |
| Design System | Signal Design System v2 |
| Styling | CSS Custom Properties (tokens.css) |
| Deployment | GitHub Pages via GitHub Actions |

---

## Architecture

The portfolio uses the **Signal Design System v2** with 22 custom React components.

### Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main portfolio page (Signal DS components) |
| `src/app/layout.tsx` | SEO metadata, structured data, favicons |
| `design-system/components/signal.js` | 22 Signal DS React components |
| `design-system/components/signal.css` | Component styles |
| `design-system/tokens.css` | Design tokens (colors, spacing, typography) |
| `public/resume/Sathish_Kumar_V_Resume_v2.pdf` | Downloadable resume |

---

## Signal Design System Components

```
NavBar          Hero            SectionHeader   Metric
CapabilityGrid  ProjectCard     AgentTrace      Terminal
ArchitectureStack ProcessSteps  StackMatrix     Timeline
CredentialList  WritingList     Testimonial     ContactBand
Button          Tag
```

### Themes

- **Obsidian** — Dark theme (default)
- **Paper** — Light theme

Set via `data-theme` attribute on `<html>`.

---

## Project Structure

```
sathish-portfolio/
├── .kiro/                      # Kiro configuration
├── design-system/              # Signal DS v2
│   ├── components/
│   │   ├── signal.js           # React components
│   │   └── signal.css          # Styles
│   ├── tokens.css              # Design tokens
│   └── brand-book.md           # Design guidelines
├── public/
│   ├── resume/                 # PDF resume
│   ├── sathish-teams-img.png   # Profile photo
│   ├── favicon-*.png           # Favicons
│   └── manifest.json           # PWA manifest
├── resume/source/              # Resume markdown
├── scripts/                    # Automation
├── src/
│   ├── app/
│   │   ├── page.tsx            # Portfolio (Signal DS)
│   │   ├── layout.tsx          # Metadata
│   │   └── api/contact/        # Contact API
│   └── lib/
└── docs/job-hunt/              # Job search docs
```

---

## Common Tasks

### Update Hero Section

Edit `src/app/page.tsx` → `<Hero>` component props:
- `eyebrow` — Subtitle line
- `name` / `accent` — Name display
- `statement` — Main value proposition
- `graph` — Agent visualization nodes

### Update Projects

Edit `src/app/page.tsx` → `<ProjectCard>` components:
- `featured` — Boolean for featured styling
- `index` — Display number ("/01")
- `kind` — Category label
- `title` — Project name
- `summary` — Description
- `outcome` — Results (featured only)
- `tags` — Technology tags
- `href` — Link URL

### Update Experience Timeline

Edit `src/app/page.tsx` → `<Timeline items={[...]}>`:
- `period` — Date range
- `role` — Job title
- `org` — Company
- `current` — Boolean for current role
- `summary` — Description

### Update Stack/Skills

Edit `src/app/page.tsx` → `<StackMatrix groups={[...]}>`:
- `label` — Category name
- `items` — Array of `{ name, level }` where level is "daily" | "proficient" | "familiar"

### Update Favicon

```bash
# Replace public/sathish-teams-img.png with new image
# Then run:
node scripts/generate-favicon.mjs
```

---

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
npm run test         # Jest tests
npm run validate     # Full validation
```

---

## Deployment

Push to `main` → GitHub Actions → GitHub Pages

The site builds as a static export with base path `/sathish-portfolio/`.

---

## File Paths (Windows)

| Item | Path |
|------|------|
| Project root | `D:\S A T H I S H\Projects\sathish-portfolio` |
| Main page | `src\app\page.tsx` |
| Design system | `design-system\` |
| Public assets | `public\` |
| Resume PDF | `public\resume\Sathish_Kumar_V_Resume_v2.pdf` |

---

## GitHub Repository

- **URL:** https://github.com/vpsathish05/sathish-portfolio
- **Branch:** main
- **Owner:** vpsathish05
