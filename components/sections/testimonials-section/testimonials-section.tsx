"use client";

import { MediaImage } from "@/components/ui/media-image/MediaImage";
import { useLanguage } from "@/context/language-context";
import { reviewAvatars } from "@/data/site-assets";

export const TestimonialsSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-eyebrow">{t.testimonials.eyebrow}</div>
      <h2 id="testimonials-heading" className="section-title reveal">
        {t.testimonials.titleLine1}
        <br />
        <span className="outline">{t.testimonials.titleLine2}</span>
      </h2>

      <div className="testimonials-grid reveal">
        {t.testimonials.items.map((review, index) => (
          <article
            key={review.name}
            className={`review-card${"featured" in review && review.featured ? " featured" : ""}`}
          >
            <div className="review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <div className="review-quote" aria-hidden="true">
              &quot;
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-author">
              <div className="review-avatar">
                <MediaImage
                  src={reviewAvatars[index]}
                  alt={`${review.name} client cut`}
                  className="review-avatar-media"
                  sizes="42px"
                />
              </div>
              <div>
                <div className="review-name">{review.name}</div>
                <div className="review-handle">{review.handle}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
