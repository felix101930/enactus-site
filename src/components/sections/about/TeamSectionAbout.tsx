// src/components/sections/about/TeamSectionAbout.tsx

import { useState } from 'react';

// Import the 2 Remaining Views
import HierarchyView from './org-chart-views/HierarchyView';
import InteractiveDeckView from './org-chart-views/InteractiveDeckView';

// --- TEAM DATA ---
const teamData = {
  coPresidents: [
    { name: 'Keshav Sharma', role: 'Co-President' },
    { name: 'Yumnaa Farooq', role: 'Co-President' }
  ],
  operations: {
    vp: { name: 'Veer Rajgor', role: 'VP of Operations' }, // Fixed Spelling
    directors: [
      { name: 'Nisarg Bhatt', role: 'Finance Director' },
      { name: 'Cindy Ngyuen', role: 'Events Director' },
      { name: 'Felix Montanez', role: 'R&D Co-Director' },
      { name: 'Anastasiia Davydova', role: 'Marketing Director' },
      { name: 'Silve Rahman', role: 'HR Director' },
    ]
  },
  projects: {
    vp: { name: 'Yared Okubay', role: 'VP of Enterprises' },
    managers: [
      { name: 'Yixuan (Bleyle) Liu', role: 'Case Clash PM' },
      { name: 'Kavya', role: 'Case Clash PM' },
      { name: 'Tea Boulanger', role: 'Project Upskill PM' },
      { name: 'Shafra Due', role: 'Project Upskill PM' },
      { name: 'Open Position', role: 'Second Cut Enterprise Manager' },
    ]
  }
};

type ViewType = 'hierarchy' | 'deck';

function TeamSectionAbout() {
  const [currentView, setCurrentView] = useState<ViewType>('hierarchy');

  const viewOptions: { id: ViewType; name: string }[] = [
    { id: 'hierarchy', name: 'Hierarchy Structure' },
    { id: 'deck', name: 'Interactive Deck' },
  ];
  
  return (
    <section className="bg-white py-16 px-4 text-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto"> 

        {/* Section Header */}
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Team Structure</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our organization. Interact with the models below to see how we connect.
        </p>
        
        {/* View Switcher UI */}
        <div className="mb-12 p-1.5 bg-gray-100 border border-gray-200 rounded-full inline-flex shadow-inner flex-wrap justify-center gap-2">
          {viewOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setCurrentView(option.id)}
              className={`px-6 py-2 rounded-full text-base font-bold transition-all duration-300 ${
                currentView === option.id 
                ? 'bg-yellow-400 text-black shadow-lg transform scale-105' 
                : 'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Chart Container */}
        <div className="border border-gray-200 rounded-[2.5rem] shadow-2xl bg-gray-50 overflow-hidden relative">
          <div className="overflow-x-auto custom-scrollbar">
            {/* Min-width ensures charts don't get squished on mobile */}
            <div className="transition-all duration-500 ease-in-out min-h-[750px] min-w-[1000px] md:min-w-0">
              {currentView === 'hierarchy' && <HierarchyView data={teamData} />}
              {currentView === 'deck' && <InteractiveDeckView data={teamData} />}
            </div>
          </div>
          
          {/* Mobile Hint Overlay */}
          <div className="md:hidden absolute bottom-4 left-0 w-full text-center pointer-events-none opacity-50">
            <span className="bg-black/10 px-3 py-1 rounded-full text-xs font-bold text-gray-500">
              Swipe to explore →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TeamSectionAbout;