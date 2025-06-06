export function Newsletter() {
  return (
    <section className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-amber-100 mb-8">
            Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special
            offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <button className="bg-amber-700 hover:bg-amber-600 px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
