"use client";

import { useLanguage } from "@/context/language-context";

export const BookingSection = () => {
  const { dictionary: t } = useLanguage();
  const details = [
    t.booking.details.location,
    t.booking.details.booking,
    t.booking.details.instagram,
    t.booking.details.origin,
  ];

  return (
    <section id="booking" aria-labelledby="booking-heading">
      <span className="booking-eyebrow">{t.booking.eyebrow}</span>
      <h2 id="booking-heading" className="booking-title reveal">
        {t.booking.titleLine1}
        <br />
        <span className="dim-line">{t.booking.titleLine2}</span>
      </h2>
      <p className="booking-sub reveal">{t.booking.sub}</p>
      <a
        href={t.links.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="booking-btn reveal"
      >
        {t.booking.cta}{" "}
        <span className="booking-btn-arrow" aria-hidden="true">
          →
        </span>
      </a>

      <div className="booking-details reveal">
        {details.map((detail) => (
          <div key={detail.label} className="booking-detail">
            <span className="booking-detail-label">{detail.label}</span>
            <span className="booking-detail-val">{detail.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
