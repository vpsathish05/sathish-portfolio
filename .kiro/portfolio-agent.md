# Portfolio Project Knowledge Base

## Project Overview
Next.js 15 portfolio website for Sathish Kumar V - Full-Stack Developer & Data Engineer

## Tech Stack
- **Framework**: Next.js 15 (App Router, React 19 RC)
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure
```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Main portfolio page (client component)
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # shadcn/ui components (15 total)
│   ├── PersonalInfoSection.tsx
│   ├── AboutSection.tsx
│   ├── EducationSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── ErrorBoundary.tsx
│   ├── LoadingSkeleton.tsx
│   └── TechBadge.tsx
├── data/
│   └── portfolio.ts       # ALL portfolio data (single source of truth)
├── hooks/
│   └── use-toast.ts
└── lib/
    ├── utils.ts
    └── structured-data.ts
```

## Key Data Structure (src/data/portfolio.ts)
```typescript
export const personalInfo = { name, title, description, email, phone, linkedin, github, avatar, location }
export const aboutMe = { summary, details }
export const education = [{ degree, institution, year, grade }]
export const skills = { programming: [], frontend: [], backend: [], data: [] }
export const experiences = [{ title, company, date, description }]
export const projects = [{ id, title, company, role, techStack, description, details, demoUrl, githubUrl }]
```

## Common Maintenance Tasks

### 1. Update Personal Information
- Edit `src/data/portfolio.ts` → `personalInfo` object
- Update avatar: Replace `/public/sathish-teams-img.png`

### 2. Add New Experience
- Edit `src/data/portfolio.ts` → `experiences` array
- Add to beginning of array (most recent first)

### 3. Add New Project
- Edit `src/data/portfolio.ts` → `projects` array
- Include: id, title, company, role, techStack (with colors), description, details

### 4. Update Skills
- Edit `src/data/portfolio.ts` → `skills` object
- Categories: programming, frontend, backend, data
- Each skill: `{ name: string, color: string }`

### 5. Add New UI Component
- Use shadcn/ui CLI: `npx shadcn@latest add <component-name>`
- Components stored in `src/components/ui/`

### 6. Modify Sections
- Section components in `src/components/`
- All use data from `src/data/portfolio.ts`

## Development Commands
```bash
npm run dev          # Start dev server (with Turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Important Notes
- Dark mode is default (toggle in header)
- All data centralized in `portfolio.ts` - single source of truth
- SEO optimized with metadata, robots.txt, sitemap
- Error boundaries and loading states implemented
- Responsive design (mobile-first)

## File Paths Reference
- Project root: `/mnt/d/S A T H I S H/Projects/sathish-portfolio`
- Portfolio data: `/mnt/d/S A T H I S H/Projects/sathish-portfolio/src/data/portfolio.ts`
- Main page: `/mnt/d/S A T H I S H/Projects/sathish-portfolio/src/app/page.tsx`
- Components: `/mnt/d/S A T H I S H/Projects/sathish-portfolio/src/components/`
- Public assets: `/mnt/d/S A T H I S H/Projects/sathish-portfolio/public/`

## GitHub Repository
- URL: https://github.com/vpsathish05/sathish-portfolio
- Branch: main
- Owner: vpsathish05
