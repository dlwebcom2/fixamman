import Header from "@/components/header"
import Hero from "@/components/hero"
import StatsSection from "@/components/stats-section"
import AppliancesSlider from "@/components/appliances-slider"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import BrandsMarquee from "@/components/brands-marquee"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import Preloader from "@/components/preloader"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen overflow-x-hidden">
        <Header />
        <Hero />
        <StatsSection />
        <AppliancesSlider />
        <AboutSection />
        <ServicesSection />
        <BrandsMarquee />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
