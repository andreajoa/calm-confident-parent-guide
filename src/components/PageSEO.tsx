import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

const PageSEO = ({ title, description, canonical }: PageSEOProps) => {
  useEffect(() => {
    document.title = title.length > 60 ? `${title.slice(0, 57)}...` : title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description.slice(0, 160));
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical]);

  return null;
};

export default PageSEO;
