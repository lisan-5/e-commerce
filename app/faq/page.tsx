"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. We also offer overnight shipping for urgent orders.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all items in original condition. Items must be unworn, unwashed, and in original packaging with tags attached.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to select international destinations. Shipping rates and delivery times vary by location. International orders may be subject to customs duties.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for secure and convenient checkout.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can change or cancel your order within 1 hour of placing it. After that, orders enter processing and cannot be modified. Please contact us immediately if you need to make changes.",
  },
  {
    question: "Do you offer price matching?",
    answer:
      "We strive to offer competitive prices. While we don't have a formal price matching policy, we regularly review our prices to ensure they're fair and competitive.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click the 'Create Account' link in the header or during checkout. You'll need to provide your name, email address, and create a password. Having an account makes checkout faster and lets you track orders.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard SSL encryption to protect your personal and payment information. We never store your credit card details on our servers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "If you receive a damaged item, please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund at no cost to you.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about shopping with Shemach</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-amber-800" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-800" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <a
            href="/contact"
            className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
