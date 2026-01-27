import { Terminal, Lock } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <Terminal className="text-accent w-6 h-6" />
          <h2 className="text-white text-lg font-bold tracking-tight uppercase">
            Juan <span className="text-text-secondary font-normal">[SURNAME]</span>
          </h2>
        </div>
        <button
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded border border-text-secondary/30 text-text-secondary text-xs font-bold tracking-wide uppercase hover:border-accent hover:text-accent transition-colors">
          <Lock className="w-3 h-3" />
          Admin Login
        </button>
      </div>
    </header>
  )
}
