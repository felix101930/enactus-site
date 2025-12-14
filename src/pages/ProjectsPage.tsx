// src/pages/ProjectsPage.tsx

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageHeader from '../components/sections/shared/PageHeader';

// --- ASSET IMPORTS ---
import headerBg from '../assets/backgrounds/background-about-hero.png';

// Project Logos
import logoCaseClash from '../assets/logos/logo-case-clash.png';
import logoUpSkill from '../assets/logos/logo-upskill.png';
import logoHydra from '../assets/logos/logo-hydraherder.png';

// SDG Icons - FIXED IMPORTS
// Matching your screenshot: "sdg-1.jpg", "sdg-4.jpg", etc.
import sdg01 from '../assets/icons/sdg/sdg-1.jpg';
import sdg04 from '../assets/icons/sdg/sdg-4.jpg';
import sdg06 from '../assets/icons/sdg/sdg-6.jpg';
import sdg08 from '../assets/icons/sdg/sdg-8.jpg';
import sdg09 from '../assets/icons/sdg/sdg-9.jpg';
import sdg10 from '../assets/icons/sdg/sdg-10.jpg';
import sdg11 from '../assets/icons/sdg/sdg-11.jpg';
import sdg12 from '../assets/icons/sdg/sdg-12.jpg';
import sdg13 from '../assets/icons/sdg/sdg-13.jpg';
import sdg16 from '../assets/icons/sdg/sdg-16.jpg';
import sdg17 from '../assets/icons/sdg/sdg-17.jpg';

// --- DATA CONFIGURATION ---
const projects = [
  {
    id: "01",
    title: "CASE CLASH",
    subtitle: "BUSINESS COMPETITION",
    description: "Case Clash bridges the gap between high school theory and real-world business. We provide students with hands-on experience by partnering them with local small businesses to solve actual operational challenges.",
    details: "STATUS: ACTIVE // SECTOR: EDUCATION",
    color: "border-red-500",
    textColor: "text-red-500",
    bgAccent: "bg-red-50",
    logo: logoCaseClash,
    layout: "left", 
    sdgs: [sdg08, sdg04, sdg10, sdg09, sdg12, sdg17]
  },
  {
    id: "02",
    title: "PROJECT UPSKILL",
    subtitle: "FINANCIAL LITERACY",
    description: "Empowering recovery through education. UpSkill delivers tailored financial literacy and wellness workshops to individuals in addiction recovery programs, providing the tools needed for sustainable independence.",
    details: "STATUS: ACTIVE // SECTOR: SOCIAL IMPACT",
    color: "border-yellow-500",
    textColor: "text-yellow-600",
    bgAccent: "bg-yellow-50",
    logo: logoUpSkill,
    layout: "right",
    sdgs: [sdg01, sdg04, sdg10, sdg11, sdg16]
  },
  {
    id: "03",
    title: "HYDRAHERDER",
    subtitle: "AI INFRASTRUCTURE",
    description: "Preventing failure before it happens. HydraHerder utilizes AI-powered predictive monitoring to detect leaks in water infrastructure early, conserving billions of liters of water annually.",
    details: "STATUS: BETA // SECTOR: TECH & ENVIRO",
    color: "border-blue-500",
    textColor: "text-blue-500",
    bgAccent: "bg-blue-50",
    logo: logoHydra,
    layout: "center", 
    sdgs: [sdg13, sdg06, sdg11, sdg09]
  }
];

// --- COMPONENTS ---

// 1. The "Blueprint" Background Pattern
const BlueprintBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
    {/* CSS Grid Pattern */}
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
  </div>
);

// 2. The Project Section Component
const BlueprintSection = ({ project }: { project: typeof projects[0] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the giant background logo
  const logoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* GIANT FADED BACKGROUND LOGO */}
      <motion.div 
        style={{ y: logoY, rotate: logoRotate }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none"
      >
        <img src={project.logo} alt="" className="w-[800px] h-[800px] object-contain grayscale" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        
        {/* === LAYOUT VARIANT: LEFT === */}
        {project.layout === 'left' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Title & ID Area */}
            <div className="lg:col-span-5">
              <div className="font-mono text-sm text-gray-400 mb-2 tracking-widest">
                ID_{project.id} // {project.details}
              </div>
              <div className={`border-l-8 ${project.color} pl-6 py-2`}>
                <h2 className="text-6xl font-bold text-gray-800 uppercase leading-none">
                  {project.title}
                </h2>
                <p className={`text-xl font-bold ${project.textColor} mt-2 tracking-wide uppercase`}>
                  {project.subtitle}
                </p>
              </div>
              
              {/* Dashed Connector Line */}
              <div className="hidden lg:block h-24 w-0 border-l-2 border-dashed border-gray-300 ml-6 my-4"></div>

              {/* Description Card */}
              <div className="bg-white p-8 shadow-xl border border-gray-100 relative group transition-transform hover:-translate-y-1">
                <div className={`absolute -top-3 -right-3 w-12 h-12 ${project.bgAccent} opacity-50 transform rotate-12`}></div>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="mt-6 font-mono text-xs text-gray-400">
                  // END TRANSMISSION
                </div>
              </div>
            </div>

            {/* Visuals & SDGs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end space-y-8">
              {/* Logo "Stamp" */}
              <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                 <img src={project.logo} alt={project.title} className="w-40 h-40 object-contain" />
              </div>

              {/* SDG Grid */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 inline-block">
                <p className="font-mono text-xs text-center mb-4 text-gray-500">COMPLIANCE_STAMPS (SDGs)</p>
                <div className="flex flex-wrap gap-4 justify-center max-w-md">
                  {project.sdgs.map((sdg, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-16 h-16 shadow-md rounded-md overflow-hidden cursor-help bg-white"
                      title="Sustainable Development Goal"
                    >
                      <img src={sdg} alt="SDG Icon" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === LAYOUT VARIANT: RIGHT === */}
        {project.layout === 'right' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visuals (Left side now) */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-8">
               <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                 <img src={project.logo} alt={project.title} className="w-40 h-40 object-contain" />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 inline-block">
                <p className="font-mono text-xs text-center mb-4 text-gray-500">COMPLIANCE_STAMPS (SDGs)</p>
                <div className="flex flex-wrap gap-4 justify-center max-w-md">
                  {project.sdgs.map((sdg, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      className="w-16 h-16 shadow-md rounded-md overflow-hidden cursor-help bg-white"
                    >
                      <img src={sdg} alt="SDG Icon" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 order-1 lg:order-2 text-right">
              <div className="font-mono text-sm text-gray-400 mb-2 tracking-widest">
                ID_{project.id} // {project.details}
              </div>
              <div className={`border-r-8 ${project.color} pr-6 py-2 flex flex-col items-end`}>
                <h2 className="text-6xl font-bold text-gray-800 uppercase leading-none">
                  {project.title}
                </h2>
                <p className={`text-xl font-bold ${project.textColor} mt-2 tracking-wide uppercase`}>
                  {project.subtitle}
                </p>
              </div>

              <div className="hidden lg:block h-24 w-0 border-r-2 border-dashed border-gray-300 mr-6 my-4 ml-auto"></div>

              <div className="bg-white p-8 shadow-xl border border-gray-100 relative text-left group transition-transform hover:-translate-y-1">
                 <div className={`absolute -top-3 -left-3 w-12 h-12 ${project.bgAccent} opacity-50 transform -rotate-12`}></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="mt-6 font-mono text-xs text-gray-400">
                  // END TRANSMISSION
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === LAYOUT VARIANT: CENTER (Technical) === */}
        {project.layout === 'center' && (
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Tech Header */}
            <div className="border-b-2 border-dashed border-gray-300 pb-8 mb-12">
               <div className="font-mono text-sm text-gray-400 mb-2 tracking-widest">
                SYSTEM_ID: {project.id} // {project.details}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-800 uppercase tracking-tighter">
                {project.title}
              </h2>
              <div className={`inline-block px-4 py-1 mt-4 ${project.bgAccent} ${project.textColor} font-bold font-mono text-sm rounded-full`}>
                :: SYSTEM ONLINE ::
              </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
              <div className="bg-white p-6 shadow-lg border-t-4 border-blue-500">
                <h4 className="font-mono text-xs font-bold text-gray-400 mb-2">INPUT // PROBLEM_DETECTED</h4>
                <p className="text-gray-700">Water infrastructure failure is invisible until it's a disaster. Leaks waste resources and destroy property.</p>
              </div>
              <div className="bg-white p-6 shadow-lg border-t-4 border-blue-500">
                <h4 className="font-mono text-xs font-bold text-gray-400 mb-2">OUTPUT // SOLUTION_DEPLOYED</h4>
                <p className="text-gray-700">AI-powered predictive monitoring. We detect the sound of a leak before the pipe bursts.</p>
              </div>
            </div>

            {/* Central Visual */}
            <div className="relative inline-block">
               <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl mx-auto relative z-10">
                 <img src={project.logo} alt={project.title} className="w-32 h-32 object-contain" />
              </div>
              {/* Spinning Ring */}
              <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-200 rounded-full animate-spin-slow -z-0" style={{ transform: 'scale(1.2)' }}></div>
            </div>

            {/* SDG Row */}
             <div className="mt-12 flex justify-center gap-4">
                  {project.sdgs.map((sdg, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="w-14 h-14 bg-white shadow-sm rounded border border-gray-200"
                    >
                      <img src={sdg} alt="SDG" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
             </div>

          </div>
        )}

      </div>
    </section>
  );
};

// 3. Main Page Component
function ProjectsPage() {
  return (
    <main className="bg-gray-50 min-h-screen relative">
      <PageHeader 
        pageName="Our Blueprint" 
        title="Engineering Social Change." 
        backgroundImage={headerBg} 
      />

      <div className="relative">
        <BlueprintBackground />
        
        {/* Render Sections */}
        {projects.map((proj) => (
          <div key={proj.id} id={proj.title.toLowerCase().replace(/\s/g, '-')}>
             <BlueprintSection project={proj} />
             {/* Section Divider */}
             <div className="max-w-7xl mx-auto h-px bg-gray-300 w-full relative">
                <span className="absolute left-1/2 -top-2 bg-gray-50 px-2 text-xs font-mono text-gray-400">// SECTION_BREAK //</span>
             </div>
          </div>
        ))}
        
        {/* Final Footer Spacer */}
        <div className="h-24 flex items-center justify-center font-mono text-xs text-gray-400">
           [ END OF BLUEPRINT ]
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;