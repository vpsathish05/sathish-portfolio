# 🚀 Implementation Plan (Final)

## Decisions Confirmed

| Decision | Choice |
|----------|--------|
| Branch strategy | Push directly to `main` (auto-deploys) |
| Resume location | Dedicated folder with PDF/Word generation |
| Test depth | Both minimal + comprehensive |
| CI strictness | Fail on errors only |

---

## Final Folder Structure

```
sathish-portfolio/
│
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Existing: Deploy to GitHub Pages
│       └── ci.yml                  # NEW: Lint, type-check, test
│
├── .kiro/                          # UNIGNORE: Portfolio automation
│   ├── portfolio-agent.js
│   ├── portfolio-agent.md
│   └── README.md
│
├── docs/                           # NEW: All documentation
│   ├── job-hunt/
│   │   ├── STRATEGY.md             # Main job hunt strategy
│   │   ├── APPLICATION_TRACKER.md  # Track applications
│   │   ├── LINKEDIN_CONTENT.md     # LinkedIn posts & strategy
│   │   ├── INTERVIEW_PREP.md       # Interview preparation
│   │   └── WEEKLY_REVIEWS.md       # Progress tracking
│   │
│   └── portfolio/
│       └── CHANGELOG.md            # Portfolio changes log
│
├── resume/                         # UNIGNORE: Resume workspace
│   ├── source/                     # Source markdown files
│   │   ├── CV_Sathish_Kumar_V.md           # Detailed CV
│   │   ├── RESUME_ATS_OPTIMIZED.md         # ATS-friendly version
│   │   └── CONTEXT.md                      # Your personal context (daily updates)
│   │
│   ├── generated/                  # Auto-generated files (gitignored)
│   │   ├── Sathish_Kumar_V_Resume.pdf
│   │   └── Sathish_Kumar_V_Resume.docx
│   │
│   ├── templates/                  # Resume templates
│   │   └── ats-template.html       # HTML template for PDF generation
│   │
│   └── output/                     # Final files to share (tracked)
│       ├── Sathish_Kumar_V_Resume.pdf
│       └── Sathish_Kumar_V_Resume.docx
│
├── public/
│   ├── resume/                     # Downloadable from website
│   │   └── Sathish_Kumar_V_Resume.pdf
│   ├── favicon.ico
│   └── ... (existing)
│
├── src/
│   ├── app/                        # Next.js app (existing)
│   ├── components/
│   │   ├── __tests__/              # NEW: Component tests
│   │   │   ├── AboutSection.test.tsx
│   │   │   ├── SkillsSection.test.tsx
│   │   │   └── ...
│   │   └── ... (existing components)
│   │
│   ├── data/
│   │   ├── __tests__/              # NEW: Data validation tests
│   │   │   └── portfolio.test.ts
│   │   └── portfolio.ts            # Existing
│   │
│   ├── hooks/
│   ├── lib/
│   │   ├── __tests__/              # NEW: Utility tests
│   │   │   └── utils.test.ts
│   │   └── ... (existing)
│   │
│   └── types/                      # NEW: TypeScript types
│       └── portfolio.ts
│
├── scripts/                        # NEW: Automation scripts
│   ├── generate-resume.ts          # Generate PDF/Word from markdown
│   ├── validate-portfolio.ts       # Validate portfolio data
│   └── copy-resume-to-public.ts    # Copy final resume to public/
│
├── .env.local.example
├── .eslintrc.json                  # MODIFY: Error-only config
├── .gitignore                      # MODIFY: Update ignores
├── components.json
├── jest.config.js                  # NEW: Jest configuration
├── jest.setup.js                   # NEW: Jest setup
├── next.config.ts
├── package.json                    # MODIFY: Add scripts
├── postcss.config.mjs
├── README.md                       # MODIFY: Update docs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Implementation Steps

### Step 1: Update `.gitignore`

**Changes:**
```diff
- # kiro
- .kiro
+ # Keep .kiro tracked for portfolio automation

- # resume
- resume/
+ # Resume - track source and output, ignore generated
+ resume/generated/
```

---

### Step 2: Create Folder Structure

```
docs/
├── job-hunt/
└── portfolio/

resume/
├── source/
├── generated/      # gitignored
├── templates/
└── output/

public/resume/

src/components/__tests__/
src/data/__tests__/
src/lib/__tests__/
src/types/

scripts/
```

---

### Step 3: Move Existing Files

| From | To |
|------|----|
| `JOB_HUNT_STRATEGY.md` | `docs/job-hunt/STRATEGY.md` |
| `APPLICATION_TRACKER.md` | `docs/job-hunt/APPLICATION_TRACKER.md` |
| `LINKEDIN_CONTENT.md` | `docs/job-hunt/LINKEDIN_CONTENT.md` |
| `resume/CV_Sathish_Kumar_V.md` | `resume/source/CV_Sathish_Kumar_V.md` |
| `resume/RESUME_ATS_OPTIMIZED.md` | `resume/source/RESUME_ATS_OPTIMIZED.md` |
| `resume/SATHISHKUMARV_CV.pdf` | `resume/output/Sathish_Kumar_V_Resume.pdf` |

---

### Step 4: Install Dependencies

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest ts-jest
npm install -D puppeteer        # For PDF generation
npm install -D docx             # For Word generation  
npm install -D gray-matter      # For markdown frontmatter
npm install -D marked           # For markdown to HTML
```

---

### Step 5: Update `package.json` Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:ci": "jest --ci --coverage",
    "validate": "npm run lint && npm run type-check && npm run test",
    "resume:generate": "npx ts-node scripts/generate-resume.ts",
    "resume:copy": "npx ts-node scripts/copy-resume-to-public.ts",
    "prebuild": "npm run validate"
  }
}
```

---

### Step 6: Create CI Workflow

**`.github/workflows/ci.yml`**
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint (errors only)
        run: npm run lint -- --max-warnings=999
      
      - name: Type Check
        run: npm run type-check
      
      - name: Test
        run: npm run test:ci
      
      - name: Build
        run: npm run build
```

---

### Step 7: Create Test Files

**Minimal Tests:**
- Portfolio data validation
- Build passes

**Comprehensive Tests:**
- All section components render
- Data structure validation
- Utility functions

---

### Step 8: Create Resume Generation Script

The script will:
1. Read markdown from `resume/source/`
2. Apply HTML template from `resume/templates/`
3. Generate PDF using Puppeteer
4. Generate DOCX using `docx` library
5. Save to `resume/generated/`
6. Copy final versions to `resume/output/` and `public/resume/`

---

### Step 9: Create CONTEXT.md for Daily Updates

**`resume/source/CONTEXT.md`** - Your personal knowledge base:
```markdown
# Personal Context - Sathish Kumar V

## Last Updated: [DATE]

## About Me
[Daily updates about yourself, achievements, learnings]

## Recent Achievements
- [Add new achievements here]

## Skills Update
- [New skills, certifications, tools learned]

## Project Details
- [More context about your projects]

## Interview Stories (STAR Format)
- [Situation, Task, Action, Result examples]

## Notes
- [Any other context you want to remember]
```

---

## Execution Order

```
┌─────────────────────────────────────────────────────────┐
│                  IMPLEMENTATION ORDER                    │
├─────────────────────────────────────────────────────────┤
│ 1. Update .gitignore                                    │
│    └─> Unblock resume/ and .kiro tracking               │
│                                                         │
│ 2. Create folder structure                              │
│    └─> All new directories                              │
│                                                         │
│ 3. Move existing files                                  │
│    └─> Organize into new structure                      │
│                                                         │
│ 4. Create CONTEXT.md                                    │
│    └─> Your daily update file                           │
│                                                         │
│ 5. Install test dependencies                            │
│    └─> Jest, Testing Library                            │
│                                                         │
│ 6. Create test configuration                            │
│    └─> jest.config.js, jest.setup.js                    │
│                                                         │
│ 7. Create test files                                    │
│    └─> Portfolio data + component tests                 │
│                                                         │
│ 8. Update package.json                                  │
│    └─> Add all new scripts                              │
│                                                         │
│ 9. Update ESLint config                                 │
│    └─> Errors only (no warning failures)                │
│                                                         │
│ 10. Create CI workflow                                  │
│     └─> .github/workflows/ci.yml                        │
│                                                         │
│ 11. Create resume generation scripts                    │
│     └─> PDF/Word automation                             │
│                                                         │
│ 12. Verify everything works                             │
│     └─> npm run validate && npm run build               │
│                                                         │
│ 13. Update README                                       │
│     └─> Document new structure                          │
│                                                         │
│ 14. Commit and push to main                             │
│     └─> Auto-deploy triggers                            │
└─────────────────────────────────────────────────────────┘
```

---

## Files to Create

| File | Purpose |
|------|---------|
| `.github/workflows/ci.yml` | CI pipeline |
| `jest.config.js` | Jest configuration |
| `jest.setup.js` | Jest setup |
| `src/types/portfolio.ts` | TypeScript types |
| `src/data/__tests__/portfolio.test.ts` | Data validation tests |
| `src/components/__tests__/*.test.tsx` | Component tests |
| `scripts/generate-resume.ts` | PDF/Word generation |
| `scripts/validate-portfolio.ts` | Portfolio validation |
| `scripts/copy-resume-to-public.ts` | Copy to public |
| `resume/source/CONTEXT.md` | Your daily context |
| `resume/templates/ats-template.html` | Resume template |
| `docs/job-hunt/INTERVIEW_PREP.md` | Interview prep |
| `docs/job-hunt/WEEKLY_REVIEWS.md` | Weekly tracking |
| `docs/portfolio/CHANGELOG.md` | Portfolio changes |

---

## Estimated Time

| Step | Time |
|------|------|
| Steps 1-4 (Structure) | 10 min |
| Steps 5-7 (Testing) | 30 min |
| Steps 8-10 (Config) | 15 min |
| Steps 11 (Scripts) | 25 min |
| Steps 12-14 (Verify & Deploy) | 10 min |
| **Total** | **~90 min** |

---

## Ready to Execute?

Reply **"go"** and I'll implement everything in order.

Or ask questions if anything needs clarification.
