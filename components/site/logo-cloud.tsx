import React from "react"

export function LogoCloud() {
  // Placeholder labels for now
  const placeholders = Array.from({ length: 18 }, (_, i) => `Logo ${String.fromCharCode(65 + i)}`)
  const rowA = [...placeholders]
  // duplicate for seamless loop

  return (
    <div className="py-14">
      <div className="mx-auto w-full max-w-6xl px-0 md:px-0">
        <div className="px-6 md:px-10">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Our Clients</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            A selection of companies that trusted BrainWave.
          </p>
        </div>

        {/* marquee wrapper with edge fade */}
        <div
          className="relative mt-6 overflow-hidden py-6 group"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Single Row */}
          <div className="marquee-track marquee-left group-hover:[animation-play-state:paused] motion-reduce:[animation:none] flex items-center gap-5">
            {[...rowA, ...rowA].map((label, i) => (
              <div
                key={`a-${i}-${label}`}
                className="border-border bg-popover/40 hover:bg-popover/60 text-popover-foreground/80 relative mx-3 flex h-20 w-48 items-center justify-center rounded-md border p-3 transition-all hover:-translate-y-1"
              >
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
