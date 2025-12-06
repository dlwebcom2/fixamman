"use client"

import { useState, useEffect } from "react"
import Logo from "./logo"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

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

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mb-12">
        <div className="absolute -inset-8 rounded-full border-2 border-primary/30 animate-ping" />
        <div
          className="absolute -inset-12 rounded-full border border-primary/20 animate-pulse"
          style={{ animationDuration: "2s" }}
        />
        <Logo size="xl" animated={true} />
      </div>

      {/* Loading text */}
      <div className="text-center mb-8">
        <h2 className="text-white text-xl font-bold mb-2 animate-pulse">جاري التحميل...</h2>
        <p className="text-white/60 text-sm">مركز صيانة عمان المعتمد</p>
      </div>

      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-300 relative"
          style={{ width: `${Math.min(progress, 100)}%` }}
        >
          <div className="absolute inset-0 animate-shimmer" />
        </div>
      </div>

      <p className="text-primary font-bold text-lg">{Math.round(Math.min(progress, 100))}%</p>

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
