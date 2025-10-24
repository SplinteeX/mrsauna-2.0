import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Yritys from "./components/yritys";
import Remontti from "./components/remontti";
import Palvelumme from "./components/palvelumme";
import Kuvakaruselli from "./components/kuvakaruselli";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Yritys />
      <Remontti />
      <Palvelumme />
      <Kuvakaruselli />
      <Footer />
    </>
  );
}

export default App;
