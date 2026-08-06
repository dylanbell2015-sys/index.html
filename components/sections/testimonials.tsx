"use client"

import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/animations"

const testimonials = [
  {
    text:   "We were missing 30-40 calls a week. Since switching to VOG, we haven't missed one. Revenue is up 22% in the first quarter alone.",
    author: "MARCUS T.",
    role:   "Owner, Apex HVAC",
  },
  {
    text:   "The AI sounds <em>completely natural</em>. Customers don't even know. It books jobs faster than my best receptionist.",
    author: "JENNIFER L.",
    role:   "Operations Director, Pristine Plumbing",
  },
  {
    text:   "Calendar sync is seamless. Jobs just appear. No calls back and forth, no double bookings. The guys love it.",
    author: "DEREK M.",
    role:   "Dispatcher, GreenLine Electric",
  },
  {
    text:   "SMS follow-up alone recovered 11 leads last month that would have ghosted us. ROI in the first week.",
    author: "SARAH K.",
    role:   "Owner, Sunrise Restoration",
  },
  {
    text:   "I was skeptical about AI for phones. After 90 days I can't imagine running the business without it.",
    author: "RYAN H.",
    role:   "Co-founder, Summit Roofing",
  },
  {
    text:   "Call intelligence showed us our peak hour was 7–8 AM. We adjusted staffing and cut after-hours misses by 60%.",
    author: "AMANDA F.",
    role:   "GM, ClearWater Drain",
  },
]

// Double array for seamless loop
const doubled = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section className="relative bg-muted py-[100px] overflow-hidden">
      {/* Top/bottom gold lines */}
      <div className="absolute top-0 inset-x-0 h-px gold-divider" />
      <div className="absolute bottom-0 inset-x-0 h-px gold-divider" />

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce} transition={{ duration: 0.6 }}
        className="text-center font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid mb-14"
      >
        What Our Clients Say
      </motion.div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg,hsl(0 0% 6%),transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg,hsl(0 0% 6%),transparent)" }} />

        <div className="marquee-track flex gap-6 animate-marquee w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[380px] flex-shrink-0 border border-gold-mid/12 bg-[rgba(201,160,48,.02)] p-10 relative"
            >
              <span className="absolute -top-2 left-8 font-serif text-[80px] leading-none text-[rgba(201,160,48,.12)] select-none pointer-events-none">"</span>
              <p
                className="font-serif text-[17px] font-light italic text-foreground leading-[1.6] mb-7"
                dangerouslySetInnerHTML={{ __html: t.text.replace(/<em>(.*?)<\/em>/g, '<em class="text-gold-light not-italic font-normal">$1</em>') }}
              />
              <div className="font-sans text-[10px] tracking-[.2em] uppercase text-muted-foreground">
                {t.author} <span className="text-gold-mid mx-1">·</span> {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
