# Editorial Redesign — Graduates of Minnesota

**Date:** 2026-06-17
**Status:** Approved direction, pending spec review
**Scope:** Full-site visual redesign (all 6 pages + design system) in one pass.
**Out of scope (separate spec):** Booking + payment system (#7), including cash/card payment and the cash discount.

---

## 1. Goal

Transform the current flat, brochure-style site into a premium **editorial / magazine** experience for a senior & graduation photographer — image-first, spacious, with tasteful motion — while preserving two hard constraints exactly.

## 2. Hard Constraints (non-negotiable)

### 2.1 Exact colors (client is specific — do not alter)
| Token | Hex | Role |
|-------|-----|------|
| `--red` | `#cc2200` | Primary accent, anchors |
| `--blue` | `#0169c3` | Secondary accent, text on light |
| `--cream` | `#fffbf2` | Primary canvas |
| `--pink` | `#ffe6ee` | Section mood |
| `--sky` | `#d7ecfb` | Section mood |
| `--yellow` | `#f7f0c4` | Section mood (Contact) |
| `--olive` | `#9a9b6e` | Banners |
| `--sage` | `#97a382` | Script/title accent (FAQ, Contact) |
| `--orange` | `#f2a64f` | Portfolio mood |

No new colors, no tints/shades beyond hover states already in palette family.

### 2.2 Exact wording (client wrote it — do not rewrite)
All body copy, headlines, package descriptions, FAQ Q&A, location copy, and footer text stay **verbatim** from the current live site. Layout/placement may change; words may not. Source of truth = current production copy (already captured).

Notable verbatim items to preserve, including original quirks:
- Hero: "GRADUATES OF MINNESOTA!", "Class of 2027", "Serving Minneapolis, Saint Paul and Greater Minnesota", "Lets Celebrate Photos That Tell Your Story"
- Footer heading "The Next Chapter Starte Here" (original typo — keep)
- "© 2035 by E&J. Powered and secured by Wix"
- Services: Classic $250 / Signature $450 / Experience $650, with exact descriptions + feature lists. Signature copy says "Our most popular experience" → drives the "Most Popular" badge.
- Contact packages incl. "The Signiture" (original spelling — keep)

## 3. Aesthetic Direction

**Editorial / Magazine:** full-bleed imagery, elegant Playfair serif headlines, generous whitespace, asymmetric layouts, gallery-forward. Red/blue used as restrained accents rather than big blocks.

## 4. Design System (Foundation)

Built first; every page consumes it.

- **Typography:** Playfair Display (editorial headlines), Holy River (occasional script accents only — not every heading), Instrument Sans (body). Defined modular type scale, line-heights, measured line-length (~60–75ch for body).
- **Color usage rules:** cream canvas; red/blue as accents; sky/pink/yellow/olive/orange as per-section moods. Disciplined, never muddy.
- **Motion:** reusable `Reveal` (fade + rise on enter-viewport via IntersectionObserver), slow parallax on hero/section images, smooth hover transitions. All gated behind `prefers-reduced-motion: reduce` (motion fully disabled when set).
- **Navigation:** sticky header — transparent over hero, transitions to cream bar on scroll; persistent **Book a Session** CTA; real hamburger drawer on mobile (replaces the current wrapping nav).
- **Image config layer:** single `lib/images.js` (or similar) mapping semantic keys → image paths, so the client's real photos drop in via one-line edits with zero layout changes. Build now with current images as placeholders.
- **Reusable components:** `Section`, `Reveal`, `Gallery`, `Lightbox`, `PackageCard`, `Header` (sticky + drawer), `Footer`, `Hero`.

## 5. Pages

### 5.1 Home (flagship)
- **Hero:** full-bleed photo, gradient scrim for legibility, overlaid headline + eyebrow + script subhead + serving line + Book CTA. Slow parallax.
- **Your Next Chapter is About to Begin:** asymmetric text/image split; her paragraph; The Experience + The Investment ($250).
- **A Chapter Worth Remembering:** large asymmetric image + script heading + her 3 paragraphs.
- **To The Parents:** image + her paragraph.
- **A Celebration Years In The Making:** her quote; For The Graduate / For The Family.
- **Testimonials (NEW):** placeholder quotes + star ratings, clearly marked TODO for real content. Same palette.
- **You've Got Questions…:** CTA into FAQ.
- **Footer:** refined, right-aligned, verbatim text.

### 5.2 Portfolio
Justified/masonry gallery, hover zoom, **click-to-lightbox** (arrow-key + swipe nav, esc to close), category filters (Seniors / Families / Locations). Orange mood retained.

### 5.3 Services
Editorial **package cards** (Classic / Signature / Experience) with exact descriptions + feature lists; **Signature = "Most Popular"** badge. Per-card Book button (wires to booking project later; for now links to Contact/inquiry). Inquiry form retained, restyled.

### 5.4 Locations
Editorial list with large imagery per location; exact location copy; olive section accents; emoji markers retained.

### 5.5 FAQ
Refined accordion; sage Holy River title "Your Questions Answered"; verbatim Q&A; first item open.

### 5.6 Contact
Split editorial layout: yellow header, olive title "Contact & Inquire", "Based In Minnesota" script, location/hours info, polished form (package checkboxes incl. "The Signiture"), olive submit, over imagery.

## 6. Cross-cutting
- Optimized `next/image` with blur-up placeholders.
- SEO/OpenGraph metadata per page + favicon.
- Accessibility: visible focus states, alt text, keyboard-navigable nav/lightbox/accordion, semantic landmarks.
- Custom 404.
- Lighthouse target: 90+ across the board.

## 7. Out of Scope (next spec)
Booking + payments: package → date/time → pay; Stripe card; "pay cash at session" auto-discount with live savings; confirmation + email. Tracked separately.

## 8. Acceptance Criteria
- All 6 pages restyled to the editorial direction, desktop + mobile.
- Exact colors and exact wording preserved (verified against captured source).
- Sticky nav + mobile drawer + persistent Book CTA.
- Scroll-reveal + reduced-motion support.
- Lightbox gallery on Portfolio.
- Redesigned package cards with Most Popular.
- Testimonials section with clearly-marked placeholder content.
- Single image-config layer for easy photo swap.
- Production build passes; deploys green via GitHub→Vercel.
