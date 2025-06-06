"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Star, Users, ArrowRight, Sparkles, Zap, Gift } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden min-h-screen flex items-center py-8">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-30 animate-blob"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-300 to-yellow-200 rounded-full opacity-25 animate-blob"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-amber-400 to-red-300 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Enhanced pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23f59e0b&quot; fillOpacity=&quot;.08&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Enhanced Content - Made Larger */}
          <div className="text-center lg:text-left animate-slide-in-left">
            {/* Enhanced trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 animate-fade-in-up">
              <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
                <span className="ml-2 text-gray-700 font-bold text-sm sm:text-base">10,000+ customers</span>
              </div>
            </div>

            {/* Enhanced main heading - Made Much Larger */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight text-shadow">
              <span className="gradient-text block animate-fade-in-up">Discover</span>
              <span className="text-amber-900 block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Amazing Products
              </span>
              <span className="text-amber-700 block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                at Shemach
              </span>
            </h1>

            {/* Enhanced description - Made Larger */}
            <p
              className="text-lg sm:text-xl lg:text-2xl text-amber-800 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0 animate-fade-in-up font-medium"
              style={{ animationDelay: "0.6s" }}
            >
              Experience premium shopping with our curated collection of quality products at unbeatable prices. Your
              perfect shopping journey starts here!
            </p>

            {/* Enhanced CTA Buttons - Made Larger */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link href="/products" className="btn-primary-large group relative overflow-hidden">
                <div className="flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 mr-3 group-hover:animate-bounce-gentle" />
                  <span className="font-bold text-lg">Shop Now</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
              <Link href="/categories" className="btn-secondary-large group relative overflow-hidden">
                <div className="flex items-center justify-center">
                  <Sparkles className="w-6 h-6 mr-3 group-hover:animate-wiggle" />
                  <span className="font-bold text-lg">Browse Categories</span>
                </div>
              </Link>
            </div>

            {/* Enhanced stats with icons - Made Larger */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg group hover:scale-105 transition-transform duration-300">
                <Users className="w-5 h-5 text-blue-600 group-hover:animate-pulse" />
                <span className="text-gray-700 font-semibold">10K+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg group hover:scale-105 transition-transform duration-300">
                <Gift className="w-5 h-5 text-green-600 group-hover:animate-pulse" />
                <span className="text-gray-700 font-semibold">1000+ Products</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg group hover:scale-105 transition-transform duration-300">
                <Zap className="w-5 h-5 text-purple-600 group-hover:animate-pulse" />
                <span className="text-gray-700 font-semibold">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image with Epic Animation - Made Larger */}
          <div className="relative animate-slide-in-right perspective-1000">
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-3xl blur-3xl opacity-30 animate-pulse-slow"></div>

            {/* Add floating bubbles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-6 h-6 bg-amber-300/60 rounded-full animate-bubble-float"></div>
              <div
                className="absolute top-20 right-16 w-8 h-8 bg-orange-300/50 rounded-full animate-bubble-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-32 left-8 w-4 h-4 bg-yellow-300/70 rounded-full animate-bubble-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-16 right-12 w-7 h-7 bg-amber-400/40 rounded-full animate-bubble-float"
                style={{ animationDelay: "3s" }}
              ></div>
              <div
                className="absolute top-1/2 left-6 w-3 h-3 bg-orange-400/60 rounded-full animate-bubble-float"
                style={{ animationDelay: "4s" }}
              ></div>
              <div
                className="absolute top-1/3 right-8 w-5 h-5 bg-yellow-400/50 rounded-full animate-bubble-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-12 w-4 h-4 bg-amber-200/70 rounded-full animate-bubble-float"
                style={{ animationDelay: "2.5s" }}
              ></div>
              <div
                className="absolute top-3/4 right-20 w-3 h-3 bg-orange-200/80 rounded-full animate-bubble-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            {/* Moving corner animations */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top-left corner animation */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-br-full animate-corner-sweep origin-top-left"></div>

              {/* Top-right corner animation */}
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-400/30 to-red-400/30 rounded-bl-full animate-corner-sweep origin-top-right"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Bottom-left corner animation */}
              <div
                className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-400/30 to-amber-400/30 rounded-tr-full animate-corner-sweep origin-bottom-left"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Bottom-right corner animation */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-red-400/30 to-pink-400/30 rounded-tl-full animate-corner-sweep origin-bottom-right"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>

            <div className="relative overflow-hidden shadow-2xl rounded-3xl corner-animation">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=600&fit=crop"
                alt="Premium Shopping Experience"
                width={700}
                height={600}
                className="relative rounded-3xl hover-lift w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.onerror = null
                  target.src = "https://via.placeholder.com/700x600/d2b48c/8b4513?text=Shemach+Premium+Shopping"
                }}
              />
            </div>

            {/* Enhanced floating elements - Made Larger */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce-gentle shadow-xl">
              🆕 New Arrivals!
            </div>
            <div
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce-gentle shadow-xl"
              style={{ animationDelay: "1s" }}
            >
              🔥 Hot Deals!
            </div>
            <div
              className="absolute top-1/2 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-float shadow-lg"
              style={{ animationDelay: "2s" }}
            >
              ⚡ Fast Ship
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
