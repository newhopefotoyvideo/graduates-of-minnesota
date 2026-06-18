import Image from "next/image";

export const metadata = {
  title: "Inquiry Services Page | Graduates of Minnesota",
};

const services = [
  {
    num: "01.",
    title: "The Classic",
    img: "/images/service-classic.jpg",
    body: "Perfect for graduates who want a simple and meaningful way to celebrate this milestone. One location, two outfits, and plenty of time to create beautiful portraits that capture who you are right now. Ideal for yearbook updates, announcements, and celebrating your accomplishments.",
    feat: "$250 • 1 Location • 1 Hour • 2 Outfits • Online Gallery",
  },
  {
    num: "02.",
    title: "The Signature",
    img: "/images/service-signature.jpg",
    body: "Our most popular experience for graduates who want variety, creativity, and a session that truly tells their story. With multiple locations and outfit changes, we'll create a gallery full of personality, style, and memories you'll treasure long after graduation day.",
    feat: "$450 • 2 Locations • Up to 2 Hours • Multiple Outfits • Priority Editing • Online Gallery",
  },
  {
    num: "03.",
    title: "The Experience",
    img: "/images/service-experience.jpg",
    body: "For graduates and families who want to fully celebrate a milestone years in the making. This experience goes beyond portraits. We'll capture your journey, your accomplishments, your cap and gown, and the people who helped you get here. Designed to preserve this chapter before the next one begins.",
    feat: "$650 • Multiple Locations • Cap & Gown Session • Family Photos Included • Graduation Announcement Images • Priority Editing • Online Gallery",
  },
];

export default function Services() {
  return (
    <section className="services-page">
      <div className="container">
        <div className="services-intro">
          <p className="services-eyebrow script">
            Explore our services and get in touch
          </p>
          <p className="services-h script">Our Services</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <Image src={s.img} alt={s.title} width={588} height={394} />
              <div className="service-body">
                <span className="service-num">{s.num}</span>
                <p className="service-title script">{s.title}</p>
                <p className="service-desc">{s.body}</p>
                <details className="service-more">
                  <summary>Show more</summary>
                  <p className="service-feat">{s.feat}</p>
                </details>
              </div>
            </div>
          ))}
        </div>

        <div className="service-inquiry">
          <p className="inquiry-title script">Service Inquiry</p>
          <p className="inquiry-intro">
            Fill in the form below to let us know which service you&rsquo;re
            interested in and how we can help - we&rsquo;ll get back to you as soon
            as possible.
          </p>
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
              <label htmlFor="phone">Phone number*</label>
              <input id="phone" name="phone" type="tel" required />
            </div>
            <div className="field">
              <label htmlFor="service">
                Which service are you interested in?
              </label>
              <select id="service" name="service">
                <option>The Classic</option>
                <option>The Signature</option>
                <option>The Experience</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">
                Add a message or tell us more about what you need
              </label>
              <textarea id="message" name="message" />
            </div>
            <button type="submit" className="btn btn-blue inquiry-submit">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
