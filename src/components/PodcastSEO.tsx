import { useEffect } from 'react';

interface PodcastSEOProps {
  title?: string;
  description?: string;
  url?: string;
}

const PodcastSEO = ({ 
  title = "The Calm & Confident Parent - Podcast Episodes | ADHD & Autism Family Support",
  description = "Listen to expert advice and practical strategies for ADHD and autism families. Discover insights from Margareth Almeida on creating calm, confident parenting environments.",
  url = "https://www.adhdautism.online/podcasts"
}: PodcastSEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Create or update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: 'https://www.adhdautism.online/lovable-uploads/088e5682-630c-4d61-8ac4-712368b8222f.png' },
      { property: 'og:site_name', content: 'The Calm & Confident Parent' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://www.adhdautism.online/lovable-uploads/088e5682-630c-4d61-8ac4-712368b8222f.png' },
      { name: 'twitter:creator', content: '@margareth_almeida' }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "author": {
        "@type": "Person",
        "name": "Margareth Almeida",
        "jobTitle": "Neuropsychopedagogue"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Calm & Confident Parent"
      },
      "mainEntity": {
        "@type": "PodcastSeries",
        "name": "The Calm & Confident Parent Podcast",
        "description": "Expert advice and practical strategies for ADHD and autism families",
        "author": {
          "@type": "Person",
          "name": "Margareth Almeida"
        }
      }
    };

    const existingScript = document.querySelector('script[type="application/ld+json"][data-page="podcasts"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page', 'podcasts');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-page="podcasts"]');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, url]);

  return null; // This component doesn't render anything
};

export default PodcastSEO;