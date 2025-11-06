import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, FileText, Video, Mail, Infinity, Sparkles } from 'lucide-react';

const ValueStackSection = () => {
  const valueStack = [
    {
      section: "CORE GUIDE",
      icon: BookOpen,
      item: "A Daily Guide to Help Your Child with ADHD and Autism Thrive",
      value: 97,
      details: [
        "178 pages of transformational content",
        "16 comprehensive chapters",
        "Written by expert with lived experience",
        "Instant PDF download"
      ]
    },
    {
      section: "BONUS #1 - LIFETIME ACCESS",
      icon: FileText,
      item: "Visual Schedule Creator Tool",
      value: 97,
      details: [
        "Create custom visual routines in minutes",
        "Printable & digital formats",
        "Reduce morning/bedtime battles",
        "Works for any age"
      ]
    },
    {
      section: "BONUS #2 - LIFETIME ACCESS",
      icon: FileText,
      item: "Sensory Profile Assessment Tool",
      value: 67,
      details: [
        "Identify your child's sensory triggers",
        "Personalized regulation strategies",
        "Printable reference guide",
        "Update as your child grows"
      ]
    },
    {
      section: "BONUS #3 - LIFETIME ACCESS",
      icon: FileText,
      item: "IEP Preparation Toolkit",
      value: 87,
      details: [
        "Document organizer templates",
        "Meeting scripts & email templates",
        "Accommodation request library",
        "Progress tracking sheets"
      ]
    },
    {
      section: "BONUS #4 - LIFETIME ACCESS",
      icon: FileText,
      item: "Calm Corner Setup Guide",
      value: 47,
      details: [
        "Room-by-room sensory audit",
        "Budget-friendly tool suggestions",
        "Printable calm-down cards",
        "Visual emotion charts"
      ]
    },
    {
      section: "BONUS #5 - LIFETIME ACCESS",
      icon: FileText,
      item: "Parent Self-Care Tracker",
      value: 37,
      details: [
        "30-day reset challenge",
        "Burnout prevention checklist",
        "5-minute regulation exercises",
        "Support network builder"
      ]
    },
    {
      section: "BONUS #6 - LIMITED TIME",
      icon: Mail,
      item: "Private Parent Community Access (3 Months)",
      value: 67,
      details: [
        "Connect with other parents",
        "Share wins & challenges",
        "Expert Q&A sessions",
        "Resource library"
      ]
    }
  ];

  const totalValue = 497;
  const yourPrice = 47;
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
              🎁 HERE'S EVERYTHING YOU GET TODAY
            </h2>
            <p className="text-xl text-gray-400">
              (Real Value: $497 — Today: $47)
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
                  {index > 0 && (
                    <div className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">
                      ━━━━━━━━━━━━━━━━━━━━━━━━
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-cyan-400 font-semibold mb-1 uppercase">{item.section}</p>
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
                              <span className="text-green-400 mt-1">✓</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        {index === 0 && (
                          <p className="text-xs text-gray-500 mt-2 ml-6">(VALUE: ${item.value})</p>
                        )}
                        {index > 0 && (
                          <p className="text-xs text-gray-500 mt-2 ml-6">(VALUE: ${item.value}/year → FREE)</p>
                        )}
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
                
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-8 text-center space-y-4">
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300 text-lg">💰 TOTAL VALUE: <span className="line-through text-gray-500">${totalValue}</span></p>
                    <p className="text-2xl font-bold text-red-400">🔥 YOUR PRICE TODAY: ${yourPrice}</p>
                    <p className="text-xl text-green-400 font-bold">💎 YOU SAVE: ${savings} ({savingsPercent}% OFF)</p>
                  </div>
                  <a
                    href="https://adhdautism.gumroad.com/l/spehk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all shadow-2xl"
                    style={{ boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' }}
                  >
                    YES! GIVE ME EVERYTHING FOR JUST ${yourPrice}
                  </a>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mt-4">
                    <span>🔒 Secure Checkout</span>
                    <span>⚡ Instant Access</span>
                    <span>💯 30-Day Guarantee</span>
                  </div>
                  <p className="text-sm text-yellow-400 mt-4">
                    ⏰ WARNING: Price increases to $97 after 47 copies sold
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

