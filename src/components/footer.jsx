import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.title}>Yhteystiedot</h2>
        <div className={styles.contactDetails}>
          <p>MrSauna</p>
          <p>Haarssinkuja 10</p>
          <p>02970 ESPOO</p>
        </div>
        <div className={styles.contactInfo}>
          <p>
            Sähköposti:{" "}
            <a href="mailto:myynti@mrsauna.fi" className={styles.highlight}>
              myynti@mrsauna.fi
            </a>
          </p>
          <p>
            Puhelin:{" "}
            <a href="tel:0291702222" className={styles.highlight}>
              029 170 2222
            </a>
          </p>
          <p>Y-tunnus: 2164017-0</p>
        </div>
        <img src="/LK_valkoinen_rgb.webp" alt="" />
        <a
          href="https://www.facebook.com/www.mrsauna.fi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.facebookIcon}
        >
          f
        </a>
      </div>
    </footer>
  );
};

export default Footer;
