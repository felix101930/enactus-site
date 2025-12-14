// src/pages/AboutPage.tsx

import FadeIn from '../components/common/FadeIn';

import PageHeader from '../components/sections/shared/PageHeader';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import OurMissionSection from '../components/sections/about/OurMissionSection';
import TeamSectionAbout from '../components/sections/about/TeamSectionAbout'; // This should now point to our new showcase
import aboutHeroBg from '../assets/backgrounds/background-about-hero.png';

function AboutPage() {
  return (
    <main>
      <PageHeader
        pageName="About Us"
        title="Empowering change through purpose and passion."
        backgroundImage={aboutHeroBg}
      />
      
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