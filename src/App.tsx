import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReturnPolicy from "./pages/ReturnPolicy";
import Podcasts from "./pages/Podcasts";
import ScreeningAssessment from "./pages/ScreeningAssessment";
import NotFound from "./pages/NotFound";
import ApiDemo from "./pages/ApiDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/screening-assessment" element={<ScreeningAssessment />} />
          <Route path="/api-demo" element={<ApiDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
