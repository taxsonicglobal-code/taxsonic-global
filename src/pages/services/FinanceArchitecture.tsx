import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const FinanceArchitecture = () => {
  return (
    <>
      <SEO
        title="Finance, Compliance & Control Architecture | TaxSonic Global"
        description="Design scalable finance, compliance, and internal control systems to support growth and scrutiny."
      />

      <section className="section">
        <div className="container-wide">
          <Link to="/services" className="inline-flex items-center text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
        </div>
      </section>

      <section className="section-lg">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="heading-display mb-6">
              Finance, Compliance & <br />
              <span className="text-gold">Control Architecture</span>
            </h1>
            <p className="text-body mb-8">
              As businesses scale, informal systems become high-risk. We design
              finance and control frameworks that support growth and governance.
            </p>
            <Button variant="gold" asChild>
              <Link to="/contact">
                Discuss Control Architecture <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="card">
            <h3 className="heading-subsection mb-6">What We Design</h3>
            <ul className="space-y-4">
              {[
                "Compliance workflow architecture",
                "MIS and reporting frameworks",
                "Internal control documentation",
                "Responsibility and accountability mapping",
                "Process discipline for scale",
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

export default FinanceArchitecture;
