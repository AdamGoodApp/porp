import type React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils"
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export type StepStatus = 'completed' | 'current' | 'upcoming'

interface StepProps {
  label: string
  status: StepStatus
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>> | LucideIcon
}

export const Step: React.FC<StepProps> = ({ label, status, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          status === 'completed' && "bg-primary text-primary-foreground",
          status === 'current' && "border border-primary text-primary",
          status === 'upcoming' && "border border-muted-foreground text-muted-foreground"
        )}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {status === 'completed' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CheckIcon className="w-4 h-4" />
          </motion.div>
        ) : (
          <Icon className="w-4 h-4" />
        )}
      </motion.div>
      <motion.span
        className={cn(
          "mt-1 text-xs font-medium text-center leading-tight",
          (status === 'completed' || status === 'current') && "text-foreground",
          status === 'upcoming' && "text-muted-foreground"
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {label}
      </motion.span>
    </div>
  )
}

