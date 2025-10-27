// src/pages/HomePage.tsx

import Navbar from '../components/layouts/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutIntroSection from '../components/sections/AboutIntroSection';
import CommunityStatsSection from '../components/sections/CommunityStatsSection';
import TeamSection from '../components/sections/TeamSection';
import PartnersSection from '../components/sections/PartnersSection';
import Footer from '../components/layouts/Footer'; // 1. Import it

function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutIntroSection />
        <CommunityStatsSection />
        <TeamSection />
        <PartnersSection />
      </main>
      <Footer /> {/* 2. Add it here */}
    </div>
  );
}

export default HomePage;