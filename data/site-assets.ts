const ASSETS = '/assets';

export const siteImages = {
  fadeBraids: `${ASSETS}/645632149_17924577984254615_8019984562175016645_n.jpg`,
  colorDesign: `${ASSETS}/562069863_18113301700558598_2990123122653938164_n.jpg`,
  cultureNight: `${ASSETS}/645623356_17911813965342011_5268004873204714649_n.jpg`,
  hairDesignBlonde: `${ASSETS}/671072517_18136494592558598_6252950801466104899_n.jpg`,
  kidsCut: `${ASSETS}/658773156_18583736665059953_6626644409073905808_n.jpg`,
  artistAtWork: `${ASSETS}/490683189_18097054783558598_684532255065717041_n.jpg`,
} as const;

export const siteVideos = {
  hero: `${ASSETS}/video-01.mp4`,
  booking: `${ASSETS}/video-02.mp4`,
  cultureOne: `${ASSETS}/video-02.mp4`,
  cultureTwo: `${ASSETS}/video-03.mp4`,
} as const;

export type WorkFilterCategory = 'all' | 'fades' | 'designs' | 'color';

export type WorkGalleryItem = {
  image: string;
  alt: string;
  filter: Exclude<WorkFilterCategory, 'all'>;
};

export const workGallery: WorkGalleryItem[] = [
  {
    image: siteImages.fadeBraids,
    alt: 'Precision bald fade with braided top',
    filter: 'fades',
  },
  {
    image: siteImages.hairDesignBlonde,
    alt: 'Custom etched hair design on blonde buzz cut',
    filter: 'designs',
  },
  {
    image: siteImages.colorDesign,
    alt: 'Creative teal and green color work with shaved patterns',
    filter: 'color',
  },
  {
    image: siteImages.fadeBraids,
    alt: 'High taper fade with sharp lineup',
    filter: 'fades',
  },
  {
    image: siteImages.kidsCut,
    alt: 'Kids cut with braids and geometric design',
    filter: 'designs',
  },
  {
    image: siteImages.hairDesignBlonde,
    alt: 'Crisp shape up with detailed edge work',
    filter: 'designs',
  },
];

export type CultureMosaicItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

export const reviewAvatars = [
  siteImages.hairDesignBlonde,
  siteImages.fadeBraids,
  siteImages.kidsCut,
] as const;

export const cultureMosaicMedia: CultureMosaicItem[] = [
  {
    type: 'video',
    src: siteVideos.cultureOne,
    alt: 'Scothabarber transformation video',
  },
  {
    type: 'image',
    src: siteImages.artistAtWork,
    alt: 'Sco Brazy cutting hair in the shop',
  },
  {
    type: 'image',
    src: siteImages.cultureNight,
    alt: 'Dallas nightlife and community culture',
  },
  {
    type: 'video',
    src: siteVideos.cultureTwo,
    alt: 'Barber shop session highlight reel',
  },
  {
    type: 'image',
    src: siteImages.colorDesign,
    alt: 'Bold color and design work',
  },
  {
    type: 'image',
    src: siteImages.kidsCut,
    alt: 'Kids transformation in the chair',
  },
];
