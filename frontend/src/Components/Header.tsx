import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full h-20 bg-black text-white flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-3xl font-bold">MyShop</div>
      
      {/* Navigation */}
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
