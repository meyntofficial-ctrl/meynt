import "./Legal.css";

export function Terms() {
  return (
    <section className="legal-page section">
      <div className="container-narrow">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: November 21, 2026</p>
        <p className="legal-note">
          Before publishing legally important terms, have an adult or qualified legal professional
          review them.
        </p>

        <div className="legal-stack">
          <article>
            <h2>Use of MEYNT</h2>
            <p>
              MEYNT provides a personalized keyboard experience and related website content. By
              using MEYNT or joining the waitlist, you agree to use the product and site lawfully
              and in line with these terms.
            </p>
          </article>

          <article>
            <h2>Beta software disclaimers</h2>
            <p>
              Early and beta versions may be incomplete, change frequently, or contain bugs.
              Features labeled “Coming Soon” are not guarantees of delivery on a specific timeline.
            </p>
          </article>

          <article>
            <h2>Intellectual property</h2>
            <p>
              MEYNT branding, product design, software, and site content are owned by the MEYNT
              team or its licensors. You may not copy, reverse engineer, or redistribute the
              product except as allowed by law or written permission.
            </p>
          </article>

          <article>
            <h2>Limitations</h2>
            <p>
              MEYNT is provided as-is to the fullest extent permitted by law. We are not liable for
              indirect or consequential damages arising from use of the beta product or website,
              except where liability cannot be limited.
            </p>
          </article>

          <article>
            <h2>User responsibilities</h2>
            <p>
              You are responsible for the device you install MEYNT on, the permissions you grant,
              and for not using the product to harm others or violate applicable laws.
            </p>
          </article>

          <article>
            <h2>Age considerations</h2>
            <p>
              MEYNT is intended for users who can legally agree to these terms in their
              jurisdiction. If you are a minor, review these terms with a parent or guardian before
              joining the waitlist or installing beta software.
            </p>
          </article>

          <article>
            <h2>Contact information</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:hello@meynt.app">hello@meynt.app</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
