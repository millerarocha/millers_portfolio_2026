import { Terminal, Globe } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext'
import { cn } from '../../../lib/utils'

export function Navbar() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <Terminal className="text-accent w-6 h-6" />
          <h2 className="text-white text-lg font-bold tracking-tight uppercase">
            MILLER A. <span className="text-text-secondary font-normal">ROCHA</span>
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold transition-all uppercase tracking-wider",
                language === 'en' 
                  ? "bg-primary text-white shadow-lg" 
                  : "text-white/40 hover:text-white/60"
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold transition-all uppercase tracking-wider",
                language === 'es' 
                  ? "bg-primary text-white shadow-lg" 
                  : "text-white/40 hover:text-white/60"
              )}
            >
              ES
            </button>
          </div>
          <Globe className="w-4 h-4 text-white/20" />
        </div>
      </div>
    </header>
  )
}
