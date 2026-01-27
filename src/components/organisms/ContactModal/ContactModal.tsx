import { X, Mail, Linkedin, Github, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'


export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)
  
  if (!isOpen) return null

  const contactInfo = {
    email: "miller.rocha@example.com", // Replace with real email if provided
    linkedin: "https://www.linkedin.com/in/miller-rocha/",
    github: "https://github.com/millerarocha",
    location: "Colombia"
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-charcoal rounded-2xl border border-accent-cyan/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight uppercase">Contact info</h2>
          <button
            onClick={onClose}
            className="size-8 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Email Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest opacity-70">Direct Email</h3>
            <div className="group relative flex items-center justify-between p-4 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">E-mail address</p>
                  <p className="text-sm font-medium text-white">{contactInfo.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="size-10 flex items-center justify-center rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-all"
                title="Copy email"
              >
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-accent uppercase tracking-widest opacity-70">Social Profiles</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-dark border border-white/5 hover:border-[#0077b5]/50 transition-colors"
              >
                <div className="size-10 rounded-lg bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-white">LinkedIn</span>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-dark border border-white/5 hover:border-white/50 transition-colors"
              >
                <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-white">GitHub</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 pt-2">
            <MapPin className="w-4 h-4 text-accent/50" />
            <span className="text-sm text-text-secondary">Based in {contactInfo.location}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <p className="text-[10px] text-center text-text-secondary uppercase tracking-[0.2em] opacity-40 italic">
            Available for remote opportunities and collaborations
          </p>
        </div>
      </div>
    </div>
  )
}
