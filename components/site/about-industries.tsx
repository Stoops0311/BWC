import React from "react"
import Link from "next/link"
import { industries } from "@/components/site/data/industries"
import { Card } from "@/components/ui/card"

export function AboutIndustries() {
  return (
    <section id="about" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Wrapper with subtle gradient border + background tint */}
        <div className="relative overflow-hidden rounded-2xl border bg-card/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(1200px 400px at 20% -20%, rgba(0,205,202,0.10), transparent), radial-gradient(900px 360px at 110% 120%, rgba(0,205,202,0.06), transparent)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-10 p-6 md:grid-cols-[1fr_auto_1fr] md:p-10">
            {/* Intro copy */}
            <div className="md:col-span-1 md:pl-2">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">Introduction of BWC</h2>
              <p className="text-muted-foreground mt-4">
                BrainWave Consulting (BWC) is a trusted technology partner for product design and development companies,
                delivering comprehensive digital transformation and technology solutions. Since 2012, our customized
                solutions have led to exponential growth and improved ROIs for our clients.
              </p>
              <p className="text-muted-foreground mt-3">
                We help enterprises optimize business processes, reduce costs across the value chain, and establish
                partnerships with global stakeholders. Our expertise spans PLM, engineering, and digital transformation.
              </p>
              <div className="mt-5">
                <Link href="https://brainwaveconsulting.co.in/services/" target="_blank" className="text-muted-foreground hover:text-foreground no-underline">
                  Our Process →
                </Link>
              </div>
            </div>

            {/* Divider (on desktop) */}
            <div className="hidden md:block md:col-span-1">
              <div className="mx-auto h-full w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
            </div>

            {/* Industries grid */}
            <div className="md:col-span-1 md:pr-2">
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight">Industries</h3>
                <p className="text-muted-foreground mt-1">Sectors we serve</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {industries.map((item) => (
                  <Card key={item.href} className="group p-4 transition-colors hover:bg-secondary/50">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block no-underline text-muted-foreground hover:text-foreground"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium">{item.title}</div>
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
