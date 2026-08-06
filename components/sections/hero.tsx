"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ease, fadeUp, stagger, viewportOnce } from "@/lib/animations"

const items = [
  { delay: 0.20, cls: "hero-eyebrow" },
  { delay: 0.34, cls: "hero-outline" },
  { delay: 0.48, cls: "hero-title" },
  { delay: 0.62, cls: "hero-sub" },
  { delay: 0.76, cls: "hero-ctas" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-[60px] pt-[140px] pb-[80px] text-center">

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"
        style={{ background: "radial-gradient(ellipse at center,rgba(201,160,48,.08) 0%,transparent 70%)" }}
      />

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none">
        {[
          { size: 500, anim: "orbit-1" },
          { size: 700, anim: "orbit-2" },
          { size: 950, anim: "orbit-3" },
        ].map(({ size, anim }, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-${anim}`}
            style={{
              width: size, height: size,
              top: -size / 2, left: -size / 2,
              border: i === 1
                ? "1px dashed rgba(201,160,48,.05)"
                : `1px solid rgba(201,160,48,${i === 0 ? ".08" : ".03"})`,
            }}
          >
            {i === 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-mid shadow-[0_0_8px_#e0b840]" />
            )}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,160,48,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(201,160,48,.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center,black 30%,transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="flex items-center gap-4 font-sans text-[10px] tracking-[0.4em] uppercase text-gold-mid mb-7"
        >
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold-mid" />
          Vivid Outreach Group • AI Automation
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold-mid" />
        </motion.div>

        {/* Headline — outline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.9, ease }}
          className="font-display text-outline-gold leading-none tracking-[.04em] mb-3"
          style={{ fontSize: "clamp(72px,11vw,160px)" }}
        >
          YOUR PHONES
        </motion.h1>

        {/* Headline — gold fill */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.9, ease }}
          className="font-display text-gradient-gold leading-none tracking-[.04em] mb-8"
          style={{ fontSize: "clamp(72px,11vw,160px)" }}
        >
          ANSWERED.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 1.0, ease }}
          className="font-serif text-[clamp(18px,2vw,26px)] font-light italic text-muted-foreground max-w-[520px] leading-[1.6] mb-12"
        >
          An AI receptionist that never sleeps, never misses a call, and{" "}
          <span className="text-gold-light not-italic font-normal">books jobs while you work</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.76, duration: 1.0, ease }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button href="https://calendar.app.google/FsSkCc3mFtftnvyp6" variant="primary">
            Book Your Free Demo
          </Button>
          <Button href="#how-it-works" variant="secondary">
            See How It Works
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1.0, ease }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-mid to-transparent animate-scroll-pulse" />
      </motion.div>
    </section>
  )
}
