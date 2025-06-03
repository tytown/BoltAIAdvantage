import React from 'react';
import { ArrowRight, Users, Calendar, ShieldCheck } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join forward-thinking executives and secure your spot in this exclusive workshop.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
          <div className="flex items-center justify-center animate-fadeIn animation-delay-100">
            <Users className="h-6 w-6 text-teal-400 mr-2" />
            <span className="text-slate-300">Limited to 30 participants</span>
          </div>
          <div className="flex items-center justify-center animate-fadeIn animation-delay-200">
            <Calendar className="h-6 w-6 text-teal-400 mr-2" />
            <span className="text-slate-300">June 15-16, 2025</span>
          </div>
          <div className="flex items-center justify-center animate-fadeIn animation-delay-300">
            <ShieldCheck className="h-6 w-6 text-teal-400 mr-2" />
            <span className="text-slate-300">100% Satisfaction Guarantee</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center animate-fadeIn animation-delay-400">
          <button className="bg-teal-600 hover:bg-teal-500 transition-colors font-medium px-8 py-4 rounded-md text-lg flex items-center mb-4">
            <span>Reserve Your Seat Now</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="text-slate-400 text-sm">Only 8 spots remaining for this session</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;