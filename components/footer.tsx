"use client"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-glow">Kolams</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bridging ancient wisdom with modern technology to preserve and celebrate the mathematical beauty of
              traditional Indian art forms.
            </p>
            <div className="flex gap-4">
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                GitHub
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Research
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pattern Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mathematical Concepts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cultural History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AI Recognition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Kolams Project. Preserving tradition through technology.</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <span className="text-primary">Made with ❤️ for cultural preservation</span>
            <span className="text-secondary">•</span>
            <span className="text-accent">Open Source & Educational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
