import { useEffect, useRef, useState } from "react";
import { navigation } from "../data.js";
import Icon from "./Icon.jsx";
import ContactButton from "./ContactButton.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export function Logo() {
  return (
    <a className="logo" href="#home" aria-label="ItsRayssa Rocha — início">
      <span className="logo-symbol" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" focusable="false">
          <path
            className="logo-chat-secondary"
            d="M21 3h9a8 8 0 0 1 8 8v14l-6-4H21a8 8 0 0 1-8-8v-2a8 8 0 0 1 8-8Z"
          />
          <path
            className="logo-chat-primary"
            d="M10 10h14a8 8 0 0 1 8 8v6a8 8 0 0 1-8 8H12l-10 6V18a8 8 0 0 1 8-8Z"
          />
          <path
            d="M11 19h12M11 25h8"
            stroke="#fffdfa"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>
        <span className="logo-its">its</span>rayssarocha
        <span className="logo-dot">.</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <ContactButton className="mobile-contact" highlight>
            Fale comigo
          </ContactButton>
        </nav>
        <div className="header-actions">
          <ContactButton className="header-contact" highlight>
            Fale comigo
          </ContactButton>
          <ThemeToggle />
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
