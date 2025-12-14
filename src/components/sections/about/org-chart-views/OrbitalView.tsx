// src/components/sections/about/org-chart-views/OrbitalView.tsx

import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

// Reusable "Orb" component for each team member
const Orb = ({ member, size = 80 }: { member: any; size?: number }) => (
  <motion.div 
    whileHover={{ scale: 1.1, zIndex: 20 }}
    className="bg-white p-2 rounded-full shadow-xl text-center flex flex-col items-center justify-center cursor-default"
    style={{ width: size, height: size }}
  >
    <FaUserCircle className="text-gray-400" size={size / 3.5} />
    <p 
      className="font-bold text-gray-800 mt-1 leading-tight"
      style={{ fontSize: `${size / 10}px` }} // Dynamic font size
    >
      {member.name}
    </p>
    <p 
      className="text-gray-500 leading-tight"
      style={{ fontSize: `${size / 12}px` }} // Dynamic font size
    >
      {member.role}
    </p>
  </motion.div>
);

const OrbitalView = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-[600px] relative flex items-center justify-center bg-gray-100 rounded-lg shadow-inner overflow-hidden p-4">
      {/* Decorative Orbit Paths */}
      <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
      <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border-2 border-dashed border-gray-300 rounded-full animate-spin-slower"></div>
      
      {/* Central "Sun" - Co-Presidents */}
      <div className="z-10 flex flex-col items-center space-y-4">
        <Orb member={data.coPresidents[0]} size={130} />
        <Orb member={data.coPresidents[1]} size={130} />
      </div>

      {/* Orbiting "Planets" - VPs */}
      <div className="absolute w-full h-full">
        {/* VP Operations */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: 'center' }}
        >
          <div className="absolute" style={{ transform: 'translateY(-175px)' }}>
            <Orb member={data.operations.vp} size={110} />
          </div>
        </div>

        {/* VP Enterprises */}
         <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: 'center' }}
        >
          <div className="absolute" style={{ transform: 'translateY(175px)' }}>
             <Orb member={data.projects.vp} size={110} />
          </div>
        </div>

        {/* Directors & Managers Orbiting VPs (Conceptual representation) */}
        {/* Note: A full physics-based orbit is complex. This is a stylized visual. */}
        <div className="absolute top-1/2 left-1/2">
            <div className="absolute" style={{ transform: 'translateX(-250px) translateY(-50px)' }}>
                <Orb member={data.operations.directors[0]} size={90} />
            </div>
             <div className="absolute" style={{ transform: 'translateX(-200px) translateY(120px)' }}>
                <Orb member={data.operations.directors[1]} size={90} />
            </div>

            <div className="absolute" style={{ transform: 'translateX(250px) translateY(50px)' }}>
                <Orb member={data.projects.managers[0]} size={90} />
            </div>
            <div className="absolute" style={{ transform: 'translateX(200px) translateY(-120px)' }}>
                <Orb member={data.projects.managers[1]} size={90} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitalView;