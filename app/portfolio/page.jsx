import Gallery from "@/components/Gallery";

export const metadata = { title: "Portfolio" };

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-head">
        <div className="container portfolio-head-inner">
          <h1>Portfolio</h1>
          <span className="sub">A Selection of Our Latest Projects</span>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </>
  );
}
