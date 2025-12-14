// src/components/common/ScrollToAnchor.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g. #case-clash)
    if (hash) {
      // We set a small timeout to allow the new page to render/paint first
      const timer = setTimeout(() => {
        // Remove the '#' character to get the ID
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100); // 100ms delay is usually enough for the DOM to be ready

      return () => clearTimeout(timer);
    } 
    // If no hash, we usually want to snap to top (standard navigation behavior)
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Run this logic whenever the URL changes

  return null; // This component doesn't render anything visible
}

export default ScrollToAnchor;