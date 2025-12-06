"use client"

import { useEffect, useState } from "react"
import { ArrowDown, CheckCircle, Phone } from "lucide-react"
import SpiderWeb from "./spider-web"

const features = ["خدمة منزلية سريعة", "قطع غيار أصلية", "ضمان على الصيانة", "فنيون متخصصون"]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f8f8]">
      <div className="absolute inset-0">
        <SpiderWeb />
      </div>

      {/* Blueprint/schematic background overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="خلفية تقنية"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with animation */}
          <div
            className={`inline-flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-foreground/70 text-sm">مركز صيانة عمان المعتمد</span>
          </div>

          {/* Main Heading - Red text with shimmer effect */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-primary relative">
              أفضل شركة لصيانة
              <span className="absolute inset-0 animate-shimmer opacity-30"></span>
            </span>
            <span className="block text-primary">الغسالات والثلاجات و</span>
            <span className="block text-primary">الجلايات في عمان</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            نقدم خدمات صيانة وإصلاح احترافية بأعلى معايير الجودة وأسعار تنافسية
          </p>

          {/* Features with staggered animation */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-foreground/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="tel:0785580007"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25 animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              <span>للاتصال بنا</span>
            </a>
            <a
              href="https://wa.me/962785580007"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#25D366]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>واتساب</span>
            </a>
          </div>

          {/* Floating Washing Machine with animation */}
          <div
            className={`mt-12 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative inline-block animate-float">
              <img
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80"
                alt="صيانة الغسالات"
                className="w-64 h-64 md:w-80 md:h-80 object-cover mx-auto rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse animation-delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground transition-colors group"
        >
          <span className="text-sm">اكتشف المزيد</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary transition-colors" />
        </a>
      </div>
    </section>
  )
}
