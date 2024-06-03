"use client";

import { useState, useEffect } from "react";
import "./cookiesBar.scss";

const CookieBar = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split("; ")
      .find(row => row.startsWith("cookiesAccepted="));

    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  };

  const handleAcceptAll = () => {
    setCookie("cookiesAccepted", "true", 365);
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    setCookie("cookiesAccepted", "false", 365);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookies-banner">
      <p>
        Tento web používá cookies, aby vám poskytl lepší zážitek. Kliknutím na
        &#34;Souhlasím&#34; povolíte všechny cookies, což nám pomáhá s analýzou a
        vylepšením našich služeb.
      </p>
      <button onClick={handleAcceptAll} className="cookies-button accepted">
        Souhlasím
      </button>
      <button onClick={handleAcceptEssential} className="cookies-button">
        Pouze nezbytné
      </button>
    </div>
  );
};

export default CookieBar;
