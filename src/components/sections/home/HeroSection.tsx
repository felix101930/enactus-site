// src/components/sections/home/HeroSection.tsx

// 1. IMPORT motion and hooks from framer-motion
    
import { motion, useScroll, useTransform, Variants } from 'framer-motion'; // Add Variants

  
import heroBackground from '../../../assets/backgrounds/background-hero.png';

const headline = "Igniting business innovation with integrity and passion.";

// Define the animation variants for the container and each word
const containerVariants : Variants= {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // Delay between each child animation
    },
  },
};

const wordVariants : Variants  = {
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
  // 2. SET UP hooks for parallax effect
  const { scrollY } = useScroll();
  // As scrollY goes from 0 to 500, move the background's y position from 0 to 150
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      {/* 3. WRAP background in a motion.div and apply the transform */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }} // Apply the parallax effect here
      >
        <img
          src={heroBackground}
          alt="Enactus team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-4xl px-4">
        {/* 4. APPLY the staggered animation to the headline */}
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
              className="inline-block mr-4" // Add space between words
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Buttons Container */}
        <div className="mt-8 flex space-x-4">
          <a href="#" className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg active:scale-95">
            View Projects
          </a>
          <a href="#" className="px-8 py-3 border-2 border-white text-white font-bold rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg active:scale-95">
            Reach Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;