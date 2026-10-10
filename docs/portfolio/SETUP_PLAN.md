# 🏗️ Project Setup Plan

## Current Issues

1. **`.gitignore` blocks important files**
   - `resume/` is ignored → resume files won't deploy
   - `.kiro` is ignored → portfolio agent won't be tracked

2. **No test framework**
   - No unit tests for components
   - No linting in CI/CD
   - Build can fail silently

3. **Scattered files**
   - Job hunt files in root (cluttered)
   - No clear separation of concerns

4. **Missing CI/CD checks**
   - Only deploys, no validation
   - No lint/type check before deploy

---

## Proposed Folder Structure

```
sathish-portfolio/
│
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Production deploy (existing)
│       └── ci.yml              # NEW: Lint, type-check, test on PR
│
├── .kiro/                      # Portfolio automation (UNIGNORE)
│   ├── portfolio-agent.js
│   ├── portfolio-agent.md
│   └── README.md
│
├── docs/                       # NEW: Job hunt documentation
│   ├── job-hunt/
│   │   ├── STRATEGY.md         # Main strategy document
│   │   ├── APPLICATION_TRACKER.md
│   │   ├── LINKEDIN_CONTENT.md
│   │   ├── INTERVIEW_PREP.md   # NEW: Interview preparation
│   │   └── WEEKLY_REVIEWS.md   # NEW: Progress tracking
│   │
│   └── portfolio/
│       └── CHANGELOG.md        # Portfolio update history
│
├── public/
│   ├── resume/                 # NEW: Public resume files (PDF)
│   │   └── Sathish_Kumar_V_AI_Engineer.pdf
│   ├── favicon.ico
│   └── ... (existing assets)
│
├── resume/                     # Resume source files (UNIGNORE)
│   ├── CV_Sathish_Kumar_V.md
│   ├── RESUME_ATS_OPTIMIZED.md
│   └── SATHISHKUMARV_CV.pdf
│
├── src/
│   ├── app/                    # Next.js app (existing)
│   ├── components/             # React components (existing)
│   │   └── __tests__/          # NEW: Component tests
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data (existing)
│   ├── hooks/
│   ├── lib/
│   │   └── __tests__/          # NEW: Utility tests
│   └── types/                  # NEW: TypeScript types
│       └── portfolio.ts
│
├── scripts/                    # NEW: Automation scripts
│   ├── validate-portfolio.ts   # Validate portfolio data
│   ├── generate-resume-pdf.ts  # Generate PDF from markdown
│   └── check-links.ts          # Verify all links work
│
├── tests/                      # NEW: E2E tests (optional)
│   └── portfolio.spec.ts
│
├── .env.local.example
├── .eslintrc.json
├── .gitignore                  # MODIFY: Unignore resume/, .kiro
├── components.json
├── jest.config.js              # NEW: Test configuration
├── next.config.ts
├── package.json                # MODIFY: Add test scripts
├── postcss.config.mjs
├── README.md                   # MODIFY: Update structure docs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Implementation Phases

### Phase 1: Fix Git Tracking (Must do first)
**Why:** Files are currently ignored, nothing will deploy

- [ ] Update `.gitignore` to track `resume/` and `.kiro`
- [ ] Move job hunt files to `docs/job-hunt/`
- [ ] Verify files show in `git status`

### Phase 2: Add Testing Framework
**Why:** Catch errors before deployment

- [ ] Install Jest + React Testing Library
- [ ] Add basic component tests
- [ ] Add portfolio data validation
- [ ] Update `package.json` with test scripts

### Phase 3: Enhance CI/CD Pipeline
**Why:** Automated quality checks

- [ ] Create `ci.yml` workflow for PRs
- [ ] Add lint check to CI
- [ ] Add type check to CI
- [ ] Add test run to CI
- [ ] Ensure build passes before deploy

### Phase 4: Add Automation Scripts
**Why:** Streamline repetitive tasks

- [ ] Resume PDF generation script
- [ ] Link checker script
- [ ] Portfolio data validator

---

## Detailed Changes

### 1. Update `.gitignore`

```diff
# kiro
- .kiro
+ # .kiro - now tracked for portfolio automation

# resume
- resume/
+ # resume/ - now tracked for resume source files
```

### 2. New `package.json` Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:ci": "jest --ci --coverage",
    "validate": "npm run lint && npm run type-check && npm run test",
    "precommit": "npm run validate"
  }
}
```

### 3. New CI Workflow (`.github/workflows/ci.yml`)

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
      
      - name: Lint
        run: npm run lint
      
      - name: Type Check
        run: npm run type-check
      
      - name: Test
        run: npm run test:ci
      
      - name: Build
        run: npm run build
```

### 4. Jest Configuration (`jest.config.js`)

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

---

## Test Strategy

### What to Test

| Area | Test Type | Priority | Purpose |
|------|-----------|----------|---------|
| Portfolio data | Unit | HIGH | Ensure data structure is valid |
| UI Components | Unit | MEDIUM | Components render without errors |
| Build process | Integration | HIGH | Site builds successfully |
| Links | E2E | LOW | All links work |

### Minimum Tests (Phase 2)

1. **Portfolio Data Validation**
   ```typescript
   // src/data/__tests__/portfolio.test.ts
   - All required fields exist
   - Dates are valid
   - URLs are properly formatted
   - No empty arrays
   ```

2. **Component Smoke Tests**
   ```typescript
   // src/components/__tests__/sections.test.tsx
   - Each section renders without crashing
   - Data displays correctly
   ```

3. **Build Validation**
   ```typescript
   // Already covered by CI build step
   ```

---

## Migration Steps (In Order)

### Step 1: Backup Current State
```bash
git status
git stash  # if any uncommitted changes
```

### Step 2: Update .gitignore
```bash
# Remove resume/ and .kiro from ignore
```

### Step 3: Create Folder Structure
```bash
mkdir -p docs/job-hunt
mkdir -p docs/portfolio
mkdir -p public/resume
mkdir -p src/components/__tests__
mkdir -p src/lib/__tests__
mkdir -p src/types
mkdir -p scripts
```

### Step 4: Move Files
```bash
# Move job hunt files
mv JOB_HUNT_STRATEGY.md docs/job-hunt/STRATEGY.md
mv APPLICATION_TRACKER.md docs/job-hunt/
mv LINKEDIN_CONTENT.md docs/job-hunt/
```

### Step 5: Install Test Dependencies
```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

### Step 6: Add Test Configuration
```bash
# Create jest.config.js, jest.setup.js
```

### Step 7: Create CI Workflow
```bash
# Create .github/workflows/ci.yml
```

### Step 8: Verify Everything
```bash
npm run lint
npm run type-check
npm run test
npm run build
git add -A
git status  # Verify all files tracked
```

### Step 9: Commit and Push
```bash
git add -A
git commit -m "refactor: organize project structure, add testing, enhance CI/CD"
git push
```

---

## Success Criteria

Before proceeding with implementation:

- [ ] All job hunt files tracked in git
- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run test` passes (even if minimal tests)
- [ ] `npm run build` passes
- [ ] CI workflow runs on push
- [ ] Deploy workflow still works

---

## Questions Before Implementation

1. **Resume files:** Should PDF resume be in `public/resume/` (downloadable from site) or stay in `resume/` (source only)?

2. **Test depth:** Start with minimal smoke tests or comprehensive coverage?

3. **CI strictness:** Fail on lint warnings or errors only?

4. **Branch strategy:** Work on `main` directly or create `feature/setup` branch?

---

## Estimated Time

| Phase | Time | Notes |
|-------|------|-------|
| Phase 1: Git fix | 15 min | Quick file moves |
| Phase 2: Testing | 45 min | Setup + basic tests |
| Phase 3: CI/CD | 20 min | Workflow creation |
| Phase 4: Scripts | 30 min | Optional automation |
| **Total** | **~2 hours** | |

---

*Review this plan and confirm before implementation.*
