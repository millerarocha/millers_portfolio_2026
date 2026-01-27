import { Waypoints } from 'lucide-react'
import { cn } from "../../../lib/utils"

export interface TechDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TechDivider({ className, ...props }: TechDividerProps) {
  return (
    <div className={cn("w-full px-6 flex items-center gap-4 my-2 opacity-30", className)} {...props}>
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1"></div>
      {/* Replaced 'hub' material symbol with Lucide 'Waypoints' which is similar */}
      <Waypoints className="text-accent h-4 w-4" />
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1"></div>
    </div>
  )
}
