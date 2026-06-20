"use client";

import { useLanguage } from "@/context/language-context";

export const ServicesSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="services-layout">
        <div className="services-sticky reveal reveal--left reveal--slow">
          <div className="section-eyebrow">{t.services.eyebrow}</div>
          <h2 id="services-heading">
            {t.services.titleLine1}
            <br />
            {t.services.titleLine2}
            <br />
            {t.services.titleLine3}
          </h2>
          <p>{t.services.intro}</p>
          <span className="price-note">{t.services.priceNote}</span>
        </div>

        <div className="service-list reveal-stagger">
          {t.services.items.map((service) => (
            <div key={service.name} className="service-item reveal reveal--right">
              <div>
                <div className="service-name">{service.name}</div>
                <div className="service-desc">{service.desc}</div>
              </div>
              <div className="service-price">
                <span>$</span>
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
