import { CategoriesGrid } from "@/components/categories/categories-grid"
import { CategoryProducts } from "@/components/categories/category-products"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">Shop by Categories</h1>
        <p className="text-gray-600">Explore our wide range of product categories</p>
      </div>

      <CategoriesGrid />
      <CategoryProducts />
    </div>
  )
}
