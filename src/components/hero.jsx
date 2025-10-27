import React, { useEffect, useRef } from "react";
import styles from "../styles/hero.module.css";

export default function Hero({ className = "" }) {
  const heroRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return; // throttle via rAF
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || window.pageYOffset || 0;
        const offset = Math.max(0, y * 0.001);
        if (heroRef.current) {
          heroRef.current.style.setProperty("--bg-y", `${-offset}px`);
          heroRef.current.style.setProperty(
            "--content-shift",
            `${offset * 0.02}px` // was 0.2
          );
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize with current position
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${className}`}
      role="banner"
      aria-label="Hero"
    >
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>MRsauna</h1>
          <p className={styles.subtitle}>Puusepän mittatilaustyöt</p>
        </div>
      </div>
    </section>
  );
}
