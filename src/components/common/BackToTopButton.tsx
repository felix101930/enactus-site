// src/components/common/BackToTopButton.tsx

import { useState, useEffect } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event
  const toggleVisibility = () => {
    // Show button if user has scrolled down more than 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This uses the browser's native smooth scrolling
    });
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          bg-yellow-400 text-black rounded-full p-3 shadow-lg
          transition-all duration-300 ease-in-out
          hover:bg-yellow-500 hover:scale-110
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        aria-label="Go to top"
      >
        {/* Simple SVG Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default BackToTopButton;