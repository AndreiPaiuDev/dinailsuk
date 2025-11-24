"use client";

import React, { useState } from "react";

export default function Contact({ lang, t, phone }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

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

        {/* FORM */}
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            name="name"
            placeholder={t.contact.form.name}
            value={form.name}
            onChange={onChange}
          />
          <input
            name="email"
            placeholder={t.contact.form.email}
            value={form.email}
            onChange={onChange}
          />
          <textarea
            name="message"
            placeholder={t.contact.form.message}
            value={form.message}
            onChange={onChange}
          />
          <button type="submit" className="btn-primary">
            {t.contact.form.send}
          </button>

          {sent && <p className="form-success">{t.contact.form.success}</p>}
        </form>
      </div>
    </section>
  );
}
