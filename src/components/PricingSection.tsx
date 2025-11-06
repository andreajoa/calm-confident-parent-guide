import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Shield, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const CountdownTimer = () => (
    <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4 md:p-6 backdrop-blur-sm mb-8">
      <p className="text-red-400 text-sm font-semibold mb-3 text-center">⚠️ OFFER EXPIRES IN:</p>
      <div className="flex gap-3 md:gap-4 justify-center">
        {[
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MIN', value: timeLeft.minutes },
          { label: 'SEC', value: timeLeft.seconds }
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="bg-red-500 text-white font-bold text-2xl md:text-3xl rounded-lg p-2 md:p-3 min-w-[60px] md:min-w-[70px]">
              {String(value).padStart(2, '0')}
            </div>
            <p className="text-red-400 text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const valueStack = [
    { item: "Complete 178-Page System", value: 97 },
    { item: "15 Printable Tools & Templates", value: 47 },
    { item: "Step-by-Step Video Walkthroughs", value: 37 },
    { item: "Email Support for 30 Days", value: 97 },
    { item: "Lifetime Updates", value: "Priceless" }
  ];

  const benefits = [
    "Instant PDF Download",
    "178 Pages + 15 Printables", 
    "Use Forever, Print Anytime",
    "No Subscription Required",
    "30-Day Money-Back Guarantee",
    "Created by Certified Specialist"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Transform Your Family</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              One-time investment. Lifetime of peace.
            </p>
          </div>

          <CountdownTimer />

          {/* Value Stack */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-cyan-400">What You're Getting:</h3>
            <div className="space-y-4">
              {valueStack.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg text-left">{item.item}</span>
                  </div>
                  <span className="text-green-400 font-bold">
                    {typeof item.value === 'number' ? `$${item.value}` : item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-white/20 pt-6 space-y-4">
              <div className="flex justify-between items-center text-2xl">
                <span>TOTAL VALUE:</span>
                <span className="line-through text-gray-500">$278</span>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border-2 border-pink-500 rounded-2xl p-8 text-center space-y-4">
                <p className="text-gray-300 text-lg">YOU PAY TODAY ONLY:</p>
                <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                  $14.74
                </div>
                <p className="text-2xl text-green-400 font-bold">
                  Save $263.26 (84% OFF!)
                </p>
                <p className="text-gray-400">
                  That's less than a pizza delivery
                </p>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-left bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              asChild
              size="lg"
              className="w-full max-w-md mx-auto bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <a 
                href="https://adhdautism.gumroad.com/l/spehk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                GET INSTANT ACCESS NOW - $14.74
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>Instant Access</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Start Today</span>
              </div>
            </div>
          </div>

          {/* Urgency and Scarcity */}
          <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-6 space-y-2">
            <p className="text-lg font-bold text-yellow-400">⚠️ Limited Copies Available</p>
            <p className="text-gray-300">Only <span className="font-bold text-yellow-400">27 copies</span> left at this price today</p>
            <p className="text-sm text-gray-400">73% of today's allocation already sold</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

