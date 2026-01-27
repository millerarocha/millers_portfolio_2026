import { ChevronRight } from 'lucide-react'
import { Badge } from '../../atoms/Badge'
import { cn } from '../../../lib/utils'

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: 'HARDWARE' | 'SOFTWARE' | 'R&D';
  tags: string[];
}

export function ProjectCard({ title, description, imageUrl, category, tags }: ProjectCardProps) {
  
  const categoryColors = {
    'HARDWARE': 'text-accent border-accent/20',
    'SOFTWARE': 'text-primary border-primary/30',
    'R&D': 'text-accent border-accent/20', // Using accent for R&D as per design
  }

  return (
    <div className="group relative rounded-2xl bg-surface-dark border border-white/5 overflow-hidden hover:border-primary/50 transition-colors shadow-lg">
      
      {/* Image Section */}
      <div 
        className="aspect-video w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-90" />
        
        {/* Category Badge (Top Right) */}
        <div className={cn(
          "absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-mono border",
          categoryColors[category]
        )}>
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 -mt-10 relative z-10">
        <h4 className="text-white text-lg font-bold leading-tight mb-2">{title}</h4>
        <p className="text-text-secondary text-sm font-body mb-4 line-clamp-2">
          {description}
        </p>

        {/* Footer: Tags & Action */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="default">{tag}</Badge>
            ))}
          </div>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
            View Case <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
