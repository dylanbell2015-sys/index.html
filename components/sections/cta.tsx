"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"

export default function CTA() {
  return (
    <section className="relative bg-muted px-6 md:px-[60px] py-[160px] text-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"
        style={{ background: "radial-gradient(ellipse,rgba(201,160,48,.07) 0%,transparent 70%)" }}
      />

      <motion.div
        initial="hidden" whileInView="visible" viewport={viewportOnce}
        variants={stagger(0.15)}
        className="relative z-10"
      >
        {/* Vertical gold line */}
        <motion.div
          variants={fadeUp}
          className="w-px h-20 bg-gradient-to-b from-transparent via-gold-mid to-transparent mx-auto mb-14"
        />

        <motion.h2
          variants={fadeUp}
          className="font-display text-gradient-gold leading-none tracking-[.04em] mb-7"
          style={{ fontSize: "clamp(52px,9vw,120px)" }}
        >
          READY TO STOP<br />LOSING LEADS?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif text-[20px] font-light italic text-muted-foreground max-w-[460px] mx-auto mb-12 leading-[1.6]"
        >
          Book a 20-minute call. We'll show you exactly how it works — and what it would look like for your business.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button href="https://calendar.app.google/FsSkCc3mFtftnvyp6" variant="primary">
            Book Your Free Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
