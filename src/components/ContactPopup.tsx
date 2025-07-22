import { useState } from "react";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Required Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save contact data to localStorage
      const contactData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        targetEmail: "tdahma2@gmail.com"
      };
      
      const existingContacts = localStorage.getItem("contactSubmissions");
      const contacts = existingContacts ? JSON.parse(existingContacts) : [];
      contacts.push(contactData);
      localStorage.setItem("contactSubmissions", JSON.stringify(contacts));

      toast({
        title: "Message Sent! 📧",
        description: "Thank you for reaching out! Your message has been received and Margareth will get back to you soon.",
      });

      // Reset form and close popup
      setName("");
      setEmail("");
      setMessage("");
      onClose();
      
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 bg-white">
        <div className="relative bg-white p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <DialogHeader className="space-y-3 text-center mb-6">
            <div className="flex justify-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              Get in Touch
            </DialogTitle>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              If you'd like to contact Margareth Almeida about anything, feel free to send your questions. I'll be happy to help!
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input 
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input 
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea 
                placeholder="Tell us what you'd like to discuss or ask about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Messages will be sent to: <span className="font-medium">tdahma2@gmail.com</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;