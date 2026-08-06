"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from "@/lib/animations"

const cards = [
  {
    title: "Missed Calls After Hours",
    body:  "62% of service calls come outside business hours. Every ring with no answer is a booked appointment for your competitor.",
  },
  {
    title: "Staff Overwhelmed on Peak Days",
    body:  "When your team is slammed, calls go to voicemail. Customers don't leave messages — they just call the next number on Google.",
  },
  {
    title: "No Follow-Up System",
    body:  "Leads that don't book on the first call disappear forever without an automated callback or SMS follow-up in place.",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-background px-6 md:px-[60px] py-[120px]">
      <div className="grid md:grid-cols-2 gap-20 items-center max-w-[1200px] mx-auto">

        {/* Left */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          <motion.span variants={fadeUp} className="font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid block mb-5">
            The Problem
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-gradient-gold leading-none tracking-[.04em] mb-5"
            style={{ fontSize: "clamp(42px,6vw,80px)" }}>
            EVERY MISSED CALL IS A LOST JOB
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif text-[20px] font-light leading-[1.7] text-muted-foreground max-w-[480px]">
            Your technicians are on the job. Your office is juggling calls.{" "}
            <strong className="text-foreground font-normal">Leads are calling competitors</strong>{" "}
            because no one picked up. That's revenue walking out the door — every single day.
          </motion.p>
        </motion.div>

        {/* Right — cards */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.15)}
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeRight}
              whileHover={{ x: 6, borderColor: "rgba(201,160,48,.28)" }}
              transition={{ duration: 0.3 }}
              className="relative group px-8 py-7 border border-gold-mid/10 bg-[rgba(201,160,48,.02)] overflow-hidden cursor-none"
            >
              {/* accent line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-gold origin-bottom"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <h3 className="font-sans text-[13px] tracking-[.1em] uppercase text-gold-light mb-2">{c.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-[1.6]">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
