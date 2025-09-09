import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export function Intro() {
  return (
    <div className="py-14" id="intro">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Introduction of BWC
          </h2>
          <p className="text-muted-foreground mt-4">
            BrainWave Consulting (BWC) is a trusted technology partner for product
            design and development companies, delivering comprehensive digital
            transformation and technology solutions. Since 2012, our customized
            solutions have led to exponential growth and improved ROIs for our clients.
          </p>
          <p className="text-muted-foreground mt-3">
            We help enterprises optimize business processes, reduce costs across the
            value chain, and establish partnerships with global stakeholders. Our
            expertise spans PLM, engineering, and digital transformation.
          </p>
          <div className="mt-5">
            <Link
              href="https://brainwaveconsulting.co.in/services/"
              target="_blank"
              className="text-primary hover:underline"
            >
              Our Process →
            </Link>
          </div>
        </div>
        <Card className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="https://brainwaveconsulting.co.in/wp-content/uploads/2023/07/PLM-1.png"
            alt="PLM"
            fill
            className="object-cover"
          />
        </Card>
      </div>
    </div>
  )
}
