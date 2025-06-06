import { ProductsGrid } from "@/components/products/products-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { SearchBar } from "@/components/products/search-bar"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">All Products</h1>
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>
        <div className="lg:col-span-3">
          <ProductsGrid />
        </div>
      </div>
    </div>
  )
}
