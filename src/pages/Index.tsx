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
import SectionBridge from "@/components/SectionBridge";

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
    <div className="min-h-screen bg-slate-950">
      {/* SECTION 1: Sticky Top Bar */}
      <StickyTopBar />
      
      <Header />
      
      {/* SECTION 2: Hero Section - NO GAPS, flows directly */}
      <HeroSection />
      <LiveSocialProof />
      
      {/* AdSense Banner - Only render if ad loads, otherwise nothing */}
      <AdSenseBanner format="horizontal" className="w-full" />
      
      {/* BRIDGE: Hero to Authority */}
      <SectionBridge 
        text="Trusted by leading experts and thousands of families worldwide" 
        variant="social-proof"
        icon="check"
      />
      
      {/* SECTION 3: Authority Proof - Flows directly from Hero */}
      <AuthorityProofSection />
      
      {/* BRIDGE: Authority to Problem */}
      <SectionBridge 
        text="We understand the daily struggles you face. It's time to stop feeling overwhelmed" 
        variant="default"
        icon="arrow"
      />
      
      {/* SECTION 4: Problem Agitation - Background connects to previous */}
      <ProblemSection />
      
      {/* Author bio for credibility stacking - Background connects */}
      <AuthorSection />
      
      {/* BRIDGE: Author to Solution */}
      <SectionBridge 
        text="Ready to discover the exact strategies that make a difference? Unlock the complete roadmap now" 
        variant="benefit"
        icon="sparkles"
      />
      
      {/* SECTION 5: Solution (Value Stack) - Load immediately, NO GAPS, connects directly to bridge */}
      <Suspense fallback={null}>
        <ValueStackSection />
      </Suspense>
      
      {/* AdSense Inline - Only if ad loads, moved after content to prevent gaps */}
      <AdSenseInline className="w-full" />
      
      {/* SECTION 6: Chapter Breakdown - Load immediately */}
      <Suspense fallback={null}>
        <ChapterBreakdownSection />
      </Suspense>
      
      {/* BRIDGE: Chapters to Testimonials */}
      <SectionBridge 
        text="Don't just imagine the change – see it in action. Thousands of parents have already transformed their homes" 
        variant="social-proof"
        icon="trending"
      />
      
      {/* AdSense Inline - Only if ad loads */}
      <AdSenseInline className="w-full" />
      
      {/* SECTION 8: Proof & Testimonials - Load immediately */}
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>
      
      {/* SECTION 10: Who Is This For - Load immediately */}
      <Suspense fallback={null}>
        <WhoIsThisForSection />
      </Suspense>
      
      {/* BRIDGE: Who Is This For to FAQ */}
      <SectionBridge 
        text="Still have questions? We've got answers. Get clarity on common concerns before you make your decision" 
        variant="default"
        icon="check"
      />
      
      {/* SECTION 11: FAQ - Load immediately */}
      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>
      
      {/* AdSense Inline - Only if ad loads */}
      <AdSenseInline className="w-full" />
      
      {/* BRIDGE: FAQ to Urgency */}
      <SectionBridge 
        text="The choice is yours: continue struggling or embrace a calmer future. This opportunity won't last forever" 
        variant="urgent"
        icon="arrow"
      />
      
      {/* SECTION 12: Final Urgency - Load immediately */}
      <Suspense fallback={null}>
        <FinalUrgencySection />
      </Suspense>
      
      {/* BRIDGE: Urgency to Guarantee */}
      <SectionBridge 
        text="Your investment is completely protected. Try it today, absolutely risk-free" 
        variant="benefit"
        icon="check"
      />
      
      {/* SECTION 13: Guarantee Visual - Load immediately */}
      <Suspense fallback={null}>
        <GuaranteeVisualSection />
      </Suspense>
      
      {/* BRIDGE: Guarantee to Final CTA */}
      <SectionBridge 
        text="The only risk is missing out on a calmer, happier home. Take the first step towards confident parenting now" 
        variant="benefit"
        icon="sparkles"
      />
      
      {/* SECTION 14: Final CTA - Load immediately */}
      <Suspense fallback={null}>
        <FinalCTASection />
      </Suspense>
      
      {/* Footer - Load immediately, connects to previous section */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* Popups & Notifications - No layout impact */}
      <Suspense fallback={null}>
        <EmailCapturePopup />
      </Suspense>
      
      <ExitIntentPopup />
      <LivePurchaseNotifications />
      
      {/* Sticky CTA Button - Fixed position, no layout impact */}
      <StickyCTAButton />
    </div>
  );
};

export default Index;
