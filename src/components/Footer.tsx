import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">MEYNT</div>
          <p>It knows what you meant.</p>
        </div>

        <div className="footer-cols">
          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
          <div>
            <h4>Help</h4>
            <Link to="/contact">Contact</Link>
            <a href="mailto:hello@meynt.app">Support</a>
          </div>
          <div>
            <h4>Social</h4>
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
      <div className="container footer-bottom">
        <span>© 2026 MEYNT</span>
        <Link to="/waitlist" className="footer-join">
          Join Waitlist
        </Link>
      </div>
    </footer>
  );
}
