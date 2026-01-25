import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Regulatory Risk & Governance Advisory",
    description: "Navigate regulatory complexity with strategic insight and proactive risk management.",
    href: "/services/regulatory-risk",
  },
  {
    number: "02",
    title: "Strategic Tax & Entity Structuring",
    description: "Optimize your tax position and entity structure for efficiency and compliance.",
    href: "/services/tax-structuring",
  },
  {
    number: "03",
    title: "Finance, Compliance & Control Architecture",
    description: "Build robust financial systems and control frameworks that scale with your business.",
    href: "/services/finance-architecture",
  },
  {
    number: "04",
    title: "Forensic Readiness & Internal Control Advisory",
    description: "Prepare for scrutiny with forensic-grade internal controls and documentation.",
    href: "/services/forensic-readiness",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-charcoal text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-gold text-sm tracking-wide uppercase font-medium mb-4">Our Services</p>
            <h2 className="heading-section text-primary-foreground">
              Strategic Advisory for<br />
              <span className="text-gold">Complex Challenges</span>
            </h2>
          </div>
          <Button variant="gold-outline" className="mt-6 lg:mt-0" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block py-8 border-t border-primary-foreground/20 hover:bg-primary-foreground/5 transition-colors -mx-6 px-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  <span className="text-gold font-serif text-2xl">{service.number}</span>
                  <h3 className="font-serif text-2xl lg:text-3xl flex-1 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/60 lg:w-80 text-sm">
                    {service.description}
                  </p>
                  <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
