import { Flame, Frown, Moon } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Flame,
      title: "Daily meltdowns breaking your heart",
      description: "Every day feels like a battle, and you're exhausted from walking on eggshells."
    },
    {
      icon: Frown,
      title: "Feeling judged by schools and family",
      description: "The looks, the comments, the feeling like you're failing as a parent."
    },
    {
      icon: Moon,
      title: "Exhausted but can't find what works",
      description: "You've tried everything, but nothing seems to stick or make a real difference."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              You're Not Failing. <span className="text-destructive">The System Is.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every parent of a neurodivergent child knows these struggles. You're not alone, and more importantly, you're not failing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="card-elevated p-8 text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary/20 rounded-2xl border-2 border-secondary animate-fade-in-up">
            <p className="text-2xl md:text-3xl font-semibold text-center text-balance">
              What if there was a guide made BY someone who 
              <span className="text-primary"> truly gets it?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;