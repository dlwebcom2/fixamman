"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const categories = [
  { id: "all", label: "الكل" },
  { id: "refrigerator", label: "الثلاجات" },
  { id: "washing", label: "الغسالات" },
  { id: "ac", label: "المكيفات" },
  { id: "dishwasher", label: "الجلايات" },
  { id: "dryer", label: "النشافات" },
  { id: "oven", label: "الأفران" },
]

export default function SparePartsCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 bg-[#1a1a1a] sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
