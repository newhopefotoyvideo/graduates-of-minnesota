import Image from "next/image";

export const metadata = { title: "Portfolio | Graduates of Minnesota" };

const photos = Array.from({ length: 12 }, (_, i) => `/images/portfolio-${i + 1}.jpg`);

export default function Portfolio() {
  return (
    <>
      <section className="page-head sky">
        <div className="container">
          <h1>Portfolio</h1>
          <p className="lead">A Selection of Our Latest Projects</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="gallery">
            {photos.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Portfolio image ${i + 1}`}
                width={1000}
                height={1200}
                style={{ height: "auto" }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
