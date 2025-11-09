import { useEffect, useState, useRef } from 'react';

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
  const [adVisible, setAdVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fast-fail if AdSense script not available
    if (typeof window === 'undefined' || !window.adsbygoogle) {
      // Check immediately - if script not loaded after 500ms, hide
      const quickCheck = setTimeout(() => {
        if (!window.adsbygoogle) {
          setAdVisible(false);
        }
      }, 500);
      return () => clearTimeout(quickCheck);
    }

    let checkAdRendered: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    try {
      // AdSense script is available, try to load ad immediately
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setAdLoaded(true);
      
      // Check if ad rendered (check after 800ms for faster feedback)
      checkAdRendered = setTimeout(() => {
        if (adRef.current) {
          const adElement = adRef.current;
          const hasContent = adElement.offsetHeight > 20;
          
          if (!hasContent) {
            setAdVisible(false);
            // Remove from DOM immediately to prevent layout impact
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
          }
        } else {
          setAdVisible(false);
        }
      }, 800); // Check after 800ms

      // Overall timeout - fail fast (1.5 seconds total)
      timeout = setTimeout(() => {
        if (adRef.current && adRef.current.offsetHeight <= 20) {
          setAdVisible(false);
          if (containerRef.current) {
            containerRef.current.style.display = 'none';
          }
        }
      }, 1500);

      return () => {
        if (checkAdRendered) clearTimeout(checkAdRendered);
        if (timeout) clearTimeout(timeout);
      };
    } catch (err) {
      setAdVisible(false);
    }
  }, []);

  // Hide completely if no ad visible - return null immediately to prevent any layout shift
  if (!adVisible) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={`adsense-inline ${className}`}
      style={{
        display: 'block',
        margin: '0 auto',
        minHeight: 0,
        lineHeight: 0
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block', 
          textAlign: 'center',
          width: '100%',
          minHeight: 0,
          maxHeight: 'none',
          lineHeight: 0
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
