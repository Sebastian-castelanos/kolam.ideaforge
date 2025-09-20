import { HeroSection } from "@/components/hero-section"
import { CulturalSection } from "@/components/cultural-section"
import { MathematicsSection } from "@/components/mathematics-section"
import { TechnologySection } from "@/components/technology-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CulturalSection />
      <MathematicsSection />
      <TechnologySection />
      <GallerySection />
      <Footer />
    </main>
  )
}
