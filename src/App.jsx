import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Yritys from './components/yritys'
import Remontti from './components/remontti'
import Palvelumme from './components/palvelumme'
import Kuvakaruselli from './components/kuvakaruselli'

function App() {
  return (
    <>
      <Navbar /> 
      <Hero />
      <Yritys />
      <Remontti />
      <Palvelumme />
      <div style={{padding: '2rem 1rem'}}>
        <div style={{maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'start'}}>
          <Kuvakaruselli
            title="Saunat"
            images={[
              {
                src: "/Sauna/Saunanlauteet_haapa1.jpg",
                srcSet: "/Sauna/Saunanlauteet_haapa1.jpg 1x, /Sauna/Saunanlauteet_haapa1.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Saunanlauteet haapa 1"
              },
              {
                src: "/Sauna/Saunanlauteet_haapa2.jpg",
                srcSet: "/Sauna/Saunanlauteet_haapa2.jpg 1x, /Sauna/Saunanlauteet_haapa2.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Saunanlauteet haapa 2"
              },
              {
                src: "/Sauna/Saunanlauteet_haapa3.jpg",
                srcSet: "/Sauna/Saunanlauteet_haapa3.jpg 1x, /Sauna/Saunanlauteet_haapa3.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Saunanlauteet haapa 3"
              },
            ]}
          />

          <Kuvakaruselli
            title="Keittiöt"
            images={[
              {
                src: "/Keittiö/Keittio_puunvari-valkoinen.jpg",
                srcSet: "/Keittiö/Keittio_puunvari-valkoinen.jpg 1x, /Keittiö/Keittio_puunvari-valkoinen.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Keittiö puunväri valkoinen"
              },
              {
                src: "/Keittiö/Keittio_kiiltava-ovi.jpg",
                srcSet: "/Keittiö/Keittio_kiiltava-ovi.jpg 1x, /Keittiö/Keittio_kiiltava-ovi.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Keittiö kiiltävä ovi"
              },
              {
                src: "/Keittiö/Keittio_vaalea-kivitaso.jpg",
                srcSet: "/Keittiö/Keittio_vaalea-kivitaso.jpg 1x, /Keittiö/Keittio_vaalea-kivitaso.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Keittiö vaalea kivitaso"
              },
            ]}
          />

          <Kuvakaruselli
            title="Remontti- ja mittatilaustyöt"
            images={[
              {
                src: "/Remontti/Ikkunakuilu.jpg",
                srcSet: "/Remontti/Ikkunakuilu.jpg 1x, /Remontti/Ikkunakuilu.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Ikkunakuilu"
              },
              {
                src: "/Remontti/Saarekevitriini-1.jpg",
                srcSet: "/Remontti/Saarekevitriini-1.jpg 1x, /Remontti/Saarekevitriini-1.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Saarekevitriini"
              },
              {
                src: "/Remontti/Vinokattokeittio-1.jpg",
                srcSet: "/Remontti/Vinokattokeittio-1.jpg 1x, /Remontti/Vinokattokeittio-1.jpg 2x",
                sizes: "(max-width: 720px) 140px, 300px",
                alt: "Vinokattokeittiö"
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
