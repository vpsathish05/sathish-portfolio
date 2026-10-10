/**
 * TypeScript types for portfolio data
 */

export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  phone: string
  website: string
  linkedin: string
  github: string
  reddit?: string
  medium?: string
  avatar: string
  location: string
}

export interface AboutMe {
  summary: string
  details: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  grade: string
}

export interface Skill {
  name: string
  color: string
}

export interface Skills {
  ai: Skill[]
  data: Skill[]
  fullstack: Skill[]
  cloud: Skill[]
}

export interface Experience {
  title: string
  company: string
  date: string
  description: string
}

export interface TechStack {
  name: string
  color: string
}

export interface Project {
  id: string
  title: string
  company: string
  role: string
  techStack: TechStack[]
  description: string
  details: string[]
  demoUrl: string | null
  githubUrl: string | null
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  aboutMe: AboutMe
  education: Education[]
  skills: Skills
  experiences: Experience[]
  projects: Project[]
}
