// src/components/sections/home/PartnersSection.tsx

import Marquee from 'react-fast-marquee'; // 1. IMPORT Marquee

// Import all the partner logos we have
import logoSait from '../../../assets/logos/logo-sait.png';
import logoCpa from '../../../assets/logos/logo-cpa-alberta.png';
import logo3m from '../../../assets/logos/logo-3m.png';
// We'll add ATB and Scotiabank later if we get the logos

const partners = [
  { name: 'SAIT', logo: logoSait },
  { name: 'CPA Alberta', logo: logoCpa },
  { name: '3M', logo: logo3m },
];

function PartnersSection() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <p className="text-lg text-gray-600">Our Partners & Sponsors</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
          <span className="text-yellow-400">Together,</span> we make a greater impact.
        </h2>

        {/* 2. REPLACE the grid with the Marquee component */}
        <div className="mt-16">
          <Marquee
            gradient={true}
            gradientColor="#FFFFFF" // Match the section's background color
            gradientWidth={50}
            speed={40}
            autoFill={true} // This ensures a seamless loop even with few items
            pauseOnHover={true}
          >
            {partners.map((partner) => (
              <div key={partner.name} className="mx-12"> {/* Add margin between logos */}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-16" // Control the logo size
                />
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}

export default PartnersSection;