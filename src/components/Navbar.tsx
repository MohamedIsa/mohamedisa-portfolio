"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="text-2xl font-bold">
            <Link href="/" className="text-white hover:text-blue-500 transition duration-300">
              Mohamed Isa
            </Link>
          </div>

          
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

         
          <div className="hidden sm:flex space-x-6">
            <Link href="#about" className="text-white hover:text-blue-500 transition duration-300">
              About
            </Link>
              <Link href="#MyWork" className="text-white hover:text-blue-500 transition duration-300">
              My Work
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-500 transition duration-300">
              Contact
            </Link>
            <a href="/MohamedCV.pdf" className="text-white hover:text-blue-500 transition duration-300" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-4 space-y-2">
            <Link href="#about" className="block text-white hover:text-blue-500 transition duration-300">
              About
            </Link>
            <Link href="#MyWork" className="block text-white hover:text-blue-500 transition duration-300">
              My Work
            </Link>
            <Link href="#contact" className="block text-white hover:text-blue-500 transition duration-300">
              Contact
            </Link>
            <a href="/MohamedCV.pdf" className="block text-white hover:text-blue-500 transition duration-300" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;