"use client"

import { useState } from "react"
import { CreditCard, Building2 } from "lucide-react"

const ethiopianBanks = [
  "Commercial Bank of Ethiopia",
  "Dashen Bank",
  "Bank of Abyssinia",
  "Wegagen Bank",
  "United Bank",
  "Nib International Bank",
  "Cooperative Bank of Oromia",
  "Lion International Bank",
  "Zemen Bank",
  "Bunna International Bank",
  "Berhan International Bank",
  "Abay Bank",
  "Addis International Bank",
  "Debub Global Bank",
  "Enat Bank",
  "Gadaa Bank",
  "Goh Betoch Bank",
  "Hijra Bank",
  "Shabelle Bank",
  "Siinqee Bank",
]

export function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank)
    alert(`${bank} integration coming soon! We're working hard to bring you seamless banking integration.`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-amber-900 mb-6">Payment Method</h2>

      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selectedMethod === "card"}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="text-amber-800"
            />
            <CreditCard className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Credit/Debit Card</span>
          </label>
        </div>

        <div>
          <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={selectedMethod === "bank"}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="text-amber-800"
            />
            <Building2 className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Ethiopian Bank Transfer</span>
          </label>
        </div>

        {selectedMethod === "bank" && (
          <div className="ml-8 space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Bank</label>
            <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
              {ethiopianBanks.map((bank) => (
                <button
                  key={bank}
                  onClick={() => handleBankSelect(bank)}
                  className="text-left p-3 border border-gray-200 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-colors"
                >
                  {bank}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedMethod === "card" && (
          <div className="ml-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">
              💳 Credit/Debit card payment integration coming soon! We're working on secure payment processing.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
