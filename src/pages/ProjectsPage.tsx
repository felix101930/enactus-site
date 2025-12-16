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

// SDG Icons
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
    // Colors
    borderColor: "border-red-500",
    textColor: "text-red-500",
    glowColor: "bg-red-500",
    boxTint: "bg-red-50", // Light tint for the text box
    // Assets
    logo: logoCaseClash,
    layout: "left", 
    sdgs: [sdg08, sdg04, sdg10, sdg09, sdg12, sdg17]
  },
  {
    id: "02",
    title: "PROJECT UPSKILL",
    subtitle: "FINANCIAL LITERACY",
    description: "Empowering recovery through education. UpSkill delivers tailored financial literacy and wellness workshops to individuals in addiction recovery programs, providing the tools needed for sustainable independence.",
    // Colors
    borderColor: "border-yellow-500",
    textColor: "text-yellow-600",
    glowColor: "bg-yellow-400",
    boxTint: "bg-yellow-50",
    // Assets
    logo: logoUpSkill,
    layout: "right",
    sdgs: [sdg01, sdg04, sdg10, sdg11, sdg16]
  },
  {
    id: "03",
    title: "HYDRAHERDER",
    subtitle: "AI INFRASTRUCTURE",
    description: "Preventing failure before it happens. HydraHerder utilizes AI-powered predictive monitoring to detect leaks in water infrastructure early, conserving billions of liters of water annually.",
    // Colors
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
    glowColor: "bg-blue-500",
    boxTint: "bg-blue-50",
    // Assets
    logo: logoHydra,
    layout: "center", 
    sdgs: [sdg13, sdg06, sdg11, sdg09]
  }
];

// --- COMPONENTS ---

// 1. Reusable Interactive SDG Icon
// This ensures ALL icons behave the same way
const SDGIcon = ({ src }: { src: string }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-16 h-16 shadow-md rounded-md overflow-hidden bg-white cursor-pointer hover:shadow-xl hover:ring-2 hover:ring-gray-200"
    title="Sustainable Development Goal"
  >
    <img src={src} alt="SDG Icon" className="w-full h-full object-cover" />
  </motion.div>
);

// 2. The Background Pattern (Clean Graph)
const CleanBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}
    />
  </div>
);

// 3. The Project Section Component
const ProjectSection = ({ project }: { project: typeof projects[0] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the giant background logo
  const logoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden min-h-[85vh] flex items-center">
      
      {/* CONCEPT B: AMBIENT GLOW */}
      {/* A massive, blurred blob of color behind the content to fill white space */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${project.glowColor} rounded-full blur-[120px] opacity-[0.08] pointer-events-none z-0`} />

      {/* GIANT FADED BACKGROUND LOGO */}
      <motion.div 
        style={{ y: logoY, rotate: logoRotate }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.06] pointer-events-none"
      >
        <img src={project.logo} alt="" className="w-[800px] h-[800px] object-contain grayscale" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        
        {/* === LAYOUT VARIANT: LEFT === */}
        {project.layout === 'left' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Title & Description Area */}
            <div className="lg:col-span-5">
              <div className={`border-l-8 ${project.borderColor} pl-8 py-4`}>
                <h2 className="text-6xl font-extrabold text-gray-900 leading-none tracking-tight">
                  {project.title}
                </h2>
                <p className={`text-xl font-bold ${project.textColor} mt-3 uppercase tracking-wide`}>
                  {project.subtitle}
                </p>
              </div>
              
              <div className="mt-8">
                {/* CONCEPT C: CONTEXT BOX */}
                {/* Tinted background box instead of plain white */}
                <div className={`${project.boxTint} p-10 shadow-sm rounded-2xl border border-white/50 relative z-20`}>
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Visuals & SDGs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end space-y-10">
              {/* Logo Container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10"
              >
                 <img src={project.logo} alt={project.title} className="w-56 h-56 object-contain" />
              </motion.div>

              {/* SDG Row */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                {project.sdgs.map((sdg, idx) => (
                  <SDGIcon key={idx} src={sdg} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === LAYOUT VARIANT: RIGHT === */}
        {project.layout === 'right' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visuals (Left side now) */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-10">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10"
               >
                 <img src={project.logo} alt={project.title} className="w-56 h-56 object-contain" />
              </motion.div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {project.sdgs.map((sdg, idx) => (
                  <SDGIcon key={idx} src={sdg} />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 order-1 lg:order-2 text-right">
              <div className={`border-r-8 ${project.borderColor} pr-8 py-4 flex flex-col items-end`}>
                <h2 className="text-6xl font-extrabold text-gray-900 leading-none tracking-tight">
                  {project.title}
                </h2>
                <p className={`text-xl font-bold ${project.textColor} mt-3 uppercase tracking-wide`}>
                  {project.subtitle}
                </p>
              </div>

              <div className="mt-8">
                {/* CONCEPT C: CONTEXT BOX */}
                <div className={`${project.boxTint} p-10 shadow-sm rounded-2xl border border-white/50 relative text-left z-20`}>
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === LAYOUT VARIANT: CENTER (HydraHerder) === */}
        {project.layout === 'center' && (
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Clean Header */}
            <div className="mb-16">
              <h2 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tight mb-4">
                {project.title}
              </h2>
              <div className={`h-2 w-32 mx-auto ${project.glowColor} rounded-full`}></div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-left">
              {/* CONCEPT C: CONTEXT BOXES */}
              <div className={`${project.boxTint} p-8 shadow-sm border-t-8 ${project.borderColor} rounded-2xl`}>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Challenge</h4>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  Water infrastructure failure is invisible until it's a disaster. Leaks waste critical resources and cause massive property damage.
                </p>
              </div>
              <div className={`${project.boxTint} p-8 shadow-sm border-t-8 ${project.borderColor} rounded-2xl`}>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Solution</h4>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  AI-powered predictive monitoring. We detect the sound frequencies of a leak before the pipe bursts, allowing for proactive maintenance.
                </p>
              </div>
            </div>

            {/* Central Visual */}
            <div className="relative inline-block mb-12">
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl mx-auto relative z-10 border-4 border-white"
               >
                 <img src={project.logo} alt={project.title} className="w-40 h-40 object-contain" />
              </motion.div>
              {/* Ring Decoration */}
              <div className={`absolute top-0 left-0 w-full h-full border-4 ${project.borderColor} opacity-20 rounded-full -z-0 transform scale-110`}></div>
            </div>

            {/* SDG Row */}
             <div className="flex justify-center gap-4">
                  {project.sdgs.map((sdg, idx) => (
                    <SDGIcon key={idx} src={sdg} />
                  ))}
             </div>

          </div>
        )}

      </div>
    </section>
  );
};

// 4. Main Page Component
function ProjectsPage() {
  return (
    <main className="bg-gray-50 min-h-screen relative">
      <PageHeader 
        pageName="Our Work" 
        title="Innovation in Action." 
        backgroundImage={headerBg} 
      />

      <div className="relative">
        <CleanBackground />
        
        {/* Render Sections */}
        {projects.map((proj, index) => (
          <div key={proj.id} id={proj.title.toLowerCase().replace(/\s/g, '-')}>
             <ProjectSection project={proj} />
             
             {/* Visual Separator */}
             {index < projects.length - 1 && (
               <div className="max-w-2xl mx-auto h-px bg-gray-200" />
             )}
          </div>
        ))}
        
        {/* Footer Spacer */}
        <div className="h-24"></div>
      </div>
    </main>
  );
}

export default ProjectsPage;