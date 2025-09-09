import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <Image 
                src="https://brainwaveconsulting.co.in/wp-content/uploads/2021/12/login-logo.png" 
                alt="BrainWave Consulting" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <div className="font-heading text-xl font-semibold">BWC Labs Pvt. Ltd.</div>
            </div>
            <p className="text-muted-foreground mt-2 text-sm max-w-xs">
              4th Floor, Balaji Business Center, Off Pune Mumbai Expressway, Baner,
              Pune - 411045, Maharashtra, INDIA.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground/90">For Enterprises</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li><Link href="https://brainwaveconsulting.co.in/services/#plm" target="_blank">PLM Services</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/services/#softeng" target="_blank">Software Engineering</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/services/#techserv" target="_blank">Technical Services</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/services/#embedded" target="_blank">Embedded Services</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground/90">We the People</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li><Link href="https://brainwaveconsulting.co.in/about-us/" target="_blank">About Us</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/careers/" target="_blank">Careers</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/team-culture/" target="_blank">Team & Culture</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground/90">Partnerships</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li><Link href="https://brainwaveconsulting.co.in/partners/cimdata/" target="_blank">CIMdata</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/partners/dassault-systemes/" target="_blank">Dassault Systèmes</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/partners/vias3d/" target="_blank">VIAS3D</Link></li>
              <li><Link href="https://brainwaveconsulting.co.in/partners/xlm-solution/" target="_blank">XLM Solutions</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground/90">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li><Link href="https://brainwaveconsulting.co.in/contact-us/" target="_blank">Contact Us</Link></li>
              <li>Locations: India • USA • UK</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <div>© BWC Labs Pvt. Ltd. 2012 - {new Date().getFullYear()}. All rights reserved.</div>
          <div>
            Developed by Vivid Verse Global Limited
          </div>
        </div>
      </div>
    </footer>
  )
}
