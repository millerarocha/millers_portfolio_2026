import { Badge } from '../../atoms/Badge'
import { TimelineMarker } from '../../atoms/Timeline'

export interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  isLatest?: boolean;
}

export function TimelineItem({ year, title, subtitle, description, tags, isLatest }: TimelineItemProps) {
  return (
    <div className="relative group">
      <TimelineMarker variant={isLatest ? 'accent' : (isLatest === false ? 'default' : 'primary')} />
      <div className="flex flex-col gap-1">
        <span className="text-accent text-xs font-bold tracking-wider uppercase mb-1">
          {year}
        </span>
        <h3 className="text-white text-lg font-bold">
          {title}
        </h3>
        <p className="text-white/60 text-sm mb-2">
          {subtitle}
        </p>
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="bg-[#232f48] border-[#2d3b54] text-white">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
