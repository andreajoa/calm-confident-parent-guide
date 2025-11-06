import { motion } from 'framer-motion';
import { X, Heart, School, Moon } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      emoji: "💔",
      icon: Heart,
      title: "The Meltdown That Broke You Today",
      painPoints: [
        "Public tantrum at the grocery store",
        "Screaming during homework time",
        "Refusing to get dressed in the morning",
        "Judgment from other parents"
      ],
      counter: 2143,
      description: "The screaming. The tears (yours and theirs). The feeling of helplessness as your child melts down over something that seems so small. And the guilt afterward, wondering 'What did I do wrong?' You're walking on eggshells in your own home."
    },
    {
      emoji: "😰",
      icon: School,
      title: "The Judgment From School Yesterday",
      painPoints: [
        "Teacher called (again)",
        "Your child was 'different' today",
        "Suggestions for 'better control'",
        "You felt incompetent"
      ],
      counter: 1876,
      description: "Another call from the teacher. Another note home. The looks from other parents at pickup. The feeling that everyone thinks you're failing. The fear that your child will be 'that kid' forever. The exhaustion of fighting for basic accommodations."
    },
    {
      emoji: "😭",
      icon: Moon,
      title: "The Exhaustion You Can't Explain",
      painPoints: [
        "Constant mental exhaustion",
        "Fear of the next episode",
        "Guilt for not knowing what to do",
        "Feeling completely alone"
      ],
      counter: 2398,
      description: "You're doing everything 'right' but nothing works. You've read the books, tried the strategies, googled at 2am. But every day is still a battle. You're burnt out, touched out, cried out. And nobody understands the weight you carry."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Does This Sound Like Your <span className="text-red-400">Daily Reality?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You're not alone. You're not failing. But every day without the right system means another day of...
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-red-500/50 transition-all group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform text-center">{problem.emoji}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-400 text-center">{problem.title}</h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {problem.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {problem.painPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Real-time counter */}
                <div className="border-t border-white/10 pt-4 text-center">
                  <p className="text-xs text-gray-400">
                    <span className="text-red-400 font-bold">{problem.counter.toLocaleString()}</span> parents relate to this
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-full"
            >
              <div className="bg-slate-950 rounded-full px-8 py-4">
                <p className="text-2xl font-bold">
                  There's A <span className="text-cyan-400">Proven Way Out</span> ↓
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
