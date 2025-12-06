import { Phone, MapPin, Mail, Heart, Code, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0f1720] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <filter id="footerGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="60" cy="60" r="56" fill="none" stroke="url(#footerRedGradient)" strokeWidth="3" />
                <circle cx="60" cy="60" r="52" fill="#0a0a0a" />
                <text
                  x="60"
                  y="48"
                  fontFamily="Arial Black, sans-serif"
                  fontSize="22"
                  fontWeight="900"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  FIX
                </text>
                <text
                  x="45"
                  y="78"
                  fontFamily="Arial Black, sans-serif"
                  fontSize="22"
                  fontWeight="900"
                  fill="url(#footerRedGradient)"
                  filter="url(#footerGlow)"
                >
                  J
                </text>
                <g>
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                    <rect
                      key={i}
                      x="75"
                      y="52"
                      width="6"
                      height="6"
                      rx="1"
                      fill="url(#footerRedGradient)"
                      transform={`rotate(${angle} 78 68)`}
                    />
                  ))}
                  <circle cx="78" cy="68" r="12" fill="url(#footerRedGradient)" />
                  <circle cx="78" cy="68" r="5" fill="#0a0a0a" />
                </g>
                <text x="60" y="100" fontFamily="Arial, sans-serif" fontSize="8" fill="#9ca3af" textAnchor="middle">
                  صيانة احترافية
                </text>
              </svg>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              نقدم خدمات صيانة وإصلاح متكاملة لجميع الأجهزة الكهربائية المنزلية في عمان والأردن بأعلى معايير الجودة
              والاحترافية. فريقنا المتخصص جاهز لخدمتكم على مدار الساعة.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/962781990001"
                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Added spare parts link */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/spare-parts"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  قطع الغيار
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">تواصل معنا</h3>
            <div className="space-y-4">
              <a
                href="tel:0781990001"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>0781990001</span>
              </a>
              <a
                href="mailto:info@fix-jo.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@fix-jo.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>عمان، الأردن</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fix JO - مركز صيانة عمان المعتمد. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary/20 to-transparent rounded-full border border-primary/30">
              <span className="text-gray-400 text-sm">تصميم وبرمجة بواسطة</span>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary animate-pulse" />
                <Code className="w-4 h-4 text-primary" />
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
              <span className="font-bold text-white bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Ahmed Elhenawy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
