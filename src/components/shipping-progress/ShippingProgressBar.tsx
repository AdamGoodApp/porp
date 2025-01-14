import React from 'react'
import { Step, type StepStatus } from '@/components/shipping-progress/Step'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export interface ShippingStep {
  label: string
  status: StepStatus
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>> | LucideIcon
}

interface ShippingProgressBarProps {
  steps: readonly ShippingStep[]
}

export const ShippingProgressBar: React.FC<ShippingProgressBarProps> = ({ steps }) => {
  return (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              viewport={{ once: true }}
            >
              <Step label={step.label} status={step.status} icon={step.icon} />
            </motion.div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-secondary mx-1">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{
                    width:
                      step.status === 'completed'
                        ? '100%'
                        : step.status === 'current'
                        ? '50%'
                        : '0%',
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

