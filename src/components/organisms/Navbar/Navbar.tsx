import { Terminal } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <Terminal className="text-accent w-6 h-6" />
          <h2 className="text-white text-lg font-bold tracking-tight uppercase">
            MILLER A. <span className="text-text-secondary font-normal">ROCHA</span>
          </h2>
        </div>
      </div>
    </header>
  )
}
