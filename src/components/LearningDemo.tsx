import { useEffect, useState } from "react";
import "./LearningDemo.css";

type Phase = "before" | "learn" | "after";

const phases: { id: Phase; label: string; caption: string }[] = [
  {
    id: "before",
    label: "Before MEYNT learns",
    caption: "Same tap pattern → wrong correction.",
  },
  {
    id: "learn",
    label: "MEYNT learns",
    caption: "Tap profile · rejected correction · personal word.",
  },
  {
    id: "after",
    label: "Later",
    caption: "Same typing behavior → correct result.",
  },
];

export function LearningDemo() {
  const [phase, setPhase] = useState<Phase>("before");
  const [typed, setTyped] = useState("");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    let cancelled = false;
    const timers: number[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const typeText = async (text: string, speed = 90) => {
      for (let i = 0; i <= text.length; i++) {
        if (cancelled) return;
        setTyped(text.slice(0, i));
        await wait(speed);
      }
    };

    const run = async () => {
      while (!cancelled) {
        setPhase("before");
        setTyped("");
        await wait(500);
        await typeText("meet at starbucks");
        await wait(450);
        setTyped("meet at Starbucks");
        await wait(700);
        setTyped("meet at Starbucks ✕ → Starbuck");
        await wait(1600);

        setPhase("learn");
        setTyped("");
        await wait(400);
        await typeText("meet at starbucks");
        await wait(500);
        setTyped("✗ rejected “Starbuck”");
        await wait(900);
        setTyped("+ tap map · + word memory");
        await wait(1600);

        setPhase("after");
        setTyped("");
        await wait(400);
        await typeText("meet at starbucks");
        await wait(500);
        setTyped("meet at Starbucks ✓");
        await wait(2200);
      }
    };

    void run();

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [paused]);

  const active = phases.find((p) => p.id === phase)!;

  return (
    <div className="demo">
      <div className="demo-copy">
        <p className="eyebrow">The idea in 10 seconds</p>
        <h2>
          Watch MEYNT
          <br />
          <span className="gradient-text">learn you.</span>
        </h2>
        <p className="lead">
          A short loop of the product story: wrong correction, learning signal, then the right
          suggestion.
        </p>
        <div className="demo-steps" role="tablist" aria-label="Demo phases">
          {phases.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={phase === p.id}
              className={`demo-step ${phase === p.id ? "active" : ""}`}
              onClick={() => {
                setPaused(true);
                setPhase(p.id);
                setTyped(
                  p.id === "before"
                    ? "meet at Starbuck ✕"
                    : p.id === "learn"
                      ? "+ tap map · + word memory"
                      : "meet at Starbucks ✓",
                );
              }}
            >
              <span className="demo-step-label">{p.label}</span>
              <span className="demo-step-caption">{p.caption}</span>
            </button>
          ))}
        </div>
        {paused && (
          <button type="button" className="btn btn-ghost demo-resume" onClick={() => setPaused(false)}>
            Resume animation
          </button>
        )}
      </div>

      <div className={`demo-stage phase-${phase}`} aria-live="polite">
        <div className="demo-window">
          <div className="demo-window-bar">
            <span />
            <span />
            <span />
            <strong>{active.label}</strong>
          </div>
          <div className="demo-body">
            <div className="demo-chat">
              <div className="demo-bubble">Running late — where are we meeting?</div>
            </div>
            <div className="demo-input-wrap">
              <div className="demo-input">
                {typed || <span className="demo-placeholder">Start typing…</span>}
                <span className="kb-caret" />
              </div>
              {phase === "before" && (
                <div className="demo-tag bad">Wrong correction</div>
              )}
              {phase === "learn" && (
                <div className="demo-learn-chips">
                  <span>Tap profile</span>
                  <span>Rejected correction</span>
                  <span>Personal word</span>
                </div>
              )}
              {phase === "after" && <div className="demo-tag good">Personal model</div>}
            </div>
            <div className="demo-heatmap" aria-hidden="true">
              <div className="heat-key">T</div>
              <div className="heat-key hot">Y</div>
              <div className="heat-key">U</div>
              <div className="heat-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
