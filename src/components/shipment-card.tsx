"use client"

import { ChevronRight } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ShippingProgress from "@/components/shipping-progress";
import { motion } from 'framer-motion'

type CardProps = ComponentProps<typeof Card>

export function ShipmentCard({ className, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className={cn("w-[calc(100%-24px)]", className)} {...props}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ShippingProgress />
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            View shipment <ChevronRight />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
