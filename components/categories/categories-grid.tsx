"use client"

import Link from "next/link"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"

async function fetchCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories")
  return response.json()
}

export function CategoriesGrid() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
        ))}
      </div>
    )
  }

  const categoryImages = {
    "men's clothing": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop",
    "women's clothing": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop",
    jewelery: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=300&fit=crop",
  }

  const categoryDescriptions = {
    "men's clothing": "Discover stylish and comfortable clothing for men",
    "women's clothing": "Explore our collection of women's fashion",
    jewelery: "Beautiful jewelry pieces for every occasion",
    electronics: "Latest gadgets and electronic devices",
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {categories?.map((category: string) => (
        <Link key={category} href={`/products?category=${encodeURIComponent(category)}`} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-square relative">
              <Image
                src={
                  categoryImages[category as keyof typeof categoryImages] ||
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" ||
                  "/placeholder.svg"
                }
                alt={category}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.onerror = null
                  target.src =
                    "https://via.placeholder.com/300x300/d2b48c/8b4513?text=" +
                    encodeURIComponent(category.substring(0, 10))
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-900 capitalize mb-2">{category}</h3>
              <p className="text-gray-600 text-sm">
                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
