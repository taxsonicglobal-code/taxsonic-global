import { useState } from "react";
import { SEO } from "@/components/SEO";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzqlrbxPYQ4LKcpvZ-4KrGEYFgAv6sk9iO1D1Pdr6tS1JzhmPRuUjhLyrFm1Nzgf79PTg/exec";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Fire-and-forget submission (prevents CORS blocking)
    fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Instantly update UI (premium UX)
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Private Advisory Intake | TaxSonic Global"
        description="Confidential advisory intake for regulatory risk, tax structuring, governance, and IPO readiness."
      />

      {/* HERO */}
      <section className="pt-24 pb-20 bg-charcoal text-charcoal-foreground text-center">
        <h1 className="heading-display text-gold mb-4">
          Private Advisory Intake
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-charcoal-foreground/80">
          Designed for founders, CFOs, boards, and leadership teams seeking
          independent, conflict-free advisory.
        </p>
      </section>

      {/* FORM */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-white border border-border rounded-xl shadow-lg p-8">

            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-serif mb-3">
                  Request Received
                </h2>
                <p className="text-muted-foreground">
                  “Your submission has been received. If aligned, we will reach out to take the discussion forward.”
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full input"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full input"
                />

                <input
                  name="company"
                  required
                  placeholder="Company / Group"
                  className="w-full input"
                />

                <select name="role" required className="w-full input">
                  <option value="">Role</option>
                  <option>Founder / Promoter</option>
                  <option>CFO / Finance Head</option>
                  <option>Board / Audit Committee</option>
                  <option>Leadership Team</option>
                </select>

                <select name="advisory" required className="w-full input">
                  <option value="">Advisory Area</option>
                  <option>Regulatory Risk</option>
                  <option>Tax Structuring</option>
                  <option>Governance Advisory</option>
                  <option>IPO Readiness</option>
                  <option>Forensic Readiness</option>
                </select>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Brief context or concern"
                  className="w-full input"
                />

                <button
                  disabled={loading}
                  className="w-full bg-gold text-black py-3 rounded-md font-medium hover:opacity-90 transition"
                >
                  {loading ? "Submitting…" : "Request Advisory"}
                </button>
              </form>
            )}

            <p className="mt-6 text-xs text-muted-foreground text-center">
              Advisory-only. No execution, filings, merchant banking, or funding guarantees.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
