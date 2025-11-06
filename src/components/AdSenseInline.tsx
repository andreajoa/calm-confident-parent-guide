import { useEffect, useState } from 'react';

// Extend Window interface for AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseInlineProps {
  slot?: string;
  className?: string;
}

const AdSenseInline = ({ slot = '', className = '' }: AdSenseInlineProps) => {
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
      className={`adsense-inline my-8 ${className}`}
      style={{
        minHeight: adLoaded ? 'auto' : '100px',
        display: 'block'
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block', 
          textAlign: 'center',
          minHeight: '100px',
          width: '100%'
        }}
        data-ad-client="ca-pub-5650820824993161"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseInline;
