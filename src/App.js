import Header from "./components.js/Header";
import Navbar from "./components.js/Navbar";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Footer from "./components.js/Footer";
import Services from "./components.js/Services";
// import Languages from "./components.js/Testimonials"; // Languages section hidden
import { useState } from "react";
import Timeline from "./components.js/Timeline";
import AppProvider from "./context";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <AppProvider>
      <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <About />
      <Timeline />
      <Services />

      <Contact />
      <Footer />
    </AppProvider>
  );
}

export default App;
