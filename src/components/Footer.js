"use client"

import React from "react";

export default function Footer({ lang, t }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="foot-left">
          <p className="foot-text">{t.footer.text}</p>
          <p className="foot-sub">{t.footer.sub}</p>
        </div>
        <div className="foot-right">
          <a href="#home">{t.menu.home}</a>
          <a href="#services">{t.menu.services}</a>
          <a href="#portfolio">{t.menu.portfolio}</a>
          <a href="#contact">{t.menu.contact}</a>
        </div>
      </div>
    </footer>
  );
}
