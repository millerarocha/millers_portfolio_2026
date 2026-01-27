import { cn } from "../../../lib/utils"

export interface TimelineMarkerProps {
  variant?: 'primary' | 'accent' | 'default';
  className?: string;
}

export function TimelineMarker({ variant = 'default', className }: TimelineMarkerProps) {
  const variants = {
    primary: "border-primary shadow-[0_0_8px_rgba(17,82,212,0.6)]",
    accent: "border-accent shadow-[0_0_8px_rgba(0,229,255,0.6)]",
    default: "border-[#2d3b54]"
  }

  return (
    <div
      className={cn(
        "absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-background-dark border-2 transition-colors",
        variants[variant],
        className
      )}
    />
  )
}

export function TimelineLine({ className }: { className?: string }) {
  return (
    <div className={cn("absolute left-0 top-1 bottom-0 w-px bg-[#2d3b54]", className)} />
  )
}
