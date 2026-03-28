import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
    <div
    style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}
    >
    <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </div>
);
}

export default App;