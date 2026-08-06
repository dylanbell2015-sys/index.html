const footerLinks = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms of Service",  href: "#" },
  { label: "Contact",           href: "mailto:hello@vividoutreachgroup.com" },
]

export default function Footer() {
  return (
    <footer className="border-t border-gold-mid/10 px-6 md:px-[60px] py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="font-display text-xl tracking-[.12em] text-gradient-gold">VOG</span>
        <span className="h-4 w-px bg-gold-mid/30" />
        <span className="font-sans text-[10px] tracking-[.2em] uppercase text-muted-foreground">
          Vivid Outreach Group
        </span>
      </div>

      {/* Copy */}
      <p className="font-sans text-[11px] tracking-[.1em] text-muted-foreground order-last md:order-none">
        © {new Date().getFullYear()} Vivid Outreach Group LLC. All rights reserved.
      </p>

      {/* Links */}
      <div className="flex gap-8">
        {footerLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-sans text-[10px] tracking-[.2em] uppercase text-muted-foreground no-underline hover:text-gold-light transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
