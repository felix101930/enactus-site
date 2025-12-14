// src/components/sections/about/org-chart-views/CascadeView.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaPlus, FaMinus } from 'react-icons/fa';

// This is a recursive component that can render itself for nested team members
const MemberNode = ({ member, level = 0 }: { member: any; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = member.reports && member.reports.length > 0;

  return (
    <div style={{ marginLeft: `${level * 2}rem` }}>
      <div 
        className="flex items-center justify-between p-4 my-2 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <FaUserCircle size={24} className="text-gray-400 mr-4" />
          <div>
            <p className="font-bold text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        </div>
        {hasChildren && (
          isExpanded ? <FaMinus className="text-gray-500" /> : <FaPlus className="text-gray-500" />
        )}
      </div>

      <AnimatePresence>
        {isExpanded && hasChildren && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-l-2 border-yellow-400 pl-4"
          >
            {member.reports.map((report: any) => (
              <MemberNode key={report.name} member={report} level={level + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const CascadeView = ({ data }: { data: any }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">Co-Presidents</h3>
        <div className="flex justify-center gap-4 mt-4">
          {data.coPresidents.map((p: any) => (
             <div key={p.name} className="p-4 bg-white shadow-xl rounded-lg text-center">
               <FaUserCircle size={40} className="text-gray-400 mx-auto mb-2" />
               <p className="font-bold text-gray-800">{p.name}</p>
               <p className="text-sm text-gray-500">{p.role}</p>
             </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gray-200 my-8"></div>
      
      {/* VPs as the starting nodes for the cascade */}
      <div className="space-y-4">
        <MemberNode member={{...data.operations.vp, reports: data.operations.directors}} />
        <MemberNode member={{...data.projects.vp, reports: data.projects.managers}} />
      </div>
    </div>
  );
};

export default CascadeView;