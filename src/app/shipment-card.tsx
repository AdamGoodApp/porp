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

type CardProps = ComponentProps<typeof Card>

export function ShipmentCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[calc(100%-24px)]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          View shipment <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
