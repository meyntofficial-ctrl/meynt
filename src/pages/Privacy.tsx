import "./Legal.css";

export function Privacy() {
  return (
    <section className="legal-page section">
      <div className="container-narrow">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: November 21, 2026</p>
        <p className="legal-note">
          This policy is written to match how MEYNT is intended to work. Before launch, have an
          adult or qualified legal professional review it.
        </p>

        <div className="legal-stack">
          <article>
            <h2>What MEYNT collects</h2>
            <p>
              Depending on the features you use, MEYNT may process typing-related signals such as
              tap positions on keys, words and short phrases you type, correction accept/reject
              behavior, optional typing-test results, and waitlist information you submit (such as
              name and email).
            </p>
          </article>

          <article>
            <h2>What MEYNT doesn't collect</h2>
            <p>
              MEYNT is not designed to archive your full message history, contacts list, photos, or
              unrelated app content. We do not sell personal typing data.
            </p>
          </article>

          <article>
            <h2>Why data is collected</h2>
            <p>
              Typing signals are used to personalize autocorrect and suggestions, improve
              reliability, support beta testing, and communicate product updates to waitlist
              members who opted in.
            </p>
          </article>

          <article>
            <h2>Where data is stored</h2>
            <p>
              MEYNT aims to keep as much personalization on-device as possible. If a feature needs
              limited cloud processing or backup, that will be described in-product and limited to
              what the feature requires.
            </p>
          </article>

          <article>
            <h2>Whether data leaves the device</h2>
            <p>
              On-device learning is the default goal. Some optional features (for example waitlist
              signup on this website, analytics for the marketing site, or future sync features)
              may send information off-device. Keyboard Full Access, when enabled, can allow network
              communication required by that feature set.
            </p>
          </article>

          <article>
            <h2>How users can delete or reset data</h2>
            <p>
              Users should be able to reset learned personalization from in-app controls when those
              controls ship, and can request deletion of waitlist or account-related information by
              contacting privacy@meynt.app.
            </p>
          </article>

          <article>
            <h2>What Full Access means</h2>
            <p>
              On iOS, “Allow Full Access” is a system permission for keyboards. It can enable
              features that need broader capabilities than a sandbox-only keyboard. When MEYNT asks
              for Full Access, it will explain what that enables for personalization and networking.
            </p>
          </article>

          <article>
            <h2>Third-party services</h2>
            <p>
              This website may use hosting and basic analytics infrastructure. The iOS app may use
              Apple platforms and, if added later, limited tooling for crash reporting or email
              delivery. Third parties are used only to operate MEYNT — not to sell your typing
              profile.
            </p>
          </article>

          <article>
            <h2>Contact</h2>
            <p>
              Privacy questions:{" "}
              <a href="mailto:privacy@meynt.app">privacy@meynt.app</a>
              <br />
              General: <a href="mailto:hello@meynt.app">hello@meynt.app</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
