"use client"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
}

export default function Logo({ size = "md", animated = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { width: 80, height: 40, fontSize: "text-lg" },
    md: { width: 120, height: 60, fontSize: "text-2xl" },
    lg: { width: 180, height: 90, fontSize: "text-4xl" },
    xl: { width: 280, height: 140, fontSize: "text-6xl" },
  }

  const { width, height, fontSize } = sizes[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 280 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "group" : ""}
      >
        {/* Background glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>

        {/* Wrench icon integrated with text */}
        <g className={animated ? "group-hover:animate-pulse transition-all duration-300" : ""}>
          {/* Wrench */}
          <path
            d="M35 95 L55 55 L65 60 L50 95 Z"
            fill="url(#redGradient)"
            className={animated ? "group-hover:fill-[#ef4444] transition-colors duration-300" : ""}
          />
          <circle cx="60" cy="50" r="15" fill="url(#redGradient)" />
          <circle cx="60" cy="50" r="8" fill="white" />
          <rect x="30" y="92" width="25" height="8" rx="2" fill="url(#redGradient)" />

          {/* Gear behind wrench */}
          <g className={animated ? "origin-[85px_70px] group-hover:rotate-45 transition-transform duration-700" : ""}>
            <circle cx="85" cy="70" r="18" fill="none" stroke="#0a0a0a" strokeWidth="6" />
            <circle cx="85" cy="70" r="8" fill="#0a0a0a" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="82"
                y="48"
                width="6"
                height="12"
                rx="2"
                fill="#0a0a0a"
                transform={`rotate(${angle} 85 70)`}
              />
            ))}
          </g>
        </g>

        {/* FIX text */}
        <text
          x="115"
          y="85"
          fontFamily="Arial Black, sans-serif"
          fontSize="56"
          fontWeight="900"
          fill="url(#darkGradient)"
          className={animated ? "group-hover:fill-[#1a1a1a] transition-colors duration-300" : ""}
        >
          FIX
        </text>

        {/* JO text */}
        <text
          x="200"
          y="85"
          fontFamily="Arial Black, sans-serif"
          fontSize="56"
          fontWeight="900"
          fill="url(#redGradient)"
          filter="url(#glow)"
          className={animated ? "group-hover:fill-[#ef4444] transition-colors duration-300" : ""}
        >
          JO
        </text>

        {/* Underline accent */}
        <rect
          x="115"
          y="95"
          width="140"
          height="4"
          rx="2"
          fill="url(#redGradient)"
          className={animated ? "group-hover:w-[150px] transition-all duration-300" : ""}
        />

        {/* Tagline */}
        <text x="140" y="120" fontFamily="Arial, sans-serif" fontSize="14" fill="#525252" fontWeight="500">
          صيانة احترافية
        </text>
      </svg>
    </div>
  )
}
