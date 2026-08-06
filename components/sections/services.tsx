"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneCall, MessageSquare, Calendar, BarChart3, ChevronDown } from "lucide-react"
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/animations"

const services = [
  {
    num:   "01",
    icon:  PhoneCall,
    title: "AI Receptionist",
    tag:   "AI VOICE AGENT",
    desc:  "A voice AI that answers calls, qualifies leads, books appointments, and handles FAQs — 24 hours a day, 7 days a week.",
    detail:"Your AI receptionist answers every inbound call in real time — no hold music, no voicemail, no missed opportunities. It speaks naturally, handles interruptions, captures caller info, and routes or books accordingly. It can handle multiple simultaneous calls, so a Monday morning rush never costs you a job.",
  },
  {
    num:   "02",
    icon:  MessageSquare,
    title: "SMS Follow-Up",
    tag:   "AUTOMATION",
    desc:  "Automated outbound SMS to leads who didn't book, missed call callbacks, and appointment reminders that reduce no-shows.",
    detail:"Every lead that doesn't book on the first call gets an automatic SMS follow-up — no manual effort required. Appointment reminders go out automatically to cut no-shows. Every message sounds human, not robotic. You set the rules once. The system runs forever.",
  },
  {
    num:   "03",
    icon:  Calendar,
    title: "Calendar Sync",
    tag:   "INTEGRATION",
    desc:  "Plugs directly into your scheduling system. Real-time availability checks. Zero double bookings. Zero manual entry.",
    detail:"When your AI books a job, it goes straight into your team's calendar in real time — no double entry. Your dispatcher, technicians, and office staff all see the same live schedule. New jobs appear with the customer's name, address, issue type, and any notes from the call.",
  },
  {
    num:   "04",
    icon:  BarChart3,
    title: "Call Intelligence",
    tag:   "ANALYTICS",
    desc:  "Every call logged, transcribed, and summarized. Know exactly what your customers are calling about and where leads drop.",
    detail:"Every call gets logged, transcribed, and summarized automatically. You can see what customers are calling about, how calls are handled, which services are trending, and where leads drop before booking. No more guessing — clear visibility into your call volume, peak hours, and missed revenue.",
  },
]

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const Icon = s.icon

  return (
    <motion.div
      variants={fadeUp}
      whileHover={!open ? { y: -6, borderColor: "rgba(201,160,48,.28)" } : {}}
      transition={{ duration: 0.3, ease }}
      className="relative group border border-gold-mid/10 bg-[rgba(201,160,48,.02)] overflow-hidden cursor-none"
      onClick={() => setOpen(!open)}
    >
      {/* Radial hover glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% -20%,rgba(201,160,48,.06),transparent 60%)" }} />

      <div className="relative z-10 px-10 py-11">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 border border-gold-mid/30 flex items-center justify-center">
                <Icon className="w-5 h-5 stroke-gold-mid" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-[11px] tracking-[.3em] text-gold-dark">{s.num} / {s.tag}</span>
            </div>
            <h3 className="font-display text-[32px] tracking-[.04em] text-gradient-gold mb-4">{s.title}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-[1.7] mb-6">{s.desc}</p>
            <div className="flex items-center gap-2 font-sans text-[10px] tracking-[.2em] uppercase text-gold-mid">
              <span>{open ? "Close" : "Learn More"}</span>
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-2 border-t border-gold-mid/15">
                <p className="font-serif text-[16px] leading-[1.7] text-muted-foreground">{s.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-background px-6 md:px-[60px] py-[120px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid block mb-5">
              What We Build
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-gradient-gold leading-none tracking-[.04em]"
              style={{ fontSize: "clamp(42px,6vw,80px)" }}>
              OUR SERVICES
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif text-[20px] font-light leading-[1.7] text-muted-foreground"
          >
            Every system is <strong className="text-foreground font-normal">custom-built</strong> for your business.
            No generic software. No templates. Built to your workflow and integrated with your existing tools.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {services.map((s, i) => <ServiceCard key={s.num} s={s} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}
