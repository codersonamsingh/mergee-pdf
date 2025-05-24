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
            <div className="flex items-center gap-2 select-none">
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
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</a>
                <SignedOut>
                  <SignInButton>
                    <button className="w-full px-4 py-1.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition mt-2">Sign In</button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full px-4 py-1.5 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition mt-2">Sign Up</button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  {/* Remove UserButton (Gmail logo) from mobile dropdown */}
                </SignedIn>
              </nav>
            )}
        </header>
    );
};
export default Navbar;