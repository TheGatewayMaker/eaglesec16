import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
                alt="Eagle Security Guards Logo"
                className="h-12 w-12"
              />
              <h3 className="text-xl font-bold">Eagle Security Guards</h3>
            </div>
            <p className="text-sm opacity-90">
              Professional security services with trained personnel from armed
              forces of Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Bodyguards
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Mobile Escorts
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Static Guards
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Security Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="font-bold text-lg mb-4">Headquarters</h4>
            <p className="text-sm mb-2">Head Office:</p>
            <p className="font-semibold text-accent mb-4">Islamabad</p>
            <p className="text-sm opacity-90">
              Multiple regional and area offices across Pakistan for reliable
              coverage nationwide.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75 mb-4 md:mb-0">
              © 2024 Eagle Security Guards (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#privacy" className="text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
