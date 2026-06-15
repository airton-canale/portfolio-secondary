import { useEffect, useState } from "react";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Stack from "./components/Stack/Stack";
import About from "./components/About/About";
import OpenSource from "./components/OpenSource/OpenSource";
import Contact from "./components/Contact/Contact";

const SECTIONS = ["home", "experience", "stack", "about", "open-source", "contact"];

function App() {
  const { setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Keyboard shortcuts */
  useEffect(() => {
    const jump = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "t" || e.key === "T") {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }
      const idx = parseInt(e.key, 10);
      if (!isNaN(idx) && idx >= 0 && idx <= 5) {
        jump(SECTIONS[idx]);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setTheme]);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Home />
      <Experience />
      <Stack />
      <About />
      <OpenSource />
      <Contact />
    </div>
  );
}

export default App;
