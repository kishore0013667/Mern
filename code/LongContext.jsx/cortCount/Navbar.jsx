import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { count } = useContext(CartContext);
  return <h2>Cart: {count}</h2>;
}