"use client"

import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang, setLang, t, phone }) {
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <a href="#home">{t.brand}</a>
        </div>

        <nav className="nav">
          <a href="#home">{t.menu.home}</a>
          <a href="#services">{t.menu.services}</a>
          <a href="#portfolio">{t.menu.portfolio}</a>
          <a href="#contact">{t.menu.contact}</a>
        </nav>

        <div className="header-right">
          <a
            className="header-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.hero.cta}
          </a>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}
