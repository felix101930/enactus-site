// src/components/sections/about/org-chart-views/HierarchyView.tsx

import { FaUserCircle } from 'react-icons/fa';

const StaffCard = ({ name, role }: { name: string, role: string }) => (
  <div className="flex flex-col xl:flex-row items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all">
    <FaUserCircle className="text-gray-300 text-4xl mb-2 xl:mb-0 xl:mr-3" />
    <div className="text-center xl:text-left">
      <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
      <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{role}</p>
    </div>
  </div>
);

const HierarchyView = ({ data }: { data: any }) => {
  return (
    <div className="w-full min-h-[750px] bg-gray-50 p-8 flex flex-col items-center">
      
      {/* 1. HEADER (Presidents) */}
      <div className="z-10 bg-gray-900 text-white px-12 py-8 rounded-[2rem] flex gap-12 shadow-2xl">
          {data.coPresidents.map((p: any) => (
            <div key={p.name} className="flex flex-col items-center">
              <FaUserCircle className="text-yellow-400 text-6xl mb-3" />
              <p className="text-xl font-bold">{p.name}</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Co-President</p>
            </div>
          ))}
      </div>

      {/* 2. CONNECTOR */}
      <div className="w-full max-w-6xl h-20 relative -mt-4 -mb-4 z-0">
         <svg className="w-full h-full overflow-visible">
           <line x1="50%" y1="0" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="4" />
           <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#9ca3af" strokeWidth="4" />
           <line x1="25%" y1="50%" x2="25%" y2="100%" stroke="#9ca3af" strokeWidth="4" />
           <line x1="75%" y1="50%" x2="75%" y2="100%" stroke="#9ca3af" strokeWidth="4" />
           
           <circle cx="50%" cy="50%" r="6" fill="#6b7280" />
           <circle cx="25%" cy="50%" r="6" fill="#6b7280" />
           <circle cx="75%" cy="50%" r="6" fill="#6b7280" />
         </svg>
      </div>

      {/* 3. CONTENT GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 z-10">
        
        {/* LEFT: OPERATIONS */}
        <div className="bg-white rounded-[2rem] p-8 shadow-lg border-t-8 border-gray-600">
           {/* Header Block: Fixed alignment to prevent indentation */}
           <div className="flex flex-row items-center gap-6 mb-8 pb-6 border-b border-gray-100">
              <FaUserCircle className="text-gray-600 text-6xl shrink-0" />
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Operations</h3>
                <p className="text-sm text-gray-500 font-bold uppercase mt-1">{data.operations.vp.name}</p>
                <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase mt-1">Vice President</span>
              </div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {data.operations.directors.map((d: any) => (
                <StaffCard key={d.name} name={d.name} role={d.role} />
              ))}
           </div>
        </div>

        {/* RIGHT: PROJECTS */}
        <div className="bg-white rounded-[2rem] p-8 shadow-lg border-t-8 border-yellow-400">
           {/* Header Block: Fixed alignment to prevent indentation */}
           <div className="flex flex-row items-center gap-6 mb-8 pb-6 border-b border-gray-100">
              <FaUserCircle className="text-yellow-500 text-6xl shrink-0" />
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Projects</h3>
                <p className="text-sm text-gray-500 font-bold uppercase mt-1">{data.projects.vp.name}</p>
                <span className="inline-block bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase mt-1">Vice President</span>
              </div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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