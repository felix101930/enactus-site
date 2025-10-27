// src/components/sections/HeroSection.tsx

import heroBackground from '../../../assets/backgrounds/background-hero.png';

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Enactus team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Igniting business innovation with integrity and passion.
        </h1>
        
        {/* Buttons Container */}
        <div className="mt-8 flex space-x-4">
          <a
            href="#"
            className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-colors"
          >
            Reach Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;