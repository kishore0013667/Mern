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

  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const arr = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100)
    );
    setNumbers(arr);
  };

  const sortedNumbers = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => a - b);
  },
[numbers]
);
 <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          Task 1 — useMemo (Sorting)
        </h2>

        <button
          onClick={generateNumbers}
          className="px-3 py-1 bg-green-500 rounded"
        >
          Generate Numbers
        </button>

        <p className="mt-3">Sorted: {sortedNumbers.join(", ")}</p>
      </div>
}