"use client";

import React, { useEffect, useState } from "react";

export default function Hero({ lang, t, phone }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCollapsed(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <section
      className={`hero hero-full-bg ${collapsed ? "hero--small" : "hero--full"}`}
      id="home"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <h1>{t.hero.title}</h1>
        <p className="lead">{t.hero.subtitle}</p>

        <a
          className="hero-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.hero.cta}
        </a>

        <p className="hours">{t.hero.hours}</p>
      </div>
    </section>
  );
}
