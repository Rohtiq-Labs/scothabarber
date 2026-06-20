'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import { useLanguage } from '@/context/language-context';

export const SiteNavMobile = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('sco-mobile-nav-open', isOpen);

    return () => {
      document.body.classList.remove('sco-mobile-nav-open');
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  const navLinks = [
    { href: '#work', label: t.nav.work },
    { href: '#artist', label: t.nav.artist },
    { href: '#services', label: t.nav.services },
    { href: '#testimonials', label: t.nav.reviews },
  ];

  return (
    <div className="site-nav-mobile">
      <a href="#" className="site-nav-mobile__logo" aria-label="Scothabarber home">
        SCO<span>.</span>BARBER
      </a>

      <div className="site-nav-mobile__actions">
        <a
          href={t.links.booksy}
          target="_blank"
          rel="noopener noreferrer"
          className="site-nav-mobile__book"
        >
          {t.nav.bookNow}
        </a>
        <button
          type="button"
          className="site-nav-mobile__toggle"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={toggleMenu}
        >
          <span className="site-nav-mobile__toggle-bar" aria-hidden="true" />
          <span className="site-nav-mobile__toggle-bar" aria-hidden="true" />
          <span className="site-nav-mobile__toggle-bar" aria-hidden="true" />
        </button>
      </div>

      <div
        id={menuId}
        className={`site-nav-mobile__panel${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label={t.nav.menuLabel}>
          <ul className="site-nav-mobile__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={t.links.booksy}
          target="_blank"
          rel="noopener noreferrer"
          className="site-nav-mobile__panel-book"
          onClick={closeMenu}
        >
          {t.nav.bookNow}
        </a>
      </div>

      <button
        type="button"
        className={`site-nav-mobile__backdrop${isOpen ? ' is-visible' : ''}`}
        aria-label={t.nav.closeMenu}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </div>
  );
};
