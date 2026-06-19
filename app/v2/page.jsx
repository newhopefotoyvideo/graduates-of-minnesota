import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images, seniors } from "@/lib/images";
import * as c from "@/lib/homeContent";

export const metadata = {
  title: "Home — Magazine",
  description: c.hero.serving,
};

// Magazine layout: asymmetric print-editorial spread with a contents rail,
// drop-cap feature, and a horizontal photo gallery. Same words, locked palette.
export default function HomeMagazine() {
  const strip = seniors;

  return (
    <div className="v2">
      {/* ═══ HERO ═══ */}
      <section className="v2-hero">
        <div className="container v2-hero-grid">
          <div className="v2-hero-text">
            <span className="eyebrow">{c.hero.eyebrow}</span>
            <h1 className="h-display v2-hero-title">{c.hero.title}</h1>
            <p className="script v2-hero-script">{c.hero.script}</p>
            <p className="v2-hero-serving">{c.hero.serving}</p>
            <Link href={c.hero.cta.href} className="btn btn-red v2-hero-cta">
              {c.hero.cta.label}
            </Link>
          </div>
          <Reveal className="v2-hero-figure" delay={120}>
            <Image
              src={images.confidentPoses.src}
              alt={images.confidentPoses.alt}
              width={1067}
              height={1600}
              priority
              sizes="(max-width: 980px) 100vw, 45vw"
            />
            <span className="v2-hero-issue">Vol. 27 — The Senior Issue</span>
          </Reveal>
        </div>
        <div className="v2-ticker" aria-hidden="true">
          <div className="v2-ticker-row">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>
                Senior Portraits <i>✦</i> Class of 2027 <i>✦</i> Minneapolis &amp; Saint Paul <i>✦</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURE — YOUR NEXT CHAPTER ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <Reveal className="v2-feature-head">
            <span className="eyebrow">{c.nextChapter.eyebrow}</span>
            <h2 className="h1">
              Your Next Chapter is <em>About to Begin</em>
            </h2>
          </Reveal>
          <div className="v2-feature-grid">
            <Reveal className="v2-feature-body">
              <p className="v2-dropcap measure">{c.nextChapter.body}</p>
              <div className="v2-meta">
                <div className="v2-meta-item">
                  <span className="v2-meta-num">01</span>
                  <h3>{c.nextChapter.experience.heading}</h3>
                  <p className="v2-meta-lead">{c.nextChapter.experience.lead}</p>
                  <p>{c.nextChapter.experience.detail}</p>
                </div>
                <div className="v2-meta-item">
                  <span className="v2-meta-num">02</span>
                  <h3>{c.nextChapter.investment.heading}</h3>
                  <p className="v2-meta-lead">{c.nextChapter.investment.lead}</p>
                  <p className="v2-price">{c.nextChapter.investment.price}</p>
                </div>
              </div>
              <Link href={c.nextChapter.cta.href} className="btn btn-blue v2-cta">
                {c.nextChapter.cta.label}
              </Link>
            </Reveal>
            <Reveal className="v2-feature-figure" delay={120}>
              <Image
                src={images.parentsPortrait.src}
                alt={images.parentsPortrait.alt}
                width={1067}
                height={1600}
                sizes="(max-width: 980px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY STRIP ═══ */}
      <section className="v2-gallery-section bg-pink">
        <div className="container v2-gallery-head">
          <span className="eyebrow">The Portfolio</span>
          <h2 className="h2">Recent Sessions</h2>
        </div>
        <div className="v2-strip">
          {strip.map((s, i) => (
            <Link
              href="/portfolio"
              key={s.src}
              className={`v2-strip-item ${s.o === "l" ? "wide" : ""}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.o === "l" ? 1600 : 1067}
                height={s.o === "l" ? 1067 : 1600}
                sizes="60vw"
              />
              <span className="v2-strip-num">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ SPREAD — A CHAPTER WORTH REMEMBERING ═══ */}
      <section className="section bg-cream">
        <div className="container v2-spread">
          <Reveal className="v2-spread-figure">
            <Image
              src={images.chapterPortrait.src}
              alt={images.chapterPortrait.alt}
              width={1067}
              height={1600}
              sizes="(max-width: 980px) 100vw, 48vw"
            />
          </Reveal>
          <Reveal className="v2-spread-body" delay={120}>
            <h2 className="h1">{c.chapter.title}</h2>
            <span className="script v2-spread-script">{c.chapter.script}</span>
            {c.chapter.paragraphs.map((p, i) => (
              <p className="measure" key={i}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ═══ TO THE PARENTS ═══ */}
      <section className="section bg-sky">
        <div className="container v2-parents">
          <Reveal className="v2-parents-body">
            <span className="eyebrow">{c.parents.eyebrow}</span>
            <h2 className="h1">{c.parents.title}</h2>
            <p className="measure">{c.parents.body}</p>
            <Link href={c.parents.cta.href} className="btn btn-blue v2-cta">
              {c.parents.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ CELEBRATION ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <Reveal className="v2-celebrate">
            <span className="eyebrow">{c.celebration.eyebrow}</span>
            <h2 className="h1">
              A Celebration Years In The <span className="script">Making</span>
            </h2>
            <p className="v2-celebrate-quote">{c.celebration.quote}</p>
            <div className="v2-celebrate-cols">
              {c.celebration.cols.map((col) => (
                <div key={col.heading}>
                  <h3>{col.heading}</h3>
                  <p>{col.body}</p>
                </div>
              ))}
            </div>
            <Link href={c.celebration.cta.href} className="link-underline">
              {c.celebration.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section bg-pink">
        <div className="container">
          <Reveal className="testi-head">
            <span className="eyebrow">Kind Words</span>
            <h2 className="h1">Loved by Families Across Minnesota</h2>
          </Reveal>
          <div className="testi-grid">
            {c.testimonials.map((t, i) => (
              <Reveal className="testi-card v2-testi-card" key={t.name} delay={i * 120}>
                <span className="v2-quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="testi-quote">{t.quote}</p>
                <span className="testi-stars">{"★".repeat(t.stars)}</span>
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
