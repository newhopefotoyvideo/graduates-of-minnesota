import Image from "next/image";

export const metadata = { title: "Portfolio | Graduates of Minnesota" };

const photos = Array.from({ length: 12 }, (_, i) => `/images/portfolio-${i + 1}.jpg`);

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
          <div className="gallery">
            {photos.map((src, i) => (
              <div className="cell" key={src}>
                <Image
                  src={src}
                  alt={`Portfolio image ${i + 1}`}
                  width={600}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
