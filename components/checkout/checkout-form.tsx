"use client"

import { useCartStore } from "@/store/cart-store"
import { PaymentMethods } from "./payment-methods"
import { CartSummary } from "@/components/cart/cart-summary"
import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function CheckoutForm() {
  const { items } = useCartStore()
  const { isAuthenticated } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, router])

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
        <button onClick={() => router.push("/products")} className="mt-4 btn-primary">
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Address"
              className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="City"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <PaymentMethods />
      </div>

      <div>
        <CartSummary />
      </div>
    </div>
  )
}
