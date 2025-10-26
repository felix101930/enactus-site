// src/components/sections/CommunityStatsSection.tsx

import communityBg from '../../assets/backgrounds/background-community-stats.png';

// An array to hold the stats makes the code cleaner
const stats = [
  { value: '2019', label: 'Year of Establishment' },
  { value: '3', label: 'Projects' },
  { value: '116', label: 'Student Volunteers' },
  { value: '7,487', label: 'Volunteer Hours' },
  { value: '$20,000', label: 'Revenue & Grants' },
];

function CommunityStatsSection() {
  return (
    <section className="relative bg-gray-900 text-white py-24 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={communityBg}
          alt="Community event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="font-bold text-yellow-400">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
          About Our Community
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-16">
          The Enactus SAIT community is a vibrant, diverse, and united by a passion
          for positive change. We bring together students from all backgrounds
          to support and inspire each other, fostering an environment where
          ideas grow and everyone can make an impact.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-yellow-400">
                {stat.value}
              </p>
              <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityStatsSection;