// src/components/layouts/Navbar.tsx

import { Link } from 'react-router-dom'; // IMPORT Link
import enactusLogo from '../../assets/logos/logo-enactus-sait.png';

const navLinks = [
  { name: 'Home', href: '/' }, // UPDATED PATH
  { name: 'About Us', href: '/about' }, // UPDATED PATH
  { name: 'Projects', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Contact', href: '#' },
];

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/"> {/* CHANGED to Link and to */}
              <img
                className="h-12 w-auto"
                src={enactusLogo}
                alt="Enactus SAIT Logo"
              />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} // CHANGED to Link and to
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Follow Now Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors"
            >
              Follow Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;