// src/components/sections/about/org-chart-views/DeckView.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaChevronRight } from 'react-icons/fa';

const GridItem = ({ member }: { member: any }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-3 hover:shadow-md transition-shadow"
  >
    <FaUserCircle className="text-gray-300 text-3xl shrink-0" />
    <div className="text-left overflow-hidden">
      <p className="font-bold text-gray-800 text-sm truncate">{member.name}</p>
      <p className="text-xs text-gray-500 truncate">{member.role}</p>
    </div>
  </motion.div>
);

const DeckView = ({ data }: { data: any }) => {
  const [activeCard, setActiveCard] = useState<'leadership' | 'ops' | 'projects'>('ops');

  const cards = [
    {
      id: 'leadership',
      title: 'Leadership',
      color: 'bg-gray-800',
      textColor: 'text-white',
      count: data.coPresidents.length,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {data.coPresidents.map((p: any) => (
             <div key={p.name} className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 flex items-center gap-4">
                <FaUserCircle className="text-yellow-400 text-5xl" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">{p.name}</p>
                  <p className="text-yellow-400">{p.role}</p>
                </div>
             </div>
          ))}
        </div>
      )
    },
    {
      id: 'ops',
      title: 'Operations',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-200',
      count: 1 + data.operations.directors.length, // VP + Directors
      content: (
        <div className="mt-8">
          <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200 inline-block">
             <p className="text-xs font-bold text-gray-400 uppercase mb-2">Vice President</p>
             <div className="flex items-center gap-3">
               <FaUserCircle className="text-gray-800 text-2xl" />
               <div className="text-left">
                 <p className="font-bold text-gray-900">{data.operations.vp.name}</p>
                 <p className="text-xs text-gray-500">{data.operations.vp.role}</p>
               </div>
             </div>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase mb-4 text-left">The Directors</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
             {data.operations.directors.map((d: any) => <GridItem key={d.name} member={d} />)}
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      color: 'bg-yellow-400',
      textColor: 'text-gray-900',
      count: 1 + data.projects.managers.length,
      content: (
        <div className="mt-8">
           <div className="mb-6 bg-yellow-300/50 p-4 rounded-xl border border-yellow-500/20 inline-block">
             <p className="text-xs font-bold text-black/50 uppercase mb-2">Vice President</p>
             <div className="flex items-center gap-3">
               <FaUserCircle className="text-black text-2xl" />
               <div className="text-left">
                 <p className="font-bold text-black">{data.projects.vp.name}</p>
                 <p className="text-xs text-black/70">{data.projects.vp.role}</p>
               </div>
             </div>
          </div>
          <p className="text-xs font-bold text-black/50 uppercase mb-4 text-left">Project Managers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
             {data.projects.managers.map((m: any) => <GridItem key={m.name} member={m} />)}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-[600px] flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-3xl">
      {cards.map((card) => {
        const isActive = activeCard === card.id;
        
        return (
          <motion.div
            key={card.id}
            onClick={() => setActiveCard(card.id as any)}
            layout
            className={`
              relative rounded-2xl overflow-hidden cursor-pointer shadow-lg
              ${card.color} ${card.textColor} ${card.borderColor ? `border ${card.borderColor}` : ''}
              flex flex-col
            `}
            // Animation logic for expanding/shrinking
            animate={{ 
              flex: isActive ? 3 : 1,
              opacity: isActive ? 1 : 0.7
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="p-6 h-full flex flex-col">
              
              {/* Header of the Card */}
              <div className="flex items-center justify-between mb-2">
                 <h3 className={`text-xl font-bold whitespace-nowrap ${!isActive && 'md:rotate-90 md:mt-12 md:origin-left'}`}>
                   {card.title}
                 </h3>
                 {isActive && (
                   <span className="text-xs font-mono opacity-60 bg-current px-2 py-1 rounded-full text-white bg-opacity-20">
                     {card.count} Members
                   </span>
                 )}
                 {!isActive && <FaChevronRight className="md:hidden" />}
              </div>

              {/* Content (Only visible when active) */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                  >
                    {card.content}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DeckView;