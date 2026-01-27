import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 active:scale-95 uppercase tracking-wide",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90",
        glass:
          "bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10",
        outline:
          "border border-text-secondary/30 text-text-secondary hover:border-accent hover:text-accent bg-transparent",
        ghost: "hover:bg-white/5 text-text-secondary hover:text-white",
      },
      size: {
        default: "h-12 px-6 py-2 text-sm rounded-xl",
        sm: "h-8 px-3 text-xs rounded",
        lg: "h-14 px-8 text-base rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
