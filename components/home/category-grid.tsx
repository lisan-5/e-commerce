"use client"

import Link from "next/link"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { ArrowRight, Sparkles } from "lucide-react"

async function fetchCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories")
  return response.json()
}

export function CategoryGrid() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  })

  if (isLoading) {
    return (
      <section className="container mx-auto container-padding section-padding">
        <h2 className="responsive-text-3xl font-black text-amber-900 text-center mb-12 animate-fade-in-up">
          Shop by Category
        </h2>
        <div className="responsive-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton rounded-2xl h-64 sm:h-80"></div>
          ))}
        </div>
      </section>
    )
  }

  const categoryImages = {
    "men's clothing": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "women's clothing": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop",
    jewelery: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
  }

  const categoryDescriptions = {
    "men's clothing": "Stylish & comfortable fashion for men",
    "women's clothing": "Elegant & trendy women's fashion",
    jewelery: "Beautiful jewelry for every occasion",
    electronics: "Latest gadgets & electronic devices",
  }

  return (
    <section className="container mx-auto container-padding section-padding bg-gradient-to-br from-amber-50/50 to-orange-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-24 h-24 bg-amber-400 rounded-full animate-blob"></div>
        <div
          className="absolute bottom-32 right-16 w-32 h-32 bg-orange-400 rounded-full animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-black text-amber-900 mb-4">
            Explore Our <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all categories, carefully curated just for you
          </p>
        </div>

        <div className="responsive-grid">
          {categories?.map((category: string, index: number) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift transition-all duration-700 border border-amber-100/50 relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={
                      categoryImages[category as keyof typeof categoryImages] ||
                      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={category}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700 group-hover:rotate-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.onerror = null
                      target.src =
                        "https://via.placeholder.com/300x300/d2b48c/8b4513?text=" +
                        encodeURIComponent(category.substring(0, 10))
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Hover action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500">
                      <ArrowRight className="w-6 h-6 text-amber-800" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-black text-amber-900 capitalize group-hover:text-amber-700 transition-colors duration-300">
                      {category}
                    </h3>
                    <Sparkles className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 group-hover:animate-wiggle transition-all duration-300" />
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                  </p>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
