import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      height: "100vh"
    }}>
      <button onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }>
        Toggle Theme
      </button>
    </div>
  );
}