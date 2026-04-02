import { useState, useMemo, useCallback } from "react";

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


  const [search, setSearch] = useState("");

  const names = useMemo(() => {
    return Array.from({ length: 5000 }, (_, i) => `Student ${i}`);
  }, []);

  const filteredNames = useMemo(() => {
    console.log("Filtering...");
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, names]);

   <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          Task 2 — useMemo (Search)
        </h2>

        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded text-black"
          onChange={(e) => setSearch(e.target.value)}
        />

        <p className="mt-3">
          Results: {filteredNames.slice(0, 10).join(", ")}
        </p>
      </div>
}