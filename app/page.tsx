import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProducts } from '@/components/featured-products'
import { ProductGrid } from '@/components/product-grid'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductGrid />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
