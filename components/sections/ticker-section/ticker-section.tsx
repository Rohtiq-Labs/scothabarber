"use client";

import { useLanguage } from "@/context/language-context";

export const TickerSection = () => {
  const { dictionary: t } = useLanguage();
  const items = [...t.ticker, ...t.ticker];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item} <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};
