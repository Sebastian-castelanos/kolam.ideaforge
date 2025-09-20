"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TechnologySection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-accent text-glow">Digital Renaissance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Modern technology breathes new life into ancient art, using AI, computer vision, and algorithmic generation
            to preserve and evolve Kolam traditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">AI</span>
                  </div>
                  Pattern Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Machine learning algorithms can now identify, classify, and analyze Kolam patterns, helping preserve
                  thousands of traditional designs and their cultural meanings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold">CV</span>
                  </div>
                  Computer Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced image processing techniques can capture and digitize hand-drawn Kolams, converting physical
                  art into digital formats for analysis and reproduction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">⚡</span>
                  </div>
                  Generative Algorithms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Python programs can now generate infinite variations of Kolam patterns, following traditional rules
                  while creating entirely new artistic possibilities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-card via-card to-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Python Kolam Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-accent mb-2"># Generate Kolam Pattern</div>
                  <div className="text-primary">import</div> <span className="text-foreground">numpy as np</span>
                  <br />
                  <div className="text-primary">import</div>{" "}
                  <span className="text-foreground">matplotlib.pyplot as plt</span>
                  <br />
                  <br />
                  <div className="text-primary">def</div> <span className="text-accent">create_kolam</span>
                  <span className="text-foreground">(grid_size, pattern):</span>
                  <br />
                  <span className="text-muted-foreground ml-4"># Initialize dot grid</span>
                  <br />
                  <span className="text-foreground ml-4">dots = np.zeros((grid_size, grid_size))</span>
                  <br />
                  <span className="text-muted-foreground ml-4"># Apply symmetry rules</span>
                  <br />
                  <span className="text-foreground ml-4">return generate_pattern(dots, pattern)</span>
                  <br />
                  <br />
                  <div className="text-accent"># Create beautiful Kolam</div>
                  <br />
                  <span className="text-foreground">kolam = create_kolam(8, 'lotus')</span>
                  <br />
                  <span className="text-foreground">display_kolam(kolam)</span>
                </div>
                <Button className="mt-4 bg-primary hover:bg-primary/80 text-primary-foreground glow-cyan">
                  Run Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
