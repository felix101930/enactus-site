// src/components/common/IntroOverlay.tsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../../assets/logos/logo-enactus-sait-white.png';

// RENAMED PROP: onComplete is now onStartExit for clarity
export default function IntroOverlay({ onStartExit }: { onStartExit: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: WE INSPIRE (0s -> 1.3s)
    const timer1 = setTimeout(() => setPhase(1), 1300);
    // Phase 2: WE CREATE (1.3s -> 2.6s)
    const timer2 = setTimeout(() => setPhase(2), 2600);
    // Phase 3: LOGO REVEAL (2.6s -> 4.2s) -> Tell parent to start exit
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
    // The exit animation itself is now controlled by AnimatePresence in HomePage
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // The Curtain Raise
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