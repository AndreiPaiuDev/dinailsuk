"use client"

import React from "react";

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <select
      className="lang-switch"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      aria-label="Select language"
    >
      <option value="en">EN</option>
      <option value="ro">RO</option>
    </select>
  );
}
