import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        title="Request Advisory Discussion | TaxSonic Global"
        description="Initiate a private advisory discussion with TaxSonic Global. Regulatory risk, tax structuring, and governance advisory for founders, CFOs, and boards."
      />

      <section className="section-padding">
        <div className="container-narrow">

          {/* Header */}
          <div className="mb-10">
            <h1 className="heading-section mb-3">
              Request Advisory Discussion
            </h1>
            <p className="text-muted-foreground max-w-xl">
              This form helps us understand your context before initiating a
              discussion. We engage selectively to ensure alignment, relevance,
              and impact.
            </p>
          </div>

          {/* Form Container */}
          <div className="max-w-3xl bg-[#FAF9F6] border border-gold/20 rounded-md p-10">

            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label className="block text-sm mb-2">
                    Organisation / Business
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2">
                    Briefly describe your requirement
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Submit Advisory Request
                </button>

                <p className="pt-4 text-xs text-muted-foreground leading-relaxed">
                  Advisory-only firm. Submission does not guarantee engagement.
                  We do not provide execution, assurance, or funding guarantees.
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="text-center py-6">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40">
                  <CheckCircle className="h-5 w-5 text-gold" />
                </div>

                <h3 className="font-serif text-xl mb-3">
                  Advisory Request Received
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  Thank you for reaching out. Every advisory request is reviewed
                  personally. If there is a strategic fit, our team will contact
                  you within <strong>within 24 Hours</strong>.
                </p>

                <p className="mt-4 text-xs text-muted-foreground">
                  TaxSonic Global operates on a selective, advisory-only
                  engagement basis.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
