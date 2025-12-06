"use client"

import { useState, useEffect } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    // Hide preloader after loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main logo animation */}
      <div className="relative mb-12">
        {/* Glowing ring animation */}
        <div className="absolute -inset-8 rounded-full border-2 border-primary/30 animate-ping" />
        <div
          className="absolute -inset-12 rounded-full border border-primary/20 animate-pulse"
          style={{ animationDuration: "2s" }}
        />

        {/* Animated Logo */}
        <div className="relative">
          <svg width="200" height="100" viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="preloaderRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <filter id="preloaderGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Animated Wrench */}
            <g className="animate-bounce" style={{ animationDuration: "1.5s" }}>
              <path d="M35 95 L55 55 L65 60 L50 95 Z" fill="url(#preloaderRedGradient)" />
              <circle cx="60" cy="50" r="15" fill="url(#preloaderRedGradient)" />
              <circle cx="60" cy="50" r="8" fill="white" />
              <rect x="30" y="92" width="25" height="8" rx="2" fill="url(#preloaderRedGradient)" />
            </g>

            {/* Animated Gear */}
            <g className="origin-[85px_70px] animate-spin" style={{ animationDuration: "3s" }}>
              <circle cx="85" cy="70" r="18" fill="none" stroke="#ffffff" strokeWidth="6" />
              <circle cx="85" cy="70" r="8" fill="#ffffff" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <rect
                  key={i}
                  x="82"
                  y="48"
                  width="6"
                  height="12"
                  rx="2"
                  fill="#ffffff"
                  transform={`rotate(${angle} 85 70)`}
                />
              ))}
            </g>

            {/* FIX text with animation */}
            <text
              x="115"
              y="85"
              fontFamily="Arial Black, sans-serif"
              fontSize="56"
              fontWeight="900"
              fill="#ffffff"
              className="animate-pulse"
            >
              FIX
            </text>

            {/* JO text with glow */}
            <text
              x="200"
              y="85"
              fontFamily="Arial Black, sans-serif"
              fontSize="56"
              fontWeight="900"
              fill="url(#preloaderRedGradient)"
              filter="url(#preloaderGlow)"
            >
              JO
            </text>
          </svg>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center mb-8">
        <h2 className="text-white text-xl font-bold mb-2 animate-pulse">جاري التحميل...</h2>
        <p className="text-white/60 text-sm">مركز صيانة عمان المعتمد</p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-primary to-red-400 rounded-full transition-all duration-300 relative"
          style={{ width: `${Math.min(progress, 100)}%` }}
        >
          <div className="absolute inset-0 animate-shimmer" />
        </div>
      </div>

      {/* Progress percentage */}
      <p className="text-primary font-bold text-lg">{Math.round(Math.min(progress, 100))}%</p>

      {/* Animated dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  )
}
