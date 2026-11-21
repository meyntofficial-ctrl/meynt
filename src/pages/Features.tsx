import { Link } from "react-router-dom";
import "./Features.css";

type Feature = {
  title: string;
  body: string;
  status?: "coming-soon";
};

const features: Feature[] = [
  {
    title: "Personalized Autocorrect",
    body: "Learns how the individual types instead of treating every user identically.",
  },
  {
    title: "Tap Position Learning",
    body: "Builds a per-key model from normal typing.",
  },
  {
    title: "Context-Aware Suggestions",
    body: "Uses grammar and previous words to avoid random suggestions.",
  },
  {
    title: "Personal Words",
    body: "Learns names, slang, abbreviations, and repeated vocabulary.",
  },
  {
    title: "Correction Memory",
    body: "Remembers corrections users repeatedly accept or reject.",
  },
  {
    title: "My MEYNT",
    body: "Shows users what the keyboard has learned about them.",
    status: "coming-soon",
  },
  {
    title: "Typing Profile",
    body: "Shows learned key patterns and areas that need more data.",
    status: "coming-soon",
  },
  {
    title: "Adaptive Typing Test",
    body: "Eventually targets letters where the model has less confidence.",
    status: "coming-soon",
  },
  {
    title: "Privacy-Focused Learning",
    body: "Keep as much personalization on-device as possible.",
  },
];

export function Features() {
  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Features</p>
          <h1>Built around how you actually type.</h1>
          <p className="lead">
            A visual look at the product surface — shipping ideas first, with clear labels for
            what's still ahead.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="feature-grid">
            {features.map((feature) => (
              <article
                className={`feature-card card ${feature.status === "coming-soon" ? "soon" : ""}`}
                key={feature.title}
              >
                <div className="feature-top">
                  <div className="feature-icon" aria-hidden="true" />
                  {feature.status === "coming-soon" && (
                    <span className="soon-badge">Coming Soon</span>
                  )}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>

          <div className="features-cta">
            <Link to="/waitlist" className="btn btn-primary">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
