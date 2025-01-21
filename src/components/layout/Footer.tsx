import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved. Sysco
          Corporation reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
