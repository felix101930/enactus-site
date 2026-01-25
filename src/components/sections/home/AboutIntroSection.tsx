// src/components/sections/home/AboutIntroSection.tsx
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/backgrounds/background-hero.png';

export default function AboutIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] 
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.8, 1], ["40px", "0px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={containerRef} className="relative min-h-[120vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ scale, borderRadius }}
          onMouseMove={handleMouseMove}
          className="group relative bg-black text-white w-full h-full max-w-[95%] max-h-[90%] md:max-w-full md:max-h-full flex flex-col items-center justify-center shadow-2xl origin-center overflow-hidden"
        >
          {/* 1. IMAGE BACKGROUND (The Old Hero) */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          {/* 2. DARK OVERLAY (To make text readable) */}
          <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-700" />

          {/* 3. MOUSE SPOTLIGHT (Reveals the image) */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 40%)`
            }}
          />

          {/* Inner Content */}
          <Content />
          
        </motion.div>
      </div>
    </div>
  );
}

function Content() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); 

  const text = "Enactus SAIT is a community of student leaders dedicated to positive change.";

  return (
    <div ref={ref} className="relative z-10 max-w-4xl px-8 text-center">
      <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-8 text-sm">What is Enactus?</h2>
      
      <h3 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-xl">
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }} 
            className="inline-block mr-3"
          >
            {word}
          </motion.span>
        ))}
      </h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-12"
      >
        <Link 
          to="/about"
          className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
}