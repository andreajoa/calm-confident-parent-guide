import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import StickyTopBar from "@/components/StickyTopBar";
import HeroSection from "@/components/HeroSection";
import LiveSocialProof from "@/components/LiveSocialProof";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import LazySection from "@/components/LazySection";
import AdSenseBanner from "@/components/AdSenseBanner";
import AdSenseInline from "@/components/AdSenseInline";
import LivePurchaseNotifications from "@/components/LivePurchaseNotifications";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyCTAButton from "@/components/StickyCTAButton";

// Lazy load heavy components for better performance
const ValueStackSection = lazy(() => import("@/components/ValueStackSection"));
const ChapterBreakdownSection = lazy(() => import("@/components/ChapterBreakdownSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const WhoIsThisForSection = lazy(() => import("@/components/WhoIsThisForSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalUrgencySection = lazy(() => import("@/components/FinalUrgencySection"));
const GuaranteeVisualSection = lazy(() => import("@/components/GuaranteeVisualSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const EmailCapturePopup = lazy(() => import("@/components/EmailCapturePopup"));

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1: Sticky Top Bar */}
      <StickyTopBar />
      
      <Header />
      
      {/* SECTION 2: Hero Section */}
      <HeroSection />
      <LiveSocialProof />
      
      {/* AdSense Banner - Hidden if no ad loads */}
      <LazySection>
        <AdSenseBanner format="horizontal" className="w-full" />
      </LazySection>
      
      {/* SECTION 3: Authority Proof */}
      <AuthorSection />
      
      {/* SECTION 4: Problem Agitation */}
      <ProblemSection />
      
      {/* AdSense Inline - Hidden if no ad loads */}
      <LazySection>
        <AdSenseInline className="w-full" />
      </LazySection>
      
      {/* SECTION 5: Solution (Value Stack) */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <ValueStackSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 6: Chapter Breakdown */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <ChapterBreakdownSection />
        </LazySection>
      </Suspense>
      
      {/* AdSense Inline - Hidden if no ad loads */}
      <LazySection>
        <AdSenseInline className="w-full" />
      </LazySection>
      
      {/* SECTION 7: Value Stack (already shown above, but keeping for structure) */}
      
      {/* SECTION 8: Proof & Testimonials */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <TestimonialsSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 9: Tools Demonstration - Using existing WhatsIncludedSection as placeholder */}
      
      {/* SECTION 10: Who Is This For */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <WhoIsThisForSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 11: FAQ */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <FAQSection />
        </LazySection>
      </Suspense>
      
      {/* AdSense Inline - Hidden if no ad loads */}
      <LazySection>
        <AdSenseInline className="w-full" />
      </LazySection>
      
      {/* SECTION 12: Final Urgency */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <FinalUrgencySection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 13: Guarantee Visual */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <GuaranteeVisualSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 14: Final CTA */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection>
          <FinalCTASection />
        </LazySection>
      </Suspense>
      
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* Popups & Notifications */}
      <Suspense fallback={null}>
        <EmailCapturePopup />
      </Suspense>
      
      <ExitIntentPopup />
      <LivePurchaseNotifications />
      
      {/* Sticky CTA Button */}
      <StickyCTAButton />
    </div>
  );
};

export default Index;
