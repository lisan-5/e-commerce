"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/types/product"

async function fetchNewArrivals() {
  // Fetch all products and sort by id in reverse to simulate "new arrivals"
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  return products.sort((a: Product, b: Product) => b.id - a.id).slice(0, 8)
}

export function NewArrivals() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["new-arrivals"],
    queryFn: fetchNewArrivals,
  })

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-amber-50">
      <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
