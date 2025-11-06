import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

const LazySection = ({ children, fallback, rootMargin = '100px' }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [rootMargin]);

  if (isVisible) {
    return <>{children}</>;
  }

  return (
    <div ref={ref} style={{ minHeight: '200px' }}>
      {fallback || <div className="animate-pulse bg-white/5 rounded-xl h-64" />}
    </div>
  );
};

export default LazySection;

