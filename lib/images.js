// ─────────────────────────────────────────────────────────────────────────
// Central image registry.
// When the client's real photos arrive, swap the `src` values here ONLY —
// no layout/component changes required. Keep width/height roughly accurate
// for next/image (they drive aspect ratio / layout stability).
// ─────────────────────────────────────────────────────────────────────────

export const images = {
  // Home — now using the client's real senior photos.
  hero: {
    src: "/images/Senior-224.jpg",
    alt: "Senior on the Stone Arch Bridge with the Minneapolis skyline at golden hour",
    width: 1600,
    height: 1067,
  },
  chapterPortrait: {
    src: "/images/senior-39.jpg",
    alt: "Senior seated on city steps among autumn leaves",
    width: 1067,
    height: 1600,
  },
  confidentPoses: {
    src: "/images/SENIOR-125.jpg",
    alt: "Senior in a floral dress at sunset in a meadow",
    width: 1067,
    height: 1600,
  },
  parentsPortrait: {
    src: "/images/Abish-68_websize.jpg",
    alt: "Senior in a lace dress at golden hour",
    width: 1067,
    height: 1600,
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

// ─────────────────────────────────────────────────────────────────────────
// The client's real senior photos. Shared by the alternate home layouts
// (v2 / v3 / v4). `o` = orientation ("p" portrait | "l" landscape).
// ─────────────────────────────────────────────────────────────────────────
export const seniors = [
  { src: "/images/Senior-224.jpg", alt: "Senior on the Stone Arch Bridge with the Minneapolis skyline", o: "l" },
  { src: "/images/Abish-83_websize.jpg", alt: "Senior smiling beneath a willow tree at golden hour", o: "l" },
  { src: "/images/senior-57.jpg", alt: "Senior on a historic brick street downtown", o: "l" },
  { src: "/images/SP-203.jpg", alt: "Senior on a bench in downtown Saint Paul at dusk", o: "l" },
  { src: "/images/Senior-208.jpg", alt: "Senior framed beneath a stone archway", o: "l" },
  { src: "/images/sofia_-34_websize.jpg", alt: "Senior seated in a meadow holding wildflowers", o: "l" },
  { src: "/images/SENIOR-125.jpg", alt: "Senior in a floral dress at sunset in a meadow", o: "p" },
  { src: "/images/Abish-68_websize.jpg", alt: "Senior in a lace dress at golden hour", o: "p" },
  { src: "/images/SENIOR-172.jpg", alt: "Senior in a floral dress seated on autumn steps", o: "p" },
  { src: "/images/Senior-146.jpg", alt: "Senior in a white dress by the riverfront", o: "p" },
  { src: "/images/SP-82.jpg", alt: "Senior beside an ornate staircase and chandelier", o: "p" },
  { src: "/images/senior-39.jpg", alt: "Senior seated on city steps among autumn leaves", o: "p" },
  { src: "/images/senior-126.jpg", alt: "Senior outside the Varsity Theater in Dinkytown", o: "p" },
];

// Convenience handles used by the alternate layouts.
export const seniorsPortrait = seniors.filter((s) => s.o === "p");
export const seniorsLandscape = seniors.filter((s) => s.o === "l");

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
