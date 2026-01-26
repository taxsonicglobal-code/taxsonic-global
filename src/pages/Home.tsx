import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pt-28 pb-24 bg-white"
      >
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-serif text-5xl lg:text-6xl leading-tight mb-6">
              Regulatory Risk.<br />
              Tax Intelligence.<br />
              <span className="text-gold">Governance Confidence.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              TaxSonic Global is a premium regulatory risk, tax structuring,
              and governance advisory firm helping businesses reduce exposure,
              build defensible structures, and scale with long-term confidence.
            </p>

            <div className="flex gap-4">
              <Button size="lg" variant="gold" asChild>
                <Link to="/contact">Request Advisory</Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-10">
            <h3 className="font-serif text-xl mb-6">
              Advisory-Led. Independent. Risk-Focused.
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• Advisory-only, no execution or conflicts</li>
              <li>• Board, promoter, and CFO perspective</li>
              <li>• Designed for scrutiny and scale</li>
              <li>• Clear scope and professional boundaries</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="py-24 bg-neutral-50"
      >
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <h2 className="font-serif text-4xl mb-4">
              Advisory Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Focused on prevention, preparedness, and governance maturity —
              not routine compliance or execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Risk Advisory",
                desc:
                  "Identify and mitigate regulatory exposure before it escalates into scrutiny or enforcement.",
                link: "/services/regulatory-risk",
              },
              {
                title: "Tax Structuring Advisory",
                desc:
                  "Design tax structures aligned with commercial reality and long-term defensibility.",
                link: "/services/tax-structuring",
              },
              {
                title: "Finance & Control Architecture",
                desc:
                  "Build scalable finance, MIS, and internal control frameworks.",
                link: "/services/finance-architecture",
              },
              {
                title: "Risk Diagnostic",
                desc:
                  "Independent, forensic-style assessment of regulatory and governance risk.",
                link: "/services/risk-diagnostic",
              },
              {
                title: "Forensic Readiness",
                desc:
                  "Prepare documentation and decision trails for regulatory scrutiny.",
                link: "/services/forensic-readiness",
              },
              {
                title: "IPO Readiness",
                desc:
                  "Governance and risk readiness for listing — advisory only.",
                link: "/services/ipo-readiness",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group border border-neutral-200 bg-white p-8
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:border-gold"
              >
                <h3 className="font-serif text-xl mb-3 transition-colors group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= WHY CHOOSE ================= */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-4xl mb-4">
              Why Clients Choose <span className="text-gold">TaxSonic Global</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We advise where decisions carry regulatory, financial, and personal consequences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Advisory-only. No conflicts.",
              "Risk-first, not checklist-driven.",
              "Board and promoter perspective.",
              "Forensic and regulatory depth.",
              "Built for scrutiny and scale.",
              "Clear scope and boundaries.",
            ].map((point) => (
              <div
                key={point}
                className="border border-neutral-200 p-8 bg-neutral-50"
              >
                <p className="font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="py-24 bg-neutral-50"
      >
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl mb-6">
            Ready to Reduce Risk and Build Confidence?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Engage us early — before regulatory exposure becomes a liability.
          </p>

          <Button size="lg" variant="gold" asChild>
            <Link to="/contact">Request Advisory Discussion</Link>
          </Button>
        </div>
      </motion.section>
    </>
  );
}
