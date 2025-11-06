import { useEffect, useState } from 'react';

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

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkAdSense);
      }, 5000);

      return () => clearInterval(checkAdSense);
    } catch (err) {
      console.error('AdSense initialization error:', err);
    }
  }, []);

  return (
    <div 
      className={`adsense-container ${className}`} 
      style={{
        minHeight: adLoaded ? 'auto' : '100px',
        display: 'block',
        ...style
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          minHeight: '100px',
          width: '100%'
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
