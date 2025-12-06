"use client"

const brands = [
  "سامسونج",
  "إل جي",
  "بوش",
  "سيمنز",
  "ويرلبول",
  "بيكو",
  "توشيبا",
  "شارب",
  "هيتاشي",
  "باناسونيك",
  "دايو",
  "زانوسي",
  "إندست",
  "أريستون",
  "هاير",
  "ميديا",
]

export default function BrandsMarquee() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <p className="text-center text-muted-foreground">نصلح جميع الماركات العالمية</p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-secondary rounded-xl text-foreground font-bold text-lg whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
