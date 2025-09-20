"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GeometricGrid } from "@/components/geometric-grid"

export function MathematicsSection() {
  return (
    <section className="py-20 px-4 relative bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-secondary text-glow">Mathematical Foundations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Behind every beautiful Kolam lies sophisticated mathematical principles: symmetry, topology, fractals, and
            algorithmic thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-2xl text-primary group-hover:text-glow transition-all">Grid Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Kolams are constructed on invisible dot grids, teaching spatial reasoning and coordinate geometry
                through artistic expression.
              </p>
              <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                <GeometricGrid size={8} className="text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary group-hover:text-glow transition-all">
                Symmetry & Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Rotational and reflective symmetries create mesmerizing patterns that demonstrate group theory and
                transformation mathematics.
              </p>
              <div className="h-32 bg-secondary/10 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-secondary rounded-full relative rotate-slow">
                  <div className="absolute inset-2 border-2 border-secondary rounded-full" />
                  <div className="absolute inset-4 bg-secondary rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-2xl text-accent group-hover:text-glow transition-all">
                Algorithmic Thinking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Creating Kolams requires step-by-step logical processes, naturally developing computational thinking and
                problem-solving skills.
              </p>
              <div className="h-32 bg-accent/10 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-accent rounded-sm opacity-60"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-border inline-block">
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">Mathematical Concepts in Kolams</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <p className="text-sm text-muted-foreground">Topology</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">⟲</div>
                  <p className="text-sm text-muted-foreground">Symmetry</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">◊</div>
                  <p className="text-sm text-muted-foreground">Fractals</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">∑</div>
                  <p className="text-sm text-muted-foreground">Algorithms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
