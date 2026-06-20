"use client";

import { MediaImage } from "@/components/ui/media-image/MediaImage";
import { MediaVideo } from "@/components/ui/media-video/MediaVideo";
import { useLanguage } from "@/context/language-context";
import { cultureMosaicMedia } from "@/data/site-assets";

const mosaicCellClasses = [
  "culture-cell big",
  "culture-cell med",
  "culture-cell txt",
  "culture-cell med dark",
  "culture-cell dark",
  "culture-cell txt culture-cell-area-code",
  "culture-cell med",
  "culture-cell dark",
];

export const CultureSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  let mediaIndex = 0;

  return (
    <section id="culture" aria-labelledby="culture-heading">
      <div className="culture-header">
        <div className="section-eyebrow">{t.culture.eyebrow}</div>
        <h2 id="culture-heading" className="culture-title">
          <span className="city">{t.culture.titleCity}</span>
          <br />
          <span className="outline-text">{t.culture.titleOutline}</span>
        </h2>
        <div className="culture-desc-col reveal">
          <p>{t.culture.desc}</p>
        </div>
      </div>

      <div className="culture-mosaic reveal">
        {mosaicCellClasses.map((cellClass, index) => {
          if (cellClass.includes("txt")) {
            if (cellClass.includes("area-code")) {
              return (
                <div key={`culture-${index}`} className={cellClass}>
                  <div className="culture-cell-text">{t.culture.areaCode}</div>
                  <div className="culture-cell-sub">{t.culture.areaCodeLabel}</div>
                </div>
              );
            }

            return (
              <div key={`culture-${index}`} className={cellClass}>
                <div className="culture-cell-text">{t.culture.eventsNum}</div>
                <div className="culture-cell-sub">{t.culture.eventsLabel}</div>
              </div>
            );
          }

          const media = cultureMosaicMedia[mediaIndex];
          mediaIndex += 1;

          return (
            <div key={`culture-${index}`} className={cellClass}>
              {media.type === "video" ? (
                <MediaVideo src={media.src} className="culture-cell-media" ariaLabel={media.alt} />
              ) : (
                <MediaImage
                  src={media.src}
                  alt={media.alt}
                  className="culture-cell-media"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
