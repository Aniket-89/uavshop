import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CompanyLogo } from "../assets/assets";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-white text-black px-6 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="text-2xl font-semibold z-20 h-full flex items-center gap-2"><img src={CompanyLogo} alt="" className="h-8 aspect-auto object-cover object-center" />Shop</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/products" className="hover:text-yellow-300">Products</Link>
          <a href="https:www.droneanatomy.com/about" className="hover:text-yellow-300">About</a>
          <a href="https:www.droneanatomy.com/contact" className="hover:text-yellow-300">Contact</a>
          <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none z-20"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden bg-white text-black fixed top-0 right-0 z-10 w-3/4 h-full shadow-md py-4 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 items-center mt-20">
          <li>
            <Link
              to="/"
              className="hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              href="https:www.droneanatomy.com/about"
              className="hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https:www.droneanatomy.com/contact"
              className="hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
