import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import ResearchSection from "@/components/ResearchSection";
import ArticlesSection from "@/components/ArticlesSection";
import ResourceLocatorSection from "@/components/ResourceLocatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <AuthorSection />
      <WhatsIncludedSection />
      <ResearchSection />
      <ArticlesSection />
      <ResourceLocatorSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
