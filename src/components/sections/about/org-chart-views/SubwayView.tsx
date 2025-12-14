// src/components/sections/about/org-chart-views/SubwayView.tsx
import { FaUserCircle } from 'react-icons/fa';

const SubwayStation = ({ name, role, isLast = false }: { name: string; role: string; isLast?: boolean }) => (
  <div className="relative pl-12 py-4">
    {/* Vertical line connector */}
    {!isLast && <div className="absolute top-0 left-[21px] w-0.5 h-full bg-gray-300"></div>}
    
    {/* The "Station" circle */}
    <div className="absolute top-1/2 -translate-y-1/2 left-[14px] w-4 h-4 bg-white border-2 border-current rounded-full z-10"></div>
    
    <div className="flex items-center">
       <FaUserCircle size={24} className="text-gray-400 mr-4" />
       <div>
         <p className="font-bold text-gray-800">{name}</p>
         <p className="text-sm text-gray-500">{role}</p>
       </div>
    </div>
  </div>
);

const SubwayView = ({ data }: { data: any }) => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-inner">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold">Leadership Junction</h3>
        <div className="flex justify-center gap-4 mt-4">
           {data.coPresidents.map((p: any) => (
             <div key={p.name} className="p-4 bg-gray-800 text-white rounded-lg text-center shadow-lg">
               <p className="font-bold">{p.name}</p>
               <p className="text-sm opacity-80">{p.role}</p>
             </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Operations Line */}
        <div className="text-red-500">
          <SubwayStation name={data.operations.vp.name} role={data.operations.vp.role} />
          <div className="pl-12">
             {data.operations.directors.map((d: any, i: number) => (
               <SubwayStation key={d.name} name={d.name} role={d.role} isLast={i === data.operations.directors.length - 1} />
            ))}
          </div>
        </div>
        
        {/* Projects Line */}
        <div className="text-blue-500">
          <SubwayStation name={data.projects.vp.name} role={data.projects.vp.role} />
          <div className="pl-12">
             {data.projects.managers.map((m: any, i: number) => (
               <SubwayStation key={m.name} name={m.name} role={m.role} isLast={i === data.projects.managers.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubwayView;