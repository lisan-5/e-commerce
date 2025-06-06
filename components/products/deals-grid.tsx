"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "./product-card"
import { ProductSort } from "./product-sort"
import type { Product } from "@/types/product"
import { useState } from "react"

async function fetchDeals() {
  // Simulate deals by getting products with price < 50
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  return products.filter((product: Product) => product.price < 50)
}

export function DealsGrid() {
  const [sortBy, setSortBy] = useState("price-low")

  const { data: products, isLoading } = useQuery({
    queryKey: ["deals"],
    queryFn: fetchDeals,
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
            return a.price - b.price
        }
      })
    : []

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Loading deals...</p>
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
        <p className="text-gray-600">{sortedProducts.length} deals found</p>
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
