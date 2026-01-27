import { SectionTitle } from '../../atoms/SectionTitle'
import { TimelineLine } from '../../atoms/Timeline'
import { TimelineItem, type TimelineItemProps } from '../../molecules/TimelineItem'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const experience: TimelineItemProps[] = [
  {
    year: "2022 — Present",
    title: "Senior Full Stack Developer",
    subtitle: "TechFlow Solutions",
    description: "Leading the frontend architecture migration to Next.js. Mentoring junior developers and establishing CI/CD pipelines.",
    tags: ["React", "Node.js"],
    isLatest: true
  },
  {
    year: "2019 — 2022",
    title: "Web Developer",
    subtitle: "INDRA (GLOMO/BBVA)",
    description: "Developed core banking modules for the global mobile application. Optimized rendering performance by 40%.",
    isLatest: false
  },
  {
    year: "2015 — 2019",
    title: "Mechatronics Lead",
    subtitle: "AutoSys Engineering",
    description: "Designed control systems for automated assembly lines. Bridged the gap between hardware sensors and software dashboards.",
    isLatest: false
  },
  {
    year: "2013 — 2015",
    title: "IoT Engineer",
    subtitle: "Smart Systems Inc.",
    description: "Developed IoT solutions for industrial monitoring. Implemented MQTT-based communication protocols.",
    isLatest: false
  },
  {
    year: "2011 — 2013",
    title: "Automation Specialist",
    subtitle: "Manufacturing Tech Co.",
    description: "Programmed PLCs for production line automation. Reduced downtime by 30% through predictive maintenance.",
    isLatest: false
  },
  {
    year: "2009 — 2011",
    title: "Junior Developer",
    subtitle: "WebDev Solutions",
    description: "Built responsive websites and web applications. Gained experience in full-stack development.",
    isLatest: false
  },
  {
    year: "2007 — 2009",
    title: "Embedded Systems Intern",
    subtitle: "Electronics Corp",
    description: "Assisted in firmware development for consumer electronics. Learned C/C++ and microcontroller programming.",
    isLatest: false
  },
  {
    year: "2006 — 2007",
    title: "Engineering Trainee",
    subtitle: "Industrial Automation Ltd.",
    description: "Supported installation and commissioning of automated systems. Gained hands-on experience with industrial equipment.",
    isLatest: false
  }
]

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
