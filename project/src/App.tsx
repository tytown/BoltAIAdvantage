import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WorkshopDetails from './components/WorkshopDetails';
import FacilitatorBio from './components/FacilitatorBio';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <WorkshopDetails />
        <FacilitatorBio />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;