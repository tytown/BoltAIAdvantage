import React from 'react';
import { Cpu, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="text-teal-500 h-6 w-6" />
              <span className="font-bold text-xl text-white">AI Advantage</span>
            </div>
            <p className="max-w-xs text-slate-400">
              Empowering executives to harness AI for strategic business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#benefits" className="text-slate-400 hover:text-teal-400 transition-colors">Benefits</a></li>
                <li><a href="#workshop" className="text-slate-400 hover:text-teal-400 transition-colors">Workshop</a></li>
                <li><a href="#facilitator" className="text-slate-400 hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#testimonials" className="text-slate-400 hover:text-teal-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">AI Tools</a></li>
                <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-teal-500" />
                  <a href="mailto:workshop@aiadvantage.com" className="text-slate-400 hover:text-teal-400 transition-colors">workshop@aiadvantage.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-teal-500" />
                  <a href="tel:+1-555-123-4567" className="text-slate-400 hover:text-teal-400 transition-colors">(555) 123-4567</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Advantage Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;