"use client"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
}

export default function Logo({ size = "md", animated = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { width: 50, height: 50 },
    md: { width: 70, height: 70 },
    lg: { width: 100, height: 100 },
    xl: { width: 150, height: 150 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "group" : ""}
      >
        <defs>
          <linearGradient id="logoRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="70" cy="70" r="65" fill="none" stroke="url(#logoRedGradient)" strokeWidth="3" />

        {/* Inner circle background */}
        <circle cx="70" cy="70" r="61" fill="#0a0a0a" />

        <text
          x="70"
          y="85"
          fontFamily="Arial Black, sans-serif"
          fontSize="28"
          fontWeight="900"
          fill="#ffffff"
          textAnchor="middle"
          filter="url(#logoGlow)"
        >
          FIXJO
        </text>

        <g
          className={animated ? "origin-center animate-spin" : ""}
          style={{ animationDuration: "8s", transformOrigin: "70px 70px" }}
        >
          {/* Decorative rotating circle with dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle key={i} cx="70" cy="25" r="3" fill="url(#logoRedGradient)" transform={`rotate(${angle} 70 70)`} />
          ))}
        </g>

        {/* Professional tagline */}
        <text
          x="70"
          y="125"
          fontFamily="Arial, sans-serif"
          fontSize="9"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="600"
        >
          صيانة احترافية
        </text>
      </svg>
    </div>
  )
}
