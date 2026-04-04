import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: { name: "Kishore" },
    });
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;