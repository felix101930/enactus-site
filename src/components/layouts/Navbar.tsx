// src/components/layouts/Navbar.tsx

import { NavLink, Link } from 'react-router-dom';
import enactusLogo from '../../assets/logos/logo-enactus-sait.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
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
            <Link to="/">
              <img
                className="h-12 w-auto"
                src={enactusLogo}
                alt="Enactus SAIT Logo"
              />
            </Link>
          </div>

          {/* Centered Navigation Links - REVISED LOGIC */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => {
              // If the link is a placeholder, render a simple <a> tag
              if (link.href === '#') {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-medium text-white transition-colors hover:text-yellow-400"
                  >
                    {link.name}
                  </a>
                );
              }
              // Otherwise, render a NavLink for our real pages
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-yellow-400 ${
                      isActive
                        ? 'text-yellow-400 underline decoration-yellow-400 underline-offset-4'
                        : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Follow Now Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg"
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