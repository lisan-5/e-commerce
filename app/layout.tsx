import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "🛍️ Shemach - Your Premium Shopping Destination",
  description:
    "Discover amazing products at Shemach - Your trusted online marketplace with incredible deals and premium quality items",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🛍️</text></svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🛍️</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🛍️</text></svg>",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🛍️</text></svg>"
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="h-14"></div> {/* Reduced spacer height */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
