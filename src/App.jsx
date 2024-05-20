import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  // Dummy projects data
  const projects = [
    {
      image: "src/assets/assets/placeholder.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin magna nec nulla facilisis,",
    },
    {
      image: "src/assets/assets/placeholder.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin magna nec nulla facilisis,",
    },
    {
      image: "src/assets/assets/placeholder.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin magna nec nulla facilisis,",
    },
  ];

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (e, section) => {
    e.preventDefault();
    switch (section) {
      case "landing":
        landingRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1c1c1e, #2b2b2f)",
        minHeight: "100vh",
      }}>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={landingRef}>
        <Landing />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects projects={projects} />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
