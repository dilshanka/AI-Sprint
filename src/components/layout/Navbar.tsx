// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <Link to="/" className="text-white text-xl font-bold text-nowrap">
          AI SPRINT
        </Link>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0  w-full bg-black md:static md:flex md:items-center md:justify-end`}
        >
          <Link
            to="/"
            className="block text-white px-4 py-2 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-white px-4 py-2 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Product Information
          </Link>
          <Link
            to="/dashboard"
            className="block text-white px-4 py-2 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


