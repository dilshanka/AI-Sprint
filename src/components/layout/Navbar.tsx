// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          AI SPRINT
        </Link>
        <div>
          <Link to="/" className="text-white mx-4">
            Home
          </Link>
          <Link to="/products" className="text-white mx-4">
          Product Information
          </Link>
          <Link to="/about" className="text-white mx-4">
            About Me
          </Link>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
