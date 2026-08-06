"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ease } from "@/lib/animations"

const links = [
  { label: "Problem",  href: "#problem"      },
  { label: "Services", href: "#services"      },
  { label: "Results",  href: "#roi"           },
  { label: "Pricing",  href: "#pricing"       },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-[60px] h-[72px] transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.97)] backdrop-blur-md border-b border-gold-mid/10"
          : "bg-gradient-to-b from-[rgba(8,8,8,0.95)] to-transparent backdrop-blur-[2px]"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 no-underline cursor-none">
        <span className="font-display text-2xl tracking-[0.12em] text-gradient-gold">VOG</span>
        <span className="hidden sm:block h-4 w-px bg-gold-mid/30" />
        <span className="hidden sm:block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Vivid Outreach Group
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <motion.a
            key={l.label}
            href={l.href}
            className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted-foreground no-underline transition-colors hover:text-gold-light cursor-none"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease }}
          >
            {l.label}
          </motion.a>
        ))}
        <Button href="https://calendar.app.google/FsSkCc3mFtftnvyp6" variant="primary">
          Book Demo
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-muted-foreground p-1 cursor-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
            className="absolute top-[72px] inset-x-0 bg-[rgba(8,8,8,0.98)] backdrop-blur-md border-b border-gold-mid/10 flex flex-col gap-0 overflow-hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3, ease }}
                className="px-6 py-4 font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground border-b border-gold-mid/5 no-underline hover:text-gold-light transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </motion.a>
            ))}
            <div className="px-6 py-5">
              <Button href="https://calendar.app.google/FsSkCc3mFtftnvyp6" className="w-full justify-center">
                Book Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
