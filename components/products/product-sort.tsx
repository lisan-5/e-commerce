"use client"

interface ProductSortProps {
  sortBy: string
  onSortChange: (sort: string) => void
}

export function ProductSort({ sortBy, onSortChange }: ProductSortProps) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <option value="default">Sort by</option>
      <option value="name">Name A-Z</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
    </select>
  )
}
