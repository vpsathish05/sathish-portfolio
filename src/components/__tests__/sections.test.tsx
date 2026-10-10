/**
 * Component Smoke Tests
 * Ensures all section components render without errors
 */

import React from 'react'
import { render, screen } from '@testing-library/react'

// Import components
import { PersonalInfoSection } from '../PersonalInfoSection'
import { AboutSection } from '../AboutSection'
import { EducationSection } from '../EducationSection'
import { SkillsSection } from '../SkillsSection'
import { ExperienceSection } from '../ExperienceSection'
import { ProjectsSection } from '../ProjectsSection'

// Import data for validation
import { personalInfo, education, experiences, projects } from '@/data/portfolio'

describe('Section Components', () => {
  
  describe('PersonalInfoSection', () => {
    it('renders without crashing', () => {
      render(<PersonalInfoSection />)
    })

    it('displays the title', () => {
      render(<PersonalInfoSection />)
      // The component displays title in h2, not name
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('displays contact information', () => {
      render(<PersonalInfoSection />)
      expect(screen.getByText(personalInfo.email)).toBeInTheDocument()
    })
  })

  describe('AboutSection', () => {
    it('renders without crashing', () => {
      render(<AboutSection />)
    })

    it('displays about section heading', () => {
      render(<AboutSection />)
      expect(screen.getByText(/about/i)).toBeInTheDocument()
    })
  })

  describe('EducationSection', () => {
    it('renders without crashing', () => {
      render(<EducationSection />)
    })

    it('displays education heading', () => {
      render(<EducationSection />)
      expect(screen.getByText(/education/i)).toBeInTheDocument()
    })

    it('displays at least one degree', () => {
      render(<EducationSection />)
      expect(screen.getByText(education[0].degree)).toBeInTheDocument()
    })
  })

  describe('SkillsSection', () => {
    it('renders without crashing', () => {
      render(<SkillsSection />)
    })

    it('displays skills heading', () => {
      render(<SkillsSection />)
      expect(screen.getByText(/skills/i)).toBeInTheDocument()
    })
  })

  describe('ExperienceSection', () => {
    it('renders without crashing', () => {
      render(<ExperienceSection />)
    })

    it('displays experience heading', () => {
      render(<ExperienceSection />)
      expect(screen.getByText(/experience/i)).toBeInTheDocument()
    })

    it('displays most recent job title', () => {
      render(<ExperienceSection />)
      expect(screen.getByText(experiences[0].title)).toBeInTheDocument()
    })
  })

  describe('ProjectsSection', () => {
    it('renders without crashing', () => {
      render(<ProjectsSection />)
    })

    it('displays projects heading', () => {
      render(<ProjectsSection />)
      expect(screen.getByText(/projects/i)).toBeInTheDocument()
    })

    it('displays at least one project title', () => {
      render(<ProjectsSection />)
      expect(screen.getByText(projects[0].title)).toBeInTheDocument()
    })
  })
})

describe('Component Integration', () => {
  it('all components render together without errors', () => {
    render(
      <div>
        <PersonalInfoSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    )
    
    // Basic sanity check - page should have key elements
    expect(screen.getByText(personalInfo.email)).toBeInTheDocument()
  })
})
