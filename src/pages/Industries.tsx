import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Users, Building2, Globe, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: Rocket,
    title: "Growth-Stage Startups",
    description: "Navigate the transition from startup chaos to structured growth. We help you build governance and compliance frameworks that satisfy investors without slowing you down.",
    challenges: [
      "Investor due diligence preparation",
      "Governance structure design",
      "Regulatory compliance roadmap",
      "Entity structure optimization",
    ],
  },
  {
    icon: Users,
    title: "Promoter & Family Businesses",
    description: "Balance family dynamics with professional governance. We understand the unique challenges of family enterprises and help you institutionalize while preserving what matters.",
    challenges: [
      "Succession planning considerations",
      "Related party transaction frameworks",
      "Governance formalization",
      "Wealth structure optimization",
    ],
  },
  {
    icon: Building2,
    title: "SMEs Preparing for Scale",
    description: "Transform from entrepreneurial operations to scalable enterprise. We help you identify and address the gaps that could become problems at your next stage of growth.",
    challenges: [
      "Systems and control upgrades",
      "Financial reporting enhancement",
      "Regulatory compliance gaps",
      "Growth-ready governance",
    ],
  },
  {
    icon: Globe,
    title: "Overseas Companies Entering India",
    description: "Navigate India's complex regulatory landscape with confidence. We help international businesses understand and comply with local requirements while optimizing their structure.",
    challenges: [
      "Entity selection and setup advisory",
      "Transfer pricing considerations",
      "Regulatory compliance mapping",
      "Local governance requirements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Funding / IPO-Ready Businesses",
    description: "Position your business for institutional capital or public markets. We help you achieve the governance and compliance standards that sophisticated investors and regulators expect.",
    challenges: [
      "IPO readiness assessment",
      "Governance upgrades",
      "Financial reporting standards",
      "Regulatory compliance audit",
    ],
  },
];

const Industries = () => {
  return (
    <Layout>
      <SEO 
        title="Industries"
        description="TaxSonic Global serves growth-stage startups, family businesses, SMEs, overseas companies entering India, and funding/IPO-ready businesses with specialized advisory."
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
              Industries We Serve
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-display mb-8"
            >
              Advisory Tailored to<br />
              <span className="text-gold">Your Business Stage</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body text-xl"
            >
              We work with businesses at inflection points—those moments when getting 
              regulatory, tax, and governance decisions right matters most.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                <div>
                  <div className="w-14 h-14 bg-gold/20 rounded-sm flex items-center justify-center mb-6">
                    <industry.icon className="w-7 h-7 text-gold-dark" />
                  </div>
                  <h2 className="heading-subsection mb-4">{industry.title}</h2>
                  <p className="text-body">{industry.description}</p>
                </div>
                <div className="bg-cream p-8 rounded-sm">
                  <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-4">
                    Key Advisory Areas
                  </h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Our advisory approach is adaptable. If you're facing regulatory, tax, or governance 
            challenges, we'd be happy to discuss how we can help.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Let's Discuss Your Needs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
