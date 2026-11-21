import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { Features } from "./pages/Features";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Privacy } from "./pages/Privacy";
import { Team } from "./pages/Team";
import { Terms } from "./pages/Terms";
import { Waitlist } from "./pages/Waitlist";

export default function App() {
  const location = useLocation();

  return (
    <div className="page">
      <Nav />
      <main className="main" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
