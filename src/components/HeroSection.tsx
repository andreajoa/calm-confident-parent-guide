import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Shield, Users, Award, Video, ArrowRight, ChevronDown, Clock, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const [scrollY, setScrollY] = useState(0);
  const [viewingCount, setViewingCount] = useState(47);

  // Countdown timer
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

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(65, prev + change));
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const CountdownTimer = () => (
    <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4 md:p-6 backdrop-blur-sm">
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

  const handleCTAClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/3 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Top Trust Bar */}
      <div className="absolute top-0 left-0 right-0 bg-cyan-500/10 border-b border-cyan-500/30 py-2 z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4 text-sm">
          <span className="flex items-center gap-1">⭐ 4.9/5 (2,000+ families)</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">✓ 20+ years proven</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">🎓 Government certified</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">💯 30-day guarantee</span>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left: Emotional Hook */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                You're Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Failing.</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                Your Child Isn't <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Broken.</span>
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
                You Just Need The Right System.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-300">
              Join <span className="text-cyan-400 font-bold">2,000+ parents</span> who transformed chaos into calm
            </p>

            {/* Countdown Timer */}
            <div className="max-w-md">
              <CountdownTimer />
            </div>

            {/* Live Social Proof */}
            <div className="flex items-center gap-4 text-sm bg-green-500/20 border border-green-500/50 rounded-lg p-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <Users className="w-4 h-4" />
              <span>{viewingCount} people viewing now</span>
              <span className="hidden md:inline">•</span>
              <TrendingUp className="w-4 h-4 text-green-400 hidden md:inline-block" />
              <span className="hidden md:inline">2,847 families purchased last month</span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={handleCTAClick}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-6 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  GET MY SYSTEM - $14.74
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="w-full md:w-auto border-2 border-white/30 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 font-semibold text-lg px-8 py-4"
              >
                <a 
                  href="https://drive.google.com/file/d/1eKymrfq-9M8m_ZShRMLnAxhrXt4CRrHT/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Download Free Sample Pages
                </a>
              </Button>
            </div>

            {/* Floating Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Star className="w-4 h-4" />, text: "4.9/5 ⭐" },
                { icon: <Shield className="w-4 h-4" />, text: "30-day guarantee" },
                { icon: <Users className="w-4 h-4" />, text: "2,000+ families" },
                { icon: <Award className="w-4 h-4" />, text: "Certified" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Book Image - Clean, no background */}
          <div className="relative hidden lg:block">
            <div 
              className="relative transform hover:scale-105 transition-transform duration-500"
              style={{ transform: `perspective(1000px) rotateY(${scrollY * 0.05}deg)` }}
            >
              {/* Book Image - Clean, direct */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/c00b81f9-2afc-4533-90ce-e9bd5a348900.png" 
                  alt="The Calm & Confident Parent Book Cover" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full animate-bounce shadow-lg z-10">
                  84% OFF
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg z-10">
                  Instant Access
                </div>
                
                {/* Stars below book */}
                <div className="flex gap-1 justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
