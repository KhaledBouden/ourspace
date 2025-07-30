'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-pink-600 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
            OurSpace
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-pink-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/scrapbook" 
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Scrapbook
              </Link>
              <Link 
                href="/dates" 
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Date Planner
              </Link>
              <Link 
                href="/memories" 
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Memories
              </Link>
              <Link 
                href="/goals" 
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Goals
              </Link>
              <Link 
                href="/gratitude" 
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Gratitude
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}