import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhoIsThisForSection = () => {
  const isFor = [
    "Your child has been diagnosed with ADHD, Autism, or both",
    "You're feeling overwhelmed and don't know where to start",
    "You're tired of advice that doesn't work for YOUR child",
    "You want science-backed strategies, not just opinions",
    "You're navigating IEPs, therapy, and school challenges",
    "You feel alone in this journey",
    "You want to feel confident, not confused",
    "You're ready for real change, not quick fixes"
  ];

  const notFor = [
    "Parents looking for a 'cure' (this guide honors neurodiversity)",
    "Those wanting a magic overnight solution",
    "Anyone not willing to learn and grow alongside their child"
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white" style={{ marginTop: 0 }}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            This Guide is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Perfect For You</span> If:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Perfect For */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              Perfect For You If:
            </h3>
            <ul className="space-y-4">
              {isFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-400" />
              Not For:
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;

