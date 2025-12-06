import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import SparePartsHero from "@/components/spare-parts/spare-parts-hero"
import SparePartsCategories from "@/components/spare-parts/spare-parts-categories"
import SparePartsGrid from "@/components/spare-parts/spare-parts-grid"
import SparePartsCTA from "@/components/spare-parts/spare-parts-cta"

export const metadata = {
  title: "قطع غيار الأجهزة الكهربائية | Fix JO",
  description: "قطع غيار أصلية لجميع الأجهزة الكهربائية في الأردن - ثلاجات، غسالات، مكيفات، جلايات، أفران غاز ونشافات",
}

export default function SparePartsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <SparePartsHero />
      <SparePartsCategories />
      <SparePartsGrid />
      <SparePartsCTA />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
