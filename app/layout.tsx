import type { Metadata } from "next"
import { DM_Sans, Cormorant_Garamond, Bebas_Neue } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
})
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vivid Outreach Group — AI Automation",
  description:
    "Your phones answered 24/7 by an AI that qualifies leads, books appointments, and follows up automatically.",
  openGraph: {
    title: "Vivid Outreach Group — AI Automation",
    description: "Stop losing leads. Start booking more jobs.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  )
}
