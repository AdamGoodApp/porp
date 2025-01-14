'use client'

import { ShippingProgressBar } from '@/components/shipping-progress/ShippingProgressBar'
import { 
  ClipboardIcon, 
  HomeIcon 
} from '@radix-ui/react-icons'
import { Ship } from 'lucide-react'

type StepStatus = 'completed' | 'current' | 'upcoming';

type ShippingStep = {
    label: string;
    status: StepStatus;
    icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
};

const initialShippingSteps: ShippingStep[] = [
    { label: 'Order Placed', status: 'completed', icon: ClipboardIcon },
    { label: 'Shipped', status: 'current', icon: Ship },
    { label: 'Delivered', status: 'upcoming', icon: HomeIcon },
];

export default function ShippingProgress() {
    const shippingSteps = () => {
        const stepsCopy = [...initialShippingSteps];
        const totalSteps = stepsCopy.length;

        // Randomly determine the number of completed steps (from 0 to totalSteps)
        const completedSteps = Math.floor(Math.random() * (totalSteps + 1));

        stepsCopy.forEach((step, index) => {
            if (index < completedSteps) {
            step.status = 'completed';
            } else if (index === completedSteps && completedSteps < totalSteps) {
            step.status = 'current';
            } else {
            step.status = 'upcoming';
            }
        });

        return stepsCopy;
    };

  return (
    <div className="w-full px-2">
      <ShippingProgressBar steps={shippingSteps()} />
    </div>
  )
}

