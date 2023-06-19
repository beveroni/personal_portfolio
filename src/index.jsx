import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './style.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contacts';
import { References } from './pages/References';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-me" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<Skills />} />
          <Route path="references" element={<References />} />
          <Route path="contacts" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

createRoot(document.querySelector('#app')).render(<Router />);
