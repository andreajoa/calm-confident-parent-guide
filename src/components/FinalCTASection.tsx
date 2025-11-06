import { CheckCircle, Clock, Shield, Download, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const benefits = [
    "Instant PDF Download",
    "178 Pages + 15 Printables", 
    "Use Forever, Print Anytime",
    "No Subscription Required",
    "30-Day Money-Back Guarantee",
    "Created by Certified Specialist"
  ];

  return (
    <section className="py-16 md:py-24 px-4 hero-gradient text-white overflow-hidden relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance">
              Your Calmer, Confident Parenting 
              <span className="text-yellow-200"> Starts Today</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 text-balance">
              Join 2,000+ parents who've found their peace and transformed their family's daily experience.
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 from 2,000+ families</span>
          </div>

          {/* Price and Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 animate-scale-in">
            <div className="space-y-8">
              {/* Price */}
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-yellow-200">
                  $14.74
                </div>
                <p className="text-lg text-white/80">
                  One-time payment • No hidden fees • Instant access
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 text-left"
                  >
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Main CTA */}
              <div className="flex flex-col items-center justify-center space-y-4 w-full">
                <Button 
                  asChild
                  size="lg"
                  className="w-full max-w-md mx-auto bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <a 
                    href="https://adhdautism.gumroad.com/l/spehk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Download Now - $14.74
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>30-Day Guarantee</span>
                  </div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>Instant Access</span>
                  </div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Start Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency and Social Proof */}
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-lg text-white/90">
              ⏰ <strong>Don't wait another day</strong> feeling overwhelmed and exhausted.
            </p>
            <p className="text-white/80">
              2,000+ families have already transformed their daily experience. You can be next.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
