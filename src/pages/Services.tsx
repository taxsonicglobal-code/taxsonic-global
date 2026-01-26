import { Link } from "react-router-dom";

const services = [
  {
    title: "Regulatory Risk & Governance Advisory",
    description:
      "Identify, assess, and mitigate regulatory exposure across operations, leadership decisions, and governance frameworks.",
    path: "/services/regulatory-risk",
  },
  {
    title: "Strategic Tax & Entity Structuring",
    description:
      "Design sustainable domestic and cross-border structures aligned with regulatory intent and investor expectations.",
    path: "/services/tax-structuring",
  },
  {
    title: "Finance, Compliance & Control Architecture",
    description:
      "Build scalable finance, compliance, and internal control frameworks that support growth and institutional scrutiny.",
    path: "/services/finance-architecture",
  },
  {
    title: "Regulatory & Financial Risk Diagnostic",
    description:
      "Structured diagnostic to uncover hidden regulatory, financial, and governance exposure.",
    path: "/services/risk-diagnostic",
  },
  {
    title: "Forensic Readiness & Internal Control Advisory",
    description:
      "Strengthen fraud prevention, internal discipline, and forensic preparedness before issues arise.",
    path: "/services/forensic-readiness",
  },
  {
    title: "Growth, Capital & IPO Readiness Advisory",
    description:
      "Advisory-only readiness support for businesses preparing for funding and capital market scrutiny.",
    path: "/services/ipo-readiness",
  },
];

const Services = () => {
  return (
    <section className="container-wide pt-32 pb-24">
      {/* Page Header */}
      <h1 className="text-5xl font-serif mb-6">
        Advisory Services
      </h1>

      <p className="max-w-3xl text-lg text-muted-foreground mb-14">
        TaxSonic Global provides advisory-led services focused on regulatory
        risk reduction, tax structuring integrity, and governance maturity.
        We do not operate as a routine compliance or execution firm.
      </p>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.path}
            className="group block rounded-xl border border-border p-8 transition hover:border-foreground hover:shadow-soft"
          >
            <h3 className="text-xl font-medium mb-3 group-hover:underline">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>

            <span className="text-sm font-medium text-foreground">
              View details →
            </span>
          </Link>
        ))}
      </div>

      {/* Advisory Disclaimer */}
      <div className="max-w-4xl mt-20 border-t border-border pt-10">
        <p className="text-sm text-muted-foreground leading-relaxed">
          All services are advisory-only unless explicitly agreed otherwise.
          We do not provide statutory audit, legal opinions, merchant banking,
          IPO execution, SEBI filings, or funding guarantees.
        </p>
      </div>
    </section>
  );
};

export default Services;
