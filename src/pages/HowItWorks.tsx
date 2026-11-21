import { Link } from "react-router-dom";
import "./HowItWorks.css";

const steps = [
  {
    n: "01",
    title: "You type normally",
    body: "No required training.",
  },
  {
    n: "02",
    title: "MEYNT observes patterns",
    body: "Tap locations, words, correction behavior, and context.",
  },
  {
    n: "03",
    title: "A personal typing profile develops",
    body: "The model learns patterns specific to that user.",
  },
  {
    n: "04",
    title: "Suggestions improve",
    body: "Autocorrect and predictions increasingly reflect the individual.",
  },
];

const systems = [
  {
    title: "Tap Learning",
    body: "If you consistently hit the right side of T, MEYNT can learn that a tap near T and Y may still be more likely to mean T for you.",
  },
  {
    title: "Personal Vocabulary",
    body: "Names, slang, abbreviations, and uncommon words become part of your keyboard over time.",
  },
  {
    title: "Correction Memory",
    body: "If MEYNT changes something and you repeatedly change it back, that becomes evidence.",
  },
  {
    title: "Language Intelligence",
    body: "MEYNT also considers spelling, grammar, word frequency, sentence context, and common phrases.",
  },
];

export function HowItWorks() {
  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">How it works</p>
          <h1>Your keyboard gets to know how you type.</h1>
          <p className="lead">
            MEYNT personalizes from everyday typing — quietly building a model of how you move,
            what you write, and which corrections you refuse.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="process">
            {steps.map((step) => (
              <article className="process-step card" key={step.n}>
                <div className="process-n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Systems</p>
            <h2>Four signals. One personal model.</h2>
          </div>
          <div className="systems-grid">
            {systems.map((item) => (
              <article className="system-card card" key={item.title}>
                <div className="system-orb" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="optional-panel card">
            <div>
              <p className="eyebrow">Optional</p>
              <h2>Typing Test</h2>
              <p className="lead">
                Users can speed up personalization with a short test — but they don't need to.
                Everyday typing is enough to start learning.
              </p>
            </div>
            <Link to="/waitlist" className="btn btn-primary">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
