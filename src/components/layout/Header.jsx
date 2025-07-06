import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from '../ui/Link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-900 shadow-md py-3'
        : 'bg-slate-900/95 py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Shape<span className="text-amber-500"> IT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'Portfolio', 'About', 'Team', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-sm transition-colors text-gray-100 hover:text-white"
              >
                {item}
              </Link>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <Link
              href="/tss"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Our Product
            </Link>
           
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-slate-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Shape<span className="text-amber-500"> IT</span>
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {['Services', 'Portfolio', 'About', 'Team', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 text-xl font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out mt-4 flex items-center justify-center">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;