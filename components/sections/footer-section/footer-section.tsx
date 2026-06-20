"use client";

import { BooksyIcon, InstagramIcon } from "@/components/ui/social-icons/SocialIcons";
import { useLanguage } from "@/context/language-context";

export const FooterSection = (): React.ReactNode => {
  const { dictionary: t } = useLanguage();

  return (
    <footer className="sco-footer">
      <div className="footer-top reveal-stagger">
        <div className="footer-brand reveal reveal--fade">
          <span className="footer-logo">
            {t.footer.logo}
            <span>.</span>
          </span>
          <span className="footer-tagline">{t.footer.tagline}</span>
        </div>
        <div className="footer-links">
          <div className="footer-col reveal reveal--fade">
            <h5>{t.footer.navigate}</h5>
            <ul>
              <li>
                <a href="#work">{t.footer.links.work}</a>
              </li>
              <li>
                <a href="#artist">{t.footer.links.artist}</a>
              </li>
              <li>
                <a href="#services">{t.footer.links.services}</a>
              </li>
              <li>
                <a href="#testimonials">{t.footer.links.reviews}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col reveal reveal--fade">
            <h5>{t.footer.connect}</h5>
            <ul>
              <li>
                <a
                  href={t.links.scoBrazy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-connect-link"
                >
                  <InstagramIcon className="footer-connect-link__icon" />
                  {t.footer.links.scoBrazy}
                </a>
              </li>
              <li>
                <a
                  href={t.links.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-connect-link"
                >
                  <BooksyIcon className="footer-connect-link__icon" />
                  {t.footer.links.booksy}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom reveal reveal--fade">
        <span className="footer-copy">{t.footer.copy}</span>
        <div className="footer-social">
          <a
            href={t.links.instagram}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.social.instagramAria}
          >
            <InstagramIcon className="social-link__icon" />
          </a>
          <a
            href={t.links.booksy}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.social.booksyAria}
          >
            <BooksyIcon className="social-link__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
