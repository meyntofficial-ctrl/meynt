import "./Team.css";

const team = [
  {
    name: "Muhsin",
    role: "Product & Engineering",
    body: "Built and leads development of the MEYNT keyboard and iPhone app, including autocorrect, personalization, typing-data learning, and product testing.",
    result: "Built first working iOS keyboard prototype.",
    initial: "M",
  },
  {
    name: "Dhruv",
    role: "Brand & Design",
    body: "Leads MEYNT's visual identity, including its logo, app icon, typography, website style, and social-media branding.",
    result: "Defined the MEYNT visual system end-to-end.",
    initial: "D",
  },
  {
    name: "Aarav",
    role: "Partnerships & Outreach",
    body: "Handles company communication, sponsorship outreach, partnerships, waitlist strategy, and relationships with brands and local businesses.",
    result: "Contacted 25 potential sponsors.",
    initial: "A",
  },
  {
    name: "Aiden",
    role: "Website / Legal & Privacy",
    body: "Works on MEYNT's website, privacy disclosures, terms, data-use explanations, and creator partnership structure.",
    result: "Drafted privacy + terms aligned to product behavior.",
    initial: "Ai",
  },
  {
    name: "Tyler",
    role: "Hardware & Operations",
    body: "Researches hardware concepts, manufacturing costs, pricing, minimum order quantities, and organizes outreach tracking.",
    result: "Mapped manufacturing costs and MOQ paths.",
    initial: "T",
  },
];

export function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Team</p>
          <h1>Built by a student team with different specialties.</h1>
          <p className="lead">
            For LaunchX and beyond — each person belongs here because of what they actually ship.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card card" key={person.name}>
                <div className="team-avatar" aria-hidden="true">
                  {person.initial}
                </div>
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                <p className="team-body">{person.body}</p>
                <p className="team-result">{person.result}</p>
              </article>
            ))}

            <article className="team-card card team-slot">
              <div className="team-avatar slot" aria-hidden="true">
                +
              </div>
              <h3>Open Seat</h3>
              <p className="team-role">Growth & Social Media</p>
              <p className="team-body">
                Manages content distribution, social analytics, creator outreach, and converting
                views into testers and waitlist signups.
              </p>
              <p className="team-result">Person #6 — if we add them.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
