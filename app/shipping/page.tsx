import { Truck, Clock, Package, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Shipping Information</h1>
          <p className="text-xl text-gray-600">Everything you need to know about our shipping policies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <Truck className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders over $50</p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <Clock className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">2-5 business days</p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <Package className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">Secure Packaging</h3>
            <p className="text-gray-600">Items arrive safely</p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <Shield className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">Tracking</h3>
            <p className="text-gray-600">Track your order</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Shipping Options</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900">Standard Shipping</h3>
                <p className="text-gray-600">5-7 business days - $9.99 (Free on orders over $50)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900">Express Shipping</h3>
                <p className="text-gray-600">2-3 business days - $19.99</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Overnight Shipping</h3>
                <p className="text-gray-600">1 business day - $39.99</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Processing Time</h2>
            <p className="text-gray-600 mb-4">
              Orders are typically processed within 1-2 business days. You will receive a confirmation email with
              tracking information once your order has shipped.
            </p>
            <p className="text-gray-600">
              Please note that processing times may be longer during peak seasons or promotional periods.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">International Shipping</h2>
            <p className="text-gray-600 mb-4">
              We currently ship to select international destinations. International shipping rates and delivery times
              vary by location.
            </p>
            <p className="text-gray-600">
              Please note that international orders may be subject to customs duties and taxes, which are the
              responsibility of the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
