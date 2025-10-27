// src/pages/HomePage.tsx

import HeroSection from '../components/sections/home/HeroSection';
import AboutIntroSection from '../components/sections/home/AboutIntroSection';
import CommunityStatsSection from '../components/sections/home/CommunityStatsSection';
import TeamSection from '../components/sections/home/TeamSection';
// ContactFormSection import is now GONE
import PartnersSection from '../components/sections/home/PartnersSection';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutIntroSection />
      <CommunityStatsSection />
      <TeamSection />
      {/* <ContactFormSection /> is now GONE */}
      <PartnersSection />
    </main>
  );
}

export default HomePage;