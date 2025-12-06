"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const appliances = [
  {
    id: 1,
    name: "غسالة سامسونج",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80",
    type: "غسالة أوتوماتيكية",
  },
  {
    id: 2,
    name: "غسالة LG",
    brand: "LG",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0571?w=500&q=80",
    type: "غسالة فول أوتوماتيك",
  },
  {
    id: 3,
    name: "ثلاجة بوش",
    brand: "Bosch",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&q=80",
    type: "ثلاجة",
  },
  {
    id: 4,
    name: "غسالة ويرلبول",
    brand: "Whirlpool",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500&q=80",
    type: "غسالة",
  },
  {
    id: 5,
    name: "مكيف سبليت",
    brand: "Carrier",
    image: "https://images.unsplash.com/photo-1631545308938-e8f51e8ff71a?w=500&q=80",
    type: "مكيف هواء",
  },
  {
    id: 6,
    name: "جلاية صحون",
    brand: "Beko",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500&q=80",
    type: "جلاية",
  },
  {
    id: 7,
    name: "نشافة ملابس",
    brand: "Electrolux",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    type: "نشافة",
  },
  {
    id: 8,
    name: "فرن غاز",
    brand: "Ariston",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
    type: "فرن",
  },
]

export default function AppliancesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % appliances.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + appliances.length) % appliances.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleSlides = () => {
    const slides = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + appliances.length) % appliances.length
      slides.push({ ...appliances[index], position: i })
    }
    return slides
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium mb-3">الأجهزة التي نصلحها</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">جميع أنواع الأجهزة الكهربائية</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">نحن متخصصون في صيانة وإصلاح جميع الماركات العالمية</p>
        </div>

        {/* Slider */}
        <div
          className="relative h-[400px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slides */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {getVisibleSlides().map((slide, idx) => {
              const isCenter = slide.position === 0
              const isAdjacent = Math.abs(slide.position) === 1
              const isOuter = Math.abs(slide.position) === 2

              const translateX = slide.position * 220
              const scale = isCenter ? 1.1 : isAdjacent ? 0.85 : 0.65
              const zIndex = isCenter ? 30 : isAdjacent ? 20 : 10
              const opacity = isCenter ? 1 : isAdjacent ? 0.7 : 0.4

              return (
                <div
                  key={`${slide.id}-${idx}`}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => {
                    if (slide.position > 0) nextSlide()
                    else if (slide.position < 0) prevSlide()
                  }}
                >
                  <div
                    className={`
                    bg-card rounded-2xl overflow-hidden shadow-2xl
                    ${isCenter ? "ring-4 ring-primary/30" : ""}
                    transition-all duration-500
                  `}
                  >
                    <div className="relative w-64 h-64 overflow-hidden">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Brand Tag */}
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {slide.brand}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 text-center bg-card">
                      <h3 className="font-bold text-foreground mb-1">{slide.name}</h3>
                      <p className="text-sm text-muted-foreground">{slide.type}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute right-4 md:right-8 z-40 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg hover:scale-110"
            aria-label="السابق"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 md:left-8 z-40 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg hover:scale-110"
            aria-label="التالي"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {appliances.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
