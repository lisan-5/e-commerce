import { NewArrivalsGrid } from "@/components/products/new-arrivals-grid"

export default function NewArrivalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">New Arrivals</h1>
        <p className="text-gray-600">Check out our latest products</p>
      </div>

      <NewArrivalsGrid />
    </div>
  )
}
