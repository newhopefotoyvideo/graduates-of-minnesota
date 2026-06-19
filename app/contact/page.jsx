import Image from "next/image";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <section className="contact-head">
        <div className="container">
          <h1>Contact &amp; Inquire</h1>
        </div>
      </section>

      <section className="contact-detail">
        <div className="container contact-detail-grid">
          <div>
            <p className="contact-label">Our Location</p>
            <p className="contact-script script">Based In Minnesota</p>
          </div>
          <div>
            <p className="contact-lines">
              Serving all of the Twin Cities —{"\n"}Minneapolis, Saint Paul &amp;
              surrounding areas{"\n"}
              {"\n"}
              <a href="tel:+16512086181">(651) 208-6181</a>
            </p>
          </div>
          <div>
            <p className="contact-lines">
              Monday &ndash; Friday:{"\n"}09:00 &ndash; 18:00{"\n"}Saturday &ndash;
              Sunday:{"\n"}Closed
            </p>
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
            <form action="https://formsubmit.co/contact@graduatesofminnesota.com" method="POST">
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
                <label>Which Package interest you?*</label>
                <div className="check-row">
                  <label>
                    <input type="checkbox" name="package" value="The Classic" /> The
                    Classic
                  </label>
                  <label>
                    <input type="checkbox" name="package" value="The Signiture" /> The
                    Signiture
                  </label>
                  <label>
                    <input type="checkbox" name="package" value="The Experience" /> The
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
              <button type="submit" className="btn btn-olive contact-submit">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
