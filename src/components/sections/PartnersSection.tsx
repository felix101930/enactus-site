// src/components/sections/PartnersSection.tsx

// Import all the partner logos we have
import logoSait from '../../assets/logos/logo-sait.png';
import logoCpa from '../../assets/logos/logo-cpa-alberta.png';
import logo3m from '../../assets/logos/logo-3m.png';
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

        {/* Logos Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name}>
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-16 mx-auto" // Control the logo size here
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PartnersSection;