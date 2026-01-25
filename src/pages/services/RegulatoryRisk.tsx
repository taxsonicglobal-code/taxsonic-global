import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, CheckCircle } from "lucide-react";

const RegulatoryRisk = () => {
  return (
    <Layout>
      <SEO 
        title="Regulatory Risk & Governance Advisory"
        description="Navigate complex regulatory environments with strategic foresight. TaxSonic Global helps businesses understand exposure, anticipate changes, and build resilient governance frameworks."
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
                <Shield className="w-8 h-8 text-gold-dark" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display mb-6"
              >
                Regulatory Risk &<br />
                <span className="text-gold">Governance Advisory</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body text-xl"
              >
                Navigate complex regulatory environments with strategic foresight. 
                We help businesses understand their exposure, anticipate regulatory changes, 
                and build governance frameworks that withstand scrutiny.
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
                  "Regulatory landscape mapping and risk assessment",
                  "Governance framework design and implementation",
                  "Board and committee structure advisory",
                  "Regulatory change impact analysis",
                  "Compliance program architecture",
                  "Regulatory investigation preparedness",
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
              Regulatory risk is not just about compliance—it's about understanding how 
              regulatory frameworks interact with your business strategy and positioning 
              yourself for changes before they arrive.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-6">
              We bring a forensic mindset to regulatory risk assessment, examining not 
              just what's required today but how requirements are likely to evolve and 
              how current practices will appear under future scrutiny.
            </p>
            <p className="text-primary-foreground/80 text-lg">
              Our governance advisory goes beyond box-checking to create frameworks 
              that actually work—structures that support decision-making, protect the 
              organization, and scale with growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-subsection mb-6">Ready to Strengthen Your Governance?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your regulatory risk profile and governance needs.
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

export default RegulatoryRisk;
