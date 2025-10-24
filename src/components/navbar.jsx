import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/mrsauna-logo.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <ul className={styles.links}>
          <li>
            <a href="#etusivu" onClick={(e) => handleLinkClick(e, "etusivu")}>
              Etusivu
            </a>
          </li>
          <li>
            <a href="#yritys" onClick={(e) => handleLinkClick(e, "yritys")}>
              Yritys
            </a>
          </li>
          <li>
            <a
              href="#palvelumme"
              onClick={(e) => handleLinkClick(e, "palvelumme")}
            >
              Palvelumme
            </a>
          </li>
          <li>
            <a
              href="#yhteystiedot"
              onClick={(e) => handleLinkClick(e, "yhteystiedot")}
            >
              Yhteystiedot
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
