"use client";

import { MediaImage } from "@/components/ui/media-image/MediaImage";
import { useLanguage } from "@/context/language-context";
import { siteImages } from "@/data/site-assets";

export const ArtistSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  return (
    <section id="artist" aria-labelledby="artist-heading">
      <div className="artist-portrait reveal reveal--left reveal--slow">
        <div className="artist-portrait-frame">
          <MediaImage
            src={siteImages.artistAtWork}
            alt="Sco Brazy cutting hair in the shop"
            className="artist-portrait-media"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="artist-accent-box" aria-hidden="true" />
        <div className="artist-year-badge">{t.artist.year}</div>
      </div>

      <div className="artist-content reveal-stagger">
        <div className="section-eyebrow reveal reveal--fade">{t.artist.eyebrow}</div>
        <h2 id="artist-heading" className="reveal">
          {t.artist.titleLine1}
          <br />
          {t.artist.titleLine2}
          <em>{t.artist.titleEm}</em>
        </h2>
        <p className="artist-body reveal reveal--fade">
          Based out of <strong>{t.artist.bodyLocation}</strong>, Sco Brazy built a brand from the
          ground up — one precise cut at a time. Known for transformations that go beyond the
          chair, every client walks out looking like they belong on the front page.
          <br />
          <br />
          From creative <strong>{t.artist.bodyDesigns}</strong> to bold{" "}
          <strong>{t.artist.bodyColor}</strong> and signature fades — this isn&apos;t a
          barbershop visit, it&apos;s an experience.
        </p>
        <div className="artist-skills reveal reveal--fade">
          {t.artist.skills.hot.map((skill) => (
            <span key={skill} className="skill-chip hot">
              {skill}
            </span>
          ))}
          {t.artist.skills.regular.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
        <a
          href={t.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="artist-ig reveal reveal--fade"
        >
          <span className="artist-ig-icon" aria-hidden="true">
            ✦
          </span>
          {t.artist.instagram}
        </a>
      </div>
    </section>
  );
};
