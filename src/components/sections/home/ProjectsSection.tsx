// src/components/sections/home/ProjectsSection.tsx

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

// Logo Imports
import logoCaseClash from '../../../assets/logos/logo-case-clash.png';
import logoUpSkill from '../../../assets/logos/logo-upskill.png';
import logoHydra from '../../../assets/logos/logo-hydraherder.png';
import logoSecondCut from '../../../assets/logos/logo-second-cut.png';

// SDG Imports
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
    id: 1,
    title: "Case Clash",
    category: "Business Competition",
    description: "Case Clash bridges the gap between high school theory and real-world business. We provide students with hands-on experience by partnering them with local small businesses to solve actual operational challenges.",
    color: "bg-red-500", 
    logo: logoCaseClash, 
    sdgs: [sdg08, sdg04, sdg10, sdg09, sdg12, sdg17],
    link: "/projects#case-clash"
  },
  {
    id: 2,
    title: "Project UpSkill",
    category: "Financial Literacy",
    description: "Delivers financial literacy and wellness resource workshops to individuals in addictions recovery programs in Calgary, providing tools for sustainable independence.",
    color: "bg-yellow-400", 
    logo: logoUpSkill,
    sdgs: [sdg01, sdg04, sdg10, sdg11, sdg16],
    link: "/projects#project-upskill"
  },
  {
    id: 3,
    title: "HydraHerder",
    category: "AI Infrastructure",
    description: "Preventing failure before it happens. HydraHerder utilizes AI-powered predictive monitoring to detect leaks in water infrastructure early, conserving billions of liters of water annually.",
    color: "bg-blue-500", 
    logo: logoHydra,
    sdgs: [sdg13, sdg06, sdg11, sdg09],
    link: "/projects#hydraherder"
  },
  {
    id: 4,
    title: "Second Cut",
    category: "Waste Reclamation",
    description: "Reclaims valuable materials from construction waste to reduce landfill impact, lower disposal costs, and generate sustainable revenue through circular economy practices.",
    color: "bg-orange-500", 
    logo: logoSecondCut,
    sdgs: [sdg11, sdg12, sdg09, sdg13, sdg06],
    link: "/projects#second-cut"
  }
];

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
  <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0"> {/* Added px-4 for mobile edge spacing */}
    <motion.div 
      style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
      // CHANGE 1: Changed h-[500px] to min-h-[500px] h-auto to prevent cutting off content on mobile
      className="relative flex flex-col md:flex-row min-h-[500px] h-auto w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-100 origin-top"
    >
      
      {/* HEADER SECTION */}
      {/* CHANGE 2: Reduced padding on mobile (p-6 vs p-8) */}
      <div className={`w-full md:w-2/5 ${project.color} relative flex items-center justify-center p-6 md:p-8 overflow-hidden shrink-0`}> {/* added shrink-0 */}
        
        {/* Abstract BG Circle */}
        <motion.div 
          style={{ scale: imageScale }}
          className="absolute w-64 h-64 bg-white opacity-20 rounded-full blur-3xl" 
        />
        
        {/* LOGO CONTAINER */}
        {/* CHANGE 3: Drastically shrank logo on mobile (w-28 h-28) -> desktop (w-48 h-48) */}
        <div className="relative z-10 w-28 h-28 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-lg p-2">
           <img 
             src={project.logo} 
             alt={`${project.title} logo`} 
             className="w-full h-full object-contain rounded-full" 
           />
        </div>

        {/* CATEGORY NUMBER TEXT */}
        {/* CHANGE 4: On mobile, moved text to top-4. On desktop, kept at bottom-6. */}
        <span className="absolute top-4 left-4 md:top-auto md:bottom-6 md:left-6 text-white font-bold opacity-80 uppercase tracking-widest text-xs md:text-sm">
          0{i + 1} — {project.category}
        </span>
      </div>

      {/* TEXT CONTENT SECTION */}
      {/* CHANGE 5: Reduced padding (p-6) and ensured flex justification works for variable height */}
      <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-between md:justify-center gap-6 bg-white">
        <div>
          {/* Title Size adjusted for mobile */}
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            {project.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
            {project.description}
          </p>

          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Impact Goals (SDGs)
            </p>
            <div className="flex flex-wrap gap-2">
              {project.sdgs.map((sdg, idx) => (
                <div 
                  key={idx} 
                  className="w-8 h-8 md:w-10 md:h-10 shadow-sm rounded overflow-hidden" // Slightly smaller icons on mobile
                  title="SDG Goal"
                >
                  <img src={sdg} alt="SDG" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Link Button */}
        <div className="mt-4 md:mt-8">
           <Link 
             to={project.link}
             className="inline-block text-sm font-bold border-b-2 border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors"
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
    <div ref={container} className="relative mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-yellow-500 font-bold mb-2">Our Initiatives</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Projects Driving Change
        </h2>
      </div>

      {projects.map((project, i) => {
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