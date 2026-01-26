import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 bg-white">
        <div className="container-wide max-w-4xl">
          <h1 className="font-serif text-5xl mb-6">
            Request an Advisory Discussion
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We engage selectively with founders, boards, and leadership teams
            facing regulatory, governance, or risk complexity.
          </p>
        </div>
      </section>

      {/* ================= CONTEXT ================= */}
      <section className="pb-20 bg-white">
        <div className="container-wide max-w-4xl space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            TaxSonic Global operates strictly as an advisory firm. Our role is to
            help leadership teams understand exposure, design defensible
            structures, and prepare for regulatory and institutional scrutiny.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We do not execute transactions, sell compliance services, represent
            before authorities, or offer guarantees. This ensures independence,
            objectivity, and long-term alignment with our clients.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-24 bg-neutral-50">
        <div className="container-narrow max-w-3xl">
          <div className="border border-neutral-200 bg-white p-10 rounded-sm">
            <h2 className="font-serif text-2xl mb-8">
              Advisory Intake
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Role / Designation
                </label>
                <input
                  type="text"
                  placeholder="Founder, CFO, Board Member, etc."
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Nature of Advisory Requirement
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe the context or challenge you would like to discuss."
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="pt-4">
                <Button variant="gold" size="lg">
                  Request Confidential Discussion
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="py-16 bg-white">
        <div className="container-narrow text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            TaxSonic Global provides advisory services only. We do not offer
            statutory audit, execution support, regulatory representation,
            funding guarantees, or litigation services unless separately agreed
            in writing.
          </p>
        </div>
      </section>
    </>
  );
}
