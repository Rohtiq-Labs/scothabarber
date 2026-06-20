"use client";

import { MediaVideo } from "@/components/ui/media-video/MediaVideo";
import { useLanguage } from "@/context/language-context";
import { siteVideos } from "@/data/site-assets";

export const HeroSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  return (
    <section id="hero" className="sco-hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <MediaVideo
          src={siteVideos.hero}
          className="hero-bg-video"
          ariaLabel="Barber shop highlight reel"
        />
        <div className="hero-bg-overlay" aria-hidden="true" />
        <div className="hero-bg-text">{t.hero.bgText}</div>
        <div className="hero-stripe" aria-hidden="true" />
        <div className="hero-stripe-2" aria-hidden="true" />
      </div>

      <div className="hero-stats" aria-label="Statistics">
        <div className="stat-item">
          <span className="stat-num">{t.hero.stats.followers.num}</span>
          <span className="stat-label">{t.hero.stats.followers.label}</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{t.hero.stats.cuts.num}</span>
          <span className="stat-label">{t.hero.stats.cuts.label}</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">{t.hero.stats.satisfaction.num}</span>
          <span className="stat-label">{t.hero.stats.satisfaction.label}</span>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-headline">
          <div className="hero-tag">{t.hero.tag}</div>
          <h1 id="hero-heading">
            <span>{t.hero.line1}</span>
            <br />
            <span className="line-red">{t.hero.line2}</span>
            <br />
            <span className="line-outline">{t.hero.line3}</span>
          </h1>
        </div>
        <div className="hero-sub-block">
          <p className="hero-desc">
            {t.hero.descLine1}
            <br />
            {t.hero.descLine2}
          </p>
          <a
            href={t.links.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            {t.hero.cta}
            <span className="hero-cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};
