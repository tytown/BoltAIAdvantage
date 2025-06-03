import React from 'react';
import { Check, Users, BookOpen, Cpu, Brain } from 'lucide-react';

const WorkshopDetails: React.FC = () => {
  return (
    <section id="workshop" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 animate-slideUp">
              Workshop Structure & Outcomes
            </h2>
            <p className="text-lg text-slate-600 mb-8 animate-slideUp animation-delay-100">
              This immersive workshop combines strategic frameworks with hands-on implementation. You'll leave with practical skills, tools, and a personalized action plan ready to execute.
            </p>
            
            <div className="space-y-4 mb-8 animate-slideUp animation-delay-200">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <Check size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Foundation & Strategy</h3>
                  <p className="text-slate-600">AI capabilities assessment, strategic opportunities mapping, and tools introduction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <Check size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Implementation & Activation</h3>
                  <p className="text-slate-600">Hands-on implementation exercises, workflow integration, and personalized action planning.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slideUp animation-delay-300">
              <h3 className="text-xl font-bold text-slate-800">What You'll Receive:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700">Customized AI implementation playbook</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700">Prompt engineering toolkit</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700">90-day implementation roadmap</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700">Access to exclusive resource library</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700">30-minute follow-up consultation</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-700">Executive community membership</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-slate-800 text-white p-8">
                <h3 className="text-2xl font-bold mb-2">Workshop Options</h3>
                <p className="text-slate-300">Flexible formats to meet your needs</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Group Workshops</h4>
                    <p className="text-slate-600">Interactive sessions limited to 30 participants for optimal engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BookOpen className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Custom Training</h4>
                    <p className="text-slate-600">Tailored programs for your organization's specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Virtual or In-Person</h4>
                    <p className="text-slate-600">Flexible delivery options to suit your team's preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Ongoing Support</h4>
                    <p className="text-slate-600">Post-workshop consultation and resources for continued growth</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-colors font-medium px-6 py-3 rounded-md">
                    Schedule a Consultation
                  </button>
                  <p className="text-center text-sm text-slate-500 mt-4">Let's discuss the perfect format for your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;