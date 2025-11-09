import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import StickyTopBar from "@/components/StickyTopBar";
import HeroSection from "@/components/HeroSection";
import LiveSocialProof from "@/components/LiveSocialProof";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import AuthorityProofSection from "@/components/AuthorityProofSection";
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
      
      {/* AdSense Banner - Renders directly, hides if no ad (no LazySection wrapper to prevent gaps) */}
      <AdSenseBanner format="horizontal" className="w-full" />
      
      {/* SECTION 3: Authority Proof */}
      <AuthorityProofSection />
      
      {/* SECTION 4: Problem Agitation */}
      <ProblemSection />
      
      {/* Author bio for credibility stacking */}
      <AuthorSection />
      
      {/* AdSense Inline - Renders directly, hides if no ad */}
      <AdSenseInline className="w-full" />
      
      {/* SECTION 5: Solution (Value Stack) */}
      <Suspense fallback={null}>
        <LazySection>
          <ValueStackSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 6: Chapter Breakdown */}
      <Suspense fallback={null}>
        <LazySection>
          <ChapterBreakdownSection />
        </LazySection>
      </Suspense>
      
      {/* AdSense Inline - Renders directly, hides if no ad */}
      <AdSenseInline className="w-full" />
      
      {/* SECTION 8: Proof & Testimonials */}
      <Suspense fallback={null}>
        <LazySection>
          <TestimonialsSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 10: Who Is This For */}
      <Suspense fallback={null}>
        <LazySection>
          <WhoIsThisForSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 11: FAQ */}
      <Suspense fallback={null}>
        <LazySection>
          <FAQSection />
        </LazySection>
      </Suspense>
      
      {/* AdSense Inline - Renders directly, hides if no ad */}
      <AdSenseInline className="w-full" />
      
      {/* SECTION 12: Final Urgency */}
      <Suspense fallback={null}>
        <LazySection>
          <FinalUrgencySection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 13: Guarantee Visual */}
      <Suspense fallback={null}>
        <LazySection>
          <GuaranteeVisualSection />
        </LazySection>
      </Suspense>
      
      {/* SECTION 14: Final CTA */}
      <Suspense fallback={null}>
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
