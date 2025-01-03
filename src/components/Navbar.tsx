import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-900 text-white py-3 fixed w-full z-10 shadow-md rounded-full mx-1 my-2 align-baseline block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo or Site Title */}
          <div className="text-xl font-bold pl-5">
            <Link href="/" className="text-white">
              Mohamed <br /> Isa
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="#about" className="text-white hover:text-blue-500">
              About
            </Link>
            <Link href="#portfolio" className="text-white hover:text-blue-500">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
