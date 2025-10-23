import React from "react";
import styles from "../styles/hero.module.css";

export default function Hero({ className = "" }) {
    return (
        <section
            className={`${styles.hero} ${className}`}
            role="banner"
            aria-label="Hero"
        >
            <div className={styles.heroInner}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>MRsauna</h1>
                    <p className={styles.subtitle}>käsityönä kodin parhaat tilat</p>+
                </div>
            </div>
        </section>
    );
}