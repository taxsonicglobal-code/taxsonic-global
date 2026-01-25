import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye, CheckCircle } from "lucide-react";

const ForensicReadiness = () => {
  return (
    <Layout>
      <SEO 
        title="Forensic Readiness & Internal Control Advisory"
        description="Prepare your organization for potential investigations or audits. TaxSonic Global builds forensic-grade documentation and control environments that protect your interests."
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
                <Eye className="w-8 h-8 text-gold-dark" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display mb-6"
              >
                Forensic Readiness &<br />
                <span className="text-gold">Internal Control Advisory</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body text-xl"
              >
                Prepare your organization for potential investigations or audits. 
                We build forensic-grade documentation and control environments 
                that protect your interests.
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
                  "Forensic readiness assessment",
                  "Internal control design and testing",
                  "Documentation standards and protocols",
                  "Evidence preservation frameworks",
                  "Investigation response planning",
                  "Whistleblower program advisory",
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
              The best time to prepare for an investigation is before one begins. 
              Our forensic readiness advisory helps you build the documentation, 
              controls, and response capabilities that protect your organization.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-6">
              We think like investigators because we understand how investigations work. 
              This perspective informs how we design controls and documentation—not just 
              for compliance, but for defensibility.
            </p>
            <p className="text-primary-foreground/80 text-lg">
              Internal controls that exist on paper but aren't followed are worse than 
              no controls at all. We focus on building controls that are practical, 
              monitored, and consistently applied.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-subsection mb-6">Ready to Build Forensic Readiness?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your internal control and forensic preparedness needs.
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

export default ForensicReadiness;
