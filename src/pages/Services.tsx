import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Regulatory Risk & Governance Advisory",
    description: "Navigate complex regulatory environments with strategic foresight. We help businesses understand their exposure, anticipate regulatory changes, and build governance frameworks that withstand scrutiny.",
    href: "/services/regulatory-risk",
  },
  {
    number: "02",
    title: "Strategic Tax & Entity Structuring Advisory",
    description: "Optimize your corporate structure for tax efficiency while maintaining full compliance. We advise on entity selection, restructuring, and cross-border considerations.",
    href: "/services/tax-structuring",
  },
  {
    number: "03",
    title: "Finance, Compliance & Control Architecture",
    description: "Design and implement robust financial control systems that support growth while ensuring compliance. From MIS design to control frameworks, we architect for scale.",
    href: "/services/finance-architecture",
  },
  {
    number: "04",
    title: "Regulatory & Financial Risk Diagnostic",
    description: "Comprehensive assessment of your regulatory and financial risk landscape. We identify gaps, quantify exposures, and prioritize remediation efforts.",
    href: "/services/risk-diagnostic",
  },
  {
    number: "05",
    title: "Forensic Readiness & Internal Control Advisory",
    description: "Prepare your organization for potential investigations or audits. We build forensic-grade documentation and control environments that protect your interests.",
    href: "/services/forensic-readiness",
  },
  {
    number: "06",
    title: "Growth, Capital & IPO Readiness Advisory",
    description: "Position your business for funding rounds or public markets. We advise on governance upgrades, financial reporting readiness, and regulatory compliance for growth.",
    href: "/services/ipo-readiness",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO 
        title="Services"
        description="Explore TaxSonic Global's comprehensive advisory services including regulatory risk, tax structuring, finance architecture, forensic readiness, and IPO readiness advisory."
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
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-display mb-8"
            >
              Strategic Advisory for<br />
              <span className="text-gold">Every Stage of Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body text-xl"
            >
              We provide focused advisory across regulatory, tax, and governance domains. 
              Each service is designed to deliver clarity and actionable insight for decision-makers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={service.href}
                  className="group block py-10 border-b border-border hover:bg-cream transition-colors -mx-6 px-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                    <span className="text-gold font-serif text-3xl">{service.number}</span>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl lg:text-3xl mb-4 group-hover:text-gold transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground lg:max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
