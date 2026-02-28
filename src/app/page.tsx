'use client'

import { useState, useEffect, Suspense } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { PersonalInfoSection } from "@/components/PersonalInfoSection"
import { AboutSection } from "@/components/AboutSection"
import { EducationSection } from "@/components/EducationSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { personalInfo } from "@/data/portfolio"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    root.classList.add('dark')
    
    // Animated stars background
    const randomizePosition = () => {
      const stars = document.querySelectorAll('.star')
      stars.forEach((star) => {
        if (star instanceof HTMLElement) {
          star.style.top = `${Math.random() * 100}%`
          star.style.left = `${Math.random() * 100}%`
        }
      })
    }
    randomizePosition()
    const interval = setInterval(randomizePosition, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  if (!mounted) {
    return <LoadingSkeleton />
  }

  return (
    <ErrorBoundary>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="container mx-auto px-4 py-8 relative overflow-hidden">
          {/* Animated stars background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star absolute w-1 h-1 bg-blue-500 rounded-full opacity-0 animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <header className="flex justify-between items-center mb-8 relative z-10">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </Button>
          </header>

          {/* Main content with Suspense boundaries */}
          <Suspense fallback={<LoadingSkeleton />}>
            <PersonalInfoSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </Suspense>
        </div>
        <Toaster />
      </div>
    </ErrorBoundary>
  )
}