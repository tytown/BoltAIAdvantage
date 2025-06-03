import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Dr. Chen's workshop completely transformed how our executive team thinks about AI. We've implemented three of her strategies and have already seen a 22% reduction in project delivery time.",
    name: "Michael Rodriguez",
    title: "CTO",
    company: "Global Financial Services"
  },
  {
    quote: "The most practical, actionable workshop on AI I've ever attended. No fluff, just real strategies that work. I left with a clear roadmap that we've since implemented across our product teams.",
    name: "Sarah Johnson",
    title: "VP of Product",
    company: "TechInnovate Inc."
  },
  {
    quote: "As a non-technical executive, I was hesitant about AI implementation. This workshop broke everything down into practical steps that made sense. Now I'm leading our AI transformation initiative.",
    name: "David Williams",
    title: "COO",
    company: "Retail Solutions Group"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Executives Are Saying
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of forward-thinking leaders who have transformed their approach to business through our workshops.
          </p>
        </div>
        
        <div className="relative bg-white rounded-xl shadow-lg border border-slate-100 p-8 md:p-12 animate-fadeIn">
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-slate-700 text-center mb-8 italic">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          
          <div className="text-center">
            <p className="font-bold text-slate-800">{testimonials[currentIndex].name}</p>
            <p className="text-slate-600">{testimonials[currentIndex].title}, {testimonials[currentIndex].company}</p>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-teal-600' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-700"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;