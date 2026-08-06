"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from "@/lib/animations"

const bars = [
  { label: "Call Answer Rate",       pct: 98, value: "98%"  },
  { label: "Lead Conversion Lift",   pct: 73, value: "+73%" },
  { label: "No-Show Reduction",      pct: 61, value: "−61%" },
  { label: "Revenue Growth (90-day)",pct: 84, value: "+84%" },
]

export default function ROI() {
  return (
    <section id="roi" className="relative bg-background px-6 md:px-[60px] py-[120px]">
      <div className="grid md:grid-cols-2 gap-[100px] items-center max-w-[1200px] mx-auto">

        {/* Left copy */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger(0.12)}>
          <motion.span variants={fadeUp} className="font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid block mb-5">
            By The Numbers
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-gradient-gold leading-none tracking-[.04em] mb-5"
            style={{ fontSize: "clamp(42px,6vw,80px)" }}>
            THE RESULTS SPEAK
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif text-[20px] font-light leading-[1.7] text-muted-foreground">
            Our clients see measurable results within{" "}
            <strong className="text-foreground font-normal">30 days</strong>. Not projections — real numbers from real
            businesses.
          </motion.p>
        </motion.div>

        {/* Right bars */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.18)}
        >
          {bars.map((b) => (
            <motion.div key={b.label} variants={fadeRight}>
              <label className="flex justify-between font-sans text-[11px] tracking-[.15em] uppercase text-muted-foreground mb-2.5">
                <span>{b.label}</span>
                <span className="text-gold-light">{b.value}</span>
              </label>
              <div className="relative h-[2px] bg-gold-mid/10 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.pct}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
