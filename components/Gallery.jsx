"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { portfolio, portfolioCategories } from "@/lib/images";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index into `shown` or null

  const shown =
    filter === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + shown.length) % shown.length)),
    [shown.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry">
        {shown.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className="masonry-item"
            onClick={() => setLightbox(i)}
            aria-label={`Open ${p.alt}`}
          >
            <Image src={p.src} alt={p.alt} width={800} height={1000} sizes="(max-width:560px) 100vw, (max-width:980px) 50vw, 33vw" />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lb-btn lb-close" aria-label="Close" onClick={close}>
            ✕
          </button>
          <button
            className="lb-btn lb-prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <Image
            src={shown[lightbox].src}
            alt={shown[lightbox].alt}
            width={1200}
            height={1500}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lb-btn lb-next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
          <span className="lb-count">
            {lightbox + 1} / {shown.length}
          </span>
        </div>
      )}
    </>
  );
}
