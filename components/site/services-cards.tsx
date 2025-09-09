import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/components/site/data/services"

export function ServicesCards() {
  return (
    <div id="services" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Our Services</h2>
        <p className="text-muted-foreground mt-1">
          We specialize in solving business challenges for product design & development with optimized processes and ROI.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group p-6 transition-colors hover:bg-secondary/50">
              <div className="flex items-start gap-4">
                {s.icon && (
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-md">
                    <Image src={s.icon} alt="" fill className="object-contain p-1" />
                  </div>
                )}
                <div>
                  <div className="font-heading text-lg font-semibold leading-tight">{s.title}</div>
                  <div className="text-foreground/80 mt-1 text-sm">{s.subtitle}</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">{s.description}</p>
              <div className="mt-4">
                <Button asChild variant="link" className="px-0">
                  <Link href={s.href} target="_blank" rel="noreferrer">
                    Read More →
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
