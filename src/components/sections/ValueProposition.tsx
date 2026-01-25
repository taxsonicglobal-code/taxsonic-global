import { motion } from "framer-motion";
import { Shield, Scale, TrendingUp, Eye } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Regulatory Risk Expertise",
    description: "Navigate complex regulatory landscapes with confidence, backed by deep forensic and compliance knowledge.",
  },
  {
    icon: Scale,
    title: "Tax Intelligence",
    description: "Strategic tax structuring and entity planning that aligns with your business objectives and regulatory requirements.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Ready Governance",
    description: "Build robust governance frameworks that support your growth trajectory and investor expectations.",
  },
  {
    icon: Eye,
    title: "Board-Level Perspective",
    description: "Founder and promoter-focused advisory that speaks the language of boardrooms and decision-makers.",
  },
];

export function ValueProposition() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-caption mb-4">Why TaxSonic Global</p>
          <h2 className="heading-section mb-6">
            Advisory That Speaks to <span className="text-gold">Decision-Makers</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            With nearly a decade of experience across regulatory, tax, and governance advisory, 
            we bring a forensic-grade approach to every engagement.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-cream rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gold/20 rounded-sm flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-gold-dark" />
                </div>
              </div>
              <div>
                <h3 className="heading-subsection text-xl mb-3">{value.title}</h3>
                <p className="text-body text-base">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
