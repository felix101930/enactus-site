// src/pages/AboutPage.tsx

import FadeIn from '../components/common/FadeIn'; // 1. IMPORT IT

import PageHeader from '../components/sections/shared/PageHeader';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import OurMissionSection from '../components/sections/about/OurMissionSection';
import TeamSectionAbout from '../components/sections/about/TeamSectionAbout';
import aboutHeroBg from '../assets/backgrounds/background-about-hero.png';

function AboutPage() {
  return (
    <main>
      {/* We don't animate the PageHeader */}
      <PageHeader
        pageName="About Us"
        title="Empowering change through purpose and passion."
        backgroundImage={aboutHeroBg}
      />
      
      {/* 2. WRAP the other sections */}
      <FadeIn>
        <WhoWeAreSection />
      </FadeIn>
      <FadeIn>
        <OurMissionSection />
      </FadeIn>
      <FadeIn>
        <TeamSectionAbout />
      </FadeIn>
    </main>
  );
}

export default AboutPage;