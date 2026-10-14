// Replace with your form's real link from the "Get the shareable link" step.
const GOOGLE_FORM_URL = "https://forms.gle/Ea9wAEBd3z249VZy9";

export function Subscribe() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20">
      <div className="bg-card border border-border rounded-xl px-6 py-12 md:px-14 md:py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">Get research delivered straight to your inbox.</h2>
        <p className="text-base text-muted-foreground mb-9">No spam, no filler. Unsubscribe anytime.</p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:brightness-110 px-9 py-3.5 rounded-md font-semibold shadow-sm"
        >
          Subscribe
        </a>

        <p className="text-sm text-muted-foreground mt-7">
          By subscribing you agree to receive research communications from RMVentureX.
          This is not investment advice.
        </p>
      </div>
    </section>
  );
}
