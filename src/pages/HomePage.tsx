// src/pages/HomePage.tsx

import Navbar from '../components/layouts/Navbar';
import HeroSection from '../components/sections/HeroSection'; 

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection /> {/* And it's being used here */}
    </div>
  );
}

export default HomePage;