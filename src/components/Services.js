"use client"

import React from "react";

export default function Services({ lang, t }) {
  return (
    <section className="services container">
      <h2>{t.services.title}</h2>
      <p className="section-sub">{t.services.subtitle}</p>

      <div className="services-grid">
        {t.services.items.map((item, idx) => (
          <div key={idx} className="service-card">
            <h3>{item.name}</h3>
            <ul className="service-list">
              {item.list.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
            <p className="service-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="services-note">{t.services.note}</p>
    </section>
  );
}
