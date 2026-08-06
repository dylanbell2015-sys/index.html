import Cursor        from "@/components/ui/cursor"
import Navbar        from "@/components/sections/navbar"
import Hero          from "@/components/sections/hero"
import Stats         from "@/components/sections/stats"
import Problem       from "@/components/sections/problem"
import HowItWorks    from "@/components/sections/how-it-works"
import Services      from "@/components/sections/services"
import Testimonials  from "@/components/sections/testimonials"
import ROI           from "@/components/sections/roi"
import Pricing       from "@/components/sections/pricing"
import FAQ           from "@/components/sections/faq"
import CTA           from "@/components/sections/cta"
import Footer        from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Services />
        <Testimonials />
        <ROI />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
