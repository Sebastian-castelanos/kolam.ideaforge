"use client"

import { Button } from "@/components/ui/button"
import { KolamPattern } from "@/components/kolam-pattern"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden festival-gradient">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <KolamPattern className="w-full h-full" animated />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,88,12,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(234,88,12,0.15)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          <span className="text-primary">Kolams</span>
          <br />
          <span className="text-foreground">Where Art Meets</span>
          <br />
          <span className="text-green-700">Mathematics</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the mesmerizing world of traditional Indian geometric art forms that seamlessly blend cultural
          heritage with mathematical precision and modern technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground glow-cyan text-lg px-8 py-4"
          >
            Explore Patterns
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-magenta text-lg px-8 py-4 bg-card"
          >
            Learn Mathematics
          </Button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary rounded-full glow-cyan opacity-70" />
      <div className="absolute bottom-32 right-16 w-12 h-12 border-2 border-secondary rotate-45 glow-magenta opacity-70" />
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-accent rounded-full glow-gold opacity-70" />
      <div className="absolute bottom-1/4 left-1/4 w-10 h-10 border-2 border-accent rounded-full glow-gold opacity-60" />
    </section>
  )
}
