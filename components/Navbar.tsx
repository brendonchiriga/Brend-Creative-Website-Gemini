import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }, // In a real app, this might anchor scroll or go to a page
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0B15]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 animate-fade-in">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1I_NkgwYC8ZmUeWp3o0BKowzDh1rzDLpt" 
                alt="Brend Creative Logo" 
                className="h-10 md:h-14 lg:h-20 w-auto object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-8 flex items-baseline space-x-3 lg:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 lg:px-4 py-2.5 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-brand-cyan'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <MagneticButton>
                <Link to="/contact">
                    <button className="bg-gradient-to-r from-brand-purple to-brand-cyan text-black px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-bold hover:opacity-90 transition-opacity shadow-lg shadow-red-500/30">
                    Get Free Quote
                    </button>
                </Link>
            </MagneticButton>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#151525] border-b border-white/10 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-cyan bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-2">
                 <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan text-black px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-purple-500/20">
                        Get Free Quote
                    </button>
                 </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;