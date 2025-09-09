import React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { industries } from "@/components/site/data/industries"

export function IndustriesGrid() {
  return (
    <div id="industries" className="py-12">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Industries</h2>
        <p className="text-muted-foreground mt-1">Sectors we serve</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((item) => (
            <Card key={item.href} className="group p-5 transition-colors hover:bg-secondary/50">
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block no-underline text-muted-foreground hover:text-foreground"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-base font-medium">{item.title}</div>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
