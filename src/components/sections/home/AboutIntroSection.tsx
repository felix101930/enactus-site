// src/components/sections/home/AboutIntroSection.tsx

import { Link } from 'react-router-dom'; // 1. Import Link
import aboutImage from '../../../assets/images/image-about-intro.png';

function AboutIntroSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What is Enactus SAIT?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Enactus SAIT is a dynamic community of student leaders, innovators, and
            entrepreneurs committed to using business principles to create positive
            social, environmental, and economic impact. As part of the global Enactus
            network, we aim to empower individuals and improve communities through
            sustainable projects that address real-world challenges. By fostering creativity,
            teamwork, and leadership, Enactus SAIT provides students with opportunities to
            develop essential skills while making a meaningful difference.
          </p>
          
          {/* 2. Updated Button to use Link */}
          <Link 
            to="/about" 
            className="inline-block px-8 py-3 bg-gray-800 text-white font-bold rounded-md transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            About Us
          </Link>
        </div>
        <div>
          <img src={aboutImage} alt="Enactus SAIT community event" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default AboutIntroSection;