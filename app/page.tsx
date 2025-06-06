import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoryGrid } from "@/components/home/category-grid"
import { TrendingProducts } from "@/components/home/trending-products"
import { NewArrivals } from "@/components/home/new-arrivals"
import { StatsSection } from "@/components/home/stats-section"
import { Testimonials } from "@/components/home/testimonials"
import { MoreProducts } from "@/components/home/more-products"

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <StatsSection />
      <CategoryGrid />
      <FeaturedProducts />
      <TrendingProducts />
      <NewArrivals />
      <MoreProducts />
      <Testimonials />
    </div>
  )
}
