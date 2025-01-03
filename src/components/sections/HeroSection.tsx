import { heroSection } from "@/data/portfolioData";
import Link from "next/link";
import { Button } from "../ui/button";
export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">{heroSection.title}</h1>
      <p className="text-lg sm:text-xl mt-4 text-gray-600">{heroSection.description}</p>
      <div className="mt-6">
        <Button variant="default" className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700">
        <Link  href='#portfolio'>
          {heroSection.buttonText}
        </Link>
        </Button>
      </div>
    </section>
  );
}
