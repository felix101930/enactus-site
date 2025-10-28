// src/components/layouts/Navbar.tsx

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import the new MobileMenu component
import MobileMenu from './MobileMenu';

// Import BOTH logo versions
import logoBlack from '../../assets/logos/logo-enactus-sait.png';
import logoWhite from '../../assets/logos/logo-enactus-sait-white.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Contact', href: '#' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Effect to handle scroll for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const headerClasses = `fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md' : 'bg-black bg-opacity-20'
  }`;
  
  const linkColor = isScrolled ? 'text-black' : 'text-white';
  const activeLinkStyle = isScrolled 
    ? 'text-yellow-500 underline decoration-yellow-500' 
    : 'text-yellow-400 underline decoration-yellow-400';

  return (
    <>
      <header className={headerClasses}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  className="h-12 w-auto"
                  src={isScrolled ? logoBlack : logoWhite}
                  alt="Enactus SAIT Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {/* Desktop links logic remains the same */}
              {navLinks.map((link) => {
                if (link.href === '#') {
                  return <a key={link.name} href={link.href} className={`font-medium transition-colors hover:text-yellow-500 ${linkColor}`}>{link.name}</a>;
                }
                return <NavLink key={link.name} to={link.href} className={({ isActive }) => `font-medium transition-colors hover:text-yellow-500 underline-offset-4 ${isActive ? activeLinkStyle : linkColor}`}>{link.name}</NavLink>;
              })}
            </div>
            
            <div className="flex items-center">
              {/* Follow Now Button (Desktop) */}
              <div className="hidden md:block">
                <a href="#" className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg">
                  Follow Now
                </a>
              </div>

              {/* Mobile Menu Button (Hamburger/Close) */}
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`relative h-8 w-8 z-50 transition-transform duration-300 ${isScrolled && !isMenuOpen ? 'text-black' : 'text-white'}`}
                  aria-label="Toggle menu"
                >
                  {/* Hamburger Icon */}
                  <span className={`block w-7 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`block w-7 h-0.5 bg-current mt-1.5 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-7 h-0.5 bg-current mt-1.5 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Render the Mobile Menu Overlay */}
      <MobileMenu
        links={navLinks}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;