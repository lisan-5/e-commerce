import { ShoppingBag, Users, Star, Truck, Award, Shield } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
      color: "text-blue-600",
      bgColor: "from-blue-100 via-blue-50 to-blue-200",
      description: "Satisfied shoppers worldwide",
    },
    {
      icon: ShoppingBag,
      value: "1,000+",
      label: "Premium Products",
      color: "text-green-600",
      bgColor: "from-green-100 via-green-50 to-green-200",
      description: "Curated quality items",
    },
    {
      icon: Star,
      value: "4.8",
      label: "Average Rating",
      color: "text-yellow-600",
      bgColor: "from-yellow-100 via-yellow-50 to-yellow-200",
      description: "Excellent customer reviews",
    },
    {
      icon: Truck,
      value: "24/7",
      label: "Fast Delivery",
      color: "text-purple-600",
      bgColor: "from-purple-100 via-purple-50 to-purple-200",
      description: "Lightning-fast shipping",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-orange-400 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="responsive-text-3xl font-black text-amber-900 mb-6">
            Why Choose <span className="gradient-text">Shemach</span>?
          </h2>
          <p className="responsive-text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${stat.bgColor} rounded-3xl mb-6 group-hover:scale-125 transition-all duration-500 hover-glow shadow-xl relative overflow-hidden`}
              >
                <stat.icon
                  className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.color} group-hover:animate-bounce-gentle`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2 group-hover:text-amber-800 transition-colors duration-300 gradient-text">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-300">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="font-semibold text-gray-700">Secure Shopping</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-300">
            <Award className="w-6 h-6 text-purple-600" />
            <span className="font-semibold text-gray-700">Premium Quality</span>
          </div>
        </div>
      </div>
    </section>
  )
}
