"use client"

import type React from "react"
import { useEffect, useRef } from "react"

type NeonIsometricMazeProps = {
  primaryColor?: string
  accentColor?: string
  bgFadeColor?: string
  className?: string
  style?: React.CSSProperties
}

const NeonIsometricMaze: React.FC<NeonIsometricMazeProps> = ({
  primaryColor = "rgba(0,47,89,0.85)", // brand blue #002f59
  accentColor = "rgba(0,205,202,0.6)", // brand teal #00cdca
  bgFadeColor = "rgba(0,10,24,0.15)", // brand dark bg #000a18 with low alpha
  className,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = canvas.getContext("2d")
    if (!x) return

    let t = 0
    let animationFrameId: number

    const r = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      d()
    }

    const d = () => {
      if (!canvas || !x) return
      const s = Math.min(canvas.width, canvas.height) / 15
      const g = Math.ceil(canvas.width / s) * 2
      const h = Math.ceil(canvas.height / (s * 0.5)) * 2
      const w = canvas.width / 2
      const v = canvas.height / 2

      for (let y = -h; y < h; y++) {
        for (let i = -g; i < g; i++) {
          const p = w + ((i - y) * s) / 2
          const q = v + ((i + y) * s) / 4
          const m = Math.sqrt(i * i + y * y)
          const n = Math.sqrt(g * g + h * h)
          const e = 1 - m / n
          const f = s * e * Math.abs(Math.sin(m * 0.5 + t))

          // Draw the shape
          x.beginPath()
          x.moveTo(p, q - f)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.lineTo(p + s, q - f)
          x.lineTo(p + s, q)
          x.lineTo(p + s / 2, q + s / 2)
          x.lineTo(p, q)
          x.closePath()

          // Fill with gradient using brand colors (blue -> teal)
          const gradient = x.createLinearGradient(p, q - f, p + s, q)
          gradient.addColorStop(0, primaryColor)
          gradient.addColorStop(1, accentColor)
          x.fillStyle = gradient
          x.shadowColor = accentColor
          x.shadowBlur = 6
          x.fill()
          x.shadowBlur = 0
        }
      }
    }

    const a = () => {
      if (!canvas || !x) return
      // Dark background fade for motion trails
      x.fillStyle = bgFadeColor
      x.fillRect(0, 0, canvas.width, canvas.height)
      d()
      t += 0.05
      animationFrameId = requestAnimationFrame(a)
    }

    window.addEventListener("resize", r)
    r()
    a()

    return () => {
      window.removeEventListener("resize", r)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={className ? className : "block"} style={style} />
}

export default NeonIsometricMaze
