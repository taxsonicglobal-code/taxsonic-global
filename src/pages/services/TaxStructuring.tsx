import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const TaxStructuring = () => {
  return (
    <>
      <SEO
        title="Strategic Tax & Entity Structuring Advisory | TaxSonic Global"
        description="Risk-aligned domestic and cross-border tax structuring advisory focused on sustainability, not aggressive tax saving."
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
              Strategic Tax & <br />
              <span className="text-gold">Entity Structuring</span>
            </h1>
            <p className="text-body mb-8">
              We advise on tax and entity structures that are defensible,
              regulator-aligned, and suitable for long-term growth — not
              aggressive optimisation.
            </p>
            <Button variant="gold" asChild>
              <Link to="/contact">
                Discuss Structuring Strategy <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="card">
            <h3 className="heading-subsection mb-6">Advisory Scope</h3>
            <ul className="space-y-4">
              {[
                "Domestic and cross-border entity structuring",
                "India entry structuring for foreign businesses",
                "Holding and group structure advisory",
                "Tax risk assessment and restructuring",
                "Alignment with regulatory intent",
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

      <section className="section surface-dark">
        <div className="container-narrow">
          <h2 className="heading-section mb-6">Our Philosophy</h2>
          <p className="text-body text-background/80">
            Tax structures must withstand scrutiny over time. Our advisory
            focuses on sustainability, documentation integrity, and governance
            expectations — not short-term tax savings.
          </p>
        </div>
      </section>
    </>
  );
};

export default TaxStructuring;
