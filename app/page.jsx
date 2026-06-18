import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

// Placeholder testimonials — swap for the client's real client quotes later.
const testimonials = [
  {
    quote:
      "She made my daughter feel completely at ease, and the photos are beyond anything we imagined.",
    name: "The Andersen Family",
    stars: 5,
  },
  {
    quote:
      "Every shot tells a story. Booking my senior session here was the best decision of the year.",
    name: "Maya, Class of 2026",
    stars: 5,
  },
  {
    quote:
      "Professional, warm, and so creative. We will treasure these images for a lifetime.",
    name: "The Olson Family",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-media">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-scrim" />
        <div className="container hero-inner">
          <p className="eyebrow hero-eyebrow">Class of 2027</p>
          <h1 className="h-display hero-title">Graduates of Minnesota!</h1>
          <p className="script hero-script">
            Lets Celebrate Photos That Tell Your Story
          </p>
          <p className="hero-serving">
            Serving Minneapolis, Saint Paul and Greater Minnesota
          </p>
          <Link href="/contact" className="btn btn-red hero-cta">
            Book a Session
          </Link>
        </div>
        <span className="hero-scroll">Scroll</span>
      </section>

      {/* ═══ YOUR NEXT CHAPTER ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <div className="ed-grid">
            <Reveal className="ed-body">
              <span className="eyebrow">Your Story</span>
              <h2 className="h1">
                Your Next Chapter is <em>About to Begin</em>
              </h2>
              <p className="measure">
                Your senior year only happens once. Whether you&rsquo;re
                graduating from high school, college, trade school, or graduate
                school, we&rsquo;ll create images that celebrate your journey and
                preserve this milestone for years to come.
              </p>
              <div className="chapter-meta">
                <div>
                  <h3>The Experience</h3>
                  <p>
                    <span className="exp-em">Before &amp; during your session</span>
                    <br />
                    Natural posing · Fun &amp; relaxed atmosphere · Multiple outfit
                    changes · Location guidance · Outfit assistance · Personalized
                    planning
                  </p>
                </div>
                <div>
                  <h3>The Investment</h3>
                  <p>Senior Sessions Starting at</p>
                  <p className="invest-price">$250</p>
                </div>
              </div>
              <Link href="/services" className="btn btn-blue ed-cta">
                Book Now
              </Link>
            </Reveal>
            <Reveal className="ed-figure portrait" delay={120}>
              <Image
                src={images.confidentPoses.src}
                alt={images.confidentPoses.alt}
                width={906}
                height={1392}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ A CHAPTER WORTH REMEMBERING ═══ */}
      <section className="section bg-pink">
        <div className="container">
          <div className="ed-grid wide-img reverse">
            <Reveal className="ed-figure tall">
              <Image
                src={images.chapterPortrait.src}
                alt={images.chapterPortrait.alt}
                width={1234}
                height={1221}
              />
            </Reveal>
            <Reveal className="ed-body" delay={120}>
              <h2 className="h1">A Chapter</h2>
              <span className="script ed-script">Worth Remembering</span>
              <p className="measure">
                For years, you&rsquo;ve worked toward this moment. Late nights
                studying, early mornings, challenges overcome, friendships made,
                and memories that will last a lifetime. Graduation is more than a
                ceremony&mdash;it&rsquo;s proof of how far you&rsquo;ve come and a
                celebration of everything you&rsquo;ve become.
              </p>
              <p className="measure">
                Whether you&rsquo;re finishing high school, college, trade school,
                or graduate school, this milestone deserves to be remembered.
                These photographs aren&rsquo;t just for today; they&rsquo;re for
                the years ahead when you look back and remember the excitement,
                pride, and possibility that filled this season of life.
              </p>
              <p className="measure">
                The future is waiting, and your story is just beginning.
                Let&rsquo;s create images that honor your journey and capture this
                incredible chapter exactly as it feels.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ TO THE PARENTS ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <div className="ed-grid">
            <Reveal className="ed-body">
              <span className="eyebrow">For Families</span>
              <h2 className="h1">To The Parents</h2>
              <p className="measure">
                Whether your senior is outgoing or reserved, our goal is to create
                a comfortable experience where they can simply be themselves. We
                understand that not everyone feels confident in front of a camera,
                which is why we gently guide each session with patience,
                encouragement, and care.
              </p>
              <Link href="/services" className="btn btn-blue ed-cta">
                Book Now
              </Link>
            </Reveal>
            <Reveal className="ed-figure portrait" delay={120}>
              <Image
                src={images.parentsPortrait.src}
                alt={images.parentsPortrait.alt}
                width={1234}
                height={1221}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ A CELEBRATION YEARS IN THE MAKING ═══ */}
      <section className="section bg-sky">
        <div className="container">
          <Reveal className="celebrate">
            <span className="eyebrow">The Milestone</span>
            <h2 className="h1">
              A Celebration Years In The <span className="script">Making</span>
            </h2>
            <p className="celebrate-quote">
              Graduation isn&rsquo;t just about a diploma. it&rsquo;s about every
              late night, every challenge overcome, every friendship made, and
              every dream that brought you here.
            </p>
            <div className="celebrate-cols">
              <div>
                <h3>For The Graduate</h3>
                <p>
                  A chance to celebrate who you&rsquo;ve become before stepping
                  into what&rsquo;s next.
                </p>
              </div>
              <div>
                <h3>For The Family</h3>
                <p>
                  A collection of memories that will only grow more meaningful
                  with time.
                </p>
              </div>
            </div>
            <Link href="/services" className="link-underline">
              Explore Sessions
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ TESTIMONIALS (placeholder content) ═══ */}
      <section className="section bg-cream">
        <div className="container">
          <Reveal className="testi-head">
            <span className="eyebrow">Kind Words</span>
            <h2 className="h1">Loved by Families Across Minnesota</h2>
          </Reveal>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <Reveal className="testi-card" key={t.name} delay={i * 120}>
                <span className="testi-stars">{"★".repeat(t.stars)}</span>
                <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                <span className="testi-name">{t.name}</span>
              </Reveal>
            ))}
          </div>
          <p className="testi-note">Placeholder reviews — to be replaced with real client testimonials.</p>
        </div>
      </section>

      {/* ═══ YOU'VE GOT QUESTIONS ═══ */}
      <section className="section bg-red">
        <div className="container">
          <Reveal className="cta-band">
            <h2 className="h-display">
              You&rsquo;ve Got <span className="script">Questions&hellip;</span>
            </h2>
            <p>
              We know booking senior photos comes with questions. From outfit
              choices and locations to what happens if you&rsquo;re camera shy,
              we&rsquo;ve gathered our most common answers below to help you feel
              confident and prepared.
            </p>
            <Link href="/faq" className="btn btn-cream">
              Get the Answers
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
