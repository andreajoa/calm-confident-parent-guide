import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveSocialProof from "@/components/LiveSocialProof";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import ResearchSection from "@/components/ResearchSection";
import ArticlesSection from "@/components/ArticlesSection";
import ResourceLocatorSection from "@/components/ResourceLocatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import EmailCapturePopup from "@/components/EmailCapturePopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LiveSocialProof />
      <ProblemSection />
      <AuthorSection />
      <WhatsIncludedSection />
      <ResearchSection />
      <ArticlesSection />
      <ResourceLocatorSection />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
      <EmailCapturePopup />
      <WhatsAppButton />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
