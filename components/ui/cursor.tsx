"use client"

import { useEffect, useRef } from "react"

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top  = e.clientY + "px"
      }
    }
    window.addEventListener("mousemove", onMove)

    let raf: number
    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + "px"
        ringRef.current.style.top  = p.ry + "px"
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
