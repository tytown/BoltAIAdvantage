import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cpu className="text-teal-600 h-6 w-6" />
            <span className="font-bold text-xl text-slate-800">AI Advantage</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-slate-700 hover:text-teal-600 transition-colors">Benefits</a>
            <a href="#workshop" className="text-slate-700 hover:text-teal-600 transition-colors">Workshop</a>
            <a href="#facilitator" className="text-slate-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#testimonials" className="text-slate-700 hover:text-teal-600 transition-colors">Testimonials</a>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md transition-colors animate-fadeIn">
              Register Now
            </button>
          </div>
          
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <a 
              href="#benefits" 
              className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#workshop" 
              className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshop
            </a>
            <a 
              href="#facilitator" 
              className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-md transition-colors">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;