import "./Contact.css";

const contacts = [
  {
    label: "General",
    email: "hello@meynt.app",
    note: "Questions, press, and everything else.",
  },
  {
    label: "Support",
    email: "support@meynt.app",
    note: "Coming later for product help.",
  },
  {
    label: "Partnerships",
    email: "partnerships@meynt.app",
    note: "Coming later for brand and sponsor outreach.",
  },
  {
    label: "Privacy",
    email: "privacy@meynt.app",
    note: "Coming later for data requests and policy questions.",
  },
];

export function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">Contact</p>
          <h1>Say hello.</h1>
          <p className="lead">Start with hello@meynt.app — we'll route from there.</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="contact-grid">
            {contacts.map((item) => (
              <a key={item.email} className="contact-card card" href={`mailto:${item.email}`}>
                <p className="contact-label">{item.label}</p>
                <h3>{item.email}</h3>
                <p>{item.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
