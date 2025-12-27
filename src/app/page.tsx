export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Carvohub
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
          Your personal AI-assisted garage manager. Keep track of your vehicles, maintenance, and more with intelligent insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#download"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Download Now
          </a>
          <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-400">Get intelligent recommendations for maintenance and repairs.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-400">Track parts, tools, and supplies in your garage.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Vehicle Support</h3>
              <p className="text-gray-400">Manage multiple vehicles with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Download Carvohub</h2>
          <p className="text-xl mb-12 text-gray-300">Available on Android and iOS. Start managing your garage today!</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://play.google.com/store"
              className="bg-black hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition-colors border border-gray-600"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm11.046-6.905c0 .0001 0 .0001 0 0zm-11.046 0c0 .0001 0 .0001 0 0zm-.047-1.261c-.1641-.6564-.6564-.6564-.6564-.6564s-.4923 0-.6564.6564c-.0821.3282-.3282.5743-.6564.6564-.6564.0821-.6564.4923-.6564.6564s0 .4923.6564.6564c.3282.0821.5743.3282.6564.6564.1641.6564.6564.6564.6564.6564s.4923 0 .6564-.6564c.0821-.3282.3282-.5743.6564-.6564.6564-.0821.6564-.4923.6564-.6564s0-.4923-.6564-.6564c-.3282-.0821-.5743-.3282-.6564-.6564zm11.093 1.261c-.1641.6564-.6564.6564-.6564.6564s-.4923 0-.6564-.6564c-.0821-.3282-.3282-.5743-.6564-.6564-.6564-.0821-.6564-.4923-.6564-.6564s0-.4923.6564-.6564c.3282-.0821.5743-.3282.6564-.6564.1641-.6564.6564-.6564.6564-.6564s.4923 0 .6564.6564c.0821.3282.3282.5743.6564.6564.6564.0821.6564.4923.6564.6564s0 .4923-.6564.6564c-.3282.0821-.5743.3282-.6564.6564zm-4.047-3.048c-1.476 0-2.676.6564-3.427 1.524-.7506-.8676-1.951-1.524-3.427-1.524-2.196 0-3.976 1.78-3.976 3.976 0 3.224 3.284 5.856 7.403 9.512.6564.5743 1.524.5743 2.18 0 4.119-3.656 7.403-6.288 7.403-9.512 0-2.196-1.78-3.976-3.976-3.976z"/>
              </svg>
              Download for Android
            </a>
            <a
              href="https://apps.apple.com/app"
              className="bg-black hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition-colors border border-gray-600"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}