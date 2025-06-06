"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/types/product"

// Modify the featured products to show more items
async function fetchFeaturedProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=12")
  return response.json()
}

export function FeaturedProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchFeaturedProducts,
  })

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
