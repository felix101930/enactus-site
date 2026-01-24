import { FaUserCircle } from 'react-icons/fa';

const StaffCard = ({ name, role }: { name: string, role: string }) => (
  <div className="flex items-center p-3 md:p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
    <FaUserCircle className="text-gray-300 text-3xl md:text-4xl mr-3 shrink-0" />
    <div className="text-left">
      <p className="text-xs md:text-sm font-bold text-gray-900 leading-tight">{name}</p>
      <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase mt-1">{role}</p>
    </div>
  </div>
);

const HierarchyView = ({ data }: { data: any }) => {
  return (
    <div className="w-full bg-gray-50 p-4 md:p-8 flex flex-col items-center">
      
      {/* 1. LEADERSHIP (Top) */}
      <div className="z-10 bg-gray-900 text-white px-6 py-6 md:px-12 md:py-8 rounded-3xl flex flex-col md:flex-row gap-6 md:gap-12 shadow-2xl w-full md:w-auto">
          {data.coPresidents.map((p: any) => (
            <div key={p.name} className="flex flex-row md:flex-col items-center gap-4 md:gap-0">
              <FaUserCircle className="text-yellow-400 text-4xl md:text-6xl md:mb-3" />
              <div className="text-left md:text-center">
                <p className="text-lg md:text-xl font-bold">{p.name}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Co-President</p>
              </div>
            </div>
          ))}
      </div>

      {/* 2. CONNECTORS - Hidden on Mobile, Vertical Line on Mobile */}
      <div className="w-full flex justify-center h-12 md:h-20 relative">
         {/* Desktop SVG Lines */}
         <svg className="hidden md:block w-full h-full overflow-visible max-w-6xl">
           <line x1="50%" y1="0" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="4" />
           <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#9ca3af" strokeWidth="4" />
           <line x1="25%" y1="50%" x2="25%" y2="100%" stroke="#9ca3af" strokeWidth="4" />
           <line x1="75%" y1="50%" x2="75%" y2="100%" stroke="#9ca3af" strokeWidth="4" />
         </svg>
         {/* Mobile Vertical Line */}
         <div className="md:hidden w-1 h-full bg-gray-300"></div>
      </div>

      {/* 3. BRANCHES GRID - Stacks on mobile */}
      <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-2 gap-8 z-10">
        
        {/* OPERATIONS BRANCH */}
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg border-t-8 border-gray-600">
           <div className="flex flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100">
              <FaUserCircle className="text-gray-600 text-5xl md:text-6xl shrink-0" />
              <div className="text-left flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-none">Operations</h3>
                <p className="text-[11px] md:text-sm text-gray-500 font-bold uppercase mt-2">{data.operations.vp.name}</p>
                <span className="inline-block bg-gray-100 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded uppercase mt-1">Vice President</span>
              </div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {data.operations.directors.map((d: any) => (
                <StaffCard key={d.name} name={d.name} role={d.role} />
              ))}
           </div>
        </div>

        {/* PROJECTS BRANCH */}
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg border-t-8 border-yellow-400">
           <div className="flex flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100">
              <FaUserCircle className="text-yellow-500 text-5xl md:text-6xl shrink-0" />
              <div className="text-left flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-none">Projects</h3>
                <p className="text-[11px] md:text-sm text-gray-500 font-bold uppercase mt-2">{data.projects.vp.name}</p>
                <span className="inline-block bg-yellow-100 text-yellow-700 text-[9px] font-bold px-2 py-0.5 rounded uppercase mt-1">Vice President</span>
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