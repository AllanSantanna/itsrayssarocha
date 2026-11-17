import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === "dark",
  );

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#1c1b19" : "#faf8f5");
    try {
      localStorage.setItem("itsrayssa-theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Modo escuro"
      aria-pressed={dark}
      title={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setDark((current) => !current)}
    >
      <Icon name={dark ? "sun" : "moon"} size={20} />
    </button>
  );
}
