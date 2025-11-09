import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  className?: string;
}

const LazySection = ({ children, fallback, rootMargin = '200px', className = '' }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin,
        threshold: 0.01
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  if (isVisible) {
    return <>{children}</>;
  }

  // Return absolutely minimal placeholder with zero visual impact
  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        height: 0,
        minHeight: 0,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    >
      {fallback || null}
    </div>
  );
};

export default LazySection;

