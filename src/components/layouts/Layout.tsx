// src/components/layouts/Layout.tsx

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        {/* The Outlet component will render the current page's content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;