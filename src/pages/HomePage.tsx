// src/pages/HomePage.tsx

import FadeIn from '../components/common/FadeIn'; // 1. IMPORT IT

import HeroSection from '../components/sections/home/HeroSection';
import AboutIntroSection from '../components/sections/home/AboutIntroSection';
import CommunityStatsSection from '../components/sections/home/CommunityStatsSection';
import TeamSection from '../components/sections/home/TeamSection';
import PartnersSection from '../components/sections/home/PartnersSection';

function HomePage() {
  return (
    <main>
      {/* We don't animate the Hero as it's the first thing you see */}
      <HeroSection /> 
      
      {/* 2. WRAP the other sections */}
      <FadeIn> 
        <AboutIntroSection />
      </FadeIn>
      <FadeIn>
        <CommunityStatsSection />
      </FadeIn>
      <FadeIn>
        <TeamSection />
      </FadeIn>
      <FadeIn>
        <PartnersSection />
      </FadeIn>
    </main>
  );
}

export default HomePage;