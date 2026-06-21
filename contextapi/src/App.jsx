import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext.jsx";

function App() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "#fff" : "#222",
        color:
          theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>{theme.toUpperCase()} MODE</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;