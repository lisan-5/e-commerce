import { ProductDetail } from "@/components/products/product-detail"
import { RelatedProducts } from "@/components/products/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail productId={params.id} />
      <div className="mt-16">
        <RelatedProducts productId={params.id} />
      </div>
    </div>
  )
}
