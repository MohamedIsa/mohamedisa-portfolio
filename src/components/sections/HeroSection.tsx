"use client";
import { heroSection } from "@/data/hero";
import Link from "next/link";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
          {heroSection.title}
        </h1>
        
        <p className="text-xl sm:text-2xl mt-4 text-gray-600 mb-10">
          {heroSection.description}
        </p>
        
        <div className="flex justify-center gap-6">
          <Link href="#MyWork">
            <Button
              variant="default"
              className="px-8 py-6 text-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-xl"
            >
              {heroSection.buttonText}
            </Button>
          </Link>
          
          <Link href="#contact">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg transition-all duration-300 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-xl"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
