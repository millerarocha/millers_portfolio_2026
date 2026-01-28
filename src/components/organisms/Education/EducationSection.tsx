import { SectionTitle } from '../../atoms/SectionTitle'

import { educationData as education } from '../../../mocks/portfolio.mock'


export function EducationSection() {
  return (
    <div className="w-full">
      <SectionTitle>EDUCATION</SectionTitle>
      <div className="px-4 flex flex-col gap-4">
        {education.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 bg-surface-dark p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-white font-bold text-base leading-tight">{item.degree}</p>
                <p className="text-accent text-sm font-medium mt-1">{item.school}</p>
              </div>
              <span className="shrink-0 text-[10px] font-mono font-bold text-text-secondary bg-background-dark px-2 py-1 rounded border border-white/5">
                {item.year}
              </span>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed mt-1 italic opacity-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
