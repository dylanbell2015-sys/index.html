import type { Variants } from "framer-motion"

export const ease = [0.25, 0.1, 0.25, 1] as const

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const stagger = (delay = 0.12): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
})

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

export const viewportOnce = { once: true, margin: "-80px" } as const
