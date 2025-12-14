// src/components/sections/about/TeamSectionAbout.tsx

import { useState } from 'react';

// Import the 3 Final Views
import MolecularView from './org-chart-views/MolecularView';
import HierarchyView from './org-chart-views/HierarchyView';
import InteractiveDeckView from './org-chart-views/InteractiveDeckView';

// --- TEAM DATA ---
const teamData = {
  coPresidents: [
    { name: 'Keshav Sharma', role: 'Co-President' },
    { name: 'Yumnaa Farooq', role: 'Co-President' }
  ],
  operations: {
    vp: { name: 'Veer Raigor', role: 'VP of Operations' },
    directors: [
      { name: 'Nisarg Bhatt', role: 'Finance Director' },
      { name: 'Cindy Ngyuen', role: 'Events Director' },
      { name: 'Felix Montanez', role: 'R&D Co-Director' },
      { name: 'Marketing Director', role: 'Marketing Director' },
      { name: 'HR Director', role: 'HR Director' },
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

type ViewType = 'molecular' | 'hierarchy' | 'deck';

function TeamSectionAbout() {
  const [currentView, setCurrentView] = useState<ViewType>('hierarchy');

  const viewOptions: { id: ViewType; name: string }[] = [
    { id: 'molecular', name: 'Molecular Network' },
    { id: 'hierarchy', name: 'Hierarchy Structure' },
    { id: 'deck', name: 'Interactive Deck' },
  ];
  
  return (
    <section className="bg-gray-50 py-20 px-4 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">Team Structure</h2>
        <p className="text-lg text-gray-600 mt-4 mb-12">
          Explore our organization structure.
        </p>
        
        {/* View Switcher UI */}
        <div className="mb-12 p-1 bg-white border border-gray-200 rounded-full inline-flex shadow-sm">
          {viewOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setCurrentView(option.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                currentView === option.id 
                ? 'bg-yellow-400 text-black shadow-md transform scale-105' 
                : 'bg-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Render View */}
        <div className="transition-all duration-500 ease-in-out">
          {currentView === 'molecular' && <MolecularView data={teamData} />}
          {currentView === 'hierarchy' && <HierarchyView data={teamData} />}
          {currentView === 'deck' && <InteractiveDeckView data={teamData} />}
        </div>

      </div>
    </section>
  );
}

export default TeamSectionAbout;