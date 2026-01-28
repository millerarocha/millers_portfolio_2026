import { SectionTitle } from '../../atoms/SectionTitle'
import { Badge } from '../../atoms/Badge'

import { techStackData as technologies } from '../../../mocks/portfolio.mock'


export function TechStack() {
  return (
    <div className="w-full">
      <SectionTitle>TECHNICAL ARSENAL</SectionTitle>
      <div className="px-4">
        <div className="bg-surface-dark border border-[#2d3b54] rounded-xl p-5 shadow-lg">
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <Badge 
                key={tech.name} 
                variant={tech.primary ? 'accent' : 'default'}
                className={tech.primary ? "bg-accent/10 py-1.5 px-3" : "bg-[#232f48] border-white/20 text-white/80 py-1.5 px-3"}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
