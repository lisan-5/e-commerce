"use client"

import type React from "react"

import { useState } from "react"
import { useCartStore } from "@/store/cart-store"
import { CreditCard, Lock } from "lucide-react"

export function CartSummary() {
  const { items } = useCartStore()
  const [showCardForm, setShowCardForm] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  })

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false)
      setShowCardForm(false)
      setShowConfirmation(true)
    }, 1500)
  }

  const handleProceedToCheckout = () => {
    setShowCardForm(true)
  }

  if (showConfirmation) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">We'll get back to you soon regarding your order.</p>
          <button
            onClick={() => setShowConfirmation(false)}
            className="bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Return to Order Summary
          </button>
        </div>
      </div>
    )
  }

  if (showCardForm) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
          <CreditCard className="mr-2 w-5 h-5" />
          Enter Card Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="John Doe"
              value={formData.cardName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          </div>

          <div className="flex items-center text-xs text-gray-500 mb-4">
            <Lock className="w-4 h-4 mr-1 text-green-600" />
            <span>Your payment information is secure and encrypted</span>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => setShowCardForm(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Submit Payment"}
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-amber-900 mb-3">Order Summary</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t pt-2">
          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {subtotal < 50 && (
        <p className="text-sm text-gray-600 mt-3">Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>
      )}

      <button
        onClick={handleProceedToCheckout}
        className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg mt-4 transition-colors"
      >
        Proceed to Checkout
      </button>

      <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-2 flex items-center">
          <span className="mr-2">💬</span>
          Need Help? Contact Me
        </h3>
        <div className="space-y-1 text-sm">
          <div className="flex items-center space-x-2">
            <span>📱</span>
            <span className="text-gray-700">Telegram:</span>
            <a
              href="https://t.me/ligator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              @ligator
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <span className="text-gray-700">Email:</span>
            <a href="mailto:lisan5abay@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
              lisan5abay@gmail.com
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-1">
            Feel free to reach out for any questions about your order or our products!
          </p>
        </div>
      </div>
    </div>
  )
}
