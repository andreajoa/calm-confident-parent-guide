import { ExternalLink, Mail, ArrowUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white py-16 border-t border-cyan-500/20">
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
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Calm & Confident Parent
              </span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ADHD and autism families through evidence-based strategies and compassionate support.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-cyan-400" />
              <a 
                href="mailto:info@adhdautism.online" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                info@adhdautism.online
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              {[
                { label: 'About Margareth', id: 'about' },
                { label: "What's Included", id: 'guide' },
                { label: 'Free Resources', id: 'resources' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all" />
                  {item.label}
                </button>
              ))}
              <Link 
                to="/podcasts"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all" />
                Podcasts
              </Link>
              <Link 
                to="/screening-assessment"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all" />
                Assessment Tool
              </Link>
              <a 
                href="https://medium.com/@tdahma2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all" />
                Blog
              </a>
            </nav>
          </div>

          {/* Authority Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Trusted Resources
            </h4>
            <nav className="flex flex-col space-y-2 text-sm">
              {authorityLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-1 group"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          {/* Coming Soon */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Coming Soon</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">👥</span> Monthly Support Groups
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">📱</span> Mobile App
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">🎯</span> Advanced Workshops
              </p>
            </div>
            <p className="text-xs text-gray-500">
              Be the first to know when these launch!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Margareth Almeida. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm">
              {[
                { label: 'Podcasts', to: '/podcasts' },
                { label: 'Assessment', to: '/screening-assessment' },
                { label: 'Blog', href: 'https://medium.com/@tdahma2' },
                { label: 'Purchase Guide', href: 'https://adhdautism.gumroad.com/l/spehk' },
                { label: 'Return Policy', to: '/return-policy' },
                { label: 'Support', href: 'mailto:info@adhdautism.online' },
              ].map((item) => (
                item.to ? (
                  <Link 
                    key={item.label}
                    to={item.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    key={item.label}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-1 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm italic">
              "Every family deserves to feel calm, confident, and connected. You've got this." 
              <span className="block mt-1 font-medium text-cyan-400">— Margareth Almeida</span>
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
