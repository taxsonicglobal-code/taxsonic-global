import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const IPOReadiness = () => {
  return (
    <Layout>
      <SEO 
        title="Growth, Capital & IPO Readiness Advisory"
        description="Position your business for funding rounds or public markets. TaxSonic Global advises on governance upgrades, financial reporting readiness, and regulatory compliance for growth."
      />
      
      {/* Breadcrumb */}
      <section className="pt-8 pb-4">
        <div className="container-wide">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-16 h-16 bg-gold/20 rounded-sm flex items-center justify-center mb-6"
              >
                <TrendingUp className="w-8 h-8 text-gold-dark" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display mb-6"
              >
                Growth, Capital &<br />
                <span className="text-gold">IPO Readiness</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body text-xl"
              >
                Position your business for funding rounds or public markets. 
                We advise on governance upgrades, financial reporting readiness, 
                and regulatory compliance for growth.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-cream p-8 lg:p-12 rounded-sm"
            >
              <h3 className="font-serif text-xl font-medium mb-6">Key Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  "IPO readiness assessment",
                  "Governance structure upgrades",
                  "Financial reporting transformation",
                  "Regulatory compliance roadmap",
                  "Due diligence preparation",
                  "Investor communication advisory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="container-narrow">
          <h2 className="heading-section text-primary-foreground mb-8">Our Approach</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-primary-foreground/80 text-lg mb-6">
              Raising capital or going public requires a level of governance and 
              compliance rigor that many growing businesses haven't yet developed. 
              We help you close these gaps before they become deal-breakers.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Our advisory spans the full spectrum of readiness—from board composition 
              and governance policies to financial reporting systems and regulatory 
              compliance documentation.
            </p>
            <p className="text-primary-foreground/80 text-lg">
              We help you present the strongest possible picture to investors and 
              regulators, while ensuring that what you present accurately reflects 
              reality and can withstand due diligence scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-cream">
        <div className="container-narrow">
          <div className="border-l-4 border-gold pl-6">
            <h3 className="font-serif text-xl font-medium mb-2">Important Note</h3>
            <p className="text-muted-foreground">
              We advise on readiness and preparation—we do not execute IPO transactions, 
              serve as merchant bankers, or file regulatory documents. See our 
              <Link to="/exclusions" className="text-gold hover:underline ml-1">
                exclusions page
              </Link> for details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-10">
  <a
    href="/contact"
    className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition"
  >
    Schedule a Discussion
  </a>

  <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground/80 max-w-2xl">
    IPO Readiness services are advisory-only. IPO execution, listing,
    SEBI filings (including DRHP/RHP), funding guarantees, and litigation
    or investigation support are not included unless separately agreed.
  </p>
</div>
      </section>
    </Layout>
  );
};

export default IPOReadiness;
