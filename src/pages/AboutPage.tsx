// src/pages/AboutPage.tsx

import FadeIn from '../components/common/FadeIn';

import PageHeader from '../components/sections/shared/PageHeader';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import OurMissionSection from '../components/sections/about/OurMissionSection';
import TeamSectionAbout from '../components/sections/about/TeamSectionAbout'; 
import FacultySection from '../components/sections/about/FacultySection'; // <--- 1. Import
import aboutHeroBg from '../assets/backgrounds/background-about-hero.png';

function AboutPage() {
  return (
    <main>
      <PageHeader
        pageName="About Us"
        title="Empowering change through purpose and passion."
        backgroundImage={aboutHeroBg}
      />
      
      {/* 2. Added ID for smooth scrolling anchor */}
      <div id="team">
        <FadeIn>
          <TeamSectionAbout />
        </FadeIn>
      </div>

      <FadeIn>
        <WhoWeAreSection />
      </FadeIn>
      
      <FadeIn>
        <OurMissionSection />
      </FadeIn>

      {/* 3. Added Faculty Section */}
      <FadeIn>
        <FacultySection />
      </FadeIn>
    </main>
  );
}

export default AboutPage;