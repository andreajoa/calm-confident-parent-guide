import { useState, useEffect } from 'react';
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      location: "Miami, FL",
      text: "Meltdowns reduced by 80% in just 2 weeks. My son is calmer, I'm more confident. This guide changed our family!",
      result: "80% fewer crises",
      rating: 5
    },
    {
      name: "John Chen",
      location: "Toronto, Canada", 
      text: "I was skeptical, but it works! The techniques are practical and science-based. Finally found something that truly helps.",
      result: "Family transformed",
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      text: "As a teacher, I've tried EVERYTHING. This method is different - works at school and at home. Recommend to all parents!",
      result: "Better than therapy",
      rating: 5
    },
    {
      name: "Michael Roberts",
      location: "Sydney, Australia",
      text: "Worth every penny. My daughter's behavior at school improved dramatically. Teachers noticed the difference immediately!",
      result: "Life-changing results",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "New York, USA",
      text: "I'm not just surviving anymore - I'm thriving as a parent. This guide gave me the confidence I desperately needed.",
      result: "Confidence restored",
      rating: 5
    },
    {
      name: "David K.",
      location: "Vancouver, Canada",
      text: "My son's meltdowns decreased by 80% after implementing these strategies. This guide is a game-changer.",
      result: "80% fewer meltdowns",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 text-white" style={{ marginTop: 0 }}>
      <div className="container mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">Transformations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what other parents are saying from USA, UK, Canada & Australia
            </p>
            
            {/* Rating Display */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold">4.9/5</span>
              <span className="text-lg text-gray-400">from 2,000+ parents</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all transform hover:scale-105 hover:border-yellow-500/50 ${
                  index === currentTestimonial ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                  <Quote className="h-5 w-5 text-yellow-400" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 italic leading-relaxed mb-4 text-sm">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-white/10 pt-4 mb-4">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>

                {/* Result Badge */}
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-center">
                  <span className="text-green-400 font-bold text-sm">✓ {testimonial.result}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="text-center space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">2,000+</div>
              <div className="text-gray-400">Families Helped</div>
            </div>
            <div className="text-center space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">20+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>

          {/* Social Proof Statement */}
          <div className="mt-12 bg-yellow-500/20 border-2 border-yellow-500/50 p-8 rounded-2xl animate-fade-in-up">
            <p className="text-xl md:text-2xl font-semibold text-center text-balance text-white">
              "The transformation in our daily life has been incredible. I actually look forward to mornings now!"
            </p>
            <p className="text-center text-gray-300 mt-4 font-medium">
              — Most common feedback from families using this guide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
