import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactPopup from "@/components/ContactPopup";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-3 hover:opacity-80 transition-all group"
        >
          <div className="relative">
            <img 
              src="/lovable-uploads/088e5682-630c-4d61-8ac4-712368b8222f.png" 
              alt="The Calm & Confident Parent Logo" 
              className="h-12 w-auto md:h-16 transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-lg md:text-xl text-white hidden sm:block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            The Calm & Confident Parent
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {[
            { label: 'About', id: 'about' },
            { label: 'Guide', id: 'guide' },
            { label: 'Resources', id: 'resources' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <Link 
            to="/podcasts"
            className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            Podcasts
          </Link>
          <Link 
            to="/screening-assessment"
            className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            Assessment
          </Link>
          <a 
            href="https://medium.com/@tdahma2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            Blog
          </a>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-orange-500 hover:to-pink-500 font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <a 
              href="https://adhdautism.gumroad.com/l/spehk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              Get Guide - $47
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl animate-slide-down">
          <nav className="flex flex-col p-4 space-y-2">
            {[
              { label: 'About', id: 'about' },
              { label: 'Guide', id: 'guide' },
              { label: 'Resources', id: 'resources' },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-white/80 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <Link 
              to="/podcasts"
              className="text-left text-white/80 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcasts
            </Link>
            <Link 
              to="/screening-assessment"
              className="text-left text-white/80 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Assessment
            </Link>
            <a 
              href="https://medium.com/@tdahma2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-white/80 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <button 
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
            >
              Contact
            </button>
            <Button 
              asChild
              className="w-full mt-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-orange-500 hover:to-pink-500 font-bold py-3 rounded-full"
            >
              <a 
                href="https://adhdautism.gumroad.com/l/spehk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Guide - $47
              </a>
            </Button>
          </nav>
        </div>
      )}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </header>
  );
};

export default Header;
