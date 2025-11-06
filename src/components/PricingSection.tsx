import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Download, ArrowRight, CreditCard, Lock, Sparkles, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 15 });
  const [copiesLeft, setCopiesLeft] = useState(43);

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

  // Simulate decreasing copies
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8 && copiesLeft > 5) {
        setCopiesLeft(prev => prev - 1);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [copiesLeft]);

  const CountdownTimer = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4 md:p-6 backdrop-blur-sm mb-8"
    >
      <p className="text-red-400 text-sm font-semibold mb-3 text-center flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        ⚡ SPECIAL LIMITED OFFER EXPIRES IN:
      </p>
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

  const benefits = [
    "Instant PDF Download",
    "178 Pages + 15 Printables", 
    "Use Forever, Print Anytime",
    "No Subscription Required",
    "30-Day Money-Back Guarantee",
    "Created by Certified Specialist"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 bg-red-500/5 rounded-full blur-3xl top-1/4 -left-48"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-red-400 font-bold text-sm uppercase tracking-wide">⚡ SPECIAL LIMITED OFFER</p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Get Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transform Your Family</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              Starting Today
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <CountdownTimer />
          </motion.div>

          {/* Premium Pricing Card */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-6 md:p-12 space-y-8 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-8">
              {/* Value Summary */}
              <div className="border-b border-white/10 pb-6">
                <div className="flex justify-between items-center text-2xl mb-4">
                  <span className="text-gray-300">TOTAL VALUE:</span>
                  <span className="line-through text-gray-500 font-bold">$497</span>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-8 space-y-4 text-center">
                  <p className="text-gray-300 text-lg">YOUR PRICE TODAY:</p>
                  <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    $47
                  </div>
                  <p className="text-2xl text-green-400 font-bold">
                    Save $450 (91% OFF!)
                  </p>
                  <p className="text-sm text-yellow-400">
                    ⏰ WARNING: Price increases to $97 after 47 copies sold
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-left bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Guarantee Badges */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">30-Day Money-Back</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-green-400">✓ Zero Risk - 100% Refund</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2">
                  <Download className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">📥 Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">🔒 Secure Checkout (SSL)</span>
                </div>
              </div>

              {/* Primary CTA - RED (Highest Conversion) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://adhdautism.gumroad.com/l/spehk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-primary w-full max-w-md mx-auto text-xl px-12 py-6 flex items-center justify-center gap-3 group block"
                >
                  <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
                  YES! GIVE ME EVERYTHING FOR JUST $47
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>

              {/* Secondary CTA */}
              <a
                href="https://drive.google.com/file/d/1eKymrfq-9M8m_ZShRMLnAxhrXt4CRrHT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm underline block"
              >
                Download Free Sample First
              </a>

              {/* Trust Badges - Payment Methods */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400 pt-4 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Secure Payment:
                </span>
                <span className="bg-white/10 px-3 py-1 rounded">Stripe</span>
                <span className="bg-white/10 px-3 py-1 rounded">PayPal</span>
                <span className="bg-white/10 px-3 py-1 rounded">Apple Pay</span>
              </div>
            </div>
          </motion.div>

          {/* Scarcity Indicators */}
          <motion.div
            variants={fadeInUp}
            className="space-y-4"
          >
            <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-6 space-y-2">
              <p className="text-lg font-bold text-yellow-400 flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Limited Copies Available
              </p>
              <p className="text-gray-300">
                Only <span className="font-bold text-yellow-400 text-xl">{copiesLeft} copies</span> left at this price today
              </p>
              <p className="text-sm text-gray-400">
                73% of today's allocation already sold
              </p>
            </div>

            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4">
              <p className="text-sm text-green-400 font-semibold">
                🔥 {Math.floor(Math.random() * 50 + 800)} purchased in last 24h
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
