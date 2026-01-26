import { Link } from "react-router-dom";

const services = [
  {
    title: "Regulatory Risk & Governance",
    description:
      "Identify and mitigate regulatory exposure across leadership decisions, structures, and operations.",
    href: "/services/regulatory-risk",
  },
  {
    title: "Strategic Tax Structuring",
    description:
      "Design defensible domestic and cross-border structures aligned with regulatory intent.",
    href: "/services/tax-structuring",
  },
  {
    title: "Finance & Control Architecture",
    description:
      "Build scalable finance, compliance, and internal control systems for growth and scrutiny.",
    href: "/services/finance-architecture",
  },
  {
    title: "Risk Diagnostic",
    description:
      "Structured assessment to uncover hidden regulatory, financial, and governance exposure.",
    href: "/services/risk-diagnostic",
  },
  {
    title: "Forensic Readiness",
    description:
      "Strengthen fraud prevention, internal discipline, and forensic preparedness.",
    href: "/services/forensic-readiness",
  },
  {
    title: "IPO Readiness Advisory",
    description:
      "Advisory-only readiness for funding, institutional scrutiny, and capital markets.",
    href: "/services/ipo-readiness",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container-wide pt-32 pb-24">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
          Regulatory Risk. <br />
          Tax Intelligence. <br />
          Governance Confidence.
        </h1>

        <p className="max-w-3xl text-lg text-muted-foreground mb-10">
          TaxSonic Global is a premium regulatory risk, tax structuring, and
          governance advisory firm helping businesses reduce exposure, build
          defensible structures, and scale with long-term confidence.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Request Advisory
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md border border-border px-8 py-4 text-sm font-medium hover:bg-muted transition"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-muted/30 py-24">
        <div className="container-wide">
          <h2 className="text-3xl font-serif mb-6">
            Advisory Services
          </h2>

          <p className="max-w-3xl text-muted-foreground mb-14">
            Our advisory-led services focus on risk prevention, governance
            maturity, and regulatory alignment — not routine compliance or
            execution.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group border border-border rounded-xl p-6 bg-background hover:border-foreground transition"
              >
                <h3 className="text-lg font-medium mb-3 group-hover:underline">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <span className="inline-block mt-4 text-sm font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING SECTION */}
      <section className="container-wide py-24">
        <h2 className="text-3xl font-serif mb-6">
          Advisory-led. Independent. Defensible.
        </h2>

        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          TaxSonic Global operates as an independent advisory firm — not a
          routine compliance, filing, or execution service provider. Our
          engagement model prioritises clarity, scope discipline, and long-term
          regulatory stability for founders, promoters, boards, and growth-stage
          enterprises.
        </p>
      </section>
    </>
  );
};

export default Home;
