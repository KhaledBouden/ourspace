
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-pink-600" style={{fontFamily: 'Pacifico, serif'}}>
              OurSpace
            </h1>
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/scrapbook" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Scrapbook
              </Link>
              <Link href="/dates" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Date Planner
              </Link>
              <Link href="/memories" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Memories
              </Link>
              <Link href="/goals" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Goals
              </Link>
              <Link href="/gratitude" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Gratitude
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Romantic%20couple%20sitting%20together%20on%20a%20cozy%20blanket%20in%20a%20beautiful%20meadow%20with%20soft%20sunlight%20filtering%20through%20trees%2C%20dreamy%20atmosphere%2C%20warm%20golden%20hour%20lighting%2C%20peaceful%20and%20intimate%20setting%2C%20soft%20pastel%20colors%2C%20minimalist%20background%20perfect%20for%20text%20overlay%20on%20the%20left%20side%2C%20creating%20a%20serene%20and%20loving%20mood%20for%20couples&width=1200&height=800&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Our Love Story
              <span className="text-pink-600 block">Begins Here</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A private space to capture memories, plan adventures, share dreams, and express gratitude together.
            </p>
            <div className="flex space-x-4">
              <Link href="/scrapbook" className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap">
                Start Our Journey
              </Link>
              <Link href="/memories" className="bg-white/80 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors cursor-pointer whitespace-nowrap">
                View Memories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Everything We Need</h3>
            <p className="text-xl text-gray-600">All our favorite moments and plans in one beautiful space</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scrapbook */}
            <Link href="/scrapbook" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-pink-100">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-book-open-line text-white text-2xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Digital Scrapbook</h4>
                <p className="text-gray-600 mb-4">Create beautiful photo albums and memory collections together</p>
                <div className="flex items-center text-pink-600 font-semibold">
                  <span>Explore</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </Link>

            {/* Date Planner */}
            <Link href="/dates" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-purple-100">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-calendar-event-line text-white text-2xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Date Planner</h4>
                <p className="text-gray-600 mb-4">Plan romantic dates and special moments together</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span>Plan Now</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </Link>

            {/* Memory Space */}
            <Link href="/memories" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-image-line text-white text-2xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Memory Space</h4>
                <p className="text-gray-600 mb-4">Store and revisit your favorite moments and milestones</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>View All</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </Link>

            {/* Goal Sharing */}
            <Link href="/goals" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-green-100">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-flag-line text-white text-2xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Shared Goals</h4>
                <p className="text-gray-600 mb-4">Set and track your dreams and aspirations together</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Set Goals</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </Link>

            {/* Gratitude */}
            <Link href="/gratitude" className="group cursor-pointer">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-orange-100">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-heart-line text-white text-2xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Gratitude Journal</h4>
                <p className="text-gray-600 mb-4">Share daily appreciations and thankful moments</p>
                <div className="flex items-center text-orange-600 font-semibold">
                  <span>Share Thanks</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </Link>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-dashboard-line text-white text-2xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Our Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Memories Created</span>
                  <span className="font-semibold text-gray-800">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dates Planned</span>
                  <span className="font-semibold text-gray-800">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Goals Achieved</span>
                  <span className="font-semibold text-gray-800">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gratitude Notes</span>
                  <span className="font-semibold text-gray-800">134</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Recent Activity</h3>
            <p className="text-xl text-gray-600">What we've been up to lately</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-heart-fill text-white text-sm"></i>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">New Gratitude</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-600">"Grateful for our cozy movie night and your amazing pasta!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="ri-calendar-event-fill text-white text-sm"></i>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Date Planned</p>
                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
              </div>
              <p className="text-gray-600">Sunset picnic at the park this Saturday</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-image-fill text-white text-sm"></i>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Memory Added</p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
              </div>
              <p className="text-gray-600">Beach trip photos from our weekend getaway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pink-600 mb-4" style={{fontFamily: 'Pacifico, serif'}}>
              OurSpace
            </h3>
            <p className="text-gray-600 mb-6">Your private space for love, memories, and dreams</p>
            <div className="flex justify-center space-x-6">
              <Link href="/scrapbook" className="text-gray-500 hover:text-pink-600 transition-colors cursor-pointer">
                Scrapbook
              </Link>
              <Link href="/dates" className="text-gray-500 hover:text-pink-600 transition-colors cursor-pointer">
                Dates
              </Link>
              <Link href="/memories" className="text-gray-500 hover:text-pink-600 transition-colors cursor-pointer">
                Memories
              </Link>
              <Link href="/goals" className="text-gray-500 hover:text-pink-600 transition-colors cursor-pointer">
                Goals
              </Link>
              <Link href="/gratitude" className="text-gray-500 hover:text-pink-600 transition-colors cursor-pointer">
                Gratitude
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
