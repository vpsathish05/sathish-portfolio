---
inclusion: auto
name: Portfolio Project Rules
description: Rules and validation requirements for the portfolio and job hunt project
---

# Portfolio Project Rules

## 🔐 CONFIDENTIALITY - TOP PRIORITY

**NEVER include these in any public file:**

| Category | Examples | Replace With |
|----------|----------|--------------|
| Client Names | BC Partners, IDnow, Elevation Labs, CivicPlus, etc. | "Enterprise Client", "PE Firm", "Healthcare Company" |
| Internal Products | JLens, Tenali AI, JMAN Agent | "Enterprise AI Platform", "Private AI Backend" |
| Employer Name | JMAN Group, JMAN, JLABS | "Consulting Firm" or omit |
| Project Codes | Project Horizon, DTaaS, IC Devil | "AI Platform Project" |
| Colleague Names | Any team member names | "team member", "direct report" |

**Before ANY commit:**
```bash
npx ts-node scripts/check-confidentiality.ts
```

**Protected files (NEVER commit):**
- `sk_okf/` - Private knowledge base

## 🚨 CRITICAL: Always Validate Before Completion

**Every task that modifies code MUST end with validation:**

```bash
npm run validate && npm run build
```

If ANY of these fail, fix the issues before marking the task complete.

## Validation Commands

| Command | Purpose | Must Pass |
|---------|---------|-----------|
| `npm run lint` | ESLint check | ✅ Yes (errors only) |
| `npm run type-check` | TypeScript types | ✅ Yes |
| `npm run test` | Jest tests | ✅ Yes |
| `npm run build` | Production build | ✅ Yes |
| `npm run validate` | All of above | ✅ Yes |

## Project Structure

```
src/
├── app/                 # Next.js pages
├── components/          # React components
│   └── __tests__/       # Component tests
├── data/
│   ├── portfolio.ts     # Main data file
│   └── __tests__/       # Data validation tests
├── lib/                 # Utilities
└── types/               # TypeScript types

docs/job-hunt/           # Job hunt documentation
resume/source/           # Resume markdown files
scripts/                 # Automation scripts
```

## Key Files

- **Portfolio Data:** `src/data/portfolio.ts` - Single source of truth for all portfolio content
- **Daily Context:** `resume/source/CONTEXT.md` - Personal context for resume updates
- **Job Strategy:** `docs/job-hunt/STRATEGY.md` - Complete job hunt plan
- **Application Tracker:** `docs/job-hunt/APPLICATION_TRACKER.md`

## Git Workflow

1. Push to `main` triggers auto-deploy to GitHub Pages
2. CI workflow runs: lint → type-check → test → build
3. Deploy workflow builds and publishes the site

**Before pushing:**
```bash
npm run validate && npm run build
git add -A
git commit -m "descriptive message"
git push
```

## Test Requirements

- Data validation tests ensure portfolio structure is valid
- Component tests verify sections render correctly
- Minimum coverage thresholds must be met

## Common Tasks

### Update Portfolio Content
1. Edit `src/data/portfolio.ts`
2. Run `npm run test` to validate data structure
3. Run `npm run build` to verify site builds

### Add New Experience/Project
1. Edit `src/data/portfolio.ts`
2. Follow existing data structure
3. Run full validation

### Update Resume
1. Edit files in `resume/source/`
2. Update `resume/source/CONTEXT.md` with new context
3. No build required for markdown changes

### Update Job Hunt Docs
1. Edit files in `docs/job-hunt/`
2. No build required for markdown changes
