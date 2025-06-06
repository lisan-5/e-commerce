"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Amazing quality products and super fast delivery! I've been shopping here for months and never disappointed.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment:
      "Great customer service and competitive prices. The electronics section has everything I need for my tech setup.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Davis",
    rating: 5,
    comment: "Love the variety of products available. The jewelry collection is absolutely stunning and affordable!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    // Adjust testimonials section spacing
    <section className="py-10 sm:py-12 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Update heading and description */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-3">What Our Customers Say</h2>
          <p className="text-base sm:text-lg text-gray-600">Real reviews from real customers</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
            </button>

            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover-lift">
                      <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-6 animate-pulse-slow" />
                      <p className="text-base sm:text-lg text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.comment}"
                      </p>

                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-3">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover hover-glow"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                          <div className="text-gray-600 text-xs sm:text-sm">Verified Customer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-600 scale-125" : "bg-amber-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
