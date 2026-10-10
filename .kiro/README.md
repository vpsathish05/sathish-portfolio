# Kiro Automation Setup

This directory contains automation tools and hooks for the portfolio project.

## 📁 Structure

```
.kiro/
├── hooks/                      # Automated validation hooks
│   ├── session-validation-reminder.json  # Reminds about validation on start
│   ├── validate-before-git.json          # Validates before git commit/push
│   ├── validate-on-ts-save.json          # Type-checks on .ts/.tsx save
│   ├── lint-on-save.json                 # Lints on .ts/.tsx save
│   └── build-on-portfolio-change.json    # Builds on portfolio.ts change
│
├── steering/                   # Project rules and guidelines
│   └── project-rules.md        # Validation requirements
│
├── settings/                   # Kiro settings (if needed)
│
├── portfolio-agent.js          # Portfolio update automation script
├── portfolio-agent.md          # Agent knowledge base
└── README.md                   # This file
```

## 🔄 Automated Hooks

### Session Start
- **Session Validation Reminder** - Displays project rules and validation requirements

### On File Save (.ts/.tsx)
- **Validate TypeScript on Save** - Runs `tsc --noEmit` to check types
- **Lint on TypeScript Save** - Runs ESLint on the saved file

### On Portfolio Data Change
- **Build on Portfolio Data Change** - Runs `npm run build` when `portfolio.ts` is modified

### Before Git Operations
- **Validate Before Git Commit** - Runs full validation (`npm run validate`) before any git commit or push

## ✅ Validation Requirements

**Every code change MUST pass:**

```bash
npm run validate    # lint + type-check + test
npm run build       # production build
```

### Validation Commands

| Command | What It Does |
|---------|--------------|
| `npm run lint` | ESLint (errors fail, warnings allowed) |
| `npm run type-check` | TypeScript type checking |
| `npm run test` | Jest tests (41 tests) |
| `npm run validate` | All of the above |
| `npm run build` | Production build |

## 🛠️ Portfolio Agent Script

Automate common portfolio updates:

```bash
# Add new work experience
node .kiro/portfolio-agent.js add-experience \
  --title="Senior Developer" \
  --company="ACME Corp" \
  --date="Jan 2024 - Present" \
  --description="Building scalable applications"

# Add new project
node .kiro/portfolio-agent.js add-project \
  --id="my-app" \
  --title="My App" \
  --company="ACME" \
  --role="Tech Lead" \
  --description="Revolutionary app"

# Add new skill
node .kiro/portfolio-agent.js add-skill \
  --category="frontend" \
  --name="Vue.js" \
  --color="#42b883"

# List current items
node .kiro/portfolio-agent.js list-projects
node .kiro/portfolio-agent.js list-experiences

# Show help
node .kiro/portfolio-agent.js help
```

## 📋 Steering Rules

The `steering/project-rules.md` file contains:
- Validation requirements
- Project structure documentation
- Git workflow guidelines
- Common task instructions

These rules are automatically loaded when the description matches.

## 🚀 Workflow

### Making Code Changes

1. Edit files
2. Hooks automatically run type-check and lint on save
3. If changing `portfolio.ts`, build runs automatically
4. Before committing, full validation runs
5. Push to main triggers CI/CD and auto-deploy

### Task Completion Checklist

Before marking any task complete:

- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run test` passes
- [ ] `npm run build` passes
- [ ] Changes committed with descriptive message
- [ ] Pushed to main (if ready for deploy)

## 🔧 Troubleshooting

### Hook Not Running
- Hooks activate on next session start
- Check hook matcher regex matches your use case

### Validation Failing
- Run `npm run validate` manually to see full error output
- Fix issues before proceeding

### Build Failing
- Check TypeScript errors: `npm run type-check`
- Check for missing imports or dependencies
- Ensure `portfolio.ts` data structure is valid

## 📝 Notes

- Hooks use absolute paths for reliability on Windows
- Timeout values are in seconds
- PostFileSave hooks run after the file is written
- PreToolUse hooks can block operations if they fail with exit code 2
