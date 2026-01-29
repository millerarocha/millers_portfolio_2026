import { ProjectCard } from '../ProjectCard'
import type { ExtendedProjectProps } from '../../../App'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectsSectionProps {
  projects: ExtendedProjectProps[]
  onProjectClick: (project: ExtendedProjectProps) => void
}

const INITIAL_DISPLAY_COUNT = 3

export function ProjectsSection({ projects, onProjectClick }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false)
  
  const hasMore = projects.length > INITIAL_DISPLAY_COUNT

  return (
    <section className="w-full px-5 py-6 flex flex-col gap-5">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-6 bg-accent rounded-sm"></span>
          Selected Projects
        </h3>
        <span className="text-xs font-mono text-text-secondary">v2.4.0</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Initial projects */}
        {projects.slice(0, INITIAL_DISPLAY_COUNT).map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project}
            onClick={() => onProjectClick(project)}
          />
        ))}

        {/* Expandable projects container */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
                {projects.slice(INITIAL_DISPLAY_COUNT).map((project, index) => (
                  <ProjectCard 
                    key={index + INITIAL_DISPLAY_COUNT} 
                    {...project}
                    onClick={() => onProjectClick(project)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Show More/Less Button */}
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-all font-medium text-sm"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More ({projects.length - INITIAL_DISPLAY_COUNT} more)
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
