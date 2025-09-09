"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { heroSlides } from "@/components/site/data/hero"

export function Hero() {
  // Pull the text content from slides
  const items = useMemo(
    () =>
      heroSlides.map((s) => ({
        title: s.title,
        description: s.description,
      })),
    []
  )

  const [index, setIndex] = useState(0)
  const [titleText, setTitleText] = useState("")
  const [descText, setDescText] = useState("")
  const [phase, setPhase] = useState<"typingTitle" | "typingDesc" | "pause" | "deleting" >("typingTitle")
  // Slower, more readable typing
  const typingSpeed = 60 // ms per char
  const deletingSpeed = 20
  const pauseAfterType = 800
  const pauseAfterDesc = 1200
  const rafRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const current = items[index]
    if (!current) return

    const type = (full: string, setter: React.Dispatch<React.SetStateAction<string>>, speed: number, done: () => void) => {
      let i = 0
      const step = () => {
        i++
        setter(full.slice(0, i))
        if (i < full.length) {
          rafRef.current = window.setTimeout(step, speed) as unknown as number
        } else {
          done()
        }
      }
      step()
    }

    const del = (setter: React.Dispatch<React.SetStateAction<string>>, getVal: () => string, speed: number, done: () => void) => {
      const run = () => {
        const v = getVal()
        if (v.length === 0) return done()
        setter(v.slice(0, -1))
        rafRef.current = window.setTimeout(run, speed) as unknown as number
      }
      run()
    }

    if (phase === "typingTitle") {
      setTitleText("")
      setDescText("")
      type(current.title, setTitleText, typingSpeed, () => {
        timeoutRef.current = window.setTimeout(() => setPhase("typingDesc"), pauseAfterType) as unknown as number
      })
    } else if (phase === "typingDesc") {
      setDescText("")
      type(current.description, setDescText, typingSpeed, () => {
        timeoutRef.current = window.setTimeout(() => setPhase("pause"), pauseAfterDesc) as unknown as number
      })
    } else if (phase === "pause") {
      timeoutRef.current = window.setTimeout(() => setPhase("deleting"), 800) as unknown as number
    } else if (phase === "deleting") {
      del(setDescText, () => descText, deletingSpeed, () => {
        del(setTitleText, () => titleText, deletingSpeed, () => {
          setIndex((p) => (p + 1) % items.length)
          setPhase("typingTitle")
        })
      })
    }

    return () => {
      if (rafRef.current) window.clearTimeout(rafRef.current)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index])

  // When index changes, ensure we start typing from title
  useEffect(() => {
    setPhase("typingTitle")
  }, [index])

  return (
    <section id="home" className="relative w-full min-h-[60vh] h-[60svh] overflow-clip">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-background" />
      {/* Fade the site grid beneath the hero into the solid background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-0 bg-gradient-to-b from-transparent to-background" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center md:px-10">
        <h1 className="font-heading text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          {titleText}
          <span className="inline-block w-1 animate-pulse bg-accent align-baseline ml-1" style={{ height: '1em' }} />
        </h1>
        <p className="text-muted-foreground mt-5 max-w-3xl text-base md:text-lg lg:text-xl">
          {descText}
        </p>
      </div>

      {/* compact hero - grid fades to background at the bottom via overlay above */}
    </section>
  )
}
