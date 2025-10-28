// src/components/sections/home/HeroSection.tsx

import heroBackground from '../../../assets/backgrounds/background-hero.png';

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img src={heroBackground} alt="Enactus team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-left max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Igniting business innovation with integrity and passion.
        </h1>
        <div className="mt-8 flex space-x-4">
          {/* ADDED active:scale-95 */}
          <a href="#" className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg active:scale-95">
            View Projects
          </a>
          {/* ADDED active:scale-95 */}
          <a href="#" className="px-8 py-3 border-2 border-white text-white font-bold rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg active:scale-95">
            Reach Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;