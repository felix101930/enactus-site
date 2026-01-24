// src/pages/AwardsPage.tsx

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa';

import PageHeader from '../components/sections/shared/PageHeader';
// You can use a specific background image for awards if you have one, 
// otherwise reusing the hero background looks consistent.
import awardsBg from '../assets/backgrounds/background-hero.png'; 

// --- DATA STRUCTURE ---
interface AwardData {
  year: string;
  title: string;
  category: string;
  description?: string;
  icon: React.ReactNode;
}

const awards: AwardData[] = [
  // 2025
  {
    year: "2025",
    title: "Bentley iTwin4Good Challenge",
    category: "National First Runner Up",
    description: "Awarded to Project HydraHerder for excellence in infrastructure digital twin technology.",
    icon: <FaTrophy />
  },
  {
    year: "2025",
    title: "Enactus Canada National Competition",
    category: "National Semi-Finalist",
    description: "Placed in the Top 20 out of 50 competing schools across Canada.",
    icon: <FaMedal />
  },
  // 2024
  {
    year: "2024",
    title: "PC Financial Resilience Project Accelerator",
    category: "Project Award Winner",
    description: "Recognizing Project UpSkill as a leading financial literacy and wellness program for addiction recovery.",
    icon: <FaCertificate />
  },
  {
    year: "2024",
    title: "Desjardins Youth Empowerment Challenge",
    category: "Regional Second Runner Up",
    icon: <FaMedal />
  },
  {
    year: "2024",
    title: "Enactus Canada National Competition",
    category: "Alterna Savings Semi-Finalist",
    icon: <FaStar />
  },
  // 2023
  {
    year: "2023",
    title: "HSBC Women's Entrepreneurial Leadership Award",
    category: "National Recognition",
    icon: <FaTrophy />
  },
  {
    year: "2023",
    title: "Desjardins Enactus Canada National Competition",
    category: "Opening Round Runner Up",
    icon: <FaMedal />
  },
  // 2020
  {
    year: "2020",
    title: "Scotiabank Climate Change Challenge",
    category: "Regional Runner Up",
    icon: <FaCertificate />
  },
  {
    year: "2020",
    title: "Opening Round Runner Up",
    category: "Enactus National Competition ",
    icon: <FaMedal />
  },
  // 2019
  {
    year: "2019",
    title: "Regional Second Runner Up",
    category: "Scotiabank Youth Empowerment Challenge",
    icon: <FaCertificate />
  },
  {
    year: "2019",
    title: "President's Leadership Award",
    category: "Institutional Award",
    icon: <FaTrophy />
  },
];

// Special Mentions Separate Data
const specialMentions = [
  {
    name: "Maple Leaf Club",
    recipient: "Owen Taylor (SAIT Student)",
    description: "Recognizing individuals who give a minimum of $1,000 every year to support the Enactus mission."
  }
];

// --- COMPONENTS ---

const TimelineCard = ({ data, index }: { data: AwardData; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-between w-full mb-12 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Spacer for Desktop Centering */}
      <div className="hidden md:block w-5/12" />

      {/* The Center Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-yellow-400 rounded-full z-20 flex items-center justify-center shadow-lg">
        <div className="text-yellow-600 text-sm">
          {data.icon}
        </div>
      </div>

      {/* The Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full pl-16 md:pl-0 md:w-5/12"
      >
        <div className={`p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 hover:border-yellow-400/50 transition-colors duration-300 relative group overflow-hidden`}>
          {/* Decorative Year Background */}
          <span className="absolute -right-4 -bottom-6 text-9xl font-bold text-gray-100 opacity-50 z-0 select-none group-hover:text-yellow-50 transition-colors duration-500">
            {data.year}
          </span>

          <div className="relative z-10">
            {/* TOP ROW: Year Badge + Competition Name (Context) */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                {data.year}
              </span>
              {/* Swapped: Title (Competition) is now the smaller text */}
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                {data.title}
              </span>
            </div>
            
            {/* MAIN HEADLINE: Category (The Award) is now the big text */}
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              {data.category}
            </h3>
            
            {data.description && (
              <p className="text-gray-600 text-base leading-relaxed border-l-4 border-yellow-400 pl-4">
                {data.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>

    </div>
  );
};
function AwardsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the line drawing animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHeader 
        pageName="Achievements" 
        title="Our Legacy of Impact." 
        backgroundImage={awardsBg} 
      />

      <div className="relative py-20 px-4 overflow-hidden">
        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          
          {/* THE GOLDEN THREAD (Line) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-400 -translate-x-1/2 rounded-full z-10"
          />

          {/* TIMELINE ITEMS */}
          <div className="relative z-10 pt-10">
            {awards.map((award, index) => (
              <TimelineCard key={index} data={award} index={index} />
            ))}
          </div>

        </div>
      </div>

      {/* HALL OF FAME / SPECIAL MENTIONS */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-3 rounded-full bg-yellow-400/10 mb-6">
            <FaStar className="text-yellow-400 text-3xl" />
          </div>
          <h2 className="text-4xl font-bold mb-12">Hall of Fame & Special Recognition</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {specialMentions.map((mention, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{mention.name}</h3>
                <p className="text-xl font-bold text-white mb-4">{mention.recipient}</p>
                <p className="text-gray-400">{mention.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default AwardsPage;