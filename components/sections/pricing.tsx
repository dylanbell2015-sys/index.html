"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeUp, scaleIn, stagger, viewportOnce, ease } from "@/lib/animations"

const plans = [
  {
    name:     "Starter",
    monthly:  297,
    annual:   247,
    desc:     "Everything you need to stop missing calls.",
    features: [
      "AI Receptionist (24/7)",
      "Up to 500 minutes/month",
      "Calendar sync (1 system)",
      "Basic SMS follow-up",
      "Call transcripts",
      "Email support",
    ],
    cta:      "Get Started",
    popular:  false,
  },
  {
    name:     "Growth",
    monthly:  597,
    annual:   497,
    desc:     "Full automation for serious service businesses.",
    features: [
      "AI Receptionist (24/7)",
      "Unlimited minutes",
      "Calendar sync (multi-system)",
      "Advanced SMS campaigns",
      "Call intelligence dashboard",
      "Priority support",
      "Custom AI voice & script",
    ],
    cta:      "Book a Demo",
    popular:  true,
  },
  {
    name:     "Enterprise",
    monthly:  null,
    annual:   null,
    desc:     "Custom builds for multi-location operations.",
    features: [
      "Everything in Growth",
      "Multi-location routing",
      "CRM & ERP integrations",
      "Dedicated success manager",
      "99.9% uptime SLA",
      "Custom reporting",
    ],
    cta:      "Contact Us",
    popular:  false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative bg-muted px-6 md:px-[60px] py-[120px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={stagger(0.12)}>
          <motion.span variants={fadeUp} className="font-sans text-[9px] tracking-[.4em] uppercase text-gold-mid block mb-5">
            Simple Pricing
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-gradient-gold leading-none tracking-[.04em] mb-10"
            style={{ fontSize: "clamp(42px,6vw,80px)" }}>
            NO SURPRISES
          </motion.h2>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-4 border border-gold-mid/15 px-5 py-3">
            <span className={`font-sans text-[11px] tracking-[.15em] uppercase transition-colors ${!annual ? "text-gold-light" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-11 h-6 bg-[rgba(201,160,48,.1)] border border-gold-mid/20 cursor-none"
              aria-label="Toggle annual billing"
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-gradient-gold"
                animate={{ left: annual ? "calc(100% - 20px)" : "4px" }}
                transition={{ duration: 0.25, ease }}
              />
            </button>
            <span className={`font-sans text-[11px] tracking-[.15em] uppercase transition-colors ${annual ? "text-gold-light" : "text-muted-foreground"}`}>
              Annual <span className="text-gold-mid ml-1">−17%</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={scaleIn}
              whileHover={{ y: -8, borderColor: p.popular ? "rgba(201,160,48,.5)" : "rgba(201,160,48,.2)" }}
              transition={{ duration: 0.3, ease }}
              className={`relative flex flex-col border overflow-hidden cursor-none
                ${p.popular
                  ? "border-gold-mid/40 bg-[rgba(201,160,48,.04)]"
                  : "border-gold-mid/10 bg-[rgba(201,160,48,.01)]"
                }`}
            >
              {p.popular && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-gold" />
              )}
              {p.popular && (
                <div className="absolute top-4 right-4 font-sans text-[9px] tracking-[.2em] uppercase text-[#080808] bg-gradient-gold px-3 py-1">
                  Most Popular
                </div>
              )}

              <div className="px-8 pt-10 pb-8 flex-1">
                <p className="font-sans text-[10px] tracking-[.25em] uppercase text-muted-foreground mb-3">{p.name}</p>
                <div className="mb-4">
                  {p.monthly ? (
                    <div className="flex items-end gap-2">
                      <span className="font-display text-[56px] leading-none text-gradient-gold">
                        ${annual ? p.annual : p.monthly}
                      </span>
                      <span className="font-sans text-[11px] tracking-[.1em] uppercase text-muted-foreground mb-3">/mo</span>
                    </div>
                  ) : (
                    <div className="font-display text-[40px] leading-none text-gradient-gold pt-2">Custom</div>
                  )}
                </div>
                <p className="font-serif text-[15px] font-light italic text-muted-foreground mb-8">{p.desc}</p>

                <ul className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-sans text-[13px] text-muted-foreground">
                      <Check className="w-3.5 h-3.5 stroke-gold-mid flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 pb-8">
                <Button
                  href="https://calendar.app.google/FsSkCc3mFtftnvyp6"
                  variant={p.popular ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  {p.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
