import { SiteNavDesktop } from './site-nav-desktop';
import { SiteNavMobile } from './site-nav-mobile';

export const SiteNav = (): React.ReactNode => {
  return (
    <>
      <SiteNavDesktop />
      <SiteNavMobile />
    </>
  );
};
