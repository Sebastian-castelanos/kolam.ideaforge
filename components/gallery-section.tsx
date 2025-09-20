"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { InteractiveKolam } from "@/components/interactive-kolam"

const kolamPatterns = [
  { id: 1, name: "Lotus Mandala", complexity: "Advanced", color: "primary" },
  { id: 2, name: "Peacock Dance", complexity: "Intermediate", color: "secondary" },
  { id: 3, name: "Flower Chain", complexity: "Beginner", color: "accent" },
  { id: 4, name: "Geometric Spiral", complexity: "Advanced", color: "primary" },
  { id: 5, name: "Star Formation", complexity: "Intermediate", color: "secondary" },
  { id: 6, name: "Wave Pattern", complexity: "Beginner", color: "accent" },
]

export function GallerySection() {
  const [hoveredPattern, setHoveredPattern] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 relative bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-primary text-glow">Interactive Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our collection of traditional and contemporary Kolam patterns. Hover over each design to see it come
            alive with glowing animations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kolamPatterns.map((pattern) => (
            <Card
              key={pattern.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredPattern(pattern.id)}
              onMouseLeave={() => setHoveredPattern(null)}
            >
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-black via-card to-black flex items-center justify-center">
                  <InteractiveKolam
                    pattern={pattern.name.toLowerCase().replace(" ", "-")}
                    isActive={hoveredPattern === pattern.id}
                    color={pattern.color}
                  />

                  {/* Overlay with pattern info */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{pattern.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm px-3 py-1 rounded-full bg-${pattern.color}/20 text-${pattern.color}`}>
                          {pattern.complexity}
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i <
                                (pattern.complexity === "Advanced" ? 5 : pattern.complexity === "Intermediate" ? 3 : 2)
                                  ? `bg-${pattern.color}`
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Each pattern represents centuries of mathematical and artistic evolution
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full glow-cyan" />
              <span>Traditional Patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full glow-magenta" />
              <span>Modern Variations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span>Algorithmic Designs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
