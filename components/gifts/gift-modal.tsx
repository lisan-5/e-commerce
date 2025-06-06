"use client"

import type React from "react"

import { useState } from "react"
import { Gift, X, User } from "lucide-react"
import { useAuthStore } from "@/store/auth-store"
import type { Product } from "@/types/product"

interface GiftModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export function GiftModal({ isOpen, onClose, product }: GiftModalProps) {
  const [recipientUsername, setRecipientUsername] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { user, isAuthenticated } = useAuthStore()

  const handleSendGift = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAuthenticated) {
      alert("Please sign in to send gifts")
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert(`Gift sent to @${recipientUsername}! They will receive a notification about your thoughtful gift.`)
    setIsLoading(false)
    onClose()
    setRecipientUsername("")
    setMessage("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="w-6 h-6 text-amber-800" />
              <h2 className="text-xl font-bold text-gray-900">Send as Gift</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-12 h-12 object-contain bg-white rounded"
              />
              <div>
                <div className="font-medium text-gray-900 line-clamp-1">{product.title}</div>
                <div className="text-amber-800 font-semibold">${product.price}</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSendGift} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={recipientUsername}
                  onChange={(e) => setRecipientUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gift Message (Optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a personal message..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || !recipientUsername.trim()}
                className="flex-1 bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Gift"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
