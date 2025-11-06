import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveSocialProof from "@/components/LiveSocialProof";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import LazySection from "@/components/LazySection";
import AdSenseBanner from "@/components/AdSenseBanner";
import AdSenseInline from "@/components/AdSenseInline";
import LivePurchaseNotifications from "@/components/LivePurchaseNotifications";
import ExitIntentPopup from "@/components/ExitIntentPopup";

// Lazy load heavy components for better performance
const WhatsIncludedSection = lazy(() => import("@/components/WhatsIncludedSection"));
const ValueStackSection = lazy(() => import("@/components/ValueStackSection"));
const ResearchSection = lazy(() => import("@/components/ResearchSection"));
const ArticlesSection = lazy(() => import("@/components/ArticlesSection"));
const ResourceLocatorSection = lazy(() => import("@/components/ResourceLocatorSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const EmailCapturePopup = lazy(() => import("@/components/EmailCapturePopup"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LiveSocialProof />
      
      {/* AdSense Banner - After hero section - Only show if not breaking layout */}
      <LazySection>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <AdSenseBanner 
            format="horizontal"
            className="w-full"
          />
        </div>
      </LazySection>
      
      <ProblemSection />
      <AuthorSection />
      
      {/* AdSense Inline - Between content sections - Only show if not breaking layout */}
      <LazySection>
        <div className="max-w-7xl mx-auto px-4">
          <AdSenseInline className="w-full" />
        </div>
      </LazySection>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <ValueStackSection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <WhatsIncludedSection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <ResearchSection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <ArticlesSection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <ResourceLocatorSection />
        </LazySection>
      </Suspense>
      
      {/* AdSense Inline - Before testimonials - Only show if not breaking layout */}
      <LazySection>
        <div className="max-w-7xl mx-auto px-4">
          <AdSenseInline className="w-full" />
        </div>
      </LazySection>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <TestimonialsSection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <FAQSection />
        </LazySection>
      </Suspense>
      
      {/* AdSense Inline - Before pricing (critical section) - Only show if not breaking layout */}
      <LazySection>
        <div className="max-w-7xl mx-auto px-4">
          <AdSenseInline className="w-full" />
        </div>
      </LazySection>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <PricingSection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <FinalCTASection />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <EmailCapturePopup />
      </Suspense>
      
      <ExitIntentPopup />
      <LivePurchaseNotifications />
    </div>
  );
};

export default Index;
