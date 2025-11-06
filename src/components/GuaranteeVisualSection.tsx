import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const GuaranteeVisualSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <Shield className="w-24 h-24 md:w-32 md:h-32 text-green-400 mx-auto mb-6 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            100% RISK-FREE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-green-400"
          >
            30-Day Money-Back Guarantee
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              If this guide doesn't give you clarity, confidence, and actionable strategies within 30 days, we'll refund every penny—no questions asked.
            </p>
            <p className="text-xl md:text-2xl font-bold text-cyan-400">
              You risk nothing. Your child's future is worth $47.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeVisualSection;

