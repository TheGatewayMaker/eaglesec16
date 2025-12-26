import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white border-b-2 border-primary sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            to="/"
            className="flex items-center gap-2 font-black text-primary hover:opacity-90 transition duration-300"
          >
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="h-14 w-14"
            />
            <div className="flex flex-col">
              <span className="text-2xl leading-none">Eagle</span>
              <span className="text-xs font-black tracking-widest opacity-70">SECURITY GUARDS</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-10 items-center">
            <Link
              to="/"
              className="hover:text-accent transition-colors font-black text-sm text-foreground hover:opacity-80"
            >
              HOME
            </Link>
            <Link
              to="/services"
              className="hover:text-accent transition-colors font-black text-sm text-foreground hover:opacity-80"
            >
              SERVICES
            </Link>
            <Link
              to="/about"
              className="hover:text-accent transition-colors font-black text-sm text-foreground hover:opacity-80"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="hover:text-accent transition-colors font-black text-sm text-foreground hover:opacity-80"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl text-primary hover:opacity-70 transition-colors font-black">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
