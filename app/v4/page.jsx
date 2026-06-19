import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images, seniors, seniorsPortrait, seniorsLandscape } from "@/lib/images";
import * as c from "@/lib/homeContent";

export const metadata = {
  title: "Home — Boutique",
  description: c.hero.serving,
};

// Boutique layout: soft scrapbook feel — overlapping tilted photos, rounded
// cards, script accents, pastel blocks. Same words, locked palette.
export default function HomeBoutique() {
  const mosaic = seniors.slice(0, 8);

  return (
    <div className="v4">
      {/* ═══ HERO ═══ */}
      <section className="v4-hero bg-cream">
        <div className="container v4-hero-grid">
          <Reveal className="v4-hero-text">
            <span className="v4-tag">Hello, Class of 2027</span>
            <h1 className="v4-hero-title">{c.hero.title}</h1>
            <p className="script v4-hero-script">{c.hero.script}</p>
            <p className="v4-hero-serving">{c.hero.serving}</p>
            <Link href={c.hero.cta.href} className="btn btn-red v4-btn">
              {c.hero.cta.label}
            </Link>
          </Reveal>
          <Reveal className="v4-hero-cluster" delay={120}>
            <div className="v4-polaroid tilt-l big">
              <Image
                src={images.confidentPoses.src}
                alt={images.confidentPoses.alt}
                width={1067}
                height={1600}
                priority
                sizes="40vw"
              />
            </div>
            <div className="v4-polaroid tilt-r small">
              <Image
                src={seniorsLandscape[0].src}
                alt={seniorsLandscape[0].alt}
                width={1600}
                height={1067}
                sizes="(max-width: 980px) 55vw, 28vw"
              />
            </div>
            <span className="v4-sticker v4-sticker-1">say cheese!</span>
            <span className="v4-sticker v4-sticker-2">✶ 2027 ✶</span>
          </Reveal>
        </div>
      </section>

      {/* ═══ YOUR NEXT CHAPTER ═══ */}
      <section className="section bg-pink">
        <div className="container v4-chapter-grid">
          <Reveal className="v4-photo-frame tilt-l">
            <Image
              src={images.parentsPortrait.src}
              alt={images.parentsPortrait.alt}
              width={1067}
              height={1600}
              sizes="(max-width: 980px) 100vw, 42vw"
            />
          </Reveal>
          <Reveal className="v4-card" delay={120}>
            <span className="v4-tag pink">{c.nextChapter.eyebrow}</span>
            <h2 className="h1 v4-h">
              Your Next Chapter is <em>About to Begin</em>
            </h2>
            <p className="measure">{c.nextChapter.body}</p>
            <div className="v4-mini-grid">
              <div className="v4-mini">
                <h3>{c.nextChapter.experience.heading}</h3>
                <p className="v4-mini-lead">{c.nextChapter.experience.lead}</p>
                <p>{c.nextChapter.experience.detail}</p>
              </div>
              <div className="v4-mini">
                <h3>{c.nextChapter.investment.heading}</h3>
                <p className="v4-mini-lead">{c.nextChapter.investment.lead}</p>
                <p className="v4-price">{c.nextChapter.investment.price}</p>
              </div>
            </div>
            <Link href={c.nextChapter.cta.href} className="btn btn-blue v4-btn">
              {c.nextChapter.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ A CHAPTER WORTH REMEMBERING ═══ */}
      <section className="section bg-cream">
        <div className="container v4-chapter-grid reverse">
          <Reveal className="v4-cluster-2">
            <div className="v4-polaroid tilt-r">
              <Image
                src={images.chapterPortrait.src}
                alt={images.chapterPortrait.alt}
                width={1067}
                height={1600}
                sizes="38vw"
              />
            </div>
            <div className="v4-polaroid tilt-l small2">
              <Image
                src={seniorsPortrait[2].src}
                alt={seniorsPortrait[2].alt}
                width={1067}
                height={1600}
                sizes="(max-width: 980px) 40vw, 20vw"
              />
            </div>
          </Reveal>
          <Reveal className="v4-card" delay={120}>
            <h2 className="h1 v4-h">{c.chapter.title}</h2>
            <span className="script v4-script-accent">{c.chapter.script}</span>
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
        <div className="container v4-chapter-grid">
          <Reveal className="v4-photo-frame tilt-r">
            <Image
              src={seniorsPortrait[1].src}
              alt={seniorsPortrait[1].alt}
              width={1067}
              height={1600}
              sizes="(max-width: 980px) 100vw, 42vw"
            />
          </Reveal>
          <Reveal className="v4-card" delay={120}>
            <span className="v4-tag sky">{c.parents.eyebrow}</span>
            <h2 className="h1 v4-h">{c.parents.title}</h2>
            <p className="measure">{c.parents.body}</p>
            <Link href={c.parents.cta.href} className="btn btn-blue v4-btn">
              {c.parents.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ CELEBRATION ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <Reveal className="v4-celebrate">
            <span className="v4-tag">{c.celebration.eyebrow}</span>
            <h2 className="h1 v4-h">
              A Celebration Years In The <span className="script v4-script-accent">Making</span>
            </h2>
            <p className="v4-celebrate-quote">{c.celebration.quote}</p>
            <div className="v4-celebrate-cols">
              {c.celebration.cols.map((col) => (
                <div className="v4-celebrate-col" key={col.heading}>
                  <h3>{col.heading}</h3>
                  <p>{col.body}</p>
                </div>
              ))}
            </div>
            <Link href={c.celebration.cta.href} className="btn btn-pink v4-btn">
              {c.celebration.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ MOSAIC ═══ */}
      <section className="v4-mosaic-section bg-pink">
        <div className="container v4-mosaic-head">
          <span className="v4-tag pink">A Peek Inside the Gallery</span>
          <h2 className="h1 v4-h">Sessions We Love</h2>
        </div>
        <div className="container v4-mosaic">
          {mosaic.map((s, i) => (
            <Link
              href="/portfolio"
              key={s.src}
              className={`v4-mosaic-item ${s.o === "l" ? "wide" : ""} ${
                i % 3 === 0 ? "tilt-l" : i % 3 === 1 ? "tilt-r" : ""
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.o === "l" ? 1600 : 1067}
                height={s.o === "l" ? 1067 : 1600}
                sizes="(max-width: 700px) 50vw, 25vw"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <Reveal className="testi-head">
            <span className="v4-tag">Kind Words</span>
            <h2 className="h1 v4-h">Loved by Families Across Minnesota</h2>
          </Reveal>
          <div className="testi-grid">
            {c.testimonials.map((t, i) => (
              <Reveal
                className={`v4-note ${i % 2 === 0 ? "tilt-l" : "tilt-r"}`}
                key={t.name}
                delay={i * 120}
              >
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
