// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './styles/globals.css';

// Import your layout and page components
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Define the routes for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // The Layout component is the parent for all pages
    children: [
      {
        index: true, // This makes HomePage the default child route
        element: <HomePage />,
      },
      {
        path: 'about', // The URL will be localhost:5173/about
        element: <AboutPage />,
      },
      // We can add more pages here later (e.g., projects, contact)
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