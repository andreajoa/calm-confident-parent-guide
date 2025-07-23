import { ExternalLink, Mail, ArrowUp } from "lucide-react";
import { useState } from "react";
import PodcastPopup from "./PodcastPopup";

const Footer = () => {
  const [isPodcastPopupOpen, setIsPodcastPopupOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const authorityLinks = [
    { name: "CHADD Resources", url: "https://chadd.org" },
    { name: "Understood.org", url: "https://www.understood.org" },
    { name: "ADDitude Tips", url: "https://additudemag.com" },
    { name: "CDC Guidelines", url: "https://www.cdc.gov/ncbddd/adhd" }
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
            >
              <img 
                src="/lovable-uploads/088e5682-630c-4d61-8ac4-712368b8222f.png" 
                alt="The Calm & Confident Parent Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg">
                The Calm & Confident Parent
              </span>
            </button>
            <p className="text-white/70 text-sm leading-relaxed">
              Transforming ADHD and autism families through evidence-based strategies and compassionate support.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:tdahma2@gmail.com" 
                className="text-white/70 hover:text-white transition-colors"
              >
                tdahma2@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                About Margareth
              </button>
              <button 
                onClick={() => scrollToSection('guide')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                What's Included
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Free Resources
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Contact Support
              </button>
            </nav>
          </div>

          {/* Authority Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Trusted Resources</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              {authorityLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center space-x-1 group"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          {/* Coming Soon */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Coming Soon</h4>
            <div className="space-y-2 text-sm text-white/70">
              <button 
                onClick={() => setIsPodcastPopupOpen(true)}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                🎙️ Weekly Podcast Series
              </button>
              <p>👥 Monthly Support Groups</p>
              <p>📱 Mobile App</p>
              <p>🎯 Advanced Workshops</p>
            </div>
            <p className="text-xs text-white/50">
              Be the first to know when these launch!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © 2024 Margareth Almeida. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="https://neuropsychopedagogue.gumroad.com/l/spehk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Purchase Guide
              </a>
              <a 
                href="mailto:tdahma2@gmail.com" 
                className="text-white/70 hover:text-white transition-colors"
              >
                Support
              </a>
              <button 
                onClick={scrollToTop}
                className="text-white/70 hover:text-white transition-colors flex items-center space-x-1 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm italic">
              "Every family deserves to feel calm, confident, and connected. You've got this." 
              <span className="block mt-1 font-medium">— Margareth Almeida</span>
            </p>
          </div>
        </div>
      </div>

      <PodcastPopup 
        isOpen={isPodcastPopupOpen} 
        onClose={() => setIsPodcastPopupOpen(false)} 
      />
    </footer>
  );
};

export default Footer;