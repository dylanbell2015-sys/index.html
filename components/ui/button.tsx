"use client"

import { motion } from "framer-motion"
import { ease } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof motion.a> {
  variant?: "primary" | "secondary"
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export function Button({ variant = "primary", href, onClick, children, className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase cursor-none transition-shadow duration-300 no-underline"

  const variants = {
    primary:
      "px-11 py-4 bg-gradient-gold text-[#080808] shadow-[0_0_30px_rgba(201,160,48,0.2)] hover:shadow-[0_8px_40px_rgba(201,160,48,0.35)]",
    secondary:
      "px-11 py-4 border border-gold-mid/30 text-gold-light hover:border-gold-mid hover:bg-[rgba(201,160,48,0.05)]",
  }

  const El = href ? "a" : "button"

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22, ease }}
      {...(props as any)}
    >
      {children}
    </motion.a>
  )
}
