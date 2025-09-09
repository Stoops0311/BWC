"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { partners } from "@/components/site/data/partners"
import { ArrowRight } from "lucide-react"

function PartnerCard({ name, logo, blurb, href }: { name: string; logo: string; blurb?: string; href: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 2 - 1 // -1..1
    const py = (y / rect.height) * 2 - 1
    const rotX = -(py * 6) // tilt toward cursor
    const rotY = px * 6
    const dist = Math.sqrt(px * px + py * py)
    const scale = 1 - Math.min(0.02, dist * 0.015) // slight push-down toward corners
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`
    ;(el.querySelector(".halo") as HTMLDivElement | null)?.style.setProperty(
      "background",
      `radial-gradient(180px 180px at ${x}px ${y}px, rgba(0,205,202,0.06), transparent 60%)`
    )
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <Link href={href} target="_blank" rel="noreferrer" className="group block">
      <Card
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative flex items-center gap-5 overflow-hidden p-6 transition-transform duration-200 will-change-transform motion-reduce:transition-none"
      >
        {/* edge glow bars */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        </div>
        {/* teal halo following mouse (less intense) */}
        <div aria-hidden className="halo pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
        {/* noise overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-200 group-hover:opacity-15 group-focus-visible:opacity-15"
          style={{ backgroundImage: "url(/noise.svg)", backgroundSize: "300px 300px" }}
        />
        <div className="relative h-12 w-40 shrink-0">
          <Image src={logo} alt={name} fill className="object-contain" />
        </div>
        <div className="relative">
          <div className="text-base font-medium">{name}</div>
          {blurb && <p className="text-muted-foreground mt-1 text-sm">{blurb}</p>}
          <div className="text-muted-foreground mt-3 inline-flex items-center gap-1 text-sm hover:text-foreground">
            <span>Explore now</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  )
}

export function Partners() {
  return (
    <div id="partners" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">
          Partnering with the Best
        </h2>
        <p className="text-muted-foreground mt-1">
          We are partners with the world&apos;s leading PLM innovators, engineering solution experts, and strategic consulting authorities.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <PartnerCard key={p.name} name={p.name} logo={p.logo} blurb={p.blurb} href={p.href} />
          ))}
        </div>
      </div>
    </div>
  )
}
