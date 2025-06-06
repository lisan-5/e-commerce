"use client"

import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/types/product"

// Create additional mock products to supplement the API
const mockProducts: Product[] = [
  {
    id: 101,
    title: "Premium Wireless Headphones",
    price: 89.99,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    rating: { rate: 4.6, count: 234 },
  },
  {
    id: 102,
    title: "Elegant Gold Necklace",
    price: 129.99,
    description: "Beautiful 18k gold plated necklace perfect for special occasions.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
    rating: { rate: 4.8, count: 156 },
  },
  {
    id: 103,
    title: "Smart Fitness Watch",
    price: 199.99,
    description: "Advanced fitness tracking watch with heart rate monitor and GPS.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    rating: { rate: 4.5, count: 189 },
  },
  {
    id: 104,
    title: "Designer Leather Handbag",
    price: 159.99,
    description: "Luxurious leather handbag with elegant design and spacious interior.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    rating: { rate: 4.7, count: 98 },
  },
  {
    id: 105,
    title: "Professional Camera Lens",
    price: 299.99,
    description: "High-quality camera lens for professional photography enthusiasts.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop",
    rating: { rate: 4.9, count: 67 },
  },
  {
    id: 106,
    title: "Vintage Leather Jacket",
    price: 179.99,
    description: "Classic vintage-style leather jacket for men with premium quality.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    rating: { rate: 4.4, count: 145 },
  },
  {
    id: 107,
    title: "Diamond Stud Earrings",
    price: 249.99,
    description: "Sparkling diamond stud earrings perfect for any occasion.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
    rating: { rate: 4.8, count: 203 },
  },
  {
    id: 108,
    title: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-precision wireless gaming mouse with customizable RGB lighting.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    rating: { rate: 4.6, count: 312 },
  },
  {
    id: 109,
    title: "Luxury Silk Scarf",
    price: 89.99,
    description: "Premium silk scarf with elegant patterns and luxurious feel.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
    rating: { rate: 4.7, count: 124 },
  },
  {
    id: 110,
    title: "Bluetooth Speaker",
    price: 59.99,
    description: "Portable Bluetooth speaker with crystal clear sound and long battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    rating: { rate: 4.5, count: 287 },
  },
  {
    id: 111,
    title: "Artisan Coffee Mug Set",
    price: 34.99,
    description: "Handcrafted ceramic coffee mug set perfect for coffee enthusiasts.",
    category: "home & garden",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
    rating: { rate: 4.6, count: 156 },
  },
  {
    id: 112,
    title: "Premium Yoga Mat",
    price: 49.99,
    description: "Non-slip yoga mat with superior cushioning and eco-friendly materials.",
    category: "sports & outdoors",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
    rating: { rate: 4.8, count: 198 },
  },
  {
    id: 113,
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    category: "sports & outdoors",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
    rating: { rate: 4.7, count: 234 },
  },
  {
    id: 114,
    title: "Organic Face Cream",
    price: 39.99,
    description: "Natural organic face cream with anti-aging properties and vitamin E.",
    category: "beauty & personal care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    rating: { rate: 4.9, count: 167 },
  },
  {
    id: 115,
    title: "LED Desk Lamp",
    price: 69.99,
    description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
    category: "home & garden",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    rating: { rate: 4.5, count: 143 },
  },
  {
    id: 116,
    title: "Bamboo Cutting Board Set",
    price: 29.99,
    description: "Eco-friendly bamboo cutting board set with different sizes for all your kitchen needs.",
    category: "home & garden",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
    rating: { rate: 4.6, count: 189 },
  },
]

async function fetchAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products")
  const apiProducts = await response.json()
  return [...apiProducts, ...mockProducts]
}

export function MoreProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["all-products-extended"],
    queryFn: fetchAllProducts,
  })

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">More Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
          ))}
        </div>
      </section>
    )
  }

  // Show more products including the new ones
  const additionalProducts = products?.slice(-16) || []

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-amber-50/50 to-orange-50/50">
      <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">More Amazing Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {additionalProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
