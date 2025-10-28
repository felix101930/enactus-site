// src/components/layouts/MobileMenu.tsx

import { NavLink } from 'react-router-dom';

// Define the shape of our navigation links
interface NavLinkItem {
  name: string;
  href: string;
}

// Define the props the component will accept
interface MobileMenuProps {
  links: NavLinkItem[];
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
  return (
    // Main overlay, fades in and out
    <div
      className={`fixed inset-0 z-30 bg-gray-900 bg-opacity-90 backdrop-blur-sm transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose} // Close menu when clicking the overlay
    >
      {/* Navigation links container, slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white p-6 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
      >
        <nav className="mt-16 flex flex-col space-y-6">
          {links.map((link) => {
            if (link.href === '#') {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-gray-500"
                  onClick={onClose} // Close menu on click
                >
                  {link.name}
                </a>
              );
            }
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-2xl font-bold transition-colors hover:text-yellow-500 ${
                    isActive ? 'text-yellow-500' : 'text-gray-800'
                  }`
                }
                onClick={onClose} // Close menu on click
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;