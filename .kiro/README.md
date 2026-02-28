# Portfolio Development Agent

This directory contains automation tools for maintaining the portfolio project.

## Files

- **portfolio-agent.md** - Knowledge base with project structure and maintenance guidelines
- **portfolio-agent.js** - Automation script for common portfolio updates

## Quick Start

### Using the Agent Script

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

# Update contact info
node .kiro/portfolio-agent.js update-contact \
  --email="newemail@example.com" \
  --phone="+91 9876543210"

# List current items
node .kiro/portfolio-agent.js list-projects
node .kiro/portfolio-agent.js list-experiences

# Show help
node .kiro/portfolio-agent.js help
```

## Available Commands

| Command | Description |
|---------|-------------|
| `add-experience` | Add new work experience entry |
| `add-project` | Add new project entry |
| `add-skill` | Add new skill to a category |
| `update-contact` | Update contact information |
| `list-projects` | List all current projects |
| `list-experiences` | List all work experiences |
| `help` | Show help message |

## Skill Categories

- `programming` - Programming languages
- `frontend` - Frontend frameworks/libraries
- `backend` - Backend frameworks/tools
- `data` - Data engineering tools

## Tips

- All data is stored in `src/data/portfolio.ts`
- After adding projects, manually edit to add `techStack` and `details` arrays
- Use hex color codes for skills (e.g., "#42b883")
- Keep descriptions concise and professional
- Most recent items should be first in arrays

## Using with Kiro CLI

You can ask Kiro to help with portfolio updates:

```
"Add a new project to my portfolio with title 'AI Dashboard'"
"Update my email address in the portfolio"
"List all my current projects"
```

Kiro will use the agent script or directly edit the portfolio data file.
