import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
  marginLeft: "30px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "1px solid var(--nav-text)",
  background: "transparent",
  color: "var(--nav-text)",
  cursor: "pointer",
  fontSize: "20px",
  textAlign: "center",   // horizontal centering
  lineHeight: "40px",    // vertical centering (same as height)
}}

      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaSun style={{ color: "#FFD700" }} />
      ) : (
        <FaMoon style={{ color: "#A0AEC0" }} />
      )}
    </button>
  );
}
