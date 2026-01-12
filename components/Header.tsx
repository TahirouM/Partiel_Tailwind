'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold font-['Rubik'] text-gray-900">
            Brainwave.io
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-10 text-base font-semibold font-['Poppins'] text-gray-900">
            <a href="#" className="hover:text-indigo-600 transition">Demos</a>
            <a href="#" className="hover:text-indigo-600 transition">Pages</a>
            <a href="#" className="hover:text-indigo-600 transition">Support</a>
            <a href="#" className="hover:text-indigo-600 transition">Contact</a>
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden lg:block bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-bold font-['Poppins'] hover:bg-indigo-700 transition whitespace-nowrap">
            Buy now - Starting at $99
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-indigo-600 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-base font-semibold font-['Poppins'] text-gray-900 hover:text-indigo-600 transition">Demos</a>
              <a href="#" className="text-base font-semibold font-['Poppins'] text-gray-900 hover:text-indigo-600 transition">Pages</a>
              <a href="#" className="text-base font-semibold font-['Poppins'] text-gray-900 hover:text-indigo-600 transition">Support</a>
              <a href="#" className="text-base font-semibold font-['Poppins'] text-gray-900 hover:text-indigo-600 transition">Contact</a>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-bold font-['Poppins'] hover:bg-indigo-700 transition w-full">
                Buy now - Starting at $99
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
