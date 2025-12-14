// src/components/sections/about/org-chart-views/HierarchyView.tsx

import { FaUserCircle } from 'react-icons/fa';

// Small Card Component for Managers/Directors
const StaffCard = ({ name, role }: { name: string, role: string }) => (
  <div className="flex items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <FaUserCircle className="text-gray-300 text-2xl mr-3" />
    <div className="text-left">
      <p className="text-sm font-bold text-gray-800">{name}</p>
      <p className="text-[10px] text-gray-500 uppercase">{role}</p>
    </div>
  </div>
);

const HierarchyView = ({ data }: { data: any }) => {
  return (
    <div className="w-full bg-gray-50 rounded-3xl p-8 border border-gray-200">
      
      {/* --- LEVEL 1: PRESIDENTS --- */}
      <div className="flex flex-col items-center justify-center mb-8 relative z-10">
        <div className="bg-gray-900 text-white px-10 py-6 rounded-full flex gap-16 shadow-xl">
           {data.coPresidents.map((p: any) => (
             <div key={p.name} className="flex flex-col items-center">
               <FaUserCircle className="text-yellow-400 text-4xl mb-2" />
               <p className="font-bold text-sm">{p.name}</p>
               <p className="text-[10px] text-gray-400 uppercase tracking-widest">Co-President</p>
             </div>
           ))}
        </div>
        
        {/* SVG Connector Branch */}
        <div className="h-16 w-full max-w-[50%]">
           <svg className="w-full h-full overflow-visible">
             {/* Main Stem */}
             <path d="M 50% 0 L 50% 30" stroke="#cbd5e1" strokeWidth="2" fill="none" />
             {/* Split */}
             <path d="M 50% 30 L 15% 30 L 15% 65" stroke="#cbd5e1" strokeWidth="2" fill="none" />
             <path d="M 50% 30 L 85% 30 L 85% 65" stroke="#cbd5e1" strokeWidth="2" fill="none" />
           </svg>
        </div>
      </div>

      {/* --- LEVEL 2: SPLIT VIEW --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        
        {/* LEFT: OPERATIONS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-gray-400">
           <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
              <FaUserCircle className="text-gray-500 text-5xl" />
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">Operations</h3>
                <p className="text-sm text-gray-500">{data.operations.vp.name} &bull; VP</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.operations.directors.map((d: any) => (
                <StaffCard key={d.name} name={d.name} role={d.role} />
              ))}
           </div>
        </div>

        {/* RIGHT: PROJECTS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-yellow-400">
           <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
              <FaUserCircle className="text-yellow-500 text-5xl" />
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">Projects</h3>
                <p className="text-sm text-gray-500">{data.projects.vp.name} &bull; VP</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.projects.managers.map((m: any) => (
                <StaffCard key={m.name} name={m.name} role={m.role} />
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default HierarchyView;