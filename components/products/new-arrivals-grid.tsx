"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "./product-card"
import { ProductSort } from "./product-sort"
import type { Product } from "@/types/product"
import { useState } from "react"

async function fetchNewArrivals() {
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  return products.sort((a: Product, b: Product) => b.id - a.id)
}

export function NewArrivalsGrid() {
  const [sortBy, setSortBy] = useState("default")

  const { data: products, isLoading } = useQuery({
    queryKey: ["new-arrivals-all"],
    queryFn: fetchNewArrivals,
  })

  const sortedProducts = products
    ? [...products].sort((a: Product, b: Product) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating.rate - a.rating.rate
          case "name":
            return a.title.localeCompare(b.title)
          default:
            return b.id - a.id // Default sort for new arrivals is by id descending
        }
      })
    : []

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Loading products...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">{sortedProducts.length} products found</p>
        <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
