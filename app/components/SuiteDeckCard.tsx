"use client";

import { useState, type ReactNode } from "react";

type SuiteDeckCardProps = {
  label: string;
  cardClass: string;
  children: ReactNode;
};

export default function SuiteDeckCard({ label, cardClass, children }: SuiteDeckCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className="suite-deck-card"
      aria-label={label}
      aria-pressed={flipped}
      data-flipped={flipped}
      onClick={() => setFlipped((value) => !value)}
    >
      <span className="suite-deck-card-inner" aria-hidden="true">
        <span className={`suite-deck-card-face suite-deck-card-cover ${cardClass}`}>
          <span className="suite-deck-card-corner">SD</span>
          <span className="suite-deck-card-monogram font-display">SD</span>
          <span className="suite-deck-card-signature">ShopiDeck</span>
          <span className="suite-deck-card-corner suite-deck-card-corner-bottom">SD</span>
        </span>
        <span className={`suite-deck-card-face suite-deck-card-reveal ${cardClass}`}>
          <span className="suite-deck-card-corner">SD</span>
          {children}
          <span className="suite-deck-card-label">{label}</span>
          <span className="suite-deck-card-corner suite-deck-card-corner-bottom">SD</span>
        </span>
      </span>
    </button>
  );
}
