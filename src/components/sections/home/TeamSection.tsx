// src/components/sections/TeamSection.tsx

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

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Student Leaders Card */}
          <a href="#" className="group block">
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
          </a>

          {/* Faculty Advisors Card */}
          <a href="#" className="group block">
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
          </a>

        </div>
      </div>
    </section>
  );
}

export default TeamSection;