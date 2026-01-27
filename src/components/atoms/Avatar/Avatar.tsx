import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"

const avatarVariants = cva(
  "relative group",
  {
    variants: {
      size: {
        default: "h-32 w-32",
        sm: "h-10 w-10",
        lg: "h-40 w-40",
      }
    },
    defaultVariants: {
      size: "default",
    }
  }
)

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  status?: 'online' | 'offline' | 'busy';
  withGlow?: boolean;
}

export function Avatar({ className, src, alt, status = 'online', withGlow = true, size, ...props }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {/* Glow Effect */}
      {withGlow && (
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-sm group-hover:opacity-50 transition-opacity"
        />
      )}
      
      {/* Image Container with Gradient Border */}
      <div className="relative h-full w-full rounded-full p-[2px] bg-gradient-to-b from-white/20 to-transparent">
        <div 
          className="h-full w-full rounded-full bg-surface-dark bg-center bg-cover bg-no-repeat border-2 border-background-dark"
          style={{ backgroundImage: `url("${src}")` }}
          aria-label={alt}
          role="img"
        />
      </div>

      {/* Status Indicator */}
      {status && (
        <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-background-dark flex items-center justify-center">
          <div className={cn(
            "h-2.5 w-2.5 rounded-full animate-pulse",
            status === 'online' && "bg-emerald-500",
            status === 'offline' && "bg-gray-500",
            status === 'busy' && "bg-red-500",
          )} />
        </div>
      )}
    </div>
  )
}
