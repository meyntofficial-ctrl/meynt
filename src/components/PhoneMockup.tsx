import type { ReactNode } from "react";
import "./PhoneMockup.css";

type PhoneMockupProps = {
  children?: ReactNode;
  className?: string;
  floating?: boolean;
};

export function PhoneMockup({ children, className = "", floating = true }: PhoneMockupProps) {
  return (
    <div className={`phone ${floating ? "phone-float" : ""} ${className}`.trim()}>
      <div className="phone-frame">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">{children ?? <DefaultKeyboardScreen />}</div>
      </div>
      <div className="phone-glow" aria-hidden="true" />
    </div>
  );
}

function DefaultKeyboardScreen() {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["⇧", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
    ["123", "🌐", "space", "return"],
  ];

  return (
    <div className="kb-screen">
      <div className="kb-status">
        <span>9:41</span>
        <span className="kb-status-dots">●●●</span>
      </div>
      <div className="kb-messages">
        <div className="kb-bubble them">See you at the cafe?</div>
        <div className="kb-bubble me">On my way — be there soon</div>
      </div>
      <div className="kb-field">
        <span className="kb-typed">
          be there soon<span className="kb-caret" />
        </span>
      </div>
      <div className="kb-suggest">
        <span>be</span>
        <span className="active">there</span>
        <span>soon</span>
      </div>
      <div className="kb-board">
        {rows.map((row, i) => (
          <div className={`kb-row row-${i}`} key={i}>
            {row.map((key) => (
              <span
                key={key}
                className={`kb-key ${key === "space" ? "space" : ""} ${key.length > 1 ? "wide" : ""}`}
              >
                {key}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
