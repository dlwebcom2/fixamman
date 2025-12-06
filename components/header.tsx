"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Logo from "./logo"

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
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
          <a href="#" className="flex items-center group">
            <Logo size="sm" animated={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0785580007"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M12.02 21.485a9 9 0 1 1 .018 -18.97a9 9 0 0 1 -.018 18.97" />
              </svg>
              <span>طلب الخدمة</span>
            </a>

            {/* Mobile Menu Button */}
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
            <div className="flex items-center gap-2">
              <svg width="100" height="50" viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mobileRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>
                <g>
                  <path d="M35 95 L55 55 L65 60 L50 95 Z" fill="url(#mobileRedGradient)" />
                  <circle cx="60" cy="50" r="15" fill="url(#mobileRedGradient)" />
                  <circle cx="60" cy="50" r="8" fill="white" />
                  <rect x="30" y="92" width="25" height="8" rx="2" fill="url(#mobileRedGradient)" />
                </g>
                <text x="115" y="85" fontFamily="Arial Black, sans-serif" fontSize="56" fontWeight="900" fill="#ffffff">
                  FIX
                </text>
                <text
                  x="200"
                  y="85"
                  fontFamily="Arial Black, sans-serif"
                  fontSize="56"
                  fontWeight="900"
                  fill="url(#mobileRedGradient)"
                >
                  JO
                </text>
              </svg>
            </div>
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
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-sidebar-foreground py-3 px-4 border-b border-sidebar-border hover:bg-sidebar-accent transition-colors"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services submenu */}
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
                  <a
                    href="#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-sidebar-foreground/80 py-2 px-4 border-b border-sidebar-border hover:bg-sidebar-accent transition-colors text-sm"
                  >
                    <span className="w-2 h-2 bg-primary/60 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <a
              href="tel:0785580007"
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
