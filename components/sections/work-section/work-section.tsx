"use client";

import { useState } from "react";

import { MediaImage } from "@/components/ui/media-image/MediaImage";
import { useLanguage } from "@/context/language-context";
import { workGallery, type WorkFilterCategory } from "@/data/site-assets";

const cardClasses = ["c1 tall", "c2", "c3", "c4 tall", "c5", "c6"];

export const WorkSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<WorkFilterCategory>("all");

  const filters: { key: WorkFilterCategory; label: string }[] = [
    { key: "all", label: t.work.filters.all },
    { key: "fades", label: t.work.filters.fades },
    { key: "designs", label: t.work.filters.designs },
    { key: "color", label: t.work.filters.color },
  ];

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="section-eyebrow reveal reveal--fade">{t.work.eyebrow}</div>
      <div className="work-header reveal-stagger">
        <div className="reveal reveal--left">
          <h2 id="work-heading" className="section-title">
            {t.work.titleLine1}
            <br />
            <span className="outline">{t.work.titleLine2}</span>
          </h2>
        </div>
        <div className="work-filter reveal reveal--right reveal--fade" role="group" aria-label="Filter portfolio">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`filter-btn${activeFilter === filter.key ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid reveal-stagger">
        {t.work.cards.map((card, index) => {
          const asset = workGallery[index];
          const isVisible = activeFilter === "all" || asset.filter === activeFilter;

          return (
            <article
              key={card.title}
              className={`work-card reveal reveal--scale ${cardClasses[index]}${isVisible ? "" : " is-hidden"}`}
              data-filter={asset.filter}
            >
              <div className="work-card-inner">
                <MediaImage
                  src={asset.image}
                  alt={asset.alt}
                  className="work-card-media"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="work-tag">{card.tag}</div>
                <div className="work-card-label">
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
