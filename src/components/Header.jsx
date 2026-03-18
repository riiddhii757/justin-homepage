import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to handle smooth scrolling and close mobile menu
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-[#16171d] shadow-md fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold text-purple-700">Just In.</div>

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#features" className="hover:text-purple-600 transition">Features</a>
        <a href="#process" className="hover:text-purple-600 transition">Our Process</a>
        {/* Contact Link */}
        <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
        {/* Get Started Button - Points to #contact */}
        <a 
          href="#contact" 
          className="bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 active:scale-95 transition"
        >
          Get Started
        </a>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="text-purple-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-[#16171d] flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg border-t border-gray-100 dark:border-gray-800">
          <a href="#features" className="hover:text-purple-600 transition" onClick={handleNavClick}>Features</a>
          <a href="#process" className="hover:text-purple-600 transition" onClick={handleNavClick}>Our Process</a>
          <a href="#contact" className="hover:text-purple-600 transition" onClick={handleNavClick}>Contact</a>
          <a 
            href="#contact" 
            className="bg-purple-700 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-600 transition" 
            onClick={handleNavClick}
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;