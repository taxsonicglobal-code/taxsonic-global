export default function Contact() {
  return (
    <main className="container-wide pt-32 pb-24">
      <h1 className="text-5xl font-serif mb-8">Contact TaxSonic Global</h1>

      <div className="max-w-3xl space-y-6">
        <p>
          For advisory discussions related to regulatory risk, tax structuring,
          or governance readiness, please reach out using the details below.
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:taxsonicglobal@gmail.com"
            className="underline"
          >
            taxsonicglobal@gmail.com
          </a>
        </p>

        <p className="text-muted-foreground">
          Advisory engagements are subject to scope definition and mutual
          agreement.
        </p>
      </div>
    </main>
  );
}
