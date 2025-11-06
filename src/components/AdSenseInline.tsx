import { useEffect } from 'react';

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
    <div className={`adsense-inline my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-5650820824993161"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseInline;

