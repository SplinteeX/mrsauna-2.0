import React from "react";
import styles from "../styles/remontti.module.css";

// src/components/remontti.jsx
export default function Remontti() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Sisäremonttipalvelut ja ulkoterassit</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Hoidamme koko huoneistoremontin tai voit tilata meidät tekemään
              tarvitsemasi huoneiston osaremontin, kuten keittiö- tai
              märkätilaremontin. Meille mikään työ ei ole liian pieni, joten
              teemme mm. kaluste- ja lattia-asennuksia sekä sisälaatoituksia
              myös erillistöinä. Suunnittelemme ja rakennamme myös upeat
              ulkoterassit kesänviettoon.
            </p>
            <p>Kysy siis lisää, niin kerromme, kuinka voimme palvella!</p>
          </div>
          <div className={styles.images}>
            <img
              src="./Lattiatyo.webp"
              alt="Remontti esimerkki 1"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
