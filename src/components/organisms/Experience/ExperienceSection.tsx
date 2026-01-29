import { SectionTitle } from '../../atoms/SectionTitle'
import { TimelineLine } from '../../atoms/Timeline'
import { TimelineItem } from '../../molecules/TimelineItem'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import { experienceData as experience } from '../../../mocks/portfolio.mock'


const INITIAL_DISPLAY_COUNT = 3

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedExperience = showAll ? experience : experience.slice(0, INITIAL_DISPLAY_COUNT)
  const hasMore = experience.length > INITIAL_DISPLAY_COUNT

  return (
    <div className="w-full">
      <SectionTitle>EXPERIENCE</SectionTitle>
      <div className="px-4">
        <div className="relative pl-8 space-y-10">
          <TimelineLine />
          {displayedExperience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}          
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
