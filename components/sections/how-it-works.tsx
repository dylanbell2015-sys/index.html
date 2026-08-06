"use client"

import { motion } from "framer-motion"
import { PhoneCall, UserCheck, CalendarCheck } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"

const steps = [
  {
    num:   "01",
    icon:  PhoneCall,
    title: "CALL ANSWERED",
    body:  "Every inbound call is picked up instantly, 24/7 — no hold music, no voicemail, no lost leads.",
  },
  {
    num:   "02",
    icon:  UserCheck,
    title: "LEAD QUALIFIED",
    body:  "The AI gathers name, number, service type, and urgency while sounding completely natural.",
  },
  {
    num:   "03",
    icon:  CalendarCheck,
    title: "JOB BOOKED",
    body:  "Appointments drop straight into your calendar in real time. Zero double-bookings. Zero manual entry.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-muted px-6 md:px-[60px] py-[120px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          <motion.span variants={fadeUp} className="font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid block mb-5">
            The System
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-gradient-gold leading-none tracking-[.04em]"
            style={{ fontSize: "clamp(42px,6vw,80px)" }}>
            HOW IT WORKS
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif text-[20px] font-light leading-[1.7] text-muted-foreground max-w-[480px] mt-4">
            Three steps. Fully automated. You focus on the work — we handle the phones.
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid md:grid-cols-3 border border-gold-mid/10"
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.15)}
        >
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.num}
                variants={fadeUp}
                whileHover={{ y: -4, backgroundColor: "rgba(8,8,8,0.6)" }}
                transition={{ duration: 0.3 }}
                className={`relative group px-10 py-[52px] overflow-hidden cursor-none ${i < 2 ? "md:border-r border-gold-mid/10" : ""} border-b md:border-b-0 border-gold-mid/10`}
              >
                {/* Watermark number */}
                <span className="absolute top-5 right-6 font-display text-[80px] leading-none text-[rgba(201,160,48,.06)] pointer-events-none select-none">
                  {s.num}
                </span>

                {/* Radial hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(201,160,48,.06),transparent 70%)" }} />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 border border-gold-mid/30 flex items-center justify-center mb-7">
                  <Icon className="w-[22px] h-[22px] stroke-gold-mid" strokeWidth={1.5} />
                </div>

                <h3 className="relative z-10 font-display text-[26px] tracking-[.06em] text-gold-light mb-3">{s.title}</h3>
                <p className="relative z-10 font-sans text-sm text-muted-foreground leading-[1.7]">{s.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
