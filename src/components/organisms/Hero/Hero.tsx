import { Mail } from 'lucide-react'
import { Button } from '../../atoms/Button'
import { Avatar } from '../../atoms/Avatar'

export interface HeroProps {
  onContactClick?: () => void
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="flex flex-col items-center w-full px-6 pt-10 pb-10 gap-8 md:gap-10">
      {/* Container for horizontal layout on desktop */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        
        {/* Avatar - Larger on desktop */}
        <div className="shrink-0">
          <Avatar 
            src="/assets/images/profile.jpg"
            alt="Miller's Profile"
            status="online"
            className="h-32 w-32 md:h-40 md:w-40 lg:h-64 lg:w-64"
          />
        </div>

        {/* Content - Centered on mobile, left-aligned on desktop */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 md:gap-4">
          {/* Texts */}
          <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              MILLER A. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">ROCHA</span>
            </h1>
            
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 md:w-16 bg-accent/50"></span>
              <p className="text-accent text-sm md:text-base lg:text-lg font-bold tracking-wider uppercase">Mechatronics Engineer & Web Developer</p>
              <span className="h-px w-8 md:w-16 bg-accent/50"></span>
            </div>
            
            <p className="text-text-secondary text-base md:text-lg lg:text-xl font-body leading-relaxed max-w-md md:max-w-xl lg:max-w-2xl mt-2">
              Senior professional specializing in high-stakes projects like <strong className="text-white">INDRA/BBVA GLOMO</strong>, bridging hardware precision with software scalability.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full md:w-auto gap-4 mt-2">
            <Button 
              className="flex-1 md:flex-none md:w-40" 
              variant="glass"
              onClick={onContactClick}
            >
              <Mail className="mr-2 w-4 h-4" />
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
