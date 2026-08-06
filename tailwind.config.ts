import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        border:      "hsl(var(--border))",
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        gold: {
          dark:  "#9a7a00",
          mid:   "#e0b840",
          light: "#ffd84a",
          pale:  "#ffe5a8",
        },
      },
      fontFamily: {
        sans:    ["var(--font-sans)",    "DM Sans",           "sans-serif"],
        serif:   ["var(--font-serif)",   "Cormorant Garamond","serif"],
        display: ["var(--font-display)", "Bebas Neue",        "sans-serif"],
      },
      animation: {
        "orbit-1":      "spin 20s linear infinite",
        "orbit-2":      "spin 30s linear infinite reverse",
        "orbit-3":      "spin 45s linear infinite",
        "pulse-glow":   "pulseGlow 4s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "marquee":      "marquee 40s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { transform: "translate(-50%,-50%) scale(1)",    opacity: "1"   },
          "50%":      { transform: "translate(-50%,-50%) scale(1.15)", opacity: "0.6" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%":      { opacity: "1"   },
        },
        marquee: {
          "0%":   { transform: "translateX(0)"    },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-gold":      "linear-gradient(135deg,#9a7a00 0%,#e0b840 45%,#ffd84a 70%,#e0b840 100%)",
        "gradient-gold-text": "linear-gradient(160deg,#aa8a00 0%,#e0b840 30%,#ffd84a 55%,#ffe5a8 70%,#e0b840 90%)",
        "gradient-gold-h":    "linear-gradient(90deg,#9a7a00,#e0b840,#ffd84a,#e0b840)",
      },
    },
  },
  plugins: [],
}

export default config
