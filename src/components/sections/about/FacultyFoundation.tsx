// src/components/sections/about/FacultyFoundation.tsx

import { FaUserCircle, FaLinkedin } from 'react-icons/fa';

// REAL IMAGE IMPORTS (Uncommented as requested)
import ramiImg from '../../../assets/images/team/faculty-rami.jpg';
import joyImg from '../../../assets/images/team/faculty-joy.jpg';

const advisors = [
  {
    name: "Rami Haddad",
    role: "Faculty Advisor",
    linkedin: "https://www.linkedin.com/in/rami-haddad-64bbb384/",
    image: ramiImg 
  },
  {
    name: "Joy Ishigo",
    role: "Faculty Advisor",
    linkedin: "https://www.linkedin.com/in/joy-ishigo/",
    image: joyImg
  }
];

function FacultyFoundation() {
  return (
    <section id="faculty" className="bg-white py-24 px-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED HEADER & NARRATIVE (Removed the weird left image) */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">Our Foundation</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guided by Experience.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Enactus SAIT isn't just a student club; it's a professional development ecosystem. 
            Our Faculty Advisors provide the continuity, mentorship, and industry connections 
            that allow our student teams to execute projects with real-world magnitude.
          </p>
          <div className="h-1 w-24 bg-gray-900 rounded-full mx-auto mt-8"></div>
        </div>

        {/* ADVISOR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="group relative bg-gray-50 rounded-[2rem] p-10 transition-all duration-300 hover:shadow-xl hover:bg-white border border-gray-100 flex flex-col items-center text-center">
              
              {/* Image Area */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 group-hover:border-yellow-400 transition-all duration-300 mb-6">
                {advisor.image ? (
                  <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <FaUserCircle className="text-gray-400 text-7xl" />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{advisor.name}</h3>
              <p className="text-yellow-600 font-bold text-sm uppercase mb-8">{advisor.role}</p>

              {/* LinkedIn Button */}
              <a 
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-[#0077b5] transition-colors border border-gray-200 px-6 py-2 rounded-full hover:bg-[#0077b5]/5 hover:border-[#0077b5]/20"
              >
                <FaLinkedin className="text-xl" />
                <span className="text-sm font-bold">Connect on LinkedIn</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FacultyFoundation;