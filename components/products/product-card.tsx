"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Eye, Zap } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { CartNotification } from "@/components/cart/cart-notification"
import { WishlistButton } from "@/components/ui/wishlist-button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const [showNotification, setShowNotification] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    setShowNotification(true)
  }

  const getBadge = () => {
    if (product.rating.rate >= 4.5) return { type: "popular" as const, text: "⭐ Popular" }
    if (product.price < 30) return { type: "sale" as const, text: "🔥 Great Deal" }
    if (product.id > 15) return { type: "new" as const, text: "✨ New" }
    return null
  }

  const badge = getBadge()

  return (
    <>
      <div
        className="group relative animate-fade-in-up perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/products/${product.id}`}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-700 border border-amber-100/50 relative">
            {badge && <Badge variant={badge.type}>{badge.text}</Badge>}
            <WishlistButton product={product} />

            <div className="aspect-square relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain p-3 sm:p-4 group-hover:scale-110 transition-all duration-700 group-hover:rotate-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.onerror = null
                  target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.title.substring(0, 20))}`
                }}
              />

              {/* Enhanced overlay */}
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-center justify-center animate-fade-in">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover-glow transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <Eye className="w-6 h-6 text-amber-800" />
                  </div>
                </div>
              )}

              {/* Quick action buttons */}
              <div
                className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-500 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              >
                <button
                  onClick={handleAddToCart}
                  className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 relative">
              {/* Product title */}
              <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 h-12 group-hover:text-amber-800 transition-colors text-sm sm:text-base leading-tight">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                        i < Math.floor(product.rating.rate)
                          ? "fill-yellow-400 text-yellow-400 scale-110"
                          : "text-gray-300"
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-2 font-medium">
                  {product.rating.rate} ({product.rating.count})
                </span>
              </div>

              {/* Price and action */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-amber-800 gradient-text">${product.price}</span>
                  {product.price < 30 && (
                    <span className="text-xs sm:text-sm text-green-600 font-bold animate-pulse">💰 Great Value!</span>
                  )}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 text-white p-3 sm:p-4 rounded-2xl transition-all duration-500 transform hover:scale-125 hover:rotate-12 shadow-xl hover:shadow-2xl group relative overflow-hidden"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce-gentle relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          </div>
        </Link>
      </div>

      <CartNotification
        show={showNotification}
        productName={product.title}
        onClose={() => setShowNotification(false)}
      />
    </>
  )
}
