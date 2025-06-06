import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("skeleton rounded-lg", className)} />
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export function CategorySkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300"></div>
      <div className="p-8 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  )
}
