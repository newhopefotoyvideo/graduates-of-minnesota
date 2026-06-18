import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export const metadata = { title: "Inquiry Services Page" };

const packages = [
  {
    num: "01.",
    title: "The Classic",
    img: images.services.classic,
    price: "$250",
    body: "Perfect for graduates who want a simple and meaningful way to celebrate this milestone. One location, two outfits, and plenty of time to create beautiful portraits that capture who you are right now. Ideal for yearbook updates, announcements, and celebrating your accomplishments.",
    features: ["1 Location", "1 Hour", "2 Outfits", "Online Gallery"],
    featured: false,
  },
  {
    num: "02.",
    title: "The Signature",
    img: images.services.signature,
    price: "$450",
    body: "Our most popular experience for graduates who want variety, creativity, and a session that truly tells their story. With multiple locations and outfit changes, we'll create a gallery full of personality, style, and memories you'll treasure long after graduation day.",
    features: [
      "2 Locations",
      "Up to 2 Hours",
      "Multiple Outfits",
      "Priority Editing",
      "Online Gallery",
    ],
    featured: true,
  },
  {
    num: "03.",
    title: "The Experience",
    img: images.services.experience,
    price: "$650",
    body: "For graduates and families who want to fully celebrate a milestone years in the making. This experience goes beyond portraits. We'll capture your journey, your accomplishments, your cap and gown, and the people who helped you get here. Designed to preserve this chapter before the next one begins.",
    features: [
      "Multiple Locations",
      "Cap & Gown Session",
      "Family Photos Included",
      "Graduation Announcement Images",
      "Priority Editing",
      "Online Gallery",
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section className="services-page">
      <div className="container">
        <Reveal className="services-intro">
          <p className="services-eyebrow script">
            Explore our services and get in touch
          </p>
          <p className="services-h script">Our Services</p>
        </Reveal>

        <div className="packages">
          {packages.map((p, i) => (
            <Reveal
              as="article"
              className={`pkg ${p.featured ? "featured" : ""}`}
              key={p.title}
              delay={i * 100}
            >
              {p.featured && <span className="pkg-badge">Most Popular</span>}
              <div className="pkg-img">
                <Image src={p.img.src} alt={p.img.alt} width={588} height={394} />
              </div>
              <div className="pkg-body">
                <span className="pkg-num">{p.num}</span>
                <p className="pkg-title script">{p.title}</p>
                <p className="pkg-price">{p.price}</p>
                <p className="pkg-desc">{p.body}</p>
                <ul className="pkg-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${p.featured ? "btn-red" : "btn-blue"}`}
                >
                  Book {p.title}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="form-wrap" style={{ marginTop: "clamp(48px, 7vw, 90px)" }}>
          <p className="form-title script">Service Inquiry</p>
          <p className="form-intro">
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
            <button type="submit" className="btn btn-blue" style={{ width: "100%" }}>
              Send Request
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
