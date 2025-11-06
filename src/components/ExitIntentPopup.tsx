import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitIntentShown');
    if (popupShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0) {
        setShowPopup(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!showPopup) return null;

  const handleCTAClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      setShowPopup(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-purple-900 to-slate-900 border-2 border-cyan-500 rounded-2xl p-6 md:p-8 max-w-lg w-full text-white relative shadow-2xl animate-scale-in">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Wait! Don't Go Yet!
            </h3>
            <p className="text-lg text-gray-300">
              Get an <span className="text-yellow-400 font-bold">EXTRA 10% OFF</span> when you order in the next 5 minutes
            </p>
          </div>

          <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">$13.27</p>
            <p className="text-sm text-gray-300 line-through">Instead of $14.74</p>
            <p className="text-sm text-green-400 font-semibold mt-1">Save an extra $1.47!</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleCTAClick}
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                YES! I WANT THE EXTRA DISCOUNT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full text-gray-400 hover:text-white transition-colors text-sm"
            >
              No thanks, I'll pay full price
            </button>
          </div>

          <div className="text-center text-xs text-gray-400">
            ⏰ This offer expires in 5 minutes
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;

