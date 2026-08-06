"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/animations"

const faqs = [
  {
    q: "How quickly can you get us set up?",
    a: "Most clients go live within 5–7 business days. We handle the build, training, and integration — you review and approve. There's nothing technical for you to install or configure.",
  },
  {
    q: "Does the AI sound robotic?",
    a: "No. We use advanced conversational AI that speaks naturally, handles interruptions, and can even express empathy. The majority of callers don't realize they're speaking to an AI — unless you want to disclose it.",
  },
  {
    q: "What happens if the AI doesn't know the answer?",
    a: "You define the rules. The AI can warm-transfer to a live team member, take a message, or promise a callback — depending on what you prefer. Escalation paths are fully customizable.",
  },
  {
    q: "Which calendar and CRM systems do you support?",
    a: "We integrate with Google Calendar, Outlook, ServiceTitan, Jobber, Housecall Pro, and most major field-service platforms. If your system has an API, we can connect it.",
  },
  {
    q: "Is there a long-term contract?",
    a: "Starter and Growth plans are month-to-month. Annual plans get a 17% discount. Enterprise agreements are custom. No hidden fees, no cancellation penalties on standard plans.",
  },
  {
    q: "What industries is this best for?",
    a: "Any home or commercial service business that depends on inbound phone calls: HVAC, plumbing, electrical, roofing, restoration, pest control, lawn care, cleaning, and more.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative bg-background px-6 md:px-[60px] py-[120px]">
      <div className="max-w-[840px] mx-auto">

        {/* Header */}
        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger(0.12)}>
          <motion.span variants={fadeUp} className="font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid block mb-5">
            Common Questions
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-gradient-gold leading-none tracking-[.04em]"
            style={{ fontSize: "clamp(42px,6vw,80px)" }}>
            FAQ
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger(0.08)}>
          {faqs.map((f, i) => (
            <motion.div key={i} variants={fadeUp} className="border-t border-gold-mid/10 last:border-b last:border-gold-mid/10">
              <button
                className="w-full flex items-start justify-between gap-4 py-6 text-left cursor-none group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-sans text-[15px] font-medium transition-colors ${open === i ? "text-gold-light" : "text-foreground group-hover:text-gold-light"}`}>
                  {f.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="flex-shrink-0 mt-0.5"
                >
                  <Plus className={`w-4 h-4 transition-colors ${open === i ? "stroke-gold-mid" : "stroke-muted-foreground group-hover:stroke-gold-mid"}`} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease }}
                    className="overflow-hidden"
                  >
                    <p className="font-serif text-[17px] font-light leading-[1.7] text-muted-foreground pb-7 pr-10">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
