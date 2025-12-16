// src/components/sections/about/org-chart-views/MolecularView.tsx

import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

// --- COMPONENTS ---

// 1. Dynamic Line (Sticks to nodes)
const Connector = ({ x1, y1, x2, y2 }: { x1: MotionValue<number>, y1: MotionValue<number>, x2: MotionValue<number>, y2: MotionValue<number> }) => {
  // Map motion values (offsets) to SVG coordinates. Center is roughly 50% of container.
  // We assume container is relative, and we transform the drag offset (x,y) to line coords.
  // To make this simple without complex math: We use the motion values directly as translation.
  
  // Since we can't easily map 'drag x' to 'svg line x' perfectly without container refs,
  // We will use a visual trick: The line is also a motion component that updates its x1/y1.
  
  // Actually, easiest way in Framer Motion:
  // We render lines as absolute divs with width/rotation? No, SVG is best.
  // We offset the SVG center.
  
  const CENTER_X = '50%';
  const CENTER_Y = '50%';
  
  const x1Px = useTransform(x1, v => `calc(${CENTER_X} + ${v}px)`);
  const y1Px = useTransform(y1, v => `calc(${CENTER_Y} + ${v}px)`);
  const x2Px = useTransform(x2, v => `calc(${CENTER_X} + ${v}px)`);
  const y2Px = useTransform(y2, v => `calc(${CENTER_Y} + ${v}px)`);

  return (
    <motion.line
      x1={x1Px} y1={y1Px} x2={x2Px} y2={y2Px}
      stroke="#94a3b8" // Visible Slate-400
      strokeWidth="3"
      strokeLinecap="round"
    />
  );
};

// 2. Node Atom
const Atom = ({ 
  member, 
  x, 
  y, 
  size = 100, 
  color = "bg-white"
}: { 
  member: any, 
  x: MotionValue<number>, 
  y: MotionValue<number>, 
  size?: number, 
  color?: string 
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -350, right: 350, top: -300, bottom: 300 }}
      dragElastic={0.1}
      style={{ x, y, width: size, height: size, marginLeft: -size/2, marginTop: -size/2 }}
      whileHover={{ scale: 1.1, zIndex: 50, cursor: 'grab' }}
      whileTap={{ scale: 0.95, cursor: 'grabbing' }}
      className={`absolute top-1/2 left-1/2 rounded-full shadow-lg border-4 border-white flex items-center justify-center ${color}`}
    >
      <FaUserCircle className="text-gray-700 opacity-60" size={size * 0.4} />
      
      {/* TEXT FLOATING OUTSIDE THE CIRCLE */}
      <div className="absolute top-[110%] left-1/2 -translate-x-1/2 text-center w-40 pointer-events-none">
        <p className="font-bold text-gray-900 leading-none text-sm shadow-sm bg-white/50 backdrop-blur-sm rounded px-1 inline-block">
          {member.name}
        </p>
        <p className="text-xs text-gray-600 font-bold uppercase mt-1 bg-white/50 backdrop-blur-sm rounded px-1 inline-block">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

const MolecularView = ({ data }: { data: any }) => {
  // --- STATE: Motion Values (This enables the Sticky Lines) ---
  
  // Leadership
  const p1X = useMotionValue(-70); const p1Y = useMotionValue(0);
  const p2X = useMotionValue(70);  const p2Y = useMotionValue(0);

  // Operations Cluster (Left)
  const opVpX = useMotionValue(-280); const opVpY = useMotionValue(-60);
  const d1X = useMotionValue(-400); const d1Y = useMotionValue(-150);
  const d2X = useMotionValue(-420); const d2Y = useMotionValue(20);
  const d3X = useMotionValue(-350); const d3Y = useMotionValue(130);
  const d4X = useMotionValue(-200); const d4Y = useMotionValue(-180);
  const d5X = useMotionValue(-180); const d5Y = useMotionValue(110);

  // Projects Cluster (Right)
  const prVpX = useMotionValue(280); const prVpY = useMotionValue(60);
  const m1X = useMotionValue(400); const m1Y = useMotionValue(150);
  const m2X = useMotionValue(420); const m2Y = useMotionValue(-20);
  const m3X = useMotionValue(350); const m3Y = useMotionValue(-130);
  const m4X = useMotionValue(200); const m4Y = useMotionValue(180);
  const m5X = useMotionValue(180); const m5Y = useMotionValue(-110);

  return (
    <div className="relative w-full h-[750px] bg-gray-50 overflow-visible">
      <div className="absolute top-4 left-4 text-xs font-mono text-gray-400 uppercase tracking-widest bg-white/50 px-2 py-1 rounded">
        Drag nodes to reorganize
      </div>

      {/* SVG LAYER (Behind Nodes) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        {/* Leadership Bonds */}
        <Connector x1={p1X} y1={p1Y} x2={p2X} y2={p2Y} />
        <Connector x1={p1X} y1={p1Y} x2={opVpX} y2={opVpY} />
        <Connector x1={p2X} y1={p2Y} x2={prVpX} y2={prVpY} />

        {/* Ops Bonds */}
        <Connector x1={opVpX} y1={opVpY} x2={d1X} y2={d1Y} />
        <Connector x1={opVpX} y1={opVpY} x2={d2X} y2={d2Y} />
        <Connector x1={opVpX} y1={opVpY} x2={d3X} y2={d3Y} />
        <Connector x1={opVpX} y1={opVpY} x2={d4X} y2={d4Y} />
        <Connector x1={opVpX} y1={opVpY} x2={d5X} y2={d5Y} />

        {/* Projects Bonds */}
        <Connector x1={prVpX} y1={prVpY} x2={m1X} y2={m1Y} />
        <Connector x1={prVpX} y1={prVpY} x2={m2X} y2={m2Y} />
        <Connector x1={prVpX} y1={prVpY} x2={m3X} y2={m3Y} />
        <Connector x1={prVpX} y1={prVpY} x2={m4X} y2={m4Y} />
        <Connector x1={prVpX} y1={prVpY} x2={m5X} y2={m5Y} />
      </svg>

      {/* NODES LAYER (Z-10) */}
      <Atom x={p1X} y={p1Y} member={data.coPresidents[0]} size={130} color="bg-yellow-400 z-30" />
      <Atom x={p2X} y={p2Y} member={data.coPresidents[1]} size={130} color="bg-yellow-400 z-30" />

      <Atom x={opVpX} y={opVpY} member={data.operations.vp} size={110} color="bg-white z-20" />
      <Atom x={prVpX} y={prVpY} member={data.projects.vp} size={110} color="bg-white z-20" />

      {/* Directors */}
      <Atom x={d1X} y={d1Y} member={data.operations.directors[0]} size={90} />
      <Atom x={d2X} y={d2Y} member={data.operations.directors[1]} size={90} />
      <Atom x={d3X} y={d3Y} member={data.operations.directors[2]} size={90} />
      <Atom x={d4X} y={d4Y} member={data.operations.directors[3]} size={90} />
      <Atom x={d5X} y={d5Y} member={data.operations.directors[4]} size={90} />

      {/* Managers */}
      <Atom x={m1X} y={m1Y} member={data.projects.managers[0]} size={90} />
      <Atom x={m2X} y={m2Y} member={data.projects.managers[1]} size={90} />
      <Atom x={m3X} y={m3Y} member={data.projects.managers[2]} size={90} />
      <Atom x={m4X} y={m4Y} member={data.projects.managers[3]} size={90} />
      <Atom x={m5X} y={m5Y} member={data.projects.managers[4]} size={90} />

    </div>
  );
};

export default MolecularView;