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

type IntroState = 'playing' | 'exiting' | 'finished';

function HomePage() {
  const [introState, setIntroState] = useState<IntroState>('finished'); 
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setIntroState('playing'); 
    }
  }, []);

  return (
    <main className="bg-gray-50 relative">
      
      <AnimatePresence 
        onExitComplete={() => {
          setIntroState('finished'); 
          sessionStorage.setItem('hasSeenIntro', 'true');
        }}
      >
        {introState === 'playing' && (
          <IntroOverlay 
            onStartExit={() => setIntroState('exiting')}
          />
        )}
      </AnimatePresence>

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