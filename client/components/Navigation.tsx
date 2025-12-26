import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-3 font-bold text-xl hover:opacity-90 transition">
            <img
              src="https://i.ibb.co/2YhWk1hj/eaglesecurityoriginallogo.png"
              alt="Eagle Security Guards Logo"
              className="h-10 w-10"
            />
            <span>Eagle Security Guards</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-accent transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="hover:text-accent transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/why-choose-us"
              className="hover:text-accent transition-colors font-medium"
            >
              Why Choose Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-accent transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl hover:text-accent transition-colors">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
