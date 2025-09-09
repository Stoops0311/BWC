import React from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, GaugeCircle, Layers3, Handshake, LineChart, Workflow } from "lucide-react"

const items = [
  {
    title: "Process Diagnostics & Capability Mapping",
    icon: GaugeCircle,
  },
  {
    title: "Business-Aligned 3DEXPERIENCE Implementation",
    icon: Workflow,
  },
  {
    title: "End-to-End Services: Resell → Integrate → Support",
    icon: Layers3,
  },
  {
    title: "Proven Track Record in FMCG & White Goods",
    icon: CheckCircle2,
  },
  {
    title: "Consulting Focused on ROI & Compliance",
    icon: LineChart,
  },
  {
    title: "75+ project experience across 20+ industries",
    icon: Handshake,
  },
]

export function WhyChoose() {
  return (
    <div className="py-14" id="why">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Why Choose BWC</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ title, icon: Icon }) => (
            <Card key={title} className="group flex items-start gap-3 p-5">
              <div className="text-accent/90">
                <Icon className="size-5" />
              </div>
              <div className="text-sm font-medium leading-snug text-foreground/90">
                {title}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
