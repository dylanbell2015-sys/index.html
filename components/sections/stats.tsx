"use client"

import { motion } from "framer-motion"
import { stagger, fadeUp, viewportOnce } from "@/lib/animations"

const stats = [
  { num: "98%",  label: "Call Answer Rate"  },
  { num: "24/7", label: "Always On"          },
  { num: "3×",   label: "More Bookings"      },
  { num: "60s",  label: "Avg. Handle Time"   },
]

export default function Stats() {
  return (
    <section className="relative z-10 border-t border-gold-mid/10 border-b border-gold-mid/10 bg-[rgba(201,160,48,.02)]">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 px-6 md:px-[60px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1)}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className={`py-10 text-center ${i < 3 ? "md:border-r border-gold-mid/10" : ""} ${i === 0 ? "border-r border-gold-mid/10 md:border-r-0 md:border-r border-gold-mid/10" : ""}`}
          >
            <div className="font-display text-[52px] tracking-[.04em] text-gradient-gold leading-none">
              {s.num}
            </div>
            <div className="font-sans text-[10px] tracking-[.25em] uppercase text-muted-foreground mt-1.5">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
