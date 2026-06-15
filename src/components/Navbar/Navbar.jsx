import React from "react";
import "./navbar.css";
import { useTheme } from "../../hooks/useTheme";

const NAV_ITEMS = [
  { num: "00", label: "home",       href: "#home" },
  { num: "01", label: "experience", href: "#experience" },
  { num: "02", label: "stack",      href: "#stack" },
  { num: "03", label: "about",      href: "#about" },
  { num: "04", label: "open source", href: "#open-source" },
  { num: "05", label: "contact",    href: "#contact" },
];

const Navbar = ({ activeSection }) => {
  const { theme, setTheme } = useTheme();

  const jump = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#home" onClick={(e) => { e.preventDefault(); jump("#home"); }}>
          ~/airton-canale <span className="navbar__logo-date">— updated 06.2026</span>
        </a>

        <nav>
          <ul className="navbar__links">
            {NAV_ITEMS.map(({ num, label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={["navbar__link", activeSection === href.replace("#", "") && "navbar__link--active"].filter(Boolean).join(" ")}
                  onClick={(e) => { e.preventDefault(); jump(href); }}
                >
                  <span className="navbar__num">{num}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar__theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          title="Toggle theme (t)"
          aria-label="Toggle theme"
        >
          <span className="navbar__theme-circle" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
