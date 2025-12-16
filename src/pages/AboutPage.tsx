// src/pages/AboutPage.tsx

import FadeIn from '../components/common/FadeIn';

import PageHeader from '../components/sections/shared/PageHeader';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import OurMissionSection from '../components/sections/about/OurMissionSection';
import TeamSectionAbout from '../components/sections/about/TeamSectionAbout'; 
import aboutHeroBg from '../assets/backgrounds/background-about-hero.png';

function AboutPage() {
  return (
    <main>
      <PageHeader
        pageName="About Us"
        title="Empowering change through purpose and passion."
        backgroundImage={aboutHeroBg}
      />
      
      {/* 1. Team Structure MOVED TO TOP for immediate engagement */}
      <FadeIn>
        <TeamSectionAbout />
      </FadeIn>

      <FadeIn>
        <WhoWeAreSection />
      </FadeIn>
      
      <FadeIn>
        <OurMissionSection />
      </FadeIn>
    </main>
  );
}

export default AboutPage;