import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MessageCircle, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-float"></div>
        <div
          className="absolute top-16 right-10 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-16 right-1/3 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-float"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Enhanced Brand Section */}
          <div className="animate-fade-in-up text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <h3 className="text-2xl lg:text-3xl font-black gradient-text mr-2">Shemach</h3>
              <span className="text-xl">🛍️</span>
            </div>
            <p className="text-amber-100 mb-6 leading-relaxed text-sm lg:text-base">
              Your trusted online marketplace for premium quality products and exceptional shopping experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              {[
                { icon: Facebook, color: "from-blue-600 to-blue-700", hover: "hover:from-blue-700 hover:to-blue-800" },
                { icon: Twitter, color: "from-sky-500 to-sky-600", hover: "hover:from-sky-600 hover:to-sky-700" },
                {
                  icon: Instagram,
                  color: "from-pink-500 to-purple-600",
                  hover: "hover:from-pink-600 hover:to-purple-700",
                },
              ].map(({ icon: Icon, color, hover }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-3 bg-gradient-to-r ${color} ${hover} rounded-xl transition-all duration-500 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-xl group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-4 h-4 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Customer Service Section */}
          <div className="animate-fade-in-up text-center md:text-left" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-bold mb-4 text-amber-200 flex items-center justify-center md:justify-start">
              Customer Service
            </h4>
            <div className="space-y-2">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/shipping", label: "Shipping Info" },
                { href: "/returns", label: "Returns" },
                { href: "/faq", label: "FAQ" },
              ].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-amber-100 hover:text-white transition-all duration-300 hover:translate-x-2 text-sm lg:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Developer Section */}
          <div className="animate-fade-in-up text-center md:text-left" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-bold mb-4 text-amber-200 flex items-center justify-center md:justify-start">
              Developer
            </h4>
            <div className="space-y-2">
              {[
                {
                  href: "https://t.me/ligator",
                  label: "Telegram",
                  icon: MessageCircle,
                  color: "from-blue-500 to-blue-600",
                  external: true,
                },
                {
                  href: "mailto:lisan5abay@gmail.com",
                  label: "Email",
                  icon: Mail,
                  color: "from-red-500 to-red-600",
                  external: false,
                },
                {
                  href: "https://github.com/lisan-5",
                  label: "GitHub",
                  icon: Github,
                  color: "from-gray-700 to-gray-800",
                  external: true,
                },
              ].map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-center md:justify-start space-x-2 text-amber-100 hover:text-white transition-all duration-300 hover:translate-x-2 text-sm lg:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`p-1.5 bg-gradient-to-r ${link.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <link.icon className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div
          className="border-t border-amber-700/50 mt-8 pt-6 text-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-gradient-to-r from-transparent via-amber-700/30 to-transparent h-px w-full mb-4"></div>
          <div className="bg-gradient-to-r from-amber-800/50 to-orange-800/50 backdrop-blur-sm rounded-xl p-3 inline-block">
            <p className="text-amber-100 text-xs sm:text-sm font-medium">
              © 2025 Lisanegebriel Abay Kebedew. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
