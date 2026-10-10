/**
 * Portfolio Data Validation Tests
 * Ensures all portfolio data is complete and valid
 */

import { 
  personalInfo, 
  aboutMe, 
  education, 
  skills, 
  experiences, 
  projects 
} from '../portfolio'

describe('Portfolio Data Validation', () => {
  
  describe('Personal Info', () => {
    it('should have all required fields', () => {
      expect(personalInfo.name).toBeDefined()
      expect(personalInfo.name.length).toBeGreaterThan(0)
      expect(personalInfo.title).toBeDefined()
      expect(personalInfo.email).toBeDefined()
      expect(personalInfo.phone).toBeDefined()
      expect(personalInfo.location).toBeDefined()
    })

    it('should have valid email format', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      expect(personalInfo.email).toMatch(emailRegex)
    })

    it('should have valid URLs', () => {
      const urlRegex = /^https?:\/\/.+/
      expect(personalInfo.linkedin).toMatch(urlRegex)
      expect(personalInfo.github).toMatch(urlRegex)
      expect(personalInfo.website).toMatch(urlRegex)
    })

    it('should have avatar path', () => {
      expect(personalInfo.avatar).toBeDefined()
      expect(personalInfo.avatar.length).toBeGreaterThan(0)
    })
  })

  describe('About Me', () => {
    it('should have summary and details', () => {
      expect(aboutMe.summary).toBeDefined()
      expect(aboutMe.summary.length).toBeGreaterThan(50)
      expect(aboutMe.details).toBeDefined()
      expect(aboutMe.details.length).toBeGreaterThan(50)
    })
  })

  describe('Education', () => {
    it('should have at least one entry', () => {
      expect(education.length).toBeGreaterThan(0)
    })

    it('should have valid structure for each entry', () => {
      education.forEach((edu, index) => {
        expect(edu.degree).toBeDefined()
        expect(edu.institution).toBeDefined()
        expect(edu.year).toBeDefined()
        expect(edu.grade).toBeDefined()
      })
    })
  })

  describe('Skills', () => {
    it('should have all skill categories', () => {
      expect(skills.ai).toBeDefined()
      expect(skills.data).toBeDefined()
      expect(skills.fullstack).toBeDefined()
      expect(skills.cloud).toBeDefined()
    })

    it('should have at least 3 skills in each category', () => {
      expect(skills.ai.length).toBeGreaterThanOrEqual(3)
      expect(skills.data.length).toBeGreaterThanOrEqual(3)
      expect(skills.fullstack.length).toBeGreaterThanOrEqual(3)
      expect(skills.cloud.length).toBeGreaterThanOrEqual(3)
    })

    it('should have valid structure for each skill', () => {
      const allSkills = [...skills.ai, ...skills.data, ...skills.fullstack, ...skills.cloud]
      allSkills.forEach(skill => {
        expect(skill.name).toBeDefined()
        expect(skill.name.length).toBeGreaterThan(0)
        expect(skill.color).toBeDefined()
        expect(skill.color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      })
    })
  })

  describe('Experiences', () => {
    it('should have at least one experience', () => {
      expect(experiences.length).toBeGreaterThan(0)
    })

    it('should have valid structure for each experience', () => {
      experiences.forEach((exp, index) => {
        expect(exp.title).toBeDefined()
        expect(exp.company).toBeDefined()
        expect(exp.date).toBeDefined()
        expect(exp.description).toBeDefined()
        expect(exp.description.length).toBeGreaterThan(20)
      })
    })

    it('should be in reverse chronological order (most recent first)', () => {
      // First experience should contain "Present" or have the most recent year
      const firstExp = experiences[0]
      expect(firstExp.date.toLowerCase()).toContain('present')
    })
  })

  describe('Projects', () => {
    it('should have at least one project', () => {
      expect(projects.length).toBeGreaterThan(0)
    })

    it('should have valid structure for each project', () => {
      projects.forEach((project, index) => {
        expect(project.id).toBeDefined()
        expect(project.title).toBeDefined()
        expect(project.company).toBeDefined()
        expect(project.role).toBeDefined()
        expect(project.techStack).toBeDefined()
        expect(project.techStack.length).toBeGreaterThan(0)
        expect(project.description).toBeDefined()
        expect(project.details).toBeDefined()
        expect(Array.isArray(project.details)).toBe(true)
      })
    })

    it('should have unique project IDs', () => {
      const ids = projects.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('should have valid tech stack for each project', () => {
      projects.forEach(project => {
        project.techStack.forEach(tech => {
          expect(tech.name).toBeDefined()
          expect(tech.color).toMatch(/^#[0-9A-Fa-f]{6}$/)
        })
      })
    })
  })

  describe('Data Consistency', () => {
    it('should have matching name in personalInfo', () => {
      expect(personalInfo.name).toBe('Sathish Kumar V')
    })

    it('should have experiences from current company first', () => {
      const currentCompany = experiences[0].company
      expect(currentCompany).toContain('JMAN')
    })
  })
})
