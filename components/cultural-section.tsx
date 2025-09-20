"use client"

import { Card, CardContent } from "@/components/ui/card"
import { KolamMotif } from "@/components/kolam-motif"

export function CulturalSection() {
  return (
    <section className="py-20 px-4 relative kolam-pattern-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-primary text-glow">Cultural Significance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kolams are more than art—they are sacred geometry, daily rituals, and cultural expressions passed down
            through generations of women in South India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <div className="w-6 h-6 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-primary">Daily Rituals</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every dawn, women create intricate Kolam patterns at their doorsteps using rice flour, welcoming
                      prosperity and warding off negative energy through sacred geometry.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-300 group shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <div className="w-6 h-6 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary">Generational Wisdom</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mothers teach daughters the art of Kolam creation, passing down not just patterns but mathematical
                      concepts, cultural values, and spiritual practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <div className="w-6 h-6 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-accent">Community Connection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kolams create invisible threads connecting neighborhoods, as each pattern tells a story and
                      reflects the creativity and skill of its creator.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <KolamMotif pattern="lotus" className="glow-cyan" />
              <KolamMotif pattern="peacock" className="glow-magenta" />
              <KolamMotif pattern="flower" className="glow-gold" />
              <KolamMotif pattern="geometric" className="glow-magenta" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
