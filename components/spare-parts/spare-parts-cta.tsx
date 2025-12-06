"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, CheckCircle } from "lucide-react"

export default function SparePartsCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-red-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">لم تجد القطعة التي تبحث عنها؟</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            تواصل معنا الآن وسنوفر لك أي قطعة غيار تحتاجها لجهازك الكهربائي مع ضمان الجودة والسعر المنافس
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["جميع الماركات العالمية", "قطع غيار أصلية 100%", "ضمان سنة كاملة", "تركيب مجاني"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ),
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0781990001"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>اتصل الآن: 0781990001</span>
            </a>
            <a
              href="https://wa.me/962781990001"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>واتساب</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
