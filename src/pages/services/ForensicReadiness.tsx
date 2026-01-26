import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ForensicReadiness = () => {
  return (
    <>
      <SEO
        title="Forensic Readiness & Internal Control Advisory | TaxSonic Global"
        description="Advisory services to strengthen fraud prevention, internal discipline, and forensic preparedness."
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
            Forensic Readiness & <span className="text-gold">Internal Controls</span>
          </h1>
          <p className="text-body mb-10 max-w-3xl">
            We help organisations reduce fraud exposure by strengthening
            controls, documentation, and forensic preparedness.
          </p>

          <div className="card max-w-3xl">
            <ul className="space-y-4">
              {[
                "Fraud risk assessment",
                "Internal control evaluation",
                "Process vulnerability identification",
                "Forensic readiness framework design",
              ].map(i => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForensicReadiness;
