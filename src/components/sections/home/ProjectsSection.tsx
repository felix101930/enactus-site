// src/components/sections/home/ProjectsSection.tsx

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// IMPORT REAL LOGOS
// Note: Adjusting paths based on your folder structure: src/components/sections/home -> src/assets/logos
import logoCaseClash from '../../../assets/logos/logo-case-clash.png';
import logoUpSkill from '../../../assets/logos/logo-upskill.png';
import logoHydra from '../../../assets/logos/logo-hydraherder.png';

// --- DATA ---
const projects = [
  {
    id: 1,
    title: "Case Clash",
    category: "Business Competition",
    description: "Provides high school students with hands-on business experience while supporting local small businesses with fresh perspectives and solutions.",
    color: "bg-red-500", 
    logo: logoCaseClash, 
    sdgs: ["8", "4", "10", "9", "12", "17"]
  },
  {
    id: 2,
    title: "Project UpSkill",
    category: "Financial Literacy",
    description: "Delivers financial literacy and wellness resource workshops to individuals in addictions recovery programs in Calgary.",
    color: "bg-yellow-400", 
    logo: logoUpSkill,
    sdgs: ["1", "4", "10", "11", "16"]
  },
  {
    id: 3,
    title: "HydraHerder",
    category: "AI & Infrastructure",
    description: "Prevents water infrastructure failures through AI-powered predictive monitoring. By detecting leaks early, it conserves billions of liters annually.",
    color: "bg-blue-500", 
    logo: logoHydra,
    sdgs: ["13", "6", "11", "9"]
  }
];

// --- COMPONENTS ---

// 1. The Individual Card Component
interface CardProps {
  i: number;
  project: typeof projects[0];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ i, project, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col md:flex-row h-[500px] w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-100 origin-top"
      >
        
        {/* LEFT SIDE: Visual Brand Area */}
        <div className={`w-full md:w-2/5 ${project.color} relative flex items-center justify-center p-8 overflow-hidden`}>
          {/* Decorative Circle in background */}
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute w-64 h-64 bg-white opacity-20 rounded-full blur-3xl" 
          />
          
          {/* Real Logo Image */}
          <div className="relative z-10 w-48 h-48 flex items-center justify-center">
             <img 
               src={project.logo} 
               alt={`${project.title} logo`} 
               className="w-full h-full object-contain drop-shadow-xl 
               " 
               // Note: Added 'brightness-0 invert' to make logos white. 
               // Remove 'filter brightness-0 invert' if you want the original logo colors.
             />
          </div>
          
          <span className="absolute bottom-6 left-6 text-white font-bold opacity-80 uppercase tracking-widest text-sm">
            0{i + 1} — {project.category}
          </span>
        </div>

        {/* RIGHT SIDE: Content Area */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {project.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* SDG Section */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Impact Goals (SDGs)
            </p>
            <div className="flex flex-wrap gap-2">
              {project.sdgs.map((sdg, idx) => (
                <div 
                  key={idx} 
                  className="w-10 h-10 bg-gray-800 text-white text-xs font-bold flex items-center justify-center rounded-md shadow-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-default"
                  title={`SDG Goal ${sdg}`}
                >
                  {sdg}
                </div>
              ))}
            </div>
          </div>
          
          {/* Optional CTA Button */}
          <div className="mt-8">
             <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
               Learn More
             </button>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

// 2. The Main Section Wrapper
export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className="relative mt-20 mb-20">
      
      {/* Intro Header for the Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-yellow-500 font-bold mb-2">Our Initiatives</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Projects Driving Change
        </h2>
      </div>

      {/* The Stack Loop */}
      {projects.map((project, i) => {
        // Calculate the scale for the "stacking" effect
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return (
          <Card 
            key={project.id} 
            i={i} 
            project={project} 
            progress={scrollYProgress}
            range={[i * .25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}