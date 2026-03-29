import { useRef, useState } from "react";

function TypingTracker() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    setStatus("Typing...");

    // clear previous timer
    clearTimeout(timeoutRef.current);

    // set new timer
    timeoutRef.current = setTimeout(() => {
      setStatus("User stopped typing...");
    }, 2000);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>{status}</p>
    </div>
  );
}