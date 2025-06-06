import { WishlistItems } from "@/components/wishlist/wishlist-items"

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">My Wishlist</h1>
        <p className="text-gray-600">Save your favorite products for later</p>
      </div>

      <WishlistItems />
    </div>
  )
}
