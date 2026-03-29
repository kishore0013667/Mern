import { useRef } from "react";

function ClickCounter() {
const countRef = useRef(0);

const handleClick = () => {
    countRef.current++;
    console.log("Count:", countRef.current);
};

return <button onClick={handleClick}>Click Me</button>;
}