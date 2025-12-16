// src/components/layouts/Layout.tsx

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopButton from '../common/BackToTopButton';
import ScrollToAnchor from '../common/ScrollToAnchor'; // <--- 1. IMPORT IT

function Layout() {
  return (
    <div>
      {/* 2. ACTIVATE IT HERE */}
      <ScrollToAnchor /> 
      
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default Layout;