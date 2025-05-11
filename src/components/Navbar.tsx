"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${
      scrolled 
        ? "bg-white text-gray-900 shadow-md py-2" 
        : "bg-transparent text-gray-900 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">
              Mohamed Isa
            </Link>
          </div>

          
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

         
          <div className="hidden sm:flex space-x-8 items-center">
            {["about", "MyWork", "contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item}`} 
                className="relative font-medium hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
              >
                {item === "MyWork" ? "My Work" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Link 
              href="/MohamedCV.pdf" 
              className="font-medium hover:text-blue-500 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden mt-4 py-3 px-4 bg-white rounded-lg shadow-lg space-y-3">
            {["about", "MyWork", "contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item}`} 
                className="block py-2 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item === "MyWork" ? "My Work" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <a 
              href="/MohamedCV.pdf" 
              className="block py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;