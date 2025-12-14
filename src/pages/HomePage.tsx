// src/pages/HomePage.tsx

import FadeIn from '../components/common/FadeIn';

import HeroSection from '../components/sections/home/HeroSection';
import AboutIntroSection from '../components/sections/home/AboutIntroSection';
import ProjectsSection from '../components/sections/home/ProjectsSection'; // <--- IMPORT THIS
import CommunityStatsSection from '../components/sections/home/CommunityStatsSection';
import TeamSection from '../components/sections/home/TeamSection';
import PartnersSection from '../components/sections/home/PartnersSection';

function HomePage() {
  return (
    <main className="bg-gray-50"> {/* Added a light gray bg to the main to make white cards pop */}
      <HeroSection /> 
      
      <FadeIn> 
        <AboutIntroSection />
      </FadeIn>
      
      {/* Add Projects Section Here - No FadeIn needed as it handles its own scroll */}
      <ProjectsSection />

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