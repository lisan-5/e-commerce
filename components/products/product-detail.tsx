"use client"

import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { Star, ShoppingCart, Heart, Minus, Plus, Gift } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { CartNotification } from "@/components/cart/cart-notification"
import { GiftModal } from "@/components/gifts/gift-modal"
import { useState } from "react"

async function fetchProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  return response.json()
}

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [showNotification, setShowNotification] = useState(false)
  const [showGiftModal, setShowGiftModal] = useState(false)
  const { addItem } = useCartStore()

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 animate-pulse aspect-square rounded-lg"></div>
        <div className="space-y-4">
          <div className="bg-gray-200 animate-pulse h-8 rounded"></div>
          <div className="bg-gray-200 animate-pulse h-4 rounded"></div>
          <div className="bg-gray-200 animate-pulse h-20 rounded"></div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setShowNotification(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square relative bg-amber-50 rounded-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-6 rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(product.title.substring(0, 30))}`
            }}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating.rate) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-amber-800 mb-4">${product.price}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
            <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm capitalize">
              {product.category}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-gray-100">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => setShowGiftModal(true)}
              className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Gift className="w-5 h-5" />
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <CartNotification
        show={showNotification}
        productName={product.title}
        onClose={() => setShowNotification(false)}
      />

      <GiftModal isOpen={showGiftModal} onClose={() => setShowGiftModal(false)} product={product} />
    </>
  )
}
