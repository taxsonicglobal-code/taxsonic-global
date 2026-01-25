import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>TaxSonic Global – Regulatory Risk & Governance Advisory</title>
        <meta
          name="description"
          content="TaxSonic Global is a premium regulatory risk, tax and governance advisory firm helping businesses scale with confidence."
        />
      </Helmet>

      <main style={{ padding: "60px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "12px" }}>
          TaxSonic Global
        </h1>

        <h2 style={{ fontSize: "20px", color: "#555", marginBottom: "32px" }}>
          Regulatory Risk. Tax Intelligence. Governance Confidence.
        </h2>

        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          TaxSonic Global is a premium regulatory risk, tax structuring, and
          governance advisory firm based in India, serving businesses globally.
          We help founders, promoters, CFOs, and growth-stage enterprises stay
          compliant, reduce regulatory risk, and scale with confidence.
        </p>
      </main>
    </>
  );
}
