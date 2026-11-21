import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LearningDemo } from "../components/LearningDemo";
import { PhoneMockup } from "../components/PhoneMockup";
import { useReveal } from "../hooks/useReveal";
import "./Home.css";

const learnCards = [
  {
    title: "Learns Your Taps",
    body: "MEYNT learns where your fingers naturally land on each key.",
  },
  {
    title: "Learns Your Words",
    body: "Names, slang, abbreviations, and personal vocabulary become part of your keyboard.",
  },
  {
    title: "Learns From Corrections",
    body: "If you keep rejecting the same correction, MEYNT learns to stop making it.",
  },
  {
    title: "Understands Context",
    body: "Grammar, word patterns, and surrounding text help MEYNT choose better suggestions.",
  },
];

function Reveal({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className={`reveal ${className}`.trim()} ref={ref}>
      {children}
    </div>
  );
}

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-brand">MEYNT</p>
            <h1>
              It knows what
              <br />
              <span className="gradient-text">you meant.</span>
            </h1>
            <p className="lead hero-lead">
              MEYNT is a personalized iPhone keyboard that learns how you type to make autocorrect
              and suggestions more accurate over time.
            </p>
            <div className="hero-actions">
              <Link to="/waitlist" className="btn btn-primary">
                Join the Waitlist
              </Link>
              <Link to="/how-it-works" className="btn btn-ghost">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <Reveal className="container-narrow">
          <p className="eyebrow">The problem</p>
          <h2>Autocorrect shouldn't fight you.</h2>
          <p className="lead">
            People type differently. Some hit keys slightly left or right, use different slang,
            names, abbreviations, phrases, and constantly undo the same autocorrections.
          </p>
        </Reveal>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The shift</p>
            <h2>
              MEYNT <span className="gradient-text">learns you.</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="learn-grid">
              {learnCards.map((card, i) => (
                <article
                  className="learn-card card"
                  key={card.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="learn-index">0{i + 1}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section demo-section">
        <Reveal className="container">
          <LearningDemo />
        </Reveal>
      </section>

      <section className="section section-tight">
        <Reveal className="container">
          <div className="compare">
            <div className="compare-card traditional">
              <p className="compare-label">Traditional Autocorrect</p>
              <h3>Generic behavior</h3>
              <p>One model trying to serve everyone the same way.</p>
            </div>
            <div className="compare-vs" aria-hidden="true">
              vs
            </div>
            <div className="compare-card meynt">
              <p className="compare-label">MEYNT</p>
              <h3>Personal typing model</h3>
              <p>Suggestions shaped by how you actually type.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-tight cta-band">
        <Reveal className="container">
          <div className="cta-panel">
            <h2>Ready for a keyboard that adapts to you?</h2>
            <p>Join the waitlist for early access and beta opportunities.</p>
            <Link to="/waitlist" className="btn btn-primary">
              Join the Waitlist
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
