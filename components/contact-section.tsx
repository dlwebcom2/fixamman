"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const whatsappMessage = `مرحباً، أنا ${formData.name}. ${formData.message}`
    window.open(`https://wa.me/962781990001?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">تواصل معنا</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">اتصل بنا</h3>
                <a href="tel:0781990001" className="text-lg text-primary hover:underline">
                  0781990001
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">موقعنا</h3>
                <p className="text-muted-foreground">عمان، الأردن - نغطي جميع مناطق عمان</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">ساعات العمل</h3>
                <p className="text-muted-foreground">نستقبلكم يومياً من الساعة 9:00 صباحاً حتى 8:00 مساءً</p>
                <p className="text-muted-foreground">يوم الجمعة عطلة رسمية</p>
                <p className="text-primary font-medium">خدمة الطوارئ متوفرة</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  نوع الخدمة
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  required
                >
                  <option value="">اختر الخدمة</option>
                  <option value="washing">صيانة غسالات</option>
                  <option value="fridge">صيانة ثلاجات</option>
                  <option value="dishwasher">صيانة جلايات</option>
                  <option value="ac">صيانة مكيفات</option>
                  <option value="dryer">صيانة نشافات</option>
                  <option value="oven">صيانة أفران غاز</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  تفاصيل المشكلة
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none text-foreground"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الطلب
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
