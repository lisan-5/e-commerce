"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

async function searchProducts(query: string) {
  if (!query.trim()) return []
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  return products.filter(
    (product: Product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  )
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  const { data: results = [], isLoading } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => searchProducts(debouncedQuery),
    enabled: debouncedQuery.length > 0,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-gray-400" />
            <form onSubmit={handleSearch} className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-lg outline-none"
                autoFocus
              />
            </form>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {isLoading && debouncedQuery && <div className="p-6 text-center text-gray-500">Searching...</div>}

          {results.length > 0 && (
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-4">{results.length} results found</div>
              <div className="space-y-3">
                {results.slice(0, 8).map((product: Product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={48}
                      height={48}
                      className="object-contain bg-gray-50 rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 line-clamp-1">{product.title}</div>
                      <div className="text-sm text-gray-500 capitalize">{product.category}</div>
                      <div className="text-amber-800 font-semibold">${product.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {debouncedQuery && !isLoading && results.length === 0 && (
            <div className="p-6 text-center text-gray-500">No products found for "{debouncedQuery}"</div>
          )}
        </div>
      </div>
    </div>
  )
}
