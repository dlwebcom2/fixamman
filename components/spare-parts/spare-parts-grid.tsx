"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"

const spareParts = [
  // قطع غيار الثلاجات
  {
    id: 1,
    name: "كمبروسر ثلاجة",
    category: "refrigerator",
    description: "كمبروسر أصلي لجميع أنواع الثلاجات - LG، Samsung، Hitachi",
    image: "/refrigerator-compressor-motor-spare-part.jpg",
    price: "يبدأ من 80 دينار",
  },
  {
    id: 2,
    name: "ثرموستات ثلاجة",
    category: "refrigerator",
    description: "ثرموستات تحكم بدرجة الحرارة لجميع الماركات",
    image: "/refrigerator-thermostat-temperature-control.jpg",
    price: "يبدأ من 15 دينار",
  },
  {
    id: 3,
    name: "مروحة ثلاجة",
    category: "refrigerator",
    description: "مروحة تبريد داخلية للثلاجات نوفروست",
    image: "/refrigerator-cooling-fan-motor.jpg",
    price: "يبدأ من 20 دينار",
  },
  {
    id: 4,
    name: "كاوتش باب ثلاجة",
    category: "refrigerator",
    description: "جوان باب ثلاجة لجميع المقاسات والماركات",
    image: "/refrigerator-door-seal-gasket-rubber.jpg",
    price: "يبدأ من 25 دينار",
  },
  // قطع غيار الغسالات
  {
    id: 5,
    name: "موتور غسالة",
    category: "washing",
    description: "موتور أصلي للغسالات الأوتوماتيك والفوق أوتوماتيك",
    image: "/washing-machine-motor-engine-spare-part.jpg",
    price: "يبدأ من 60 دينار",
  },
  {
    id: 6,
    name: "طرمبة صرف غسالة",
    category: "washing",
    description: "طرمبة تصريف المياه لجميع أنواع الغسالات",
    image: "/washing-machine-drain-pump-spare-part.jpg",
    price: "يبدأ من 25 دينار",
  },
  {
    id: 7,
    name: "كاوتش باب غسالة",
    category: "washing",
    description: "جوان باب غسالة فتحة أمامية لجميع الماركات",
    image: "/washing-machine-door-rubber-seal-gasket.jpg",
    price: "يبدأ من 35 دينار",
  },
  {
    id: 8,
    name: "بورد غسالة إلكتروني",
    category: "washing",
    description: "لوحة تحكم إلكترونية للغسالات الأوتوماتيك",
    image: "/washing-machine-electronic-control-board-pcb.jpg",
    price: "يبدأ من 45 دينار",
  },
  // قطع غيار المكيفات
  {
    id: 9,
    name: "كمبروسر مكيف",
    category: "ac",
    description: "كمبروسر أصلي لجميع أنواع المكيفات السبليت والشباك",
    image: "/air-conditioner-compressor-unit-spare-part.jpg",
    price: "يبدأ من 120 دينار",
  },
  {
    id: 10,
    name: "مروحة مكيف داخلية",
    category: "ac",
    description: "مروحة الوحدة الداخلية للمكيف السبليت",
    image: "/air-conditioner-indoor-unit-fan-blower.jpg",
    price: "يبدأ من 30 دينار",
  },
  {
    id: 11,
    name: "بورد مكيف",
    category: "ac",
    description: "لوحة تحكم إلكترونية للمكيفات الإنفرتر والعادية",
    image: "/air-conditioner-control-board-pcb-electronic.jpg",
    price: "يبدأ من 50 دينار",
  },
  {
    id: 12,
    name: "ريموت مكيف",
    category: "ac",
    description: "ريموت كنترول أصلي لجميع ماركات المكيفات",
    image: "/air-conditioner-remote-control.jpg",
    price: "يبدأ من 10 دينار",
  },
  // قطع غيار الجلايات
  {
    id: 13,
    name: "طرمبة جلاية",
    category: "dishwasher",
    description: "طرمبة ضخ وتصريف للجلايات الأوتوماتيك",
    image: "/dishwasher-water-pump-spare-part.jpg",
    price: "يبدأ من 40 دينار",
  },
  {
    id: 14,
    name: "سخان جلاية",
    category: "dishwasher",
    description: "عنصر تسخين للجلايات لجميع الماركات",
    image: "/dishwasher-heating-element-spare-part.jpg",
    price: "يبدأ من 30 دينار",
  },
  {
    id: 15,
    name: "سلة أدوات جلاية",
    category: "dishwasher",
    description: "سلة علوية وسفلية للجلايات",
    image: "/dishwasher-basket-rack-cutlery-holder.jpg",
    price: "يبدأ من 35 دينار",
  },
  {
    id: 16,
    name: "ذراع رش جلاية",
    category: "dishwasher",
    description: "أذرع رش المياه للجلايات",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 20 دينار",
  },
  // قطع غيار النشافات
  {
    id: 17,
    name: "سخان نشافة",
    category: "dryer",
    description: "عنصر تسخين للنشافات الكهربائية",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 35 دينار",
  },
  {
    id: 18,
    name: "حزام نشافة",
    category: "dryer",
    description: "حزام دوران الحلة للنشافات",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 15 دينار",
  },
  {
    id: 19,
    name: "موتور نشافة",
    category: "dryer",
    description: "موتور أصلي للنشافات لجميع الماركات",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 55 دينار",
  },
  {
    id: 20,
    name: "فلتر نشافة",
    category: "dryer",
    description: "فلتر الوبر والأتربة للنشافات",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 10 دينار",
  },
  // قطع غيار الأفران
  {
    id: 21,
    name: "شعلة فرن غاز",
    category: "oven",
    description: "شعلات غاز لجميع أنواع الأفران والطباخات",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 15 دينار",
  },
  {
    id: 22,
    name: "ثرموستات فرن",
    category: "oven",
    description: "ثرموستات تحكم بدرجة حرارة الفرن",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 20 دينار",
  },
  {
    id: 23,
    name: "مفاتيح فرن",
    category: "oven",
    description: "مفاتيح تشغيل وتحكم للأفران والطباخات",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 8 دينار",
  },
  {
    id: 24,
    name: "زجاج باب فرن",
    category: "oven",
    description: "زجاج باب الفرن الداخلي والخارجي",
    image: "/placeholder.svg?height=200&width=200",
    price: "يبدأ من 25 دينار",
  },
]

export default function SparePartsGrid() {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">جميع قطع الغيار المتوفرة</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نوفر قطع غيار أصلية ومعتمدة لجميع الماركات العالمية بأسعار منافسة وضمان حقيقي
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {spareParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <Image
                  src={part.image || "/placeholder.svg"}
                  alt={part.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">أصلي</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{part.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{part.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{part.price}</span>
                  <a
                    href="tel:0781990001"
                    className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">اطلب الآن</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
