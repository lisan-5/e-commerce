import { RotateCcw, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Returns & Exchanges</h1>
          <p className="text-xl text-gray-600">Easy returns and exchanges for your peace of mind</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <RotateCcw className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">30-Day Returns</h3>
            <p className="text-gray-600">Return items within 30 days</p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <CheckCircle className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">Easy Process</h3>
            <p className="text-gray-600">Simple return procedure</p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <Clock className="w-12 h-12 text-amber-800 mx-auto mb-4" />
            <h3 className="font-semibold text-amber-900 mb-2">Quick Refunds</h3>
            <p className="text-gray-600">Processed within 5-7 days</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Return Policy</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, you can
                return it within 30 days of delivery for a full refund or exchange.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800">Eligible for Return:</h4>
                    <ul className="text-green-700 mt-2 space-y-1">
                      <li>• Items in original condition with tags attached</li>
                      <li>• Unworn, unwashed, and undamaged items</li>
                      <li>• Items in original packaging</li>
                      <li>• Items purchased within the last 30 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">How to Return</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Us</h3>
                  <p className="text-gray-600">Email us at returns@shemach.com with your order number</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Get Return Label</h3>
                  <p className="text-gray-600">We'll send you a prepaid return shipping label</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ship It Back</h3>
                  <p className="text-gray-600">Package the item and attach the return label</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Get Your Refund</h3>
                  <p className="text-gray-600">Refund processed within 5-7 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Non-Returnable Items</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800">Cannot be returned:</h4>
                  <ul className="text-red-700 mt-2 space-y-1">
                    <li>• Personalized or customized items</li>
                    <li>• Items damaged by misuse</li>
                    <li>• Items without original tags or packaging</li>
                    <li>• Gift cards and digital products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
