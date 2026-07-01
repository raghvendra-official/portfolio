import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import "../styles/Navbar.css";

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "#home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">&lt;RP/&gt;</span>
        </a>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>

          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? "active-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
          </li>

        </ul>

      </nav>
    </header>
  );
}
