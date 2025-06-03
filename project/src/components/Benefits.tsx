import React from 'react';
import { TrendingUp, Clock, Brain, BarChart3, Briefcase } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 animate-fadeIn">
      <div className="h-12 w-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Transform Your Organization with Strategic AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our workshop equips executives and project managers with practical tools and strategies to implement AI solutions that deliver measurable business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<TrendingUp size={24} />}
            title="Accelerate Growth"
            description="Identify high-impact opportunities to implement AI tools that streamline operations and drive business growth."
          />
          <BenefitCard 
            icon={<Clock size={24} />}
            title="Reduce Time-to-Market"
            description="Learn practical AI workflows that compress development cycles and help you deliver solutions faster."
          />
          <BenefitCard 
            icon={<Brain size={24} />}
            title="Enhanced Decision-Making"
            description="Leverage AI to analyze complex data sets and surface insights that improve strategic decision-making."
          />
          <BenefitCard 
            icon={<BarChart3 size={24} />}
            title="Measurable Productivity Gains"
            description="Implement AI tools that eliminate repetitive tasks and free your team to focus on high-value work."
          />
          <BenefitCard 
            icon={<Briefcase size={24} />}
            title="Work-Life Integration"
            description="Discover AI strategies that improve focus, reduce stress, and help maintain personal balance."
          />
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-xl text-white animate-fadeIn">
            <h3 className="text-xl font-bold mb-4">Ready to Transform Your Approach?</h3>
            <p className="mb-6">Join forward-thinking executives who are already leveraging AI as their strategic advantage.</p>
            <button className="bg-white text-teal-700 hover:bg-slate-100 transition-colors font-medium px-6 py-3 rounded-md">
              Register for the Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;