import { useState } from "react";
import { Book, FileText, Clock, Heart, Brain, Users, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsIncludedSection = () => {
  const [currentBonus, setCurrentBonus] = useState(0);

  const mainFeatures = [
    {
      icon: Book,
      title: "178 Illustrated Pages",
      description: "Comprehensive guide with visual aids and real-world examples",
      value: "$97"
    },
    {
      icon: FileText,
      title: "Real-World Scripts",
      description: "Exact words to use with doctors, teachers, and family members",
      value: "$47"
    },
    {
      icon: Clock,
      title: "Step-by-Step Meltdown Management",
      description: "Proven techniques to prevent and handle emotional outbursts",
      value: "$37"
    },
    {
      icon: Heart,
      title: "Morning & Evening Routines",
      description: "Structured routines that actually stick and reduce stress",
      value: "$67"
    },
    {
      icon: Brain,
      title: "Sensory Regulation Techniques",
      description: "Tools to help your child self-regulate in any environment",
      value: "$57"
    },
    {
      icon: Users,
      title: "Parent Self-Care Strategies",
      description: "Essential tools to maintain your own well-being and sanity",
      value: "$47"
    }
  ];

  const bonusTools = [
    "Daily Journal", "Behavior & Emotion Tracker", "Morning/Evening Routine Charts",
    "Emotion Poster", "Sensory Checklist", "Emergency Plan", "Meltdown Template",
    "Wins Tracker", "Gratitude Journal", "Parent Self-Care Checklist",
    "Calm Corner Setup", "IEP Scripts", "Affirmation Cards (Parent & Child)",
    "Notes & Doodles", "Quick Reference Guides"
  ];

  const nextBonus = () => {
    setCurrentBonus((prev) => (prev + 1) % bonusTools.length);
  };

  const prevBonus = () => {
    setCurrentBonus((prev) => (prev - 1 + bonusTools.length) % bonusTools.length);
  };

  return (
    <section id="guide" className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Everything You Need in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">One Complete System</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No more scattered resources or conflicting advice. This comprehensive guide has everything you need to transform your family's daily experience.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center space-y-4 hover:bg-white/10 hover:border-cyan-500/50 transition-all transform hover:scale-105 group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
                <div className="text-cyan-400 font-bold text-lg">
                  {feature.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="mt-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 md:p-12 border-2 border-cyan-500/30 backdrop-blur-sm">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">BONUS:</span> 15 Printable Tools
                </h3>
                <p className="text-lg text-gray-300">
                  Ready-to-use resources you can print and implement immediately
                </p>
              </div>

              {/* Carousel */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevBonus}
                    className="rounded-full p-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="text-center flex-1 mx-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {bonusTools[currentBonus]}
                    </h4>
                    <div className="flex justify-center space-x-1 mt-4">
                      {bonusTools.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentBonus ? 'bg-cyan-400' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextBonus}
                    className="rounded-full p-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 animate-fade-in-up flex justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-orange-500 hover:to-pink-500 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 w-full max-w-md mx-auto"
            >
              <a 
                href="https://adhdautism.gumroad.com/l/spehk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Get Complete System - $47
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
