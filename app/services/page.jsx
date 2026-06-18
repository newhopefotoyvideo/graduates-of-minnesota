import Image from "next/image";

export const metadata = {
  title: "Inquiry Services Page | Graduates of Minnesota",
};

const services = [
  {
    num: "01.",
    title: "The Classic",
    img: "/images/service-classic.jpg",
    body: `Perfect for graduates who want a simple and meaningful way to celebrate this milestone.

One location, two outfits, and plenty of time to create beautiful portraits that capture who you are right now. Ideal for yearbook updates, announcements, and celebrating your accomplishments.`,
    price: "$250",
    features: ["1 Location", "1 Hour", "2 Outfits", "Online Gallery"],
  },
  {
    num: "02.",
    title: "The Signature",
    img: "/images/service-signature.jpg",
    body: `Our most popular experience for graduates who want variety, creativity, and a session that truly tells their story.

With multiple locations and outfit changes, we'll create a gallery full of personality, style, and memories you'll treasure long after graduation day.`,
    price: "$450",
    features: [
      "2 Locations",
      "Up to 2 Hours",
      "Multiple Outfits",
      "Priority Editing",
      "Online Gallery",
    ],
  },
  {
    num: "03.",
    title: "The Experience",
    img: "/images/service-experience.jpg",
    body: `For graduates and families who want to fully celebrate a milestone years in the making.

This experience goes beyond portraits. We'll capture your journey, your accomplishments, your cap and gown, and the people who helped you get here. Designed to preserve this chapter before the next one begins.`,
    price: "$650",
    features: [
      "Multiple Locations",
      "Cap & Gown Session",
      "Family Photos Included",
      "Graduation Announcement Images",
      "Priority Editing",
      "Online Gallery",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section
        className="page-head"
        style={{
          backgroundImage: "url(/images/blue-sky-clouds.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 style={{ color: "var(--red)" }}>
            Explore our services and get in touch
          </h1>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <h2
            style={{
              color: "var(--red)",
              fontSize: "2.4rem",
              marginBottom: "40px",
            }}
          >
            Our Services
          </h2>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.num}>
                <Image src={s.img} alt={s.title} width={588} height={394} />
                <div className="service-body">
                  <span className="service-num">{s.num}</span>
                  <h2>{s.title}</h2>
                  <p>{s.body}</p>
                  <p className="service-price">{s.price}</p>
                  <div>
                    {s.features.map((f) => (
                      <p key={f}>&bull; {f}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="section section-sky">
        <div className="container">
          <div className="form-wrap">
            <h1 className="form-title">Service Inquiry</h1>
            <p className="form-intro">
              Fill in the form below to let us know which service you&rsquo;re
              interested in and how we can help - we&rsquo;ll get back to you as
              soon as possible.
            </p>
            <form
              action="https://formsubmit.co/info@mysite.com"
              method="POST"
            >
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
                <label htmlFor="service">Which service are you interested in?</label>
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
              <button type="submit" className="btn btn-blue">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
