"use client";

import React from "react";
import Image from "next/image";

export default function Hero({ lang, t, phone }) {
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <section className="hero hero-full" id="home">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image-full"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="container hero-content">
        <span className="hero-tag">{t.hero.hours}</span>
        <h1>{t.hero.title}</h1>
        <p className="lead">{t.hero.subtitle}</p>

        <div className="hero-actions">
          <a
            className="hero-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.hero.cta}
          </a>
          <a className="hero-btn ghost" href="#services">
            {t.menu.services}
          </a>
        </div>

        <p className="hours">{t.hero.hours}</p>
      </div>
    </section>
  );
}
