import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            <span className="cap">G</span>raduates of minnesota!
          </h1>
          <div className="hero-row">
            <span className="hero-side left">Class of 2027</span>
            <div className="hero-photo">
              <Image
                src="/images/hero-graduates.jpg"
                alt="Graduates Celebrating Outdoors"
                width={830}
                height={412}
                priority
              />
            </div>
            <span className="hero-side right">
              Serving Minneapolis, Saint Paul and Greater Minnesota
            </span>
          </div>
          <p className="hero-tagline">
            Lets Celebrate Photos That Tell Your Story
          </p>
        </div>
      </section>

      {/* ===== YOUR NEXT CHAPTER (red ribbon) ===== */}
      <section className="ribbon">
        <div className="container ribbon-wrap">
          <div className="ribbon-red">
            <div className="ribbon-card">
              <h2>
                Your Next Chapter is <em>About to Begin</em>
              </h2>
              <p>
                Your senior year only happens once. Whether you&rsquo;re
                graduating from high school, college, trade school, or graduate
                school, we&rsquo;ll create images that celebrate your journey and
                preserve this milestone for years to come.
              </p>
              <h3>The Experience</h3>
              <p className="exp-sub">Before Your Session.</p>
              <p className="exp-sub">During Your Session</p>
              <div className="exp-list2">
                <p>&bull;&nbsp;&nbsp;&nbsp;Natural Posing</p>
                <p>&bull;&nbsp;&nbsp;&nbsp;Fun &amp; Relaxed Atmosphere</p>
                <p>&bull;&nbsp;&nbsp;&nbsp;Multiple Outfit Changes</p>
                <p>&bull;&nbsp;&nbsp;&nbsp;Location Guidance</p>
                <p>&bull;&nbsp;&nbsp;&nbsp;Outfit Assistance</p>
                <p>&bull;&nbsp;&nbsp;&nbsp;Personalized Planning</p>
              </div>
              <h3>The Investment</h3>
              <p className="exp-sub">Senior Sessions Starting at</p>
              <p className="invest-price2">$250</p>
            </div>
          </div>
          <div className="ribbon-side">
            <div className="ribbon-flower">
              <Image
                src="/images/brooke-cagle.jpg"
                alt="Graduate portrait"
                width={671}
                height={508}
              />
            </div>
            <Link href="/services" className="btn btn-pink ribbon-book">
              Book Now
            </Link>
            <div className="ribbon-pink-block" />
          </div>
        </div>
      </section>

      {/* ===== A CHAPTER WORTH REMEMBERING (portrait + blue card) ===== */}
      <section className="chapter">
        <div className="container chapter-wrap">
          <div className="chapter-photo">
            <Image
              src="/images/chapter-portrait.jpg"
              alt="Senior portrait"
              width={620}
              height={620}
            />
          </div>
          <div className="chapter-card">
            <h2 className="chapter-title">
              Chapter
              <span className="script">Worth Remembering</span>
            </h2>
            <p>
              For years, you&rsquo;ve worked toward this moment. Late nights
              studying, early mornings, challenges overcome, friendships made, and
              memories that will last a lifetime. Graduation is more than a
              ceremony&mdash;it&rsquo;s proof of how far you&rsquo;ve come and a
              celebration of everything you&rsquo;ve become.
            </p>
            <p>
              Whether you&rsquo;re finishing high school, college, trade school,
              or graduate school, this milestone deserves to be remembered. These
              photographs aren&rsquo;t just for today; they&rsquo;re for the years
              ahead when you look back and remember the excitement, pride, and
              possibility that filled this season of life.
            </p>
            <p>
              The future is waiting, and your story is just beginning. Let&rsquo;s
              create images that honor your journey and capture this incredible
              chapter exactly as it feels.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TO THE PARENTS (sky + envelope invitation) ===== */}
      <section className="invite">
        <div className="invite-sky">
          <Image
            src="/images/blue-sky-clouds.jpg"
            alt=""
            width={1425}
            height={420}
          />
        </div>
        <div className="invite-body">
          <div className="envelope" aria-hidden="true">
            <div className="envelope-flap" />
            <div className="envelope-pocket" />
          </div>
          <div className="invite-text">
            <h2>To The Parents</h2>
            <p>
              Whether your senior is outgoing or reserved, our goal is to create a
              comfortable experience where they can simply be themselves. We
              understand that not everyone feels confident in front of a camera,
              which is why we gently guide each session with patience,
              encouragement, and care.
            </p>
            <Link href="/services" className="btn btn-blue">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ===== A CELEBRATION YEARS IN THE MAKING ===== */}
      <section className="celebrate">
        <div className="container">
          <h2 className="celebrate-title">
            A Celebration Years In The <span className="script">Making</span>
          </h2>
          <p className="celebrate-quote">
            Graduation isn&rsquo;t just about a diploma. it&rsquo;s about every
            late night, every challenge overcome, every friendship made, and every
            dream that brought you here.
          </p>
          <div className="celebrate-cols">
            <div>
              <h3>For The Graduate</h3>
              <p>
                A chance to celebrate who you&rsquo;ve become before stepping into
                what&rsquo;s next.
              </p>
            </div>
            <div>
              <h3>For The Family</h3>
              <p>
                A collection of memories that will only grow more meaningful with
                time.
              </p>
            </div>
          </div>
          <div className="celebrate-cta">
            <Link href="/services" className="link-underline">
              Explore Sessions
            </Link>
          </div>
        </div>
      </section>

      {/* ===== YOU'VE GOT QUESTIONS (rotated red card + blue card) ===== */}
      <section className="questions">
        <div className="container questions-wrap">
          <div className="questions-card">
            <h2>
              You&rsquo;ve Got <span className="script">Questions&hellip;</span>
            </h2>
          </div>
          <div className="questions-blue">
            <p>
              We know booking senior photos comes with questions. From outfit
              choices and locations to what happens if you&rsquo;re camera shy,
              we&rsquo;ve gathered our most common answers below to help you feel
              confident and prepared.
            </p>
            <Link href="/faq" className="link-underline">
              Get the Answers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
