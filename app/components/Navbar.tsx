import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center px-6 py-3 h-16 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 select-none">
                <Image src="/file.svg" alt="PDF Merge Clerk Logo" width={32} height={32} />
                <span className="text-lg font-semibold tracking-tight text-gray-800">PDF Merge Clerk</span>
            </div>
            <nav className="flex items-center gap-6 ml-auto">
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
        </header>
    );
};
export default Navbar;