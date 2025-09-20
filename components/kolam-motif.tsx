"use client"

import { cn } from "@/lib/utils"

interface KolamMotifProps {
  pattern: "lotus" | "peacock" | "flower" | "geometric"
  className?: string
}

export function KolamMotif({ pattern, className }: KolamMotifProps) {
  const renderPattern = () => {
    switch (pattern) {
      case "lotus":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" className="text-primary" />
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M100 100 L${100 + 60 * Math.cos((i * Math.PI) / 4)} ${100 + 60 * Math.sin((i * Math.PI) / 4)}`}
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/70"
              />
            ))}
            <circle cx="100" cy="100" r="20" fill="currentColor" className="text-primary" />
          </svg>
        )
      case "peacock":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <path d="M50 150 Q100 50 150 150" stroke="currentColor" strokeWidth="4" className="text-secondary" />
            <path d="M70 130 Q100 80 130 130" stroke="currentColor" strokeWidth="3" className="text-secondary/70" />
            <circle cx="100" cy="120" r="8" fill="currentColor" className="text-secondary" />
          </svg>
        )
      case "flower":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            {Array.from({ length: 6 }).map((_, i) => (
              <ellipse
                key={i}
                cx="100"
                cy="60"
                rx="15"
                ry="40"
                transform={`rotate(${i * 60} 100 100)`}
                stroke="currentColor"
                strokeWidth="3"
                className="text-accent"
              />
            ))}
            <circle cx="100" cy="100" r="15" fill="currentColor" className="text-accent" />
          </svg>
        )
      case "geometric":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <rect
              x="50"
              y="50"
              width="100"
              height="100"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
            <rect
              x="75"
              y="75"
              width="50"
              height="50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-secondary"
            />
            <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="2" className="text-accent" />
          </svg>
        )
    }
  }

  return (
    <div
      className={cn(
        "w-32 h-32 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300",
        className,
      )}
    >
      {renderPattern()}
    </div>
  )
}
