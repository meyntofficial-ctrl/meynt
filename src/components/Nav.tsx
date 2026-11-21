import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/features", label: "Features" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""} ${open ? "nav-open" : ""}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-brand" aria-label="MEYNT home">
          <span className="nav-mark" aria-hidden="true" />
          <span className="nav-word">MEYNT</span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/waitlist" className="nav-cta">
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
