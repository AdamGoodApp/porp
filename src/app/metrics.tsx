import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Boxes, PackageOpen, Route, DollarSign } from "lucide-react"

export function Metrics() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Tracked Packages
          </CardTitle>
          <Boxes/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">84</div>
          <p className="text-xs text-muted-foreground">
            +10% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Delivered
          </CardTitle>
          <PackageOpen/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">43</div>
          <p className="text-xs text-muted-foreground">
            +16% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            En Route
          </CardTitle>
          <Route />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">22</div>
          <p className="text-xs text-muted-foreground">
            +2.4% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Revenue
          </CardTitle>
          <DollarSign />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}