import { cn } from "../../../lib/utils"

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-white tracking-wide text-2xl font-bold leading-tight px-4 text-left pt-4 pb-6 flex items-center gap-2", className)}>
      <span className="w-1.5 h-6 bg-accent rounded-full inline-block"></span>
      {children}
    </h2>
  )
}
