import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Filter } from "./filter";
import { Metrics } from "./metrics";
import { ShipmentCard } from "./shipment-card";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Shipments
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden">
          <Metrics />

          <div className="flex flex-1 flex-col mt-6 overflow-hidden">
            <Filter />

            {/* Scrollable Grid with 3 Columns */}
            <div className="flex-1 overflow-auto">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 30 }, (_, index) => (
                  <ShipmentCard key={index} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </SidebarInset>
    </div>
  );
}
