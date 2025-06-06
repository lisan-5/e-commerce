"use client"

import type React from "react"

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("search") || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (search) {
      params.set("search", search)
    } else {
      params.delete("search")
    }
    router.push(`/products?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  )
}
