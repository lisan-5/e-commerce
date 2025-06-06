"use client"

import { useQuery } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"

async function fetchCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories")
  return response.json()
}

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category")

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  })

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-amber-900 mb-4">Filters</h3>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={!selectedCategory}
              onChange={() => handleCategoryChange("all")}
              className="text-amber-800 focus:ring-amber-500"
            />
            <span className="ml-2 text-gray-700">All Categories</span>
          </label>
          {categories?.map((category: string) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="text-amber-800 focus:ring-amber-500"
              />
              <span className="ml-2 text-gray-700 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="text-amber-800 focus:ring-amber-500" />
            <span className="ml-2 text-gray-700">Under $25</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="text-amber-800 focus:ring-amber-500" />
            <span className="ml-2 text-gray-700">$25 - $50</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="text-amber-800 focus:ring-amber-500" />
            <span className="ml-2 text-gray-700">$50 - $100</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="text-amber-800 focus:ring-amber-500" />
            <span className="ml-2 text-gray-700">Over $100</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center">
              <input type="checkbox" className="text-amber-800 focus:ring-amber-500" />
              <span className="ml-2 text-gray-700">{rating}+ Stars</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
