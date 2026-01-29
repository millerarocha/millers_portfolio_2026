import { X, ExternalLink, Terminal, CheckCircle2 } from 'lucide-react'
import { Badge } from '../../atoms/Badge'
import { cn } from '../../../lib/utils'
import { useLanguage } from '../../../context/LanguageContext'

export interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    imageUrl: string
    category: string
    tags: string[]
    overview: string
    keyFeatures: string[]
    date: string
    liveUrl?: string
    sourceUrl?: string
  }
}

export function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  const { t } = useLanguage()

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md h-[92vh] sm:h-auto sm:max-h-[90vh] bg-charcoal rounded-t-2xl sm:rounded-2xl border border-accent-cyan/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col overflow-hidden">
        {/* Hero Image */}
        <div className="relative w-full h-64 shrink-0 overflow-hidden">
          <img
            alt={project.title}
            className="w-full h-full object-cover"
            src={project.imageUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black/40"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 pt-2">
          {/* Title & Meta */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white leading-tight mb-3">
              {project.title}
            </h1>
            <div className="flex items-center gap-3">
              <Badge variant="accent" className="uppercase">
                {project.category}
              </Badge>
              <span className="text-text-secondary text-xs font-mono">
                {project.date}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-3 opacity-60">
              {t.projectModal.overview}
            </h3>
            <p className="text-text-secondary leading-relaxed font-body text-sm">
              {project.overview}
            </p>
          </div>

          {/* Technical Stack */}
          <div className="mb-8">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-3 opacity-60">
              {t.projectModal.technicalStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 border border-[#2d3b54] rounded-lg text-white/90 text-xs font-medium bg-[#1e293b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-3 opacity-60">
              {t.projectModal.keyFeatures}
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-text-secondary font-body">
                  <CheckCircle2 className="text-accent-cyan w-[18px] h-[18px] mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-4 border-t border-[#2d3b54] bg-charcoal flex flex-col gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full flex items-center justify-center h-12",
                "bg-primary text-white rounded-lg font-bold text-sm tracking-wide",
                "shadow-[0_4px_15px_rgba(17,82,212,0.3)]",
                "hover:bg-primary/90 transition-all"
              )}
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              {t.projectModal.visitLive}
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full flex items-center justify-center h-12",
                "border border-[#2d3b54] text-white rounded-lg font-bold text-sm tracking-wide",
                "hover:bg-white/5 transition-all"
              )}
            >
              <Terminal className="mr-2 w-5 h-5" />
              {t.projectModal.viewSource}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
