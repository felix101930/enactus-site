import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

// ... (keep all your logo/SDG imports the same)

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
        {/* TOP/LEFT COLOR BLOCK */}
        <div className={`w-full md:w-2/5 ${project.color} relative flex items-center justify-center p-8 md:p-12 overflow-hidden shrink-0`}>
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute w-64 h-64 bg-white opacity-20 rounded-full blur-3xl" 
          />
          
          {/* LOGO - Scaled down on mobile */}
          <div className="relative z-10 w-28 h-28 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-lg p-3">
             <img 
               src={project.logo} 
               alt={`${project.title} logo`} 
               className="w-full h-full object-contain rounded-full" 
             />
          </div>

          {/* CATEGORY TEXT - Moved to top on mobile to avoid overlap */}
          <span className="absolute top-6 left-6 md:top-auto md:bottom-6 md:left-6 text-white font-bold opacity-80 uppercase tracking-widest text-[10px] md:text-sm">
            0{i + 1} — {project.category}
          </span>
        </div>

        {/* CONTENT BLOCK */}
        <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
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
              {project.sdgs.map((sdg: any, idx: number) => (
                <div key={idx} className="w-8 h-8 md:w-10 md:h-10 shadow-sm rounded overflow-hidden">
                  <img src={sdg} alt="SDG" className="w-full h-full object-cover" />
                </div>
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
    <div ref={container} className="relative mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-yellow-500 font-bold mb-2">Our Initiatives</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects Driving Change</h2>
      </div>
      {/* ... keep mapping the projects ... */}
    </div>
  )
}