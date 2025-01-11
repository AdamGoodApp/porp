import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Download } from "lucide-react"

export function Filter() {
  return (
    <div className="flex gap-x-4 pb-4">
      <Tabs defaultValue="export">
        <TabsList>
          <TabsTrigger value="export">Export</TabsTrigger>
          <TabsTrigger value="import">Import</TabsTrigger>
        </TabsList>
      </Tabs>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Default list" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default-list">Default list</SelectItem>
          <SelectItem value="delivery-managment-list">Delivery management list</SelectItem>
        </SelectContent>
      </Select>
      <div className="relative w-96">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Enter search keyword" className="pl-8" />
      </div>
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="shipment-status">Shipment status</SelectItem>
          <SelectItem value="alert">Alert</SelectItem>
          <SelectItem value="pol">POL</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Created date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="created-date">Created date</SelectItem>
          <SelectItem value="delivery">Delivery</SelectItem>
          <SelectItem value="arrival">Arival</SelectItem>
        </SelectContent>
      </Select>
      <div className="ml-auto"> 
        <Button variant="outline" size="icon">
          <Download />
        </Button>
      </div>
    </div>
  )
}