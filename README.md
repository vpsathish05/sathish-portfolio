# Sathish Kumar V - Portfolio & Job Hunt Command Center

Modern, responsive portfolio website + comprehensive job hunt management system for targeting UK/US remote AI Engineer positions.

## 🎯 Job Hunt Goal

**Target:** Remote AI Engineer / AI Architect position with UK or US companies  
**Salary Range:** $140K-$250K+ USD (or £90K-£150K+ GBP)  
**Timeline:** 8-12 weeks intensive campaign

---

## 📁 Project Structure

```
sathish-portfolio/
│
├── .github/workflows/
│   ├── deploy.yml              # Deploy to GitHub Pages
│   └── ci.yml                  # Lint, type-check, test
│
├── docs/
│   ├── job-hunt/               # Job hunt documentation
│   │   ├── STRATEGY.md         # Main strategy
│   │   ├── APPLICATION_TRACKER.md
│   │   ├── LINKEDIN_CONTENT.md
│   │   ├── INTERVIEW_PREP.md
│   │   └── WEEKLY_REVIEWS.md
│   └── portfolio/
│       └── CHANGELOG.md
│
├── resume/
│   ├── source/                 # Edit these files
│   │   ├── CONTEXT.md          # Your personal context (update daily)
│   │   ├── CV_Sathish_Kumar_V.md
│   │   └── RESUME_ATS_OPTIMIZED.md
│   ├── templates/              # PDF generation templates
│   ├── generated/              # Auto-generated (gitignored)
│   └── output/                 # Final PDF/Word files
│
├── public/resume/              # Downloadable from website
│
├── src/
│   ├── app/                    # Next.js app
│   ├── components/             # React components
│   │   └── __tests__/          # Component tests
│   ├── data/
│   │   ├── portfolio.ts        # Portfolio content
│   │   └── __tests__/          # Data validation tests
│   ├── lib/
│   └── types/
│
└── scripts/                    # Automation scripts
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vpsathish05/sathish-portfolio.git
cd sathish-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server (Turbopack)

# Build & Deploy
npm run build        # Build for production (runs type-check first)
npm run start        # Start production server

# Quality Checks
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:ci      # Run tests with coverage (CI mode)
npm run validate     # Run lint + type-check + test
```

---

## 📋 Job Hunt Files

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `docs/job-hunt/STRATEGY.md` | Complete strategy & knowledge base | Weekly |
| `docs/job-hunt/APPLICATION_TRACKER.md` | Track all applications | Daily |
| `docs/job-hunt/LINKEDIN_CONTENT.md` | LinkedIn posts & strategy | Weekly |
| `docs/job-hunt/INTERVIEW_PREP.md` | Interview preparation | As needed |
| `docs/job-hunt/WEEKLY_REVIEWS.md` | Progress tracking | Weekly |
| `resume/source/CONTEXT.md` | Personal context for resume | Daily |

---

## 🔄 Daily Workflow

1. **Morning:** Update `resume/source/CONTEXT.md` with new achievements/learnings
2. **Job Search:** Apply to 2-3 positions, track in `APPLICATION_TRACKER.md`
3. **LinkedIn:** Post content or engage (see `LINKEDIN_CONTENT.md`)
4. **Evening:** Review and update trackers

---

## 🌐 Portfolio Website

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod

### Features
- Dark/Light mode toggle
- Animated background with twinkling stars
- Fully responsive design
- SEO optimized
- Error boundaries and loading states

### Customization
All portfolio content is in `src/data/portfolio.ts`. Update this file to modify:
- Personal information
- Work experience
- Projects
- Skills
- Education

---

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:ci

# Run specific test file
npm run test -- portfolio.test.ts
```

### Test Coverage
- **Data Validation:** Ensures portfolio data structure is valid
- **Component Tests:** Smoke tests for all section components
- **Utility Tests:** Tests for helper functions

---

## 🚀 Deployment

### Automatic (GitHub Pages)
Push to `main` branch triggers:
1. CI workflow (lint, type-check, test, build)
2. Deploy workflow (builds and deploys to GitHub Pages)

### Manual
```bash
npm run build
npm run start
```

---

## 📝 Contributing to Your Own Job Hunt

### Adding a New Achievement
1. Edit `resume/source/CONTEXT.md`
2. Add to the "Recent Achievements" section
3. Consider updating `src/data/portfolio.ts` if it's significant

### Creating a New LinkedIn Post
1. Check `docs/job-hunt/LINKEDIN_CONTENT.md` for templates
2. Draft your post
3. Schedule for optimal posting time (Tue-Thu, 8-10 AM target timezone)

### Tracking a Job Application
1. Open `docs/job-hunt/APPLICATION_TRACKER.md`
2. Add entry to current week's table
3. Update status as you progress through interviews

---

## 🔗 Links

- **Live Portfolio:** [vpsathish05.github.io/sathish-portfolio](https://vpsathish05.github.io/sathish-portfolio)
- **GitHub:** [github.com/vpsathish05](https://github.com/vpsathish05)
- **LinkedIn:** [linkedin.com/in/sathish-kumar-310976153](https://www.linkedin.com/in/sathish-kumar-310976153/)
- **Medium:** [medium.com/@vpsathish05](https://medium.com/@vpsathish05)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Sathish Kumar V**  
AI Engineer | Building Production LLM Systems & RAG Architectures

- 📧 Email: sathishkumar05@gmail.com
- 📍 Location: Chennai, India
- 🌍 Open to: Remote positions (UK/US)
