// src/components/sections/home/HeroSection.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
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
  const [isMuted, setIsMuted] = useState(true); // <--- New State for Audio
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Dynamic URL construction based on mute state
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`;

  return (
    <>
      <section className="relative h-screen overflow-hidden flex items-center justify-center text-white bg-black">
        
        {/* --- BACKGROUND LAYER --- */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y }}>
          
          {/* 1. Static Image Fallback (Behind everything) */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${heroFallback})` }}
          />

          {/* 2. YouTube Background Video */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {/* 
                FIX: Removed 'opacity-90'. Now it is fully opaque. 
                Added bg-black to ensure no white flashes during loading/reloading.
            */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-black">
              <iframe
                className="w-full h-full pointer-events-none"
                src={embedUrl}
                allow="autoplay; encrypted-media"
                title="Hero Background"
              ></iframe>
            </div>
          </div>

          {/* 3. Dark Overlay */}
          {/* Logic: If unmuted (watching), make overlay lighter so video is clearer. If muted (background), keep it dark for text reading. */}
          <div className={`absolute inset-0 z-20 transition-all duration-1000 ${isMuted ? 'bg-black/60 backdrop-blur-[2px]' : 'bg-black/30'}`}></div>
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

            {/* "Watch Recap" - Opens the full Cinema Modal */}
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

        {/* --- SMALL UNMUTE TOGGLE (Bottom Right) --- */}
        <div className="absolute bottom-8 right-8 z-40">
           <button 
             onClick={() => setIsMuted(!isMuted)}
             className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-yellow-400 hover:text-black text-white border border-white/20 backdrop-blur-sm transition-all duration-300 pointer-events-auto"
             title={isMuted ? "Unmute Video" : "Mute Video"}
           >
             {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
           </button>
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