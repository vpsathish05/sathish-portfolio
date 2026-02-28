import { Suspense } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { LoadingSkeleton } from "@/components/LoadingSkeleton"
import { ThemeToggle } from "@/components/theme-toggle"
import { PersonalInfoSection } from "@/components/PersonalInfoSection"
import { AboutSection } from "@/components/AboutSection"
import { EducationSection } from "@/components/EducationSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { personalInfo } from "@/data/portfolio"

export default function Portfolio() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 relative">
          {/* Animated stars background - CSS only */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star absolute w-1 h-1 bg-blue-500 rounded-full animate-twinkle"
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
            <ThemeToggle />
          </header>

          {/* Main content */}
          <main role="main">
            <Suspense fallback={<LoadingSkeleton />}>
              <PersonalInfoSection />
            </Suspense>
            <Suspense fallback={<LoadingSkeleton />}>
              <AboutSection />
            </Suspense>
            <Suspense fallback={<LoadingSkeleton />}>
              <EducationSection />
            </Suspense>
            <Suspense fallback={<LoadingSkeleton />}>
              <SkillsSection />
            </Suspense>
            <Suspense fallback={<LoadingSkeleton />}>
              <ExperienceSection />
            </Suspense>
            <Suspense fallback={<LoadingSkeleton />}>
              <ProjectsSection />
            </Suspense>
            <Suspense fallback={<LoadingSkeleton />}>
              <ContactSection />
            </Suspense>
          </main>
        </div>
        <Toaster />
      </div>
    </ErrorBoundary>
  )
}