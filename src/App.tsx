import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

// Service detail pages
import RegulatoryRisk from "./pages/services/RegulatoryRisk";
import TaxStructuring from "./pages/services/TaxStructuring";
import FinanceArchitecture from "./pages/services/FinanceArchitecture";
import RiskDiagnostic from "./pages/services/RiskDiagnostic";
import ForensicReadiness from "./pages/services/ForensicReadiness";
import IPOReadiness from "./pages/services/IPOReadiness";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service detail pages */}
          <Route path="/services/regulatory-risk" element={<RegulatoryRisk />} />
          <Route path="/services/tax-structuring" element={<TaxStructuring />} />
          <Route path="/services/finance-architecture" element={<FinanceArchitecture />} />
          <Route path="/services/risk-diagnostic" element={<RiskDiagnostic />} />
          <Route path="/services/forensic-readiness" element={<ForensicReadiness />}/>
          <Route path="/services/ipo-readiness" element={<IPOReadiness />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
