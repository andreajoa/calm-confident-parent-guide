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
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 bg-white">
        <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <DialogHeader className="space-y-3 text-center">
            <DialogTitle className="text-xl font-bold text-foreground">
              🎁 Receba Conteúdo Exclusivo!
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Cadastre-se para receber dicas exclusivas sobre parentalidade consciente
            </p>
          </DialogHeader>

          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border">
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