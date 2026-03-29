// Login.jsx (updated)
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

if (
  storedUser?.email === form.email &&
  storedUser?.password === form.password
) {
  localStorage.setItem("isLoggedIn", true);
  navigate("/dashboard");
}