import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Exclusions from "./pages/Exclusions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Detail Pages
import RegulatoryRisk from "./pages/services/RegulatoryRisk";
import TaxStructuring from "./pages/services/TaxStructuring";
import FinanceArchitecture from "./pages/services/FinanceArchitecture";
import RiskDiagnostic from "./pages/services/RiskDiagnostic";
import ForensicReadiness from "./pages/services/ForensicReadiness";
import IPOReadiness from "./pages/services/IPOReadiness";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/regulatory-risk" element={<RegulatoryRisk />} />
            <Route path="/services/tax-structuring" element={<TaxStructuring />} />
            <Route path="/services/finance-architecture" element={<FinanceArchitecture />} />
            <Route path="/services/risk-diagnostic" element={<RiskDiagnostic />} />
            <Route path="/services/forensic-readiness" element={<ForensicReadiness />} />
            <Route path="/services/ipo-readiness" element={<IPOReadiness />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/exclusions" element={<Exclusions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
