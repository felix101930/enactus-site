// src/pages/HomePage.tsx

import { useState, useLayoutEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import FadeIn from '../components/common/FadeIn';

import HeroSection from '../components/sections/home/HeroSection';
import AboutIntroSection from '../components/sections/home/AboutIntroSection'; 
import ProjectsSection from '../components/sections/home/ProjectsSection';
import CommunityStatsSection from '../components/sections/home/CommunityStatsSection';
import TeamSection from '../components/sections/home/TeamSection';
import PartnersSection from '../components/sections/home/PartnersSection';
import IntroOverlay from '../components/common/IntroOverlay';

// State machine for our intro sequence
type IntroState = 'playing' | 'exiting' | 'finished';

function HomePage() {
  const [introState, setIntroState] = useState<IntroState>('finished'); // Default to finished if no intro
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setIntroState('playing'); // Start the intro if it's the first visit
    }
  }, []);

  return (
    <main className="bg-gray-50 relative">
      
      {/* 
        This wrapper now controls the exit animation of the IntroOverlay.
        `onExitComplete` is the key: it fires AFTER the curtain has fully lifted.
      */}
      <AnimatePresence 
        onExitComplete={() => {
          setIntroState('finished'); // 2. Mark intro as fully finished
          sessionStorage.setItem('hasSeenIntro', 'true');
        }}
      >
        {introState === 'playing' && (
          <IntroOverlay 
            onStartExit={() => setIntroState('exiting')} // 1. Tell HomePage the intro is starting to exit
          />
        )}
      </AnimatePresence>

      {/* Hero - Will only start its animation when introState is 'finished' */}
      <HeroSection startScene={introState === 'finished'} /> 
      
      <AboutIntroSection />
      
      <div className="relative z-20 bg-gray-50 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"> 
        <div className="pt-20">
            <ProjectsSection />
        </div>
        <FadeIn><CommunityStatsSection /></FadeIn>
        <FadeIn><TeamSection /></FadeIn>
        <FadeIn><PartnersSection /></FadeIn>
      </div>
    </main>
  );
}

export default HomePage;