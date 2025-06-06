"use client"

import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "./product-card"
import { ProductSort } from "./product-sort"
import { ProductCardSkeleton } from "@/components/ui/loading-skeleton"
import type { Product } from "@/types/product"
import { useState } from "react"

async function fetchProducts(category?: string, search?: string) {
  let url = "https://fakestoreapi.com/products"
  if (category) {
    url += `/category/${category}`
  }

  const response = await fetch(url)
  const products = await response.json()

  if (search) {
    return products.filter(
      (product: Product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return products
}

export function ProductsGrid() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const search = searchParams.get("search")
  const [sortBy, setSortBy] = useState("default")

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", category, search],
    queryFn: () => fetchProducts(category || undefined, search || undefined),
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
            return 0
        }
      })
    : []

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 font-medium">{sortedProducts.length} products found</p>
        <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product: Product, index: number) => (
          <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
