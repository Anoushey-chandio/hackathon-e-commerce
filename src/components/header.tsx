'use client';
import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 shadow-md w-full h-24 z-50">
      <div className="container max-w-[1440px] mx-auto flex items-center justify-between py-10 px-4 sm:px-8 lg:px-16 h-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">FurniGo!</div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden sm:flex space-x-8 text-black text-base">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/productList" className="hover:text-gray-600">Shop</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="w-6 h-6 text-black" /> : <FaBars className="w-6 h-6 text-black" />}
        </div>

        {/* Icons Section (Desktop) */}
        <div className="hidden sm:flex items-center space-x-6 text-black">
          <SignedOut>
            <SignInButton mode="redirect">
              <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">👤</div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <FaHeart className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer" />
          <FaSearch className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer" />
          <Link href="/cart">
            <FaShoppingCart className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu with Icons */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between p-4">
          <div className="text-2xl font-bold text-black">FurniGo!</div>
          <FaTimes onClick={toggleMenu} className="w-6 h-6 text-black cursor-pointer" />
        </div>

        {/* Mobile Menu Links */}
        <nav className="flex flex-col items-center space-y-6 mt-8">
          <Link href="/" className="text-black text-xl hover:text-gray-600" onClick={toggleMenu}>Home</Link>
          <Link href="/productList" className="text-black text-xl hover:text-gray-600" onClick={toggleMenu}>Shop</Link>
          <Link href="/about" className="text-black text-xl hover:text-gray-600" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="text-black text-xl hover:text-gray-600" onClick={toggleMenu}>Contact</Link>
        </nav>

        {/* Mobile Menu Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <SignedOut>
            <SignInButton mode="redirect">
              <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">👤</div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <FaHeart className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer" />
          <FaSearch className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer" />
          <Link href="/cart">
            <FaShoppingCart className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


