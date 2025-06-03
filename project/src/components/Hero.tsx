import React from 'react';
import { ArrowRight, Clock, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6 animate-fadeIn">
              Limited-Time Workshop
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-800 mb-6 animate-slideUp">
              Harness AI to Transform Your <span className="text-teal-600">Business Strategy</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 animate-slideUp animation-delay-100">
              A hands-on executive workshop that delivers practical AI implementation strategies to reduce time-to-market, optimize workflows, and enhance decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-slideUp animation-delay-200">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-md transition-colors flex items-center justify-center">
                <span>Reserve Your Seat</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a href="#workshop" className="text-slate-700 hover:text-teal-600 transition-colors font-medium flex items-center justify-center sm:justify-start">
                <span>Learn More</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-slate-600 animate-fadeIn animation-delay-300">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                <span>June 15-16, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-600" />
                <span>9am - 4pm ET</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-teal-600" />
                <span>Limited to 30 Executives</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-12 md:mt-0 animate-fadeIn animation-delay-400">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-teal-200 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl bg-slate-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Workshop Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                    <span>Hands-on AI tools implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                    <span>Executive-focused use cases</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                    <span>Strategic implementation roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
                    <span>Personalized action plan</span>
                  </li>
                </ul>
                <button className="mt-6 w-full bg-white text-slate-800 hover:bg-slate-100 font-medium px-4 py-3 rounded-md transition-colors">
                  Secure Your Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;