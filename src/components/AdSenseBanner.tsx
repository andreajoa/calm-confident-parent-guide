import { useEffect, useState, useRef } from 'react';

// Extend Window interface for AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseBannerProps {
  slot?: string;
  format?: string;
  style?: React.CSSProperties;
  responsive?: boolean;
  className?: string;
}

const AdSenseBanner = ({ 
  slot = '', 
  format = 'auto',
  style,
  responsive = true,
  className = ''
}: AdSenseBannerProps) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adVisible, setAdVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLElement>(null);

  useEffect(() => {
    try {
      // Wait for AdSense script to load
      const checkAdSense = setInterval(() => {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            setAdLoaded(true);
            clearInterval(checkAdSense);
          } catch (err) {
            console.error('AdSense error:', err);
          }
        }
      }, 100);

      // Check if ad actually rendered after a delay
      const checkAdRendered = setTimeout(() => {
        if (adRef.current) {
          const adElement = adRef.current;
          // Check if ad has meaningful height (more than 20px indicates content)
          const hasContent = adElement.offsetHeight > 20;
          
          if (!hasContent) {
            // Hide container if no ad rendered
            setAdVisible(false);
          }
        }
      }, 3000); // Check after 3 seconds

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkAdSense);
      }, 5000);

      return () => {
        clearInterval(checkAdSense);
        clearTimeout(checkAdRendered);
      };
    } catch (err) {
      console.error('AdSense initialization error:', err);
      setAdVisible(false);
    }
  }, []);

  // Hide completely if no ad visible
  if (!adVisible) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={`adsense-container ${className}`} 
      style={{
        display: 'block',
        margin: '0 auto',
        ...style
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: '100%',
          minHeight: '0',
          textAlign: 'center'
        }}
        data-ad-client="ca-pub-5650820824993161"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSenseBanner;
