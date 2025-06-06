"use client"

import Image from "next/image"
import { Users, Award, Truck, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">About Shemach</h1>
          <p className="text-xl text-gray-600">Your trusted online shopping destination since 2020</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Shemach began with a simple mission: to make quality products accessible to everyone. We
              believe that great shopping experiences shouldn't be limited to premium markets.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we serve thousands of customers worldwide, offering everything from electronics and fashion to
              jewelry and home goods. Our commitment to quality, affordability, and customer satisfaction remains at the
              heart of everything we do.
            </p>
            <p className="text-gray-700">
              At Shemach, we're not just selling products – we're building relationships and creating positive shopping
              experiences that our customers can trust.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
              alt="About Shemach Team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = "https://via.placeholder.com/500x400/d2b48c/8b4513?text=About+Shemach"
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Customer First</h3>
            <p className="text-gray-600">We prioritize our customers' needs and satisfaction above everything else.</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Quality Products</h3>
            <p className="text-gray-600">We carefully curate our product selection to ensure quality and value.</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to get your products to you as soon as possible.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-amber-800" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Secure Shopping</h3>
            <p className="text-gray-600">Your personal information and payments are always protected and secure.</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            To provide an inclusive, user-friendly shopping platform that connects customers with the items they need at
            prices they can afford, while maintaining the highest standards of service and reliability.
          </p>
        </div>
      </div>
    </div>
  )
}
