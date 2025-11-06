import { useEffect } from 'react';

// Extend Window interface for AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseStickyProps {
  slot?: string;
  position?: 'left' | 'right';
  className?: string;
}

const AdSenseSticky = ({ slot = '', position = 'right', className = '' }: AdSenseStickyProps) => {
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
    <div 
      className={`adsense-sticky hidden lg:block fixed ${position === 'right' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 z-30 ${className}`}
      style={{ maxWidth: '160px' }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5650820824993161"
        data-ad-slot={slot}
        data-ad-format="vertical"
        data-full-width-responsive="false"
      />
    </div>
  );
};

export default AdSenseSticky;

