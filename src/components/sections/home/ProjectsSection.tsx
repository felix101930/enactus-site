// src/components/sections/home/ProjectsSection.tsx

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// LOGO IMPORTS
import logoCaseClash from '../../../assets/logos/logo-case-clash.png';
import logoUpSkill from '../../../assets/logos/logo-upskill.png';
import logoHydra from '../../../assets/logos/logo-hydraherder.png';
import logoSecondCut from '../../../assets/logos/logo-second-cut.png';

// SDG IMPORTS
import sdg01 from '../../../assets/icons/sdg/sdg-1.jpg';
import sdg04 from '../../../assets/icons/sdg/sdg-4.jpg';
import sdg06 from '../../../assets/icons/sdg/sdg-6.jpg';
import sdg08 from '../../../assets/icons/sdg/sdg-8.jpg';
import sdg09 from '../../../assets/icons/sdg/sdg-9.jpg';
import sdg10 from '../../../assets/icons/sdg/sdg-10.jpg';
import sdg11 from '../../../assets/icons/sdg/sdg-11.jpg';
import sdg12 from '../../../assets/icons/sdg/sdg-12.jpg';
import sdg13 from '../../../assets/icons/sdg/sdg-13.jpg';
import sdg16 from '../../../assets/icons/sdg/sdg-16.jpg';
import sdg17 from '../../../assets/icons/sdg/sdg-17.jpg';

const projects = [
  {
    title: "Case Clash",
    description: "Bridging the gap between theory and reality. We pair high school students with local businesses to solve real operational challenges.",
    color: "bg-red-500",
    logo: logoCaseClash,
    link: "/projects#case-clash",
    category: "Business Competition",
    sdgs: [sdg08, sdg04, sdg10, sdg09, sdg12, sdg17] 
  },
  {
    title: "Project UpSkill",
    description: "Financial literacy for a fresh start. Empowering addiction recovery centers with tailored workshops on budgeting and savings.",
    color: "bg-yellow-500",
    logo: logoUpSkill,
    link: "/projects#project-upskill",
    category: "Financial Education",
    sdgs: [sdg01, sdg04, sdg10, sdg11, sdg16]
  },
  {
    title: "HydraHerder",
    description: "AI-driven infrastructure monitoring. Detecting water leaks before they become disasters using predictive digital twins.",
    color: "bg-blue-500",
    logo: logoHydra,
    link: "/projects#hydraherder",
    category: "AI Technology",
    sdgs: [sdg13, sdg06, sdg11, sdg09]
  },
  {
    title: "Second Cut",
    description: "Reclaiming construction waste. We divert wood from landfills and upcycle it into sellable products.",
    color: "bg-orange-500",
    logo: logoSecondCut,
    link: "/projects#second-cut",
    category: "Sustainability",
    sdgs: [sdg11, sdg12, sdg09, sdg13, sdg06]
  }
];

// Individual Card Component
const Card = ({ i, project, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col md:flex-row min-h-[550px] md:h-[500px] w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-100 origin-top"
      >
        {/* LEFT COLOR BLOCK */}
        <div className={`w-full md:w-2/5 ${project.color} relative flex items-center justify-center p-8 md:p-12 overflow-hidden shrink-0`}>
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute w-64 h-64 bg-white opacity-20 rounded-full blur-3xl" 
          />
          
          <div className="relative z-10 w-28 h-28 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-lg p-3">
             <img 
               src={project.logo} 
               alt={`${project.title} logo`} 
               className="w-full h-full object-contain rounded-full" 
             />
          </div>

          <span className="absolute top-6 left-6 md:top-auto md:bottom-6 md:left-6 text-white font-bold opacity-80 uppercase tracking-widest text-[10px] md:text-sm">
            {/* FIXED CHARACTER HERE */}
            0{i + 1} - {project.category}
          </span>
        </div>

        {/* CONTENT BLOCK */}
        <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center text-left">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            {project.title}
          </h3>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
            {project.description}
          </p>

          <div>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Impact Goals (SDGs)
            </p>
            <div className="flex flex-wrap gap-2">
              {project.sdgs && project.sdgs.map((sdg: string, idx: number) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 md:w-10 md:h-10 shadow-sm rounded overflow-hidden"
                >
                  <img src={sdg} alt="SDG" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
             <Link 
               to={project.link}
               className="text-sm font-bold border-b-2 border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors"
             >
               Learn More
             </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <p className="text-yellow-500 font-bold mb-2">Our Initiatives</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects Driving Change</h2>
      </div>
      
      <div className="flex flex-col gap-12">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          )
        })}
      </div>
    </div>
  )
}