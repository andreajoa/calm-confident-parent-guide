import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  className?: string;
}

const LazySection = ({ children, fallback, rootMargin = '200px', className = '' }: LazySectionProps) => {
  // FORCE IMMEDIATE RENDER - No lazy loading to prevent gaps
  // All sections load immediately to ensure no white spaces
  return <>{children}</>;
};

export default LazySection;

