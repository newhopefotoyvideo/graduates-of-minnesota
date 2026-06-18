"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can I bring a plus one to the wedding?",
    a: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
  },
  {
    q: "Is there an open bar?",
    a: "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
  },
  {
    q: "What is the RSVP deadline, and how do I respond?",
    a: "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
  },
  {
    q: "Are children allowed at the wedding?",
    a: "To edit or remove this FAQ, head to your site dashboard and add your own common questions and answers so visitors can find what they need quickly.",
  },
  {
    q: "Will transportation be provided to the wedding venue?",
    a: "Add as many FAQs as you like. Group them by topic to help visitors browse the questions that matter most to them.",
  },
  {
    q: "What is the best way to get to the hotel from the airport?",
    a: "Provide clear, concise answers so visitors can feel confident and prepared before reaching out to you.",
  },
  {
    q: "Will parking be available at the wedding venue?",
    a: "FAQs help reduce repetitive questions and give your visitors the information they need on their own schedule.",
  },
  {
    q: "Are there alternative accommodation options nearby?",
    a: "Use this space to share helpful details, recommendations, and anything else your visitors may want to know.",
  },
  {
    q: "Will vegetarian or special dietary meals be available at the wedding?",
    a: "Answer the questions your visitors ask most so they can plan ahead with confidence.",
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
