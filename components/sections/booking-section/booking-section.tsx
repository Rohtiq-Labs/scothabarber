"use client";

import { MediaVideo } from "@/components/ui/media-video/MediaVideo";
import { useLanguage } from "@/context/language-context";
import { siteVideos } from "@/data/site-assets";

export const BookingSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();
  const details = [
    t.booking.details.location,
    t.booking.details.booking,
    t.booking.details.instagram,
    t.booking.details.origin,
  ];

  return (
    <section id="booking" aria-labelledby="booking-heading">
      <div className="booking-bg">
        <MediaVideo
          src={siteVideos.booking}
          className="booking-bg-video"
          ariaLabel="Barber shop booking highlight"
        />
        <div className="booking-bg-overlay" aria-hidden="true" />
      </div>

      <div className="booking-inner reveal-stagger">
        <span className="booking-eyebrow reveal reveal--fade">{t.booking.eyebrow}</span>
        <h2 id="booking-heading" className="booking-title reveal reveal--slow">
          {t.booking.titleLine1}
          <br />
          <span className="dim-line">{t.booking.titleLine2}</span>
        </h2>
        <p className="booking-sub reveal reveal--fade">{t.booking.sub}</p>
        <a
          href={t.links.booksy}
          target="_blank"
          rel="noopener noreferrer"
          className="booking-btn reveal reveal--scale"
        >
          {t.booking.cta}{" "}
          <span className="booking-btn-arrow" aria-hidden="true">
            →
          </span>
        </a>

        <div className="booking-details reveal-stagger">
          {details.map((detail) => (
            <div key={detail.label} className="booking-detail reveal reveal--fade">
              <span className="booking-detail-label">{detail.label}</span>
              <span className="booking-detail-val">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
