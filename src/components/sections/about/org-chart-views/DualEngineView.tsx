// src/components/sections/about/org-chart-views/DualEngineView.tsx

import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

const MemberCard = ({ member, align = "left" }: { member: any; align?: "left" | "right" }) => (
  <motion.div 
    initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`flex items-center gap-3 mb-4 ${align === "right" ? "flex-row-reverse text-right" : "text-left"}`}
  >
    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
      <FaUserCircle className="text-white text-2xl" />
    </div>
    <div>
      <p className="font-bold text-white leading-tight">{member.name}</p>
      <p className="text-white/60 text-xs uppercase tracking-wider">{member.role}</p>
    </div>
  </motion.div>
);

const DualEngineView = ({ data }: { data: any }) => {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
      
      {/* CENTER BRIDGE (Presidents) - Absolute overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm">
         <div className="bg-white px-6 py-4 rounded-full shadow-xl flex items-center justify-between mx-4">
            {data.coPresidents.map((p: any) => (
              <div key={p.name} className="flex flex-col items-center">
                <FaUserCircle className="text-gray-800 text-3xl mb-1" />
                <p className="text-xs font-bold">{p.name}</p>
              </div>
            ))}
            <div className="h-8 w-px bg-gray-300 mx-2"></div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Leadership</div>
         </div>
      </div>

      {/* LEFT ENGINE: OPERATIONS (Dark Theme) */}
      <div className="group relative w-full md:w-1/2 bg-gray-900 p-8 pt-32 transition-all duration-500 hover:flex-[1.2]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-100 md:opacity-80 md:group-hover:opacity-100">
          <h3 className="text-3xl font-extrabold text-white mb-2">Operations</h3>
          <p className="text-gray-400 text-sm mb-12">The backbone of our organization.</p>
          
          {/* VP Highlight */}
          <div className="mb-12 border-l-4 border-yellow-500 pl-4">
             <h4 className="text-yellow-500 font-bold text-sm uppercase mb-2">Vice President</h4>
             <div className="flex items-center gap-4">
               <FaUserCircle className="text-white text-4xl" />
               <div className="text-left">
                 <p className="text-2xl font-bold text-white">{data.operations.vp.name}</p>
                 <p className="text-gray-400 text-sm">{data.operations.vp.role}</p>
               </div>
             </div>
          </div>

          {/* List */}
          <div className="space-y-2">
            <h4 className="text-gray-500 font-bold text-xs uppercase mb-4 text-left">Directors</h4>
            {data.operations.directors.map((d: any) => (
              <MemberCard key={d.name} member={d} align="left" />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT ENGINE: PROJECTS (Yellow Theme) */}
      <div className="group relative w-full md:w-1/2 bg-yellow-400 p-8 pt-32 transition-all duration-500 hover:flex-[1.2]">
         <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

         <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-100 md:opacity-80 md:group-hover:opacity-100 text-right">
          <h3 className="text-3xl font-extrabold text-black mb-2">Projects</h3>
          <p className="text-black/60 text-sm mb-12">Driving impact in the community.</p>
          
          {/* VP Highlight */}
          <div className="mb-12 border-r-4 border-black pr-4 flex flex-col items-end">
             <h4 className="text-black font-bold text-sm uppercase mb-2">Vice President</h4>
             <div className="flex flex-row-reverse items-center gap-4">
               <FaUserCircle className="text-black text-4xl" />
               <div>
                 <p className="text-2xl font-bold text-black">{data.projects.vp.name}</p>
                 <p className="text-black/70 text-sm">{data.projects.vp.role}</p>
               </div>
             </div>
          </div>

          {/* List */}
          <div className="space-y-2 flex flex-col items-end">
            <h4 className="text-black/50 font-bold text-xs uppercase mb-4">Managers</h4>
            {data.projects.managers.map((m: any) => (
              <MemberCard key={m.name} member={m} align="right" />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default DualEngineView;