// src/components/sections/about/FacultySection.tsx

import { FaUserCircle } from 'react-icons/fa';
// You can replace this import with the actual image of the "Meeting Sign" later
import meetingImage from '../../../assets/images/image-about-intro.png'; 

const advisors = [
  {
    name: "Rami Haddad",
    role: "Faculty Advisor",
    // Replace with real image import later
    image: null 
  },
  {
    name: "Joy Ishigo",
    role: "Faculty Advisor",
    // Replace with real image import later
    image: null
  }
];

function FacultySection() {
  return (
    <section id="faculty" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-left">
          Our <span className="text-yellow-500">Faculty Advisors</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Feature Image (The Meeting Sign) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               {/* Using a placeholder or existing asset until you add the specific photo */}
               <img 
                 src={meetingImage} 
                 alt="Faculty Advisor Meeting" 
                 className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-yellow-400/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Advisors */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="flex flex-col items-center text-center group">
                  
                  {/* Circle Image Wrapper */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg mb-6 group-hover:border-yellow-400 transition-colors duration-300">
                    {advisor.image ? (
                      <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                         {/* Placeholder Icon if no image */}
                         <FaUserCircle className="text-gray-400 text-7xl" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">{advisor.name}</h3>
                  {/* Optional: Add social links or bio here later */}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FacultySection;