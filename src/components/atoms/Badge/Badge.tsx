import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded border px-2 py-1 text-xs font-mono font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-white/5 text-text-secondary hover:bg-white/10",
        primary:
          "border-primary/30 bg-black/60 text-primary backdrop-blur-md",
        accent:
          "border-accent/20 bg-black/60 text-accent backdrop-blur-md",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
