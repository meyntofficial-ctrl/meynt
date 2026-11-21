import { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const faqs = [
  {
    q: "What is MEYNT?",
    a: "MEYNT is a personalized iPhone keyboard that learns how you type to make autocorrect and suggestions more accurate over time.",
  },
  {
    q: "How is MEYNT different from Apple's keyboard?",
    a: "Apple's keyboard includes personalization, but MEYNT is designed around creating a much more visible and user-focused personal typing model — including tap patterns, correction memory, and personal vocabulary.",
  },
  {
    q: "Does MEYNT read my messages?",
    a: "MEYNT processes typing signals needed for personalization — such as tap positions, words you type, and correction behavior. It is not built to store the full content of your conversations as a message archive.",
  },
  {
    q: "Where is my typing information stored?",
    a: "MEYNT aims to keep as much personalization on-device as possible. Any synced or server-side data will be limited to what is required for the feature you are using, and explained in the Privacy Policy.",
  },
  {
    q: "Does MEYNT require Full Access?",
    a: "Some keyboard features on iOS require Full Access. When Full Access is requested, MEYNT will explain exactly what it enables and what data that involves.",
  },
  {
    q: "Does the typing test have to be completed?",
    a: "No. The typing test is optional and can speed up personalization, but everyday typing is enough for MEYNT to begin learning.",
  },
  {
    q: "Does MEYNT learn automatically?",
    a: "Yes. As you type normally, MEYNT observes patterns and improves suggestions over time.",
  },
  {
    q: "Can I add my own words?",
    a: "Personal vocabulary learning is a core part of MEYNT. Explicit word-adding controls are planned as the product matures.",
  },
  {
    q: "Will MEYNT support multiple languages?",
    a: "Planned for future versions.",
  },
  {
    q: "When can I use MEYNT?",
    a: "Join the waitlist for updates and beta opportunities as early access opens.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="page-hero">
        <div className="container-narrow">
          <p className="eyebrow">FAQ</p>
          <h1>Questions people actually ask.</h1>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container-narrow">
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div className={`faq-item card ${isOpen ? "open" : ""}`} key={item.q}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="faq-a">{item.a}</p>}
                </div>
              );
            })}
          </div>

          <div className="faq-cta">
            <p>Still curious?</p>
            <Link to="/waitlist" className="btn btn-primary">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
