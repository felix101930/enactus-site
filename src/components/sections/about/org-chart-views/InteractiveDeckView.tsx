// src/components/sections/about/org-chart-views/InteractiveDeckView.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

const DeckItem = ({ member }: { member: any }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-3"
  >
    <FaUserCircle className="text-gray-300 text-3xl shrink-0" />
    <div className="text-left overflow-hidden">
      <p className="font-bold text-gray-900 text-sm">{member.name}</p>
      <p className="text-[10px] text-gray-500 font-bold uppercase">{member.role}</p>
    </div>
  </motion.div>
);

const InteractiveDeckView = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<'ops' | 'projects' | null>('ops');

  return (
    <div className="relative w-full h-[750px] bg-gray-100 p-8 rounded-[2.5rem] flex flex-col justify-center items-center">
      
      {/* BACKGROUND CONNECTOR LINES */}
      <div className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 z-0 pointer-events-none">
         <svg className="w-full h-full">
            <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#cbd5e1" strokeWidth="4" />
            <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#cbd5e1" strokeWidth="4" />
         </svg>
      </div>

      <div className="flex w-full h-full gap-6 z-10">
        
        {/* 1. LEFT: OPERATIONS */}
        <motion.div 
          onClick={() => setActiveTab('ops')}
          className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500
            ${activeTab === 'ops' ? 'flex-[2] bg-white border-4 border-gray-200' : 'flex-1 bg-white hover:bg-gray-50 opacity-80'}
          `}
        >
          <div className="p-6 h-full flex flex-col">
             <div className="flex items-center gap-4 mb-6">
                <FaUserCircle className="text-gray-600 text-5xl shrink-0" />
                <h3 className="text-2xl font-bold text-gray-900">Operations</h3>
             </div>
             
             <AnimatePresence>
               {activeTab === 'ops' && (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                   className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                 >
                   {/* FIXED ALIGNMENT: Added flex-1 to text container */}
                   <div className="mb-4 p-4 bg-gray-50 rounded-xl flex items-center gap-4">
                     <FaUserCircle className="text-gray-800 text-4xl shrink-0" />
                     <div className="flex-1 text-left">
                       <p className="font-bold text-gray-900">{data.operations.vp.name}</p>
                       <p className="text-xs font-bold uppercase text-gray-500">Vice President of Operations</p>
                     </div>
                   </div>
                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                      {data.operations.directors.map((d: any) => <DeckItem key={d.name} member={d} />)}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </motion.div>

        {/* 2. CENTER: LEADERSHIP (Static Anchor) */}
        <div className="w-[300px] flex flex-col justify-center items-center gap-6 z-20">
           {data.coPresidents.map((p: any) => (
             <div key={p.name} className="bg-gray-900 text-white p-6 rounded-3xl shadow-2xl w-full flex flex-col items-center text-center transform hover:scale-105 transition-transform">
                <FaUserCircle className="text-yellow-400 text-6xl mb-3" />
                <p className="text-lg font-bold">{p.name}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{p.role}</p>
             </div>
           ))}
        </div>

        {/* 3. RIGHT: PROJECTS */}
        <motion.div 
          onClick={() => setActiveTab('projects')}
          className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500
            ${activeTab === 'projects' ? 'flex-[2] bg-yellow-400 border-4 border-yellow-500' : 'flex-1 bg-yellow-100 hover:bg-yellow-200 opacity-80'}
          `}
        >
          <div className="p-6 h-full flex flex-col">
             <div className="flex items-center gap-4 mb-6">
                <FaUserCircle className="text-yellow-800 text-5xl shrink-0" />
                <h3 className="text-2xl font-bold text-gray-900">Projects</h3>
             </div>
             
             <AnimatePresence>
               {activeTab === 'projects' && (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                   className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                 >
                   {/* FIXED ALIGNMENT: Added flex-1 to text container */}
                   <div className="mb-4 p-4 bg-white/40 rounded-xl flex items-center gap-4">
                     <FaUserCircle className="text-black text-4xl shrink-0" />
                     <div className="flex-1 text-left">
                       <p className="font-bold text-black">{data.projects.vp.name}</p>
                       <p className="text-xs font-bold uppercase text-black/60">Vice President of Projects</p>
                     </div>
                   </div>
                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                      {data.projects.managers.map((m: any) => <DeckItem key={m.name} member={m} />)}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default InteractiveDeckView;