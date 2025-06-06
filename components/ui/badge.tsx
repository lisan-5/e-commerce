import type React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "new" | "sale" | "popular" | "trending"
  className?: string
}

export function Badge({ children, variant = "new", className }: BadgeProps) {
  const variants = {
    new: "bg-green-500 text-white",
    sale: "bg-red-500 text-white",
    popular: "bg-blue-500 text-white",
    trending: "bg-purple-500 text-white",
  }

  return <span className={cn("product-badge", variants[variant], className)}>{children}</span>
}
