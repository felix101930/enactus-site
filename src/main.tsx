// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage.tsx'; // Make sure this line is correct
import './styles/globals.css';             // Make sure this line is correct

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HomePage /> {/* It MUST render HomePage here */}
    </HelmetProvider>
  </React.StrictMode>
);