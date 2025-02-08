import { heroSection } from "@/data/hero";
import Link from "next/link";
import { Button } from "../ui/button";
function HeroSection() {
  return (
    <section className="text-center py-20 animate-fadeIn">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
        {heroSection.title}
      </h1>
      <p className="text-lg sm:text-xl mt-4 text-gray-600">
        {heroSection.description}
      </p>
      <Link href="#MyWork">
        <div className="mt-6">
          <Button
            variant="default"
            className="px-6 py-3 text-white bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition duration-300 shadow-md"
          >
            {heroSection.buttonText}
          </Button>
        </div>
      </Link>
    </section>
  );
}
export default HeroSection;
