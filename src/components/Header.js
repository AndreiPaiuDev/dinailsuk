"use client"

import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang, setLang, t }) {
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
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}
