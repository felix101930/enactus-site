// src/pages/AwardsPage.tsx

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaTimes, FaExpandAlt, FaPlay } from 'react-icons/fa';

import PageHeader from '../components/sections/shared/PageHeader';
import awardsHeroBg from '../assets/backgrounds/background-hero.png'; 

// --- FIXED IMAGE IMPORTS ---
import imgNationals2025 from '../assets/images/awards/Nationals-2025.jpg'; 
import imgHsbcDesjardins from '../assets/images/awards/HSBC_and_Desjardin.jpg';
import imgScotiabankClimate from '../assets/images/awards/Scotiabank_cc.jpg';
import imgScotiabankYouthTrophy from '../assets/images/awards/Scotiabank_Youth1.jpg';
import imgMapleLeaf from '../assets/images/awards/MapleLeaf.jpg';
import logoUpSkill from '../assets/logos/logo-upskill.png'; 

// --- DATA STRUCTURE ---
interface AwardData {
  year: string;
  title: string;
  category: string;
  description?: string;
  icon: React.ReactNode;
  image?: string; 
  videoId?: string; 
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
    icon: <FaTrophy />,
    // No image = Auto Gradient
  },
  {
    year: "2025",
    title: "Maple Leaf Club Recognition",
    category: "Individual Philanthropy Award",
    description: "Recognizing Owen Taylor (SAIT Student) for giving a minimum of $1,000 to support the Enactus mission.",
    icon: <FaStar />,
    image: imgMapleLeaf
  },
  {
    year: "2024",
    title: "Enactus Canada National Competition",
    category: "Alterna Savings Semi-finalist",
    description: "Recognized for excellence in sustainable financial education projects.",
    icon: <FaMedal />,
    // No Image
  },
  {
    year: "2024",
    title: "Desjardins Youth Empowerment Challenge",
    category: "Regional Second Runner Up",
    description: "Awarded for outstanding impact in empowering youth through educational initiatives.",
    icon: <FaCertificate />,
    // No Image
  },
  {
    year: "2024",
    title: "PC Financial Resilience Project Accelerator",
    category: "Project Award Winner",
    description: "Recognizing Project UpSkill as a leading financial literacy and wellness program for addiction recovery.",
    icon: <FaCertificate />,
    image: logoUpSkill
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
    title: "Enactus National Competition",
    category: "Opening Round Runner Up",
    description: "Recognized for sustained excellence and competitive performance at the national level.",
    icon: <FaMedal />,
    // No Image
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
    title: "SAIT Presidential Leadership Award",
    category: "Institutional Honor",
    description: "Recognizing exceptional leadership and contribution to the student community within SAIT.",
    icon: <FaTrophy />,
    videoId: "0h5l1sI-Bok" // UPDATED VIDEO ID
  },
  {
    year: "2019",
    title: "Scotiabank Youth Empowerment Challenge",
    category: "Regional Second Runner Up",
    icon: <FaCertificate />,
    image: imgScotiabankYouthTrophy
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm cursor-zoom-out"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
        >
          <FaTimes size={30} />
        </button>
        
        {/* === VIDEO DISPLAY === */}
        {award.videoId ? (
           <div className="w-full aspect-video rounded-lg shadow-2xl overflow-hidden bg-black border border-white/10">
             <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${award.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={award.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
           </div>
        ) : (
          /* === IMAGE DISPLAY === */
          award.image && (
            <img 
              src={award.image} 
              alt={award.title} 
              className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl" 
            />
          )
        )}
        
        <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-white">{award.category}</h3>
            <p className="text-gray-400">{award.year}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- THE POSTER CARD COMPONENT ---
const PosterCard = ({ data, index, onOpen }: { data: AwardData; index: number; onOpen: (d: AwardData) => void }) => {
  const isEven = index % 2 === 0;

  // If it's a video, use the YT thumbnail, otherwise use the uploaded image
  const displayImage = data.videoId 
    ? `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg` 
    : data.image;
  
  return (
    <div className={`flex items-center justify-between w-full mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Spacer to push card to side */}
      <div className="hidden md:block w-5/12" />

      {/* Center Timeline Icon */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-900 border-4 border-yellow-400 rounded-full z-20 flex items-center justify-center shadow-xl">
        <div className="text-yellow-400 text-lg">{data.icon}</div>
      </div>

      {/* THE POSTER CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        // Click to Open Modal if Image OR Video exists
        onClick={() => (data.image || data.videoId) && onOpen(data)}
        className={`relative w-full pl-16 md:pl-0 md:w-5/12 group ${(data.image || data.videoId) ? 'cursor-pointer' : ''}`}
      >
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900">
          
          {/* 1. MEDIA LAYER: THUMBNAIL (Video) or IMAGE */}
          {displayImage ? (
            <>
              <motion.img 
                src={displayImage} 
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              
              {/* PLAY BUTTON OVERLAY (For Videos Only) */}
              {data.videoId && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                       <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                </div>
              )}
            </>
          ) : (
            // Fallback Abstract Gradient if no media
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
            </div>
          )}

          {/* 2. GRADIENT OVERLAY (For Text Readability) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

          {/* 3. CONTENT OVERLAY */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-30 pointer-events-none">
            
            {/* Top Badge */}
            <div className="absolute top-6 right-6">
               <span className="bg-yellow-400 text-black text-sm font-extrabold px-3 py-1 rounded shadow-lg">
                 {data.year}
               </span>
            </div>

            {/* Expand Hint Icon (Show for Video OR Image) */}
            {(data.image || data.videoId) && (
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full text-white">
                        <FaExpandAlt size={14} />
                    </div>
                </div>
            )}

            <motion.div 
               initial={{ y: 0 }}
               whileHover={{ y: -5 }}
               transition={{ duration: 0.3 }}
            >
              <h4 className="text-yellow-400 font-bold uppercase text-xs tracking-widest mb-2 drop-shadow-md">
                {data.title}
              </h4>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                {data.category}
              </h3>
              
              {data.description && (
                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-yellow-500 pl-4 bg-black/30 backdrop-blur-sm rounded-r-lg py-2 pr-2">
                  {data.description}
                </p>
              )}
            </motion.div>
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
    <main className="bg-white min-h-screen">
      <PageHeader pageName="Achievements" title="Our Legacy of Impact." backgroundImage={awardsHeroBg} />

      <AnimatePresence>
        {selectedAward && (
          <PhotoModal award={selectedAward} onClose={() => setSelectedAward(null)} />
        )}
      </AnimatePresence>

      <div className="relative py-20 px-4 overflow-hidden">
        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          
          {/* Timeline Line (Background) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full"></div>
          
          {/* Timeline Line (Progress - Yellow) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-400 -translate-x-1/2 rounded-full z-10 origin-top"
          />

          <div className="relative z-10 pt-10">
            {awards.map((award, index) => (
              <PosterCard key={index} data={award} index={index} onOpen={setSelectedAward} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}