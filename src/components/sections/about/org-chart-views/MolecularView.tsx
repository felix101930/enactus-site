// src/components/sections/about/org-chart-views/MolecularView.tsx

import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { useRef } from 'react';

// A single "Atom" node component
const Atom = ({ 
  member, 
  size = 80, 
  color = "bg-white", 
  x, 
  y, 
  className = "" 
}: { 
  member: any; 
  size?: number; 
  color?: string; 
  x: number; 
  y: number; 
  className?: string 
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} // Restrict drag distance
      dragElastic={0.2} // Springy feel
      whileHover={{ scale: 1.1, zIndex: 50, cursor: 'grab' }}
      whileTap={{ scale: 0.95, cursor: 'grabbing' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className={`absolute flex flex-col items-center justify-center rounded-full shadow-lg border-2 border-gray-100 ${color} ${className}`}
      style={{ width: size, height: size, left: '50%', top: '50%', marginLeft: -size/2, marginTop: -size/2 }}
    >
      <FaUserCircle className="text-gray-700 opacity-50 mb-1" size={size * 0.3} />
      <div className="text-center px-2 pointer-events-none">
        <p className="font-bold text-gray-900 leading-none" style={{ fontSize: Math.max(8, size * 0.12) }}>
          {member.name.split(' ')[0]} {/* First Name Only for cleanliness */}
        </p>
        <p className="text-gray-500 leading-none mt-1" style={{ fontSize: Math.max(7, size * 0.1) }}>
          {member.role.split(' ').slice(0, 1).join('')}... {/* Short role */}
        </p>
      </div>
    </motion.div>
  );
};

// SVG Connector Line
const Bond = ({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) => (
  <motion.line
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{ duration: 1, delay: 0.5 }}
    x1={`calc(50% + ${x1}px)`}
    y1={`calc(50% + ${y1}px)`}
    x2={`calc(50% + ${x2}px)`}
    y2={`calc(50% + ${y2}px)`}
    stroke="black"
    strokeWidth="2"
    strokeDasharray="4 4" // Dashed line for "atomic bond" look
  />
);

const MolecularView = ({ data }: { data: any }) => {
  const containerRef = useRef(null);

  // --- CONFIGURATION POSITIONS ---
  // Center
  const posPres1 = { x: -60, y: 0 };
  const posPres2 = { x: 60, y: 0 };
  
  // Operations Cluster (Top Leftish)
  const posOpVP = { x: -250, y: -100 };
  const posOpDirs = [
    { x: -380, y: -180 }, { x: -380, y: -20 }, 
    { x: -150, y: -220 }, { x: -250, y: -250 }, { x: -120, y: -120 }
  ];

  // Projects Cluster (Bottom Rightish)
  const posProjVP = { x: 250, y: 100 };
  const posProjMans = [
    { x: 380, y: 180 }, { x: 380, y: 20 }, 
    { x: 150, y: 220 }, { x: 250, y: 250 }, { x: 120, y: 120 }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] bg-white rounded-3xl shadow-inner overflow-hidden border border-gray-200"
    >
      <p className="absolute top-4 left-4 text-gray-400 text-sm font-mono">Interactive View: Drag nodes to play</p>
      
      {/* SVG Layer for Bonds (Behind nodes) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Pres to Pres */}
        <Bond x1={posPres1.x} y1={posPres1.y} x2={posPres2.x} y2={posPres2.y} />
        
        {/* Pres 1 to Ops VP */}
        <Bond x1={posPres1.x} y1={posPres1.y} x2={posOpVP.x} y2={posOpVP.y} />
        
        {/* Pres 2 to Proj VP */}
        <Bond x1={posPres2.x} y1={posPres2.y} x2={posProjVP.x} y2={posProjVP.y} />

        {/* Ops VP to Directors */}
        {data.operations.directors.map((_: any, i: number) => (
          <Bond key={`op-${i}`} x1={posOpVP.x} y1={posOpVP.y} x2={posOpDirs[i].x} y2={posOpDirs[i].y} />
        ))}

        {/* Proj VP to Managers */}
        {data.projects.managers.map((_: any, i: number) => (
          <Bond key={`pr-${i}`} x1={posProjVP.x} y1={posProjVP.y} x2={posProjMans[i].x} y2={posProjMans[i].y} />
        ))}
      </svg>

      {/* Nodes Layer */}
      
      {/* Presidents */}
      <Atom member={data.coPresidents[0]} x={posPres1.x} y={posPres1.y} size={110} color="bg-yellow-400 z-20" />
      <Atom member={data.coPresidents[1]} x={posPres2.x} y={posPres2.y} size={110} color="bg-yellow-400 z-20" />

      {/* Operations Team */}
      <Atom member={data.operations.vp} x={posOpVP.x} y={posOpVP.y} size={90} color="bg-gray-100 z-10" />
      {data.operations.directors.map((d: any, i: number) => (
        <Atom key={d.name} member={d} x={posOpDirs[i].x} y={posOpDirs[i].y} size={70} />
      ))}

      {/* Projects Team */}
      <Atom member={data.projects.vp} x={posProjVP.x} y={posProjVP.y} size={90} color="bg-gray-100 z-10" />
      {data.projects.managers.map((m: any, i: number) => (
        <Atom key={m.name} member={m} x={posProjMans[i].x} y={posProjMans[i].y} size={70} />
      ))}

    </div>
  );
};

export default MolecularView;