import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const exclusions = [
  {
    title: "Compliance Filings",
    description: "We do not file tax returns, GST returns, annual returns, or any statutory compliance documents. We advise on strategy; execution is for your compliance team.",
  },
  {
    title: "IPO Execution",
    description: "While we advise on IPO readiness and governance preparation, we do not execute IPO transactions, draft prospectuses, or manage the listing process.",
  },
  {
    title: "SEBI Filings & Registrations",
    description: "We do not prepare or file SEBI registrations, offer documents, or ongoing compliance filings with securities regulators.",
  },
  {
    title: "Merchant Banking Services",
    description: "We are not merchant bankers. We do not underwrite issues, manage public offerings, or provide investment banking services.",
  },
  {
    title: "Valuation Reports",
    description: "We do not issue valuation reports for regulatory, transaction, or accounting purposes. Valuation is a specialized practice we deliberately stay outside of.",
  },
  {
    title: "Statutory Audit",
    description: "We do not conduct statutory audits, internal audits for attestation purposes, or any form of assurance engagement requiring certification.",
  },
  {
    title: "Legal Opinions",
    description: "We are not lawyers and do not provide legal opinions, draft legal agreements, or represent clients in legal proceedings.",
  },
  {
    title: "Guarantees or Assurances",
    description: "We do not guarantee outcomes, provide comfort letters, or offer any form of assurance that could be construed as a warranty of results.",
  },
];

const Exclusions = () => {
  return (
    <Layout>
      <SEO 
        title="What We Do Not Do"
        description="TaxSonic Global maintains clear boundaries: no compliance filings, no IPO execution, no SEBI filings, no merchant banking, no valuations, no statutory audits, no legal opinions."
      />
      
      {/* Hero */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-caption mb-6"
            >
              Our Boundaries
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-display mb-8"
            >
              What We <span className="text-gold">Do Not Do</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body text-xl"
            >
              Clarity about what we don't do is as important as clarity about what we do. 
              These boundaries ensure our independence and focus on strategic advisory.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Exclusions Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {exclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 border border-border rounded-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Why These Boundaries?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our independence is our greatest asset. By not executing the recommendations we make, 
            we eliminate conflicts of interest and ensure our advice is always in your best interest. 
            We can recommend the right solution even if it means less work for us—because it usually 
            means better outcomes for you.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Exclusions;
