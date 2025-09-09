"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { testimonials } from "@/components/site/data/testimonials"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.02 + path.id * 0.008}
            initial={{ pathLength: 0.3, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1], pathOffset: [0, 1, 0] }}
            transition={{ duration: 40 + Math.random() * 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  )
}

// no masonry needed now

export function Testimonials() {
  return (
    <div id="testimonials" className="relative py-16">
      {/* animated background */}
      <div className="absolute inset-0 text-slate-800 dark:text-white/40">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      {/* Top and bottom fade gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10"></div>

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What Our Customers Have to Say</h2>
        <p className="text-muted-foreground mt-1 text-sm">Here is what some of our customers have to say.</p>

        {/* One-row marquee moving left with compact testimonial cards */}
        <div
          className="mt-8 relative overflow-hidden py-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="marquee-track marquee-left flex items-stretch gap-4">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <Card key={`row-${i}`} className="min-w-[280px] max-w-[280px] border bg-card/90">
                <div className="p-3">
                  <blockquote className="text-[13px] leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
                  <div className="mt-3 flex items-center gap-2">
                    <Avatar className="size-6">
                      {t.image ? <AvatarImage src={t.image} alt={t.author} /> : <AvatarFallback>{t.author.charAt(0)}</AvatarFallback>}
                    </Avatar>
                    <div>
                      <div className="text-[11px] font-medium text-foreground/90">{t.author}</div>
                      <div className="text-[10px] text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Hover over a row to pause the carousel.</p>
      </div>
    </div>
  )
}
