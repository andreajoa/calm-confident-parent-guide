import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EmailCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('emailPopupShown');
    
    if (!popupShown && !hasShown) {
      // Show popup after 3 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as shown for this session
    sessionStorage.setItem('emailPopupShown', 'true');
  };

  const handleFormSubmit = () => {
    // When form is submitted, close popup and mark as shown
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener to detect form submission
      const handleSubmit = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-form="72fb70c4-663b-11f0-b017-738da375565f"]')) {
          setTimeout(handleFormSubmit, 1000); // Delay to allow form processing
        }
      };

      document.addEventListener('submit', handleSubmit);
      return () => document.removeEventListener('submit', handleSubmit);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-0 bg-white">
        <div className="relative bg-white p-8">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Form */}
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Want a Sneak Peek<br />
                  of the Guide? 🎁
                </h2>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Get 12 FREE pages</strong> from <em>The Calm & Confident Parent</em> guide — packed with real scripts, visual tools, and proven techniques to bring more peace to your home today.</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-blue-600">
                  <span>📧 Instant download</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-green-600">
                  <span>✅ No spam, ever</span>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Created by a certified neuropsychopedagogue
                </p>
                <p className="text-sm font-medium text-foreground">
                  Enter your email to get the free sample now!
                </p>
              </div>

              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <input 
                  type="email"
                  placeholder="Enter your email address here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                Powered by EmailOctopus
              </div>
            </div>

            {/* Right side - Guide Image */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/c00b81f9-2afc-4533-90ce-e9bd5a348900.png" 
                alt="The Calm & Confident Parent Guide"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Hidden form container for the actual script */}
          <div className="hidden">
            <div 
              id="email-capture-form"
              dangerouslySetInnerHTML={{
                __html: `
                  <div data-form="72fb70c4-663b-11f0-b017-738da375565f"></div>
                `
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCapturePopup;