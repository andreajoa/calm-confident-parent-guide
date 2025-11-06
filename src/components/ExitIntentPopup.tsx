import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, FileText, Calendar, CheckSquare } from 'lucide-react';
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

  const handleClose = () => {
    setShowPopup(false);
  };

  const freeTools = [
    { icon: FileText, name: "Emergency Meltdown Script", description: "Exact words to use during crisis" },
    { icon: Calendar, name: "7-Day Morning Routine Template", description: "Start your transformation tomorrow" },
    { icon: CheckSquare, name: "IEP Meeting Checklist", description: "Never forget important points again" }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-500 rounded-2xl p-6 md:p-8 max-w-lg w-full text-white relative shadow-2xl"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6">
            <div className="text-center space-y-2">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
              >
                ⚠️ Wait! Before You Go...
              </motion.h3>
              <p className="text-lg text-gray-300">
                I get it. You're not sure yet. Can I send you something free?
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-4 space-y-3">
              <p className="font-semibold text-cyan-400">Get these 3 tools instantly:</p>
              {freeTools.map((tool, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                  <tool.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{tool.name}</p>
                    <p className="text-xs text-gray-400">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div id="exit-intent-email-form" className="bg-white/5 rounded-lg p-4">
                <script 
                  async 
                  src="https://eocampaign1.com/form/72fb70c4-663b-11f0-b017-738da375565f.js" 
                  data-form="72fb70c4-663b-11f0-b017-738da375565f"
                ></script>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                onClick={() => {
                  // Scroll to email form
                  document.getElementById('exit-intent-email-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Send My Free Tools
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <button
                onClick={handleClose}
                className="w-full text-gray-400 hover:text-white transition-colors text-sm"
              >
                No thanks, I'll check back later
              </button>
            </div>

            <div className="text-center text-xs text-gray-500 border-t border-white/10 pt-4">
              No spam. Just tools that help.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
