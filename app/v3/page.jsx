import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images, seniors, seniorsPortrait } from "@/lib/images";
import * as c from "@/lib/homeContent";

export const metadata = {
  title: "Home — Cinematic",
  description: c.hero.serving,
};

// Cinematic layout: full-bleed image stages, dark overlays, big statement type,
// and an auto-scrolling portrait marquee. Same words, locked palette.
export default function HomeCinematic() {
  // Two marquee rows (duplicated for a seamless loop).
  const rowA = [...seniorsPortrait, ...seniorsPortrait];
  const rowB = [...seniors, ...seniors];

  return (
    <div className="v3">
      {/* ═══ HERO ═══ */}
      <section className="v3-hero">
        <div className="v3-hero-media">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="v3-hero-scrim" />
        <Reveal className="v3-hero-inner">
          <span className="eyebrow v3-light-eyebrow">{c.hero.eyebrow}</span>
          <h1 className="h-display v3-hero-title">{c.hero.title}</h1>
          <p className="script v3-hero-script">{c.hero.script}</p>
          <p className="v3-hero-serving">{c.hero.serving}</p>
          <Link href={c.hero.cta.href} className="btn btn-red v3-hero-cta">
            {c.hero.cta.label}
          </Link>
        </Reveal>
        <span className="v3-scroll">Scroll</span>
      </section>

      {/* ═══ NEXT CHAPTER — split stage ═══ */}
      <section className="v3-split">
        <div className="v3-split-media">
          <Image
            src={images.confidentPoses.src}
            alt={images.confidentPoses.alt}
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <Reveal className="v3-split-panel bg-blue">
          <span className="eyebrow v3-light-eyebrow">{c.nextChapter.eyebrow}</span>
          <h2 className="h1 v3-on-dark">
            Your Next Chapter is <em>About to Begin</em>
          </h2>
          <p className="measure v3-on-dark-muted">{c.nextChapter.body}</p>
          <div className="v3-meta">
            <div>
              <h3>{c.nextChapter.experience.heading}</h3>
              <p className="v3-meta-lead">{c.nextChapter.experience.lead}</p>
              <p>{c.nextChapter.experience.detail}</p>
            </div>
            <div>
              <h3>{c.nextChapter.investment.heading}</h3>
              <p className="v3-meta-lead">{c.nextChapter.investment.lead}</p>
              <p className="v3-price">{c.nextChapter.investment.price}</p>
            </div>
          </div>
          <Link href={c.nextChapter.cta.href} className="btn btn-cream v3-cta">
            {c.nextChapter.cta.label}
          </Link>
        </Reveal>
      </section>

      {/* ═══ CELEBRATION — cinematic quote band over fixed image ═══ */}
      <section className="v3-quote-band">
        <div className="v3-quote-media">
          <Image
            src={seniors[1].src}
            alt={seniors[1].alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="v3-quote-scrim" />
        <Reveal className="container v3-quote-inner">
          <span className="eyebrow v3-light-eyebrow">{c.celebration.eyebrow}</span>
          <p className="v3-quote-text">{c.celebration.quote}</p>
          <div className="v3-quote-cols">
            {c.celebration.cols.map((col) => (
              <div key={col.heading}>
                <h3>{col.heading}</h3>
                <p>{col.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ A CHAPTER WORTH REMEMBERING — split stage reversed ═══ */}
      <section className="v3-split reverse">
        <div className="v3-split-media">
          <Image
            src={images.chapterPortrait.src}
            alt={images.chapterPortrait.alt}
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <Reveal className="v3-split-panel bg-cream">
          <h2 className="h1 v3-chapter-title">{c.chapter.title}</h2>
          <span className="script v3-chapter-script">{c.chapter.script}</span>
          {c.chapter.paragraphs.map((p, i) => (
            <p className="measure" key={i}>
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* ═══ MARQUEE GALLERY ═══ */}
      <section className="v3-marquee-section">
        <div className="container v3-marquee-head">
          <span className="eyebrow v3-light-eyebrow">The Portfolio</span>
          <h2 className="h1 v3-on-dark">Moments Worth Keeping</h2>
        </div>
        <div className="v3-marquee">
          <div className="v3-marquee-row">
            {rowA.map((s, i) => (
              <div className="v3-marquee-item" key={`a${i}`}>
                <Image src={s.src} alt={s.alt} width={1067} height={1600} sizes="280px" />
              </div>
            ))}
          </div>
          <div className="v3-marquee-row reverse">
            {rowB.map((s, i) => (
              <div className={`v3-marquee-item ${s.o === "l" ? "wide" : ""}`} key={`b${i}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.o === "l" ? 1600 : 1067}
                  height={s.o === "l" ? 1067 : 1600}
                  sizes="360px"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container v3-marquee-cta">
          <Link href="/portfolio" className="btn btn-ghost-light">
            View the Full Portfolio
          </Link>
        </div>
      </section>

      {/* ═══ TO THE PARENTS — text over image ═══ */}
      <section className="v3-overlay-section">
        <div className="v3-overlay-media">
          <Image
            src={images.parentsPortrait.src}
            alt={images.parentsPortrait.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="v3-overlay-scrim" />
        <Reveal className="container v3-overlay-inner">
          <span className="eyebrow v3-light-eyebrow">{c.parents.eyebrow}</span>
          <h2 className="h-display v3-overlay-title">{c.parents.title}</h2>
          <p className="v3-overlay-body">{c.parents.body}</p>
          <Link href={c.parents.cta.href} className="btn btn-red">
            {c.parents.cta.label}
          </Link>
        </Reveal>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <Reveal className="testi-head">
            <span className="eyebrow">Kind Words</span>
            <h2 className="h1">Loved by Families Across Minnesota</h2>
          </Reveal>
          <div className="testi-grid">
            {c.testimonials.map((t, i) => (
              <Reveal className="testi-card" key={t.name} delay={i * 120}>
                <span className="testi-stars">{"★".repeat(t.stars)}</span>
                <p className="testi-quote">{t.quote}</p>
                <span className="testi-name">{t.name}</span>
              </Reveal>
            ))}
          </div>
          <p className="testi-note">
            Placeholder reviews — to be replaced with real client testimonials.
          </p>
        </div>
      </section>

      {/* ═══ QUESTIONS CTA ═══ */}
      <section className="section bg-red">
        <div className="container">
          <Reveal className="cta-band">
            <h2 className="h-display">{c.questions.title}</h2>
            <p>{c.questions.body}</p>
            <Link href={c.questions.cta.href} className="btn btn-cream">
              {c.questions.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
