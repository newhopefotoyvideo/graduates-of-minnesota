// ─────────────────────────────────────────────────────────────────────────
// Shared home copy. All four home layouts (v1–v4) pull their words from here
// so the message stays identical across designs — only the layout changes.
// Wording is client-locked; edit here to update every version at once.
// ─────────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Class of 2027",
  title: "Graduates of Minnesota!",
  script: "Lets Celebrate Photos That Tell Your Story",
  serving: "Serving Minneapolis, Saint Paul and Greater Minnesota",
  cta: { label: "Book a Session", href: "/contact" },
};

export const nextChapter = {
  eyebrow: "Your Story",
  title: "Your Next Chapter is About to Begin",
  body: "Your senior year only happens once. Whether you’re graduating from high school, college, trade school, or graduate school, we’ll create images that celebrate your journey and preserve this milestone for years to come.",
  experience: {
    heading: "The Experience",
    lead: "Before & during your session",
    detail:
      "Natural posing · Fun & relaxed atmosphere · Multiple outfit changes · Location guidance · Outfit assistance · Personalized planning",
  },
  investment: {
    heading: "The Investment",
    lead: "Senior Sessions Starting at",
    price: "$250",
  },
  cta: { label: "Book Now", href: "/services" },
};

export const chapter = {
  title: "A Chapter",
  script: "Worth Remembering",
  paragraphs: [
    "For years, you’ve worked toward this moment. Late nights studying, early mornings, challenges overcome, friendships made, and memories that will last a lifetime. Graduation is more than a ceremony—it’s proof of how far you’ve come and a celebration of everything you’ve become.",
    "Whether you’re finishing high school, college, trade school, or graduate school, this milestone deserves to be remembered. These photographs aren’t just for today; they’re for the years ahead when you look back and remember the excitement, pride, and possibility that filled this season of life.",
    "The future is waiting, and your story is just beginning. Let’s create images that honor your journey and capture this incredible chapter exactly as it feels.",
  ],
};

export const parents = {
  eyebrow: "For Families",
  title: "To The Parents",
  body: "Whether your senior is outgoing or reserved, our goal is to create a comfortable experience where they can simply be themselves. We understand that not everyone feels confident in front of a camera, which is why we gently guide each session with patience, encouragement, and care.",
  cta: { label: "Book Now", href: "/services" },
};

export const celebration = {
  eyebrow: "The Milestone",
  title: "A Celebration Years In The Making",
  quote:
    "Graduation isn’t just about a diploma. it’s about every late night, every challenge overcome, every friendship made, and every dream that brought you here.",
  cols: [
    {
      heading: "For The Graduate",
      body: "A chance to celebrate who you’ve become before stepping into what’s next.",
    },
    {
      heading: "For The Family",
      body: "A collection of memories that will only grow more meaningful with time.",
    },
  ],
  cta: { label: "Explore Sessions", href: "/services" },
};

// Placeholder testimonials — swap for the client's real client quotes later.
export const testimonials = [
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

export const questions = {
  title: "You’ve Got Questions…",
  body: "We know booking senior photos comes with questions. From outfit choices and locations to what happens if you’re camera shy, we’ve gathered our most common answers below to help you feel confident and prepared.",
  cta: { label: "Get the Answers", href: "/faq" },
};
