import { useState, type FormEvent } from "react";
import "./Waitlist.css";

type Status = "idle" | "done";

export function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [beta, setBeta] = useState<"yes" | "no" | "">("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const entry = {
      firstName: firstName.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      beta: beta || null,
      at: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("meynt-waitlist") || "[]") as unknown[];
      existing.push(entry);
      localStorage.setItem("meynt-waitlist", JSON.stringify(existing));
    } catch {
      // ignore storage failures in private mode
    }

    setStatus("done");
  }

  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Join waitlist</p>
          <h1>Be one of the first to try MEYNT.</h1>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container-narrow">
          {status === "done" ? (
            <div className="waitlist-success card">
              <h2>You're on the list.</h2>
              <p>We'll only use your email for MEYNT updates and beta opportunities.</p>
            </div>
          ) : (
            <form className="waitlist-form card" onSubmit={onSubmit}>
              <label>
                <span>First Name</span>
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Alex"
                  autoComplete="given-name"
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </label>

              <label>
                <span>
                  What phone do you use? <em>Optional</em>
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="iPhone 16"
                  autoComplete="off"
                />
              </label>

              <fieldset>
                <legend>
                  Would you be interested in beta testing? <em>Optional</em>
                </legend>
                <div className="beta-row">
                  <label className={`chip ${beta === "yes" ? "on" : ""}`}>
                    <input
                      type="radio"
                      name="beta"
                      checked={beta === "yes"}
                      onChange={() => setBeta("yes")}
                    />
                    Yes
                  </label>
                  <label className={`chip ${beta === "no" ? "on" : ""}`}>
                    <input
                      type="radio"
                      name="beta"
                      checked={beta === "no"}
                      onChange={() => setBeta("no")}
                    />
                    No
                  </label>
                </div>
              </fieldset>

              <button type="submit" className="btn btn-primary waitlist-submit">
                Join Waitlist
              </button>

              <p className="waitlist-note">
                We'll only use your email for MEYNT updates and beta opportunities.
              </p>
            </form>
          )}

          <div className="follow-block">
            <h3>Follow our progress</h3>
            <div className="follow-links">
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
