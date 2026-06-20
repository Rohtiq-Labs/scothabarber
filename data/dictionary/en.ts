export const en = {
  meta: {
    title: "SCOTHABARBER — Dallas Cut Different",
    description:
      "Precision fades, creative designs, and color work in Dallas, TX. Book with Sco Brazy.",
  },
  nav: {
    work: "Work",
    artist: "Artist",
    services: "Services",
    reviews: "Reviews",
    bookNow: "Book Now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Site menu",
  },
  hero: {
    bgText: "FRESH",
    tag: "Dallas, TX — Est. Sco Brazy",
    line1: "DALLAS",
    line2: "CUT",
    line3: "DIFFERENT.",
    descLine1: "Precision fades. Creative designs.",
    descLine2: "Built for those who move different.",
    cta: "Book Your Seat",
    scroll: "Scroll",
  },
  ticker: [
    "FADES",
    "CREATIVE DESIGNS",
    "TAPERS",
    "COLOR WORK",
    "BRAIDS",
    "DALLAS TX",
    "TRANSFORMATIONS",
    "SCOTHABARBER",
  ],
  work: {
    eyebrow: "The Work",
    titleLine1: "THE",
    titleLine2: "ART.",
    filters: {
      all: "All",
      fades: "Fades",
      designs: "Designs",
      color: "Color",
    },
    cards: [
      { tag: "New", title: "BALD FADE", subtitle: "Classic precision" },
      { tag: "🔥", title: "HAIR DESIGN", subtitle: "Custom artistry" },
      { tag: "Color", title: "COLOR WORK", subtitle: "Blonde & creative tints" },
      { tag: "Sig.", title: "HIGH TAPER", subtitle: "Signature style" },
      { tag: "Kids", title: "KIDS CUT", subtitle: "For the young ones" },
      { tag: "Shape", title: "SHAPE UP", subtitle: "Crisp lines" },
    ],
  },
  artist: {
    eyebrow: "The Artist",
    titleLine1: "NOT JUST",
    titleLine2: "A BARBER.",
    titleEm: "AN ARTIST.",
    body1:
      "Based out of Dallas, TX, Sco Brazy built a brand from the ground up — one precise cut at a time. Known for transformations that go beyond the chair, every client walks out looking like they belong on the front page.",
    body2:
      "From creative hair designs to bold color work and signature fades — this isn't a barbershop visit, it's an experience.",
    bodyLocation: "Dallas, TX",
    bodyDesigns: "hair designs",
    bodyColor: "color work",
    skills: {
      hot: ["Skin Fades", "Hair Designs", "Color Work"],
      regular: ["Tapers", "Shape Ups", "Kids Cuts", "Braids", "Womens Cuts"],
    },
    instagram: "@scothabarber",
    year: "2024",
  },
  culture: {
    eyebrow: "Identity",
    titleCity: "DALLAS",
    titleOutline: "BUILT.",
    desc: "This isn't just a barbershop. It's a cultural landmark in the making. A space where the community comes together, where artistry meets the streets, and where every cut tells a story of Dallas pride.",
    eventsNum: "6.5",
    eventsLabel: "Weekend Events",
    areaCode: "214",
    areaCodeLabel: "Dallas Area Code",
  },
  services: {
    eyebrow: "Services",
    titleLine1: "WHAT",
    titleLine2: "YOU",
    titleLine3: "GET.",
    intro:
      "Every service is precision. Every cut is intentional. Appointments preferred — walk-ins welcome when available.",
    priceNote: "Book via Booksy",
    items: [
      {
        name: "SKIN FADE",
        desc: "Bald to skin, precision blended. The foundation of the drip.",
        price: "35+",
      },
      {
        name: "HIGH TAPER",
        desc: "Signature high bald taper — clean, sharp, and structured.",
        price: "35+",
      },
      {
        name: "HAIR DESIGN",
        desc: "Custom etched patterns, logos, and geometric artwork.",
        price: "45+",
      },
      {
        name: "COLOR WORK",
        desc: "Bleach, tints, and blonde treatments for the bold ones.",
        price: "60+",
      },
      {
        name: "KIDS CUT",
        desc: "Crisp fades and fresh cuts for the little ones. Age 12 and under.",
        price: "25+",
      },
      {
        name: "SHAPE UP",
        desc: "Lineup and edge detailing. Clean borders, sharp angles.",
        price: "15+",
      },
      {
        name: "WOMEN'S CUT",
        desc: "Fades, undercuts, and creative cuts — no gender barriers here.",
        price: "40+",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client Reactions",
    titleLine1: "THEY",
    titleLine2: "TALK.",
    items: [
      {
        text: "Bro transformed my whole look in one session. The design he put in was cleaner than anything I've seen on Instagram. People been asking me who does my hair ever since.",
        name: "Jordan D.",
        handle: "Dallas, TX",
        initials: "JD",
      },
      {
        text: "Sco is on another level. I flew from Houston just to get this cut. Worth every mile. He doesn't just cut hair — he reads your face and builds the look around you.",
        name: "Marcus K.",
        handle: "Houston via Dallas",
        initials: "MK",
        featured: true,
      },
      {
        text: "Took my son here for his first real cut. He walked out looking like a whole different kid — confidence was through the roof. Sco's got a gift for real.",
        name: "Tanya W.",
        handle: "Grand Prairie, TX",
        initials: "TW",
      },
    ],
  },
  booking: {
    eyebrow: "Ready to Level Up?",
    titleLine1: "YOUR SEAT",
    titleLine2: "IS WAITING.",
    sub: "Appointments book fast. Don't wait — secure your spot and show up ready to transform.",
    cta: "Book Your Seat",
    details: {
      location: { label: "Location", value: "Dallas, TX" },
      booking: { label: "Booking", value: "Booksy App" },
      instagram: { label: "Instagram", value: "@scothabarber" },
      origin: { label: "Bay Area → ", value: "Dallas Based" },
    },
  },
  footer: {
    logo: "SCOTHA",
    tagline: "Dallas Cut Different — @scothabarber",
    navigate: "Navigate",
    connect: "Connect",
    links: {
      work: "The Work",
      artist: "The Artist",
      services: "Services",
      reviews: "Reviews",
      scoBrazy: "@ScoBrazy",
      booksy: "Book via Booksy",
    },
    copy: "© 2026 Scothabarber. All rights reserved. Dallas, TX.",
    social: {
      instagramAria: "Instagram",
      booksyAria: "Booksy",
    },
  },
  links: {
    booksy: "https://fmejia0323.booksy.com",
    instagram: "https://www.instagram.com/scothabarber/",
    scoBrazy: "https://www.instagram.com/scobrazy/",
  },
} as const;

type DeepStringRecord<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringRecord<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringRecord<T[K]> }
      : never;

export type Dictionary = DeepStringRecord<typeof en>;
