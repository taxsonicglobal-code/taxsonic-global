export default function Industries() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="container-wide max-w-4xl">
          <h1 className="font-serif text-5xl mb-6">
            Industries We Advise
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our work is defined less by industry labels and more by the
            regulatory, governance, and risk complexity our clients face.
            We advise leadership teams operating in high-scrutiny,
            high-stakes environments.
          </p>
        </div>
      </section>

      {/* ================= EXECUTIVE SEGMENTS ================= */}
      <section className="py-24 bg-neutral-50">
        <div className="container-wide space-y-20">

          {/* Segment */}
          <div className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12">
            <div>
              <h2 className="font-serif text-2xl mb-3">
                Founder-Led & Promoter-Driven Businesses
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Businesses where decision-making, ownership, and accountability
                are closely held by founders or promoters.
              </p>
              <p className="text-sm text-muted-foreground">
                Typically facing regulatory exposure arising from growth,
                restructuring, succession planning, or historic decisions
                made without institutional frameworks.
              </p>
            </div>
          </div>

          {/* Segment */}
          <div className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12">
            <div>
              <h2 className="font-serif text-2xl mb-3">
                Growth-Stage & Scaling Enterprises
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Companies transitioning from informal or founder-centric
                operations to professional, governed organizations.
              </p>
              <p className="text-sm text-muted-foreground">
                Often encountering stress points around tax structuring,
                internal controls, regulatory alignment, and board readiness.
              </p>
            </div>
          </div>

          {/* Segment */}
          <div className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12">
            <div>
              <h2 className="font-serif text-2xl mb-3">
                CFO-Led Finance & Control Environments
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Finance teams operating under increasing expectations from
                boards, investors, lenders, and regulators.
              </p>
              <p className="text-sm text-muted-foreground">
                Engagements often involve strengthening MIS, internal controls,
                compliance architecture, and forensic defensibility.
              </p>
            </div>
          </div>

          {/* Segment */}
          <div className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12">
            <div>
              <h2 className="font-serif text-2xl mb-3">
                Boards, Audit Committees & Independent Directors
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Governance bodies seeking independent, conflict-free advice
                on regulatory exposure and risk oversight.
              </p>
              <p className="text-sm text-muted-foreground">
                Our role is advisory — helping boards understand how decisions
                and structures may be viewed under regulatory scrutiny.
              </p>
            </div>
          </div>

          {/* Segment */}
          <div className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12">
            <div>
              <h2 className="font-serif text-2xl mb-3">
                Cross-Border & India-Inbound / Outbound Businesses
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Businesses operating across jurisdictions with exposure to
                tax, FEMA, transfer pricing, and regulatory coordination risk.
              </p>
              <p className="text-sm text-muted-foreground">
                We advise on structuring, documentation, and governance alignment
                across borders — without execution or representation.
              </p>
            </div>
          </div>

          {/* Segment */}
          <div className="grid lg:grid-cols-3 gap-8 border-t border-neutral-200 pt-12">
            <div>
              <h2 className="font-serif text-2xl mb-3">
                IPO-Aspirant & Institution-Facing Companies
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Organizations preparing for public scrutiny, institutional
                funding, or listing-related governance expectations.
              </p>
              <p className="text-sm text-muted-foreground">
                Our IPO readiness work focuses strictly on governance,
                risk, and compliance maturity — not execution or listing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-24 bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl mb-6">
            Advisory-Led. Industry-Agnostic. Risk-Focused.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            We do not position ourselves as industry specialists.
            We position ourselves as risk, governance, and regulatory
            advisors to leadership teams operating in complex environments.
          </p>
        </div>
      </section>
    </>
  );
}
