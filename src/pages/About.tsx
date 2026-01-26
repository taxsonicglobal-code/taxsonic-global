import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <SEO
        title="About TaxSonic Global"
        description="TaxSonic Global is a regulatory risk, tax intelligence, and governance advisory firm helping businesses operate with clarity, control, and confidence."
      />

      {/* HERO */}
      <section className="bg-charcoal text-charcoal-foreground py-20">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Advisory-Led. <span className="text-gold">Conflict-Free.</span>
            <br />
            Built for Regulatory Confidence.
          </h1>

          <p className="text-lg text-charcoal-foreground/80 max-w-2xl">
            TaxSonic Global is a premium regulatory risk, tax intelligence,
            and governance advisory firm helping businesses navigate complexity
            with clarity and control.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-background">
        <div className="container-narrow space-y-8">
          <h2 className="text-3xl font-serif">
            Who We Are
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            TaxSonic Global advises founders, promoters, CFOs, boards,
            and growth-stage enterprises on regulatory risk, tax structuring,
            governance design, and control architecture.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            We operate strictly as an <strong>advisory-only firm</strong>.
            We do not execute transactions, sell products, represent conflicting
            interests, or provide statutory certifications. This ensures
            independence, objectivity, and long-term credibility.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Our work is designed for businesses that value defensibility,
            governance maturity, and regulatory preparedness — not shortcuts.
          </p>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="py-20 bg-gold-soft">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif mb-10">
            How We Think
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="font-serif text-xl mb-4">
                Advisory, Not Execution
              </h3>
              <p className="text-muted-foreground">
                We focus on frameworks, diagnostics, and strategic positioning —
                not routine filings or transactional execution.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="font-serif text-xl mb-4">
                Risk-First Lens
              </h3>
              <p className="text-muted-foreground">
                We evaluate how decisions will stand up to regulatory scrutiny
                over time, not just how they work today.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="font-serif text-xl mb-4">
                Built for Scale
              </h3>
              <p className="text-muted-foreground">
                Our advisory structures are designed to scale with growth,
                cross-border exposure, and future listing readiness.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="font-serif text-xl mb-4">
                Independent & Defensible
              </h3>
              <p className="text-muted-foreground">
                No commissions. No product bias. No execution dependency.
                Advice that remains defensible years later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DON’T DO */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif mb-6">
            What We Deliberately Don’t Do
          </h2>

          <ul className="list-disc pl-6 text-muted-foreground space-y-3">
            <li>Statutory audit or certification</li>
            <li>IPO execution or listing services</li>
            <li>SEBI filings (DRHP, RHP, etc.)</li>
            <li>Merchant banking or fundraising guarantees</li>
            <li>Litigation or investigation representation</li>
          </ul>

          <p className="mt-6 text-sm text-muted-foreground">
            This clarity allows clients to engage us for independent thinking —
            not conflicted execution.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-charcoal-foreground text-center">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif mb-6">
            Engage With Clarity
          </h2>

          <p className="text-charcoal-foreground/80 mb-8 max-w-xl mx-auto">
            If your organization values regulatory discipline,
            governance strength, and long-term defensibility,
            we should talk.
          </p>

          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Request Advisory Discussion</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
