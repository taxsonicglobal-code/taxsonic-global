import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container-wide pt-32 pb-24 text-center">
      {/* Heading */}
      <h1 className="text-5xl font-serif mb-6">
        TaxSonic Global
      </h1>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        Regulatory Risk. Tax Intelligence. Governance Confidence.
      </p>

      <p className="max-w-3xl mx-auto text-base leading-relaxed mb-12">
        TaxSonic Global is a premium regulatory risk, tax structuring, and
        governance advisory firm based in India, serving businesses globally.
        We help founders, promoters, CFOs, and growth-stage enterprises stay
        compliant, reduce regulatory risk, and scale with confidence.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4">
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
  );
};

export default Home;
