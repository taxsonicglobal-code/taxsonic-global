import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

const RiskDiagnostic = () => {
  return (
    <Layout>
      <SEO 
        title="Regulatory & Financial Risk Diagnostic"
        description="Comprehensive assessment of your regulatory and financial risk landscape. TaxSonic Global identifies gaps, quantifies exposures, and prioritizes remediation efforts."
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
                <AlertTriangle className="w-8 h-8 text-gold-dark" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display mb-6"
              >
                Regulatory & Financial<br />
                <span className="text-gold">Risk Diagnostic</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body text-xl"
              >
                Comprehensive assessment of your regulatory and financial risk landscape. 
                We identify gaps, quantify exposures, and prioritize remediation efforts.
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
                  "Comprehensive risk landscape mapping",
                  "Compliance gap identification",
                  "Exposure quantification and prioritization",
                  "Remediation roadmap development",
                  "Risk monitoring framework design",
                  "Stakeholder communication advisory",
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
              Understanding your risk exposure is the first step to managing it. 
              Our diagnostic approach provides a clear, prioritized view of where 
              your vulnerabilities lie and what needs attention first.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-6">
              We go beyond checklist compliance to examine how risks interact and 
              compound. A single gap might be manageable; multiple interconnected 
              gaps create exponential exposure.
            </p>
            <p className="text-primary-foreground/80 text-lg">
              Our deliverables are actionable. We don't just identify problems—we 
              provide prioritized remediation roadmaps that balance urgency, impact, 
              and resource availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-subsection mb-6">Ready for a Risk Assessment?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your risk landscape and diagnostic needs.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Request Advisory Discussion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default RiskDiagnostic;
