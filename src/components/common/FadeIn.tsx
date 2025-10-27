// src/components/common/FadeIn.tsx

import { useInView } from 'react-intersection-observer';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

function FadeIn({ children, className }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger this animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className || ''}`}
    >
      {children}
    </div>
  );
}

export default FadeIn;