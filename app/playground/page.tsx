"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen space-y-12 px-6 py-10 md:px-12 lg:px-20">
      {/* Brand gradient banner */}
      <section className="relative overflow-hidden rounded-xl border bg-card p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 10%, rgba(0,205,202,0.18) 0%, rgba(0,205,202,0.06) 40%, transparent 70%), radial-gradient(40% 40% at 5% 90%, rgba(0,205,202,0.12) 0%, rgba(0,205,202,0.04) 50%, transparent 80%)",
          }}
        />
        <div className="relative">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            UI Playground
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Dark-only design system previews using your brand palette
            (background #000a18, primary #002f59, accent #00cdca used sparingly).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </section>

      {/* Typography scale */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Typography</h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <div className="space-y-2">
              <div className="font-heading text-4xl font-semibold">Heading 1</div>
              <div className="font-heading text-3xl font-semibold">Heading 2</div>
              <div className="font-heading text-2xl font-semibold">Heading 3</div>
              <div className="font-heading text-xl font-semibold">Heading 4</div>
              <div className="font-heading text-lg font-semibold">Heading 5</div>
              <div className="font-heading text-base font-semibold">Heading 6</div>
            </div>
            <div className="space-y-3 text-muted-foreground mt-4">
              <p className="text-lg">
                Lead paragraph — body uses Outfit for a sleek, professional tone.
              </p>
              <p>
                Body text — unified dark palette avoiding harsh pure whites. Links
                use the primary brand blue.
              </p>
              <p className="text-sm">Small and muted — helper text and captions.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Cards and form controls */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Cards & Controls</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-lg font-medium">Simple Card</div>
            <p className="text-muted-foreground mt-1">
              Uses surfaces slightly lifted from the base background.
            </p>
            <div className="mt-4 flex gap-3">
              <Button size="sm">Action</Button>
              <Button size="sm" variant="outline">
                Secondary
              </Button>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-lg font-medium">Checkbox</div>
            <div className="mt-3 flex items-center gap-2">
              <Checkbox id="cb1" defaultChecked />
              <Label htmlFor="cb1">Enable teal highlights</Label>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Checkbox id="cb2" />
              <Label htmlFor="cb2">Subscribe to updates</Label>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-lg font-medium">Brand Sample</div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              <div className="h-8 rounded bg-background" title="#000a18" />
              <div className="h-8 rounded bg-primary" title="#002f59" />
              <div className="h-8 rounded bg-accent" title="#00cdca" />
              <div className="h-8 rounded bg-secondary" />
              <div className="h-8 rounded bg-muted" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
