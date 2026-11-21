import { Link } from "react-router-dom";
import "./About.css";

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">About</p>
          <h1>Why we built MEYNT</h1>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container-narrow about-story">
          <article className="about-block card">
            <h2>The problem</h2>
            <p>
              Autocorrect is supposed to make typing easier, but it often feels like users are
              constantly correcting the keyboard instead.
            </p>
          </article>

          <article className="about-block card">
            <h2>The realization</h2>
            <p>
              People don't all type the same way, so their keyboards shouldn't behave exactly the
              same way either.
            </p>
          </article>

          <article className="about-block card highlight">
            <h2>The vision</h2>
            <p>
              MEYNT's goal is to build a keyboard that understands the person behind the typing —
              their taps, vocabulary, corrections, and context.
            </p>
          </article>

          <article className="about-block card">
            <h2>The team</h2>
            <p>
              It started as a student-built project and has grown into a team across product,
              design, outreach, privacy, and operations.
            </p>
            <Link to="/team" className="about-link">
              Meet the team →
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
