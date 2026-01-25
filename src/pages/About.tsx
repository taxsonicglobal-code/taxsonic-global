import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "9–10 Years of Experience",
    description: "Deep expertise across regulatory, tax, and forensic domains.",
  },
  {
    icon: Target,
    title: "Advisory-Only Focus",
    description: "We advise, we don't execute. Our independence is our strength.",
  },
  {
    icon: Users,
    title: "Founder-Level Access",
    description: "Direct engagement with principals, not delegated to juniors.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about TaxSonic Global's advisory-only positioning, 9-10 years of experience in forensic and regulatory expertise, and founder-level advisory approach."
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
              About TaxSonic Global
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-display mb-8"
            >
              Strategic Advisory,<br />
              <span className="text-gold">Not Compliance Execution</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body text-xl"
            >
              We are a boutique advisory practice focused exclusively on regulatory risk, 
              tax strategy, and governance architecture. Our work is with founders, promoters, 
              and boards—those who make decisions and need clarity to do so confidently.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-gold-dark" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="container-narrow">
          <h2 className="heading-section text-center mb-12">
            Our <span className="text-gold">Philosophy</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-2">Independence Above All</h3>
                <p className="text-primary-foreground/70">
                  We do not execute the recommendations we make. This independence ensures 
                  our advice is never colored by execution interests or fee motivations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-2">Forensic Rigor</h3>
                <p className="text-primary-foreground/70">
                  Our background in forensic accounting and regulatory investigation informs 
                  every piece of advice. We think about how things will look under scrutiny.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-2">Principal-to-Principal Engagement</h3>
                <p className="text-primary-foreground/70">
                  You'll work directly with senior advisors. We don't delegate to juniors 
                  and then present at the end. Your access is to the same people who do the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-caption mb-6">Leadership</p>
          <h2 className="heading-section mb-6">
            Board-Level <span className="text-gold">Advisory Approach</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Our advisory practice is built around the principle that founders and promoters 
            deserve the same quality of strategic counsel that large corporations take for granted. 
            We bring institutional rigor to entrepreneurial agility.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
