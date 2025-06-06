import { DealsGrid } from "@/components/products/deals-grid"

export default function DealsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">Special Deals</h1>
        <p className="text-gray-600">Great products at amazing prices</p>
      </div>

      <DealsGrid />
    </div>
  )
}
