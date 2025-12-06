"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Logo from "./logo"
import Link from "next/link"

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/#about" },
  { label: "خدماتنا", href: "/#services" },
  { label: "قطع الغيار", href: "/spare-parts" },
  { label: "آراء العملاء", href: "/#testimonials" },
  { label: "تواصل معنا", href: "/#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Logo size="sm" animated={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:0781990001"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M12.02 21.485a9 9 0 1 1 .018 -18.97a9 9 0 0 1 -.018 18.97" />
              </svg>
              <span>طلب الخدمة</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="فتح القائمة"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-sidebar z-50 transform transition-transform duration-500 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="mobileBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="56" fill="none" stroke="url(#mobileBlueGradient)" strokeWidth="3" />
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
                fill="url(#mobileBlueGradient)"
              >
                J
              </text>
              <g className="origin-[78px_68px] animate-spin" style={{ animationDuration: "8s" }}>
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                  <rect
                    key={i}
                    x="75"
                    y="52"
                    width="6"
                    height="6"
                    rx="1"
                    fill="url(#mobileBlueGradient)"
                    transform={`rotate(${angle} 78 68)`}
                  />
                ))}
                <circle cx="78" cy="68" r="12" fill="url(#mobileBlueGradient)" />
                <circle cx="78" cy="68" r="5" fill="#0a0a0a" />
              </g>
            </svg>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
              aria-label="إغلاق القائمة"
            >
              <X className="w-5 h-5 text-sidebar-foreground" />
            </button>
          </div>

          <nav>
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-sidebar-foreground py-3 px-4 border-b border-sidebar-border hover:bg-sidebar-accent transition-colors"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6">
            <h3 className="text-sidebar-foreground font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-1">
              {[
                "صيانة وإصلاح الغسالات",
                "صيانة وإصلاح النشافات",
                "صيانة وإصلاح الثلاجات",
                "إصلاح وصيانة المكيفات",
                "صيانة وإصلاح الجلايات",
                "صيانة وإصلاح أفران الغاز",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-sidebar-foreground/80 py-2 px-4 border-b border-sidebar-border hover:bg-sidebar-accent transition-colors text-sm"
                  >
                    <span className="w-2 h-2 bg-primary/60 rounded-full" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <a
              href="tel:0781990001"
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل الآن</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
