import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Package, CheckCircle2, Shield, CreditCard } from 'lucide-react';

const FinalUrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 15 });
  const [copiesLeft, setCopiesLeft] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85 && copiesLeft > 5) {
        setCopiesLeft(prev => prev - 1);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [copiesLeft]);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 via-red-950 to-slate-950 text-white relative overflow-hidden" style={{ marginTop: 0 }}>
      {/* Pulsing border effect */}
      <motion.div
        className="absolute inset-0 border-4 border-red-500 rounded-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(220, 38, 38, 0.5)',
            '0 0 40px rgba(220, 38, 38, 0.8)',
            '0 0 20px rgba(220, 38, 38, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-yellow-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ⚠️ DON'T MISS THIS OPPORTUNITY
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Option 1: Close Page */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-900/50 border-2 border-red-700 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-300">OPTION 1: Close this page</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">→</span>
                <span>Keep struggling with the same challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">→</span>
                <span>Feel guilty for not knowing what to do</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">→</span>
                <span>Watch your child suffer without the right support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">→</span>
                <span>Miss out on $450 worth of proven tools</span>
              </li>
            </ul>
          </motion.div>

          {/* Option 2: Invest */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-900/50 border-2 border-green-700 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-green-300">OPTION 2: Invest $47 in your family's future</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>Get instant clarity and confidence</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>Access strategies that actually work</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>Receive 6 professional tools worth $400</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>Join a community of parents who GET IT</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>Start seeing changes within days</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl md:text-2xl font-bold mb-8 text-yellow-400"
        >
          The choice is yours. But this offer won't be here forever.
        </motion.p>

        {/* Countdown and Copies */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-800/50 border border-red-600 rounded-xl p-6 text-center"
          >
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300 mb-2">Offer expires in:</p>
            <p className="text-3xl font-mono font-bold text-white">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-800/50 border border-red-600 rounded-xl p-6 text-center"
          >
            <Package className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300 mb-2">Only copies left at this price:</p>
            <p className="text-3xl font-bold text-white">{copiesLeft}</p>
          </motion.div>
        </div>

        {/* Giant CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://adhdautism.gumroad.com/l/spehk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-md bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-6 px-12 rounded-lg text-2xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all shadow-2xl mb-6"
            style={{ boxShadow: '0 0 60px rgba(220, 38, 38, 0.8)' }}
          >
            YES! I'M READY TO TRANSFORM OUR FAMILY - $47
          </a>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              256-Bit Secure Checkout
            </span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-4 h-4" />
              All Major Cards Accepted
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Instant Digital Delivery
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              30-Day Money-Back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalUrgencySection;

