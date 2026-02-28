#!/usr/bin/env node

/**
 * Portfolio Agent - Development automation for my-portfolio project
 * Usage: node portfolio-agent.js <command> [options]
 */

const fs = require('fs');
const path = require('path');

const PORTFOLIO_DATA_PATH = path.join(__dirname, '../src/data/portfolio.ts');

// GitHub repository info
const GITHUB_REPO = 'https://github.com/vpsathish05/sathish-portfolio';
const GITHUB_OWNER = 'vpsathish05';

// Helper to read portfolio data
function readPortfolioData() {
  return fs.readFileSync(PORTFOLIO_DATA_PATH, 'utf8');
}

// Helper to write portfolio data
function writePortfolioData(content) {
  fs.writeFileSync(PORTFOLIO_DATA_PATH, content, 'utf8');
}

// Commands
const commands = {
  'add-experience': (args) => {
    const { title, company, date, description } = args;
    if (!title || !company || !date || !description) {
      console.error('Missing required fields: title, company, date, description');
      process.exit(1);
    }

    let data = readPortfolioData();
    const newExperience = `  {
    title: "${title}",
    company: "${company}",
    date: "${date}",
    description: "${description}"
  },`;

    data = data.replace(
      /export const experiences = \[/,
      `export const experiences = [\n${newExperience}`
    );

    writePortfolioData(data);
    console.log('✅ Experience added successfully!');
  },

  'add-project': (args) => {
    const { id, title, company, role, description } = args;
    if (!id || !title || !company || !role || !description) {
      console.error('Missing required fields: id, title, company, role, description');
      process.exit(1);
    }

    let data = readPortfolioData();
    const newProject = `  {
    id: "${id}",
    title: "${title}",
    company: "${company}",
    role: "${role}",
    techStack: [],
    description: "${description}",
    details: [],
    demoUrl: null,
    githubUrl: null
  },`;

    data = data.replace(
      /export const projects = \[/,
      `export const projects = [\n${newProject}`
    );

    writePortfolioData(data);
    console.log('✅ Project added successfully! Remember to add techStack and details.');
  },

  'add-skill': (args) => {
    const { category, name, color } = args;
    if (!category || !name || !color) {
      console.error('Missing required fields: category, name, color');
      process.exit(1);
    }

    const validCategories = ['programming', 'frontend', 'backend', 'data'];
    if (!validCategories.includes(category)) {
      console.error(`Invalid category. Must be one of: ${validCategories.join(', ')}`);
      process.exit(1);
    }

    let data = readPortfolioData();
    const newSkill = `    { name: "${name}", color: "${color}" },`;
    
    const regex = new RegExp(`(${category}: \\[)`, 'g');
    data = data.replace(regex, `$1\n${newSkill}`);

    writePortfolioData(data);
    console.log('✅ Skill added successfully!');
  },

  'update-contact': (args) => {
    const { email, phone, linkedin, github } = args;
    let data = readPortfolioData();

    if (email) data = data.replace(/email: ".*?"/, `email: "${email}"`);
    if (phone) data = data.replace(/phone: ".*?"/, `phone: "${phone}"`);
    if (linkedin) data = data.replace(/linkedin: ".*?"/, `linkedin: "${linkedin}"`);
    if (github) data = data.replace(/github: ".*?"/, `github: "${github}"`);

    writePortfolioData(data);
    console.log('✅ Contact information updated!');
  },

  'list-projects': () => {
    const data = readPortfolioData();
    const projectMatches = data.match(/id: "(.*?)"/g);
    if (projectMatches) {
      console.log('📋 Current Projects:');
      projectMatches.forEach(match => {
        const id = match.match(/id: "(.*?)"/)[1];
        console.log(`  - ${id}`);
      });
    }
  },

  'list-experiences': () => {
    const data = readPortfolioData();
    const titleMatches = data.match(/title: "(.*?)"/g);
    if (titleMatches) {
      console.log('💼 Current Experiences:');
      titleMatches.forEach(match => {
        const title = match.match(/title: "(.*?)"/)[1];
        console.log(`  - ${title}`);
      });
    }
  },

  'help': () => {
    console.log(`
Portfolio Agent - Development Automation

Commands:
  add-experience      Add new work experience
  add-project         Add new project
  add-skill           Add new skill
  update-contact      Update contact information
  list-projects       List all projects
  list-experiences    List all experiences
  help                Show this help message

Examples:
  node portfolio-agent.js add-experience --title="Senior Dev" --company="ACME" --date="2024-Present" --description="Building apps"
  node portfolio-agent.js add-project --id="new-app" --title="New App" --company="ACME" --role="Lead" --description="Cool app"
  node portfolio-agent.js add-skill --category="frontend" --name="Vue.js" --color="#42b883"
  node portfolio-agent.js update-contact --email="new@email.com" --phone="+91 1234567890"
    `);
  }
};

// Parse command line arguments
function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const value = argv[i + 1];
      args[key] = value;
      i++;
    }
  }
  return args;
}

// Main
const [,, command, ...rest] = process.argv;

if (!command || !commands[command]) {
  console.error('Invalid command. Use "help" to see available commands.');
  process.exit(1);
}

const args = parseArgs(rest);
commands[command](args);
