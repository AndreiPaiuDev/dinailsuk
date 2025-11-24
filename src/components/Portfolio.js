"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Portfolio({ lang, t }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = t.portfolio.items;

  const handleOpen = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  const activeItem =
    activeIndex !== null &&
    activeIndex >= 0 &&
    activeIndex < items.length
      ? items[activeIndex]
      : null;

  return (
    <section className="portfolio container">
      <h2>{t.portfolio.title}</h2>
      <p className="section-sub">{t.portfolio.subtitle}</p>

      <div className="portfolio-grid">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            className="portfolio-item"
            onClick={() => handleOpen(i)}
          >
            <Image
              src={`/portfolio${i + 1}.jpg`}
              alt={it.title}
              width={800}
              height={600}
              className="portfolio-img"
            />
            <div className="caption">{it.title}</div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="portfolio-modal-backdrop" onClick={handleClose}>
          <div
            className="portfolio-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="portfolio-modal-close"
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>

            <Image
              src={`/portfolio${activeIndex + 1}.jpg`}
              alt={activeItem.title}
              width={1200}
              height={900}
              className="portfolio-modal-img"
            />

            <div className="portfolio-modal-caption">
              {activeItem.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
