import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactPopup from "@/components/ContactPopup";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/lovable-uploads/088e5682-630c-4d61-8ac4-712368b8222f.png" 
            alt="The Calm & Confident Parent Logo" 
            className="h-16 w-auto md:h-20"
          />
          <span className="font-bold text-xl md:text-2xl text-foreground hidden sm:block">
            The Calm & Confident Parent
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('guide')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Guide
          </button>
          <Link 
            to="/podcasts"
            className="text-foreground hover:text-primary transition-colors"
          >
            Podcasts
          </Link>
          <a 
            href="https://medium.com/@tdahma2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Blog
          </a>
          <button 
            onClick={() => scrollToSection('resources')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Resources
          </button>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="btn-hero hidden sm:inline-flex"
          >
            <a 
              href="https://neuropsychopedagogue.gumroad.com/l/spehk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Guide - $19.87
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('guide')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Guide
            </button>
            <Link 
              to="/podcasts"
              className="text-left text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcasts
            </Link>
            <a 
              href="https://medium.com/@tdahma2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Resources
            </button>
            <button 
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <Button 
              asChild
              className="btn-hero w-full mt-4"
            >
              <a 
                href="https://neuropsychopedagogue.gumroad.com/l/spehk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Guide - $19.87
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