import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IPOReadiness = () => {
  return (
    <>
      <SEO
        title="IPO Readiness Advisory | TaxSonic Global"
        description="Advisory-only IPO and capital market readiness for businesses preparing for institutional scrutiny."
      />

      <section className="section">
        <div className="container-wide">
          <Link to="/services" className="inline-flex items-center text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
        </div>
      </section>

      <section className="section-lg">
        <div className="container-wide max-w-4xl">
          <h1 className="heading-display mb-6">
            Growth, Capital & <span className="text-gold">IPO Readiness</span>
          </h1>
          <p className="text-body mb-8">
            We prepare businesses for funding, institutional scrutiny, and
            capital market expectations through advisory-only readiness
            services.
          </p>

          <p className="text-body text-muted-foreground mb-10">
            <strong>Not included:</strong> IPO execution, listing, SEBI filings
            (DRHP/RHP), funding guarantees, or litigation support unless
            separately agreed.
          </p>

          <Button variant="gold" asChild>
            <Link to="/contact">
              Discuss Readiness <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default IPOReadiness;
