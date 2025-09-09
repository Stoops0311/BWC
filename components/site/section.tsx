import React from "react"

export function Section({
  id,
  className,
  children,
  container = true,
}: {
  id?: string
  className?: string
  children: React.ReactNode
  container?: boolean
}) {
  return (
    <section id={id} className={className}>
      <div className={container ? "mx-auto w-full max-w-6xl px-6 md:px-10" : "w-full"}>
        {children}
      </div>
    </section>
  )
}
