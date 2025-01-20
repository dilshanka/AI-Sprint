// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2a2f33] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <Link to="/home" className="text-white text-xl font-bold text-nowrap">
          Sysco Sales Consultant
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
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0  w-full md:static md:flex md:items-center md:justify-end`}
        >
          <Link
            to="/home"
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

          <Link
            to="/Inquries"
            className="block text-white px-4 py-2 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Customer Inquiries
          </Link>
          <Link
            to="/SalesReport"
            className="block text-white px-4 py-2 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Reports
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
