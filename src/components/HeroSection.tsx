import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-gradient py-16 md:py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Finally, A Daily System That Works for 
                <span className="text-yellow-200"> ADHD & Autism Families</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-balance">
                178 illustrated pages of scripts, tools, and strategies from a neuropsychopedagogue with 20+ years helping families just like yours.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-yellow-200">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold">Trusted by 2,000+ families</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-4 shadow-xl"
              >
                <a 
                  href="https://neuropsychopedagogue.gumroad.com/l/spehk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Instant Access - $19.87
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4"
                onClick={() => document.getElementById('email-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download Free Sample Pages
              </Button>
            </div>

            {/* Email Form Embed */}
            <div id="email-form" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Get Free Sample Pages First:</h3>
              <div id="emailoctopus-form">
                <script 
                  async 
                  src="https://eocampaign1.com/form/72fb70c4-663b-11f0-b017-738da375565f.js" 
                  data-form="72fb70c4-663b-11f0-b017-738da375565f"
                ></script>
              </div>
            </div>
          </div>

          {/* Book Cover */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/c00b81f9-2afc-4533-90ce-e9bd5a348900.png" 
                alt="The Calm & Confident Parent Book Cover" 
                className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;