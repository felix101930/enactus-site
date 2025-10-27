// src/pages/AboutPage.tsx

import PageHeader from '../components/sections/shared/PageHeader';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import OurMissionSection from '../components/sections/about/OurMissionSection';
import TeamSectionAbout from '../components/sections/about/TeamSectionAbout';

// Temporarily using the main hero background image
import aboutHeroBg from '../assets/backgrounds/background-hero.png';


function AboutPage() {
  return (
    <main>
      <PageHeader
        pageName="About Us"
        title="Empowering change through purpose and passion."
        backgroundImage={aboutHeroBg}
      />
      <WhoWeAreSection />
      <OurMissionSection />
      <TeamSectionAbout />
    </main>
  );
}

export default AboutPage;