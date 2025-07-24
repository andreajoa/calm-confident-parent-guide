import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const EmailCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only validate email format if email is provided
    if (email.trim() && !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Allow submission even with empty fields
    if (!firstName.trim() && !email.trim()) {
      handleClose();
      return;
    }

    setIsSubmitting(true);

    try {
      // Salvar dados no localStorage
      const submissionData = {
        firstName: firstName.trim(),
        email: email.trim(),
        timestamp: new Date().toISOString(),
      };
      
      const existingData = localStorage.getItem("emailCaptures");
      const captures = existingData ? JSON.parse(existingData) : [];
      captures.push(submissionData);
      localStorage.setItem("emailCaptures", JSON.stringify(captures));

      // Tentar submeter para o serviço externo (EmailOctopus)
      const formData = new FormData();
      formData.append("field_0", firstName.trim()); // Nome
      formData.append("field_1", email.trim()); // Email
      
      // Submit para o formulário real (se disponível)
      fetch("https://eocampaign1.com/form/72fb70c4-663b-11f0-b017-738da375565f", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }).catch(() => {
        // Ignorar erros de CORS, dados já foram salvos localmente
      });

      toast({
        title: "Thank You! 🎉",
        description: "Your email has been successfully registered! Please check your inbox for your free guide sample.",
      });

      // Fechar popup e marcar como enviado
      handleClose();
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener to detect form submission
      const handleSubmit = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-form="72fb70c4-663b-11f0-b017-738da375565f"]')) {
          setTimeout(() => handleClose(), 1000); // Delay to allow form processing
        }
      };

      document.addEventListener('submit', handleSubmit);
      return () => document.removeEventListener('submit', handleSubmit);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] p-0 overflow-hidden border-0 bg-white">
        <div className="relative bg-white p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90vh]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-gray-100 z-10"
            onClick={handleClose}
            title="Close popup"
          >
            <X className="h-5 w-5" />
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            {/* Left side - Form */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center space-y-2 sm:space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
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

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="text"
                  placeholder="Enter your first name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <input 
                  type="email"
                  placeholder="Enter your email address here (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <div className="space-y-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-400 hover:bg-blue-500 disabled:bg-blue-300 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    {isSubmitting ? "Subscribing..." : "Get Free Sample"}
                  </button>
                  <button 
                    type="button"
                    onClick={handleClose}
                    className="w-full text-muted-foreground hover:text-foreground text-sm py-2 underline transition-colors"
                  >
                    No thanks, close this popup
                  </button>
                </div>
              </form>

              <div className="text-center text-xs text-muted-foreground">
                Powered by EmailOctopus
              </div>
            </div>

            {/* Right side - Guide Image */}
            <div className="flex justify-center md:order-last order-first">
              <img 
                src="/lovable-uploads/c00b81f9-2afc-4533-90ce-e9bd5a348900.png" 
                alt="The Calm & Confident Parent Guide"
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-full h-auto rounded-lg shadow-lg"
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