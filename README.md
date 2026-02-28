# Sathish Kumar V - Portfolio

Modern, responsive portfolio website showcasing my experience as a Full-Stack Developer & Data Engineer.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Features

- Dark/Light mode toggle
- Animated background with twinkling stars
- Fully responsive design
- Optimized performance with Next.js 15
- Modern UI with shadcn/ui components
- Contact form with validation
- SEO optimized (sitemap, robots.txt, structured data)
- Error boundaries and loading states
- Portfolio automation agent included

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots config
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── PersonalInfoSection.tsx
│   ├── AboutSection.tsx
│   ├── EducationSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
├── data/
│   └── portfolio.ts       # Portfolio data (single source of truth)
├── hooks/
│   └── use-toast.ts
└── lib/
    ├── utils.ts
    └── structured-data.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

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

## Available Scripts

```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Portfolio Automation Agent

This project includes an automation agent for easy portfolio updates:

```bash
# Add new work experience
node .kiro/portfolio-agent.js add-experience \
  --title="Senior Developer" \
  --company="ACME Corp" \
  --date="2024-Present" \
  --description="Building apps"

# Add new project
node .kiro/portfolio-agent.js add-project \
  --id="my-app" \
  --title="My App" \
  --company="ACME" \
  --role="Tech Lead" \
  --description="Cool app"

# Add new skill
node .kiro/portfolio-agent.js add-skill \
  --category="frontend" \
  --name="Vue.js" \
  --color="#42b883"

# List projects or experiences
node .kiro/portfolio-agent.js list-projects
node .kiro/portfolio-agent.js list-experiences
```

See `.kiro/README.md` for full documentation.

## Portfolio Sections

- **Personal Info**: Name, title, contact details, social links
- **About**: Professional summary and background
- **Education**: Academic qualifications
- **Skills**: Technical skills categorized by domain
- **Experience**: Work history with detailed descriptions
- **Projects**: Featured projects with tech stacks
- **Contact**: Contact form with validation

## Customization

All portfolio content is centralized in `src/data/portfolio.ts`. Update this file to modify:

- Personal information
- Work experience
- Projects
- Skills
- Education

## Deployment

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vpsathish05/sathish-portfolio)

### Other Platforms

```bash
npm run build
npm run start
```

The build output is optimized for production deployment.

## License

This project is open source and available under the MIT License.

## Author

**Sathish Kumar V**
- GitHub: [@vpsathish05](https://github.com/vpsathish05)
- LinkedIn: [Sathish Kumar](https://www.linkedin.com/in/sathish-kumar-310976153/)
- Email: sathishkumar05@gmail.com

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
