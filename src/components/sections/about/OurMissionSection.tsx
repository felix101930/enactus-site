// src/components/sections/about/OurMissionSection.tsx

// As you requested, we are reusing the same image from the homepage's intro section
import missionImage from '../../../assets/images/image-about-intro.png';

function OurMissionSection() {
  return (
    // A light lavender background to match the design
    <section className="bg-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-left">
          <p className="font-bold text-gray-600">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 my-4">
            We Aim to Build a Better World
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Enactus SAIT is a student-led organization at the Southern Alberta
              Institute of Technology (SAIT) that empowers students to apply their
              educational and experiential knowledge, skills, and innovation to
              create positive social, economic, and environmental impact. Our
              mission is to enable students to change the world while providing
              opportunities for personal and professional development.
            </p>
            <p>
              As part of the global Enactus network, which operates in 37 countries
              with over 1,700 university teams, Enactus SAIT engages in various
              community development projects. These initiatives aim to address
              pressing societal challenges and foster sustainable change.
            </p>
            <p>
              Through their involvement, members gain hands-on experience in
              leadership, project management, and social entrepreneurship,
              preparing them to be socially responsible leaders in the future.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div>
          <img
            src={missionImage}
            alt="We Are Enactus SAIT sign"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default OurMissionSection;