"use client"

import { cn } from "@/lib/utils"

interface KolamPatternProps {
  className?: string
  animated?: boolean
}

export function KolamPattern({ className, animated = false }: KolamPatternProps) {
  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 400 400"
        className={cn("w-full h-full", animated && "rotate-slow")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central mandala pattern */}
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="2" className="text-secondary/30" />
        <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="2" className="text-accent/30" />

        {/* Geometric patterns */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 200 200)`}>
            <path
              d="M200 50 L220 80 L200 110 L180 80 Z"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />
            <path d="M200 80 L210 95 L200 110 L190 95 Z" fill="currentColor" className="text-secondary/30" />
          </g>
        ))}

        {/* Dot grid pattern */}
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={50 + col * 37.5}
              cy={50 + row * 37.5}
              r="2"
              fill="currentColor"
              className="text-accent/40"
            />
          )),
        )}
      </svg>
    </div>
  )
}
