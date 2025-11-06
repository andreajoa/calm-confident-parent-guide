import { X } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      emoji: "💔",
      title: "The Meltdown That Broke You Today",
      painPoints: [
        "Public tantrum at the grocery store",
        "Screaming during homework time",
        "Refusing to get dressed in the morning",
        "Judgment from other parents"
      ]
    },
    {
      emoji: "😰",
      title: "The School Call Yesterday",
      painPoints: [
        "Teacher called (again)",
        "Your child was 'different' today",
        "Suggestions for 'better control'",
        "You felt incompetent"
      ]
    },
    {
      emoji: "😭",
      title: "The Exhaustion You Can't Explain",
      painPoints: [
        "Constant mental exhaustion",
        "Fear of the next episode",
        "Guilt for not knowing what to do",
        "Feeling completely alone"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              If This Sounds Like Your <span className="text-red-400">Daily Reality...</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You're not alone. Every parent of a neurodivergent child knows these struggles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform text-center">{problem.emoji}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-red-400 text-center">{problem.title}</h3>
                <ul className="space-y-3">
                  {problem.painPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-full">
              <div className="bg-slate-950 rounded-full px-8 py-4">
                <p className="text-2xl font-bold">
                  There's A <span className="text-cyan-400">Better Way</span> ↓
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
