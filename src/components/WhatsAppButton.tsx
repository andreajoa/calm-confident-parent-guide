import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (format: countrycode+number, no + or spaces)
  // Example: 5511999999999 for Brazil, or 12125551234 for USA
  const whatsappNumber = "5511999999999"; // CHANGE THIS TO YOUR ACTUAL NUMBER
  const message = encodeURIComponent("Hi! I'm interested in learning more about The Calm & Confident Parent Guide.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        !
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;

