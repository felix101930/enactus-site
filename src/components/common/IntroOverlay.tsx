// src/components/common/IntroOverlay.tsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../../assets/logos/logo-enactus-sait-white.png';

export default function IntroOverlay({ onStartExit }: { onStartExit: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Pacing remains the same (~4.2 seconds)
    const timer1 = setTimeout(() => setPhase(1), 1300);
    const timer2 = setTimeout(() => setPhase(2), 2600);
    const timer3 = setTimeout(() => {
      onStartExit(); 
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onStartExit]);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      initial={{ scale: 1, opacity: 1 }}
      // --- THE "ZOOM OUT" TRANSITION ---
      exit={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }} // Zooms out, fades, and blurs for a smooth effect
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
    >
      <AnimatePresence mode="wait">
        
        {phase === 0 && (
          <motion.h1
            key="inspire" variants={textVariants} initial="initial" animate="animate" exit="exit"
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase"
          >
            We Inspire.
          </motion.h1>
        )}

        {phase === 1 && (
          <motion.h1
            key="create" variants={textVariants} initial="initial" animate="animate" exit="exit"
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase"
          >
            We Create.
          </motion.h1>
        )}

        {phase === 2 && (
          <motion.div
            key="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "0.2em" }} 
              animate={{ opacity: 1, letterSpacing: "0.5em" }} 
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-400 font-bold text-sm md:text-base mb-6"
            >
              WE ARE
            </motion.p>
            <motion.img 
              src={logoWhite} alt="Enactus SAIT" 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-64 md:w-96 object-contain"
            />
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}