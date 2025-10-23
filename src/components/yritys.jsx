import React from "react";
import styles from "../styles/yritys.module.css";

export default function Yritys() {
    return (
        <section className={styles.yritysHero} role="region" aria-label="Yritys">
            <div className={styles.yritysRight}>
                <div className={styles.yritysContent}>
                    <h1>Yksilölliset saunat ja puusepän mittatilaustyöt</h1>

                    <p className={styles.lead}>
                        MrSauna on kotimainen rakentamis-, remontointi- ja kalusteasennuspalveluita tarjoava yritys.
                        Palvelemme asiakkaita yli 30 vuoden kokemuksella pääkaupunkiseudulla ja Uudellamaalla. Vahvuutenamme
                        on puusepäntyönä tehtävät uniikit saunat sekä muut mittatilaustyöt. Teemme yksilölliset
                        saunasuunnitelmat ja lauderatkaisut aina asiakkaan toivomusten ja tarpeiden mukaan.
                    </p>


                    <p>
                        <b>Meillä on taito nähdä ratkaisu vaativiinkin kohteisiin. </b>
                        Teemme paikan päällä vaativia puusepäntöitä myös valmiisiin ratkaisuihin. Suunnittelemme ja toteutamme
                        ratkaisun alusta loppuun saakka ottaen huomioon sen toimivuuden ja visuaalisuuden ympäristöön. Työmme jälki
                        on aina priimaa – ammattilaisen näkemystä ja kädentaitoa.
                    </p>
                </div>
            </div>
        </section>
    );
}