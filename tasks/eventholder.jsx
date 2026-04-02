import { useState, useMemo, useCallback } from "react";

// ---------------- CHILD COMPONENT ----------------
const Child = React.memo(({ calculateSquare }) => {
  console.log("Child Rendered");

  return (
    <div className="p-4 bg-slate-700 rounded-xl mt-3">
      <p>Square of 5: {calculateSquare(5)}</p>
    </div>
  );
});

export default function App() {
  const [theme, setTheme] = useState("dark");

  const calculateSquare = useCallback((num) => {
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += num;
    }
    return result;
  }, []);

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">React Optimization Tasks 🚀</h1>

      {/* THEME BUTTON */}
      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="px-4 py-2 bg-indigo-500 rounded mb-6"
      >
        Toggle Theme
      </button>
       <div>
        <h2 className="text-xl font-semibold mb-2">
          Task 3 — useCallback
        </h2>

        <Child calculateSquare={calculateSquare} />
      </div>
    </div>
  );
}