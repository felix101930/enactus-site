// src/components/layouts/Navbar.tsx

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logoBlack from '../../assets/logos/logo-enactus-sait.png';
import logoWhite from '../../assets/logos/logo-enactus-sait-white.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  // Events removed as requested
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const headerClasses = `fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md' : 'bg-black bg-opacity-20'
  }`;
  
  const linkColor = isScrolled ? 'text-black' : 'text-white';
  const activeLinkColor = isScrolled ? 'text-yellow-500' : 'text-yellow-400';

  return (
    <>
      <header className={headerClasses}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  className="h-12 w-auto"
                  src={isScrolled ? logoBlack : logoWhite}
                  alt="Enactus SAIT Logo"
                />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative font-medium transition-colors hover:text-yellow-500 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-current after:origin-center after:transform after:scale-x-0 after:transition-transform after:duration-300
                    ${isActive ? `${activeLinkColor} after:scale-x-100` : linkColor}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center">
              <div className="hidden md:block">
                <a 
                  href="https://linktr.ee/EnactusSAIT?utm_source=linktree_profile_share&ltsid=a3c724df-7e68-4b46-8d1f-8fbc6407678f" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Follow Now
                </a>
              </div>

              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`relative h-8 w-8 z-50 transition-transform duration-300 ${isScrolled && !isMenuOpen ? 'text-black' : 'text-white'}`}
                  aria-label="Toggle menu"
                >
                  <span className={`block w-7 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`block w-7 h-0.5 bg-current mt-1.5 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-7 h-0.5 bg-current mt-1.5 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileMenu links={navLinks} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Navbar;