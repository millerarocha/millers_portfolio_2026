import { Navbar } from './components/organisms/Navbar'
import { Hero } from './components/organisms/Hero'
import { TechDivider } from './components/atoms/TechDivider'
import { ExperienceSection } from './components/organisms/Experience'
import { TechStack } from './components/organisms/TechStack'
import { EducationSection } from './components/organisms/Education'
import { ProjectDetailModal } from './components/organisms/ProjectDetailModal'
import { ProjectsSection } from './components/organisms/ProjectsSection'
import { ContactModal } from './components/organisms/ContactModal'
import { type ProjectCardProps } from './components/organisms/ProjectCard'
import { Footer } from './components/organisms/Footer'
import { Linkedin } from 'lucide-react'
import { Button } from './components/atoms/Button'
import { useState } from 'react'

// Extended interface for modal data
export interface ExtendedProjectProps extends ProjectCardProps {
  overview: string
  keyFeatures: string[]
  date: string
  liveUrl?: string
  sourceUrl?: string
}

import { projectsData as projects } from './mocks/portfolio.mock'




function App() {
  const [selectedProject, setSelectedProject] = useState<ExtendedProjectProps | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleViewCase = (project: ExtendedProjectProps) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Delay clearing the project to allow exit animation
    setTimeout(() => setSelectedProject(null), 200)
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-dark bg-tech-grid bg-[size:40px_40px]">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto pb-10">
        <Hero onContactClick={() => setIsContactModalOpen(true)} />
        
        <ProjectsSection 
          projects={projects}
          onProjectClick={handleViewCase}
        />
        
        <TechDivider className="max-w-2xl mx-auto" />
        
        <div className="w-full max-w-2xl mx-auto space-y-8">
          <ExperienceSection />
          <EducationSection />
          <TechStack />
        </div>

        <TechDivider className="max-w-2xl mx-auto" />
        
        {/* Bottom CTA */}
        <div className="w-full px-4 pt-4 max-w-2xl mx-auto">
          <a 
            href="https://www.linkedin.com/in/millerarocha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button variant="primary" className="w-full h-12 gap-2 shadow-[0_0_15px_rgba(17,82,212,0.5)]">
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </Button>
          </a>
        </div>

        <Footer />
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}

export default App

