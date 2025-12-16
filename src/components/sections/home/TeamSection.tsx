// src/components/sections/home/TeamSection.tsx

import { Link } from 'react-router-dom'; // 1. Import Link

function TeamSection() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-600 mt-4 mb-12">
          Meet the passionate individuals behind our initiatives!
        </p>

        {/* Team Cards Grid - REVISED LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Student Leaders Card -> Links to About Page (Structure) */}
          <Link to="/about" className="group block transition-all duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/500x550/EFEFEF/333333?text=Student+Leader"
                alt="Student Leaders"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-yellow-400 p-4">
                <p className="text-xl font-bold text-black">Student Leaders</p>
              </div>
            </div>
          </Link>

          {/* Faculty Advisors Card -> Links to About Page #faculty */}
          {/* Note: We will build the #faculty section in the next phase */}
          <Link to="/about#faculty" className="group block transition-all duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/500x550/EFEFEF/333333?text=Faculty+Advisor"
                alt="Faculty Advisors"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-yellow-400 p-4">
                <p className="text-xl font-bold text-black">Faculty Advisors</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default TeamSection;