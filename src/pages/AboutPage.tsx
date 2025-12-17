// src/pages/AboutPage.tsx

import FadeIn from '../components/common/FadeIn';

import PageHeader from '../components/sections/shared/PageHeader';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import OurMissionSection from '../components/sections/about/OurMissionSection';
import TeamSectionAbout from '../components/sections/about/TeamSectionAbout'; 
import FacultyFoundation from '../components/sections/about/FacultyFoundation'; // <--- NEW COMPONENT
import aboutHeroBg from '../assets/backgrounds/background-about-hero.png';

function AboutPage() {
  return (
    <main>
      <PageHeader
        pageName="About Us"
        title="Empowering change through purpose and passion."
        backgroundImage={aboutHeroBg}
      />
      
      {/* 1. Context First */}
      <FadeIn>
        <WhoWeAreSection />
      </FadeIn>
      
      <FadeIn>
        <OurMissionSection />
      </FadeIn>

      {/* 2. The Foundation (Faculty) - Option C Position */}
      <FadeIn>
        <FacultyFoundation />
      </FadeIn>

      {/* 3. The Execution (Students) */}
      {/* ID="team" is here so the homepage link jumps to the chart */}
      <div id="team">
        <FadeIn>
          <TeamSectionAbout />
        </FadeIn>
      </div>

    </main>
  );
}

export default AboutPage;