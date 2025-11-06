import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, FileText, Video, Mail, Infinity, Sparkles } from 'lucide-react';

const ValueStackSection = () => {
  const valueStack = [
    {
      icon: BookOpen,
      item: "Complete 178-Page Guide",
      value: 97,
      details: [
        "Morning routines that work",
        "Meltdown prevention scripts",
        "School accommodation templates",
        "Sensory regulation tools"
      ]
    },
    {
      icon: FileText,
      item: "15 Printable Tools & Templates",
      value: 47,
      details: [
        "Visual schedules",
        "Behavior tracking sheets",
        "Communication cards",
        "Emotion regulation charts"
      ]
    },
    {
      icon: Video,
      item: "Video Walkthrough Series",
      value: 37,
      details: [
        "5 videos explaining key strategies",
        "Real family examples",
        "Troubleshooting common issues"
      ]
    },
    {
      icon: Mail,
      item: "30-Day Email Support",
      value: 97,
      details: [
        "Direct access to Margareth",
        "Personalized guidance",
        "Implementation support"
      ]
    },
    {
      icon: Infinity,
      item: "Lifetime Updates",
      value: "Priceless",
      details: [
        "New strategies added quarterly",
        "Updated research & tools",
        "Forever access"
      ]
    }
  ];

  const totalValue = 278;
  const yourPrice = 14.74;
  const savings = totalValue - yourPrice;
  const savingsPercent = Math.round((savings / totalValue) * 100);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Everything You Need in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ONE Complete System</span>
            </h2>
            <p className="text-xl text-gray-400">
              Worth $278. Today $14.74. (95% OFF)
            </p>
          </motion.div>

          {/* Value Stack Breakdown */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  What You Get Today:
                </h3>
              </div>

              {valueStack.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg md:text-xl font-semibold text-white">
                            ✓ {item.item}
                          </h4>
                          <span className="text-green-400 font-bold text-lg">
                            {typeof item.value === 'number' ? `$${item.value}` : item.value}
                          </span>
                        </div>
                        <ul className="space-y-1 ml-6">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Total Calculation */}
              <motion.div
                variants={fadeInUp}
                className="border-t-2 border-white/20 pt-8 mt-8 space-y-6"
              >
                <div className="flex justify-between items-center text-2xl">
                  <span className="text-gray-300">TOTAL VALUE:</span>
                  <span className="line-through text-gray-500 font-bold">${totalValue}</span>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500 rounded-2xl p-8 text-center space-y-4">
                  <p className="text-gray-300 text-lg">YOUR INVESTMENT TODAY:</p>
                  <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    ${yourPrice}
                  </div>
                  <p className="text-2xl text-green-400 font-bold">
                    Save ${savings.toFixed(2)} ({savingsPercent}% OFF!)
                  </p>
                  <p className="text-gray-400">
                    That's less than a pizza delivery
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-3 gap-4 text-center"
          >
            {[
              { icon: CheckCircle2, text: "Instant PDF Download" },
              { icon: Infinity, text: "Use Forever, Print Anytime" },
              { icon: CheckCircle2, text: "No Subscription Required" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <item.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueStackSection;

