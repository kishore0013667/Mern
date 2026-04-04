import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);

  return state.isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;