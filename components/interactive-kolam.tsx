"use client"

import { cn } from "@/lib/utils"

interface InteractiveKolamProps {
  pattern: string
  isActive: boolean
  color: "primary" | "secondary" | "accent"
}

export function InteractiveKolam({ pattern, isActive, color }: InteractiveKolamProps) {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  return (
    <div
      className={cn(
        "w-48 h-48 transition-all duration-500",
        isActive && "scale-110",
        isActive && color === "primary" && "glow-cyan",
        isActive && color === "secondary" && "glow-magenta",
      )}
    >
      <svg
        viewBox="0 0 200 200"
        className={cn("w-full h-full", colorClasses[color], isActive && "rotate-slow")}
        fill="none"
      >
        {/* Dynamic pattern based on name */}
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" opacity="0.3" />

        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <line
              x1="100"
              y1="40"
              x2="100"
              y2="60"
              stroke="currentColor"
              strokeWidth="3"
              opacity={isActive ? "0.8" : "0.4"}
            />
            <circle cx="100" cy="50" r="3" fill="currentColor" opacity={isActive ? "1" : "0.6"} />
          </g>
        ))}

        <circle cx="100" cy="100" r="8" fill="currentColor" opacity={isActive ? "1" : "0.7"} />
      </svg>
    </div>
  )
}
