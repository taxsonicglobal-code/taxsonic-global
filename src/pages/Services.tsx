import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="container-wide max-w-4xl">
          <h1 className="font-serif text-5xl mb-6">
            Advisory Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            TaxSonic Global provides advisory-only services focused on regulatory
            risk prevention, governance maturity, and defensible structuring.
            We do not execute transactions or sell compliance.
          </p>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 bg-neutral-50">
        <div className="container-wide space-y-16">

          {/* Service Item */}
          {[
            {
              title: "Regulatory Risk Advisory",
              desc:
                "Strategic assessment and mitigation of regulatory exposure across tax, corporate, FEMA, and governance frameworks.",
              when:
                "When promoters, boards, or management face increasing regulatory scrutiny or complex compliance environments.",
              link: "/services/regulatory-risk",
            },
            {
              title: "Tax Structuring Advisory",
              desc:
                "Design of tax structures aligned with commercial reality, substance, and long-term defensibility.",
              when:
                "When businesses are restructuring, expanding cross-border, or re-evaluating legacy structures.",
              link: "/services/tax-structuring",
            },
            {
              title: "Finance & Control Architecture",
              desc:
                "Design of finance functions, MIS, internal controls, and governance systems built to scale.",
              when:
                "When growing enterprises need institutional-grade finance and control frameworks.",
              link: "/services/finance-architecture",
            },
            {
              title: "Risk Diagnostic",
              desc:
                "Independent, forensic-style diagnosis of regulatory, tax, and governance risk.",
              when:
                "When leadership wants a clear, unbiased view of exposure before regulators ask questions.",
              link: "/services/risk-diagnostic",
            },
            {
              title: "Forensic Readiness",
              desc:
                "Preparation of documentation, decision trails, and governance processes for scrutiny.",
              when:
                "When organizations want to be prepared for audits, investigations, or regulatory reviews.",
              link: "/services/forensic-readiness",
            },
            {
              title: "IPO Readiness",
              desc:
                "Governance, risk, and compliance readiness for listing and public scrutiny.",
              when:
                "When promoters are preparing for institutional capital or future listing.",
              link: "/services/ipo-readiness",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12"
            >
              <div>
                <h2 className="font-serif text-2xl mb-3">
                  {service.title}
                </h2>
                <Link
                  to={service.link}
                  className="text-sm text-gold hover:underline"
                >
                  View service →
                </Link>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Typically engaged:
                  </span>{" "}
                  {service.when}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ADVISORY BOUNDARIES ================= */}
      <section className="py-24 bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl mb-6">
            Clear Scope. Clear Boundaries.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            TaxSonic Global operates strictly as an advisory firm. We do not
            execute transactions, file statutory returns, represent clients
            before authorities, or provide funding or listing guarantees.
            Our role is to advise, structure, and prepare — independently and
            without conflicts.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-neutral-50">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We help clients define the problem before prescribing the solution.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-sm font-medium text-black hover:opacity-90 transition"
          >
            Request Advisory Discussion
          </Link>
        </div>
      </section>
    </>
  );
}
