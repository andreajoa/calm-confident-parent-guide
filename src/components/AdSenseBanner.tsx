import { useEffect } from 'react';

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
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5650820824993161"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSenseBanner;

