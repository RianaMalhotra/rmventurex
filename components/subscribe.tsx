// Replace with your form's real link from the "Get the shareable link" step.
const GOOGLE_FORM_URL = "https://forms.gle/Ea9wAEBd3z249VZy9";

export function Subscribe() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Get research delivered straight to your inbox.</h2>
        <p className="text-gray-400 mb-8">No spam, no filler. Unsubscribe anytime.</p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 rounded-xl font-medium"
        >
          Subscribe
        </a>

        <p className="text-xs text-gray-500 mt-6">
          By subscribing you agree to receive research communications from RMVentureX.
          This is not investment advice.
        </p>
      </div>
    </section>
  );
}
