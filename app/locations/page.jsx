export const metadata = { title: "Locations | Graduates of Minnesota" };

const cityLocations = [
  {
    title: "🏙️ Stone Arch Bridge",
    place: "Minneapolis",
    desc: "Urban, iconic, and perfect for seniors who love city views and modern architecture.",
    link: true,
  },
  {
    title: "🌹 Lyndale Rose Garden",
    place: "Minneapolis",
    desc: "Romantic blooms, elegant pathways, and timeless portraits.",
    link: true,
  },
  {
    title: "🌻 Ritter Farm Park",
    place: "Lakeville",
    desc: "Fields, trails, and open skies for a more rustic feel.",
    link: true,
  },
];

const outdoorLocations = [
  {
    title: "🏛️ Minnesota State Capitol",
    place: "St. Paul",
    desc: "Classic architecture and sophisticated editorial portraits.",
  },
  {
    title: "🌊 Lake Minnetonka",
    place: "Minnesota",
    desc: "Golden sunsets, docks, and classic Minnesota lake vibes.",
  },
  {
    title: "🌿 Hidden Falls",
    place: "St. Paul",
    desc: "Natural, peaceful, and beautiful year-round.",
  },
];

function LocItem({ loc }) {
  return (
    <div className="loc-item">
      <div>
        <h3>{loc.title}</h3>
        <p>
          <span className="place">{loc.place}</span>
          {"\n"}
          {loc.desc}
        </p>
      </div>
      {loc.link ? (
        <a href="#">View Website</a>
      ) : (
        <a href="#" aria-label="View location">
          ↗
        </a>
      )}
    </div>
  );
}

export default function Locations() {
  return (
    <>
      <section className="page-head sky script-title">
        <div className="container">
          <h1>Explore Minnesota</h1>
          <p className="lead">
            Handpicked locations for graduates who want images as unique as their
            journey.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="loc-banner">
            <h2>Drawn to the City?</h2>
            <p>
              If you love coffee shops, architecture, fashion, and a more
              editorial look, downtown locations can add personality and energy
              to your session.
            </p>
          </div>
          <div className="loc-list">
            {cityLocations.map((loc) => (
              <LocItem key={loc.title} loc={loc} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="loc-banner">
            <h2>Love the Outdoors?</h2>
            <p>
              If you feel most yourself around lakes, trees, and open skies,
              choose a natural setting. Minnesota&rsquo;s parks and trails create
              timeless images that never go out of style.
            </p>
          </div>
          <div className="loc-list">
            {outdoorLocations.map((loc) => (
              <LocItem key={loc.title} loc={loc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
