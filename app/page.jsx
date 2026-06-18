import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-img-wrap">
            <Image
              src="/images/hero-graduates.jpg"
              alt="Graduates Celebrating Outdoors"
              width={1480}
              height={735}
              priority
            />
          </div>
          <h1>
            G<span>RADUATES OF</span> <span className="small">minnesota!</span>
          </h1>
          <p className="eyebrow">Class of 2027</p>
          <p className="serving">
            Serving Minneapolis, Saint Paul and Greater Minnesota
          </p>
          <p className="tagline">Lets Celebrate Photos That Tell Your Story</p>
        </div>
      </section>

      {/* EXPERIENCE CARD */}
      <section className="section section-pink">
        <div className="container">
          <div className="experience-card">
            <div className="experience-grid">
              <div>
                <h2>
                  Your Next Chapter is <em>About to Begin</em>
                </h2>
                <p>
                  Your senior year only happens once. Whether you&rsquo;re
                  graduating from high school, college, trade school, or graduate
                  school, we&rsquo;ll create images that celebrate your journey
                  and preserve this milestone for years to come.
                </p>
              </div>
              <div>
                <h3>The Experience</h3>
                <p className="exp-script">Before Your Session.</p>
                <p className="exp-script">During Your Session</p>
                <div className="exp-list">
                  <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;Natural Posing</p>
                  <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;Fun &amp; Relaxed Atmosphere</p>
                  <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;Multiple Outfit Changes</p>
                  <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;Location Guidance</p>
                  <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;Outfit Assistance</p>
                  <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;Personalized Planning</p>
                </div>
              </div>
              <div>
                <h3>The Investment</h3>
                <p className="invest-amount">Senior Sessions Starting at</p>
                <p className="invest-price">$250</p>
              </div>
            </div>
            <div className="center-btn">
              <Link href="/services" className="btn btn-blue">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A CHAPTER WORTH REMEMBERING */}
      <section className="section section-pink">
        <div className="container">
          <div className="split red">
            <div>
              <h2>
                A Chapter <em>Worth Remembering</em>
              </h2>
              <p>
                For years, you&rsquo;ve worked toward this moment. Late nights
                studying, early mornings, challenges overcome, friendships made,
                and memories that will last a lifetime. Graduation is more than a
                ceremony&mdash;it&rsquo;s proof of how far you&rsquo;ve come and a
                celebration of everything you&rsquo;ve become.
              </p>
              <p>
                Whether you&rsquo;re finishing high school, college, trade
                school, or graduate school, this milestone deserves to be
                remembered. These photographs aren&rsquo;t just for today;
                they&rsquo;re for the years ahead when you look back and remember
                the excitement, pride, and possibility that filled this season of
                life.
              </p>
              <p>
                The future is waiting, and your story is just beginning.
                Let&rsquo;s create images that honor your journey and capture
                this incredible chapter exactly as it feels.
              </p>
            </div>
            <div className="split-images">
              <Image
                src="/images/confident-poses.jpg"
                alt="Model's Confident Poses"
                width={453}
                height={696}
              />
              <Image
                src="/images/brooke-cagle.jpg"
                alt="Graduate portrait"
                width={581}
                height={440}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TO THE PARENTS */}
      <section className="section section-pink">
        <div className="container">
          <div className="parents">
            <Image
              src="/images/chapter-portrait.jpg"
              alt="Senior portrait"
              width={617}
              height={610}
            />
            <div className="parents-text">
              <h2>To The Parents</h2>
              <p>
                Whether your senior is outgoing or reserved, our goal is to
                create a comfortable experience where they can simply be
                themselves. We understand that not everyone feels confident in
                front of a camera, which is why we gently guide each session with
                patience, encouragement, and care.
              </p>
              <Link href="/services" className="btn btn-blue">
                Book Now
              </Link>
            </div>
            <Image
              src="/images/parents-portrait.jpg"
              alt="Graduate portrait"
              width={617}
              height={610}
            />
          </div>
        </div>
      </section>

      {/* A CELEBRATION YEARS IN THE MAKING */}
      <section className="section section-cream">
        <div className="container">
          <div className="celebration">
            <h3>For The Graduate</h3>
            <p className="sub">
              A chance to celebrate who you&rsquo;ve become before stepping into
              what&rsquo;s next.
            </p>
            <h2>
              A Celebration Years In The <em>Making</em>
            </h2>
            <p className="big-quote">
              Graduation isn&rsquo;t just about a diploma. it&rsquo;s about every
              late night, every challenge overcome, every friendship made, and
              every dream that brought you here.
            </p>
            <h3>For The Family</h3>
            <p className="sub">
              A collection of memories that will only grow more meaningful with
              time.
            </p>
            <Link href="/services" className="btn btn-blue">
              Explore Sessions
            </Link>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="questions">
        <div className="container">
          <h2>
            You&rsquo;ve Got <em>Questions&hellip;</em>
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
        </div>
      </section>
    </>
  );
}
