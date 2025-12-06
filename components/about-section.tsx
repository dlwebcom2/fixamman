"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Sparkles, Shield, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "الجودة",
    description: "نستخدم قطع غيار أصلية ومعتمدة لضمان أفضل أداء",
  },
  {
    icon: Users,
    title: "الاحترافية",
    description: "فريق فني متخصص ومدرب على أحدث التقنيات",
  },
  {
    icon: Zap,
    title: "السرعة",
    description: "خدمة منزلية سريعة في الوقت المناسب لك",
  },
]

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-accent font-medium mb-4">من نحن</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">مركز صيانة عمان المعتمد</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            نحن من أبرز المراكز المتخصصة في تقديم خدمات الصيانة والإصلاح في عمّان والأردن منذ أكثر من 15 عاماً
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="فني صيانة محترف"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-2xl">+15</p>
                  <p className="text-sm text-muted-foreground">سنة من الخبرة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              يُعتبر مركز صيانة عمان المعتمد من أبرز المراكز المتخصصة في تقديم خدمات الصيانة والإصلاح المنزلية والتجارية
              في عمّان والأردن. تأسس المركز بهدف توفير حلول متكاملة وعالية الجودة للأجهزة الكهربائية والإلكترونية.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              نحن نؤمن بأهمية الجودة والاحترافية، لذلك نحرص على تقديم خدمات فنية متخصصة تلبي أعلى معايير الأداء
              والسلامة، مع ضمان راحة العملاء ورضاهم التام.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className={`bg-foreground text-primary-foreground p-8 md:p-12 rounded-3xl transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              أن نكون الخيار الأول والأكثر ثقة في مجال صيانة الأجهزة المنزلية والتجارية في الأردن، من خلال تقديم خدمات
              موثوقة، فعالة، وبأسعار تنافسية.
            </p>
          </div>

          {/* Mission */}
          <div
            className={`bg-accent/10 p-8 md:p-12 rounded-3xl transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">مهمتنا</h3>
            <p className="text-muted-foreground leading-relaxed">
              توفير خدمة صيانة متكاملة تغطي كافة أنواع الأجهزة الكهربائية، مع الاعتماد على فريق فني متخصص واستخدام قطع
              غيار أصلية تضمن استمرارية عمل الأجهزة بأفضل أداء.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
