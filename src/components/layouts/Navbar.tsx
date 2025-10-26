// src/components/layouts/Navbar.tsx

import enactusLogo from '../../assets/logos/logo-enactus-sait.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Contact', href: '#' },
];

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a href="#">
              <img
                className="h-12 w-auto"
                src={enactusLogo}
                alt="Enactus SAIT Logo"
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
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