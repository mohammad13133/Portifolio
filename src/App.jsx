import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
import Services from "./assets/components/Services";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import ScrollReveal from "scrollreveal";
import About from "./assets/components/About";

function App() {
  useEffect(() => {
    // General animation from the top
    const srTop = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 800,
      delay: 200,
      reset: true,
    });

    srTop.reveal(".reveal-top", {
      interval: 200,
    });
    srTop.reveal(".reveal-top-about", {
      interval: 200,
    });

    srTop.reveal(".reveal-top-services");
    srTop.reveal(".reveal-top-projects");
    srTop.reveal(".reveal-top-contact");

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "50px",
      duration: 800,
      delay: 200,
      reset: true,
    });
    srLeft.reveal(".reveal-left");
    srLeft.reveal(".reveal-left-about");
    srLeft.reveal(".reveal-left-projects", {
      interval: 200,
    });
    srLeft.reveal(".reveal-left-contact", {
      interval: 200,
    });
    const srBottom = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: 200,
      reset: true,
    });
    srBottom.reveal(".reveal-bottom", {
      interval: 200,
    });
    srBottom.reveal(".reveal-bottom-contact", {
      interval: 200,
    });
    const srRight = ScrollReveal({
      origin: "right",
      distance: "50px",
      duration: 800,
      delay: 200,
      reset: true,
    });
    srRight.reveal(".reveal-right-contact", {
      interval: 200,
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
