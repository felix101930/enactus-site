// src/components/sections/home/CommunityStatsSection.tsx

import CountUp from 'react-countup'; // 1. IMPORT CountUp
import { useInView } from 'react-intersection-observer'; // 2. IMPORT useInView
import communityBg from '../../../assets/backgrounds/background-community-stats.png';

const stats = [
  // IMPORTANT: We need to convert the string values to numbers for CountUp to work
  // We remove commas from numbers.
  { value: 2019, label: 'Year of Establishment' },
  { value: 3, label: 'Projects' },
  { value: 116, label: 'Student Volunteers' },
  { value: 7487, label: 'Volunteer Hours' },
  { value: 20000, label: 'Revenue & Grants', isCurrency: true }, // Add a flag for currency
];

function CommunityStatsSection() {
  // 3. SET UP the useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Only count up once
    threshold: 0.5,    // Start when 50% of the section is visible
  });

  return (
    // We attach the ref to the section so the hook knows what to watch
    <section ref={ref} className="relative bg-gray-900 text-white py-24 px-4">
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

        {/* Stats Grid - REVISED */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-yellow-400">
                {/* 4. USE the CountUp component */}
                {inView && ( // Only render CountUp when the section is in view
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    prefix={stat.isCurrency ? '$' : ''} // Add a prefix if it's currency
                    enableScrollSpy // An alternative way to trigger on scroll
                    scrollSpyDelay={200} // Small delay after scrolling into view
                  />
                )}
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