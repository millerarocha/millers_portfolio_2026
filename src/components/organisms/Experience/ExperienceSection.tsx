import { SectionTitle } from '../../atoms/SectionTitle'
import { TimelineLine } from '../../atoms/Timeline'
import { TimelineItem } from '../../molecules/TimelineItem'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experienceData as experience } from '../../../mocks/portfolio.mock'

const INITIAL_DISPLAY_COUNT = 3

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)
  
  const hasMore = experience.length > INITIAL_DISPLAY_COUNT

  return (
    <div className="w-full">
      <SectionTitle>EXPERIENCE</SectionTitle>
      <div className="px-4">
        <div className="relative pl-8 space-y-10">
          <TimelineLine />
          
          {/* Initial items */}
          {experience.slice(0, INITIAL_DISPLAY_COUNT).map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}

          {/* Expandable items */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden flex flex-col gap-10"
              >
                {experience.slice(INITIAL_DISPLAY_COUNT).map((item, index) => (
                  <TimelineItem key={index + INITIAL_DISPLAY_COUNT} {...item} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {hasMore && (
           <div className="mt-8 flex justify-center">
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
                  Show More ({experience.length - INITIAL_DISPLAY_COUNT} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
