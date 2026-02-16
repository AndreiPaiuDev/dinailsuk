"use client";

import React from "react";

export default function Contact({ lang, t }) {
  const addressText = t.contact.info.address || "";
  const addressQuery = addressText
    .replace(/^address:\s*/i, "")
    .replace(/^adresă:\s*/i, "")
    .replace(/^adresa:\s*/i, "");
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    addressQuery
  )}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressQuery
  )}`;

  return (
    <section className="contact container">
      <h2>{t.contact.title}</h2>
      <p className="section-sub">{t.contact.subtitle}</p>

      <div className="contact-grid">

        {/* INFO CARD */}
        <div className="contact-info">

          <p><span className="ci-icon">📞</span> {t.contact.info.phone}</p>
          <p><span className="ci-icon">💬</span> {t.contact.info.whatsapp}</p>
          <p><span className="ci-icon">📍</span> {t.contact.info.address}</p>
          <p><span className="ci-icon">⏰</span> {t.contact.info.hours}</p>

        </div>

        {/* MAP */}
        <div className="contact-map" aria-label="Map">
          <iframe
            className="map-frame"
            title="Map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          <div className="map-actions">
            <a
              className="map-link"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.mapCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
