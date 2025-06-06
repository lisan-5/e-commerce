"use client"

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">My Profile</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <p className="text-gray-900">{user.name}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-gray-900">{user.email}</p>
            </div>

            <div className="pt-4 border-t">
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-lg transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
