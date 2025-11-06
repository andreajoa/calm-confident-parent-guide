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
import AdSenseBanner from "@/components/AdSenseBanner";
import AdSenseInline from "@/components/AdSenseInline";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LiveSocialProof />
      
      {/* AdSense Banner - After hero section */}
      <AdSenseBanner 
        format="horizontal"
        className="max-w-7xl mx-auto px-4 py-4"
        style={{ minHeight: '100px' }}
      />
      
      <ProblemSection />
      <AuthorSection />
      
      {/* AdSense Inline - Between content sections */}
      <AdSenseInline className="max-w-7xl mx-auto px-4" />
      
      <WhatsIncludedSection />
      <ResearchSection />
      <ArticlesSection />
      <ResourceLocatorSection />
      
      {/* AdSense Inline - Before testimonials */}
      <AdSenseInline className="max-w-7xl mx-auto px-4" />
      
      <TestimonialsSection />
      <FAQSection />
      
      {/* AdSense Inline - Before pricing (critical section) */}
      <AdSenseInline className="max-w-7xl mx-auto px-4" />
      
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
