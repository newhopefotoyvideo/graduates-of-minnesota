"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What should I wear?",
    a: "Choose outfits that feel like you. We recommend solid colors, layers, and pieces you’ll still love years from now. Once booked, we’ll send a style guide with outfit tips.",
  },
  {
    q: "What if I’m awkward in front of the camera?",
    a: "Perfect. Most of our seniors say this before their session! We’ll guide you through poses and prompts so you never have to wonder what to do.",
  },
  {
    q: "Can I bring props?",
    a: "Absolutely! Caps and gowns, sports equipment, instruments, books, flowers, pets, college gear, and anything meaningful to your story are welcome.",
  },
  {
    q: "How do I choose a location?",
    a: "We’ll help! Whether you’re drawn to city views, lakes, gardens, or your school campus, we’ll recommend locations that fit your personality and vision.",
  },
  {
    q: "Can my family join for a few photos?",
    a: "Yes! Family photos can be added to your session, or they’re included in our “The Experience” package.",
  },
  {
    q: "What happens if it rains?",
    a: "Minnesota weather keeps us on our toes. If conditions aren’t ideal, we’ll reschedule at no additional charge.",
  },
  {
    q: "How long does it take to receive my photos?",
    a: "Most galleries are delivered within 2–3 weeks, with sneak peeks often shared sooner.",
  },
  {
    q: "Do you photograph college graduates too?",
    a: "Yes! We photograph high school, college, trade school, graduate school, and professional program graduates.",
  },
  {
    q: "How do I book?",
    a: "Simply fill out our inquiry form and we’ll reach out to discuss your vision, package selection, and available dates.",
  },
  {
    q: "How far in advance should I book?",
    a: "Spring and fall dates fill quickly. We recommend booking 1–3 months in advance for the best availability.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="page-head sky script-title sage">
        <div className="container">
          <h1>Your Questions Answered</h1>
          <p className="lead">
            All the nitty-gritty details you might need. If you have a question
            that isn&rsquo;t answered here, feel free to reach out to us!
          </p>
        </div>
      </section>

      <section className="section bg-sky">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{item.q}</span>
                  <span className="icon">{open === i ? "–" : "+"}</span>
                </button>
                {open === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
