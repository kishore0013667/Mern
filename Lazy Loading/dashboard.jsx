import Cart from "./Cart";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const { dispatch } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={() => dispatch({ type: "LOGOUT" })}>
        Logout
      </button>

      <Cart />
    </div>
  );
}

export default Dashboard;