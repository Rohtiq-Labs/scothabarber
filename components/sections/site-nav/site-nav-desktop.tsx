'use client';

import { useLanguage } from '@/context/language-context';

export const SiteNavDesktop = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  return (
    <nav className="site-nav-desktop" aria-label="Main navigation">
      <div className="site-nav-desktop__inner">
        <a href="#" className="site-nav-desktop__logo" aria-label="Scothabarber home">
          SCO<span>.</span>BARBER
        </a>
        <ul className="site-nav-desktop__links">
          <li>
            <a href="#work">{t.nav.work}</a>
          </li>
          <li>
            <a href="#artist">{t.nav.artist}</a>
          </li>
          <li>
            <a href="#services">{t.nav.services}</a>
          </li>
          <li>
            <a href="#testimonials">{t.nav.reviews}</a>
          </li>
        </ul>
        <a
          href={t.links.booksy}
          target="_blank"
          rel="noopener noreferrer"
          className="site-nav-desktop__book"
        >
          {t.nav.bookNow}
        </a>
      </div>
    </nav>
  );
};
