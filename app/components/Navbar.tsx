"use client";

import React, { useState } from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="flex justify-between items-center px-6 py-3 h-16 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm relative">
            {/* Desktop Logo (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 select-none">
                <Image src="/file.svg" alt="PDF Merge Clerk Logo" width={32} height={32} />
                <span className="text-lg font-semibold tracking-tight text-gray-800">PDF Merge Clerk</span>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 ml-auto">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</a>
                <SignedOut>
                  <SignInButton>
                    <button className="px-4 py-1.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Sign In</button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-4 py-1.5 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">Sign Up</button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: 'ring-2 ring-blue-500' } }} />
                </SignedIn>
            </nav>
            {/* Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto z-20"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            {/* Mobile Dropdown */}
            {menuOpen && (
              <nav className="absolute top-full right-4 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col gap-2 p-4 md:hidden z-10 animate-fade-in">
                <SignedOut>
                  <div className="flex justify-end mb-2">
                    <SignInButton>
                      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition" aria-label="Sign In">
                        {/* User SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                        </svg>
                      </button>
                    </SignInButton>
                  </div>
                  <SignUpButton>
                    <button className="w-full px-4 py-1.5 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition mt-2">Sign Up</button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-end mb-2">
                    <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: 'ring-2 ring-blue-500' } }} />
                  </div>
                </SignedIn>
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</a>
              </nav>
            )}
            {/* Mobile Logo (only visible on mobile) */}
            <div className="flex md:hidden absolute left-4 bottom-2 items-center gap-2 select-none">
                <Image src="/file.svg" alt="PDF Merge Clerk Logo" width={28} height={28} />
                <span className="text-base font-semibold tracking-tight text-gray-800">PDF Merge Clerk</span>
            </div>
        </header>
    );
};
export default Navbar;