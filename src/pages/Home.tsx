export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-wide pt-32 pb-24">
        <h1 className="text-5xl md:text-6xl font-serif max-w-4xl mb-6">
          Regulatory Risk.
          <br />
          Tax Intelligence.
          <br />
          Governance Confidence.
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          TaxSonic Global is a premium regulatory risk, tax structuring, and
          governance advisory firm helping businesses navigate complexity and
          scale with confidence.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Request Advisory
          </a>

          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
          >
            View Services
          </a>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="container-wide py-24 border-t border-border">
        <h2 className="text-4xl font-serif mb-6">
          Advisory-Led. Risk-Focused. Independent.
        </h2>

        <p className="max-w-3xl mb-4">
          Businesses today face increasing scrutiny from regulators, investors,
          lenders, and stakeholders. Traditional compliance-focused services
          often fail to address underlying regulatory and governance risk.
        </p>

        <p className="max-w-3xl text-muted-foreground">
          TaxSonic Global operates as an independent advisory firm focused on
          preventive risk identification, governance maturity, and long-term
          regulatory stability.
        </p>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-wide py-24 border-t border-border">
        <h2 className="text-4xl font-serif mb-10">
          Our Advisory Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          <div>
            <h3 className="text-xl font-medium mb-2">
              Regulatory Risk & Governance Advisory
            </h3>
            <p className="text-muted-foreground">
              Identification, assessment, and mitigation of regulatory exposure
              across operations, leadership decisions, and corporate structures.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              Strategic Tax & Entity Structuring
            </h3>
            <p className="text-muted-foreground">
              Sustainable domestic and cross-border structuring aligned with
              regulatory intent and investor expectations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              Finance, Compliance & Control Architecture
            </h3>
            <p className="text-muted-foreground">
              Design of scalable compliance workflows, SOPs, internal controls,
              and reporting frameworks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              Risk Diagnostic & Forensic Readiness
            </h3>
            <p className="text-muted-foreground">
              Structured assessments to identify hidden regulatory, financial,
              and governance exposure.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="container-wide py-24 border-t border-border">
        <h2 className="text-4xl font-serif mb-6">
          Who We Work With
        </h2>

        <ul className="list-disc pl-6 max-w-3xl space-y-2">
          <li>Founders and growth-stage startups</li>
          <li>Promoter-driven and family businesses</li>
          <li>Small and mid-sized enterprises (SMEs)</li>
          <li>Overseas companies operating or entering India</li>
          <li>Businesses preparing for funding or IPO readiness</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container-wide py-24 border-t border-border">
        <h2 className="text-4xl font-serif mb-6">
          Reduce Regulatory Risk. Build Governance Confidence.
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          Engage with TaxSonic Global for advisory-led clarity, defensible
          structures, and long-term regulatory stability.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Schedule a Discussion
        </a>
      </section>
    </>
  );
}
