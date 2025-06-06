"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface CartNotificationProps {
  show: boolean
  productName: string
  onClose: () => void
}

export function CartNotification({ show, productName, onClose }: CartNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2">
      <CheckCircle className="w-5 h-5" />
      <span>Added "{productName}" to cart!</span>
    </div>
  )
}
