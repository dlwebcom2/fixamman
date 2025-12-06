"use client"

import { useEffect, useRef } from "react"
import { Phone, MessageCircle, Settings, Snowflake, Wind, Flame, Shirt, UtensilsCrossed } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

const sparePartsCategories = [
  {
    id: 1,
    title: "قطع غيار الغسالات",
    description: "موتورات، طرمبات، سيور، كراسي، تايمر، بورد إلكتروني، درام، سخان، صمامات المياه",
    icon: Shirt,
    image: "/washing-machine-spare-parts-motors-pumps-repair.jpg",
    parts: [
      "موتور الغسالة",
      "طرمبة الصرف",
      "سير الغسالة",
      "كرسي الموتور",
      "التايمر",
      "البورد الإلكتروني",
      "الدرام",
      "السخان",
      "صمام المياه",
    ],
  },
  {
    id: 2,
    title: "قطع غيار الثلاجات",
    description: "ضواغط، ثرموستات، مراوح، مقابض، أرفف، كوشوك الباب، تايمر الديفروست",
    icon: Snowflake,
    image: "/refrigerator-spare-parts-compressor-thermostat-rep.jpg",
    parts: [
      "ضاغط الثلاجة",
      "ثرموستات",
      "مروحة التبريد",
      "مقبض الباب",
      "أرفف الثلاجة",
      "كوشوك الباب",
      "تايمر الديفروست",
      "هيتر الديفروست",
    ],
  },
  {
    id: 3,
    title: "قطع غيار الجلايات",
    description: "مضخات، سخانات، رشاشات، فلاتر، سلال، مفصلات الباب، لوحة التحكم",
    icon: UtensilsCrossed,
    image: "/dishwasher-spare-parts-pump-heater-spray-arm.jpg",
    parts: [
      "مضخة الجلاية",
      "سخان الجلاية",
      "الرشاش العلوي",
      "الرشاش السفلي",
      "الفلتر",
      "السلة العلوية",
      "السلة السفلية",
      "مفصلات الباب",
    ],
  },
  {
    id: 4,
    title: "قطع غيار المكيفات",
    description: "ضواغط، مراوح، ريموتات، فلاتر، كارتات، ثرموستات، موتور السوينج",
    icon: Wind,
    image: "/air-conditioner-spare-parts-compressor-fan-remote.jpg",
    parts: [
      "ضاغط المكيف",
      "مروحة المكيف",
      "ريموت كنترول",
      "فلتر الهواء",
      "كارت المكيف",
      "ثرموستات",
      "موتور السوينج",
      "صمام التمدد",
    ],
  },
  {
    id: 5,
    title: "قطع غيار النشافات",
    description: "سخانات، موتورات، سيور، بكرات، ثرموستات، مراوح، فلاتر",
    icon: Settings,
    image: "/dryer-spare-parts-heating-element-motor-belt.jpg",
    parts: [
      "سخان النشافة",
      "موتور النشافة",
      "سير النشافة",
      "بكرات التوجيه",
      "ثرموستات الحرارة",
      "مروحة التجفيف",
      "فلتر النسالة",
    ],
  },
  {
    id: 6,
    title: "قطع غيار أفران الغاز",
    description: "شعلات، ثرموكبل، صمامات أمان، مفاتيح، زجاج الفرن، مقابض",
    icon: Flame,
    image: "/gas-oven-spare-parts-burner-thermocouple-valve.jpg",
    parts: [
      "شعلات الفرن",
      "ثرموكبل",
      "صمام الأمان",
      "مفتاح الشعلة",
      "زجاج الفرن",
      "مقابض الفرن",
      "سخان الفرن",
      "مروحة الفرن",
    ],
  },
]

export default function SparePartsPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                قطع غيار الأجهزة المنزلية
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                نوفر جميع قطع الغيار الأصلية والبديلة لجميع أنواع الأجهزة المنزلية في عمان والأردن
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:0781990001"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  اتصل للاستفسار
                </a>
                <a
                  href="https://wa.me/962781990001"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#25D366]/90 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {sparePartsCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.id}
                    ref={(el) => {
                      sectionRefs.current[index] = el
                    }}
                    className={`
                      opacity-0 translate-x-0
                      ${index % 2 === 0 ? "translate-x-[-50px]" : "translate-x-[50px]"}
                      transition-all duration-700 ease-out
                      [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-card rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden h-full group hover:shadow-lg hover:shadow-primary/10">
                      {/* Image */}
                      <div className="relative h-32 md:h-40 overflow-hidden">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 right-2 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-4">
                        <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 text-right">
                          {category.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mb-3 text-right line-clamp-2">
                          {category.description}
                        </p>

                        {/* Parts List - Hidden on mobile */}
                        <div className="hidden md:block">
                          <div className="flex flex-wrap gap-1 mb-3">
                            {category.parts.slice(0, 4).map((part, partIndex) => (
                              <span
                                key={partIndex}
                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                              >
                                {part}
                              </span>
                            ))}
                            {category.parts.length > 4 && (
                              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                                +{category.parts.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href="https://wa.me/962781990001"
                          className="flex items-center justify-center gap-2 w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground py-2 rounded-lg text-xs md:text-sm font-medium transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          اطلب الآن
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-6 md:p-10 text-center text-white">
              <h2 className="text-xl md:text-3xl font-bold mb-4">لم تجد قطعة الغيار المطلوبة؟</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                تواصل معنا الآن وسنوفر لك أي قطعة غيار تحتاجها لجميع أنواع الأجهزة المنزلية
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:0781990001"
                  className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  0781990001
                </a>
                <a
                  href="https://wa.me/962781990001"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#25D366]/90 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  راسلنا واتساب
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
