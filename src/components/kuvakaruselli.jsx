import styles from "../styles/kuvakaruselli.module.css";
import ImageSlider from "./imageslider.jsx";

export default function Kuvakaruselli({ title, images }) {
  // Support two modes:
  // 1) If `title` and `images` props are provided (App.jsx usage), render a
  //    single compact slider box using those images.
  // 2) Otherwise render the original three-slider section (backwards compat).
  const isSingle = Array.isArray(images) && title;

  const saunaImages = [
    "/Sauna/Saunan-lauteet_lampokasitelty-haapa-1.jpg",
    "/Sauna/Saunan-lauteet_lampokasitelty-haapa-2.jpg",
    "/Sauna/Saunan-lauteet_musta-sormipaneeli-1.jpeg",
    "/Sauna/Saunan-lauteet_saunan-kiviseina-1.jpeg",
    "/Sauna/Saunan-lauteet_saunan-kiviseina-2.jpeg",
    "/Sauna/Saunan-lauteet_varjatty-haapa.jpeg",
  ];

  const keittioImages = [
    "/Keittiö/Keittio_kiiltava-ovi.jpg",
    "/Keittiö/Keittio_musta-valko.jpg",
    "/Keittiö/Keittio_Nanopinta.jpg",
    "/Keittiö/Keittio_puunvari-valkoinen.jpg",
    "/Keittiö/Keittio_tupla-I.jpg",
  ];

  const remonttiImages = [
    "/Remontti/Aamiaiskaappi.jpg",
    "/Remontti/Ikkunakuilu.jpg",
    "/Remontti/Lampokasitelty-haapa_katto.jpg",
    "/Remontti/Saarekevitriini-1.jpg",
    "/Remontti/Sormipaneeli.jpg",
  ];

  if (isSingle) {
    // Normalize images: App.jsx passes objects with { src, srcSet, sizes, alt }
    const normalized = images.map((img) =>
      typeof img === "string" ? img : img.src
    );
    return (
      <div className={styles.sliderBox}>
        <ImageSlider images={normalized} title={title} />
      </div>
    );
  }

  return (
    <section id="kuvakaruselli" className={styles.servicesSection}>
      <div className={styles.sliderGrid}>
        <ImageSlider images={saunaImages} title="Saunat" />
        <ImageSlider images={keittioImages} title="Keittiöt" />
        <ImageSlider
          images={remonttiImages}
          title="Remontti- ja mittatilaustyöt"
        />
      </div>
    </section>
  );
}
