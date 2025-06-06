import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/types/product"

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            }
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== productId),
            }
          }
          return {
            items: state.items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
          }
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
)
