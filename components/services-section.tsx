"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Wrench, Snowflake, Wind, UtensilsCrossed, Flame, Shirt } from "lucide-react"

const services = [
  {
    title: "صيانة الثلاجات",
    description: "عدم التبريد، الأصوات العالية، تسرب المياه - نصلحها في مكانها",
    icon: Snowflake,
    image: "/white-refrigerator-appliance-on-dark-background.jpg",
  },
  {
    title: "صيانة الغسالات",
    description: "عدم الدوران، تسرب المياه، الضوضاء - تدخل سريع لجميع الأعطال",
    icon: Shirt,
    image: "/white-front-load-washing-machine-on-dark-backgroun.jpg",
  },
  {
    title: "صيانة الجلايات",
    description: "عدم الغسيل، تسرب، روائح كريهة - إصلاح جميع الماركات",
    icon: UtensilsCrossed,
    image: "/stainless-steel-dishwasher-appliance-on-dark-backg.jpg",
  },
  {
    title: "صيانة المكيفات",
    description: "عدم التبريد، التقطير، الروائح - صيانة وتنظيف شامل",
    icon: Wind,
    image: "/white-split-air-conditioner-unit-on-dark-backgroun.jpg",
  },
  {
    title: "صيانة النشافات",
    description: "عدم التجفيف، الحرارة الزائدة - إصلاح كهربائي وغاز",
    icon: Flame,
    image: "/white-clothes-dryer-machine-on-dark-background.jpg",
  },
  {
    title: "صيانة أفران الغاز",
    description: "مشاكل الإشعال، التسخين، السلامة - فحص وإصلاح شامل",
    icon: Flame,
    image: "/stainless-steel-gas-oven-stove-on-dark-background.jpg",
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
    <section id="services" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">خدماتنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">خدمات صيانة الأجهزة المنزلية</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ثلاجات، غسالات، جلايات، مكيفات، نشافات وأفران - خدمة من نقطة واحدة
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
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
                  relative bg-neutral-900 rounded-2xl
                  overflow-hidden transition-all duration-700 ease-out
                  hover:bg-neutral-800 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1
                  group
                  ${
                    visibleCards[index]
                      ? "opacity-100 translate-x-0"
                      : isFromRight
                        ? "opacity-0 translate-x-16"
                        : "opacity-0 -translate-x-16"
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-4 md:p-6 flex flex-col items-center text-center">
                  <div className="w-full h-28 md:h-44 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-xl font-bold text-white mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="hidden md:block text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 max-w-lg mx-auto">
          <a
            href="tel:0781990001"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            <span>اتصل الآن</span>
          </a>
          <a
            href="https://wa.me/962781990001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:-translate-y-0.5"
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
