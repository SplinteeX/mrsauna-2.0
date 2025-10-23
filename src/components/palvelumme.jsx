import React from 'react'
import styles from '../styles/palvelumme.module.css'

export default function Palvelumme() {
  const services = [
    'Yksilölliset saunat',
    'Sauna- ja kylpyhuoneremontit',
    'Keittiöremontit',
    'Maalaus- ja tasoitetyöt',
    'Sisälaatoitukset',
    'Kaikki puusepän mittatilaustyöt',
    'Huoneistoremontit',
    'Kalusteasennukset',
    'Lattia-asennukset',
    'Ulkoterassien suunnittelu ja toteutus',
  ]

  // split into two columns
  const left = services.filter((_, i) => i % 2 === 0)
  const right = services.filter((_, i) => i % 2 === 1)

  return (
    <section className={styles.section} aria-label="Palvelumme">
      <div className={styles.inner}>
        <div className={styles.mediaWrap}>
          <img src="/Saunanlauteet_haapa3.webp" alt="Sauna" className={styles.photo} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Palvelumme</h2>

          <div className={styles.grid}>
            <ul className={styles.col}>
              {left.map((s) => (
                <li key={s} className={styles.item}>✓ {s}</li>
              ))}
            </ul>
            <ul className={styles.col}>
              {right.map((s) => (
                <li key={s} className={styles.item}>✓ {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
