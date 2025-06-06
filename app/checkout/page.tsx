import { CheckoutForm } from "@/components/checkout/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Checkout</h1>
        <CheckoutForm />
      </div>
    </div>
  )
}
