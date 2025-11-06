import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Star, Shield, Users, Award, Video, ArrowRight, ChevronDown, Clock, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 15 });
  const [scrollY, setScrollY] = useState(0);
  const [viewingCount, setViewingCount] = useState(47);
  const [recentPurchases, setRecentPurchases] = useState(2847);

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

  // Simulate viewing count and purchases
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(65, prev + change));
      });
      
      if (Math.random() > 0.7) {
        setRecentPurchases(prev => prev + 1);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const CountdownTimer = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4 md:p-6 backdrop-blur-sm"
    >
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
    </motion.div>
  );

  const handleCTAClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/3 -right-48"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-1/3"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center pt-20"
        >
          {/* Left: Emotional Hook - Hormozi/Brunson Style */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Pre-Headline (Yellow - Attention) */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-wide"
            >
              If You're Exhausted & Feel Like You're Failing...
            </motion.p>

            {/* Main Headline - Emotional Hook */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                You're Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Failing.</span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight"
              >
                Your Child Isn't <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Broken.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400"
              >
                You Just Need The Right System.
              </motion.p>
            </div>

            {/* Subheadline - Hormozi Style */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Join <span className="text-cyan-400 font-bold">2,000+ parents</span> who transformed daily chaos into calm, confident parenting—without therapy, medication changes, or complicated programs.
            </motion.p>

            {/* Trust Bar - Inline Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-3 text-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="font-semibold">4.9/5</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>2,000+ families</span>
              </span>
              <span className="text-gray-400">|</span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-green-400" />
                <span>Government Certified</span>
              </span>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="max-w-md"
            >
              <CountdownTimer />
            </motion.div>

            {/* Live Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap items-center gap-4 text-sm bg-green-500/20 border border-green-500/50 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold">{viewingCount} people viewing now</span>
              <span className="hidden md:inline text-gray-400">•</span>
              <div className="hidden md:flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>{recentPurchases.toLocaleString()} families purchased last month</span>
              </div>
            </motion.div>

            {/* CTA Stack - RED Primary Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="space-y-4"
            >
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto btn-cta-primary text-lg md:text-xl px-8 md:px-12 py-6 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                Get Your System - $14.74
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
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
            </motion.div>

            {/* Micro-Copy - Trust Signals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-400"
            >
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Secure checkout
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Instant PDF
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-400" />
                30-day guarantee
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Book Image - Clean, Direct */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative hidden lg:block"
          >
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/lovable-uploads/c00b81f9-2afc-4533-90ce-e9bd5a348900.png" 
                alt="The Calm & Confident Parent Book Cover" 
                className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
                loading="lazy"
                decoding="async"
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                84% OFF
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                Instant Access
              </motion.div>
              
              {/* Stars below book */}
              <div className="flex gap-1 justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
