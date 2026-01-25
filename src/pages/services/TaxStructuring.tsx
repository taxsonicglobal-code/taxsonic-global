import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scale, CheckCircle } from "lucide-react";

const TaxStructuring = () => {
  return (
    <Layout>
      <SEO 
        title="Strategic Tax & Entity Structuring Advisory"
        description="Optimize your corporate structure for tax efficiency while maintaining full compliance. TaxSonic Global advises on entity selection, restructuring, and cross-border considerations."
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
                <Scale className="w-8 h-8 text-gold-dark" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display mb-6"
              >
                Strategic Tax &<br />
                <span className="text-gold">Entity Structuring</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body text-xl"
              >
                Optimize your corporate structure for tax efficiency while maintaining 
                full compliance. We advise on entity selection, restructuring, and 
                cross-border considerations.
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
                  "Entity selection and structure optimization",
                  "Tax-efficient restructuring advisory",
                  "Cross-border tax considerations",
                  "Transfer pricing strategy and documentation",
                  "Tax incentive identification and planning",
                  "M&A tax structuring advisory",
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
              Tax structuring is not about aggressive planning—it's about understanding 
              the full spectrum of options available and choosing structures that are 
              efficient, compliant, and defensible.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-6">
              We take a holistic view of entity structuring, considering not just immediate 
              tax implications but long-term business strategy, regulatory requirements, 
              and exit considerations.
            </p>
            <p className="text-primary-foreground/80 text-lg">
              Our advisory always includes consideration of how structures will appear 
              under scrutiny—because aggressive planning that doesn't survive an audit 
              isn't really efficient at all.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-subsection mb-6">Ready to Optimize Your Structure?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your tax structuring needs and opportunities.
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

export default TaxStructuring;
