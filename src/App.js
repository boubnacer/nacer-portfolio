import Header from "./components.js/Header";
import Navbar from "./components.js/Navbar";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Footer from "./components.js/Footer";
import Services from "./components.js/Services";
import Testimonials from "./components.js/Testimonials";
import { useState } from "react";
import Timeline from "./components.js/Timeline";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <>
      <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <About />
      <Timeline />
      <Services />

      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
