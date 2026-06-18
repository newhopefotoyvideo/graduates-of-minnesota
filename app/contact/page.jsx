import Image from "next/image";

export const metadata = { title: "Contact | Graduates of Minnesota" };

export default function Contact() {
  return (
    <>
      <section className="page-head yellow">
        <div className="container">
          <h1 style={{ color: "var(--blue)" }}>Contact &amp; Inquire</h1>
        </div>
      </section>

      <section className="section section-yellow" style={{ background: "var(--yellow)", paddingTop: 0 }}>
        <div className="container">
          <p className="script" style={{ color: "var(--red)", fontSize: "1.8rem", marginBottom: 30 }}>
            Based In Minnesota
          </p>
          <div className="contact-info">
            <div>
              <h2>Our Location</h2>
              <p>Based In Minnesota</p>
            </div>
            <div>
              <p>
                500 Terry Francine St.{"\n"}San Francisco, CA 94158{"\n"}
                123-456-7890{"\n"}info@mysite.com
              </p>
            </div>
            <div>
              <p>
                Monday – Friday:{"\n"}09:00 – 18:00{"\n"}Saturday – Sunday:{"\n"}
                Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO + FORM */}
      <section className="contact-photo">
        <div className="contact-photo-inner container">
          <Image
            src="/images/haley-hydorn.jpg"
            alt="Graduates on steps"
            width={1210}
            height={1177}
          />
          <div className="contact-form-card">
            <h2>The Next Chapter Starts Here</h2>
            <form action="https://formsubmit.co/info@mysite.com" method="POST">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="first">First name*</label>
                  <input id="first" name="first_name" required />
                </div>
                <div className="field">
                  <label htmlFor="last">Last name*</label>
                  <input id="last" name="last_name" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">Email address*</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label>What Package are you in?</label>
                <div className="radio-row">
                  <label>
                    <input type="radio" name="package" value="The Classic" /> The
                    Classic
                  </label>
                  <label>
                    <input type="radio" name="package" value="The Signiture" /> The
                    Signiture
                  </label>
                  <label>
                    <input type="radio" name="package" value="The Experience" /> The
                    Experience
                  </label>
                </div>
              </div>
              <div className="field">
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="notes">Anything You&rsquo;d Like Us To Know?</label>
                <textarea id="notes" name="notes" />
              </div>
              <button type="submit" className="btn btn-blue" style={{ width: "100%" }}>
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
