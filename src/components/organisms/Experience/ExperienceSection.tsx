import { SectionTitle } from '../../atoms/SectionTitle'
import { TimelineLine } from '../../atoms/Timeline'
import { TimelineItem } from '../../molecules/TimelineItem'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experienceData } from '../../../mocks/portfolio.mock'
import { useLanguage } from '../../../context/LanguageContext'

const INITIAL_DISPLAY_COUNT = 3

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)
  const { language, t } = useLanguage()
  
  const hasMore = experienceData.length > INITIAL_DISPLAY_COUNT

  const localizedExperience = experienceData.map(item => ({
    ...item,
    title: item.title[language],
    description: item.description[language]
  }))

  return (
    <div className="w-full">
      <SectionTitle>{t.sections.experience}</SectionTitle>
      <div className="px-4">
        <div className="relative pl-8 space-y-10">
          <TimelineLine />
          
          {/* Initial items */}
          {localizedExperience.slice(0, INITIAL_DISPLAY_COUNT).map((item, index) => (
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
                {localizedExperience.slice(INITIAL_DISPLAY_COUNT).map((item, index) => (
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
                  {t.actions.showLess}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  {t.actions.showMore} ({experienceData.length - INITIAL_DISPLAY_COUNT} {t.actions.more})
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
