import { useState, useEffect } from 'react';
import { AlertTriangle, Gift, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyTopBar = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [copiesLeft, setCopiesLeft] = useState(47);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset if reaches 0
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate decreasing copies (randomly decreases)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85 && copiesLeft > 5) {
        setCopiesLeft(prev => prev - 1);
      }
    }, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [copiesLeft]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg border-b-2 border-red-700"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base">
          {/* Limited Copies */}
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
            <span className="font-bold">LIMITED TIME:</span>
            <span className="font-black text-lg">Only {copiesLeft} copies left at this price</span>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold">Offer expires in:</span>
            <span className="font-mono font-black text-lg bg-white text-red-600 px-2 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>

          {/* Bonus Badge */}
          <div className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-full">
            <Gift className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold">$450 in FREE bonuses included</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyTopBar;

