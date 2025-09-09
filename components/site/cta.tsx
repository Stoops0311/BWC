import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <div id="contact" className="py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border bg-card px-6 py-12 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 h-64 w-64 -translate-y-12 translate-x-8 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,205,202,0.18) 0%, transparent 70%)" }}
        />
        <h3 className="font-heading text-2xl font-semibold tracking-tight">
          Let’s define your roadmap
        </h3>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Connect and meet us to discuss the roadmap for your products, services, and processes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="https://brainwaveconsulting.co.in/contact-us/" target="_blank">
              Meet Us
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://brainwaveconsulting.co.in/contact-us/" target="_blank">
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
