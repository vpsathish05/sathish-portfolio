# Kiro Configuration

Kiro AI automation setup for the portfolio project.

---

## Structure

```
.kiro/
├── hooks/                          # Automated validation hooks
│   ├── session-validation-reminder.json
│   ├── validate-before-git.json
│   ├── validate-on-ts-save.json
│   ├── lint-on-save.json
│   ├── build-on-portfolio-change.json
│   └── confidentiality-check.json
│
├── steering/                       # Project guidelines
│   └── project-rules.md
│
├── settings/                       # Kiro settings
│
├── portfolio-agent.js              # CLI automation script
├── portfolio-agent.md              # Agent knowledge base
└── README.md                       # This file
```

---

## Hooks

| Hook | Trigger | Action |
|------|---------|--------|
| Session Reminder | SessionStart | Displays validation requirements |
| Type Check | PostFileSave (.ts/.tsx) | Runs `tsc --noEmit` |
| Lint | PostFileSave (.ts/.tsx) | Runs ESLint |
| Build on Data Change | PostFileSave (portfolio.ts) | Runs `npm run build` |
| Git Validation | PreToolUse (git commit/push) | Runs `npm run validate` |
| Confidentiality | PreToolUse (git commit) | Checks for sensitive content |

---

## Validation Requirements

Every code change must pass:

```bash
npm run validate    # lint + type-check + test
npm run build       # production build
```

### Commands

| Command | Purpose |
|---------|---------|
| `npm run lint` | ESLint (errors fail) |
| `npm run type-check` | TypeScript checking |
| `npm run test` | Jest tests |
| `npm run validate` | All above |
| `npm run build` | Production build |

---

## Confidentiality Rules

**Never include in public files:**

| Category | Examples | Replace With |
|----------|----------|--------------|
| Client Names | BC Partners, IDnow | "Enterprise Client" |
| Internal Products | JLens, Tenali AI | "Internal Platform" |
| Employer Details | JMAN Group specifics | Generic descriptions |
| Colleague Names | Team member names | "team member" |

---

## Steering Rules

The `steering/project-rules.md` file contains:

- Validation requirements
- Confidentiality guidelines
- Project structure documentation
- Git workflow guidelines

Auto-loaded when relevant to the current task.

---

## Portfolio Agent Script

CLI tool for common updates:

```bash
# Add experience
node .kiro/portfolio-agent.js add-experience \
  --title="AI Lead" \
  --company="Company" \
  --date="2024-Present"

# Add project
node .kiro/portfolio-agent.js add-project \
  --id="project-id" \
  --title="Project Name"

# Add skill
node .kiro/portfolio-agent.js add-skill \
  --category="orchestration" \
  --name="LangGraph"

# List items
node .kiro/portfolio-agent.js list-projects

# Help
node .kiro/portfolio-agent.js help
```

---

## Workflow

### Making Changes

1. Edit files
2. Hooks auto-run type-check and lint on save
3. Before commit, validation runs
4. Push to main triggers CI/CD

### Completion Checklist

Before marking any task complete:

- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run test` passes
- [ ] `npm run build` passes
- [ ] Descriptive commit message
- [ ] Pushed (if ready to deploy)

---

## Troubleshooting

### Hook Not Running
- Hooks activate on session start
- Check matcher regex

### Validation Failing
- Run `npm run validate` manually
- Fix issues before proceeding

### Build Failing
- Check TypeScript errors: `npm run type-check`
- Check for missing imports
