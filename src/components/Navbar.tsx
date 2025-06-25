import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import faangtechLogo from '../../faangtechlogobg.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/60 ${
        isScrolled
          ? 'shadow-lg border-b border-gray-200 py-3'
          : 'bg-white/30 py-6'
      }`}
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={faangtechLogo} alt="FAANGTechLab Logo" className="h-12 w-30 object-contain mr-4" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="relative text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300 px-1 py-2 focus:outline-none group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link to="/about" className="relative text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300 px-1 py-2 focus:outline-none group">
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link to="/courses" className="relative text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300 px-1 py-2 focus:outline-none group">
              Courses
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link to="/contact" className="relative text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300 px-1 py-2 focus:outline-none group">
              Contact Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <a
              href="https://codegym.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300 px-1 py-2 focus:outline-none group"
            >
              LMS
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full focus:outline-none bg-white/70 shadow-sm backdrop-blur"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-400 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/90 rounded-2xl shadow-2xl p-6 flex flex-col space-y-4 border border-gray-100 backdrop-blur-lg">
            <Link to="/" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300 py-2 text-lg text-left">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300 py-2 text-lg text-left">
              About Us
            </Link>
            <Link to="/courses" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300 py-2 text-lg text-left">
              Courses
            </Link>
            <Link to="/contact" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300 py-2 text-lg text-left">
              Contact Us
            </Link>
            <a
              href="https://codegym.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300 py-2 text-lg"
            >
              CodeGym
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;