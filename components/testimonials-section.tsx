"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "أحمد محمد",
    location: "عمان - الصويفية",
    rating: 5,
    text: "خدمة ممتازة وسريعة! تم إصلاح الغسالة في نفس اليوم مع ضمان على الخدمة. أنصح بهم بشدة.",
    service: "صيانة غسالة",
  },
  {
    name: "فاطمة أحمد",
    location: "عمان - خلدا",
    rating: 5,
    text: "فنيون محترفون ومتعاونون جداً. أصلحوا الثلاجة بسرعة وبسعر مناسب. شكراً لكم.",
    service: "صيانة ثلاجة",
  },
  {
    name: "محمود خالد",
    location: "عمان - الجبيهة",
    rating: 5,
    text: "أفضل مركز صيانة في عمان. التزام بالمواعيد وجودة عالية في العمل. سعيد جداً بالخدمة.",
    service: "صيانة مكيف",
  },
]

export default function TestimonialsSection() {
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
    <section id="testimonials" ref={sectionRef} className="py-24 bg-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-accent font-medium mb-4">آراء العملاء</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            ماذا يقول عملاؤنا عنا
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل خدمة ممكنة
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/80 leading-relaxed mb-6">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
