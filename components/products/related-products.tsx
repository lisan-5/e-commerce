"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "./product-card"
import type { Product } from "@/types/product"

// Update related products to show more items
async function fetchRelatedProducts(category: string, excludeId: string) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const products = await response.json()
  return products.filter((product: Product) => product.id.toString() !== excludeId).slice(0, 8)
}

interface RelatedProductsProps {
  productId: string
}

async function fetchProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  return response.json()
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  })

  const { data: relatedProducts, isLoading } = useQuery({
    queryKey: ["related-products", product?.category, productId],
    queryFn: () => fetchRelatedProducts(product.category, productId),
    enabled: !!product?.category,
  })

  if (isLoading || !relatedProducts?.length) {
    return null
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-amber-900 mb-8">Related Products</h2>
      {/* Also update the grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
