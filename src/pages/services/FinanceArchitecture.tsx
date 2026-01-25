import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Settings, CheckCircle } from "lucide-react";

const FinanceArchitecture = () => {
  return (
    <Layout>
      <SEO 
        title="Finance, Compliance & Control Architecture"
        description="Design and implement robust financial control systems that support growth while ensuring compliance. From MIS design to control frameworks, we architect for scale."
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
                <Settings className="w-8 h-8 text-gold-dark" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display mb-6"
              >
                Finance, Compliance &<br />
                <span className="text-gold">Control Architecture</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body text-xl"
              >
                Design and implement robust financial control systems that support 
                growth while ensuring compliance. From MIS design to control frameworks, 
                we architect for scale.
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
                  "Financial control framework design",
                  "MIS and reporting architecture",
                  "Compliance program development",
                  "Policy and procedure documentation",
                  "Internal control optimization",
                  "Finance function transformation",
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
              Strong financial architecture is the foundation of sustainable growth. 
              We help businesses move from ad-hoc processes to structured systems 
              that provide visibility, control, and confidence.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Our approach balances rigor with practicality. We design systems that 
              work for your current size while building in the flexibility to scale 
              without wholesale replacement.
            </p>
            <p className="text-primary-foreground/80 text-lg">
              Compliance is built into the architecture, not bolted on afterward. 
              This means fewer surprises during audits and investigations, and more 
              time focused on growing the business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-subsection mb-6">Ready to Build Better Systems?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your financial control and compliance architecture needs.
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

export default FinanceArchitecture;
