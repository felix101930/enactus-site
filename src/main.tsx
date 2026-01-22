// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './styles/globals.css';

// Import your layout and ALL page components
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AwardsPage from './pages/AwardsPage'; // <--- 1. IMPORT

// Define the routes for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: 'about', 
        element: <AboutPage />,
      },
      {
        path: 'projects', 
        element: <ProjectsPage />,
      },
      {
        path: 'awards', 
        element: <AwardsPage />, // <--- 2. ADD ROUTE
      },
      {
        path: 'contact', 
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);