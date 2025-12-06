"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Wrench, Snowflake, Wind, UtensilsCrossed, Flame, Shirt } from "lucide-react"

const services = [
  {
    title: "صيانة الثلاجات",
    description: "عدم التبريد، الأصوات العالية، تسرب المياه - نصلحها في مكانها",
    image: "/modern-white-refrigerator-appliance.jpg",
    icon: Snowflake,
  },
  {
    title: "صيانة الغسالات",
    description: "عدم الدوران، تسرب المياه، الضوضاء - تدخل سريع لجميع الأعطال",
    image: "/modern-white-front-load-washing-machine-appliance.jpg",
    icon: Shirt,
  },
  {
    title: "صيانة الجلايات",
    description: "عدم الغسيل، تسرب، روائح كريهة - إصلاح جميع الماركات",
    image: "/modern-stainless-steel-dishwasher-appliance.jpg",
    icon: UtensilsCrossed,
  },
  {
    title: "صيانة المكيفات",
    description: "عدم التبريد، التقطير، الروائح - صيانة وتنظيف شامل",
    image: "/modern-white-split-air-conditioner-unit.jpg",
    icon: Wind,
  },
  {
    title: "صيانة النشافات",
    description: "عدم التجفيف، الحرارة الزائدة - إصلاح كهربائي وغاز",
    image: "/modern-white-clothes-dryer-appliance.jpg",
    icon: Flame,
  },
  {
    title: "صيانة أفران الغاز",
    description: "مشاكل الإشعال، التسخين، السلامة - فحص وإصلاح شامل",
    image: "/modern-stainless-steel-gas-oven-stove-appliance.jpg",
    icon: Flame,
  },
]

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          },
          { threshold: 0.2 },
        )
        observer.observe(card)
        observers.push(observer)
      }
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-white font-medium">خدماتنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">خدمات صيانة الأجهزة المنزلية</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            ثلاجات، غسالات، جلايات، مكيفات، نشافات وأفران - خدمة من نقطة واحدة
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFromRight = index % 2 === 1

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`
                  relative rounded-2xl 
                  overflow-hidden transition-all duration-1000 ease-out
                  hover:shadow-lg hover:shadow-primary/10
                  bg-black
                  ${
                    visibleCards[index]
                      ? "opacity-100 translate-x-0"
                      : isFromRight
                        ? "opacity-0 translate-x-16"
                        : "opacity-0 -translate-x-16"
                  }
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-3 md:p-5 flex flex-col items-center text-center">
                  {/* Appliance Image */}
                  <div className="w-full h-24 md:h-40 mb-3 md:mb-4 flex items-center justify-center">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* Icon */}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-3 bg-primary/20">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="hidden md:block text-sm leading-relaxed text-white/70">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 max-w-lg mx-auto">
          <a
            href="tel:0781990001"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>اتصل الآن</span>
          </a>
          <a
            href="https://wa.me/962781990001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full font-medium hover:bg-white/90 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>طلب خدمة</span>
          </a>
        </div>
      </div>
    </section>
  )
}
