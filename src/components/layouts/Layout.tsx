// src/components/layouts/Layout.tsx

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopButton from '../common/BackToTopButton'; // 1. IMPORT IT

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton /> {/* 2. ADD IT HERE */}
    </div>
  );
}

export default Layout;