"use client"

import Link from "next/link"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/types/product"

async function fetchAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products")
  return response.json()
}

export function CategoryProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: fetchAllProducts,
  })

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-amber-900 mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </div>
    )
  }

  const groupedProducts = products?.reduce((acc: Record<string, Product[]>, product: Product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <div className="space-y-12">
      {Object.entries(groupedProducts || {}).map(([category, categoryProducts]) => (
        <div key={category}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-amber-900 capitalize">{category}</h2>
            <Link
              href={`/products?category=${encodeURIComponent(category)}`}
              className="text-amber-800 hover:text-amber-900 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.slice(0, 8).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
