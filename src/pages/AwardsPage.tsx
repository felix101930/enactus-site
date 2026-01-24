// src/pages/AwardsPage.tsx

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaTimes, FaCamera } from 'react-icons/fa';

import PageHeader from '../components/sections/shared/PageHeader';
import awardsHeroBg from '../assets/backgrounds/background-hero.png'; 

// --- IMAGE IMPORTS ---
// Make sure these files exist in: src/assets/images/awards/
import imgNationals2025 from '../assets/images/awards/Nationals-2025.jpg'; 
import imgHsbcDesjardins from '../assets/images/awards/HSBC_and_Desjardin.jpg';
import imgScotiabankClimate from '../assets/images/awards/Scotiabank_cc.JPG';
import imgScotiabankYouthTrophy from '../assets/images/awards/Scotiabank_Youth1.jpg';
import imgMapleLeaf from '../assets/images/awards/MapleLeaf.jpg';
// --- DATA STRUCTURE ---
interface AwardData {
  year: string;
  title: string;
  category: string;
  description?: string;
  icon: React.ReactNode;
  image?: string; // Optional image field
}

const awards: AwardData[] = [
  {
    year: "2025",
    title: "Enactus Canada National Competition",
    category: "National Semi-Finalist",
    description: "Placed in the Top 20 out of 50 competing schools across Canada.",
    icon: <FaMedal />,
    image: imgNationals2025
  },
  {
    year: "2025",
    title: "Bentley iTwin4Good Challenge",
    category: "National First Runner Up",
    description: "Awarded to Project HydraHerder for excellence in infrastructure digital twin technology.",
    icon: <FaTrophy />
  },
  {
    year: "2024",
    title: "PC Financial Resilience Project Accelerator",
    category: "Project Award Winner",
    description: "Recognizing Project UpSkill as a leading financial literacy and wellness program for addiction recovery.",
    icon: <FaCertificate />
  },
  {
    year: "2023",
    title: "HSBC Women's Entrepreneurial Leadership Award",
    category: "National Recognition",
    icon: <FaTrophy />,
    image: imgHsbcDesjardins
  },
  {
    year: "2023",
    title: "Desjardins Enactus Canada National Competition",
    category: "Opening Round Runner Up",
    icon: <FaMedal />,
    image: imgHsbcDesjardins
  },
  {
    year: "2020",
    title: "Scotiabank Climate Change Challenge",
    category: "Regional Runner Up",
    icon: <FaCertificate />,
    image: imgScotiabankClimate
  },
  {
    year: "2019",
    title: "Scotiabank Youth Empowerment Challenge",
    category: "Regional Second Runner Up",
    icon: <FaCertificate />,
    image: imgScotiabankYouthTrophy
  }
];

// Special Mentions Separate Data
const specialMentions = [
  {
    name: "Maple Leaf Club",
    recipient: "Owen Taylor (SAIT Student)",
    description: "Recognizing individuals who give a minimum of $1,000 every year to support the Enactus mission.",
    image: imgMapleLeaf
  }
];

// --- COMPONENTS ---

const PhotoModal = ({ award, onClose }: { award: AwardData | any; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl cursor-default"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
        >
          <FaTimes size={20} />
        </button>
        
        <img 
          src={award.image} 
          alt={award.title} 
          className="w-full h-auto max-h-[70vh] object-contain bg-gray-100" 
        />
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded uppercase">
              {award.year || "Special Recognition"}
            </span>
            <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">
              {award.title}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {award.category || award.name}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TimelineCard = ({ data, index, onOpen }: { data: AwardData; index: number; onOpen: (d: AwardData) => void }) => {
  const isEven = index % 2 === 0;
  const hasImage = !!data.image;

  return (
    <div className={`flex items-center justify-between w-full mb-12 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="hidden md:block w-5/12" />

      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-yellow-400 rounded-full z-20 flex items-center justify-center shadow-lg">
        <div className="text-yellow-600 text-sm">{data.icon}</div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => hasImage && onOpen(data)}
        className={`w-full pl-16 md:pl-0 md:w-5/12 ${hasImage ? 'cursor-pointer' : ''}`}
      >
        <div className={`p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 hover:border-yellow-400/50 transition-all duration-300 relative group overflow-hidden ${hasImage ? 'hover:scale-[1.02] hover:shadow-2xl' : ''}`}>
          
          <span className="absolute -right-4 -bottom-6 text-9xl font-bold text-gray-100 opacity-50 z-0 select-none group-hover:text-yellow-50 transition-colors duration-500">
            {data.year}
          </span>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {data.year}
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {data.title}
                </span>
              </div>
              {hasImage && (
                <div className="flex items-center gap-1 text-yellow-600">
                  <FaCamera size={12} />
                  <span className="text-[10px] font-bold uppercase">View Proof</span>
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
              {data.category}
            </h3>
            
            {data.description && (
              <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 border-yellow-400 pl-4">
                {data.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState<AwardData | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHeader pageName="Achievements" title="Our Legacy of Impact." backgroundImage={awardsHeroBg} />

      <AnimatePresence>
        {selectedAward && (
          <PhotoModal award={selectedAward} onClose={() => setSelectedAward(null)} />
        )}
      </AnimatePresence>

      <div className="relative py-20 px-4 overflow-hidden">
        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-400 -translate-x-1/2 rounded-full z-10"
          />

          <div className="relative z-10 pt-10">
            {awards.map((award, index) => (
              <TimelineCard key={index} data={award} index={index} onOpen={setSelectedAward} />
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FaStar className="text-yellow-400 text-4xl mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-12">Hall of Fame</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {specialMentions.map((mention, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                onClick={() => setSelectedAward(mention as any)}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer group flex flex-col md:flex-row items-center gap-8 text-left"
              >
                <div className="w-full md:w-1/3 h-48 rounded-xl overflow-hidden">
                   <img src={mention.image} alt={mention.recipient} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-yellow-400">{mention.name}</h3>
                    <FaCamera className="text-white/20 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-2">{mention.recipient}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{mention.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}