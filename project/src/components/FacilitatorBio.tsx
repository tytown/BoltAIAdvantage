import React from 'react';
import { Linkedin, Twitter, Award, BookOpen } from 'lucide-react';

const FacilitatorBio: React.FC = () => {
  return (
    <section id="facilitator" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/5 mb-12 lg:mb-0 animate-fadeIn">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-teal-200 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl bg-slate-800">
                {/* Placeholder for facilitator image */}
                <div className="aspect-[4/5] bg-slate-700 flex items-center justify-center">
                  <span className="text-slate-400">Facilitator Image</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 lg:pl-16 animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Meet Your Facilitator
            </h2>
            
            <h3 className="text-2xl font-bold text-teal-600 mb-4">Tyler McCoy</h3>
            <p className="text-slate-600 mb-6">
              Tyler McCoy is a global facilitator and designer helping leaders harness AI to work smarter, innovate faster, and live with more clarity.
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800">Experience & Expertise</h4>
                  <p className="text-slate-600">
                    With 10 years in UX, product design, and facilitation, Tyler brings cross-industry insight and real-world AI fluency to every session.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800">Approach</h4>
                  <p className="text-slate-600">
                    Tyler's workshops focus on practical implementation rather than theoretical concepts. Her hands-on approach ensures participants leave with actionable strategies they can implement immediately.
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors font-medium px-6 py-3 rounded-md">
                  Learn from Tyler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitatorBio;