import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const RiskDiagnostic = () => {
  return (
    <>
      <SEO
        title="Regulatory & Financial Risk Diagnostic | TaxSonic Global"
        description="One-time diagnostic to identify hidden regulatory, financial, and governance exposure."
      />

      <section className="section">
        <div className="container-wide">
          <Link to="/services" className="inline-flex items-center text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
        </div>
      </section>

      <section className="section-lg">
        <div className="container-wide">
          <h1 className="heading-display mb-6">
            Regulatory & Financial <span className="text-gold">Risk Diagnostic</span>
          </h1>
          <p className="text-body mb-10 max-w-3xl">
            A structured diagnostic engagement to uncover risks that routine
            compliance reviews often miss.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Regulatory compliance gaps",
              "Financial process weaknesses",
              "Documentation deficiencies",
              "Governance maturity assessment",
            ].map(i => (
              <div key={i} className="card flex gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-1" />
                <span>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RiskDiagnostic;
