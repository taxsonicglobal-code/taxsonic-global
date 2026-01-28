import { SEO } from "@/components/SEO";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        title="Private Advisory Intake | TaxSonic Global"
        description="Confidential advisory intake for regulatory risk, tax structuring, governance, and IPO readiness. Independent. Advisory-only."
      />

      {/* HERO */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-charcoal to-black text-charcoal-foreground">
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

      {/* FORM SECTION */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="relative bg-white rounded-xl border border-border shadow-lg p-6 md:p-10">

            {/* Trust Header */}
            <div className="mb-8">
              <h2 className="heading-subsection mb-3">
                Confidential Advisory Request
              </h2>
              <p className="text-muted-foreground">
                Submissions are reviewed personally. We do not provide execution,
                statutory filings, merchant banking, or funding guarantees.
              </p>
            </div>

            {/* Google Form Embed */}
            {!submitted && (
              <div className="relative overflow-hidden rounded-lg border bg-gray-50">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScWxbh7IjnnjhUzzE9-7XO7KdycQhMejuUXReWgf21I3HFjWw/viewform?embedded=true"
                  width="100%"
                  height="900"
                  frameBorder="0"
                  className="w-full"
                  onLoad={() => {
                    // Detect thank-you page load
                    setTimeout(() => {
                      const iframe = document.querySelector("iframe");
                      if (iframe?.contentWindow?.location.href.includes("formResponse")) {
                        setSubmitted(true);
                      }
                    }, 1500);
                  }}
                >
                  Loading…
                </iframe>
              </div>
            )}

            {/* Post-Submission Message */}
            {submitted && (
              <div className="text-center py-20">
                <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                  ✓
                </div>
                <h3 className="text-2xl font-serif mb-4">
                  Thank You. We’ve Received Your Request.
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Your advisory request has been recorded and will be reviewed
                  personally. If appropriate, our team will reach out to you
                  discreetly.
                </p>
              </div>
            )}

            {/* Legal / Trust Footer */}
            <div className="mt-8 text-xs text-muted-foreground leading-relaxed border-t pt-6">
              TaxSonic Global operates as an independent advisory firm only. We do
              not provide statutory audit, execution, merchant banking, or funding
              services. All submissions are treated as confidential.
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
