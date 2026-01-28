import { SEO } from "@/components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Private Advisory Intake | TaxSonic Global"
        description="Confidential advisory intake for founders, CFOs, boards, and leadership teams. Independent, conflict-free regulatory and governance advisory."
      />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-charcoal text-charcoal-foreground">
        <div className="container-narrow text-center">
          <h1 className="heading-display text-gold mb-6">
            Private Advisory Intake
          </h1>
          <p className="text-lg text-charcoal-foreground/80 max-w-2xl mx-auto">
            Designed for founders, CFOs, boards, and leadership teams seeking
            independent, conflict-free regulatory and governance advisory.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-white rounded-xl border border-border shadow-lg overflow-hidden">

            {/* Header */}
            <div className="px-8 py-6 border-b bg-gold-soft">
              <h2 className="heading-subsection mb-2">
                Confidential Advisory Request
              </h2>
              <p className="text-sm text-muted-foreground">
                Submissions are reviewed personally. We do not provide execution,
                statutory filings, merchant banking, or funding guarantees.
              </p>
            </div>

            {/* Google Form */}
            <div className="p-4 md:p-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScWxbh7IjnnjhUzzE9-7XO7KdycQhMejuUXReWgf21I3HFjWw/viewform?usp=header"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full rounded-md"
              >
                Loading…
              </iframe>
            </div>

            {/* Trust Note */}
            <div className="px-8 pb-6 text-xs text-muted-foreground leading-relaxed">
              This advisory intake is confidential. TaxSonic Global operates as an
              independent advisory firm only and does not provide statutory audit,
              execution, merchant banking, or funding services.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
