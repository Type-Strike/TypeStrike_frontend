import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "MODES", action: "scroll-modes" as const },
  { label: "LEADERBOARD", path: "/leaderboard" },
  { label: "ABOUT", action: "about" as const },
];

export default function LandingNavbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNav = useCallback(
    (link: (typeof NAV_LINKS)[number]) => {
      if ("path" in link && link.path) {
        navigate(link.path);
      } else if ("action" in link && link.action === "scroll-modes") {
        document
          .getElementById("game-modes")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    [navigate],
  );

  /* close on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  /* close on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className="ln-navbar" role="banner">
      <div className="ln-navbar__inner">
        {/* brand */}
        <button
          className="ln-navbar__brand"
          onClick={() => navigate("/")}
          aria-label="TypeStrike home"
        >
          <span className="ln-navbar__brand-icon" aria-hidden="true">⚔</span>
          <span className="ln-navbar__brand-text">
            TYPE<span className="ln-navbar__brand-gold">STRIKE</span>
          </span>
        </button>

        {/* desktop links */}
        <nav className="ln-navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <button key={l.label} className="ln-navbar__link" onClick={() => handleNav(l)}>
              {l.label}
            </button>
          ))}
        </nav>

        {/* auth */}
        <div className="ln-navbar__auth">
          <button className="ln-navbar__btn ln-navbar__btn--ghost" onClick={() => navigate("/login")}>
            LOG IN
          </button>
          <button className="ln-navbar__btn ln-navbar__btn--gold" onClick={() => navigate("/login")}>
            SIGN UP
          </button>
        </div>

        {/* hamburger */}
        <button
          className="ln-navbar__burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`ln-navbar__burger-bars ${menuOpen ? "ln-navbar__burger-bars--open" : ""}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* mobile drawer */}
      {menuOpen && (
        <div className="ln-mobile-menu" ref={menuRef} role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map((l) => (
            <button key={l.label} className="ln-mobile-menu__link" onClick={() => handleNav(l)}>
              {l.label}
            </button>
          ))}
          <div className="ln-mobile-menu__sep" />
          <button className="ln-mobile-menu__link" onClick={() => { navigate("/login"); setMenuOpen(false); }}>
            LOG IN
          </button>
          <button className="ln-mobile-menu__link ln-mobile-menu__link--gold" onClick={() => { navigate("/login"); setMenuOpen(false); }}>
            SIGN UP
          </button>
        </div>
      )}
    </header>
  );
}
