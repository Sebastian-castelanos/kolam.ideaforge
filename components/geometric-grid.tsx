"use client"

import { cn } from "@/lib/utils"

interface GeometricGridProps {
  size: number
  className?: string
}

export function GeometricGrid({ size, className }: GeometricGridProps) {
  return (
    <div className={cn("grid gap-1", className)} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
      {Array.from({ length: size * size }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-current rounded-full opacity-60"
          style={{ animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
  )
}
