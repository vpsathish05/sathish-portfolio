/**
 * Portfolio Data Validation Script
 * Run: npx ts-node scripts/validate-portfolio.ts
 */

import { 
  personalInfo, 
  aboutMe, 
  education, 
  skills, 
  experiences, 
  projects 
} from '../src/data/portfolio'

interface ValidationError {
  field: string
  message: string
}

function validatePortfolio(): ValidationError[] {
  const errors: ValidationError[] = []

  // Validate Personal Info
  if (!personalInfo.name || personalInfo.name.length === 0) {
    errors.push({ field: 'personalInfo.name', message: 'Name is required' })
  }
  if (!personalInfo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) {
    errors.push({ field: 'personalInfo.email', message: 'Valid email is required' })
  }
  if (!personalInfo.linkedin || !personalInfo.linkedin.startsWith('https://')) {
    errors.push({ field: 'personalInfo.linkedin', message: 'Valid LinkedIn URL is required' })
  }
  if (!personalInfo.github || !personalInfo.github.startsWith('https://')) {
    errors.push({ field: 'personalInfo.github', message: 'Valid GitHub URL is required' })
  }

  // Validate About
  if (!aboutMe.summary || aboutMe.summary.length < 50) {
    errors.push({ field: 'aboutMe.summary', message: 'Summary should be at least 50 characters' })
  }

  // Validate Education
  if (education.length === 0) {
    errors.push({ field: 'education', message: 'At least one education entry is required' })
  }
  education.forEach((edu, i) => {
    if (!edu.degree) errors.push({ field: `education[${i}].degree`, message: 'Degree is required' })
    if (!edu.institution) errors.push({ field: `education[${i}].institution`, message: 'Institution is required' })
  })

  // Validate Skills
  const skillCategories = ['ai', 'data', 'fullstack', 'cloud'] as const
  skillCategories.forEach(category => {
    if (!skills[category] || skills[category].length < 3) {
      errors.push({ field: `skills.${category}`, message: `At least 3 ${category} skills required` })
    }
    skills[category]?.forEach((skill, i) => {
      if (!skill.name) errors.push({ field: `skills.${category}[${i}].name`, message: 'Skill name required' })
      if (!skill.color || !/^#[0-9A-Fa-f]{6}$/.test(skill.color)) {
        errors.push({ field: `skills.${category}[${i}].color`, message: 'Valid hex color required' })
      }
    })
  })

  // Validate Experiences
  if (experiences.length === 0) {
    errors.push({ field: 'experiences', message: 'At least one experience is required' })
  }
  experiences.forEach((exp, i) => {
    if (!exp.title) errors.push({ field: `experiences[${i}].title`, message: 'Title is required' })
    if (!exp.company) errors.push({ field: `experiences[${i}].company`, message: 'Company is required' })
    if (!exp.description || exp.description.length < 20) {
      errors.push({ field: `experiences[${i}].description`, message: 'Description should be at least 20 characters' })
    }
  })

  // Validate Projects
  if (projects.length === 0) {
    errors.push({ field: 'projects', message: 'At least one project is required' })
  }
  const projectIds = new Set<string>()
  projects.forEach((project, i) => {
    if (!project.id) errors.push({ field: `projects[${i}].id`, message: 'Project ID is required' })
    if (projectIds.has(project.id)) {
      errors.push({ field: `projects[${i}].id`, message: 'Duplicate project ID' })
    }
    projectIds.add(project.id)
    if (!project.title) errors.push({ field: `projects[${i}].title`, message: 'Title is required' })
    if (!project.techStack || project.techStack.length === 0) {
      errors.push({ field: `projects[${i}].techStack`, message: 'At least one tech stack item required' })
    }
  })

  return errors
}

// Run validation
const errors = validatePortfolio()

if (errors.length > 0) {
  console.error('\n❌ Portfolio validation failed:\n')
  errors.forEach(err => {
    console.error(`  • ${err.field}: ${err.message}`)
  })
  console.error(`\nTotal errors: ${errors.length}\n`)
  process.exit(1)
} else {
  console.log('\n✅ Portfolio data is valid!\n')
  console.log('Summary:')
  console.log(`  • Personal Info: ✓`)
  console.log(`  • About: ✓`)
  console.log(`  • Education: ${education.length} entries`)
  console.log(`  • Skills: ${Object.values(skills).flat().length} total`)
  console.log(`  • Experiences: ${experiences.length} entries`)
  console.log(`  • Projects: ${projects.length} entries`)
  console.log('')
  process.exit(0)
}
