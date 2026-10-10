---
inclusion: auto
name: Portfolio Project Rules
description: Rules and validation requirements for the portfolio and job hunt project
---

# Portfolio Project Rules

## Overview

Next.js 15 portfolio using Signal Design System v2 with 22 custom components.

---

## 🔐 Confidentiality

**Never include in public files:**

| Category | Examples | Replace With |
|----------|----------|--------------|
| Client Names | BC Partners, IDnow, Elevation Labs | "Enterprise Client", "PE Firm" |
| Internal Products | JLens, Tenali AI, JMAN Agent | "Enterprise Platform" |
| Employer Details | JMAN Group specifics | Generic descriptions |
| Colleague Names | Team member names | "team member" |

**Before commit:**
```bash
npx ts-node scripts/check-confidentiality.ts
```

---

## 🚨 Validation Requirements

**Every code change MUST pass:**

```bash
npm run validate && npm run build
```

| Command | Purpose | Must Pass |
|---------|---------|-----------|
| `npm run lint` | ESLint | ✅ |
| `npm run type-check` | TypeScript | ✅ |
| `npm run test` | Jest | ✅ |
| `npm run build` | Production | ✅ |

---

## Project Structure

```
src/app/page.tsx           # Main portfolio (Signal DS)
src/app/layout.tsx         # SEO, metadata
design-system/             # Signal Design System v2
├── components/signal.js   # 22 React components
├── components/signal.css  # Styles
└── tokens.css             # Design tokens
public/
├── resume/                # PDF resume
├── sathish-teams-img.png  # Profile photo
└── favicon-*.png          # Favicons
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Portfolio page with Signal DS |
| `design-system/components/signal.js` | 22 components |
| `design-system/tokens.css` | Design tokens |
| `public/resume/Sathish_Kumar_V_Resume_v2.pdf` | Resume |

---

## Signal Design System Components

```
NavBar, Hero, SectionHeader, Metric,
CapabilityGrid, ProjectCard, AgentTrace, Terminal,
ArchitectureStack, ProcessSteps, StackMatrix, Timeline,
CredentialList, WritingList, Testimonial, ContactBand,
Button, Tag
```

### Themes
- **Obsidian** (dark) — default
- **Paper** (light) — toggle in footer

---

## Git Workflow

1. Make changes
2. Run `npm run validate && npm run build`
3. Commit with descriptive message
4. Push to `main` → auto-deploys to GitHub Pages

---

## Common Tasks

### Update Content
Edit `src/app/page.tsx` component props directly.

### Update Resume
1. Edit `resume/source/RESUME_ATS_OPTIMIZED.md`
2. Generate PDF
3. Copy to `public/resume/`

### Update Favicon
```bash
# Replace public/sathish-teams-img.png
node scripts/generate-favicon.mjs
```

### Add Project
Add `<ProjectCard>` in `src/app/page.tsx`:
```tsx
<ProjectCard
  index="/08"
  kind="Category"
  title="Project Name"
  summary="Description"
  tags={["Tech1", "Tech2"]}
  href="https://..."
/>
```

---

## Links

- **Live:** https://vpsathish05.github.io/sathish-portfolio
- **Repo:** https://github.com/vpsathish05/sathish-portfolio
