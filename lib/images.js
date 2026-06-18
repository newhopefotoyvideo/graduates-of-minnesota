// ─────────────────────────────────────────────────────────────────────────
// Central image registry.
// When the client's real photos arrive, swap the `src` values here ONLY —
// no layout/component changes required. Keep width/height roughly accurate
// for next/image (they drive aspect ratio / layout stability).
// ─────────────────────────────────────────────────────────────────────────

export const images = {
  // Home
  hero: {
    src: "/images/hero-graduates.jpg",
    alt: "Graduates celebrating outdoors",
    width: 1480,
    height: 735,
  },
  chapterPortrait: {
    src: "/images/chapter-portrait.jpg",
    alt: "Senior portrait",
    width: 1234,
    height: 1221,
  },
  confidentPoses: {
    src: "/images/confident-poses.jpg",
    alt: "Confident senior poses",
    width: 906,
    height: 1392,
  },
  parentsPortrait: {
    src: "/images/parents-portrait.jpg",
    alt: "Graduate with family",
    width: 1234,
    height: 1221,
  },
  flower: {
    src: "/images/brooke-cagle.jpg",
    alt: "Soft florals",
    width: 1162,
    height: 880,
  },
  sky: {
    src: "/images/blue-sky-clouds.jpg",
    alt: "Blue sky with clouds",
    width: 1234,
    height: 1385,
  },
  // Contact
  contactPhoto: {
    src: "/images/haley-hydorn.jpg",
    alt: "Graduates on the steps",
    width: 1210,
    height: 1177,
  },
  // Services
  services: {
    classic: { src: "/images/service-classic.jpg", alt: "The Classic session" },
    signature: { src: "/images/service-signature.jpg", alt: "The Signature session" },
    experience: { src: "/images/service-experience.jpg", alt: "The Experience session" },
  },
};

// Portfolio gallery. `category` powers the filters (Seniors / Families / Locations).
// Replace src/alt/category with the client's real gallery when available.
export const portfolio = [
  { src: "/images/portfolio-1.jpg", alt: "Portfolio 01", category: "Seniors" },
  { src: "/images/portfolio-2.jpg", alt: "Portfolio 02", category: "Seniors" },
  { src: "/images/portfolio-3.jpg", alt: "Portfolio 03", category: "Locations" },
  { src: "/images/portfolio-4.jpg", alt: "Portfolio 04", category: "Seniors" },
  { src: "/images/portfolio-5.jpg", alt: "Portfolio 05", category: "Families" },
  { src: "/images/portfolio-6.jpg", alt: "Portfolio 06", category: "Seniors" },
  { src: "/images/portfolio-7.jpg", alt: "Portfolio 07", category: "Families" },
  { src: "/images/portfolio-8.jpg", alt: "Portfolio 08", category: "Seniors" },
  { src: "/images/portfolio-9.jpg", alt: "Portfolio 09", category: "Locations" },
  { src: "/images/portfolio-10.jpg", alt: "Portfolio 10", category: "Families" },
  { src: "/images/portfolio-11.jpg", alt: "Portfolio 11", category: "Seniors" },
  { src: "/images/portfolio-12.jpg", alt: "Portfolio 12", category: "Locations" },
];

export const portfolioCategories = ["All", "Seniors", "Families", "Locations"];
