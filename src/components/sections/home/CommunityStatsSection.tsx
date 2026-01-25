// src/components/sections/home/CommunityStatsSection.tsx

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import communityBg from '../../../assets/backgrounds/background-community-stats.png';

// Ensure values are numbers
const stats = [
  { value: 2019, label: 'Year of Establishment' },
  { value: 3, label: 'Projects' },
  { value: 116, label: 'Student Volunteers' },
  { value: 7487, label: 'Volunteer Hours' },
  { value: 20000, label: 'Revenue & Grants', isCurrency: true },
];

function CommunityStatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold to ensure it triggers earlier
  });

  return (
    <section ref={ref} className="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={communityBg}
          alt="Community event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="font-bold text-yellow-400">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
          About Our Community
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-16 text-lg">
          The Enactus SAIT community is a vibrant, diverse, and united by a passion
          for positive change. We bring together students from all backgrounds
          to support and inspire each other.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-yellow-400">
                {/* 
                   LOGIC: If inView is true, animate. 
                   If not, show static value (0) so it's not invisible space.
                */}
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    prefix={stat.isCurrency ? '$' : ''}
                  />
                ) : (
                  <span>{stat.isCurrency ? '$' : ''}0</span>
                )}
              </p>
              <p className="text-sm text-gray-300 mt-2 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityStatsSection;