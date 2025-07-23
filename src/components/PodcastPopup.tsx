import { X, Headphones, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PodcastPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PodcastPopup = ({ isOpen, onClose }: PodcastPopupProps) => {
  const podcastTitle = "Quick Guide to Attention-Deficit Hyperactivity Disorder (ADHD)";
  const spotifyUrl = "https://open.spotify.com/episode/5Oovgz67mdapn6EVHN9Vo0?si=AYuRwYfkSlmCKp-miDrD_Q";

  const handleListenClick = () => {
    window.open(spotifyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md mx-auto p-0 overflow-hidden border-0 bg-white max-h-[90vh] overflow-y-auto">
        <div className="relative bg-white p-4 sm:p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-10 w-10 sm:h-8 sm:w-8 text-muted-foreground hover:text-foreground z-10 touch-manipulation"
            onClick={onClose}
          >
            <X className="h-5 w-5 sm:h-4 sm:w-4" />
          </Button>
          
          <DialogHeader className="space-y-3 text-center mb-4 sm:mb-6 pr-8">
            <div className="flex justify-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Headphones className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-lg sm:text-xl font-bold text-foreground">
              Listen to Our Podcast
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">
                {podcastTitle}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Click here to listen to the podcast
              </p>
            </div>

            <button 
              onClick={handleListenClick}
              className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-md transition-colors text-sm sm:text-base touch-manipulation flex items-center justify-center space-x-2"
            >
              <span>Listen on Spotify</span>
              <ExternalLink className="h-4 w-4" />
            </button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                You'll be redirected to Spotify to listen to this episode
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PodcastPopup;