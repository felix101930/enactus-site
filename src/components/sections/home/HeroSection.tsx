// src/components/sections/home/HeroSection.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import VideoModal from '../../common/VideoModal'; 
import heroFallback from '../../../assets/backgrounds/background-hero.png'; 

const VIDEO_ID = "B7FrMg8w_98"; 

const headline = "Igniting business innovation with integrity and passion.";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
};

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <>
      <section className="relative h-screen overflow-hidden flex items-center justify-center text-white bg-black">
        
        {/* --- BACKGROUND LAYER --- */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y }}>
          
          {/* 1. Static Image Fallback */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${heroFallback})` }}
          />

          {/* 2. YouTube Background Video */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {/* 
                CSS FIX EXPLAINED:
                1. w-[300%] md:w-[140%] -> Massive zoom on mobile to hide UI, slight zoom on desktop to see more context.
                2. top-[-15%] -> This shifts the video UP. We see the top (faces), cropping the bottom (legs).
                3. left-1/2 -translate-x-1/2 -> Keeps it centered horizontally.
            */}
            <div className="absolute top-[-15%] md:top-[-10%] left-1/2 transform -translate-x-1/2 w-[300%] h-[300%] md:w-[140%] md:h-[140%] bg-black">
              <iframe
                className="w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`}
                allow="autoplay; encrypted-media"
                title="Hero Background"
              ></iframe>
            </div>
          </div>

          {/* 3. Dark Overlay */}
          <div className="absolute inset-0 z-20 bg-black/50"></div>
        </motion.div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-30 text-left max-w-4xl px-4 mt-10">
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg"
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/projects" 
              className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] active:scale-95 text-center"
            >
              View Our Impact
            </Link>

            {/* Watch Recap Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <FaPlay size={10} className="ml-0.5" />
              </span>
              Theater Mode
            </button>
          </motion.div>
        </div>

      </section>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoId={VIDEO_ID} 
      />
    </>
  );
}

export default HeroSection;