import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, CheckCircle } from "lucide-react";

const RegulatoryRisk = () => {
  return (
    <>
      <SEO
        title="Regulatory Risk & Governance Advisory"
        description="Navigate complex regulatory environments with strategic foresight. TaxSonic Global helps businesses understand exposure, anticipate changes, and build resilient governance frameworks."
      />

      {/* Breadcrumb */}
      <section className="pt-8 pb-4">
        <div className="container-wide">
          <Link
            to="/services"
            className="inline-flex items-center text-muted-foreground hover:text-foreground"
          >
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
                <Shield className="w-8 h-8 text-gold" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Regulatory Risk & <br />
                <span className="text-gold">Governance Advisory</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Navigate complex regulatory environments with strategic foresight.
                We help businesses understand exposure, anticipate regulatory
                change, and build governance frameworks that withstand scrutiny.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-muted p-8 lg:p-12 rounded-sm"
            >
              <h3 className="font-serif text-xl font-medium mb-6">
                Key Focus Areas
              </h3>

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
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-foreground text-background py-20">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-serif mb-8">
            Our Advisory Approach
          </h2>

          <p className="text-background/80 text-lg mb-6">
            Regulatory risk is not just about compliance — it is about
            understanding how regulation interacts with business strategy and
            decision-making.
          </p>

          <p className="text-background/80 text-lg mb-6">
            We apply a forensic mindset to regulatory risk, examining not only
            present obligations but how current decisions will appear under
            future scrutiny.
          </p>

          <p className="text-background/80 text-lg">
            Our governance advisory focuses on creating frameworks that support
            leadership, protect promoters and directors, and scale with growth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-wide text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-6">
            Strengthen Your Regulatory Position
          </h2>

          <p className="text-muted-foreground mb-8">
            Discuss your regulatory risk exposure and governance needs with our
            advisory team.
          </p>

          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Request Advisory Discussion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default RegulatoryRisk;
