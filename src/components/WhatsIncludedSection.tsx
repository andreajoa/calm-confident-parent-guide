import { useState } from "react";
import { Book, FileText, Clock, Heart, Brain, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsIncludedSection = () => {
  const [currentBonus, setCurrentBonus] = useState(0);

  const mainFeatures = [
    {
      icon: Book,
      title: "178 Illustrated Pages",
      description: "Comprehensive guide with visual aids and real-world examples"
    },
    {
      icon: FileText,
      title: "Real-World Scripts",
      description: "Exact words to use with doctors, teachers, and family members"
    },
    {
      icon: Clock,
      title: "Step-by-Step Meltdown Management",
      description: "Proven techniques to prevent and handle emotional outbursts"
    },
    {
      icon: Heart,
      title: "Morning & Evening Routines",
      description: "Structured routines that actually stick and reduce stress"
    },
    {
      icon: Brain,
      title: "Sensory Regulation Techniques",
      description: "Tools to help your child self-regulate in any environment"
    },
    {
      icon: Users,
      title: "Parent Self-Care Strategies",
      description: "Essential tools to maintain your own well-being and sanity"
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
    <section id="guide" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Everything You Need in <span className="text-primary">One Complete System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No more scattered resources or conflicting advice. This comprehensive guide has everything you need to transform your family's daily experience.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="card-elevated p-8 text-center space-y-4 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="mt-20 bg-secondary/20 rounded-2xl p-8 md:p-12 border-2 border-secondary">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  <span className="text-secondary">BONUS:</span> 15 Printable Tools
                </h3>
                <p className="text-lg text-muted-foreground">
                  Ready-to-use resources you can print and implement immediately
                </p>
              </div>

              {/* Carousel */}
              <div className="relative bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevBonus}
                    className="rounded-full p-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="text-center flex-1 mx-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {bonusTools[currentBonus]}
                    </h4>
                    <div className="flex justify-center space-x-1 mt-4">
                      {bonusTools.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentBonus ? 'bg-primary' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextBonus}
                    className="rounded-full p-2"
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
              className="btn-hero text-xl px-12 py-6 w-full max-w-md mx-auto"
            >
              <a 
                href="https://neuropsychopedagogue.gumroad.com/l/spehk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Get Complete System - $19.87
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;