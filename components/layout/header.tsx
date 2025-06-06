"use client"

import Link from "next/link"
import { ShoppingCart, Search, User, Menu, LogOut, Heart, X, ChevronDown, Zap } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import { useAuthStore } from "@/store/auth-store"
import { SearchModal } from "@/components/ui/search-modal"
import { useState, useEffect, useRef } from "react"

export function Header() {
  const { items } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()
  const { user, isAuthenticated, logout } = useAuthStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const userMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const customerServiceRef = useRef<HTMLDivElement>(null)

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Handle click outside to close menus
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
      if (customerServiceRef.current && !customerServiceRef.current.contains(event.target as Node)) {
        setIsCustomerServiceOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const customerServiceLinks = [
    { href: "/contact", label: "Contact Us", color: "from-blue-500 to-blue-600" },
    { href: "/shipping", label: "Shipping Info", color: "from-green-500 to-green-600" },
    { href: "/returns", label: "Returns", color: "from-purple-500 to-purple-600" },
    { href: "/faq", label: "FAQ", color: "from-orange-500 to-orange-600" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "nav-scrolled-solid shadow-2xl" : "nav-glass-solid shadow-xl"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Ultra Smooth Logo */}
            <Link href="/" className="relative group logo-smooth-hover">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  {/* Main logo text with ultra smooth gradient */}
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black logo-gradient-smooth relative z-10">
                    Shemach
                  </div>

                  {/* Smooth glow effect */}
                  <div className="absolute inset-0 text-xl sm:text-2xl lg:text-3xl font-black logo-glow-smooth opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                    Shemach
                  </div>

                  {/* Subtle floating particles */}
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:animate-float-gentle"></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 ease-out group-hover:animate-float-gentle"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </div>

                {/* Smooth shopping icon */}
                <div className="text-lg sm:text-xl lg:text-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:animate-bounce-ultra-gentle">
                  🛍️
                </div>
              </div>

              {/* Ultra smooth background glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/0 via-orange-400/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-orange-400/15 group-hover:to-amber-400/10 rounded-2xl transition-all duration-1000 ease-out blur-xl -z-10"></div>

              {/* Smooth border highlight */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-amber-300/20 group-hover:via-orange-300/30 group-hover:to-amber-300/20 rounded-xl transition-all duration-800 ease-out -z-10"></div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {[
                { href: "/products", label: "Products" },
                { href: "/categories", label: "Categories" },
                { href: "/deals", label: "Deals" },
              ].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-item-hover text-gray-800 font-semibold text-base group flex items-center space-x-1 px-3 py-2 rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{link.label}</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-500 group-hover:w-full rounded-full"></div>
                </Link>
              ))}

              {/* Enhanced Customer Service Dropdown */}
              <div className="relative" ref={customerServiceRef}>
                <button
                  onClick={() => setIsCustomerServiceOpen(!isCustomerServiceOpen)}
                  className="nav-item-hover flex items-center space-x-1 text-gray-800 font-semibold text-base group px-3 py-2 rounded-xl"
                >
                  <span>Customer Service</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-500 ${
                      isCustomerServiceOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>

                {isCustomerServiceOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 nav-glass-solid rounded-2xl shadow-2xl border border-amber-200/50 z-50 animate-slide-down overflow-hidden">
                    <div className="py-2">
                      {customerServiceLinks.map((link, index) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsCustomerServiceOpen(false)}
                          className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-800 hover:text-amber-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-500 group"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div
                            className={`p-1 bg-gradient-to-r ${link.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                          ></div>
                          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="nav-item-hover text-gray-800 font-semibold text-base group flex items-center space-x-1 px-3 py-2 rounded-xl"
              >
                <span>About</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-500 group-hover:w-full rounded-full"></div>
              </Link>
            </nav>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Enhanced Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="nav-button-hover p-2 sm:p-3 text-gray-800 rounded-xl group relative"
              >
                <Search className="w-5 h-5 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced Wishlist Button */}
              <Link href="/wishlist" className="nav-button-hover p-2 sm:p-3 text-gray-800 rounded-xl group relative">
                <Heart className="w-5 h-5 transition-all duration-300" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-gentle font-bold shadow-lg">
                    {wishlistItems.length}
                  </span>
                )}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Enhanced User Menu */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="nav-button-hover p-2 sm:p-3 text-gray-800 rounded-xl group relative"
                >
                  <User className="w-5 h-5 transition-all duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 nav-glass-solid rounded-2xl shadow-2xl border border-amber-200/50 z-50 animate-slide-down overflow-hidden">
                    {isAuthenticated ? (
                      <div className="py-2">
                        <div className="px-4 py-3 text-sm font-bold text-gray-800 border-b border-amber-200/50 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center space-x-1">
                          <span>Hello, {user?.name}!</span>
                        </div>
                        <Link
                          href="/profile"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-800 hover:text-amber-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 group"
                        >
                          <span className="font-medium">My Profile</span>
                        </Link>
                        <Link
                          href="/wishlist"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-800 hover:text-amber-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 group"
                        >
                          <span className="font-medium">My Wishlist</span>
                        </Link>
                        <button
                          onClick={() => {
                            logout()
                            setIsUserMenuOpen(false)
                          }}
                          className="w-full flex items-center space-x-2 px-4 py-3 text-sm text-gray-800 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 group"
                        >
                          <LogOut className="w-4 h-4 group-hover:animate-wiggle" />
                          <span className="font-medium">Sign Out</span>
                        </button>
                      </div>
                    ) : (
                      <div className="py-2">
                        <Link
                          href="/auth/login"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-800 hover:text-amber-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 group"
                        >
                          <span className="font-medium">Sign In</span>
                        </Link>
                        <Link
                          href="/auth/register"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-800 hover:text-amber-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 group"
                        >
                          <span className="font-medium">Create Account</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Enhanced Cart Button - Compact */}
              <Link
                href="/cart"
                className="nav-button-hover p-2 sm:p-3 text-gray-800 rounded-xl group relative flex-shrink-0"
              >
                <ShoppingCart className="w-5 h-5 transition-all duration-300" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-slow font-bold shadow-lg min-w-[20px] min-h-[20px]">
                    {itemCount}
                  </span>
                )}
                <Zap className="absolute -top-1 -right-1 w-2 h-2 text-yellow-500 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </Link>

              {/* Enhanced Mobile Menu Button */}
              <button
                className="lg:hidden nav-button-hover p-3 text-gray-800 rounded-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 animate-wiggle" />
                ) : (
                  <Menu className="w-5 h-5 hover:animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>

          {/* Menu Content */}
          <div ref={mobileMenuRef} className="relative z-50 mt-16">
            <div className="nav-glass-solid rounded-b-3xl mx-4 shadow-2xl border border-amber-200/50 animate-slide-down">
              <div className="py-6">
                <nav className="flex flex-col space-y-2">
                  {[
                    { href: "/products", label: "Products" },
                    { href: "/categories", label: "Categories" },
                    { href: "/deals", label: "Deals" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="mobile-menu-item flex items-center space-x-3 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}

                  {/* Enhanced Mobile Customer Service */}
                  <div className="px-6 py-4">
                    <div className="text-sm font-bold text-gray-900 mb-4 flex items-center space-x-2">
                      <span>Customer Service</span>
                    </div>
                    <div className="pl-6 space-y-3">
                      {customerServiceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center space-x-3 py-2 text-sm text-gray-700 hover:text-amber-800 transition-colors duration-300 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div
                            className={`p-1 bg-gradient-to-r ${link.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                          ></div>
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="mobile-menu-item flex items-center space-x-3 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">About</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
