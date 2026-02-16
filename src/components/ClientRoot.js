"use client"

import React, { useEffect, useState } from "react";
import translations from "./translations";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import "../app/styles.css";

const PHONE = "+447366474474"; // without +

export default function ClientRoot({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("na_lang")) || null;
    if (saved) setLang(saved);
    else {
      const nav = typeof navigator !== "undefined" ? navigator.language || navigator.userLanguage : "en";
      setLang(nav && nav.startsWith("ro") ? "ro" : "en");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("na_lang", lang);
  }, [lang]);

  return (
    <div className="site-root" data-lang={lang}>
      <Header
        lang={lang}
        setLang={setLang}
        t={translations[lang]}
        phone={PHONE}
      />

      <main>
        <section id="home">
          <Hero lang={lang} t={translations[lang]} phone={PHONE} />
        </section>

        <section id="services">
          <Services lang={lang} t={translations[lang]} />
        </section>

        <section id="portfolio">
          <Portfolio lang={lang} t={translations[lang]} />
        </section>

        <section id="contact">
          <Contact lang={lang} t={translations[lang]} />
        </section>
      </main>

      <Footer lang={lang} t={translations[lang]} />

      {children}
    </div>
  );
}
