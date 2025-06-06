"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCartStore } from "@/store/cart-store"

export function CartItems() {
  const { items, updateQuantity, removeItem } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-4">
          <Image
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&h=200&fit=crop"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto opacity-50 rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = "https://via.placeholder.com/200x200/d2b48c/8b4513?text=Empty+Cart"
            }}
          />
        </div>
        <p className="text-gray-500 text-lg">Your cart is empty</p>
        <p className="text-gray-400 mt-2">Add some products to get started</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 relative bg-gray-50 rounded">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-contain p-2 rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=80&width=80&text=${encodeURIComponent(item.title.slice(0, 10))}`
                }}
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{item.title}</h3>
              <p className="text-amber-800 font-bold">${item.price}</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="text-right">
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 mt-2">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
