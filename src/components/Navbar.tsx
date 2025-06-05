
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Info, Phone } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
  { name: 'Events', path: '/events', icon: <Info className="h-4 w-4" /> },
  { name: 'Contact', path: '/contact', icon: <Phone className="h-4 w-4" /> },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-4 left-0 right-0 flex justify-center z-50 px-6">
        <div 
          className={`rounded-full py-1 px-3 transition-all duration-300 
            ${scrolled ? 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl' : 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl shadow-xl'}
            flex items-center justify-between w-full max-w-4xl border border-white/20 dark:border-gray-700/40 h-11 relative
            [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)]`}
        >
          {/* Logo on the Left */}
          <Link to="/" className="flex items-center gap-1.5 cursor-pointer">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
              <span className="font-bold text-base">E</span>
            </div>
            <span className="font-bold text-base bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              EventHub
            </span>
          </Link>

          {/* Centered Navigation Items */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 gap-0.5 z-50">
            {navItems.map((item, index) => (
              <div key={index} className="hover:scale-105 hover:-translate-y-0.5 transition-transform">
                <Link
                  to={item.path}
                  className="flex items-center gap-1 px-2.5 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-all font-medium text-xs"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Theme Toggle and Get Started Button on the Right */}
          <div className="hidden md:flex items-center gap-0.5">
            <ThemeToggle />
            <div className="hover:scale-105 hover:-translate-y-0.5 transition-transform">
              <Link to="/login">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all text-white py-1 px-2 rounded-full text-xs">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="relative z-50 md:hidden">
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 bg-transparent text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-transparent"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-lg z-[999] flex items-center justify-center transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center text-center w-full transition-all duration-400 ${
            menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`my-4 transition-all duration-300 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-white text-xl hover:text-blue-400 transition-all flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </Link>
            </div>
          ))}
          
          <div
            className={`my-4 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
          >
            <ThemeToggle />
          </div>
          
          <div
            className={`mt-4 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${(navItems.length + 1) * 100}ms` }}
          >
            <Link to="/login">
              <Button
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 text-white py-2 px-4 rounded-full"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
