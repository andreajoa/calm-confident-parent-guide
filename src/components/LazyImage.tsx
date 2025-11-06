import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

const LazyImage = ({ src, alt, className = '', fallback }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
    } else {
      setImageError(true);
    }
  };

  if (imageError && !fallback) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
};

export default LazyImage;

