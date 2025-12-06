"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, Wrench, Sparkles, Shield } from "lucide-react"

const services = [
  {
    title: "صيانة الغسالات",
    description: "إصلاح جميع أنواع الغسالات الأوتوماتيكية والعادية مع ضمان على الخدمة وقطع الغيار الأصلية",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80",
    features: ["قطع غيار أصلية", "ضمان سنة"],
  },
  {
    title: "صيانة الثلاجات",
    description: "خدمة إصلاح وصيانة الثلاجات والفريزرات بجميع أنواعها وماركاتها مع فريق فني متخصص",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
    features: ["صيانة فورية", "أسعار منافسة"],
  },
  {
    title: "صيانة المكيفات",
    description: "تركيب وصيانة وتنظيف المكيفات السبليت والشباك مع خدمة تعبئة الغاز",
    image: "https://images.unsplash.com/photo-1631545308938-e8f51e8ff71a?w=600&q=80",
    features: ["تنظيف شامل", "تعبئة غاز"],
  },
  {
    title: "صيانة الجلايات",
    description: "إصلاح غسالات الصحون بجميع أنواعها مع توفير قطع الغيار الأصلية والمعتمدة",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80",
    features: ["جميع الماركات", "خدمة سريعة"],
  },
  {
    title: "صيانة النشافات",
    description: "خدمة صيانة وإصلاح نشافات الملابس الكهربائية والغازية بأعلى جودة",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0571?w=600&q=80",
    features: ["كهربائي وغاز", "فحص مجاني"],
  },
  {
    title: "صيانة أفران الغاز",
    description: "إصلاح وصيانة أفران الغاز والكهرباء مع فحص شامل لضمان السلامة",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    features: ["فحص السلامة", "صيانة دورية"],
  },
]

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">خدماتنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            نقدم حلولاً متكاملة لصيانة أجهزتك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فريقنا المتخصص جاهز لخدمتك في أي وقت مع ضمان الجودة وأفضل الأسعار
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                {/* Feature Tags */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <a
                  href="tel:0785580007"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group/link"
                >
                  <span>اطلب الخدمة</span>
                  <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="tel:0785580007"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Shield className="w-5 h-5" />
            <span>احجز موعد صيانة الآن</span>
          </a>
        </div>
      </div>
    </section>
  )
}
