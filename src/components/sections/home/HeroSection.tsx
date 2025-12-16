// src/components/sections/home/HeroSection.tsx

import { Link } from 'react-router-dom'; // 1. Import Link
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import heroBackground from '../../../assets/backgrounds/background-hero.png';

const headline = "Igniting business innovation with integrity and passion.";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src={heroBackground}
          alt="Enactus team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      <div className="relative z-10 text-left max-w-4xl px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headline.split(' ').map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* 2. Updated Buttons to use Link */}
        <div className="mt-8 flex space-x-4">
          <Link 
            to="/projects" 
            className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            View Projects
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Reach Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;